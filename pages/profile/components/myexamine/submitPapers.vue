<template>
  <!-- 审核中 -->
  <div class="examination">
    <img src="@/assets/images/reviewing.png" alt="">
    <p>本次考试分数：<i>98</i>分，等级：<i>优秀</i></p>
    <p>您已参加过<i>98</i>次考,剩余考试次数<i>98</i>考</p>
    <div class="applyBtn">
      <span class="again" @click="examination">再次答题</span>
      <span class="apply" @click="closeChadow">申请认证</span>
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
      }
    }
  },
  methods: {
    getPaperDetail() {}
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