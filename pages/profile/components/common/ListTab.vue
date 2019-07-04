<template>
  <div>
    <v-datapick :orderNum="order"></v-datapick>
    <div :class="{ minheight : allOrderLoadAll}" v-loading="allOrderLoadAll">
      <v-order v-if="data && data.length>0" :data="data" :config="orderType" @goOrderDetail="getOrderDetail" @handleUpdate="handleUpdate" @handleUpdateDelete="handleUpdateDelete"></v-order>
    </div>
    <div class="pagination" v-show="pagemsg.total>19 && data.length != 0">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="pageChange"></el-pagination>
    </div>
    <v-nomsg v-if="data.length == 0&&!allOrderLoadAll" :config="noMsg"></v-nomsg>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import Order from '@/pages/profile/components/myorder/OrderList'
import DataPick from '@/pages/profile/components/myorder/DataPick'
export default {
  props: ['order', 'data', 'orderType', 'pagemsg', 'noMsg', 'allOrderLoadAll'],
  components: {
    'v-nomsg': NoMsg,
    'v-order': Order,
    'v-datapick': DataPick
  },
  methods: {
    pageChange (val) {
      this.$emit('pageChange', val)
      document.body.scrollTop = document.documentElement.scrollTop = 172
    },
    getOrderDetail () { },
    handleUpdate () {
      this.$emit('handleUpdate')
    },
    handleUpdateDelete () {
      this.$emit('handleUpdateDelete')
    }
  }
}
</script>

<style scoped>
.minheight {
  min-height: 400px;
}
</style>
