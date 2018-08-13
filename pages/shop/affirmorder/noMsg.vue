<template>
  <div class="noMsg-con">
    <div class="noMsg-img">
      <img :src="data.noMsg" alt="">
      <p>您没有正在进行的订单,{{data.backSeconds}}s后将会跳转到首页！</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
</style>
