<template>
  <!-- 优惠专题入口 -->
  <div class="recommend">
    <div>
      <img src="https://static-image.1911edu.com/hr_discounts1.png" alt="">
      <span>优惠专题入口</span>
      <img src="https://static-image.1911edu.com/hr_discounts2.png" alt="">
      <i class="el-icon-close" @click="closeBanner"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeBanner () {
      this.$emit('closeBanner')
    }
  }
}
</script>
