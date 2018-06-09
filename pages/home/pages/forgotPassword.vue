<template>
    <div>
        <!-- 忘记密码 -->
        <div class="start forgot">
            <div class="lrFrame">
                <div class="logo">
                    <img src="@/assets/images/1911xt.png" alt="">
                </div>
                <div class="pwd">
                    <span>忘记密码</span>
                </div>
                <!-- 忘记密码 -->
                <el-form :model="fpData" status-icon :rules="formRules" ref="fpData" class="demo-ruleForm">
                    <el-form-item prop="phones">
                        <!-- 手机号 -->
                        <el-input v-model="fpData.phones" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="code" class="clearfix">
                        <!-- 验证码 -->
                        <el-input class="captcha" v-model.number="fpData.code" placeholder="请输入短信验证码"></el-input>
                        <div class="getCode" @click="handleGetCode">{{fpData.getCode}}</div>
                    </el-form-item>
                    <el-form-item prop="password">
                        <!-- 密码 -->
                        <el-input :type="pwdType" v-model="fpData.password" placeholder="8-16位密码，区分大小写，不能用空格"></el-input>
                        <span :class="{hidePwd:!showPwd,showPwd:showPwd}" @click="changePwd" alt=""></span>
                    </el-form-item>
                    <el-row>
                        <el-button @click.native="forgetPasswordAjax">提交</el-button>
                    </el-row>
                </el-form>
                <div class="otherLogin">返回登录</div>
            </div>
        </div>
    </div>
</template>

<script>
import { checkPhone, checkCode, checkPassord } from "~/lib/util/validatefn";
import { auth } from "~/lib/v1_sdk/index";
export default {
  data() {
    return {
      showPwd: false,
      pwdType: "password",
      fpData: {
        seconds: 60,
        phones: null,
        code: "",
        password:"",
        getCode: "获取验证码",
        captchaDisable: false,
        checked: false,
        types: 2
      },
      formRules: {
        password: [
          { required: true, message: "请输入账户密码1", trigger: "blur" },
          {
            type: "string",
            min: 8,
            max: 16,
            message: "密码长度为8-16位",
            trigger: "blur"
          }
        ],
        phones: [
          {
            validator: checkPhone,
            trigger: "blur"
          }
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ]
      },
      bindTelData: {
        tel: "",
        code: "",
        getCode: "获取验证码",
        seconds: 60,
        captchaDisable: false,
        checked: false,
        types: 1
      },
      registerData: {
        phones: "",
        passwords: "",
        types: 1,
        codes: "",
        checked: [],
        companyCodes: ""
      },
      captchaDisable: false
    };
  },
  methods: {
    changePwd() {
      if (this.showPwd) {
        this.showPwd = false;
        this.pwdType = "password";
      } else {
        this.showPwd = true;
        this.pwdType = "text";
      }
    },
    forgetPasswordAjax() {
      return new Promise((resolve, reject) => {
        auth.forgetPasswordAjax(this.fpData).then(response => {
          // resolve(true);
          this.$message({
              type: response.status === 0 ? "success" : "error",
              message: response.msg
            });
          if(response.status === 0){
            this.$router.push("/");
          }
        });
      });
    },
    async handleGetCode() {
      if (!this.captchaDisable) {
        return new Promise((resolve, reject) => {
          auth.smsCodes(this.fpData).then(response => {
            this.$message({
              type: "success",
              message: response.msg
            });
            this.captchaDisable = true;
            this.fpData.getCode = this.fpData.seconds + "秒后重新发送";
            let interval = setInterval(() => {
              if (this.fpData.seconds <= 0) {
                this.fpData.getCode = "获取验证码";
                this.fpData.seconds = 60;
                this.captchaDisable = false;
                clearInterval(interval);
              } else {
                this.fpData.getCode = --this.fpData.seconds + "秒后重新发送";
              }
            }, 1000);
          });
        });
      }
    }
  },
  mounted() {
    document.getElementsByClassName("headerBox")[0].style.display = "none";
    document.getElementsByClassName("footerBox")[0].style.display = "none";
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/home/forgotPassword";
</style>
