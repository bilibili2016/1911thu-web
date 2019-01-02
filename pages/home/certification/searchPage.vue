<template>
  <div class="searchCer">
    <div class="content">
      <div class="top">
        <h4>1911学堂证书查询</h4>
      </div>
      <div class="bottom">
        <div class="item">
          <span class="left">请输入证书编号</span>
          <span class="right">
            <input
              type="text"
              class="num"
            >
          </span>
        </div>
        <div class="item">
          <span class="left">
            请输入验证码
          </span>
          <span class="right">
            <input
              type="text"
              class="code"
            >
            <img
              src=""
              alt=""
            >
          </span>
        </div>
        <div
          class="buttonn"
          @click="searchCer"
        >查询</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    searchCer() {
      this.$router.push("/home/certification/viewPage");
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/certification/searchPage.scss";
</style>