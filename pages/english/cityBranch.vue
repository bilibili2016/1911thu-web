<template>
  <!-- 城市分校 -->
  <div class="cityBranch">
    <div class="commer-banner">
      <v-nav></v-nav>
      <img src="https://static-image.1911edu.com/cityBranch-banner.png" alt="">
      <div class="bannerCon">
        <h3>The City Branch Plan</h3>
      </div>
    </div>
    <div class="commer-con">
      <p class="pCss">The city branch plan is a major strategy for 1911 Academy to promote global distribution. By the end of 2021, 1911 Academy will establish nearly 1400 branches across the country, and hundreds of offline education bases will be established along the "Belt and Road" and other countries. Our strong network of nearly 1400 branches guarantees the quality and quantity of enrollment of our students. These branches are across the country, and hundreds of offline education bases will be established along with the "Belt and Road" countries. At the same time, high-quality educational resources will be introduced to each branch to form cross-regional and cross-industries education bases. The huge cooperation network system will create new opportunities for our future development.</p>
    </div>
  </div>
</template>
<script>
import Nav from "@/pages/english/components/Nav";

export default {
  components: {
    "v-nav": Nav,
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/english/cityBranch";
</style>