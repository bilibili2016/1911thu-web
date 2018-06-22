<template>
  <div>
    <div class="result">
      <img src="" alt="">
      <h4 v-if="success">支付成功！</h4>
      <h4 v-else>支付失败！</h4>
      <div class="restltMsg" v-if="success">
        <p>
          <span>订单：1806201053081435</span>
          <span> | </span>
          <span>支付金额：￥2250.00</span>
        </p>
      </div>
      <div class="restltMsg restltWord" v-else>
        <h6>订单：1806201053081435</h6>
        <p>支付金额：￥2250.00</p>
        <p>错误原因：账户余额不足</p>
      </div>
      <h5 v-if="success">
        <span>继续选课</span>
        <span>查看订单</span>
      </h5>
      <h5 v-else>
        <span>重新下单</span>
      </h5>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      success: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/shop/payResult';
</style>