<template>
  <div class="system">
    <img src="https://static-image.1911edu.com/noCollegeB.png" alt="">
  </div>
</template>

<script>
import { setTitle } from "~/lib/util/helper";
export default {
  mounted () {
    setTitle("学位项目-1911学堂");
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/project/degreeProject";
</style>