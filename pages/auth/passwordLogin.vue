<template>
  <!-- 账号密码登录 -->
  <div>
    <div>
      <el-form-item prop="phonenum">
        <el-input v-model.number="loginData.phonenum" auto-complete="off" placeholder="请输入您的手机号/学号" clearable type="text" @change="phonesChange"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="loginData.pwdType" v-model="loginData.password" auto-complete="off" placeholder="8-16位密码，包含字母、数字、标点符号等"></el-input>
        <span :class="{hidePwd:!loginData.showPwd,showPwd:loginData.showPwd}" @click="changePwd" alt=""></span>
      </el-form-item>
    </div>
    <el-row class="clearfix">
      <div @click="forget">忘记密码?</div>
      <div class="mobile-login" style="float:left;" @click="mobilelogin">{{mobileloginmsg === true ? '账号密码登录' : '手机验证码登录'}}</div>
      <el-button class="firstLogin" :disabled="isloginClick" @click="signIns('loginData')">登录</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['loginData', 'mobileloginmsg', 'isloginClick'],
  methods: {
     phonesChange(val){
      this.$emit('phonesChange',val)
    },
    changePwd() {
      this.$emit('changePwd')
    },
    forget() {
      this.$emit('forget')
    },
    mobilelogin() {
      this.$emit('mobilelogin')
    },
    signIns(val) {
      this.$emit('signIns', val)
    }
  }
}
</script>

<style scoped>
</style>
