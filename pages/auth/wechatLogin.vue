<template>
  <!-- 微信登录 -->
  <div>
    <h4 class="clearfix">
      <span>绑定手机账号</span>
    </h4>
    <el-form-item prop="tel">
      <el-input v-model.number="bindTelData.phones" placeholder="请输入您的手机号"></el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-input class="captcha" v-model.number="bindTelData.codes" placeholder="请输入短信验证码"></el-input>
      <div class="getCode" @click="verifyRgTelWX">{{bindTelData.getCode}}</div>
    </el-form-item>
    <el-form-item prop="identity" class="identityForm">
      <div class="identity">您的身份：</div>
      <el-radio-group v-model="bindTelData.identity" class="radioGroup">
        <el-radio label="0">学生</el-radio>
        <el-radio label="1">老师</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-row>
      <el-button @click.native="loginWechat(bindTelData)">绑定</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['bindTelData'],
  methods: {
    verifyRgTelWX () {
      if (this.bindTelData.bindType == 1) {
        this.$emit('verifyRgTelWX')
      } else {
        this.$emit('validationTel')
      }
    },
    loginWechat (bindTelData) {
      this.$emit('loginWechat')
    }
  }
}
</script>

<style scoped>
</style>
