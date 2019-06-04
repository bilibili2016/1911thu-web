<template>
  <!-- 城市分校 -->
  <div class="cityBranch">
    <div class="commer-banner">
      <v-welcome></v-welcome>
      <img src="https://static-image.1911edu.com/cityBranch-banner.png" alt="">
      <div class="bannerCon">
        <h1>The city branch plan </h1>
      </div>
    </div>
    <div class="commer-con">
      <p class="pCss">The city branch plan is a major strategy for 1911 Academy to promote global distribution. By the end of 2021, 1911 Academy will establish nearly 1400 branches across the country, and hundreds of offline education bases will be established along the “Belt and Road” and other countries. Our strong network of nearly 1400 branches guarantees the quality and quantity of enrollment of our students. These branches are across the country, and hundreds of offline education bases will be established along with the “Belt and Road” countries. At the same time, high-quality educational resources will be introduced to each branch to form cross-regional and cross-industries education bases. The huge cooperation network system will create new opportunities for our future development.</p>

    </div>
  </div>
</template>
<script>
import Welcome from "@/pages/english/components/Welcome";

export default {
   components: {
    "v-welcome": Welcome,
  },
  data () {
    return {};
  },
  //  销毁之前展示头部 底部
  destroyed () {
    this.$bus.$emit("headerFooterShow");
  },
  //   进入页面的的时候
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bus.$emit("headerFooterHide");
    });
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/english/cityBranch";
</style>