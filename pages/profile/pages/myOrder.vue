<template>
  <div>
    <!-- 订单 -->
    <el-card v-if="showOrderList">
      <el-tabs v-model="activeOrder">
        <el-tab-pane label="全部" name="orderFirst">
          <v-datapick :orderNum="orderZero"></v-datapick>
          <!-- {{pagemsg4.total}} -->
          <div :class="{ minheight : allOrderLoadAll}" v-loading="allOrderLoadAll">
            <!-- @searchDatas="searchDatas" -->
            <v-order v-if="allOrderData  && allOrderData.length>0" :data="allOrderData" :config="orderType" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail"></v-order>
          </div>
          <div class="pagination" v-if="pagemsg4.total>19">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg4.pagesize" :pager-count="5" :page-count="pagemsg4.pagesize" :current-page="pagemsg4.page" :total="pagemsg4.total" @current-change="getAllOrderDataChange"></el-pagination>
          </div>
          <v-nomsg class="noOrder" v-if="allOrderData.length == 0 && !allOrderLoadAll" :config="noMsgTen"></v-nomsg>

        </el-tab-pane>
        <el-tab-pane name="orderSecond">
          <span class="payCut" slot="label">未完成
            <i v-if="unfinishedOrderData && unfinishedOrderData.length>0">{{unfinishedOrderData.length}}</i>
          </span>
          <v-datapick :orderNum="orderOne"></v-datapick>
          <v-order v-if="unfinishedOrderData && unfinishedOrderData.length>0" :data="unfinishedOrderData" :config="orderType" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail"></v-order>
          <div class="pagination" v-if="pagemsg4.total>20">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg4.pagesize" :pager-count="5" :page-count="pagemsg4.pagesize" :current-page="pagemsg4.page" :total="pagemsg4.total" @current-change="unfinishedOrderDataChange"></el-pagination>
          </div>
          <v-nomsg class="noOrder" v-if="unfinishedOrderData.length == 0" :config="noMsgTen"></v-nomsg>

        </el-tab-pane>
        <el-tab-pane name="orderThird">
          <span class="payOk" slot="label">已完成
          </span>
          <v-datapick :orderNum="orderTwo"></v-datapick>
          <v-order v-if="readyOrderData && readyOrderData.length>0" :data="readyOrderData" :config="orderType" @goOrderDetail="getOrderDetail"></v-order>
          <div class="pagination" v-if="pagemsg6.total>19">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg6.pagesize" :pager-count="5" :page-count="pagemsg6.pagesize" :current-page="pagemsg6.page" :total="pagemsg6.total" @current-change="getReadyOrderDataChange"></el-pagination>
          </div>
          <v-nomsg class="noOrder" v-if="readyOrderData.length == 0" :config="noMsgTen"></v-nomsg>
        </el-tab-pane>
        <el-tab-pane name="orderFour">
          <span class="payOff" slot="label">已关闭
          </span>
          <v-datapick :orderNum="orderThree"></v-datapick>
          <v-order v-if="invalidOrderData && invalidOrderData.length>0" :data="invalidOrderData" :config="orderType" @goOrderDetail="getOrderDetail"></v-order>
          {{invalidOrderData.total}}
          <div class="pagination" v-if="pagemsg7.total>19">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg7.pagesize" :pager-count="5" :page-count="pagemsg7.pagesize" :current-page="pagemsg7.page" :total="pagemsg7.total" @current-change="invalidOrderDataChange"></el-pagination>
          </div>
          <v-nomsg class="noOrder" v-if="invalidOrderData.length==0" :config="noMsgTen"></v-nomsg>

        </el-tab-pane>
      </el-tabs>
    </el-card>
    <v-detail v-else @goBack="goBack" @goTicketBack="goTicketBack" :orderDetail="orderDetail" :bankInfo="bankInfo" :courseList="courseList" :projectList="projectList" :config="orderType" v-loading="detailMsg"></v-detail>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import Order from '@/pages/profile/components/myorder/OrderList'
import Detail from '@/pages/profile/components/common/Detail'
import DataPick from '@/pages/profile/components/myorder/DataPick'
export default {
  watch: {
    searchDatas(data) {
      this.$bus.$emit('searchDatas', data)
    }
  },
  components: {
    'v-nomsg': NoMsg,
    'v-order': Order,
    'v-detail': Detail,
    'v-datapick': DataPick
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
    'allOrderLoadAll',
    'orderTotal'
  ],
  data() {
    return {
      activeOrder: 'orderFirst',
      orderZero: '0',
      orderOne: '1',
      orderTwo: '2',
      orderThree: '3'
    }
  },
  methods: {
    getUpdateMsg(data) {
      this.$emit('getUpdateMsg', data)
    },
    getOrderDetail() {
      this.$emit('getOrderDetail')
    },
    getAllOrderDataChange(val) {
      this.$emit('getAllOrderDataChange', 0, val)
    },
    unfinishedOrderDataChange(val) {
      this.$emit('unfinishedOrderDataChange', 1, val)
    },
    getReadyOrderDataChange(val) {
      this.$emit('getReadyOrderDataChange', 2, val)
    },
    invalidOrderDataChange(val) {
      this.$emit('invalidOrderDataChange', val)
    },
    goBack(val) {
      this.$emit('goBack', val)
    },
    goTicketBack(val) {
      this.$emit('goTicketBack', val)
    }
  }
}
</script>

