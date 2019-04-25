<template>
  <div class="topBar clearfix">
    <span v-if="orderType==1">商品信息</span>
    <span v-if="orderType==2">入学信息</span>

    <span class="fr goBack" @click="handleLinkShopCart" v-if="config.type==='affirmOrder'">
      <img class="editOutline" src="https://static-image.1911edu.com/shopCart-icon.png" alt=""> 返回修改购物车
    </span>
    <span class="fr goBack" @click="handleQuestion" v-if="config.type!=='affirmOrder'">
      我有疑问，需要反馈?
    </span>
  </div>
</template>

<script>
import { matchSplits } from '@/lib/util/helper'
export default {
  props: ['data', 'config'],
  data () {
    return {
      orderType: ''
    }
  },
  methods: {
    handleLinkShopCart () {
      this.$emit('handleLinkShopCart')
    },
    handleQuestion () {
      this.$emit('handleQuestion')
    }
  },
  mounted () {
    this.orderType = matchSplits('type')
  }
}
</script>

<style scoped lang="scss">
@import "~assets/style/shop/backShopCart.scss";
</style>
