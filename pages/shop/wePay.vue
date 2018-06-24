<template>
  <div class="checkedCourse-wepay">
    <div class="banner">
      <div>支付中心</div>
    </div>
    <div class="main">
      <div>

        <div class="company">
          <div class="title clearfix">
            <span class="fl">订单：{{orderDetail.order_sn}}</span>
            <span class="fr" @click="takeUp" v-if="takeupMsg === true">收起</span>
            <span class="fr" @click="takeUp" v-if="takeupMsg === false">展开</span>
          </div>
          <div class="content">
            <div class="course">
              <div class="courseOne" v-for="(course,index) in orderCurriculumLists" :key="index" v-if="takeupMsg">
                <img @click="goCourseInfo(course,index)" class="fl" :src="course.picture" alt="">
                <div class="fl">
                  <h4 @click="goCourseInfo(course,index)">{{course.curriculum_title}}</h4>
                  <h6>{{course.curriculum_time}}学时</h6>
                  <p>讲师：{{course.teacher_name}}</p>
                </div>
                <div class="coursePrice">
                  ￥{{course.price}}
                </div>
                <div class="courseNumber">
                  {{course.pay_number}}
                </div>
              </div>
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
                <el-button @click="addPaySubmit">立即支付</el-button>
              </div>
              <div class="fk fr">
                我有疑问，需要反馈?
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="unlogged" @click="unloggedClick" v-if="wxMask">
      <div class="unloginner" style="width:374px;height:420px;">
        <div class="texts">扫一扫付款(元)
          <span>￥{{orderDetail.order_amount}}</span>
        </div>
        <div class="update">
          <qrcode :value="val" :options="{ size: 220 }" class="qrcode"></qrcode>
        </div>
        <div class="rechoise" @click="rechoise">
          <img :src="updateImg" alt=""> 重新选择支付方式
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { home } from '@/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import Vue from 'vue'
import VueQrcode from '@xkeshi/vue-qrcode'
Vue.component(VueQrcode.name, VueQrcode)
export default {
  data() {
    return {
      company: '北京分分形状科技有限公司',
      time: '2018-06-05 09：30：05',
      courseList: [],
      curriculumPayData: [],
      allPrice: '69.00',
      status: '等待审核',
      time: null,
      noMsgImg: 'http://pam8iyw9q.bkt.clouddn.com/noMsg.png',
      noData: false,
      loding: true,
      kidForm: {
        kids: null
      },
      payListForm: {
        orderId: null
      },
      orderDetail: {
        order_sn: null,
        order_amount: null
      },
      orderCurriculumLists: [],
      wxMsg: true,
      zfbMsg: false,
      addPaySubmitForm: {
        types: '1',
        companyId: null
      },
      wxMask: false,
      code_url: '',
      qr_code: '',
      val: '',
      interval: '',
      seconds: 1000000,
      takeupMsg: false,
      updateImg: require('@/assets/images/update.png')
    }
  },
  computed: {
    ...mapState('auth', ['kid']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    if (this.isAuthenticated) {
      this.getPayList()
    }
  },
  methods: {
    ...mapActions('auth', ['setKid', 'setProductsNum']),
    takeUp() {
      this.takeupMsg = !this.takeupMsg
    },
    unloggedClick() {
      this.wxMask = false
    },
    rechoise() {
      this.wxMask = false
    },
    selectPayApply(item, index) {
      persistStore.set('pay', index)
      persistStore.set('price', item.totalPresentPrice)
      this.$router.push('/shop/checkedCourseList')
    },
    goLink(item) {
      this.$router.push(item)
    },
    goCourseInfo(item, index) {
      this.kidForm.kids = item.curriculum_id
      persistStore.set('kid', item.curriculum_id)
      this.setKid(this.kidForm)
      this.$router.push('/course/pages/coursedetail')
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000)
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
    getPayList() {
      this.payListForm.orderId = persistStore.get('cpyid')
      return new Promise((resolve, reject) => {
        home.webPay(this.payListForm).then(response => {
          this.orderDetail = response.data.data.orderDetail
          this.orderCurriculumLists = response.data.data.orderCurriculumLists
          this.code_url = response.data.code_url
          this.qr_code = response.data.qr_code
          this.setProductsNum(0)
          resolve(true)
        })
      })
    },
    selectWx() {
      this.wxMsg = true
      this.zfbMsg = false
    },
    selectZfb() {
      this.wxMsg = false
      this.zfbMsg = true
    },
    getStatus() {
      this.interval = setInterval(() => {
        if (this.seconds <= 0) {
          clearInterval(this.interval)
        } else {
          this.seconds--
          home.payResult(this.payListForm).then(response => {
            if (response.status === 0) {
              this.wxMask = false
              this.$router.push('/shop/payResult')
              clearInterval(this.interval)
            }
          })
        }
      }, 1000)
    },
    addPaySubmit() {
      this.wxMask = true
      if (this.wxMsg === true) {
        this.val = this.code_url
        this.getStatus()
      } else {
        this.val = this.qr_code
        this.getStatus()
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
.texts {
  width: 200px;
  margin: 60px auto 0px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(34, 34, 34, 1);
  line-height: 25px;
  margin-bottom: 20px;
  span {
    color: #ff5ff5;
    font-size: 19px;
  }
}
.update {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(115, 46, 175, 1);
  line-height: 25px;
  margin: 20px auto;
  width: 220px;
  margin: 0 auto;
}
.rechoise {
  width: 155px;
  height: 17px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(115, 46, 175, 1);
  line-height: 25px;
  margin: 20px auto;
  img {
    width: 16px;
    height: 14px;
  }
}
</style>
