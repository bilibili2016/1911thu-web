<template>
  <div>
    <el-form :model="registerData" status-icon :rules="registRules" ref="registerData" class="demo-ruleForm">
      <el-form-item prop="phones">
        <el-input v-model.number="registerData.phones" placeholder="请输入登录手机号" clearable></el-input>
      </el-form-item>
      <el-form-item prop="codes">
        <el-input class="captcha" v-model="registerData.codes" placeholder="请输入验证码"></el-input>
        <el-button type="primary" :disabled="codeClick" class="getCode" @click="verifyRgTel" style="line-height:0">{{bindTelData.getCode}}</el-button>
      </el-form-item>
      <el-form-item prop="passwords">
        <el-input v-model="registerData.passwords" type="password" placeholder="8-16位密码，区分大小写，不能用空格"></el-input>
      </el-form-item>

      <el-form-item prop="">
        <el-checkbox-group v-model="registerData.checked">
          <el-checkbox label="同意" name="checked"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-row>
        <el-button :disabled="isClick" class="registerUser " :class="{noSubmit:isHasClass}" v-loading="isloading" @click.native="signUp('registerData')">注册</el-button>
      </el-row>
    </el-form>
    <div class="userPotal" @click="userProtocol">1911学堂《用户注册协议》</div>
    <div class="otherLogin" @click="wechatLogined">其它方式登录</div>
  </div>
</template>

<script>
import { auth, header } from '~/lib/v1_sdk/index'
import { encryption, message } from '~/lib/util/helper'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
export default {
  props: ['data'],
  data() {
    var validatePass = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error('密码只能输入数字、字母'))
      }
      return callback()
    }
    var checkCompanyCodes = (rule, value, callback) => {
      if (value !== '' && !/^[A-Za-z0-9]+$/.test(value)) {
        return callback(new Error('请输入正确单位ID'))
      }
      return callback()
    }
    var checkProtocol = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请勾选同意用户协议'))
      }
      return callback()
    }
    return {
      isHasClass: true,
      isClick: true, //判断是否点击过注册按钮（防重）
      isloading: false, //注册按钮点击之后loading（体验）
      codeClick: false, //判断是否点击过 获取验证码（防重）
      codeInterval: null, //注册获取验证码定时循环
      loadLogin: false,
      // 注册表单验证
      registRules: {
        phones: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            validator: checkPhone,
            trigger: 'blur'
          }
        ],
        phonenum: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            validator: checkPhone,
            trigger: 'blur'
          }
        ],
        passwords: [
          {
            required: true,
            message: '请输入账户密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 8,
            max: 16,
            message: '密码长度为8-16位',
            trigger: 'blur'
          },
          {
            validator: validatePass,
            trigger: 'blur'
          }
        ],
        codes: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }
        ],
        companyCodes: [
          {
            min: 6,
            max: 6,
            message: '请输入正确的单位ID',
            trigger: 'blur'
          },
          {
            validator: checkCompanyCodes,
            trigger: 'blur'
          }
        ],
        checked: [
          {
            required: true,
            message: '',
            trigger: 'change'
          },
          {
            validator: checkProtocol,
            trigger: 'change'
          }
        ]
      },
      // 注册数据
      registerData: {
        phones: '',
        passwords: '',
        ectpwd: '',
        types: 1,
        codes: '',
        checked: false,
        companyCodes: ''
      },
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
      },
      errorTel: {
        tel: null,
        msg: null
      }
    }
  },
  methods: {
    // 验证手机号是否存在
    verifyRgTel() {
      this.$emit('verifyRgTel')
    },

    // 打开用户注册协议
    userProtocol() {
      window.open(window.location.origin + '/other/activePages/userProtocol')
    },
    // 注册 请求
    signUp(formName) {
      // this.$bus.$emit('signUp',formName)
      this.isloading = true
      this.isClick = true
      this.registerData.ectpwd = encryption(this.registerData.passwords)
      this.$refs[formName].validate(valid => {
        if (this.registerData.checked) {
          if (valid) {
            this.loadLogin = true

            auth.signUp(this.registerData).then(response => {
              // this.$message({
              //   showClose: true,
              //   type: response.status === 0 ? 'success' : 'error',
              //   message: response.msg
              // })
              let types = response.status !== 0 ? 'success' : 'error'
              message(this, types, response.msg)
              if (response.status === 0) {
                // this.alreadySignin(
                // this.close()
                this.$emit('alreadySignin')
                this.$emit('close')
              }
              this.loadLogin = false
              this.isClick = false
              this.isloading = false
            })
          } else {
            this.isClick = false
            this.isloading = false
            return false
          }
        } else {
          this.isClick = false
          this.isloading = false
        }
      })
    },
    wechatLogined() {
      this.$emit('wechatLogined')
    }
  },
  watch: {
    'registerData.checked'(val, oldVal) {
      if (val) {
        this.isClick = false
        this.isHasClass = false
      } else {
        this.isClick = true
        this.isHasClass = true
      }
    }
  },
  mounted() {
    this.registerData = this.data
  }
}
</script>

<style scoped>
</style>
