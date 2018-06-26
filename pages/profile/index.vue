<template>
  <div>
    <v-banner :config="bconfig" :isUpdate="isUpdate" :isShowUpAvtor="activeTab=='tab-fifth'"></v-banner>
    <div class="center-tab center profile" style="min-height:800px;">
      <el-tabs :tab-position="tabPosition" v-model="activeTab" @tab-click="empty">
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
          <el-card>
            <el-tabs v-model="activeOrder">
              <el-tab-pane label="全部" name="orderFirst">
                <v-order v-if="allOrderData  && allOrderData.length>0" :orderData="allOrderData" :config="configOne" @handleUpdate="getUpdateMsg" v-loading="allOrderLoad"></v-order>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="未完成" name="orderSecond">
                <v-order v-if="unfinishedOrderData && unfinishedOrderData.length>0" :orderData="unfinishedOrderData" @handleUpdate="getUpdateMsg" v-loading="unfinishedOrderLoad"></v-order>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="已完成" name="orderThird">
                <v-order v-if="readyOrderData && readyOrderData.length>0" :orderData="readyOrderData" v-loading="readyOrderLoad"></v-order>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="已失效" name="orderFour">
                <v-order v-if="invalidOrderData && invalidOrderData.length>0" :orderData="invalidOrderData" v-loading="invalidOrderLoad"></v-order>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>

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
        <!-- 绑定企业Id -->
        <el-tab-pane name="tab-seventh">
          <span slot="label" class="tabList">
            <i class="icon-company"></i> 绑定企业ID</span>
          <v-companyId :cpnData="companyData"></v-companyId>
          <div class="content">
            <div class="noCourse" v-if="isShowNoCourse">
              <img :src="noMsgImg" alt="">
              <h4>抱歉，现在还没有已经绑定的课程呦~</h4>
            </div>
          </div>
        </el-tab-pane>
        <!-- 专属邀请码 -->
        <el-tab-pane name="tab-eighth">
          <span slot="label" class="tabList">
            <i class="icon-code"></i> 专属邀请码</span>
          <v-invitation :codeData="codeData" :recordData="recordData"></v-invitation>
          <!-- <div class="content">
            <div class="noCourse">
              <img :src="noMsgImg" alt="">
              <h4>抱歉，现在还没有已经绑定的课程呦~</h4>
            </div>
          </div> -->
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
import CompanyId from '@/pages/profile/pages/companyid'
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
    'v-companyId': CompanyId,
    'v-invitation': Invitation
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
        payStatus: null
      },
      collectionData: [],
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
      this.goLink('/shop/checkedCourse')
    },
    empty() {},

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
            v.word = v.user_name + ' 通过 ' + v.invitation_code + ' 加入学习'
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
    }

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
  }
}
</script>
<style scope lang="scss">
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
