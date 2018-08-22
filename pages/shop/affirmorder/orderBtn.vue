<template>
  <div class="bottomBtn clearfix">
    <p class="allPrice">应付金额：¥{{data}}</p>
    <p class="commitOrder" @click="commitOrder">提交订单</p>
    <h6 @click="showRpt">我有疑问，需要反馈?</h6>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    commitOrder() {
      this.$emit('commitOrder')
    },
    showRpt() {
      this.$emit('showRpt')
    }
  }
}
</script>

<style scoped>
</style>
