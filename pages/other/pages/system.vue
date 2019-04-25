<template>
  <div class="system">
    <img src="https://static-image.1911edu.com/noCollegeA.png" alt="">
    <!-- <p>正在筹备中，敬请期待...</p> -->
  </div>
</template>

<script>
import { setTitle } from "~/lib/util/helper";

export default {
  mounted () {
    setTitle("测评体系-1911学堂");
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/other/system";
</style>