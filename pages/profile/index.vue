<template>
  <div>
    <v-banner :config="bconfig" :isUpdate="isUpdate" :isShowUpAvtor="activeTab=='tab-fifth'"></v-banner>
    <div class="center-tab center profile bigTab" style="min-height:800px;">
      <el-tabs :tab-position="tabPosition" v-model="activeTab">
        <!-- 我的信息 -->
        <el-tab-pane class="my-home" name="tab-first">
          <span slot="label" class="tabList">
            <i class="icon-home"></i> 我的首页</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>最近学习</span>
            </div>
            <div class="content">
              <v-card v-if="studyData  && studyData.length>0" :data="studyData" :config="configZero"></v-card>
              <div v-else class="noCourse">
                <img :src="noMsgImg" alt="">
                <h4>抱歉，现在还没有学习过的课程呦~</h4>
                <!-- <p>去学习</p> -->
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 我的课程 -->
        <el-tab-pane class="my-course" name="tab-second">
          <span slot="label" class="tabList">
            <i class="icon-course"></i> 我的课程</span>
          <el-card>
            <el-tabs v-model="activeNames">
              <el-tab-pane label="学习中" name="first">
                <v-card v-if="newDataing  && newDataing.length>0" :data="newDataing" :config="configOne"></v-card>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有学习中的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="已完成" name="second">
                <v-card v-if="newDataReady && newDataReady.length>0" :data="newDataReady" :config="configTwo"></v-card>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有已经完成的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="我的收藏" name="third">
                <v-card v-if="collectionData && collectionData.length>0" :data="collectionData" :config="configZero"></v-card>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有已经收藏的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>

        </el-tab-pane>
        <!-- 我的订单 -->
        <el-tab-pane class="my-course my-order" name="tab-third">
          <span slot="label" class="tabList">
            <i class="icon-order"></i> 我的订单</span>
          <!-- 订单 -->
          <el-card v-if="showOrderList">
            <el-tabs v-model="activeOrder">
              <el-tab-pane label="全部" name="orderFirst">
                <v-order v-if="allOrderData  && allOrderData.length>0" :orderData="allOrderData" :config="configOne" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail" v-loading="allOrderLoad"></v-order>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane name="orderSecond">
                <span class="payCut" slot="label">未完成
                  <i v-if="unfinishedOrderData && unfinishedOrderData.length>0">{{unfinishedOrderData.length}}</i>
                </span>
                <v-order v-if="unfinishedOrderData && unfinishedOrderData.length>0" :orderData="unfinishedOrderData" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail" v-loading="unfinishedOrderLoad"></v-order>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane name="orderThird">
                <span class="payOk" slot="label">已完成
                  <i v-if="readyOrderData && readyOrderData.length>0">{{readyOrderData.length}}</i>
                </span>
                <v-order v-if="readyOrderData && readyOrderData.length>0" :orderData="readyOrderData" @goOrderDetail="getOrderDetail" v-loading="readyOrderLoad"></v-order>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane name="orderFour">
                <span class="payOff" slot="label">已失效
                  <i v-if="invalidOrderData && invalidOrderData.length>0">{{invalidOrderData.length}}</i>
                </span>
                <v-order v-if="invalidOrderData && invalidOrderData.length>0" :orderData="invalidOrderData" @goOrderDetail="getOrderDetail" v-loading="invalidOrderLoad"></v-order>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>

          <!-- 订单详情 -->
          <div class="orderListDetail" v-else>
            <div class="table">
              <div class="tableHeader">
                <span class="goBack" @click="goBack">
                  <i class="el-icon-arrow-left"></i>上一步</span>
                <span class="courseName">课程</span>
                <span class="price">单价</span>
                <span class="operation">课程数量</span>
              </div>
              <div class="tableBody">
                <div v-for="(course,index) in courseList" :key="index">
                  <div class="courseInfo clearfix">
                    <img class="fl" :src="course.picture" alt="">
                    <div class="fl">
                      <h4>{{course.name}}</h4>
                      <h6>{{course.curriculum_time}}学时</h6>
                      <p>讲师：{{course.teacher_name}}</p>
                    </div>
                  </div>
                  <div class="coursePrice">
                    ￥{{course.price}}
                  </div>
                  <div class="courseOperation">
                    X{{course.pay_number}}
                  </div>
                </div>
              </div>
              <div class="tableFooter">
                <p>课程数量：{{courseList.length}}门</p>
                <p>学习人数：{{orderDetail.pay_number}}人</p>
                <h4>商品总额：￥{{orderDetail.order_amount}}</h4>
              </div>
            </div>

          </div>
        </el-tab-pane>
        <!-- 我的消息 -->
        <el-tab-pane class="my-info" name="tab-fourth">
          <span slot="label" class="tabList">
            <i class="icon-message"></i> 我的消息</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>我的消息</span>
            </div>
            <v-info @noMsg="isNoMyMsg"></v-info>
            <div class="content" v-show="noMyMsg">
              <div class="noCourse" v-if="noMyMsg">
                <img :src="noMsgImg" alt="">
                <h4>抱歉，现在还没有我的消息呦~</h4>
                <!-- <p>去学习</p> -->
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 个人设置 -->
        <el-tab-pane name="tab-fifth">
          <span slot="label" class="tabList">
            <i class="icon-set"></i> 个人设置</span>
          <v-person @update="updateUserInfo"></v-person>
        </el-tab-pane>
        <!-- 绑定Id -->
        <el-tab-pane name="tab-sixth">
          <span slot="label" class="tabList">
            <i class="icon-bind"></i> 绑定课程ID</span>
          <v-bind @isShowMsg="isShowMsg"></v-bind>
          <div class="content">
            <div class="noCourse" v-if="isShowNoCourse">
              <img :src="noMsgImg" alt="">
              <h4>抱歉，现在还没有已经绑定的课程呦~</h4>
            </div>
          </div>
        </el-tab-pane>
        <!-- 绑定机构Id -->
        <!-- <el-tab-pane name="tab-seventh">
          <span slot="label" class="tabList">
            <i class="icon-company"></i> 绑定机构ID</span>
          <v-companyId :cpnData="companyData"></v-companyId>
        </el-tab-pane> -->
        <!-- 专属邀请码 -->
        <el-tab-pane name="tab-eighth" v-if="codeData.length">
          <span slot="label" class="tabList">
            <i class="icon-code"></i> 专属邀请码</span>
          <v-invitation :codeData="codeData" :recordData="recordData"></v-invitation>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import Banner from '@/components/common/Banner.vue'
