<template>
  <div class="orderInfo">
    <p>
      <span class="left">商品数量：</span>
      <span class="right">{{data.curriculumSum}}</span>
    </p>
    <p>
      <span class="left">学习人数：</span>
      <span class="right">{{data.payNumber}}人</span>
    </p>
    <p>
      <span class="left">商品总金额：</span>
      <span class="right">¥{{data.goodsAmount}}</span>
    </p>
    <p>
      <span class="left">购买账号：</span>
      <span class="right">{{data.nickName}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['data'],
  mounted() {
    // console.log(this.data, '这是data')
  }
}
</script>

<style scoped>
</style>
