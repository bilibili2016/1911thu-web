<template>
  <div class="unlogged" v-if="wxMask">
    <div class="unloginner" v-loading="loading">
      <i class="el-icon-close" @click="unloggedClick"></i>
      <div class="texts">扫一扫付款
        <span>￥{{orderDetail.order_amount}}</span>
      </div>
      <div class="update">
        <qrcode :value="val" :options="{ size: 220 }" class="qrcode"></qrcode>
      </div>
      <div class="rechoise" @click="rechoise">
        <img :src="updateImg" alt="">刷新二维码
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['orderDetail'],
  data() {
    return {
      wxMask: false,
      loading: false,
      val: '',
      updateImg: require('@/assets/images/update.png')
    }
  },
  methods: {
    unloggedClick() {
      this.wxMask = false
      this.$bus.$emit('clearInterval')
    },
    rechoise() {
      this.$bus.$emit('clearInterval')
      this.loading = true
      this.$message({
        type: 'success',
        message: '二维码已更新'
      })
      this.$bus.$emit('getPayList', 'recode')
      // this.getPayList('recode')
    }
  },
  mounted() {
    this.$bus.$on('showCode', data => {
      this.val = data
      this.wxMask = true
    })
    this.$bus.$on('closeCode', data => {
      this.unloggedClick()
    })
    this.$bus.$on('load', data => {
      this.loading = data
    })
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/shop/unlogged.scss';
</style>
