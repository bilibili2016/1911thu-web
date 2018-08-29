<template>
  <div>
    <div class="pay" v-show="showPay">
      <div class="note">
        <i @click="close" class="el-icon-close fr"></i>
        <h4>尊敬的用户，该课程需
          <span>付费</span>观看
        </h4>
        <div class="code">
          <div class="codeL">
            <p>微信</p>
            <div v-loading="loading" class="codeBox">
              <qrcode v-show="!loading" :value="wechat" :options="{ size: 120 }" class="qrcode"></qrcode>
            </div>
          </div>
          <div class="codeC"></div>
          <div class="codeR">
            <p>支付宝</p>
            <div v-loading="loading" class="codeBox">
              <qrcode v-show="!loading" :value="alipay" :options="{ size: 120 }" class="qrcode"></qrcode>
            </div>
          </div>
        </div>
        <div class="bottomWord">
          <h5>扫一扫，轻松购课!</h5>
          <h6>支付后刷新页面观看</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQrcode from '@xkeshi/vue-qrcode'
import { store as persistStore } from '~/lib/core/store'
import { home, pay, wepay } from '~/lib/v1_sdk/index'
import { splitUrl } from '@/lib/util/helper'
Vue.component(VueQrcode.name, VueQrcode)
export default {
  props: ['config'],
  data() {
    return {
      showPay: false,
      codeForm: {
        type: '2',
        ids: ''
      },
      loading: true,
      wechat: '',
      alipay: '',
      flag: true
    }
  },
  methods: {
    close() {
      this.showPay = false
      this.$emit('closePay')
    },
    // 获取去二维码的方法
    getCode() {
      this.codeForm.ids = splitUrl(0, 1)
      // console.log(this.codeForm.ids)

      pay.getCode(this.codeForm).then(response => {
        this.wechat = response.data.code_url
        this.alipay = response.data.qr_code
        this.loading = false
        this.flag = true
      })
    }
  },
  mounted() {
    this.$bus.$on('openPay', data => {
      if (data.type === 2) {
        this.codeForm.type = 2
      } else {
        this.codeForm.type = 1
      }
      if (this.flag) {
        this.getCode()
        this.flag = false
      }
      this.showPay = true
    })
    this.$bus.$on('closePay', data => {
      this.close()
    })
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/components/pay.scss';
</style>
