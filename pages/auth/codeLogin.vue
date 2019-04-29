<template>
  <!-- 账号密码登录 -->
  <div>
    <div v-if="mobileloginmsg">
      <el-form-item prop="phones">
        <el-input v-model.number="registerMobileData.phones" placeholder="请输入您的手机号" clearable auto-complete="off" type="text"  @change="phonesChange"></el-input>
      </el-form-item>
      <el-form-item prop="codes">
        <el-input class="captcha" v-model="registerMobileData.codes" placeholder="请输入短信验证码" auto-complete="off" type="text"></el-input>
        <el-button type="primary" :disabled="codeClick" class="getCode" @click="handleMobileGetCode('loginDatamobile')" style="line-height:0">{{bindTelData.getCode}}</el-button>
      </el-form-item>
    </div>
    <el-row class="clearfix">
      <div @click="forget">忘记密码?</div>
      <div class="mobile-login" style="float:left;" @click="mobilelogin">{{mobileloginmsg === true ? '账号密码登录' : '手机验证码登录'}}</div>
      <el-button class="codeLogin" :disabled="isloginClick" @click="signInsMobile('loginDatamobile')">登录</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  props: [
    "mobileloginmsg",
    "registerMobileData",
    "codeClick",
    "bindTelData",
    "isloginClick"
  ],
  methods: {
    phonesChange(val){
      this.$emit('phonesChange',val)
    },
    handleMobileGetCode(val) {
      this.$emit("handleMobileGetCode", val);
    },
    mobilelogin() {
      this.$emit("mobilelogin");
    },
    signInsMobile(val) {
      this.$emit("signInsMobile", val);
    },
    forget() {
      this.$emit("forget");
    }
  }
};
</script>

<style scoped>
</style>
