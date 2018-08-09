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
            <p class="img"></p>
          </div>
          <div class="codeC"></div>
          <div class="codeR">
            <p>支付宝</p>
            <p class="img"></p>
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
import { store as persistStore } from '~/lib/core/store'
import { home } from '~/lib/v1_sdk/index'
export default {
  props: ['config'],
  data() {
    return {
      showPay: false
    }
  },
  methods: {
    close() {
      this.showPay = false
    }
  },
  mounted() {
    this.$bus.$on('openPay', data => {
      this.showPay = true
    })
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/components/pay.scss';
</style>