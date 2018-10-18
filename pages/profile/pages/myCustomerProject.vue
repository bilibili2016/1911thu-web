<template>
  <div>
    <el-card class="changeNav">
      <div slot="header" class="clearfix">
        <span>自定制项目</span>
        <span class="customer-add" @click="handleCustomerAdd">
          <i class="el-icon-circle-plus-outline add-icon"></i>新增
        </span>
      </div>
      <div class="cusProject myProject" v-loading="customer" :class="{ minheight : customer}">
        <v-customercard :customerProjectListData="customerProjectListData" @deleteCustomerProject="deleteCustomerProject" v-if="customerProjectListData.length > 0"></v-customercard>
      </div>
      <div class="pagination" v-if="customerPagemsg.total>11&&customerProjectListData.length > 0">
        <el-pagination background layout="prev, pager, next" :page-size="customerPagemsg.pagesize" :pager-count="5" :page-count="customerPagemsg.pagesize" :current-page="customerPagemsg.page" :total="customerPagemsg.total" @current-change="customerProjectChange"></el-pagination>
      </div>
      <v-nomsg v-if="customerProjectListData.length == 0&&!customer" :config="noMsg"></v-nomsg>
    </el-card>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import CustomerCard from '@/pages/profile/components/common/CustomerCard'

export default {
  props: ['customerProjectListData', 'customerPagemsg', 'customer'],
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
    handleCustomerAdd() {
      //跳转到自定制项目
      if (persistStore.get('token')) {
        this.$router.push({
          path: '/project/customerProject',
          query: {
            sid: '',
            edit: 1
          }
        })
      } else {
        this.$bus.$emit('loginShow')
      }
    },
    customerProjectChange(val) {
      this.$emit('customerProjectChange', val)
    },
    deleteCustomerProject(id) {
      this.$emit('deleteCustomerProject', id)
    }
  }
}
</script>
<style scoped>
.minheight {
  min-height: 400px;
}
</style>
