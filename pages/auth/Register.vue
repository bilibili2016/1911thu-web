<template>
  <div>
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
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { auth, header } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
import { encryption, message } from '~/lib/util/helper'
export default {
  props: ['registerData', 'codeClick', 'isClick', 'bindTelData', 'isloading'],
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
      }
    }
  },
  methods: {
    // 验证手机号是否存在
    verifyRgTel() {
      this.$emit('verifyRgTel')
    },
    // 注册 请求
    signUp(forName) {
      this.$emit('signUp', forName)
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
  }
}
</script>

<style scoped>
</style>
