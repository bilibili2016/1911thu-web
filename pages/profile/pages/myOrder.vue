<template>
  <div>
    <!-- 订单 -->
    <el-card v-if="showOrderList">
      <el-tabs v-model="activeOrder">
        <el-tab-pane label="全部" name="orderFirst">
          <v-order v-if="allOrderData  && allOrderData.length>0" :data="allOrderData" :config="orderType" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail" v-loading="allOrderLoad"></v-order>
          <v-nomsg class="noOrder" v-else :config="noMsgTen"></v-nomsg>

        </el-tab-pane>
        <el-tab-pane name="orderSecond">
          <span class="payCut" slot="label">未完成
            <i v-if="unfinishedOrderData && unfinishedOrderData.length>0">{{unfinishedOrderData.length}}</i>
          </span>
          <v-order v-if="unfinishedOrderData && unfinishedOrderData.length>0" :data="unfinishedOrderData" :config="orderType" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail" v-loading="unfinishedOrderLoad"></v-order>
          <v-nomsg class="noOrder" v-else :config="noMsgTen"></v-nomsg>

        </el-tab-pane>
        <el-tab-pane name="orderThird">
          <span class="payOk" slot="label">已完成
          </span>
          <v-order v-if="readyOrderData && readyOrderData.length>0" :data="readyOrderData" :config="orderType" @goOrderDetail="getOrderDetail" v-loading="readyOrderLoad"></v-order>
          <v-nomsg class="noOrder" v-else :config="noMsgTen"></v-nomsg>
        </el-tab-pane>
        <el-tab-pane name="orderFour">
          <span class="payOff" slot="label">已失效
          </span>
          <v-order v-if="invalidOrderData && invalidOrderData.length>0" :data="invalidOrderData" :config="orderType" @goOrderDetail="getOrderDetail" v-loading="invalidOrderLoad"></v-order>
          <v-nomsg class="noOrder" v-else :config="noMsgTen"></v-nomsg>

        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 订单详情 -->
    <v-detail v-else :orderDetail="orderDetail" :bankInfo="bankInfo" :courseList="courseList" :projectList="projectList" :config="orderType" v-loading="detailMsg"></v-detail>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/pages/noMsg.vue'
import Order from '@/pages/profile/components/OrderList'
import Detail from '@/pages/profile/components/Detail'
export default {
  components: {
    'v-nomsg': NoMsg,
    'v-order': Order,
    'v-detail': Detail
  },
  props: [
    'showOrderList',
    'allOrderData',
    'orderType',
    'allOrderLoad',
    'noMsgTen',
    'unfinishedOrderData',
    'unfinishedOrderLoad',
    'readyOrderData',
    'readyOrderLoad',
    'invalidOrderData',
    'invalidOrderLoad',
    'orderDetail',
    'bankInfo',
    'courseList',
    'projectList',
    'orderType',
    'detailMsg'
  ],
  data() {
    return {
      activeOrder: 'orderFirst'
    }
  },
  methods: {
    getUpdateMsg() {
      this.$emit('getUpdateMsg')
    },
    getOrderDetail() {
      this.$emit('getOrderDetail')
    }
  }
}
</script>

<style scoped>
</style>
