<template>
  <div>
    <div class="result">
      <img v-if="success" src="@/assets/images/success.png" alt="">
      <img v-else src="@/assets/images/error.png" alt="">
      <h4 v-if="success">支付成功！</h4>
      <h4 v-else>支付失败！</h4>
      <div class="restltMsg" v-if="success">
        <p>
          <span>订单：{{payCompleteData.order_sn}}</span>
          <span> | </span>
          <span>支付金额：￥{{payCompleteData.order_amount}}</span>
        </p>
      </div>
      <!-- <div class="restltMsg restltWord" v-else>
        <h6>订单：1806201053081435</h6>
        <p>支付金额：￥2250.00</p>
        <p>错误原因：账户余额不足</p>
      </div> -->
      <!-- <h5 v-if="success">
        <span @click="choiceCourse">继续选课</span>
        <span>查看订单</span>
      </h5>
      <h5 v-else>
        <span>重新下单</span>
      </h5> -->
      <div class="goback">
        <span>{{seconds}}s后</span>前往首页</div>
    </div>

  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { home } from '@/lib/v1_sdk/index'
export default {
  data() {
    return {
      success: true,
      payCompleteForm: {
        orderId: null
      },
      payCompleteData: {},
      seconds: 5,
      interval: null
    }
  },
  methods: {
    choiceCourse() {
      this.$router.push('/course/chooselesson')
    },
    payComplete() {
      this.payCompleteForm.orderId = persistStore.get('cpyid')
      return new Promise((resolve, reject) => {
        home.payComplete(this.payCompleteForm).then(response => {
          this.payCompleteData = response.data
          this.interval = setInterval(() => {
            if (this.seconds <= 0) {
              // this.seconds = 1
              this.$router.push('/')
              clearInterval(this.interval)
            } else {
              this.seconds--
            }
          }, 1000)
          resolve(true)
        })
      })
    }
  },
  mounted() {
    this.payComplete()
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/shop/payResult';
.goback {
  width: 100px;
  margin: 80px auto;
}
</style>
