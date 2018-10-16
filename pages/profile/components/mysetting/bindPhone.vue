<template>
    <!--绑定手机-->
    <div class="bingPhone">
        <i class="el-icon-close closePop" @click="close"></i>
        <el-form :model="bindTelData" ref="bindTelData" status-icon :rules="bindwxRules" class="demo-ruleForm">
            <div class="formInner">
                <!-- 认证手机号码 -->
                <div class="first" v-show="isFirstShow">
                    <h4 class="clearfix">认证手机号码</h4>
                    <p class="text">解绑后，您将无法再使用此手机号进行找回
                        密码及登录相关操作。</p>
                    <p class="text num">已绑定手机号：<span>{{numPhone}}</span></p>
                    <el-form-item prop="phones">
                        <el-input v-model.number="bindTelData.phones" placeholder="请输入已绑定的手机号"></el-input>
                    </el-form-item>
                    <el-row>
                        <el-button @click.native="nextStep('bindTelData')">下一步</el-button>
                    </el-row>
                </div>
                <!-- 修改手机号 -->
                <div class="two" v-show="!isFirstShow">
                    <h4 class="clearfix">绑定手机</h4>
                    <el-form-item prop="phones">
                        <el-input v-model.number="bindTelData.phones" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="codes" class="lastItem clearfix">
                        <el-input class="captcha" v-model.number="bindTelData.codes" placeholder="请输入验证码"></el-input>
                        <div class="getCode" @click="verifyRgTelWX">{{bindTelData.getCode}}</div>
                    </el-form-item>
                    <el-row>
                        <el-button @click.native="submitPhone('bindTelData')">提交</el-button>
                    </el-row>
                </div>
            </div>
        </el-form>
    </div>

</template>

<script>
import { checkCode, checkRegisterPhone } from '~/lib/util/validatefn'
import { personalset } from '~/lib/v1_sdk/index'
import { message } from '~/lib/util/helper'

export default {
  props: ['bindTelData', 'numPhone'],
  data() {
    return {
      isFirstShow: true,
      bindwxRules: {
        phones: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            validator: checkRegisterPhone,
            trigger: 'blur'
          }
        ],
        codes: [
          {
            required: false,
            message: '请输入验证码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
      this.isFirstShow = true
    },
    //   下一步
    nextStep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          personalset.confirmPhoneByUser(this.bindTelData).then(res => {
            if (res.status == 0) {
              this.isFirstShow = false
            } else {
              message(this, 'error', res.msg)
            }
          })
        }
      })
    },
    verifyRgTelWX() {
      this.$emit('verifyRgTelWX')
    },
    submitPhone(formName) {
      //   this.$emit('loginWechat')
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
