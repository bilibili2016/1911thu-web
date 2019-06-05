<template>
  <div class="welcome">
    <div class="logo fl">
      <img src="https://static-image.1911edu.com/logofooter.png" alt="">
    </div>
    <div class="btn fr">
      <span v-for="(item,index) in selectList" :key="index" :class="{'select':select==item.url,'items':true}" @click="handleClick(item.url)">
        {{item.title}}</span>
      <span class="toggle" @click="handleToggle">
        <span class="iconfont icon-quanqiu"></span>
        <span class="eng">中文</span>
      </span>
    </div>
  </div>
</template>
<script>
import { isMobileTerminal } from "@/lib/util/helper";
export default {
  data () {
    return {
      select: 'home',
      selectList: [
        { url: 'home', title: 'Home' },
        { url: 'thinkTank', title: 'Think Tank' },
        { url: 'cityBranch', title: 'City Branch' },
        { url: 'businessSchool', title: 'Business School' }
      ]
    }
  },
  methods: {
    handleClick (url) {
      this.$router.push(`/english/${url}`)
    },
    handleToggle () {
      this.$bus.$emit('headerFooterShow')
      document.body.style.paddingTop = '80px'

      this.$router.push('/')
    },
    // 判断浏览器是否是移动端
    browserRedirect () {
      if (isMobileTerminal()) {
        //跳转移动端页面
        document.body.classList.add("englishMobile");
      } else {
        //跳转pc端页面
        document.body.classList.remove("englishMobile");
      }
      document.body.classList.remove("mobile");
    },
  },
  mounted () {
    this.select = location.pathname.split("/")[2]
    document.body.style.paddingTop = 0
    this.browserRedirect()
  },
}
</script>
<style lang="scss" scoped>
@import "~assets/style/english/welcome.scss";
</style>