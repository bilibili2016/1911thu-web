<template>
  <!-- 合作伙伴 -->
  <div class="partner bg-none">
    <h4>合作伙伴</h4>
    <p>50+国内外知名机构使用1911课堂</p>
    <div class="partnerList center">
      <span v-for="(img,index) in data" :key="index">
        <img :src="img.logo" alt="">
      </span>
    </div>
  </div>

</template>

<script>
export default {
  props: ['data']
}
</script>

