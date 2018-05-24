<template>
  <div class="headerBox">
    <div class="main">
      <div class="headerLogo fl">
        <img src="../../assets/images/1911xt.png" alt="">
      </div>
      <div class="search">
        <input type="text" placeholder="请输入课程、老师" v-model="search">
        <img src="../../assets/images/search.png" alt="">
      </div>
      <div class="HREntry">
        <span>Hr入口</span>
        <img src="../../assets/images/phone.png" alt="">
      </div>
      <div class="lrBtn">
        <span class="login">登录</span>
        <span class="registe">注册</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        search:''
      }
    }
  }
</script>

<style lang="scss">
@import '~assets/style/reset';
@import '~assets/style/header';
</style>