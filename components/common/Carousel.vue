<template>
  <el-carousel :interval="5000" arrow="never" class="lbt">
    <el-carousel-item v-for="(img,index) in items" :key="index">
      <img :src="img.picture" alt="">
    </el-carousel-item>
  </el-carousel>
  <!-- <div class="popup-container">
    <div class="img-flex"></div>
  </div> -->
</template>

<script>
export default {
  props: ['items']
}
</script>

<style scoped lang="scss">
.lbt {
  background-color: rgb(211, 208, 255);
}
.el-main {
  padding: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
</style>
