<template>
  <!-- 审核中 -->
  <div class="examination">
    <img src="@/assets/images/reviewing.png" alt="">
    <p>本次考试分数：<i>{{testPaper.answerScoreSum}}</i>分，等级：<i>优秀</i></p>
    <p>您已参加过<i>98</i>次考,剩余考试次数<i>98</i>考</p>
    <div class="applyBtn">
      <span class="again" @click="examination">再次答题</span>
      <span class="apply" @click="applyFor">申请认证</span>
      <span class="noQualification">不具备认证资格</span>
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
      testPaper: {}
    }
  },
  methods: {
    // 再次答题
    examination() {},
    // 申请认证
    applyFor() {},
    getPaperDetail() {
      examine.submitTestPaper(this.examForm).then(response => {
        if (response.status == 0) {
          this.testPaper = response.data
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