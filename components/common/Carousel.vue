<template>
   <el-carousel :interval="5000" arrow="never">
      <el-carousel-item v-for="(img,index) in items" :key="index">
          <img :src="img.src" alt="">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style scoped lang="scss">
@import "~assets/style/config";
@import "~assets/style/index";
</style>
