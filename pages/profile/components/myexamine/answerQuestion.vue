<template>
    <div class="exam clearfix">
        <div class="examTitle">
            <span>干部网络学院考试认证</span>
            <span>剩余时间：<i>108</i>分<i>108</i>秒</span>
        </div>
        <div class="examLeft fl">
            <div class="problem ">
                <h3 v-if="quesionCurrent.type==1">单选题</h3>
                <h3 v-if="quesionCurrent.type==2">多选题</h3>
                <h4>{{quesionCurrent.number}}.{{quesionCurrent.title}}</h4>
                <p v-if="showResult" v-for="(option,index) in selectArr" :key="index" :class="{bordColor: selectIndex==option.id}">{{option.question}}</p>
                <!-- <p v-else v-for="option in selectArr" :key="option.id" @click="selectOption(option)" :class="{bordColor: selectIndex==option.id}">{{option.question}}</p> -->
            </div>
            <div class="result" v-if="showResult">
                <p class="success" v-if="quesionCurrent.is_right==1"><i class="el-icon-success"></i>答对啦！</p>
                <p class="error" v-if="quesionCurrent.is_right==2"><i class="el-icon-error"></i>答错啦！</p>
                <p class="analysis">解析：2018福建公务员考试即将到来，在最后关头考生们一定不要过于松懈，要循序渐进的调整状态，心理、饮食、作息都不可忽视。为便于考生及时知晓成绩，中公教育为考生做出专业的解读。</p>
            </div>
            <div class="commitBtn">
                <span @click="answer" v-if="quesionCurrent.is_right==0">提交</span>
                <span @click="nextAnswer" v-else>下一题</span>
            </div>
        </div>
        <div class="examRight fr">
            <div class="progress">
                <h3>当前进度</h3>
                <p>{{answerNum}} / {{quesionNum}}</p>
                <el-progress :stroke-width="10" color="#3FBABE" :show-text="false" :percentage="answerNum"></el-progress>
            </div>
            <div class="displayCard">
                <h3>答题卡</h3>
                <ul class="cardList">
                    <li v-for="(li,index) in quesionCard" :key="index" @click="selectQuestion(li)" :class="[{bgColor: selectItem==li.id},{success:li.is_right==1&&selectItem!=li.id},{error:li.is_right==2&&selectItem!=li.id}]">{{li.number}}</li>
                </ul>
            </div>
            <div class="commitBtn">
                <span @click="commitExam">交卷</span>
            </div>
        </div>
        <div class="shadow" v-show="showShadow">
            <div class="popup" v-if="showShadow">
                <i class="el-icon-close" @click="closeChadow"></i>
                <!-- cry.png smile.png -->
                <p class="grade smile" v-if="qualified">
                    <img src="~assets/images/smile.png" class="fl" alt="">
                    <span>85分</span>
                    <span>成绩合格！</span>
                </p>
                <p class="grade cry" v-else>
                    <img src="~assets/images/cry.png" class="fl" alt="">
                    <span>58分</span>
                    <span>成绩不合格！</span>
                </p>
                <p class="clearfix subjectNumber">
                    <span class="fl">未答题数：<i>3</i></span>
                    <span class="fr">错题数：<i>3</i></span>
                </p>
                <div class="sdwBtn">
                    <span class="fl" @click="examination">现在交卷</span>
                    <span class="fr" @click="closeChadow">继续答题</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { examine } from '~/lib/v1_sdk/index'
import { message, matchSplits, getNet } from '@/lib/util/helper'
export default {
  data() {
    return {
      selectIndex: 0, //选项  当前选项选中项
      selectItem: 0, //问题   当前选项选中项
      qualified: false,
      answerForm: {
        id: '',
        selectId: ''
      }, //提交当前问题
      examForm: {
        examId: '',
        quesionId: ''
      }, // 考试需要
      showShadow: false,
      socket: '',
      interval: '',
      showResult: false,
      quesionCurrent: {}, //题
      quesionCard: [], //答题卡
      quesionNext: {}, // 下一题
      quesionNum: 0,
      answerNum: 0,
      selectArr: [
        {
          id: '1',
          question: 'A 节能环保;'
        },
        {
          id: '2',
          question:
            'B 节能环保节能环保节能环保节能环保节能环保节能环保节能环保节能环保节能环保节 节能环保节能环保节能环保;'
        },
        {
          id: '3',
          question: 'C 节能环保;'
        },
        {
          id: '4',
          question: 'D 环保节能;'
        }
      ]
    }
  },
  methods: {
    //   选择选项
    selectOption(option) {
      // 当前题选中项的id
      this.selectIndex = option.id
      // 选项id
      this.answerForm.selectId = option.id
    },
    // 切换问题
    selectQuestion(item) {
      this.examForm.quesionId = item.id
      this.questionsDetail()
    },
    // 提交当前问题
    answer() {
      // this.answerForm  选项id   问题id
    },
    // 下一题
    nextAnswer() {
      if (this.quesionNext.id) {
        this.examForm.quesionId = this.quesionNext.id
        this.questionsDetail()
      } else {
        message(this, 'error', '没有下一题啦！')
      }
    },
    // 提交考试
    commitExam() {
      this.showShadow = true
    },
    // 交卷
    examination() {
      console.log(getNet())
    },
    // 关闭弹框
    closeChadow() {
      this.showShadow = false
    },
    // socket通讯
    buildSocket() {
      this.socket = new io(getNet())
      // 连接socket
      this.socket.on('connect', function() {
        that.socket.emit('login', persistStore.get('token'))
      })
      // 支付推送来消息时
      this.socket.on('new_msg', function(msg) {
        //支付成功
        if (msg.pay_status == '0') {
          that.$bus.$emit('payResult', true)
        }
        //支付失败
        if (msg.pay_status == 100100) {
          that.$bus.$emit('payResult', false)
          return false
        }
      })
      // 断线重连
      this.socket.on('reconnect', function(msg) {})
    },
    // 考试时间倒计时
    time() {
      this.interval = setInterval(() => {
        /**
         * socket.emit()6个参数
         * 1、watchRecordingTime固定参数
         * 2、课程ID
         * 3、小节ID
         * 4、当前播放时间
         * 5、项目播放的时候为项目ID，课程播放为空
         * 6、type:1是课程，2是项目
         */
        this.socket.emit(
          'watchRecordingTime',
          this.playerForm.curriculumId,
          this.playerForm.catalogId,
          playTime,
          this.projectForm.ids,
          2
        )
      })
    },
    questionsDetail() {
      examine.questionsDetail(this.examForm).then(response => {
        console.log(response)
        if (response.status == 0) {
          this.quesionCurrent = response.data.quesionCurrent
          this.quesionCard = response.data.quesionList
          this.quesionNum = response.data.quesionList.length
          this.answerNum = response.data.answerTotal
          this.selectItem = this.quesionCurrent.id
          if (response.data.is_right != 0) {
            this.showResult = true
            this.selectIndex = response.data.user_key
          } else {
            this.showResult = false
          }
        } else {
          message(this, 'error', response.msg)
        }
      })
    }
  },
  mounted() {
    if (persistStore.get('token')) {
      if (window.location.search) {
        this.examForm.examId = matchSplits('id')
        this.questionsDetail()
      } else {
        this.$router.push('/profile')
      }
    } else {
      this.$router.push('/')
    }
  },
  // 进入路由隐藏header和footer
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('headerFooterHide')
    })
  },
  // 出路由显示header和footer
  beforeRouteLeave(to, from, next) {
    this.$bus.$emit('headerFooterShow')
    next()
  }
}
</script>

<style scoped>
</style>