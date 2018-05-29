<template>
    <!-- 合作伙伴 -->
    <div class="partner bg-none">
      <h4>合作伙伴</h4>
      <p>50+国内外知名企业使用1911课堂</p>
      <div class="partnerList center">
        <span v-for="(img,index) in data" :key="index">
          <img :src="img.src" alt="">
        </span>
      </div>
    </div>

</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped lang="scss">
@import "~assets/style/config";
@import "~assets/style/index";
.center {
  width: 1100px;
  margin: 0 auto;
}
.bg-none {
  width: 100%;
}
</style>
