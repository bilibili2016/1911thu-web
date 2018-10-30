<template>
    <!-- 个人信息填写 -->
    <div class="examine-info" :data='vipID'>
        <div class="examine-top">
            <span class="goBack" @click="handleBack">
                <i class=" el-icon-arrow-left icon"></i>个人信息填写
            </span>
        </div>
        <div class="bottom">
            <div class="bottom-title">请填写您的真实信息，用于申请认证，信息填写完成后不可更改！</div>
            <div class="inputs">
                <div class="items clearfix">
                    <div class="fl">您的姓名：</div>
                    <div class="fr">
                        <el-input v-model="examineInfo.name"></el-input>
                    </div>
                </div>
                <div class="items clearfix">
                    <div class="fl">您的手机号：</div>
                    <div class="fr">
                        <el-input v-model="examineInfo.tel"></el-input>
                    </div>
                </div>
                <div class="items clearfix">
                    <div class="fl">您的身份证号：</div>
                    <div class="fr">
                        <el-input v-model="examineInfo.idNumber"></el-input>
                    </div>
                </div>
                <div class="items clearfix">
                    <div class="fl">您的单位名称：</div>
                    <div class="fr">
                        <el-input v-model="examineInfo.unit"></el-input>
                    </div>
                </div>
                <div class="examine-btn " @click="handleNext">下一步</div>
            </div>
        </div>
    </div>
</template>
<script>
import { Trim, message, matchSplits, setTitle } from '~/lib/util/helper'

export default {
  props: ['vipID'],
  data() {
    return {
      examineInfo: {
        name: '', //姓名
        tel: '', //手机号
        idNumber: '', //身份证号
        unit: '' //单位名称
      },
      pageData: {
        id: '',
        name: ''
      }
    }
  },
  methods: {
    handleBack() {
      this.pageData.name = 'list'
      this.$bus.$emit('whichShow', this.pageData)
    },
    handleNext() {
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/
      const IDreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      try {
        if (Trim(this.examineInfo.name) === '') throw '请填写您的姓名'
        if (Trim(this.examineInfo.tel) === '') throw '请填写您的手机号码'
        if (!telReg.test(Trim(this.examineInfo.tel)))
          throw '请填写正确的手机号码'
        if (Trim(this.examineInfo.idNumber) === '') throw '请填写您的身份证号'
        if (!IDreg.test(Trim(this.examineInfo.idNumber)))
          throw '请填写正确的身份证号'
        if (Trim(this.examineInfo.unit) === '') throw '请填写您的单位名称'
      } catch (err) {
        message(this, 'error', err)
        return false
      }
      this.pageData.name = 'intro'
      this.pageData.id = this.vipID
      this.$bus.$emit('whichShow', this.pageData)
    }
  },
  mounted() {
    this.examineInfo.name = ''
    this.examineInfo.tel = ''
    this.examineInfo.idNumber = ''
    this.examineInfo.unit = ''
  }
}
</script>