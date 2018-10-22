<template>
  <div>
    <div class="orderInfo" v-if="course">
      <p>
        <span class="left">商品数量：</span>
        <span class="right">{{data.curriculumSum}}</span>
      </p>

      <div v-if="type!=2">
        <p>
          <span class="left">学习人数：</span>
          <span class="right">{{data.payNumber}}人</span>
        </p>
        <p>
          <span class="left">商品总金额：</span>
          <span class="right">¥{{data.goodsAmount}}</span>
        </p>
      </div>
      <!-- vip需要计算商品总金额 -->
      <div v-else>
        <p>
          <span class="left">商品总金额：</span>
          <span class="right">¥{{parseFloat(data.curriculumSum*data.price)}}</span>
        </p>
      </div>

      <p>
        <span class="left">购买账号：</span>
        <span class="right" :title="data.nickName">{{data.nickName}}</span>
      </p>
    </div>
    <div class="orderInfo" v-if="!course">
      <p>
        <span class="left" style="width:auto;">商品总金额：</span>
        <span class="right" style="width:85px;">¥{{data.present_price}}</span>
      </p>
      <!-- <p>
        <span class="left" style="width:auto;">{{9.5}}折</span>
        <span class="right" style="width:85px;">¥{{data.present_price}}</span>
      </p> -->
    </div>
  </div>

</template>

<script>
import { message, matchSplits } from '@/lib/util/helper'
export default {
  props: ['data'],
  data() {
    return {
      course: true,
      type: '',
      id: ''
    }
  },
  mounted() {
    if (matchSplits('id') == -1) {
      this.course = true
    } else {
      if (matchSplits('type') == 1) {
        this.type = matchSplits('type')
        this.course = false
      } else {
        this.type = matchSplits('type')
        this.course = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.affirmOrder .goodsList {
  .orderInfod {
    width: 100%;
    float: right;
    padding-right: 30px;
    margin-top: 60px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8d6f7;
    .left {
      text-align: right;
      vertical-align: middle;
    }
    .right {
      width: 85px;
      line-height: 28px;
      vertical-align: middle;
      text-align: right;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

// .orderInfo .right {
//   width: 85px;
// }
</style>
