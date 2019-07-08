<template>
  <div>
    <el-form-item prop="phones">
      <el-input v-model.number="registerData.phones" placeholder="请输入您的手机号" clearable @change="phonesChange"></el-input>
    </el-form-item>
    <el-form-item prop="codes">
      <el-input class="captcha" v-model="registerData.codes" placeholder="请输入短信验证码"></el-input>
      <el-button type="primary" :disabled="codeClick" class="getCode" @click="verifyRgTel" style="line-height:0">{{bindTelData.getCode}}</el-button>
    </el-form-item>
    <el-form-item prop="passwords">
      <el-input v-model="registerData.passwords" type="password" placeholder="8-16位密码，包含字母、数字、标点符号等"></el-input>
    </el-form-item>
    <el-form-item prop="identity" class="identityForm">
      <div class="identity">您的身份：</div>
      <el-radio-group v-model="registerData.identity" class="radioGroup">
        <el-radio label="0">学生</el-radio>
        <el-radio label="1">老师</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item prop="">
      <el-checkbox-group v-model="registerData.checked">
        <el-checkbox label="同意" name="checked"></el-checkbox>
        <div class="userPotal">
          <span>1911学堂</span>
          <span class="inner" @click="userProtocol">《用户注册协议》</span>
        </div>
      </el-checkbox-group>
    </el-form-item>
    <el-row>
      <el-button :disabled="isClick" class="registerUser " :class="{noSubmit:isHasClass}" v-loading="isloading" @click.native="signUp('registerData')">注册</el-button>
    </el-row>
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { auth, header } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import { checkCode, checkRegisterPhone } from "~/lib/util/validatefn";
import { encryption, message } from "~/lib/util/helper";
export default {
  props: ["registerData", "codeClick", "isClick", "bindTelData", "isloading"],
  data () {
    var validatePass = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error("密码只能输入数字、字母"));
      }
      return callback();
    };
    var checkCompanyCodes = (rule, value, callback) => {
      if (value !== "" && !/^[A-Za-z0-9]+$/.test(value)) {
        return callback(new Error("请输入正确单位ID"));
      }
      return callback();
    };
    var checkProtocol = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请勾选同意用户协议"));
      }
      return callback();
    };
    return {
      isHasClass: true
    };
  },
  methods: {
    phonesChange (val) {
      this.$emit('phonesChange', val)
    },
    // 验证手机号是否存在
    verifyRgTel () {
      this.$emit("verifyRgTel");
    },
    // 注册 请求
    signUp (forName) {
      this.$emit("signUp", forName);
    },
    userProtocol () {
      this.$emit("userProtocol");
    }
  },
  watch: {
    "registerData.checked" (val, oldVal) {
      if (val) {
        this.isClick = false;
        this.isHasClass = false;
      } else {
        this.isClick = true;
        this.isHasClass = true;
      }
    }
  }
};
</script>

<style scoped>
</style>
