<template>
  <div>
    <v-nomsg :data="noMsg" v-if="isNoMsg"></v-nomsg>
    <div class="customAffirmOrder" ref="affirmOrder" v-else>
      <div class="contain" v-loading="loadGoods">
        <!-- 头部banner -->
        <v-banner :config="customAffirmOrder"></v-banner>
        <div class="main">
          <div class="goodsList">
            <v-backshopcart @handleLinkShopCart="handleReport" :config="customAffirmOrder"></v-backshopcart>
            <!-- 商品列表 -->
            <div class="goods">
              <v-card :config="customAffirmOrder" :data="curriculumLists"></v-card>
            </div>
            <!-- 商品信息 -->
            <v-orderinfo :data="orderinfo"></v-orderinfo>
          </div>
          <v-orderbtn :data="orderinfo.goodsAmount" @commitOrder="handleSubmitOrder" @showRpt="handleReport" :config="customAffirmOrder"></v-orderbtn>
        </div>
      </div>
    </div>
    <!-- 报告问题 -->
    <v-report :config="config" :showReportBug="showReportBug" @closeReport="closeReport" @reportProblem="reportProblem" :problem="problem"></v-report>
  </div>
</template>

<script>
import { affirmOrder } from '@/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import Banner from '@/pages/shop/components/banner'
import Repore from '@/components/common/Reports.vue'
import Card from '@/pages/shop/components/card'
import orderInfo from '@/pages/shop/customAffirmOrder/orderInfo'
import orderBtn from '@/pages/shop/affirmorder/orderBtn'
import noMsg from '@/pages/shop/affirmorder/noMsg'
import backShopCart from '@/pages/shop/affirmorder/backShopCart'
import { message } from '@/lib/util/helper'
import { home } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-banner': Banner,
    'v-report': Repore,
    'v-card': Card,
    'v-orderinfo': orderInfo,
    'v-orderbtn': orderBtn,
    'v-nomsg': noMsg,
    'v-backshopcart': backShopCart
  },
  data() {
    return {
      customAffirmOrder: {
        type: 'customAffirmOrder',
        text: '确认订单'
      },
      config: {
        type: 2
      },
      flag: true,
      person: true,
      isNoMsg: false,
      loadGoods: true,
      curriculumLists: [],
      curriculumSum: null,
      payNumber: null,
      restaurants: [],
      company: {
        id: null
      },
      orderinfo: {
        curriculumProjectLists: '',
        curriculumSum: '',
        goodsAmount: '',
        payNumber: ''
      },
      noMsg: {
        img: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
        backSeconds: 3
      },
      showReportBug: false,
      problem: {
        types: 1,
        curriculumId: null,
        content: '',
        curriculumcatalogid: ''
      }
    }
  },
  watch: {
    // 保留例子
    'ticketForm.province'(val, oldval) {
      if (!this.province && this.province.length == 0) {
        this.getRegionList()
      }
      this.city = this.getRegion(this.province, val)
    }
  },

  methods: {
    // 报告问题
    handleReport() {
      // this.$bus.$emit('openReport')
      this.showReportBug = true
    },
    closeReport() {
      this.showReportBug = false
      this.problem.content = ''
    },
    reportProblem() {
      this.problem.curriculumId = this.config.curriculumId
      this.problem.curriculumcatalogid = this.config.catalogId
      this.problem.types = 2
      home.reportProblem(this.problem).then(response => {
        if (response.status === 100100) {
          message(this, 'success', response.msg)
        } else {
          this.closeReport()
          message(this, 'success', response.msg)
        }
        if (this.word === '') {
          return
        }
      })
    },
    // 返回购物车
    handleLinkShopCart() {
      this.$router.push('/shop/shoppingcart')
    },
    // 点击提交订单
    handleSubmitOrder() {
      let newWindow = window.open('about:blank')
      affirmOrder.commitOrder().then(res => {
        if (res.status === 0) {
          //解决异步加载浏览器会将新打开的页面作为窗口拦截
          newWindow.location.href =
            window.location.origin + '/shop/' + res.data.id
        } else {
          message(this, 'error', res.msg)
        }
      })
    },
    //获取商 品信息 列表
    handleGoodsList() {
      this.loadGoods = true
      affirmOrder.goodsList(this.addArray).then(res => {
        if (res.status === 0) {
          this.curriculumLists = res.data.curriculumProjectLists
          this.orderinfo = res.data
          this.orderinfo.nickName = persistStore.get('nickName')
          if (JSON.stringify(res.data.companyInfo) != '{}') {
            this.company = res.data.companyInfo
            this.person = false
            this.flag = false
          }
          this.loadGoods = false
        } else {
          message(this, 'error', res.msg)
          let timer = setInterval(() => {
            if (this.noMsg.backSeconds <= 1) {
              clearInterval(timer)
              this.$router.push('/')
            }
            this.noMsg.backSeconds--
          }, 1000)
          this.isNoMsg = true
        }
      })
    }
  },
  mounted() {
    this.handleGoodsList()
  }
}
</script>
