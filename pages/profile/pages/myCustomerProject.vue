<template>
  <div>
    <el-card class="changeNav">
      <div slot="header" class="clearfix">
        <span>自定制项目</span>
      </div>
      <div class="cusProject" v-if="customerProjectListData.length > 0">
        <v-customercard :customerProjectListData="customerProjectListData" @deleteCustomerProject="deleteCustomerProject"></v-customercard>
      </div>
      <div class="pagination" v-if="customerPagemsg.total>19&&customerProjectListData.length > 0">
        <el-pagination background layout="prev, pager, next" :page-size="customerPagemsg.pagesize" :pager-count="5" :page-count="customerPagemsg.pagesize" :current-page="customerPagemsg.page" :total="customerPagemsg.total" @current-change="customerProjectChange"></el-pagination>
      </div>
      <v-nomsg class="noOrder" v-if="customerProjectListData.length == 0" :config="noMsg"></v-nomsg>
    </el-card>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import CustomerCard from '@/pages/profile/components/CustomerCard'
export default {
  props: ['customerProjectListData', 'customerPagemsg'],
  data() {
    return {
      noMsg: {
        type: 'myCustomerProject',
        text: '抱歉，没有自定制项目~'
      }
    }
  },
  components: {
    'v-customercard': CustomerCard,
    'v-nomsg': NoMsg
  },
  methods: {
    customerProjectChange(val) {
      this.$emit('customerProjectChange', val)
    },
    deleteCustomerProject(id) {
      this.$emit('deleteCustomerProject', id)
    }
  }
}
</script>
