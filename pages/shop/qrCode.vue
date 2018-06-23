<template>
  <div class="checkedCourse-wepay">
    <div class="banner">
    </div>
    <div class="main">
      <div>
        <div class="company">
          <div class="title clearfix">
            <span class="fl">订单：{{orderDetail.order_sn}}</span>
            <span class="fr">收起</span>
          </div>
          <div class="content">
            <div class="course">
              <div class="more">
                支付方式
              </div>
              <div class="method">
                <div class="center">
                  <div class="zfb fl" @click="selectWx" :class="{borderColor: wxMsg}">
                    <img src="@/assets/images/wxp.png" alt="">
                    <img src="@/assets/images/ok.png" alt="" class="okImg" v-if="wxMsg">
                  </div>
                  <div class="wx fr" @click="selectZfb" :class="{borderColor: zfbMsg}">
                    <img src="@/assets/images/zfb.png" alt="">
                    <img src="@/assets/images/ok.png" alt="" class="okImg" v-if="zfbMsg">
                  </div>
                </div>
              </div>
              <div class="text">
                请在24小时以内支付完成，如未完成此订单将自动关闭，需重新购买！
                <span class="fr">应付金额：¥{{orderDetail.order_amount}}</span>
              </div>
              <div class="fr pay">
                <el-button>立即支付</el-button>
              </div>
              <div class="fk fr">
                我有疑问，需要反馈?
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
  </div>
</template>

<script>
import { home } from '@/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  data() {
    return {
      courseList: [],
      curriculumPayData: [],
      loding: true,
      payListForm: {
        orderId: 100,
        userId: 202
      },
      orderDetail: {
        order_sn: null,
        order_amount: null
      },
      wxMsg: false,
      zfbMsg: false
    }
  },
  // computed: {
  //   ...mapState('auth', ['kid'])
  // },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    goLink(item) {
      this.$router.push(item)
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-'
      let M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      let D = date.getDate() + ' '
      let h = date.getHours() + ':'
      let m = date.getMinutes() + ':'
      let s = date.getSeconds()
      return Y + M + D + h + m + s
    },
    // 获取订单id列表
    selectWx() {
      this.wxMsg = true
      this.zfbMsg = false
    },
    selectZfb() {
      this.wxMsg = false
      this.zfbMsg = true
    }
  }
}
</script>

<style scoped >
.noCourse {
  width: 100%;
  height: 600px;
  text-align: center;
}
.noCourse img {
  width: 316px;
  height: 274px;
  margin-top: 35px;
}
.profile .content .noCourse h4 {
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: #999;
  font-size: 20px;
}
.borderColor {
  border: 1px red solid !important;
}
</style>
