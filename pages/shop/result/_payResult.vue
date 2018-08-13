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
      <div v-if="hasCode">
        <h5>
          <span @click="handleChoiceCourse">继续选课</span>
          <span @click="handleLinkProfile('tab-fourth')">查看订单</span>
        </h5>
        <div class="goback">
          <span>
            <i>{{seconds}}</i>s后</span>前往个人中心</div>
      </div>
      <div v-else>
        <div class="tips">
          <p>您购买的商品已生成兑换码</p>
          <p>请前往
            <span>“我的中心 —兑换码管理”</span>查看，兑换后可观看课程
          </p>
        </div>
        <p class="sure">
          <span @click="goMycourse('tab-seventh')">确定</span>
        </p>
      </div>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { payResult } from '@/lib/v1_sdk/index'
export default {
  data() {
    return {
      success: true,
      payCompleteForm: {
        orderId: null
      },
      hasCode: false,
      payCompleteData: {},
      gidForm: { gids: null },
      seconds: 5,
      link: null,
      interval: null
    }
  },
  methods: {
    ...mapActions('auth', ['setGid']),
    // 继续选课
    handleChoiceCourse() {
      window.open(
        window.location.origin + '/course/' + '1' + '?pid=' + '0' + '&xid=1'
      )
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
      this.payCompleteForm.orderId = window.location.pathname.split('/')[3]

      payResult.payComplete(this.payCompleteForm).then(response => {
        this.payCompleteData = response.data
        if (response.data.pay_number === '1') {
          this.hasCode = true
          this.interval = setInterval(() => {
            if (this.seconds < 1) {
              this.seconds = 0
              clearInterval(this.interval)
              // this.goLink('tab-first')
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
    this.payComplete()
    this.link = this.$route.path
  }
}
</script>

