<template>
  <!-- 发票 -->
  <el-card v-if="showTicketList">
    <el-tabs v-model="activeTicket" @tab-click="handleTicket">
      <el-tab-pane label="按订单开发票" name="ticketFirst" value="1">
        <div v-loading="allTicket" :class="{ minheight : allTicket}">
          <v-tkorder v-if="unTicketData  && unTicketData.length>0" :orderData="unTicketData" @handleUpdate="getUpdateMsg" @goTicketDetail="getTicketDetail" @chengeItem="chengeItem" v-loading="readyOrderLoad"></v-tkorder>
        </div>

        <div class="pagination" v-if="unTicketData && unTicketData.length>19">
          <el-pagination background layout="prev, pager, next" :page-size="pagemsg8.pagesize" :pager-count="5" :page-count="pagemsg8.pagesize" :current-page="pagemsg8.page" :total="pagemsg8.total" @current-change="unTicketDataChange"></el-pagination>
        </div>
        <v-nomsg class="noOrder" v-if="unTicketData.length==0 && !allTicket" :config="noMsgTwl"></v-nomsg>
      </el-tab-pane>
      <el-tab-pane name="ticketSecond" label="开票历史" value="2">
        <v-tkhistory v-if="historyOrderData && historyOrderData.length>0" :orderData="historyOrderData" @handleUpdate="getUpdateMsg" v-loading="unfinishedOrderLoad"></v-tkhistory>
        <div class="pagination" v-if="historyOrderData && historyOrderData.length>19">
          <el-pagination background layout="prev, pager, next" :page-size="pagemsg9.pagesize" :pager-count="5" :page-count="pagemsg9.pagesize" :current-page="pagemsg9.page" :total="pagemsg9.total" @current-change="historyOrderDataChange"></el-pagination>
        </div>
        <v-nomsg class="noOrder" v-if="historyOrderData.length == 0" :config="noMsgThi"></v-nomsg>
      </el-tab-pane>
      <el-tab-pane name="ticketThird" value="3">
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
import TicketOrder from '@/pages/profile/components/myticket/ticketOrder'
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import TicketHistory from '@/pages/profile/components/myticket/ticketHistory'
import TicketRules from '@/pages/profile/components/myticket/ticketRules'
import ticketDetail from '@/pages/profile/components/common/Detail'
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
    'orderDetail',
    'pagemsg8',
    'pagemsg9',
    'allTicket'
  ],
  components: {
    'v-tkorder': TicketOrder,
    'v-tkhistory': TicketHistory,
    'v-tkrules': TicketRules,
    'v-nomsg': NoMsg,
    'v-detail': ticketDetail
  },
  data() {
    return {
      activeTicket: 'ticketFirst'
    }
  },
  methods: {
    handleTicket(item) {
      this.$emit('handleTicket', item.$attrs.value)
    },
    getUpdateMsg() {
      this.$emit('getUpdateMsg')
    },
    chengeItem() {
      this.activeTicket = 'ticketSecond'
      document.documentElement.scrollTop = 0
    },
    getTicketDetail() {
      this.$emit('getTicketDetail')
    },
    unTicketDataChange(val) {
      this.$emit('unTicketDataChange', val)
    },
    historyOrderDataChange(val) {
      this.$emit('historyOrderDataChange', val)
    }
  }
}
</script>

<style scoped>
.minheight {
  min-height: 400px;
}
</style>
