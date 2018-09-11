<template>
  <div>
    <!-- 订单 -->
    <el-card v-if="showOrderList">
      <el-tabs v-model="activeOrder">
        <el-tab-pane label="全部" name="orderFirst">
          <!-- <v-datapick :orderNum="orderZero"></v-datapick> -->
          <!-- {{pagemsg4.total}} -->
          <!-- <div :class="{ minheight : allOrderLoadAll}" v-loading="allOrderLoadAll"> -->
          <!-- @searchDatas="searchDatas" -->
          <!-- <v-order v-if="allOrderData  && allOrderData.length>0" :data="allOrderData" :config="orderType" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail"></v-order>
          </div>
          <div class="pagination" v-if="pagemsg4.total>19">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg4.pagesize" :pager-count="5" :page-count="pagemsg4.pagesize" :current-page="pagemsg4.page" :total="pagemsg4.total" @current-change="getAllOrderDataChange"></el-pagination>
          </div>
          <v-nomsg class="noOrder" v-if="allOrderData.length == 0 && !allOrderLoadAll" :config="noMsgTen"></v-nomsg> -->
          <v-listtab :allOrderLoadAll="allOrderLoadAll" :order="orderZero" :data="allOrderData" :orderType="orderType" :pagemsg="pagemsg4" :noMsg="noMsgTen" @pageChange="getAllOrderDataChange" @handleUpdate="handleUpdate()"></v-listtab>
        </el-tab-pane>
        <el-tab-pane name="orderSecond">
          <span class="payCut" slot="label">未完成
            <i v-if="unfinishedOrderData && unfinishedOrderData.length>0">{{orderTotal}}</i>
          </span>
          <v-listtab :order="orderOne" :data="unfinishedOrderData" :orderType="orderType" :pagemsg="pagemsg5" :noMsg="noMsgTen" @pageChange="unfinishedOrderDataChange" @handleUpdate="handleUpdate()"></v-listtab>
        </el-tab-pane>
        <el-tab-pane name="orderThird">
          <span class="payOk" slot="label">已完成
          </span>
          <v-listtab :order="orderTwo" :data="readyOrderData" :orderType="orderType" :pagemsg="pagemsg6" :noMsg="noMsgTen" @pageChange="getReadyOrderDataChange"></v-listtab>

        </el-tab-pane>
        <el-tab-pane name="orderFour">
          <span class="payOff" slot="label">已关闭
          </span>
          <v-listtab :order="orderThree" :data="invalidOrderData" :orderType="orderType" :pagemsg="pagemsg7" :noMsg="noMsgTen" @pageChange="closedOrderDataChange"></v-listtab>
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
import ListTab from '@/pages/profile/components/common/ListTab.vue'
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
    'v-datapick': DataPick,
    'v-listtab': ListTab
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
    closedOrderDataChange(val) {
      this.$emit('closedOrderDataChange', 3, val)
    },
    invalidOrderDataChange(val) {
      this.$emit('invalidOrderDataChange', val)
    },
    goBack(val) {
      this.$emit('goBack', val)
    },
    goTicketBack(val) {
      this.$emit('goTicketBack', val)
    },
    pageChange(val) {
      this.$emit('pageChange', val)
    },
    handleUpdate() {
      //取消订单 全部/未完成/已关闭都需要更新
      this.$emit('handleUpdate', 0, 1)
      this.$emit('handleUpdate', 1, 1)
      this.$emit('handleUpdate', 3, 1)
    }
  }
}
</script>

