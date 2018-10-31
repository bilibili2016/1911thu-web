<template>
  <!-- 审核中 -->
  <div class="examination">
    <img src="@/assets/images/reviewing.png" alt="">
    <p>本次考试分数：<i>{{testPaper.answerScoreSum}}</i>分，等级：<i>{{testPaper.scoreRank}}</i></p>
    <p>您已参加过<i>{{number}}</i>次考试,剩余考试次数<i>{{testPaper.surplusFrequency}}</i>次</p>
    <div class="applyBtn">
      <span class="again" @click="examination()" v-if="testPaper.surplusFrequency!=0">再次答题</span>
      <span class="apply" @click="applyFor" v-if="testPaper.doYouPass">申请认证</span>
      <span class="noQualification" v-if="testPaper.surplusFrequency==0">不具备认证资格</span>
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
      examForm: {
        examId: ''
      },

      testPaper: {},
      vipForm: {
        vipId: ''
      },
      number: 0
    }
  },
  methods: {
    // 再次答题
    examination() {
      if (persistStore.get('token')) {
        if (this.vipForm.vipId) {
          examine.createExamRecordQuestion(this.vipForm).then(response => {
            if (response.status == 0) {
              this.$router.push(
                '/profile/components/myexamine/answerQuestion?id=' +
                  response.data.exam_record_id
              )
            } else {
              message(this, 'error', response.msg)
            }
          })
        } else {
          message(this, 'error', '无法获取到考试信息！')
        }
      } else {
        message(this, 'error', '请先登录！')
        this.$router.push('/')
        this.$bus.$emit('loginShow', true)
      }
    },
    // 申请认证
    applyFor() {
      this.$router.push(
        '/profile/components/myexamine/applicantCertificate?id=' +
          this.examForm.examId +
          '&vipID=' +
          this.vipForm.vipId
      )
    },
    getPaperDetail() {
      examine.submitTestPaper(this.examForm).then(response => {
        if (response.status == 0) {
          this.testPaper = response.data
          this.number = 3 - response.data.surplusFrequency
          this.vipForm.vipId = response.data.vip_id
          // alreadyAnswerTotal: 4, notAnswerTotal: 0, doYouPass: true, answerScoreSum: "75", answerErrorTotal: 1
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
        this.getPaperDetail()
      } else {
        this.$router.push('/profile')
      }
    } else {
      this.$router.push('/')
    }
  }
}
</script>


<style scoped lang="scss">
@import '~assets/style/profile/submitPapers.scss';
</style>