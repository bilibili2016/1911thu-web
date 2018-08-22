<template>
  <div class="topBar clearfix">
    <span>商品信息</span>
    <span class="fr goBack" @click="handleLinkShopCart" v-if="config.type==='affirmOrder'">
      <img class="editOutline" src="http://papn9j3ys.bkt.clouddn.com/shopCart-icon.png" alt=""> 返回修改购物车
    </span>
    <span class="fr goBack" @click="handleLinkShopCart" v-if="config.type==='customAffirmOrder'">
      我有疑问，需要反馈?
    </span>
  </div>
</template>

<script>
export default {
  props: ['data', 'config'],
  methods: {
    handleLinkShopCart() {
      this.$emit('handleLinkShopCart')
    }
  }
}
</script>

<style scoped>
</style>
