<template>
  <div>
    <v-banner :config="bconfig" :isUpdate="isUpdate" :isShowUpAvtor="activeTab=='tab-sixth'"></v-banner>
    <div class="center-tab center profile bigTab" style="min-height:800px;">
      <el-tabs :tab-position="tabPosition" v-model="activeTab" @tab-click="handleClick">
        <!-- 我的首页 -->
        <el-tab-pane class="my-home" name="tab-first">
          <span slot="label" class="tabList">
            <i class="icon-home"></i> 我的首页</span>
          <v-myhome :allHome="allHome" :studyData="studyData" :configZero="configZero" :pagemsgHome="pagemsgHome" :noMsgOne="noMsgOne" @studyDataChange="studyDataChange"></v-myhome>
        </el-tab-pane>
        <!-- 我的课程 -->
        <el-tab-pane class="my-course" name="tab-second">
          <span slot="label" class="tabList">
            <i class="icon-course"></i> 我的课程</span>
          <v-mycourse :allCourseLoad="allCourseLoad" :activeNames="activeNames" :newDataing="newDataing" :configOne="configOne" :pagemsg1="pagemsg1" :noMsgTwo="noMsgTwo" :newDataReady="newDataReady" :configTwo="configTwo" :pagemsg2="pagemsg2" :noMsgThree="noMsgThree" :overTimeData="overTimeData" :configFour="configFour" :noMsgFour="noMsgFour" :collectionData="collectionData" :pagemsg3="pagemsg3" :configZero="configZero" :noMsgFive="noMsgFive" @readyStudyPageChange="readyStudyPageChange" @studyPageChange="studyPageChange" @collectionPageChange="collectionPageChange" @handleActive="handleActive"></v-mycourse>
        </el-tab-pane>
        <!-- 我的项目 -->
        <el-tab-pane class="my-course" name="tab-third">
          <span slot="label" class="tabList">
            <i class="icon-project"></i> 我的项目</span>
          <v-myproject :allProjectLoad="allProjectLoad" @studyProjectPageChange="handleMyProjectChange" @expiredProjectPageChange="handleMyProjectChange" @alreadyProjectPageChange="handleMyProjectChange" @collectProjectPageChange="collectProjectPageChange" :noMsgNine="noMsgNine" :projectPageCollect="projectPageCollect" :configZero="configZero" :collectProjectData="collectProjectData" :noMsgEight="noMsgEight" :projectPageExpired="projectPageExpired" :configFour="configFour" :expiredProjectData="myProjectData3" :noMsgSeven="noMsgSeven" :projectPageReady="projectPageReady" :configTwo="configTwo" :studyProjectData="myProjectData1" :configOne="configOne" :projectPageStudy="projectPageStudy" :noMsgSix="noMsgSix" :readyProjectData="myProjectData2"></v-myproject>
        </el-tab-pane>
        <!-- 我的订单 -->
        <el-tab-pane class="my-course my-order" name="tab-fourth">
          <span slot="label" class="tabList">
            <i class="icon-order"></i> 我的订单</span>
          <v-myorder :orderTotal="orderTotal" :allOrderLoadAll="allOrderLoadAll" :detailMsg="detailMsg" :orderType="orderType" :projectList="projectList" :courseList="courseList" :bankInfo="bankInfo" :orderDetail="orderDetail" :invalidOrderLoad="invalidOrderLoad" :invalidOrderData="allOrderData7" :readyOrderLoad="readyOrderLoad" :readyOrderData="allOrderData6" :unfinishedOrderLoad="unfinishedOrderLoad" :unfinishedOrderData="allOrderData5" :noMsgTen="noMsgTen" :allOrderLoad="allOrderLoad" :allOrderData="allOrderData4" :showOrderList="showOrderList" :pagemsg4="pagemsg4" :pagemsg5="pagemsg5" :pagemsg6="pagemsg6" :pagemsg7="pagemsg7" @getUpdateMsg="getUpdateMsg" @getAllOrderDataChange="handleMyOrderChange" @unfinishedOrderDataChange="handleMyOrderChange" @getReadyOrderDataChange="handleMyOrderChange" @invalidOrderDataChange="handleMyOrderChange"></v-myorder>
        </el-tab-pane>
        <!-- 我的消息 -->
        <el-tab-pane class="my-info" name="tab-fifth">
          <span slot="label" class="tabList">
            <i class="icon-message"></i> 我的消息</span>
          <v-myinfo :noMyMsg="noMyMsg" :noMsgEle="noMsgEle" @isNoMyMsg="isNoMyMsg"></v-myinfo>
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
          <!-- 'codeData', 'recordData', 'invitationCodeList' -->
          <v-mycode :codeData="codeData" :recordData="recordData" :allCode="allCode" :invitationCodeList="invitationCodeList" @handleCourseCode="handleCourseCode" @recordList="recordList" @searchCodeList="searchCodeList"></v-mycode>
        </el-tab-pane>
        <!-- 发票管理 -->
        <el-tab-pane class="my-course my-order" name="tab-eighth">
          <span slot="label" class="tabList">
            <i class="icon-ticket"></i> 发票管理</span>
          <v-myticket :allTicket="allTicket" :showTicketList="showTicketList" :unTicketData="unTicketData" :readyOrderLoad="readyOrderLoad" :noMsgTwl="noMsgTwl" :historyOrderData="historyOrderData" :unfinishedOrderLoad="unfinishedOrderLoad" :noMsgThi="noMsgThi" :ticketType="ticketType" :courseList="courseList" :projectList="projectList" :orderDetail="orderDetail" :pagemsg8="pagemsg8" :pagemsg9="pagemsg9" @unTicketDataChange="unTicketDataChange" @historyOrderDataChange="historyOrderDataChange"></v-myticket>
        </el-tab-pane>
        <!-- 自定制项目 -->
        <el-tab-pane class="my-course my-customerProject" name="tab-nine">
          <span slot="label" class="tabList">
            <i class="icon-cusProject"></i>&nbsp;自定制项目</span>
          <v-myCustomerProject :customerProjectListData="customerProjectListData" :customerPagemsg="customerPagemsg" @customerProjectChange="customerProjectChange" @deleteCustomerProject="deleteCustomerProject"></v-myCustomerProject>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import PersonalSet from '@/pages/profile/personalSet/personalSet.vue'
