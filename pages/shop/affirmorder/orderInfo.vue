<template>
  <div>
    <div class="orderInfo" v-if="course">

      <div v-if="type!=2">
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
          <span class="right">￥{{data.goodsAmount}}</span>
        </p>
        <p>
          <span class="left">购买账号：</span>
          <span class="right" :title="data.nickName">{{data.nickName}}</span>
        </p>
      </div>
      <!-- vip需要计算商品总金额 -->
      <div v-else>
        <p>
          <span class="left">入学人数：</span>
          <span class="right">{{data.curriculumSum}}</span>
        </p>
        <p>
          <span class="left">学费：</span>
          <span class="right">￥{{parseFloat(data.curriculumSum*data.price)}}</span>
        </p>
        <p>
          <span class="left">申请人昵称：</span>
          <span class="right" :title="data.nickName">{{data.nickName}}</span>
        </p>
      </div>

    </div>
    <!-- 项目确认订单 -->
    <div class="orderInfo" v-if="!course">
      <p>
        <span class="left" style="width:auto;">商品总金额：</span>
        <span class="right" style="width:85px;">￥{{data.present_price}}</span>
      </p>
      <!-- <p>
        <span class="left" style="width:auto;">{{9.5}}折</span>
        <span class="right" style="width:85px;">￥{{data.present_price}}</span>
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
    // id: -1是课程，其他是项目和会员
    if (matchSplits('id') == -1) {
      this.course = true
    } else {
      // type：1是项目，2是会员
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
@import '~assets/style/shop/orderInfo.scss';
</style>
