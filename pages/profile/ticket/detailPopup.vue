<template>
    <!-- 开票历史发票详情 -->
    <div class="ticketPopup">
        <div class="content">
            <div class="title clearfix">
                <span class="fl">开票详情</span>
                <span class="fr" @click="closeTicketPopup">
                    <i class="el-icon-close"></i>
                </span>
            </div>
            <div class="bottomCon">
                <div class="items">
                    <div class="item-list clearfix" v-for="(item,index) in data" :key="index">
                        <div class="code">{{item.order_sn}}</div>
                        <div class="time">{{exchangeTime(item.create_time)}}</div>
                        <div class="num">{{item.project_number}}个项目，{{item.curriculum_number}}个课程</div>
                        <div class="price">{{item.pay_amount}}元</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { timestampToTime } from '@/lib/util/helper'
export default {
  props: ['data'],
  methods: {
    closeTicketPopup() {
      this.$emit('closeTicketPopup')
    },
    // 时间戳转日期格式
    exchangeTime(time) {
      return timestampToTime(time)
    }
  }
}
</script>

<style scoped>
</style>