<template>
  <div class="bottomBtn clearfix">
    <p class="allPrice" v-if="config.type=='affirmOrder'">应付金额：￥<span id="totalPrice">{{data.goodsAmount}}</span></p>
    <p class="allPrice" v-if="config.type=='customOrder'">应付金额：￥<span id="totalPrice">{{data.present_price}}</span></p>
    <p class="allPrice" v-if="config.type=='vip'">应付金额：￥<span id="totalPrice">{{parseFloat(data.curriculumSum*data.price)}}</span></p>
    <!-- <p class="allPrice">应付金额：￥{{data.goodsAmount}}</p> -->
    <div class="orderInfos" v-if="config.type=='customOrder'">
      <p>
        <span class="left">购买账号：</span>
        <span class="right">{{data.nickName}}</span>
      </p>
    </div>
    <p v-if="orderType==1" class="commitOrder fr" @click="commitOrder">提交订单</p>
    <p v-if="orderType==2" class="commitOrder fr" @click="commitOrder">提交</p>

    <h6 v-if="config.type==='affirmOrder'" @click="showRpt">我有疑问，需要反馈?</h6>
  </div>
</template>

<script>
import { matchSplits } from "@/lib/util/helper";

export default {
  props: ["data", "config"],
  data() {
    return {
      orderType: ""
    };
  },
  methods: {
    commitOrder() {
      let price = document.getElementById("totalPrice").innerHTML;
      this.$emit("commitOrder", price);
    },
    showRpt() {
      this.$emit("showRpt");
    }
  },
  mounted() {
    this.orderType = matchSplits("type");
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/shop/orderbtn.scss";
</style>
