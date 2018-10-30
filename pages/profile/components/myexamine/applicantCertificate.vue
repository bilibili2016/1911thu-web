<template>
  <!-- 审核中 -->
  <div class="applicant">
    <p>您已参加过1次考试，剩余考试次数<i>2</i>次。最高成绩<i>2</i>分，等级<i>优秀</i>，我们会以您的最高成绩颁发证书！证书下发后，您可以在个人中心查看电子版证书，也可申请纸质证书。</p>
    <el-checkbox label="" @click="handleserviceClick(service)">需要纸质证书</el-checkbox>
    <div class="conList clearfix">
      <div class="fl">收货人：</div>
      <div class="fr">
        <el-input v-model="perfileForm.name" placeholder="请输入收货人姓名"></el-input>
      </div>
    </div>
    <div class="conList clearfix">
      <div class="fl">手机号：</div>
      <div class="fr">
        <el-input v-model="perfileForm.tel" placeholder="请输入请输入手机号"></el-input>
      </div>
    </div>
    <div class="conList clearfix">
      <div class="fl">详细地址：</div>
      <div class="fr">
        <el-input v-model="perfileForm.add" placeholder="请输入详细地址"></el-input>
      </div>
    </div>
    <div class="applicantBtn">
      <span>提交</span>
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
      perfileForm: {
        name: '',
        tel: '',
        add: ''
      }
    }
  },
  methods: {
    handleserviceClick() {}
  },
  mounted() {
    if (persistStore.get('token')) {
      if (window.location.search) {
        this.examForm.examId = matchSplits('id')
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
@import '~assets/style/profile/applicantCertificate.scss';
</style>