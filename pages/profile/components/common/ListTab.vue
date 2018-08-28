<template>
  <div>
    <v-datapick :orderNum="order"></v-datapick>
    <v-order v-if="data && data.length>0" :data="data" :config="orderType" @goOrderDetail="getOrderDetail"></v-order>
    <div class="pagination" v-if="pagemsg.total>19">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="pageChange"></el-pagination>
    </div>
    <v-nomsg class="noOrder" v-if="data.length == 0" :config="noMsg"></v-nomsg>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import Order from '@/pages/profile/components/myorder/OrderList'
import Detail from '@/pages/profile/components/common/Detail'
import DataPick from '@/pages/profile/components/myorder/DataPick'
export default {
  props: ['order', 'data', 'orderType', 'pagemsg', 'noMsg'],
  components: {
    'v-nomsg': NoMsg,
    'v-order': Order,
    'v-detail': Detail,
    'v-datapick': DataPick
  },
  methods: {
    pageChange(val) {
      this.$emit('pageChange', val)
    },
    getOrderDetail() {}
  }
}
</script>

<style scoped>
</style>
