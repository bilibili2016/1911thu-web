<template>
  <div class="wepay" ref="wepay" v-loading="loading">
    <div class="checkedCourse-wepay">
      <!-- 头部banner -->
      <v-banner :config="wePay"></v-banner>
      <div class="main">

        <div class="company">
          <div class="title clearfix">
            <span class="fl">订单：{{orderDetail.order_sn}}</span>
            <span class="fr fr-up" @click="takeUp" v-if="takeupMsg === true">收起
              <i class="el-icon-arrow-down"></i>
            </span>
            <span class="fr" @click="takeUp" v-if="takeupMsg === false">展开</span>
          </div>
          <div class="content">
            <div class="course">
              <!-- 购买课程列表 -->
              <v-list :config="wePay" :data="orderCurriculumLists" v-if="takeupMsg"></v-list>
              <!-- 支付类型选择-支付 -->
              <v-paytype :orderDetail="orderDetail" :codeData="codeData" :listData="orderCurriculumLists"></v-paytype>
            </div>
          </div>

        </div>

      </div>
      <!-- 支付二维码展示 -->
      <v-qrcode :orderDetail='orderDetail'></v-qrcode>
      <!-- 报告问题 -->
      <v-report :config="config"></v-report>
    </div>
  </div>
</template>

<script>
import { wepay } from '@/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import Vue from 'vue'
import VueQrcode from '@xkeshi/vue-qrcode'
import Repore from '@/components/common/Report.vue'
import Banner from '@/pages/shop/components/banner'
import List from '@/pages/shop/components/List'
import PayType from '@/pages/shop/wepay/payType'
import Qrcode from '@/pages/shop/wepay/qrcode'
import { setPagesHeight } from '~/lib/util/helper'
Vue.component(VueQrcode.name, VueQrcode)
export default {
  components: {
    'v-banner': Banner,
    'v-list': List,
    'v-report': Repore,
    'v-paytype': PayType,
    'v-qrcode': Qrcode
  },
  data() {
    return {
      wePay: {
        type: 'wePay',
        text: '支付中心'
      },
      payListForm: {
        orderId: null
      },
      orderDetail: {
        order_sn: null,
        order_amount: null
      },
      orderCurriculumLists: [],
      codeData: {
        code_url: '',
        qr_code: ''
      },
      config: {
        type: 2
      },
      val: '',
      interval: '',
      seconds: 1000000,
      takeupMsg: false,
      loading: false
    }
  },
  computed: {
    // ...mapState('auth', ['kid']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['setKid', 'setProductsNum']),
    takeUp() {
      this.takeupMsg = !this.takeupMsg
    },

    goLink(item) {
      this.$router.push(item)
    },
    // 获取订单id列表
    getPayList(item) {
      this.loading = true
      let urlArr = window.location.href.split('/')
      // let cpyid = persistStore.get('cpyid')
      this.payListForm.orderId = urlArr[urlArr.length - 1]

      wepay.webPay(this.payListForm).then(response => {
        this.loading = false
        this.orderDetail = response.data.data.orderDetail
        this.orderCurriculumLists = response.data.data.orderCurriculumLists
        this.codeData.code_url = response.data.code_url
        this.codeData.qr_code = response.data.qr_code
        this.$bus.$emit('load', false)
        this.shopCartList()

        if (item === 'recode') {
          this.$bus.$emit('addPaySubmit')
        }
      })
    },
    shopCartList() {
      wepay.shopCartList().then(response => {
        let len = {
          pn: response.data.curriculumCartList.length
        }
        this.setProductsNum(len)
      })
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.getPayList()
    }
    setPagesHeight()

    this.$bus.$on('getPayList', data => {
      this.getPayList(data)
    })
  }
}
</script>


