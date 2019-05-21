<template>
  <div class="orderInfo">
    <div class="orderDelete" v-if="showOrderList" @click="goDelete">
      <i class="el-icon-delete delIcon"></i>订单回收站
    </div>
    <!-- 订单 -->
    <el-card v-if="showOrderList">
      <el-tabs class="orderCard" v-model="activeName" @tab-click="handleOrder">
        <el-tab-pane name="orderFirst" label="全部">
          <!-- <span class="" slot="label">全部</span> -->
          <v-listtab :allOrderLoadAll="allOrderLoadAll" :order="orderZero" :data="allOrderData" :orderType="orderType" :pagemsg="pagemsg4" :noMsg="noMsgTen" @pageChange="getAllOrderDataChange" @handleUpdate="handleUpdate()"></v-listtab>
        </el-tab-pane>
        <el-tab-pane name="orderSecond">
          <span class="payCut" slot="label">待付款
            <i v-if="unfinishedOrderData && unfinishedOrderData.length>0">{{orderTotal}}</i>
          </span>
          <v-listtab :order="orderOne" :data="unfinishedOrderData" :orderType="orderType" :pagemsg="pagemsg5" :noMsg="noMsgTen" @pageChange="unfinishedOrderDataChange" @handleUpdate="handleUpdate()"></v-listtab>
        </el-tab-pane>
        <el-tab-pane name="orderThird" label="已付款">
          <!-- <span class="payOk" slot="label">已付款</span> -->
          <v-listtab :order="orderTwo" :data="readyOrderData" :orderType="orderType" :pagemsg="pagemsg6" :noMsg="noMsgTen" @pageChange="getReadyOrderDataChange"></v-listtab>
        </el-tab-pane>
        <el-tab-pane name="orderFour" label="已关闭">
          <!-- <span class="payOff" slot="label">已关闭</span> -->
          <v-listtab :order="orderThree" :data="invalidOrderData" :orderType="orderType" :pagemsg="pagemsg7" :noMsg="noMsgTen" @pageChange="closedOrderDataChange"></v-listtab>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <v-detail v-if="!showOrderList&&!showDelete" @goBack="goBack" @goTicketBack="goTicketBack" :orderDetail="orderDetail" :bankInfo="bankInfo" :courseList="courseList" :teacherBespokeList="teacherBespokeList" :projectList="projectList" :vipList="vipList" :config="orderType" v-loading="detailMsg"></v-detail>
    <v-delete v-if="showDelete" :allOrderData="allOrderData" :config="orderType" @goBack="goBack"></v-delete>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'

import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import Detail from '@/pages/profile/components/common/Detail'
import ListTab from '@/pages/profile/components/common/ListTab.vue'
import Delete from '@/pages/profile/components/myorder/Delete.vue'
export default {
  watch: {
    searchDatas (data) {
      this.$bus.$emit('searchDatas', data)
    }
  },
  components: {
    'v-nomsg': NoMsg,
    'v-detail': Detail,
    'v-listtab': ListTab,
    'v-delete': Delete
  },
  props: [
    'showOrderList',
    'showDelete',
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
    'teacherBespokeList',
    'vipList',
    'orderType',
    'detailMsg',
    'pagemsg4',
    'pagemsg5',
    'pagemsg6',
    'pagemsg7',
    'allOrderLoadAll',
    'orderTotal'
  ],
  data () {
    return {
      activeName: 'orderFirst',
      orderZero: '0',
      orderOne: '1',
      orderTwo: '2',
      orderThree: '3'
    }
  },
  mounted () {
    this.$bus.$on('activeOrder', data => {
      this.activeName = 'orderFirst'
    })
  },
  methods: {
    goDelete () {
      this.$emit('goDelete')
    },
    getUpdateMsg (data) {
      this.$emit('getUpdateMsg', data)
    },
    getOrderDetail () {
      this.$emit('getOrderDetail')
    },
    getAllOrderDataChange (val) {
      this.$emit('getAllOrderDataChange', 0, val)
    },
    unfinishedOrderDataChange (val) {
      this.$emit('unfinishedOrderDataChange', 1, val)
    },
    getReadyOrderDataChange (val) {
      this.$emit('getReadyOrderDataChange', 2, val)
    },
    closedOrderDataChange (val) {
      this.$emit('closedOrderDataChange', 3, val)
    },
    invalidOrderDataChange (val) {
      this.$emit('invalidOrderDataChange', val)
    },
    goBack (val) {
      this.$emit('goBack', val)
    },
    goTicketBack (val) {
      this.$emit('goTicketBack', val)
    },
    pageChange (val) {
      this.$emit('pageChange', val)
    },
    handleUpdate () {
      //取消订单 全部/未完成/已关闭都需要更新
      this.$emit('handleUpdate', 0, 1)
      this.$emit('handleUpdate', 1, 1)
      this.$emit('handleUpdate', 3, 1)
    },
    handleOrder (item) {
      if (persistStore.get('token')) {
        switch (item.name) {
          case 'orderFirst':
            this.$emit('handleUpdate', 0, 1, true)
            this.$emit('handleUpdate', 1, 1, true)
            break
          case 'orderSecond':
            this.$emit('handleUpdate', 1, 1, true)
            break
          case 'orderThird':
            this.$emit('handleUpdate', 2, 1, true)

            break
          case 'orderFour':
            this.$emit('handleUpdate', 3, 1, true)

            break
        }
      } else {
        this.$router.push('/')
        this.$bus.$emit('loginShow', true)
      }
    }
  }
}
</script>