import PersonalSet from '@/pages/profile/components/personalset.vue'
import Binding from '@/pages/profile/components/bindid'
import Info from '@/pages/profile/components/info'
import Order from '@/pages/profile/pages/order'
// import CompanyId from '@/pages/profile/pages/companyid'
import Invitation from '@/pages/profile/pages/invitation'
import { other, home } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  components: {
    'v-card': CustomCard,
    'v-person': PersonalSet,
    'v-bind': Binding,
    'v-info': Info,
    'v-banner': Banner,
    'v-order': Order,
    'v-invitation': Invitation
    // 'v-companyId': CompanyId
  },
  data() {
    return {
      isShowNoCourse: false,
      noMyMsg: false,
      study: false,
      avator: 'http://pam8iyw9q.bkt.clouddn.com/profile_avator01.png',
      noMsgImg: 'http://pam8iyw9q.bkt.clouddn.com/noMsg.png',
      tabPosition: 'left',
      activeTab: 'tab-seventh',
      activeNames: 'first',
      activeOrder: 'orderFirst',
      bconfig: {
        banner_type: 'profile'
      },
      configZero: {
        card_type: 'shoucang',
        card: 'home'
      },
      configOne: {
        card_type: 'profile',
        card: 'learning'
      },
      configTwo: {
        card_type: 'profile',
        card: 'already'
      },
      newData: [],
      styleForm: {
        types: 1,
        pages: 0,
        limits: 12
      },
      studyData: [],
      newDataing: [],
      newDataReady: [],
      allOrderData: [],
      unfinishedOrderData: [],
      readyOrderData: [],
      invalidOrderData: [],
      codeData: [],
      recordData: [],
      courseList: [],
      companyData: null,
      collectionForm: {
        pages: 1,
        limits: 12
      },
      codeListForm: {
        pages: 1,
        limits: null
      },
      orderForm: {
        pages: 1,
        limits: null,
        payStatus: null,
        ids: null
      },
      collectionData: [],
      orderDetail: {},
      showOrderList: true,
      isUpdate: false,
      allOrderLoad: true,
      unfinishedOrderLoad: true,
      readyOrderLoad: true,
      invalidOrderLoad: true
    }
  },
  computed: {
    ...mapState('auth', ['token', 'gid']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    getUpdateMsg(msg) {
      if (msg === true) {
        this.getAllOrderData()
        this.getUnfinishedOrderData()
        this.getInvalidOrderData()
      }
    },
    getOrderDetail(msg) {
      if (msg === false) {
        this.showOrderList = false
        this.curriculumPayApply()
      }
    },
    isNoMyMsg(isShow) {
      this.noMyMsg = isShow
    },
    isShowMsg(isShow) {
      this.isShowNoCourse = isShow
    },
    updateUserInfo(flag) {
      this.isUpdate = flag
    },
    goLink(item) {
      this.$router.push(item)
    },
    goShop() {
      this.goLink('/shop/checkedcourse')
    },
    goBack() {
      this.showOrderList = true
    },

    studyCurriculumList() {
      this.styleForm.types = 1
      this.styleForm.pages = 0
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.newDataing = response.data.curriculumList
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    studydataList() {
      this.styleForm.types = 3
      this.styleForm.pages = 0
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.studyData = response.data.curriculumList
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    readyStudyCurriculumList() {
      this.styleForm.types = 2
      this.styleForm.pages = 0
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.newDataReady = response.data.curriculumList
          resolve(true)
        })
      })
    },
    collectionList() {
      return new Promise((resolve, reject) => {
        home.collectionList(this.collectionForm).then(response => {
          this.collectionData = response.data.curriculumList

          resolve(true)
        })
      })
      this.goLink('/course/pages/categoryd')
    },
    getAllOrderData() {
      this.orderForm.payStatus = 0
      return new Promise((resolve, reject) => {
        home.getAllOrderData(this.orderForm).then(response => {
          this.allOrderData = response.data.orderList
          this.allOrderLoad = false
          resolve(true)
        })
      })
    },
    getUnfinishedOrderData() {
      this.orderForm.payStatus = 1
      return new Promise((resolve, reject) => {
        home.getAllOrderData(this.orderForm).then(response => {
          this.unfinishedOrderData = response.data.orderList
          this.unfinishedOrderLoad = false
          resolve(true)
        })
      })
    },
    getReadyOrderData() {
      this.orderForm.payStatus = 2
      return new Promise((resolve, reject) => {
        home.getAllOrderData(this.orderForm).then(response => {
          this.readyOrderData = response.data.orderList
          this.readyOrderLoad = false
          resolve(true)
        })
      })
    },
    getInvalidOrderData() {
      this.orderForm.payStatus = 3
      return new Promise((resolve, reject) => {
        home.getAllOrderData(this.orderForm).then(response => {
          this.invalidOrderData = response.data.orderList
          this.invalidOrderLoad = false
          resolve(true)
        })
      })
    },
    getCodeList() {
      return new Promise((resolve, reject) => {
        home.getCodeList(this.codeListForm).then(response => {
          this.codeData = response.data.orderInvitationCodeList
          resolve(true)
        })
      })
    },
    getRecordList() {
      return new Promise((resolve, reject) => {
        home.getRecordList(this.codeListForm).then(response => {
          this.recordData = response.data.usedInvitationCodeList
          var that = this
          this.recordData.forEach(function(v, i, arr) {
            v.create_time = that.timestampToTime(v.create_time)
          })
          resolve(true)
        })
      })
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
    curriculumPayApply() {
      this.orderForm.ids = persistStore.get('order')
      return new Promise((resolve, reject) => {
        home.curriculumPayApply(this.orderForm).then(response => {
          if (response.status === 0) {
            this.courseList = response.data.orderCurriculumList
            this.orderDetail = response.data.orderDetail
          }
          // this.loading = false
          resolve(true)
        })
      })
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.studydataList()
      this.studyCurriculumList()
      this.readyStudyCurriculumList()
      this.collectionList()
      this.getAllOrderData()
      this.getUnfinishedOrderData()
      this.getReadyOrderData()
      this.getInvalidOrderData()
      this.getCodeList()
      this.getRecordList()
      this.curriculumPayApply()
    }
    this.$bus.$emit('bannerShow', false)
    this.activeTab = this.gid
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    if (this.$route.query.tab) {
      this.activeTab = this.$route.query.tab
    }
  },
  created() {
    this.$bus.$on('selectProfileIndex', data => {
      this.activeTab = data
    })
    this.$bus.$on('updateCourse', data => {
      this.studyCurriculumList()
    })
  }
}
</script>
<style scope lang="scss">
.bigTab {
  width: 1140px;
  & > div > div.el-tabs__content {
    padding: 15px;
    margin-top: -15px;
    box-shadow: none;
  }
  &.profile .my-course.my-order {
    overflow: initial;
  }
  &.profile .my-course#pane-tab-third .el-tabs__content {
    overflow: initial;
  }
  &.profile .my-course .el-tabs__header {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  #pane-tab-third .el-tabs__header {
    box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
  }
  #pane-tab-sixth,
  #pane-tab-seventh {
    box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
    border-radius: 6px;
    overflow: hidden;
  }
  .el-tabs__content {
    .el-tabs__item {
      span {
        position: relative;
        i {
          position: absolute;
          top: 5px;
          right: -18px;
          width: 18px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          border-radius: 50%;
          font-size: 12px;
          color: #fff;
          display: inline-block;
          background-color: #ff5f5f;
        }
      }
    }
  }
  .orderListDetail {
    //订单列表详情
    width: 100%;
    .table {
      .tableHeader {
        height: 60px;
        line-height: 60px;
        background-color: #ebe7ed;
        font-size: 16px;
        color: #222;
        margin-bottom: 40px;
        .goBack {
          margin-left: 40px;
          color: #6417a6;
          cursor: pointer;
        }
        .courseName {
          margin-left: 53px;
        }
        .price {
          margin-left: 500px;
        }
        .operation {
          margin-left: 70px;
        }
      }
      .tableBody > div {
        background-color: #fff;
        display: flex;
        align-items: center;
        height: 140px;
        margin-bottom: 20px;
        border-radius: 6px;
        box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
        .el-checkbox {
          line-height: 140px;
        }
        .courseInfo {
          display: inline-block;
          width: 620px;
          margin-left: 32px;
          img {
            width: 160px;
            height: 100px;
            margin-right: 20px;
          }
          h4 {
            width: 440px;
            height: 42px;
            font-size: 16px;
            color: #332a51;
            overflow: hidden;
            padding: 9px 0 0;
            margin-bottom: 15px;
          }
          h6 {
            color: #6d687f;
            font-size: 12px;
            padding-bottom: 9px;
          }
          p {
            font-size: 14px;
            color: #6d687f;
          }
        }
        .coursePrice {
          display: inline-block;
          width: 100px;
          height: 140px;
          line-height: 140px;
          text-align: center;
          color: #ff5f5f;
          font-size: 16px;
        }
        .courseOperation {
          display: inline-block;
          width: 76px;
          height: 140px;
          line-height: 140px;
          text-align: center;
          margin-left: 35px;
          font-size: 16px;
          color: #332a51;
        }
      }
      .tableFooter {
        p {
          font-size: 16px;
          text-align: right;
          color: #222;
          line-height: 30px;
        }
        h4 {
          font-size: 24px;
          color: #ff5f5f;
          font-weight: 700;
          margin-top: 28px;
        }
        text-align: right;
        padding: 30px 0 50px;
        background-color: transparent;
      }
    }
  }
}
.profile {
  .content .noCourse {
    width: 100%;
    height: 600px;
    background-color: #fff;
    text-align: center;
    img {
      width: 316px;
      height: 274px;
      margin-top: 35px;
    }
    h4 {
      height: 70px;
      line-height: 70px;
      text-align: center;
      color: #999;
      font-size: 20px;
    }
    p {
      width: 140px;
      height: 36px;
      line-height: 36px;
      margin: 0 auto;
      border-radius: 18px;
      background: #6417a6;
      color: #fff;
      transition: all 300ms;
      font-size: 14px;
      &:hover {
        background-color: #8f4acb;
      }
    }
  }
  .tabList {
    i {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-bottom: -4px;
      &.icon-home {
        background: url('~assets/images/icon_home1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-course {
        background: url('~assets/images/icon_course1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-order {
        background: url('~assets/images/icon_order1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-message {
        background: url('~assets/images/icon_message1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-set {
        background: url('~assets/images/icon_set1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-bind {
        background: url('~assets/images/icon_bind1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-choose {
        background: url('~assets/images/icon_choose1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-code {
        background: url('~assets/images/icon_code1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-company {
        background: url('~assets/images/icon_company1.png') no-repeat center;
        background-size: contain;
      }
    }
  }
  .el-tabs__item.is-active i {
    &.icon-home {
      background: url('~assets/images/icon_home2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-course {
      background: url('~assets/images/icon_course2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-order {
      background: url('~assets/images/icon_order2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-message {
      background: url('~assets/images/icon_message2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-set {
      background: url('~assets/images/icon_set2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-bind {
      background: url('~assets/images/icon_bind2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-choose {
      background: url('~assets/images/icon_choose2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-code {
      background: url('~assets/images/icon_code2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-company {
      background: url('~assets/images/icon_company2.png') no-repeat center;
      background-size: contain;
    }
  }
}
</style>
