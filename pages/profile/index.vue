<template>
  <div>
    <v-banner :config="bconfig" :isUpdate="isUpdate" :isShowUpAvtor="activeTab=='tab-sixth'"></v-banner>
    <div class="center-tab center profile bigTab" style="min-height:800px;">
      <el-tabs :tab-position="tabPosition" v-model="activeTab" @tab-click="handleClick">
        <!-- 我的首页 -->
        <div>
          <el-tab-pane class="my-home" name="tab-first">
            <span slot="label" class="tabList">
              <i class="icon-home"></i> 我的首页</span>
            <el-card class="card-style">
              <div slot="header" class="clearfix">
                <span>最近学习</span>
              </div>
              <div class="content">
                <v-list v-if="studyData  && studyData.length>0" :data="studyData" :config="configZero"></v-list>
                <v-nomsg class="fillTop" v-else :config="noMsgOne"></v-nomsg>
              </div>
            </el-card>
          </el-tab-pane>
        </div>
        <!-- 我的课程 -->
        <el-tab-pane class="my-course" name="tab-second">
          <span slot="label" class="tabList">
            <i class="icon-course"></i> 我的课程</span>
          <el-card class="changeNav">
            <el-tabs v-model="activeNames" @tab-click="handleActive">
              <!-- 我的课程 学习中 -->
              <el-tab-pane label="学习中" name="first">
                <v-list v-if="newDataing  && newDataing.length>0" :data="newDataing" :config="configOne"></v-list>
                <div class="pagination" v-if="newDataing  && newDataing.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="pagemsg1.pagesize" :pager-count="5" :page-count="pagemsg1.pagesize" :current-page="pagemsg1.page" :total="pagemsg1.total" @current-change="studyPageChange"></el-pagination>
                </div>
                <v-nomsg v-else :config="noMsgTwo"></v-nomsg>

              </el-tab-pane>
              <!-- 我的课程 已完成 -->
              <el-tab-pane label="已完成" name="second">
                <v-list v-if="newDataReady && newDataReady.length>0" :data="newDataReady" :config="configTwo"></v-list>
                <div class="pagination" v-if="newDataReady && newDataReady.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="pagemsg2.pagesize" :pager-count="5" :page-count="pagemsg2.pagesize" :current-page="pagemsg2.page" :total="pagemsg2.total" @current-change="readyStudyPageChange"></el-pagination>
                </div>
                <v-nomsg v-else :config="noMsgThree"></v-nomsg>

              </el-tab-pane>
              <!-- 我的课程 已过期 -->
              <el-tab-pane label="已过期" name="fourth">
                <v-list v-if="overTimeData && overTimeData.length>0" :data="overTimeData" :config="configFour"></v-list>
                <div class="pagination" v-if="overTimeData && overTimeData.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="pagemsg2.pagesize" :pager-count="5" :page-count="pagemsg2.pagesize" :current-page="pagemsg2.page" :total="pagemsg2.total" @current-change="readyStudyPageChange"></el-pagination>
                </div>
                <v-nomsg v-else :config="noMsgFour"></v-nomsg>

              </el-tab-pane>
              <!-- 我的课程 我的收藏 -->
              <el-tab-pane label="我的收藏" name="third">
                <v-list v-if="collectionData && collectionData.length>0" :data="collectionData" :config="configZero"></v-list>
                <div class="pagination" v-if="collectionData && collectionData.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="pagemsg3.pagesize" :pager-count="5" :page-count="pagemsg3.pagesize" :current-page="pagemsg3.page" :total="pagemsg3.total" @current-change="collectionPageChange"></el-pagination>
                </div>
                <v-nomsg v-else :config="noMsgFive"></v-nomsg>

              </el-tab-pane>
            </el-tabs>
          </el-card>

        </el-tab-pane>
        <!-- 我的项目 -->
        <el-tab-pane class="my-course" name="tab-third">
          <span slot="label" class="tabList">
            <i class="icon-project"></i> 我的项目</span>
          <el-card class="changeNav">
            <el-tabs v-model="activeProject" @tab-click="handleProject">
              <!-- 我的项目 学习中 -->
              <el-tab-pane label="学习中" name="first">
                <v-card v-if="studyProjectData  && studyProjectData.length>0" :data="studyProjectData" :config="configOne"></v-card>
                <div class="pagination" v-if="studyProjectData  && studyProjectData.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="projectPageStudy.pagesize" :pager-count="5" :page-count="projectPageStudy.pagesize" :current-page="projectPageStudy.page" :total="projectPageStudy.total" @current-change="studyProjectPageChange"></el-pagination>
                </div>
                <v-nomsg v-else :config="noMsgSix"></v-nomsg>

              </el-tab-pane>
              <!-- 我的项目 已完成 -->
              <el-tab-pane label="已完成" name="second">
                <v-card v-if="readyProjectData && readyProjectData.length>0" :data="readyProjectData" :config="configTwo"></v-card>
                <div class="pagination" v-if="readyProjectData && readyProjectData.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="projectPageReady.pagesize" :pager-count="5" :page-count="projectPageReady.pagesize" :current-page="projectPageReady.page" :total="projectPageReady.total" @current-change="studyProjectPageChange"></el-pagination>
                </div>
                <v-nomsg v-else :config="noMsgSeven"></v-nomsg>

              </el-tab-pane>
              <!-- 我的项目 已过期 -->
              <el-tab-pane label="已过期" name="third">
                <v-card v-if="expiredProjectData && expiredProjectData.length>0" :data="expiredProjectData" :config="configFour"></v-card>
                <div class="pagination" v-if="expiredProjectData && expiredProjectData.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="projectPageExpired.pagesize" :pager-count="5" :page-count="projectPageExpired.pagesize" :current-page="projectPageExpired.page" :total="projectPageExpired.total" @current-change="expiredProjectPageChange"></el-pagination>
                </div>
                <v-nomsg v-else :config="noMsgEight"></v-nomsg>

              </el-tab-pane>
              <!-- 我的项目 我的收藏 -->
              <el-tab-pane label="我的收藏" name="fourth">
                <v-card v-if="collectProjectData && collectProjectData.length>0" :data="collectProjectData" :config="configZero"></v-card>
                <div class="pagination" v-if="collectProjectData && collectProjectData.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="projectPageCollect.pagesize" :pager-count="5" :page-count="projectPageCollect.pagesize" :current-page="projectPageCollect.page" :total="projectPageCollect.total" @current-change="collectProjectPageChange"></el-pagination>
                </div>
                <v-nomsg v-else :config="noMsgNine"></v-nomsg>

              </el-tab-pane>
            </el-tabs>
          </el-card>

        </el-tab-pane>
        <!-- 我的订单 -->
        <el-tab-pane class="my-course my-order" name="tab-fourth">
          <span slot="label" class="tabList">
            <i class="icon-order"></i> 我的订单</span>
          <!-- 订单 -->
          <el-card v-if="showOrderList">
            <el-tabs v-model="activeOrder">
              <el-tab-pane label="全部" name="orderFirst">
                <v-order v-if="allOrderData  && allOrderData.length>0" :data="allOrderData" :config="orderType" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail" v-loading="allOrderLoad"></v-order>
                <v-nomsg class="noOrder" v-else :config="noMsgTen"></v-nomsg>

              </el-tab-pane>
              <el-tab-pane name="orderSecond">
                <span class="payCut" slot="label">未完成
                  <i v-if="unfinishedOrderData && unfinishedOrderData.length>0">{{unfinishedOrderData.length}}</i>
                </span>
                <v-order v-if="unfinishedOrderData && unfinishedOrderData.length>0" :data="unfinishedOrderData" :config="orderType" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail" v-loading="unfinishedOrderLoad"></v-order>
                <v-nomsg class="noOrder" v-else :config="noMsgTen"></v-nomsg>

              </el-tab-pane>
              <el-tab-pane name="orderThird">
                <span class="payOk" slot="label">已完成
                </span>
                <v-order v-if="readyOrderData && readyOrderData.length>0" :data="readyOrderData" :config="orderType" @goOrderDetail="getOrderDetail" v-loading="readyOrderLoad"></v-order>
                <v-nomsg class="noOrder" v-else :config="noMsgTen"></v-nomsg>

              </el-tab-pane>
              <el-tab-pane name="orderFour">
                <span class="payOff" slot="label">已失效
                </span>
                <v-order v-if="invalidOrderData && invalidOrderData.length>0" :data="invalidOrderData" :config="orderType" @goOrderDetail="getOrderDetail" v-loading="invalidOrderLoad"></v-order>
                <v-nomsg class="noOrder" v-else :config="noMsgTen"></v-nomsg>

              </el-tab-pane>
            </el-tabs>
          </el-card>
          <!-- 订单详情 -->
          <v-detail v-else :orderDetail="orderDetail" :bankInfo="bankInfo" :courseList="courseList" :projectList="projectList" :config="orderType" v-loading="detailMsg"></v-detail>

        </el-tab-pane>
        <!-- 我的消息 -->
        <el-tab-pane class="my-info" name="tab-fifth">
          <span slot="label" class="tabList">
            <i class="icon-message"></i> 我的消息</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>我的消息</span>
            </div>
            <v-info @noMsg="isNoMyMsg"></v-info>
            <v-nomsg v-show="noMyMsg" :config="noMsgEle"></v-nomsg>

          </el-card>
        </el-tab-pane>
        <!-- 个人设置 -->
        <el-tab-pane name="tab-sixth">
          <span slot="label" class="tabList">
            <i class="icon-set"></i> 个人设置</span>
          <v-person @update="updateUserInfo"></v-person>
        </el-tab-pane>
        <!-- 课程码管理 -->
        <el-tab-pane class="my-course my-invitation" name="tab-seventh">
          <span slot="label" class="tabList">
            <i class="icon-code"></i> 兑换码管理</span>
          <el-tabs v-model="courseCodeNames" @tab-click="handleCourseCode">
            <!-- 课程码管理 课程码列表 -->
            <el-tab-pane label="兑换码列表" name="first">
              <v-invitation :codeData="codeData"></v-invitation>
            </el-tab-pane>
            <!-- 课程码管理 兑换详情 -->
            <el-tab-pane label="兑换详情" name="second">
              <v-conversion :recordData="recordData"></v-conversion>
            </el-tab-pane>
            <!-- 课程码管理 我的兑换 -->
            <el-tab-pane label="我的兑换" name="fourth">
              <v-binding :invitationCodeList='invitationCodeList'></v-binding>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>

        <!-- 发票管理 -->
        <el-tab-pane class="my-course my-order" name="tab-eighth">
          <span slot="label" class="tabList">
            <i class="icon-ticket"></i> 发票管理</span>
          <!-- 发票 -->
          <el-card v-if="showTicketList">
            <el-tabs v-model="activeTicket" @tab-click="handleTicket">
              <el-tab-pane label="按订单开发票" name="ticketFirst">
                <v-tkorder v-if="unTicketData  && unTicketData.length>0" :orderData="unTicketData" @handleUpdate="getUpdateMsg" @goTicketDetail="getTicketDetail" v-loading="readyOrderLoad"></v-tkorder>
                <v-nomsg class="noOrder" v-else :config="noMsgTwl"></v-nomsg>

              </el-tab-pane>
              <el-tab-pane name="ticketSecond" label="开票历史">
                <v-tkhistory v-if="historyOrderData && historyOrderData.length>0" :orderData="historyOrderData" @handleUpdate="getUpdateMsg" v-loading="unfinishedOrderLoad"></v-tkhistory>
                <v-nomsg class="noOrder" v-else :config="noMsgThi"></v-nomsg>

              </el-tab-pane>
              <el-tab-pane name="ticketThird">
                <span class="payOk" slot="label">开票规则
                </span>
                <v-tkrules v-loading="readyOrderLoad"></v-tkrules>
              </el-tab-pane>
            </el-tabs>
          </el-card>
          <!-- 发票详情 -->
          <v-detail v-else :config="ticketType" :courseList="courseList" :projectList="projectList" :orderDetail="orderDetail"></v-detail>

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/pages/noMsg.vue'
import CustomCard from '@/pages/profile/components/Card.vue'
import CustomList from '@/pages/profile/components/List.vue'
import Banner from '@/components/common/Banner.vue'
import PersonalSet from '@/pages/profile/personalSet/personalSet.vue'
import Info from '@/pages/profile/components/Info'
import Order from '@/pages/profile/components/OrderList'
import Detail from '@/pages/profile/components/Detail'
import Invitation from '@/pages/profile/pages/invitation'
import Conversion from '@/pages/profile/components/Conversion'
import Bind from '@/pages/profile/components/BindIng'
import TicketOrder from '@/pages/profile/ticket/ticketOrder'
import TicketHistory from '@/pages/profile/ticket/ticketHistory'
import TicketRules from '@/pages/profile/ticket/ticketRules'
import { profileHome } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  components: {
    'v-card': CustomCard,
    'v-list': CustomList,
    'v-person': PersonalSet,
    'v-info': Info,
    'v-banner': Banner,
    'v-order': Order,
    'v-detail': Detail,
    'v-invitation': Invitation,
    'v-conversion': Conversion,
    'v-tkorder': TicketOrder,
    // 'v-ticketorderdetail': TicketOrderDetail,
    'v-tkhistory': TicketHistory,
    'v-binding': Bind,
    'v-tkrules': TicketRules,
    'v-nomsg': NoMsg
  },
  data() {
    return {
      orderType: {
        type: 'order'
      },
      ticketType: {
        type: 'ticket'
      },
      projectImg: 'http://papn9j3ys.bkt.clouddn.com/p4.png', //项目图标
      isShowNoCourse: false,
      noMyMsg: false,
      study: false,
      avator: 'http://papn9j3ys.bkt.clouddn.com/profile_avator01.png',
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
      tabPosition: 'left',
      activeTab: 'tab-first',
      activeNames: 'first',
      activeProject: 'first',
      courseCodeNames: 'first',
      activeOrder: 'orderFirst',
      activeTicket: 'ticketFirst',
      bconfig: {
        banner_type: 'profile'
      },
      configZero: {
        card_type: 'shoucang',
        card: 'home',
        position: 'personal'
      },
      configOne: {
        card_type: 'profile',
        card: 'learning'
      },
      configTwo: {
        card_type: 'profile',
        card: 'already'
      },
      configFour: {
        card_type: 'profile',
        card: 'overtime'
      },
      noMsgOne: {
        type: 'index',
        text: '抱歉，现在还没有学习过的课程呦~'
      },
      noMsgTwo: {
        type: 'myCourse',
        text: '抱歉，现在还没有学习中的课程呦~'
      },
      noMsgThree: {
        type: 'myCourse',
        text: '抱歉，现在还没有已经完成的课程呦~'
      },
      noMsgFour: {
        type: 'myCourse',
        text: '抱歉，现在还没有已过期的课程呦~'
      },
      noMsgFive: {
        type: 'myCourse',
        text: '抱歉，现在还没有已经收藏的课程呦~'
      },
      noMsgSix: {
        type: 'myProject',
        text: '抱歉，现在还没有学习中的项目呦~'
      },
      noMsgSeven: {
        type: 'myProject',
        text: '抱歉，现在还没有已经完成的项目呦~'
      },
      noMsgEight: {
        type: 'myProject',
        text: '抱歉，现在还没有已过期的项目呦~'
      },
      noMsgNine: {
        type: 'myProject',
        text: '抱歉，现在还没有已经收藏的项目呦~'
      },
      noMsgTen: {
        type: 'myOrder',
        text: '抱歉，没有更多的订单了~'
      },
      noMsgEle: {
        type: 'myInfo',
        text: '抱歉，现在还没有我的消息呦~'
      },
      noMsgTwl: {
        type: 'myTicket',
        text: '抱歉，您还没有订单需要开票~'
      },
      noMsgThi: {
        type: 'myTicket',
        text: '抱歉，没有已经开具的开票~'
      },
      newData: [],
      styleForm: {
        types: 1,
        categoryId: 0,
        pages: 0,
        limits: 12
      },
      pagemsg1: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      pagemsg2: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      pagemsg3: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      projectForm: {
        types: 1,
        pages: '',
        limits: ''
      },
      studyProjectData: [],
      readyProjectData: [],
      expiredProjectData: [],
      collectProjectData: [],
      projectPageStudy: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      projectPageReady: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      projectPageExpired: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      projectPageCollect: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      studyData: [],
      newDataing: [],
      newDataReady: [],
      allOrderData: [],
      unfinishedOrderData: [],
      readyOrderData: [],
      unTicketData: [],
      invalidOrderData: [],
      historyOrderData: [],
      codeData: [],
      recordData: [],
      courseList: [],
      projectList: [],
      companyData: null,
      options: [],
      value: '全部',
      collectionForm: {
        categoryId: 0,
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
      orderDetail: {}, //订单详情信息
      bankInfo: {}, //公司打款信息

      showOrderList: true,
      showTicketList: true,
      isUpdate: false,
      allOrderLoad: true,
      unfinishedOrderLoad: true,
      readyOrderLoad: true,
      invalidOrderLoad: true,
      historyOrderLoad: true,
      overTimeData: [],
      invitationCodeList: [],
      detailMsg: false
    }
  },
  computed: {
    ...mapState('auth', ['token', 'gid']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    // 获取我的订单
    getUpdateMsg(msg) {
      if (msg === true) {
        this.getAllOrderData()
        this.getUnfinishedOrderData()
        this.getInvalidOrderData()
      }
    },
    // 获取订单详情
    getOrderDetail(msg) {
      if (msg === false) {
        this.showOrderList = false
        this.curriculumPayApply()
      }
    },
    //获取发票详情
    getTicketDetail(msg) {
      if (msg === false) {
        this.showTicketList = false
        this.curriculumPayApply()
      }
    },
    // 我的消息空页面展示
    isNoMyMsg(isShow) {
      this.noMyMsg = isShow
    },
    // 切换展示个人信息
    updateUserInfo(flag) {
      this.isUpdate = flag
    },
    // 订单详情 返回上一步到我的订单
    goBack() {
      this.showOrderList = true
    },
    //发票详情 返回上一步
    goTicketBack() {
      this.showTicketList = true
    },
    // 切换tab时保存tab的name刷新就还是在这个tab
    handleClick(item) {
      // name
      persistStore.set('gid', item.name)
    },
    // 切换我的课程 子类
    handleActive(item) {
      this.value = '全部'
      if (item.name == 'first') {
        this.pagemsg1.total = 1
        this.studyCurriculumList()
      } else if (item.name == 'second') {
        this.pagemsg2.total = 1
        this.readyStudyCurriculumList()
      } else if (item.name == 'third') {
        this.pagemsg3.total = 1
        this.collectionList()
      } else if (item.name == 'fourth') {
        this.pagemsg3.total = 1
        this.overStudyCurriculumList()
      }
    },
    // 我的项目子类切换
    handleProject(item) {
      if (item.name == 'first') {
        this.getProjectOneList()
      } else if (item.name == 'second') {
        this.getProjectTwoList()
      } else if (item.name == 'third') {
        this.getProjectThreeList()
      } else if (item.name == 'fourth') {
        this.getProjectFourList()
      }
    },
    // 兑换码管理子类切换
    handleCourseCode(item) {},
    // 切换 我的学习中分类
    changeNav(item) {
      if (this.activeNames == 'third') {
        // 我的课程 收藏的项目
        this.collectionForm.categoryId = item
        profileHome.collectionList(this.collectionForm).then(response => {
          this.collectionData = response.data.curriculumList
          this.pagemsg3.total = response.data.pageCount
        })
      } else {
        if (this.activeNames == 'first') {
          // 我的课程 学习中的项目
          this.styleForm.types = 1
          this.styleForm.categoryId = item
          this.styleForm.pages = 1
          this.styleForm.limits = 12
          return new Promise((resolve, reject) => {
            profileHome.studyCurriculumList(this.styleForm).then(response => {
              this.newDataing = response.data.curriculumList
              this.pagemsg1.total = response.data.pageCount
              for (let item of response.data.curriculumList) {
                item.percent = Number(item.percent)
              }
              resolve(true)
            })
          })
        } else if (this.activeNames == 'second') {
          // 我的课程 已完成的项目
          this.styleForm.types = 2
          this.styleForm.categoryId = item
          this.styleForm.pages = 1
          this.styleForm.limits = 12
          return new Promise((resolve, reject) => {
            profileHome.studyCurriculumList(this.styleForm).then(response => {
              this.newDataReady = response.data.curriculumList
              this.pagemsg2.total = response.data.pageCount
              resolve(true)
            })
          })
        } else if (this.activeNames == 'fourth') {
          // 我的课程 已过期的项目
          this.styleForm.categoryId = item
          this.styleForm.pages = 1
          this.styleForm.limits = 12
          this.pagemsg2.page = 1
          this.styleForm.types = 4
          return new Promise((resolve, reject) => {
            profileHome.studyCurriculumList(this.styleForm).then(response => {
              this.overTimeData = response.data.curriculumList
              for (var i = 0; i < this.overTimeData.length; i++) {
                this.$set(this.overTimeData[i], 'overtime', true)
              }
              resolve(true)
            })
          })
        }
      }
    },
    // 获取我的学习右侧的分类
    childCategoryList() {
      return new Promise((resolve, reject) => {
        profileHome.childCategoryList().then(response => {
          if (response.status === 0) {
            response.data.categoryList.forEach((element, i) => {
              this.options[i] = {}
              this.options[i].value = element.id
              this.options[i].label = element.category_name
            })
          }
          resolve(true)
        })
      })
    },
    // 我的学习 学习中
    studyCurriculumList() {
      this.styleForm.types = 1
      this.styleForm.categoryId = 0
      this.styleForm.pages = 1
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        profileHome.studyCurriculumList(this.styleForm).then(response => {
          this.newDataing = response.data.curriculumList
          this.pagemsg1.total = response.data.pageCount
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    // 学习中 分页切换
    studyPageChange(val) {
      this.pagemsg1.page = val
      this.styleForm.pages = val
      this.styleForm.types = 1
      return new Promise((resolve, reject) => {
        profileHome.studyCurriculumList(this.styleForm).then(response => {
          this.newDataing = response.data.curriculumList
          this.pagemsg1.total = response.data.pageCount
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    // 我的首页 最近学习
    studydataList() {
      this.styleForm.types = 3
      this.styleForm.pages = 0
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        profileHome.studyCurriculumList(this.styleForm).then(response => {
          this.studyData = response.data.curriculumList
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    // 我的首页 已完成
    readyStudyCurriculumList() {
      this.styleForm.types = 2
      this.styleForm.categoryId = 0
      this.styleForm.pages = 1
      this.styleForm.limits = 12

      profileHome.studyCurriculumList(this.styleForm).then(response => {
        this.newDataReady = response.data.curriculumList
        this.pagemsg2.total = response.data.pageCount
      })
    },
    // 我的课程 已过期的项目
    overStudyCurriculumList() {
      this.pagemsg2.page = 1
      this.styleForm.categoryId = 0
      this.styleForm.pages = 1
      this.styleForm.types = 4
      return new Promise((resolve, reject) => {
        profileHome.studyCurriculumList(this.styleForm).then(response => {
          this.overTimeData = response.data.curriculumList
          for (var i = 0; i < this.overTimeData.length; i++) {
            this.$set(this.overTimeData[i], 'overtime', true)
          }
          resolve(true)
        })
      })
    },
    // 已完成 分页切换
    readyStudyPageChange(val) {
      this.pagemsg2.page = val
      this.styleForm.pages = val
      this.styleForm.types = 1
      return new Promise((resolve, reject) => {
        profileHome.studyCurriculumList(this.styleForm).then(response => {
          this.newDataReady = response.data.curriculumList
          this.pagemsg2.total = response.data.pageCount
          resolve(true)
        })
      })
    },
    // 我的学习 收藏列表
    collectionList() {
      this.collectionForm.categoryId = 0
      return new Promise((resolve, reject) => {
        profileHome.collectionList(this.collectionForm).then(response => {
          this.collectionData = response.data.curriculumList
          this.pagemsg3.total = response.data.pageCount
          resolve(true)
        })
      })
    },
    // 收藏列表 分页切换
    collectionPageChange(val) {
      this.pagemsg3.page = val
      this.collectionForm.pages = val
      profileHome.collectionList(this.collectionForm).then(response => {
        this.collectionData = response.data.curriculumList
        this.pagemsg3.total = response.data.pageCount
      })
    },
    // 我的订单 全部
    getAllOrderData() {
      this.orderForm.payStatus = 0
      return new Promise((resolve, reject) => {
        profileHome.getAllOrderData(this.orderForm).then(response => {
          this.allOrderData = response.data.orderList
          this.allOrderLoad = false
          resolve(true)
        })
      })
    },
    // 我的项目 公共
    getProjectData(type) {
      profileHome.getProjectList(this.projectForm).then(response => {
        if (type === '1') {
          this.studyProjectData = response.data.studyProjectList
          this.projectPageStudy.total = response.data.pageCount
          for (let item of response.data.studyProjectList) {
            item.percent = Number(item.percent)
          }
        }
        if (type === '2') {
          this.readyProjectData = response.data.studyProjectList
          this.projectPageReady.total = response.data.pageCount
          for (let item of response.data.studyProjectList) {
            item.percent = Number(item.percent)
          }
        }
        if (type === '3') {
          this.expiredProjectData = response.data.studyProjectList
          this.projectPageExpired.total = response.data.pageCount
          for (let item of response.data.studyProjectList) {
            item.percent = Number(item.percent)
          }
        }
      })
    },
    // 我的项目 学习中
    getProjectOneList() {
      this.projectForm.types = 1
      this.projectForm.pages = 1
      this.projectForm.limits = 12
      this.getProjectData('1')
    },
    // 我的项目-学习中 分页切换
    studyProjectPageChange(val) {
      this.projectPageStudy.page = val
      this.projectForm.pages = val
      this.projectForm.types = 1
      this.getProjectData('1')
    },
    // 我的项目 已完成
    getProjectTwoList() {
      this.projectForm.types = 2
      this.projectForm.pages = 1
      this.projectForm.limits = 12
      this.getProjectData('2')
    },
    // 我的项目-学习中 分页切换
    readyProjectPageChange(val) {
      this.projectPageReady.page = val
      this.projectForm.pages = val
      this.projectForm.types = 1
      this.getProjectData('2')
    },
    // 我的项目 已过期
    getProjectThreeList() {
      this.projectForm.types = 3
      this.projectForm.pages = 1
      this.projectForm.limits = 12
      this.getProjectData('3')
    },
    // 我的项目-学习中 分页切换
    expiredProjectPageChange(val) {
      this.projectPageReady.page = val
      this.projectForm.pages = val
      this.projectForm.types = 1
      this.getProjectData('3')
    },
    // 我的项目 收藏
    getProjectFourList() {
      this.projectForm.types = 2
      this.projectForm.pages = 1
      this.projectForm.limits = 12
      profileHome.getProjectCollectList(this.projectForm).then(response => {
        this.collectProjectData = response.data.collectionCurriculumProjectList
        this.projectPageCollect.total = response.data.pageCount
      })
    },
    // 我的项目-收藏 分页切换
    collectProjectPageChange(val) {
      this.projectPageReady.page = val
      this.projectForm.pages = val
      this.projectForm.types = 1
      profileHome.getProjectCollectList(this.projectForm).then(response => {
        this.collectProjectData = response.data.collectionCurriculumProjectList
        this.projectPageCollect.total = response.data.pageCount
      })
    },

    // 我的订单 待支付
    getUnfinishedOrderData() {
      this.orderForm.payStatus = 1
      return new Promise((resolve, reject) => {
        profileHome.getAllOrderData(this.orderForm).then(response => {
          this.unfinishedOrderData = response.data.orderList
          this.unfinishedOrderLoad = false
          resolve(true)
        })
      })
    },
    // 我的订单 已支付
    getReadyOrderData() {
      this.orderForm.payStatus = 2
      return new Promise((resolve, reject) => {
        profileHome.getAllOrderData(this.orderForm).then(response => {
          this.readyOrderData = response.data.orderList
          this.readyOrderLoad = false
          resolve(true)
        })
      })
    },

    // 我的订单 取消
    getInvalidOrderData() {
      this.orderForm.payStatus = 3

      return new Promise((resolve, reject) => {
        profileHome.getAllOrderData(this.orderForm).then(response => {
          this.invalidOrderData = response.data.orderList
          this.invalidOrderLoad = false
          resolve(true)
        })
      })
    },
    handleTicket(item) {
      if (item.name === 'ticketFirst') {
        // 消除上次默认选中
        this.$bus.$emit('CloseAllChecked')
        this.getUnTicketData()
      }
      if (item.name === 'ticketSecond') {
        this.getHistoryOrderData()
      }
    },
    //未开发票列表
    getUnTicketData() {
      this.orderForm.payStatus = 2
      profileHome.orderNotInvoice().then(response => {
        this.unTicketData = response.data.orderList
        this.unTicketData.forEach(item => {
          item.checked = false
        })

        this.readyOrderLoad = false
      })
    },
    // 开票历史
    getHistoryOrderData() {
      profileHome.tickethistory().then(response => {
        this.historyOrderData = response.data.invoiceList
        this.historyOrderLoad = false
      })
    },
    // 获取专属兑换码列表
    getCodeList() {
      profileHome.getCodeList(this.codeListForm).then(response => {
        this.codeData = response.data.orderInvitationCodeList
      })
    },
    // 专属兑换码 邀请记录
    getRecordList() {
      profileHome.getRecordList(this.codeListForm).then(response => {
        this.recordData = response.data.usedInvitationCodeList
      })
    },
    // 获取已经添加的兑换码
    getUsedInvitationCodeList() {
      profileHome.getUsedInvitationCodeList().then(response => {
        this.invitationCodeList = response.data.usedInvitationCodeList
        // console.log(this.invitationCodeList)
      })
    },
    // 格式化时间戳
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-'
      let M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      let D =
        (date.getDate() * 1 < 10 ? '0' + date.getDate() : date.getDate()) + ' '
      let h =
        (date.getHours() * 1 < 10 ? '0' + date.getHours() : date.getHours()) +
        ':'
      let m =
        (date.getMinutes() * 1 < 10
          ? '0' + date.getMinutes()
          : date.getMinutes()) + ':'
      let s =
        date.getSeconds() * 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return Y + M + D + h + m + s
    },
    // 订单详情
    curriculumPayApply() {
      this.orderForm.ids = persistStore.get('order')

      this.detailMsg = true
      profileHome.curriculumPayApply(this.orderForm).then(response => {
        if (response.status === 0) {
          console.log(response, '这是response1233')
          this.detailMsg = false
          this.courseList = response.data.orderCurriculumList
          this.projectList = response.data.orderProjectList
          this.orderDetail = response.data.orderDetail
          if (response.data.orderDetail) {
            this.bankInfo = response.data.bankInfo
          }
        }
      })
    },
    chengeItem() {
      this.activeTicket = 'ticketSecond'
      document.documentElement.scrollTop = 0
      this.getHistoryOrderData()
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.studydataList()
      this.studyCurriculumList()
      this.readyStudyCurriculumList()
      this.getProjectOneList()
      this.getProjectTwoList()
      this.getProjectThreeList()
      this.getProjectFourList()
      this.childCategoryList()
      this.collectionList()
      this.getAllOrderData()
      this.getUnfinishedOrderData()
      this.getReadyOrderData()
      this.getInvalidOrderData()
      this.getCodeList()
      this.getRecordList()
      this.curriculumPayApply()
      this.getHistoryOrderData()
      this.getUnTicketData()
      // this.getOverTime()
      //过期的我的课程
      this.overStudyCurriculumList()
      this.getUsedInvitationCodeList()
    }
    // this.$bus.$emit('bannerShow', false)
    this.activeTab = this.gid

    if (this.$route.query.tab) {
      this.activeTab = this.$route.query.tab
    }
    this.$bus.$on('studyCourse', data => {
      this.studyCurriculumList()
    })
    this.$bus.$on('reGetCode', data => {
      this.getUsedInvitationCodeList()
    })
    this.$bus.$on('studyProject', data => {
      this.getProjectOneList()
    })
    this.$bus.$on('goBack', () => {
      this.goBack()
    })
    this.$bus.$on('goTicketBack', () => {
      this.goTicketBack()
    })
    this.$bus.$on('goTicketDetail', data => {
      this.getTicketDetail(data)
    })
    this.$bus.$on('goOrderDetail', data => {
      this.getOrderDetail(data)
    })
    this.$bus.$on('updateUserInfo', data => {
      this.updateUserInfo(data)
    })
    this.$bus.$on('chengeItem', data => {
      this.chengeItem()
    })
    this.$bus.$on('goOrderDetaild', data => {
      // this.orderDetail = []
      // this.courseList = []
      this.getOrderDetail(false)
    })
  },
  created() {
    this.$bus.$on('selectProfileIndex', data => {
      this.activeTab = data
    })
  }
}
</script>
<style scope lang="scss">
@import '~assets/style/profile/home';
</style>
