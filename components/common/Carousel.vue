<template>
  <el-carousel :interval="5000" class="lbt indexBanner">
    <el-carousel-item v-for="(img,index) in items" :key="index">
      <img :src="img.picture" alt="" @click="goLink(img.jump_url)">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    goLink(link) {
      if (link != '' || link != null) {
        window.open(link)
      }
    }
  }
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
