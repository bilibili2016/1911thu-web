<template>
  <div>
    <div class="exam clearfix">
      <div class="examTitle clearfix">
        <div class="title-left">
          <span class="title">{{title}}</span>
        </div>
        <div class="title-right">
          <span class="overtime">
            剩余时间：
            <i>{{minute}}</i>分
            <i>{{second}}</i>秒
          </span>
        </div>
      </div>
      <div class="examLeft fl">
        <div class="problem">
          <h3 v-if="questionCurrent.type==1">单选题</h3>
          <h3 v-if="questionCurrent.type==2">多选题</h3>
          <h4>{{questionCurrent.number}}.{{questionCurrent.title}}</h4>
          <div v-if="questionCurrent.type==1">
            <el-radio v-for="(option,index) in selectArr" :key="index" v-model="selectRadio" :label="option.option_key" :disabled="showResult" @change="shangeRadio">{{option.option_key}}.{{option.option_value}}</el-radio>
          </div>

          <el-checkbox-group v-if="questionCurrent.type==2" v-model="selectIndex" @change="selectOption">
            <el-checkbox v-for="(option,index) in selectArr" :key="index" :label="option.option_key" :disabled="showResult">{{option.option_key}}.{{option.option_value}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="result">
          <p class="success" v-if="showResult&&questionCurrent.is_right==1">
            <i class="el-icon-success"></i>答对啦！
          </p>
          <p class="error" v-if="showResult&&questionCurrent.is_right==2">
            <i class="el-icon-error"></i>答错啦！
          </p>
          <p class="analysis">解析：</p>
          <p class="countTime" v-if="isShowTime">
            自动跳转到下一题倒计时：
            <span>{{showTime}}s</span>
          </p>
        </div>
        <div class="commitBtn">
          <span class="preAnswer" :class="{unclick:JSON.stringify(questionPre)=='{}',btnClick:JSON.stringify(questionPre)!='{}'}" @click="preAnswer">上一题</span>
          <span class="nextAnswer" :class="{unclick:JSON.stringify(questionNext)=='{}',btnClick:JSON.stringify(questionNext)!='{}'}" @click="nextAnswer">下一题</span>

          <div class="btn-submit" v-if="answerNum == questionNum"></div>
          <div class="btn-submit" v-else>
            <span v-if="isOver||questionCurrent.is_right!=0" class="isOver">提交</span>
            <!-- :class="{disable:questionCurrent.is_right!=0}" -->
            <span v-else @click="answer">提交</span>
          </div>
        </div>
      </div>
      <div class="examRight fr">
        <div class="progress">
          <h3>当前进度</h3>
          <p>{{answerNum}} / {{questionNum}}</p>
          <el-progress :stroke-width="10" color="#3FBABE" :show-text="false" :percentage="percent"></el-progress>
        </div>
        <div class="displayCard">
          <h3>答题卡</h3>
          <ul class="cardList">
            <li v-for="(li,index) in questionCard" :key="index" @click="selectQuestion(li)" :class="[{bgColor: selectItem==li.id},{success:li.is_right==1&&selectItem!=li.id},{error:li.is_right==2&&selectItem!=li.id}]">{{li.number}}</li>
          </ul>
        </div>
        <div class="commitBtn">
          <span v-if="isOver" class="isOver">交卷</span>
          <span v-else @click="commitExam">交卷</span>
        </div>
      </div>
      <div class="shadow" v-if="showShadow">
        <div class="popup" v-if="showShadow">
          <i class="el-icon-close" v-if="!isOver" @click="closeChadow"></i>
          <p class="grade smile" v-if="testPaper.doYouPass">
            <img src="~assets/images/smile.png" class="fl" alt>
            <span>{{testPaper.answerScoreSum}}分</span>
            <span>成绩合格！</span>
          </p>
          <p class="grade cry" v-else>
            <img src="~assets/images/cry.png" class="fl" alt>
            <span>{{testPaper.answerScoreSum}}分</span>
            <span>成绩不合格！</span>
          </p>
          <p class="clearfix subjectNumber">
            <span class="fl">
              未答题数：
              <i>{{testPaper.notAnswerTotal}}</i>
            </span>
            <span class="fr">
              错题数：
              <i>{{testPaper.answerErrorTotal}}</i>
            </span>
          </p>
          <p v-if="isOver" class="noTime">考试时间已到，请交卷！</p>
          <div class="sdwBtn">
            <span class="gonow" @click="examination">现在交卷</span>
            <span class="continue" v-if="testPaper.notAnswerTotal>0&&!isOver" @click="closeChadow">继续答题</span>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-if="showDialog" :dialog="dialogInfo" @closeDialog="closeDialog"></v-dialog>

  </div>
</template>

<script>
import { mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { examine } from "~/lib/v1_sdk/index";
import { message, matchSplits, setTitle } from "@/lib/util/helper";
import Dialog from "@/components/common/Dialog.vue";

export default {
  data () {
    return {
      showDialog: false,
      dialogInfo: {},
      isOver: false,
      title: "",
      selectRadio: "",
      selectIndex: [], // 选择的问题选项答案
      selectItem: 0, // 第一道题 当前选项选中项
      qualified: false,
      submitForm: {
        recordId: ""
      }, // 交卷确认信息
      examForm: {
        examId: "",
        questionId: "",
        selectId: []
      }, // 考试需要
      showShadow: false,
      socket: "",
      interval: "",
      showResult: false,
      questionCurrent: {}, //题
      questionCard: [], //答题卡
      questionPre: {}, // 上一题
      questionNext: {}, // 下一题
      questionNum: 0,
      answerNum: 0,
      percent: 0,
      selectArr: [], // 返回的问题选项
      testPaper: {},
      minute: 0,
      second: 0,
      gidForm: {
        gids: ""
      },
      isShowTime: false,
      showTime: 5,
      timer: ""
    };
  },
  components: {
    "v-dialog": Dialog
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    // 选择选项
    shangeRadio (val) {
      this.examForm.selectId = [];
      this.examForm.selectId.push(val);
    },
    // 选择选项
    selectOption (option) {
      this.examForm.selectId = this.selectIndex;
    },
    // 切换问题
    selectQuestion (item) {
      this.closeCountDown();
      this.examForm.questionId = item.id;
      this.changeToken();
    },
    // 提交当前问题
    answer () {
      if (this.examForm.selectId.length == 0) {
        message(this, "error", "请先选择问题答案");
        return false;
      }

      if (
        persistStore.get("token") != "" &&
        persistStore.get("examToken") === persistStore.get("token")
      ) {
        if (this.questionCurrent.is_right != 0) {
          return false;
        }
        this.examForm.questionId = this.questionCurrent.id;
        examine.addAnswer(this.examForm).then(response => {
          if (response.status == 0) {
            this.setAssignment(response);
            if (this.questionCurrent.number < this.questionNum) {
              if (JSON.stringify(response.data.questionNext) != "{}") {
                this.countDown();
              }
            }
          } else {
            message(this, "error", response.msg);
          }
        });
      } else {
        this.showDialog = true;
        this.dialogInfo.info = "您已登录其他账号，无法继续考试！";
      }
    },
    //关闭dialog提示框
    closeDialog () {
      this.showDialog = false;
      this.$router.push("/");
    },
    // 倒计时跳转下一题
    countDown () {
      this.isShowTime = true;
      this.timer = setInterval(() => {
        this.showTime < 1 ? this.nextAnswer() : this.showTime--;
      }, 1000);
    },
    // 关闭倒计时
    closeCountDown () {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.isShowTime = false;
      this.showTime = 5;
    },
    // 上一题
    preAnswer () {
      this.closeCountDown();
      if (this.questionPre != [] && this.questionPre.id) {
        this.examForm.questionId = this.questionPre.id;
        this.changeToken();
      } else {
        message(this, "error", "已经是第一题了!");
      }
    },
    // 下一题
    nextAnswer () {
      this.closeCountDown();
      if (JSON.stringify(this.questionNext) != "{}" && this.questionNext.id) {
        this.examForm.questionId = this.questionNext.id;
        this.changeToken();
      } else {
        message(this, "error", "已经是最后一题了!");
      }
    },
    // 交卷确认信息
    commitExam () {
      this.closeCountDown();
      if (
        persistStore.get("token") != "" &&
        persistStore.get("examToken") === persistStore.get("token")
      ) {
        examine.submitTestPaper(this.examForm).then(response => {
          if (response.status == 0) {
            this.testPaper = response.data;
            this.showShadow = true;
          } else {
            message(this, "error", response.msg);
          }
        });
      } else {
        this.showDialog = true;
        this.dialogInfo.info = "您已登录其他账号，无法继续考试！";
      }
    },
    // 提交考试
    examination () {
      clearInterval(this.interval);
      examine.addSubmitTestPaper(this.examForm).then(response => {
        if (response.status == 0) {
          message(this, "success", "提交成功！");
          this.$router.push({
            path: "/profile/components/myexamine/submitPapers",
            query: {
              id: this.examForm.examId
            }
          });
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    // 关闭弹框
    closeChadow () {
      this.showShadow = false;
    },
    // 转换时间格式
    changeTime (time) {
      if (time <= 0) {
        clearInterval(this.interval);
        this.commitExam();
        this.isOver = true;
        return false;
      }
      this.minute = parseInt(time / 60);
      this.second = time % 60;
      this.interval = setInterval(() => {
        this.second > 0
          ? this.second--
          : this.minute > 0
            ? (this.minute-- , (this.second = 59))
            : (this.minute = 0);
        if (this.second == 0 && this.minute == 0) {
          clearInterval(this.interval);
          this.commitExam();
          this.isOver = true;
        }
      }, 1000);
    },
    // 获取试题
    questionsDetail () {
      examine.questionsDetail(this.examForm).then(response => {
        if (response.status == 0) {
          this.setAssignment(response);
        } else {
          this.goProfile("tab-tenth");
          this.$bus.$emit("whichShow", "list");
          message(this, "error", response.msg);
        }
      });
    },
    // 跳转个人中心
    goProfile (item) {
      this.gidForm.gids = item;
      this.setGid(this.gidForm);
      this.$router.push("/profile");
    },
    // 赋值
    setAssignment (response) {
      this.title = response.data.exam_name;
      this.questionCurrent = response.data.questionCurrent;
      this.selectArr = response.data.questionCurrent.option;
      this.questionCard = response.data.questionList;
      this.questionNum = response.data.questionList.length;
      this.answerNum = response.data.answerTotal;
      this.percent =
        (response.data.answerTotal / response.data.questionList.length) * 100;
      this.selectItem = this.questionCurrent.id;
      if (response.data.questionCurrent.is_right != 0) {
        this.showResult = true;
        if (response.data.questionCurrent.type == 1) {
          this.selectRadio = response.data.questionCurrent.user_key[0];
        } else {
          this.selectIndex = response.data.questionCurrent.user_key;
        }
      } else {
        this.examForm.selectId = [];
        this.selectIndex = [];
        this.selectRadio = "";
        this.showResult = false;
      }
      this.questionNext = response.data.questionNext;
      this.questionPre = response.data.questionPrevious;
      clearInterval(this.interval);
      this.changeTime(response.data.surplus_time);
    },
    // 登录账号被替换
    changeToken () {
      if (
        persistStore.get("token") != "" &&
        persistStore.get("examToken") === persistStore.get("token")
      ) {
        this.questionsDetail();
      } else {
        this.showDialog = true;
        this.dialogInfo.info = "您已登录其他账号，无法继续考试！";
      }
    }
  },
  mounted () {
    setTitle("考试中心-1911学堂");

    if (window.location.search) {
      this.examForm.examId = matchSplits("id");
      // 验证token是否有效
      persistStore.get("examToken")
        ? this.changeToken()
        : (persistStore.set("examToken", persistStore.get("token")),
          this.questionsDetail());
      if (this.interval) {
        clearInterval(this.interval);
      }
    } else {
      this.$router.push("/profile");
      message(this, "error", "获取考试信息错误，请刷新后重试！");
    }
  },
  // 进入路由隐藏header和footer
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.closeCountDown();
      vm.$bus.$emit("headerFooterHide");
    });
  },
  // 出路由显示header和footer
  beforeRouteLeave (to, from, next) {
    this.closeCountDown();
    this.$bus.$emit("headerFooterShow");
    persistStore.set("examToken", "");
    next();
  }
};
</script>

<style scoped>
</style>