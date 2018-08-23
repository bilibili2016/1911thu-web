<template>
  <div>
    <!-- 订单 -->
    <el-card v-if="showOrderList">
      <el-tabs v-model="activeOrder">
        <el-tab-pane label="全部" name="orderFirst">
          <div :class="{ minheight : allOrderLoadAll}" v-loading="allOrderLoadAll">
            <v-order v-if="allOrderData  && allOrderData.length>0" :data="allOrderData" :config="orderType" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail"></v-order>
          </div>

          <div class="pagination" v-if="allOrderData && allOrderData.length>19">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg4.pagesize" :pager-count="5" :page-count="pagemsg4.pagesize" :current-page="pagemsg4.page" :total="pagemsg4.total" @current-change="getAllOrderDataChange"></el-pagination>
          </div>
          <v-nomsg class="noOrder" v-if="allOrderData.length == 0 && !allOrderLoad" :config="noMsgTen"></v-nomsg>

        </el-tab-pane>
        <el-tab-pane name="orderSecond">
          <span class="payCut" slot="label">未完成{{unfinishedOrderData.length}}
            <i v-if="unfinishedOrderData && unfinishedOrderData.length>0">{{unfinishedOrderData.length}}</i>
          </span>
          <v-order v-if="unfinishedOrderData && unfinishedOrderData.length>0" :data="unfinishedOrderData" :config="orderType" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail" v-loading="unfinishedOrderLoad"></v-order>
          <div class="pagination" v-if="unfinishedOrderData && unfinishedOrderData.length>19">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg5.pagesize" :pager-count="5" :page-count="pagemsg5.pagesize" :current-page="pagemsg5.page" :total="pagemsg5.total" @current-change="unfinishedOrderDataChange"></el-pagination>
          </div>
          <v-nomsg class="noOrder" v-if="unfinishedOrderData.length == 0" :config="noMsgTen"></v-nomsg>

        </el-tab-pane>
        <el-tab-pane name="orderThird">
          <span class="payOk" slot="label">已完成{{readyOrderData.length}}
          </span>
          <v-order v-if="readyOrderData && readyOrderData.length>0" :data="readyOrderData" :config="orderType" @goOrderDetail="getOrderDetail" v-loading="readyOrderLoad"></v-order>
          <div class="pagination" v-if="readyOrderData && readyOrderData.length>19">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg6.pagesize" :pager-count="5" :page-count="pagemsg6.pagesize" :current-page="pagemsg6.page" :total="pagemsg6.total" @current-change="getReadyOrderDataChange"></el-pagination>
          </div>
          <v-nomsg class="noOrder" v-if="readyOrderData.length == 0" :config="noMsgTen"></v-nomsg>
        </el-tab-pane>
        <el-tab-pane name="orderFour">
          <span class="payOff" slot="label">已关闭{{invalidOrderData.length}}
          </span>
          <v-order v-if="invalidOrderData && invalidOrderData.length>0" :data="invalidOrderData" :config="orderType" @goOrderDetail="getOrderDetail" v-loading="invalidOrderLoad"></v-order>
          <div class="pagination" v-if="invalidOrderData && invalidOrderData.length>19">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg7.pagesize" :pager-count="5" :page-count="pagemsg7.pagesize" :current-page="pagemsg7.page" :total="pagemsg7.total" @current-change="invalidOrderDataChange"></el-pagination>
          </div>
          <v-nomsg class="noOrder" v-if="invalidOrderData.length==0" :config="noMsgTen"></v-nomsg>

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
    'detailMsg',
    'pagemsg4',
    'pagemsg5',
    'pagemsg6',
    'pagemsg7',
    'allOrderLoadAll'
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
    },
    getAllOrderDataChange(val) {
      this.$emit('getAllOrderDataChange', val)
    },
    unfinishedOrderDataChange(val) {
      this.$emit('unfinishedOrderDataChange', val)
    },
    getReadyOrderDataChange(val) {
      this.$emit('getReadyOrderDataChange', val)
    },
    invalidOrderDataChange(val) {
      this.$emit('invalidOrderDataChange', val)
    }
  }
}
</script>

<style scoped>
</style>
