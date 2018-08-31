<template>
  <div class="bottomBtn clearfix">
    <p class="allPrice" v-if="config.type=='affirmOrder'">应付金额：¥{{data.goodsAmount}}</p>
    <p class="allPrice" v-if="config.type=='customOrder'">应付金额：¥{{data.present_price}}</p>
    <!-- <p class="allPrice">应付金额：¥{{data.goodsAmount}}</p> -->
    <div class="orderInfos" v-if="config.type=='customOrder'">
      <p>
        <span class="left">购买账号：</span>
        <span class="right">{{data.nickName}}</span>
      </p>
    </div>
    <p class="commitOrder fr" @click="commitOrder">提交订单1</p>
    <h6 v-if="config.type==='affirmOrder'" @click="showRpt">我有疑问，需要反馈?</h6>
  </div>
</template>

<script>
export default {
  props: ['data', 'config'],
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
.allPrice {
  padding: 39px 30px 18px 0;
}
.orderInfos {
  text-align: right;
  color: #93999f;
  padding: 0px 10px 29px 0;
}
</style>
