<template>
  <div class="topBar clearfix">
    <span>商品信息</span>
    <span class="fr goBack" @click="handleLinkShopCart">
      <img class="editOutline" src="http://papn9j3ys.bkt.clouddn.com/shopCart-icon.png" alt=""> 返回修改购物车
    </span>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    handleLinkShopCart() {
      this.$emit('handleLinkShopCart')
    }
  }
}
</script>

<style scoped>
</style>
