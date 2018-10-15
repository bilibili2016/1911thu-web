<template>
    <!-- 微信登录 -->
    <div>
        <h4 class="clearfix">
            <span>绑定手机</span>
        </h4>
        <el-form-item prop="tel">
            <el-input v-model.number="bindTelData.phones" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
            <el-input class="captcha" v-model.number="bindTelData.codes" placeholder="请输入验证码"></el-input>
            <div class="getCode" @click="verifyRgTelWX">{{bindTelData.getCode}}</div>
        </el-form-item>
        <el-row>
            <el-button @click.native="loginWechat(bindTelData)">提交</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
  props: [''],
  data() {
    return {
      bindTelData: {
        phones: '',
        codes: '',
        getCode: '获取验证码',
        seconds: 30,
        types: 1,
        openid: null,
        companyCodes: '',
        captchaDisable: false,
        exist: false,
        checked: false
      }
    }
  },
  methods: {
    verifyRgTelWX() {
      this.$emit('verifyRgTelWX')
    },
    loginWechat(bindTelData) {
      this.$emit('loginWechat')
    }
  }
}
</script>

<style scoped>
</style>
