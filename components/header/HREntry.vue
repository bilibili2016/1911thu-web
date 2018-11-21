<template>
  <div class="clearfix">
    <span class="topCenter topCode" @click="addEcg">兑换码</span>
    <span class="hrin topCenter" @click="handleLink('/other/activePages/institutional')">单位入口
      <i></i>
    </span>

    <div class="downLoad">
      <i class="phone"></i>
      <div class="downApp clearfix">
        <i :class={iphone:iphones} class="downIcon fl"></i>
        <div class="changeType fr">
          <span>下载1911学堂APP</span>
          <span @mouseenter="changeImg('iphone')" :class={iphone:iphones}>
            <i></i>AppStore下载</span>
          <span @mouseenter="changeImg('android')" :class={iphone:!iphones}>
            <i></i>Android下载</span>
        </div>
      </div>
    </div>
    <div class="shoppingCart" v-show="isAuthenticated" @click="handleLink('/shop/shoppingcart')">
      <span class="cartIcon"></span>
      <i v-if="productsNum>0">{{productsNum}}</i>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      iphones: true
    }
  },
  computed: {
    ...mapState('auth', ['productsNum']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    handleLink(data) {
      this.$emit('handleLink', data)
    },
    // 打开头部绑定课程
    addEcg() {
      this.$emit('addEcg')
    },
    // 改变鼠标悬浮时的DownApp二维码
    changeImg(what) {
      what == 'iphone' ? (this.iphones = true) : (this.iphones = false)
    },
    addClass() {
      let pathName = window.location.pathname
      if (pathName == '/other/activePages/institutional') {
        document.getElementsByClassName('hrin')[0].classList.add('active')
      } else {
        document.getElementsByClassName('hrin')[0].classList.remove('active')
      }
    }
  },
  mounted() {
    this.addClass()
  },
  watch: {
    $route: 'addClass'
  }
}
</script>
