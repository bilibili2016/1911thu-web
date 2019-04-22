<template>
  <!-- 忘记密码 -->
  <div class="start forgot">
    <div class="lrFrame">
      <div class="logo" @click="goHome">
        <img src="https://static-image.1911edu.com/1911-logo-bigA.png" alt="">
      </div>
      <div class="pwd">
        <span>忘记密码</span>
      </div>
      <!-- 忘记密码 -->
      <el-form :model="fpData" status-icon :rules="formRules" ref="fpData" class="demo-ruleForm">
        <el-form-item prop="phones">
          <!-- 手机号 -->
          <el-input v-model="fpData.phones" placeholder="请输入您的手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="clearfix">
          <!-- 验证码 -->
          <el-input class="captcha" v-model.number="fpData.code" placeholder="请输入短信验证码"></el-input>
          <div class="getCode" @click="verifyRgTel">{{fpData.getCode}}</div>
        </el-form-item>
        <el-form-item prop="password">
          <input :type="pwdType" v-model="fpData.password" class="hideInput" autocomplete='new-password'>
          <!-- 密码 -->
          <el-input :type="pwdType" v-model="fpData.password" placeholder="8-16位密码，包含字母、数字、标点符号等"></el-input>
          <span :class="{hidePwdEye:!showPwd,showPwdEye:showPwd}" @click="changePwd" alt=""></span>
        </el-form-item>
        <el-row>
          <el-button @click.native="forgetPassword()">提交</el-button>
        </el-row>
      </el-form>
      <div class="returnLogin" @click="otherLogin">返回登录 <i class="otherLoginIcon"></i></div>
    </div>
  </div>
</template>

<script>
import {
  checkPhone,
  checkCode,
  checkPassord,
  checkRegisterPhone
} from "~/lib/util/validatefn";
import { validatePhone } from "~/lib/util/validate";
import { mapActions } from "vuex";
import { auth } from "~/lib/v1_sdk/index";
import { encryption, message, Trim } from "~/lib/util/helper";
export default {
  data () {
    return {
      showPwd: false,
      pwdType: "password",
      position: {
        tel: "",
        code: "",
        pwd: ""
      },
      fpData: {
        seconds: 30,
        phones: null,
        code: "",
        password: "",
        ectpwd: "",
        getCode: "获取验证码",
        captchaDisable: false,
        checked: false,
        types: 2
      },
      formRules: {
        password: [
          { required: true, message: "请输入您新设置的密码", trigger: "blur" },
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
            message: "请输入验证码",
            trigger: "blur"
          }
        ]
      },
      bindTelData: {
        tel: "",
        code: "",
        getCode: "获取验证码",
        seconds: 30,
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
    ...mapActions("auth", ["forgetPasswordAjax"]),
    changePwd () {
      if (this.showPwd) {
        this.showPwd = false;
        this.pwdType = "password";
      } else {
        this.showPwd = true;
        this.pwdType = "text";
      }
    },
    // 验证手机号是否存在
    verifyRgTel () {
      if (!this.captchaDisable) {
        auth.verifyPhone(this.fpData).then(response => {
          if (response.status === 0) {
            message(this, "error", "您的手机号还未注册！");
            this.bindTelData.captchaDisable = true;
          } else if (response.status === 100100) {
            message(this, "error", response.msg);
            this.bindTelData.captchaDisable = true;
          } else {
            if (this.bindTelData.seconds === 30) {
              this.bindTelData.captchaDisable = false;
              this.handleGetCode(this.registerData);
            }
          }
        });
      }
    },
    forgetPassword () {
      this.fpData.code = String(this.fpData.code);
      this.fpData.password = String(this.fpData.password);
      if (!validatePhone(this.fpData.phones)) {
        message(this, "error", "请输入有效的手机号！");
        return false;
      }
      if (Trim(this.fpData.code) == "") {
        message(this, "error", "请输入短信验证码");
        return false;
      }
      if (
        Trim(this.fpData.password).length < 8 ||
        Trim(this.fpData.password).length > 16
      ) {
        message(this, "error", "8-16位密码，区分大小写，不能用空格");
        return false;
      }
      this.fpData.ectpwd = encryption(this.fpData.password);
      this.forgetPasswordAjax(this.fpData).then(response => {
        let types = response.status === 0 ? "success" : "error";
        message(this, types, response.msg);
        if (response.status === 0) {
          this.goHome();
          // this.$bus.$emit("getUserInfo");
        }
      });
    },
    async handleGetCode () {
      if (!this.captchaDisable) {
        this.captchaDisable = true;
        auth.smsCodes(this.fpData).then(response => {
          let types = response.status === 0 ? "success" : "error";
          message(this, types, response.msg);
          if (response.status === 0) {
            this.captchaDisable = true;
            this.fpData.getCode = this.fpData.seconds + "秒后重新发送";
            let interval = setInterval(() => {
              if (this.fpData.seconds <= 0) {
                this.fpData.getCode = "获取验证码";
                this.fpData.seconds = 30;
                this.captchaDisable = false;
                clearInterval(interval);
              } else {
                this.fpData.getCode = --this.fpData.seconds + "秒后重新发送";
              }
            }, 1000);
          } else {
            this.captchaDisable = false;
          }
        });
      }
    },
    goHome () {
      this.$router.push("/");
    },
    otherLogin () {
      this.goHome();
      this.$bus.$emit("loginShow", true);
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bus.$emit("headerFooterHide");
    });
  },
  beforeRouteLeave (to, from, next) {
    this.$bus.$emit("headerFooterShow");
    next();
  }
};
</script>

