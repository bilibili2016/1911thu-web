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
              <div class="courseOne" v-for="(course,index) in orderCurriculumLists" :key="index" v-if="index<3">
                <img @click="goCourseInfo(course,index)" class="fl" :src="course.curriculum_picture" alt="">
                <div class="fl">
                  <h4 @click="goCourseInfo(course,index)">{{course.curriculum_title}}</h4>
                  <h6>{{course.curriculum_time}}学时</h6>
                  <p>讲师：{{course.teacher_name}}</p>
                </div>
                <div class="coursePrice">
                  ￥{{course.price}}
                </div>
                <div class="courseNumber">
                  {{}}
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
        orderId: 100,
        userId: 202
      },
      orderDetail: {
        order_sn: null,
        order_amount: null
      },
      orderCurriculumLists: [],
      wxMsg: false,
      zfbMsg: false,
      addPaySubmitForm: {
        types: '1',
        companyId: null
      }
    }
  },
  computed: {
    ...mapState('auth', ['kid'])
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    // this.curriculumPayApply()
    this.getPayList()
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    curriculumPayApply() {
      this.loding = true
      return new Promise((resolve, reject) => {
        home.curriculumPayApply().then(response => {
          this.curriculumPayData = response.data.curriculumPayApply
          console.log(
            response.data.curriculumPayApply,
            'response.data.curriculumPayApply'
          )
          for (let item of response.data.curriculumPayApply) {
            item.create_time = this.timestampToTime(item.create_time)
          }
          // console.log(this.curriculumPayData.length, '123')
          if (this.curriculumPayData.length === 0) {
            this.noData = true
          }
          // let noData = this.curriculumPayData.length = 0
          this.loding = false
          resolve(true)
        })
      })
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
    getPayList() {
      return new Promise((resolve, reject) => {
        home.webPay(this.payListForm).then(response => {
          // this.orderDetail = response.data.data.orderDetail
          // this.orderCurriculumLists = response.data.data.orderCurriculumLists
          console.log(response, '这是response')
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
    addPaySubmit() {
      return new Promise((resolve, reject) => {
        home.addPaySubmit(this.addPaySubmitForm).then(response => {
          // this.orderDetail = response.data.data.orderDetail
          // this.orderCurriculumLists = response.data.data.orderCurriculumLists
          console.log(response, '这是response')
          this.goLink('/shop/qrCode')
          resolve(true)
        })
      })
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
