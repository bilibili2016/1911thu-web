<template>
  <div class="wepay">
    <div class="checkedCourse-wepay">
      <div class="banner">
        <div>支付中心</div>
      </div>
      <div class="main">
        <div>

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
                <div class="courseOne" v-for="(course,index) in orderCurriculumLists" :key="index" v-if="takeupMsg">
                  <img @click="goCourseInfo(course,index)" class="fl" :src="course.picture" alt="">
                  <div class="fl">
                    <h4 @click="goCourseInfo(course,index)">{{course.name}}</h4>
                    <h6>{{course.curriculum_time}}学时</h6>
                    <p>讲师：{{course.teacher_name}}</p>
                  </div>
                  <div class="coursePrice">
                    ￥{{course.price}}
                  </div>
                  <div class="courseNumber">
                    <i class="el-icon-close"></i>{{course.pay_number}}
                  </div>
                </div>
                <div class="more">
                  支付方式
                </div>
                <div class="method">
                  <div class="center">
                    <div class="wx fl" @click="selectWx" :class="{borderColor: wxMsg}">
                      <img src="@/assets/images/wxp.png" alt="">
                      <img src="@/assets/images/ok.png" alt="" class="okImg" v-if="wxMsg">
                    </div>
                    <div class="pub fr" @click="selectPub" :class="{borderColor: pubMsg}">
                      <img src="@/assets/images/payPublic.png" alt="">
                      <img src="@/assets/images/ok.png" alt="" class="okImg" v-if="pubMsg">
                    </div>
                    <div class="zfb fr" @click="selectZfb" :class="{borderColor: zfbMsg}">
                      <img src="@/assets/images/zfb.png" alt="">
                      <img src="@/assets/images/ok.png" alt="" class="okImg" v-if="zfbMsg">
                    </div>
                  </div>
                </div>
                <div class="text">
                  <i class="el-icon-warning"></i>
                  请在24小时以内支付完成，如未完成此订单将自动关闭，需重新购买！
                  <span class="fr">应付金额：¥{{orderDetail.order_amount}}</span>
                </div>
                <div class="fr pay">
                  <el-button @click="addPaySubmit">立即支付</el-button>
                </div>
                <div class="fk fr" @click="feedback">
                  我有疑问，需要反馈?
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!--   -->
      <div class="unlogged" v-if="wxMask">
        <div class="unloginner" style="width:374px;height:420px;" v-loading="loading">
          <i class="el-icon-close" @click="unloggedClick"></i>
          <div class="texts">扫一扫付款(元)
            <span>￥{{orderDetail.order_amount}}</span>
          </div>
          <div class="update">
            <qrcode :value="val" :options="{ size: 220 }" class="qrcode"></qrcode>
          </div>
          <div class="rechoise" @click="rechoise">
            <img :src="updateImg" alt="">刷新二维码
          </div>
        </div>
      </div>
      <div class="reportBug" v-show="showReportBug">
        <div class="note">
          <h4>报告问题
            <i @click="closeReport" class="el-icon-close fr"></i>
          </h4>
          <el-input type="textarea" :rows="4" placeholder="请详细描述您遇到的问题">
          </el-input>
          <div class="commitBug">
            <!-- @click="reportProblem" -->
            <el-button @click="reportProblem">提交</el-button>
          </div>
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
      showReportBug: false,
      courseList: [],
      curriculumPayData: [],
      allPrice: '69.00',
      status: '等待审核',
      time: null,
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
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
      pubMsg: false,
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
      updateImg: require('@/assets/images/update.png'),
      loading: false
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
    closeReport() {
      this.showReportBug = false
    },
    reportProblem() {
      this.$message({
        showClose: true,
        type: 'success',
        message: '您的疑问已反馈，我们会尽快与您联系'
      })
      this.showReportBug = false
    },
    feedback() {
      this.showReportBug = true
    },
    unloggedClick() {
      this.wxMask = false
      clearInterval(this.interval)
    },
    rechoise() {
      clearInterval(this.interval)
      // this.wxMask = true
      this.loading = true
      this.$message({
        type: 'success',
        message: '二维码已更新'
      })
      this.getPayList('recode')
    },
    selectPayApply(item, index) {
      persistStore.set('pay', index)
      persistStore.set('price', item.totalPresentPrice)
      this.$router.push('/shop/checkedcourselist')
    },

    goLink(item) {
      this.$router.push(item)
    },
    goCourseInfo(item, index) {
      this.kidForm.kids = item.curriculum_id
      persistStore.set('kid', item.curriculum_id)
      this.setKid(this.kidForm)
      this.$router.push('/course/coursedetail')
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
    getPayList(item) {
      this.payListForm.orderId = persistStore.get('cpyid')
      return new Promise((resolve, reject) => {
        home.webPay(this.payListForm).then(response => {
          this.loading = false
          this.orderDetail = response.data.data.orderDetail
          this.orderCurriculumLists = response.data.data.orderCurriculumLists
          this.code_url = response.data.code_url
          this.qr_code = response.data.qr_code
          this.setProductsNum(0)
          resolve(true)
          if (item === 'recode') {
            this.addPaySubmit()
          }
        })
      })
    },
    selectWx() {
      this.wxMsg = true
      this.zfbMsg = false
      this.pubMsg = false
    },
    selectZfb() {
      this.wxMsg = false
      this.zfbMsg = true
      this.pubMsg = false
    },
    selectPub() {
      this.wxMsg = false
      this.zfbMsg = false
      this.pubMsg = true
      this.$router.push('/shop/payPublic')
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
              this.$router.push('/shop/payresult')
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
<style lang="scss" scoped>
.reportBug {
  // display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  .note {
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -180px;
    width: 360px;
    background-color: #fff;
    border-radius: 10px;
    padding: 0 20px;
    h4 {
      line-height: 62px;
      color: #222;
      font-size: 16px;
      i {
        font-size: 30px;
        margin-top: 15px;
        color: #6417a6;
      }
    }
    .el-textarea__inner {
      width: 100%;
      font-size: 12px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #bbbbbb;
    }
    .commitBug {
      text-align: center;
      margin: 30px 0;
      .el-button {
        border: none;
        transition: background 300ms;
        background-color: #6417a6;
        &:hover {
          background-color: #8f4acb;
        }
      }
      button {
        width: 160px;
        height: 40px;
        border-radius: 20px;
        color: #fff;
      }
    }
  }
}
</style>