import { profileHome } from '~/lib/v1_sdk/index'
import { message } from '~/lib/util/helper'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import MyHome from '@/pages/profile/pages/myHome'
import myCourse from '@/pages/profile/pages/myCourse'
import myProject from '@/pages/profile/pages/myProject'
import myOrder from '@/pages/profile/pages/myOrder'
import myInfo from '@/pages/profile/pages/myInfo'
import myCode from '@/pages/profile/pages/myCode'
import myTicket from '@/pages/profile/pages/myTicket'
import myCustomerProject from '@/pages/profile/pages/myCustomerProject'
export default {
  components: {
    'v-person': PersonalSet,
    'v-banner': Banner,
    'v-myhome': MyHome,
    'v-mycourse': myCourse,
    'v-myproject': myProject,
    'v-myorder': myOrder,
    'v-myinfo': myInfo,
    'v-mycode': myCode,
    'v-myticket': myTicket,
    'v-myCustomerProject': myCustomerProject
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
      pagemsgHome: {
        page: 1,
        pagesize: 12,
        total: 12
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
      pagemsg4: {
        page: 1,
        pagesize: 20,
        total: 12
      },
      pagemsg5: {
        page: 1,
        pagesize: 20,
        total: 12
      },
      pagemsg6: {
        page: 1,
        pagesize: 20,
        total: 12
      },
      pagemsg7: {
        page: 1,
        pagesize: 20,
        total: 12
      },
      pagemsg8: {
        page: 1,
        pagesize: 20,
        total: 12
      },
      pagemsg9: {
        page: 1,
        pagesize: 20,
        total: 12
      },
      projectForm: {
        types: 1,
        pages: '',
        limits: ''
      },
      customerPagemsg: {
        page: 1,
        pagesize: 20,
        total: 12
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
      allOrderData4: [],
      allOrderData5: [],
      allOrderData6: [],
      allOrderData7: [],
      customerProjectListData: [],
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
        limits: null,
        ordersn: ''
      },
      getCodeListForm: {
        pages: 1,
        limits: null,
        code: ''
      },
      orderForm: {
        pages: 1,
        limits: 20,
        payStatus: null,
        ids: null,
        startTime: null
      },
      orderNotInvoiceForm: {
        pages: 1,
        limits: 20
      },
      tickethistoryForm: {
        pages: 1,
        limits: 20
      },
      customerProjectForm: {
        pages: 1,
        limits: 20
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
      detailMsg: false,
      allOrderLoadAll: false,
      allProjectLoad: false,
      allCourseLoad: false,
      allTicket: false,
      allCode: false,
      allHome: false,
      orderTotal: '',
      myOrderDataArr: [0, 1, 2, 3],
      myProjectData1: [],
      myProjectData2: [],
      myProjectData3: [],
      myProjectData4: [],
      myProjectDataArr: [1, 2, 3],
      myProjectPage1: {
        types: 1,
        pages: '',
        limits: ''
      },
      myProjectPage2: {
        types: 2,
        pages: '',
        limits: ''
      },
      myProjectPage3: {
        types: 3,
        pages: '',
        limits: ''
      },
      myProjectPage4: {
        types: 4,
        pages: '',
        limits: ''
      }
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
        this.handleInitMyOrderData()
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
        // this.getProjectOneList()
        // this.studyProjectPageChange(1)
        this.handleMyProjectChange(1, 1)
      } else if (item.name == 'second') {
        // this.getProjectTwoList()
        // this.readyProjectPageChange(1)
        this.handleMyProjectChange(2, 1)
      } else if (item.name == 'third') {
        // this.getProjectThreeList()
        // this.expiredProjectPageChange(1)
        this.handleMyProjectChange(3, 1)
      } else if (item.name == 'fourth') {
        this.collectProjectPageChange(1)
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
          profileHome.studyCurriculumList(this.styleForm).then(response => {
            this.newDataing = response.data.curriculumList
            this.pagemsg1.total = response.data.pageCount
            for (let item of response.data.curriculumList) {
              item.percent = Number(item.percent)
            }
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
    // 我的首页 最近学习
    studydataList() {
      this.styleForm.types = 3
      this.styleForm.pages = 0
      this.styleForm.limits = 12
      this.allHome = true
      profileHome.studyCurriculumList(this.styleForm).then(response => {
        this.allHome = false
        this.studyData = response.data.curriculumList
        this.pagemsgHome.total = response.data.pageCount
        for (let item of response.data.curriculumList) {
          item.percent = Number(item.percent)
        }
      })
    },
    // 我的首页 最近学习 分页切换
    studyDataChange(val) {
      this.styleForm.types = 3
      this.styleForm.pages = val
      this.styleForm.limits = 12
      this.allHome = true
      this.pagemsgHome.page = val
      profileHome.studyCurriculumList(this.styleForm).then(response => {
        this.allHome = false
        this.studyData = response.data.curriculumList
        for (let item of response.data.curriculumList) {
          item.percent = Number(item.percent)
        }
      })
    },
    // 我的课程 学习中
    studyCurriculumList() {
      this.styleForm.types = 1
      this.styleForm.categoryId = 0
      this.styleForm.pages = 1
      this.styleForm.limits = 12
      this.allCourseLoad = true
      profileHome.studyCurriculumList(this.styleForm).then(response => {
        this.allCourseLoad = false
        this.newDataing = response.data.curriculumList
        this.pagemsg1.total = response.data.pageCount
        for (let item of response.data.curriculumList) {
          item.percent = Number(item.percent)
        }
      })
    },
    // 我的课程 学习中 分页切换
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
    // 我的课程 已完成
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
    // 我的课程 已完成 分页切换
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
    // 我的课程 收藏列表
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
    //我的课程 收藏列表 分页切换
    collectionPageChange(val) {
      this.pagemsg3.page = val
      this.collectionForm.pages = val
      profileHome.collectionList(this.collectionForm).then(response => {
        this.collectionData = response.data.curriculumList
        this.pagemsg3.total = response.data.pageCount
      })
    },
    // 我的项目-收藏 分页切换
    collectProjectPageChange(val) {
      this.projectPageReady.page = val
      this.projectForm.pages = val
      this.projectForm.types = 4
      this.projectForm.limits = 12
      profileHome.getProjectCollectList(this.projectForm).then(response => {
        this.collectProjectData = response.data.collectionCurriculumProjectList
        this.projectPageCollect.total = response.data.pageCount
      })
    },

    /**
     * @param status 序号
     * @param pagenum 页码
     */
    // 我的项目公共方法 我的项目分页没做
    handleMyProjectChange(status, pagenum) {
      this.projectForm.types = status
      this.projectForm.pages = pagenum
      this.projectForm.limits = 12
      this._data['myProjectPage' + status].page = pagenum
      profileHome.getProjectList(this.projectForm).then(response => {
        this._data['myProjectData' + status] = response.data.studyProjectList
        this._data['myProjectPage' + status].total = response.data.pageCount
        for (let item of response.data.studyProjectList) {
          item.percent = Number(item.percent)
        }
      })
    },
    // 我的项目数据 页面初始化
    handleInitMyProjectData() {
      this.myProjectDataArr.map(item => {
        this.handleMyProjectChange(item, 1)
      })
    },
    /**
     * @param status 序号
     * @param pagenum 页码
     */
    // 我的订单公共方法
    handleMyOrderChange(status, pagenum) {
      this.orderForm.payStatus = status
      this.orderForm.pages = pagenum
      this._data['pagemsg' + (status + 4)].page = pagenum
      profileHome.getAllOrderData(this.orderForm).then(response => {
        this._data['pagemsg' + (status + 4)].total = response.data.orderTotal
        this.orderTotal = response.data.orderTotal
        this._data['allOrderData' + (status + 4)] = response.data.orderList
      })
    },
    // 我的订单数据 页面初始化
    handleInitMyOrderData() {
      this.myOrderDataArr.map(item => {
        this.handleMyOrderChange(item, 1)
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
      this.allTicket = true
      profileHome.orderNotInvoice(this.orderNotInvoiceForm).then(response => {
        this.allTicket = false
        this.unTicketData = response.data.orderList

        this.pagemsg8.total = response.data.orderTotal
        this.unTicketData.forEach(item => {
          item.checked = false
        })
        this.readyOrderLoad = false
      })
    },
    // 未开发票列表 分页切换
    unTicketDataChange(val) {
      this.pagemsg8.page = val
      this.orderNotInvoiceForm.pages = val
      profileHome.orderNotInvoice(this.orderNotInvoiceForm).then(response => {
        this.unTicketData = response.data.orderList
        this.unTicketData.forEach(item => {
          item.checked = false
        })
        this.readyOrderLoad = false
      })
    },
    // 开票历史
    getHistoryOrderData() {
      profileHome.tickethistory(this.tickethistoryForm).then(response => {
        this.historyOrderData = response.data.invoiceList
        this.pagemsg9.total = response.data.invoiceTotal
        this.historyOrderLoad = false
      })
    },
    // 开票历史  分页切换
    historyOrderDataChange(val) {
      this.pagemsg9.page = val
      this.tickethistoryForm.pages = val
      profileHome.tickethistory(this.tickethistoryForm).then(response => {
        this.historyOrderData = response.data.invoiceList
        this.historyOrderLoad = false
      })
    },
    // 搜索 兑换码列表
    searchCodeList(data) {
      this.codeListForm.ordersn = data
      this.getCodeList()
    },
    // 获取 兑换码列表
    getCodeList() {
      this.allCode = true
      profileHome.getCodeList(this.codeListForm).then(response => {
        this.allCode = false
        this.codeData = response.data.orderInvitationCodeList
        this.codeListForm.ordersn = ''
      })
    },
    // 兑换详情页的搜索
    recordList(data) {
      this.getCodeListForm.code = data
      this.getRecordList()
    },
    // 邀请记录--兑换详情
    getRecordList() {
      profileHome.getRecordList(this.getCodeListForm).then(response => {
        this.recordData = response.data.usedInvitationCodeList
        this.getCodeListForm.code = ''
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
    //自定制项目
    customerProjectList() {
      profileHome
        .customerProjectList(this.customerProjectForm)
        .then(response => {
          this.customerProjectListData = response.data.curriculumProjectList
          this.customerPagemsg.total = response.data.pageCount
        })
    },
    //自定制项目 分页
    customerProjectChange(val) {
      this.customerPagemsg.page = val
      this.customerProjectForm.pages = val
      profileHome
        .customerProjectList(this.customerProjectForm)
        .then(response => {
          this.customerProjectListData = response.data.curriculumProjectList
        })
    },
    //删除自定制项目
    deleteCustomerProject(id) {
      profileHome.deleteCustomerProject({ id }).then(response => {
        if (response.status == 0) {
          message(this, 'success', '删除成功')
          this.customerProjectList()
        } else {
          message(this, 'error', '删除失败')
        }
      })
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      if (persistStore.get('isSingleLogin')) {
        this.studydataList()
        this.studyCurriculumList()
        this.readyStudyCurriculumList()
        this.handleInitMyProjectData()
        this.collectProjectPageChange(1)
        this.childCategoryList()
        this.collectionList()
        this.handleInitMyOrderData()
        this.getCodeList()
        this.getRecordList()
        this.curriculumPayApply()
        this.getHistoryOrderData()
        this.getUnTicketData()
        // this.getOverTime()
        //过期的我的课程
        this.overStudyCurriculumList()
        this.getUsedInvitationCodeList()
        this.customerProjectList()
      }
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
      // this.getProjectOneList()
      // this.studyProjectPageChange(1)
      this.handleMyProjectChange(1, 1)
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
    this.$bus.$on('goOrderDetaild', data => {
      // this.orderDetail = []
      // this.courseList = []
      this.getOrderDetail(false)
    }),
      // searchDatas
      this.$bus.$on('searchDatas', (data, num) => {
        this.orderForm.startTime = data[0]
        this.orderForm.endTime = data[1]
        this.handleMyOrderChange(Number(num), 1)
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
