<template>
  <div>
    <v-nomsg :data="noMsg" v-if="isNoMsg"></v-nomsg>
    <div class="affirmOrder" ref="affirmOrder" v-else>
      <div class="contain" v-loading="loadGoods">
        <!-- 头部banner -->
        <v-banner :config="affirmOrder"></v-banner>
        <div class="main">
          <div class="goodsList">
            <v-backshopcart @handleLinkShopCart="handleLinkShopCart" :config="affirmOrder" @handleQuestion="handleReport"></v-backshopcart>
            <!-- 商品列表 -->
            <!-- <div class="goods">
              <v-list :config="affirmOrder" :data="curriculumLists"></v-list>
            </div> -->

            <!-- 自定义项目 -->
            <div class="goods">
              <v-list :config="affirmOrder" :data="curriculumLists"></v-list>
            </div>
            <!-- 商品信息 -->
            <v-orderinfo :data="orderinfo"></v-orderinfo>
          </div>
          <v-orderbtn :data="orderinfo" @commitOrder="handleSubmit" @showRpt="handleReport" :config="affirmOrder"></v-orderbtn>
        </div>
      </div>
    </div>
    <!-- 报告问题 -->
    <v-report :config="config" :showReportBug="showReportBug" @closeReport="closeReport" @reportProblem="reportProblem" :problem="problem"></v-report>
  </div>
</template>

<script>
import { affirmOrder, Pay } from '@/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import Banner from '@/pages/shop/components/banner'
import Repore from '@/components/common/Reports.vue'
import List from '@/pages/shop/components/List'
import orderInfo from '@/pages/shop/affirmorder/orderInfo'
import orderBtn from '@/pages/shop/affirmorder/orderBtn'
import noMsg from '@/pages/shop/affirmorder/noMsg'
import backShopCart from '@/pages/shop/affirmorder/backShopCart'
import { message, splitUrl, open } from '@/lib/util/helper'
import { home } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-banner': Banner,
    'v-report': Repore,
    'v-list': List,
    'v-orderinfo': orderInfo,
    'v-orderbtn': orderBtn,
    'v-nomsg': noMsg,
    'v-backshopcart': backShopCart
  },
  data() {
    return {
      affirmOrder: {
        type: 'affirmOrder',
        text: '确认订单'
      },
      customOrder: {
        type: 'customOrder',
        text: '确认订单'
      },
      config: {
        type: 2
      },
      flag: true,
      person: true,
      isNoMsg: false,
      loadGoods: false,
      curriculumLists: [],
      customculumLists: [],
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
      },
      customId: null,
      curriculumForm: {
        curriculumProjectId: null
      },
      payForm: {
        ids: null,
        type: null
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
        if (response.status === '100100') {
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
      console.log('123')
      let newWindow = window.open('about:blank')
      affirmOrder.commitOrder().then(res => {
        // console.log(res, '123')
        if (res.status === 0) {
          //解决异步加载浏览器会将新打开的页面作为窗口拦截
          // newWindow.location.href =
          //   window.location.origin + '/shop/' + res.data.id
          // let urlLink = {
          //   base: '/shop/wepay',
          //   order: res.data.id,
          //   attach: 1
          // }
          // open(urlLink)
          // window.open(
          //   window.location.origin +
          //     '/shop/wepay?order=' +
          //     res.data.id +
          //     '&attach=1'
          // )
          newWindow.location.href =
            window.location.origin +
            '/shop/wepay/' +
            '?order=' +
            res.data.id +
            '&attach=1'
        } else {
          message(this, 'error', res.msg)
        }
      })
    },
    // 自定义项目 提交订单
    handleGetCode() {
      this.payForm.ids = this.customId
      this.payForm.type = 2
      let newWindow = window.open('about:blank')
      affirmOrder.getCode(this.payForm).then(res => {
        // console.log(res, '这是res123456789')
        // let urlLink = {
        //   base: '/shop/wepay',
        //   order: res.data.order_id,
        //   attach: 2
        // }
        // open(urlLink)
        newWindow.location.href =
          window.location.origin +
          '/shop/wepay/' +
          '?order=' +
          res.data.order_id +
          '&attach=2'

        // window.open(
        //   window.location.origin +
        //     '/shop/wepay?order=' +
        //     res.data.order_id +
        //     '&attach=2'
        // )
      })
    },
    //获取商 品信息 列表
    handleGoodsList() {
      this.loadGoods = true
      affirmOrder.goodsList(this.addArray).then(res => {
        // console.log(res, '这是res')
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
    },
    // 自定义项目确认订单
    handleCustomProject(val) {
      this.affirmOrder.type = 'customOrder'
      this.loadGoods = true
      this.curriculumForm.curriculumProjectId = val
      affirmOrder.customProject(this.curriculumForm).then(res => {
        this.loadGoods = false
        // console.log(res, '我草')
        if (res.status === 0) {
          this.curriculumLists = res.data.curriculumProjectDetail
          this.orderinfo = res.data.curriculumProjectDetail
          this.orderinfo.nickName = persistStore.get('nickName')
        }
      })
    },
    // 提交订单
    handleSubmit() {
      if (this.customId) {
        this.handleGetCode()
      } else {
        this.handleSubmitOrder()
      }
    }
  },
  mounted() {
    this.customId = splitUrl(0, 1)
    if (splitUrl(0, 1)) {
      this.handleCustomProject(this.customId)
    } else {
      this.handleGoodsList()
    }
  }
}
</script>

