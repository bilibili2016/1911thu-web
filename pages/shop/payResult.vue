<template>
  <div>
    <div class="result">
      <img v-if="success" src="http://papn9j3ys.bkt.clouddn.com/success.png" alt="">
      <img v-else src="http://papn9j3ys.bkt.clouddn.com/error.png" alt="">
      <h4 v-if="success">支付成功！</h4>
      <h4 v-else>支付失败！</h4>
      <div class="restltMsg" v-if="success">
        <p>
          <span>订单：{{payCompleteData.order_sn}}</span>
          <span> | </span>
          <span>支付金额：￥{{payCompleteData.order_amount}}</span>
        </p>
      </div>
      <div v-if="hasCode" v-show="showMsg">
        <h5>
          <span @click="handleChoiceCourse">继续选课</span>
          <span @click="handleLinkProfile('tab-fourth')">查看订单</span>
        </h5>
        <div class="goback">
          <span>
            <i>{{seconds}}</i>s后</span>前往个人中心</div>
      </div>
      <div v-else v-show="showMsg">
        <div class="tips">
          <p class="tips-one">您购买的商品已生成兑换码</p>
          <p>请前往
            <span class="tips-two">“我的中心 — 兑换码管理”</span>查看，兑换后可观看课程
          </p>
        </div>
        <p class="sure">
          <span @click="goLink('tab-seventh')">确定</span>
        </p>
      </div>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { payResult } from '@/lib/v1_sdk/index'
import { banBackSpace, matchSplits } from '@/lib/util/helper'
import { store as persistStore } from '~/lib/core/store'
export default {
  data() {
    return {
      success: true,
      payCompleteForm: {
        orderId: null,
        attachs: 1 //正式订单和临时订单区分：1正式，2临时订单
      },
      hasCode: false,
      payCompleteData: {},
      gidForm: { gids: null },
      seconds: 5,
      link: null,
      interval: null,
      links: '',
      showMsg: false
    }
  },
  methods: {
    ...mapActions('auth', ['setGid']),
    // 继续选课
    handleChoiceCourse() {
      this.$router.push({
        path: '/course/category',
        query: {
          cid: 0,
          cp: 0,
          xid: 1,
          pids: 0
        }
      })
    },
    // 点击查看订单
    handleLinkProfile(item) {
      this.gidForm.gids = item
      this.setGid(this.gidForm)
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', item)
      clearInterval(this.interval)
      this.$router.push({
        path: '/profile',
        query: {
          tab: item
        }
      })
    },
    payComplete() {
      this.payCompleteForm.orderId = matchSplits('order')
      payResult.payComplete(this.payCompleteForm).then(response => {
        this.payCompleteData = response.data
        this.showMsg = true
        if (response.data.curriculumListType == '1') {
          // 订单内只有课程
          this.links = 'tab-second'
        }
        if (response.data.curriculumListType == '2') {
          // 订单内只有项目
          this.links = 'tab-third'
        }
        if (response.data.curriculumListType == '3') {
          // 订单内课程+项目
          this.links = 'tab-first'
        }
        if (response.data.invitation_code === '') {
          this.hasCode = true
          this.interval = setInterval(() => {
            if (this.seconds < 1) {
              this.seconds = 0
              clearInterval(this.interval)
              this.goLink(this.links)
            } else {
              this.seconds--
            }
            if (this.$route.path !== this.link) {
              clearInterval(this.interval)
            }
          }, 1000)
        } else {
          this.hasCode = false
        }
      })
    },
    goLink(item) {
      this.gidForm.gids = item
      this.setGid(this.gidForm)
      clearInterval(this.interval)
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', item)
    }
  },
  mounted() {
    // window.history.go(-1)
    this.ref = this.$route.query.ref
    this.payComplete()
    this.link = this.$route.path
    //禁止浏览器的后退
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function() {
      history.pushState(null, null, document.URL)
    })
  }
}
</script>

