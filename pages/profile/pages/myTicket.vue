<template>
  <!-- 发票 -->
  <el-card v-if="showTicketList">
    <el-tabs v-model="activeTicket" @tab-click="handleTicket">
      <el-tab-pane label="按订单开发票" name="ticketFirst">
        <v-tkorder v-if="unTicketData  && unTicketData.length>0" :orderData="unTicketData" @handleUpdate="getUpdateMsg" @goTicketDetail="getTicketDetail" v-loading="readyOrderLoad"></v-tkorder>
        <v-nomsg class="noOrder" v-else :config="noMsgTwl"></v-nomsg>

      </el-tab-pane>
      <el-tab-pane name="ticketSecond" label="开票历史">
        <v-tkhistory v-if="historyOrderData && historyOrderData.length>0" :orderData="historyOrderData" @handleUpdate="getUpdateMsg" v-loading="unfinishedOrderLoad"></v-tkhistory>
        <v-nomsg class="noOrder" v-else :config="noMsgThi"></v-nomsg>
      </el-tab-pane>
      <el-tab-pane name="ticketThird">
        <span class="payOk" slot="label">开票规则
        </span>
        <v-tkrules v-loading="readyOrderLoad"></v-tkrules>
      </el-tab-pane>
    </el-tabs>
  </el-card>
  <!-- 发票详情 -->
  <v-detail v-else :config="ticketType" :courseList="courseList" :projectList="projectList" :orderDetail="orderDetail"></v-detail>
</template>

<script>
import TicketOrder from '@/pages/profile/ticket/ticketOrder'
import NoMsg from '@/pages/profile/pages/noMsg.vue'
import TicketHistory from '@/pages/profile/ticket/ticketHistory'
import TicketRules from '@/pages/profile/ticket/ticketRules'
export default {
  props: [
    'showTicketList',
    'unTicketData',
    'readyOrderLoad',
    'noMsgTwl',
    'historyOrderData',
    'unfinishedOrderLoad',
    'noMsgThi',
    'ticketType',
    'courseList',
    'projectList',
    'orderDetail'
  ],
  components: {
    'v-tkorder': TicketOrder,
    // 'v-ticketorderdetail': TicketOrderDetail,
    'v-tkhistory': TicketHistory,
    'v-tkrules': TicketRules,
    'v-nomsg': NoMsg
  },
  data() {
    return {
      activeTicket: 'ticketFirst'
    }
  },
  methods: {
    handleTicket() {
      this.$emit('handleTicket')
    },
    getUpdateMsg() {
      this.$emit('getUpdateMsg')
    },
    getTicketDetail() {
      this.$emit('getTicketDetail')
    }
  }
}
</script>

<style scoped>
</style>
