<template>
  <div class="clearfix">
    <span class="topCenter topCode" @click="addEcg">兑换码</span>
    <span class="hrin topCenter" @click="goSearchd('/other/activePages/institutional')">单位入口
      <i></i>
    </span>

    <div class="downLoad">
      <i class="phone"></i>
      <div class="downApp clearfix">
        <i :class={iphone:!iphones} class="downIcon fl"></i>
        <div class="changeType fr">
          <span>下载1911学堂APP</span>
          <span @mouseenter="changeImg('iphone')">
            <i></i>AppStore下载</span>
          <span @mouseenter="changeImg('android')">
            <i></i>Android下载</span>
        </div>
      </div>
    </div>
    <div class="shoppingCart" v-show="isAuthenticated" @click="goLinker('/shop/shoppingcart')">
      <span class="cartIcon"></span>
      <i v-if="productsNum>0">{{productsNum}}</i>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      iphones: false
    }
  },
  computed: {
    ...mapState('auth', ['token', 'productsNum']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    goSearchd(item) {
      this.$router.push(item)
    },
    // 打开头部绑定课程
    addEcg() {
      this.$bus.$emit('addEcg')
    },
    // 改变鼠标悬浮时的DownApp二维码
    changeImg(what) {
      what == 'android' ? (this.iphones = false) : (this.iphones = true)
    },
    // 跳转到指定页
    goLinker(item) {
      this.$router.push(item)
    }
  }
}
</script>

<style scoped>
</style>