<template>
  <div class="clearfix">
    <span class="topCenter topCode" @click="addEcg">兑换码</span>
    <span class="hrin topCenter" @click="handleLink('/other/activePages/Institutional')">
      单位入口
      <i></i>
    </span>

    <div class="downLoad">
      <i class="phone"></i>
      <div class="downApp clearfix">
        <qrcode :value="downloadAppURL" :options="{ size: 150 }" class="qrcode"></qrcode>
        <p class="changeType">下载1911学堂APP</p>
      </div>
    </div>
    <div class="shoppingCart" v-if="isShowLRBtn" @click="handleLink('/shop/shoppingcart')">
      <span class="cartIcon"></span>
      <i v-if="productsNum>0">{{productsNum}}</i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQrcode from '@xkeshi/vue-qrcode'
import { mapState, mapGetters } from 'vuex'
import { getNetwork } from '@/lib/util/helper'
Vue.component(VueQrcode.name, VueQrcode)
export default {
  props: ["isShowLRBtn"],
  data () {
    return {
      downloadAppURL: '',
      downloadAppURL_test: 'https://ceshiapi.1911edu.com/Api/v1_1/AppH5/appDownload',
      downloadAppURL_pro: 'https://api.1911edu.com/Api/v1_1/AppH5/appDownload',
    }
  },
  computed: {
    ...mapState('auth', ['productsNum']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    handleLink (data) {
      this.$emit('handleLink', data)
    },
    // 打开头部绑定课程
    addEcg () {
      this.$emit('addEcg')
    },
    addClass () {
      let pathName = window.location.pathname
      if (pathName == '/other/activePages/Institutional') {
        document.getElementsByClassName('hrin')[0].classList.add('active')
      } else {
        document.getElementsByClassName('hrin')[0].classList.remove('active')
      }
    }
  },
  mounted () {
    this.addClass()
    if (getNetwork()) {
      this.downloadAppURL = this.downloadAppURL_test
    } else {
      this.downloadAppURL = this.downloadAppURL_pro
    }
  },
  watch: {
    $route: 'addClass'
  }
}
</script>
