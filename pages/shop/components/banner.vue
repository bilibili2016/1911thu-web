<template>
    <!-- 确认订单，支付中心头部banner -->
    <div class="shopBanner">
        <div>{{config.text}}</div>
    </div>
</template>

<script>
export default {
  props: ['config']
}
</script>
<style scoped lang="scss">
@import '~assets/style/shop/banner.scss';
</style>