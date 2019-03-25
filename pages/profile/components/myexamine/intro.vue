<template>
  <!-- 认证资格介绍 -->
  <div class="examine-intro">
    <div class="examine-top">
      <span class="goBack" @click="handleBack">
        <i class="el-icon-arrow-left icon"></i>认证资格介绍
      </span>
    </div>
    <div class="examine-bottom">
      <div class="one">1911学堂学员在学院完成学习后，即可参加在线认证考试，考试通过者将获得国内外知名院校颁发的认证证书及1911学堂结业证书，证书均配有可在官方网站进行查询的唯一认证编码。</div>
      <div class="examineImg">
        <img src="http://static-image.1911edu.com/certification.png" alt>
      </div>
      <div class="ask">
        <p class="tit">1. 学时要求</p>
        <p>参与【认证考试】前，学员在对应学院的在线学习时间需累计满100学时。其中，只有学员在观看完所选课程的全部视频后，学时才会累加。</p>
      </div>
      <div class="ask">
        <p class="tit">2. 认证考试</p>
        <p>学员需在2小时内作答100道题，所有试题均为客观题（即单选题、多选题）。题目将从学员已完成课程的题库中随机抽取。</p>
      </div>
      <div class="ask">
        <p class="tit">3. 考试规则</p>
        <p>入学后学员有三次考试机会，系统将取其最好成绩作为最终成绩，并发放相应证书。</p>
      </div>
      <div class="ask">
        <p class="tit">4. 模拟考试</p>
        <p>学员在正式考试前，可享有2次模拟考试机会，了解试题形式及内容重点。模拟考试试题由学院题库中随机抽取的100道题组成，两次模拟考试试题不一样。</p>
      </div>
      <div class="ask">
        <p class="tit">5. 颁发证书</p>
        <p>学院将根据学员考试成绩颁发相应证书，分数大于60分，即可获得国内外知名院校颁发的认证证书及1911学堂结业证书。</p>
      </div>
      <div class="ask">
        <p class="tit">6. 有效期限</p>
        <p>学员须在入学后的12个月之内完成考试并申领证书，逾期将被视为自愿放弃考试和申请证书资格。</p>
      </div>

      <div class="examButton">
        <div class="examineBtn notExamine" v-if="showBtn"><span>参加考试</span><span class="alertText">{{alertText}}</span></div>
        <div class="examineBtn" v-else @click="examRules('1')">参加考试</div>
        <div class="examineBtn" v-if="showSimulationExam" @click="examRules('2')">模拟考试</div>
        <div class="examineBtn notExamine" v-else>模拟考试
          <span class="alertText">您已用尽2次模拟考试机会，不能再参加模拟考试。</span>
        </div>
        <!-- <p class="text">{{alertText}}</p> -->
      </div>
    </div>
    <div class="examRules" v-if="showExamRules">
      <div class="rulesInfo" v-loading="examRuleLoading">
        <i class="el-icon-close" @click="closeRules"></i>
        <h4>温馨提示</h4>
        <p>
          <span class="left">您参加考试的学院：</span>
          <span class="right">{{examRuleInfo.title}}</span>
        </p>
        <p>
          <span class="left">考试次数：</span>
          <span class="right">第{{examRuleInfo.record_number}}次</span>
        </p>
        <p>
          <span class="left">考试题数：</span>
          <span class="right">{{examRuleInfo.question_number}}道</span>
        </p>
        <p>
          <span class="left">合格标准：</span>
          <span class="right">{{examRuleInfo.score}}分</span>
        </p>
        <p>
          <span class="left">考试时间：</span>
          <span class="right">{{examRuleInfo.exam_time/60}}分钟</span>
        </p>
        <p class="tip">点击确定开始考试，并开始倒计时！</p>
        <div class="btmBtn">
          <span @click="closeRules">取消</span>
          <span @click="handleExamine">确定</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { examine } from "~/lib/v1_sdk/index";
import { message, matchSplits, getNet, IEPopup } from "@/lib/util/helper";
export default {
  props: ["vipID"],
  data () {
    return {
      alertText: "",
      showBtn: true,
      showSimulationExam: false,
      pageData: {
        id: "",
        name: ""
      },
      vipForm: {
        vipId: "",
        type: 1
      },
      examRuleLoading: true,
      examRuleInfo: "",
      showExamRules: false,
      responseData: { type: true, res: "" }
    };
  },
  methods: {
    //  回到VIP列表页
    handleBack () {
      this.pageData.name = "list";
      this.$bus.$emit("whichShow", this.pageData);
    },
    // 考试规则弹框
    examRules (type) {
      IEPopup("pane-tab-tenth", "-ms-page", 0);
      this.vipForm.vipId = this.vipID;
      this.vipForm.type = type;
      this.examRuleLoading = true;
      examine.examRuleInfo(this.vipForm).then(response => {
        if (response.status == 0) {
          this.examRuleLoading = false;
          this.examRuleInfo = response.data.examRuleInfo;
          this.showExamRules = true;
        } else {
          this.$message({
            showClose: true,
            message: response.msg,
            type: "error",
            duration: 6000
          });
        }
      });
    },
    // 关闭规则弹框
    closeRules () {
      IEPopup("pane-tab-tenth", "relative", 1);

      this.showExamRules = false;
    },
    // 开始考试
    handleExamine () {
      this.pageData.id = this.vipID;
      examine.createExamRecordQuestion(this.vipForm).then(response => {
        if (response.status == 100201) {
          this.pageData.name = "info";
          this.$bus.$emit("whichShow", this.pageData);
        } else if (response.status == 0) {
          if (this.vipForm.type == "1") {
            this.$router.push(
              "/profile/components/myexamine/answerQuestion?id=" +
              response.data.exam_record_id
            );
          } else {
            this.$router.push(
              "/profile/components/myexamine/simulationExam?id=" +
              response.data.exam_record_id
            );
          }
        } else {
          this.$message({
            showClose: true,
            message: response.msg,
            type: "error",
            duration: 6000
          });
        }
      });
    },
    //验证考试权限
    validateExamPrivilege () {
      this.vipForm.vipId = this.vipID;
      this.vipForm.type = "1";
      examine.validateExamPrivilege(this.vipForm).then(response => {
        if (response.status == 0) {
          this.showBtn = false;
        } else if (response.status == 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else {
          if (response.status == 100201) {
            this.showBtn = false;
          } else {
            this.showBtn = true;
            this.alertText = response.msg;
          }
        }
      });
    },
    // 验证模拟考试权限
    validateSimulationExam () {
      this.vipForm.vipId = this.vipID;
      this.vipForm.type = "2";
      examine.validateExamPrivilege(this.vipForm).then(response => {
        if (response.status == 0) {
          this.showSimulationExam = true;
        } else {
          this.showSimulationExam = false;
        }
      });
    }
  },
  mounted () {
    this.validateExamPrivilege();
    this.validateSimulationExam();
  }
};
</script>