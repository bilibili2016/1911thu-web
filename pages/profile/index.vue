<template>
  <div>
    <v-banner :config="bconfig" :isUpdate="isUpdate" :isShowUpAvtor="activeTab=='tab-sixth'"></v-banner>
    <div class="center-tab center profile bigTab" style="min-height:800px;">
      <el-tabs :tab-position="tabPosition" v-model="activeTab" @tab-click="handleClick">
        <!-- 我的首页 -->
        <el-tab-pane class="my-home" name="tab-first">
          <span slot="label" class="tabList">
            <i class="icon-home"></i> 我的首页</span>
          <v-myhome :allCourseLoad="allCourseLoad" :studyData="myCourseData3" :configZero="configZero" :pagemsg3="pagemsg3" :noMsgOne="noMsgOne" @studyDataChange="handleMyCourseChange"></v-myhome>
        </el-tab-pane>
        <!-- 我的课程 -->
        <el-tab-pane class="my-course" name="tab-second">
          <span slot="label" class="tabList">
            <i class="icon-course"></i> 我的课程</span>
          <v-mycourse :allCourseLoad="allCourseLoad" :activeNames="activeNames" :noMsgCourse="noMsgCourse" :pagecltcourse="pagecltcourse" :newDataing="myCourseData1" :configOne="configOne" :pagemsg1="pagemsg1" :noMsgTwo="noMsgTwo" :newDataReady="myCourseData2" :configTwo="configTwo" :pagemsg2="pagemsg2" :noMsgThree="noMsgThree" :overTimeData="myCourseData4" :configFour="configFour" :noMsgFour="noMsgFour" :collectionData="collectionData" :configZero="configZero" :noMsgFive="noMsgFive" @readyStudyPageChange="handleMyCourseChange" @studyPageChange="handleMyCourseChange" @collectionPageChange="collectionPageChange" @handleActive="handleMyCourseChange" @handleActiveCollect="collectionPageChange"> </v-mycourse>
        </el-tab-pane>
        <!-- 我的项目 -->
        <el-tab-pane class="my-course" name="tab-third">
          <span slot="label" class="tabList">
            <i class="icon-project"></i> 我的项目</span>
          <v-myproject :allProjectLoad="allProjectLoad" :activeProject="activeProject" @handleActive="handleMyProjectChange" @handleActiveCollect="collectProjectPageChange" @studyProjectPageChange="handleMyProjectChange" @expiredProjectPageChange="handleMyProjectChange" @alreadyProjectPageChange="handleMyProjectChange" @collectProjectPageChange="collectProjectPageChange" :noMsgNine="noMsgNine" :projectPageCollect="projectPageCollect" :configZero="configFive" :collectProjectData="collectProjectData" :noMsgEight="noMsgEight" :projectPageExpired="projectPageExpired" :configSeven="configSeven" :expiredProjectData="myProjectData3" :noMsgSeven="noMsgSeven" :projectPageReady="projectPageReady" :configSix="configSix" :studyProjectData="myProjectData1" :configOne="configThree" :projectPageStudy="projectPageStudy" :noMsgSix="noMsgSix" :readyProjectData="myProjectData2"></v-myproject>
        </el-tab-pane>
        <!-- 我的订单 -->
        <el-tab-pane class="my-course my-order" name="tab-fourth">
          <span slot="label" class="tabList">
            <i class="icon-order"></i> 我的订单</span>
          <v-myorder @goBack="showOrderList = true" @goTicketBack="showTicketList = true" @handleUpdate="handleMyOrderChange" @updateAll="handleMyOrderChange" :allOrderLoadAll="allOrderLoadAll" :orderTotal="orderTotal" :detailMsg="detailMsg" :orderType="orderType" :projectList="projectList" :courseList="courseList" :bankInfo="bankInfo" :orderDetail="orderDetail" :invalidOrderLoad="invalidOrderLoad" :invalidOrderData="allOrderData7" :readyOrderLoad="readyOrderLoad" :readyOrderData="allOrderData6" :unfinishedOrderData="allOrderData5" :noMsgTen="noMsgTen" :allOrderLoad="allOrderLoad" :allOrderData="allOrderData4" :showOrderList="showOrderList" :pagemsg4="pagemsg4" :pagemsg5="pagemsg5" :pagemsg6="pagemsg6" :pagemsg7="pagemsg7" @getUpdateMsg="handleInitMyOrderData(true)" @closedOrderDataChange="handleMyOrderChange" @getAllOrderDataChange="handleMyOrderChange" @unfinishedOrderDataChange="handleMyOrderChange" @getReadyOrderDataChange="handleMyOrderChange" @invalidOrderDataChange="handleMyOrderChange"></v-myorder>
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
          <v-person @updateUserInfo="isUpdate = true"></v-person>
        </el-tab-pane>
        <!-- 课程码管理 -->
        <el-tab-pane class="my-course my-invitation" name="tab-seventh">
          <span slot="label" class="tabList">
            <i class="icon-code"></i> 兑换码管理</span>
          <v-mycode @reGetCode="getUsedInvitationCodeList" @studyCourse="handleMyCourseChange" @studyProject="handleMyProjectChange" :codeData="codeData" :recordData="recordData" :allCode="allCode" :invitationCodeList="invitationCodeList" @handleCourseCode="handleCourseCode" @recordList="recordList" @searchCodeList="searchCodeList"></v-mycode>
        </el-tab-pane>
        <!-- 发票管理 -->
        <el-tab-pane class="my-course my-order" name="tab-eighth">
          <span slot="label" class="tabList">
            <i class="icon-ticket"></i> 发票管理 </span>
          <v-myticket @handleTicket="handleTicketTabChange" :allTicket="allTicket" :showTicketList="showTicketList" :unTicketData="unTicketData" :readyOrderLoad="readyOrderLoad" :noMsgTwl="noMsgTwl" :historyOrderData="historyOrderData" :unfinishedOrderLoad="unfinishedOrderLoad" :noMsgThi="noMsgThi" :ticketType="ticketType" :courseList="courseList" :projectList="projectList" :orderDetail="orderDetail" :pagemsg8="pagemsg8" :pagemsg9="pagemsg9" @unTicketDataChange="unTicketDataChange" @historyOrderDataChange="historyOrderDataChange" @goTicketDetail="goTicketDetail" @goTicketBack="goTicketBack"></v-myticket>
        </el-tab-pane>
        <!-- 自定制项目 -->
        <el-tab-pane class="my-course my-customerProject" name="tab-ninth">
          <span slot="label" class="tabList">
            <i class="icon-cusProject"></i>&nbsp;自定制项目</span>
          <v-myCustomerProject :customer="customer" :customerProjectListData="customerProjectListData" :customerPagemsg="customerPagemsg" @customerProjectChange="customerProjectChange" @deleteCustomerProject="deleteCustomerProject"></v-myCustomerProject>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import MyHome from '@/pages/profile/pages/myHome'
import PersonalSet from '@/pages/profile/pages/mySettings.vue'
import { profileHome } from '~/lib/v1_sdk/index'
import { message } from '~/lib/util/helper'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'

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
        type: 'order',
        showOrderList: false
      },
      ticketType: {
        type: 'ticket',
        showTicketList: false
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
      configThree: {
        card_type: 'profile',
        card: 'learning',
        project: true
      },
      configFour: {
        card_type: 'profile',
        card: 'overtime'
      },
      configFive: {
        card_type: 'shoucang',
        card: 'home',
        position: 'personal',
        project: true
      },
      configSix: {
        card_type: 'profile',
        card: 'already',
        project: true
      },
      configSeven: {
        card_type: 'profile',
        card: 'overtime',
        project: true
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
        text: '抱歉，您还没有订单需要开发票~'
      },
      noMsgThi: {
        type: 'myTicket',
        text: '抱歉，没有已经开具的发票~'
      },
      newData: [],
      styleForm: {
        types: 1,
        categoryId: 0,
        pages: 0,
        limits: 12
      },
      pagecltcourse: {
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
        pagesize: 12,
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
        limits: 12
      },
      collectionData: [],
      orderDetail: {}, //订单详情信息
      bankInfo: {}, //公司打款信息
      showOrderList: true,
      showTicketList: true,
      isUpdate: false,
      allOrderLoad: true,
      unfinishedOrderLoad: false,
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
      myProjectData1: [],
      myProjectData2: [],
      myProjectData3: [],
      myProjectData4: [],
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
      },
      myCourseData1: [],
      myCourseData2: [],
      myCourseData3: [],
      myCourseData4: [],
      myCourseDataArr: [1, 3], //初始化-我的课程  [1,2,3,4]全部
      myProjectDataArr: [1], //初始化-我的项目  [1,2,3,4]全部
      myOrderDataArr: [0], //初始化-我的订单  [0，1,2,3]全部
      noMsgCourse: false,
      customer: false
    }
  },
  computed: {
    ...mapState('auth', ['token', 'gid']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    /**
     * @param status 序号
     * @param pagenum 页码
     */
    // 我的消息空页面展示
    isNoMyMsg(isShow) {
      this.noMyMsg = isShow
    },
    // 切换tab时保存tab的name 刷新就还是在这个tab
    handleClick(item) {
      switch (item.name) {
        case 'tab-first': //我的首页
          this.myCourseDataArr = [3]
          this.handleInitMyCourseData([3])
          break
        case 'tab-second': //我的课程
          this.myCourseDataArr = [1]
          this.handleInitMyCourseData([1])
          break
        case 'tab-third': //我的项目
          this.myProjectDataArr = [1]
          this.handleInitMyProjectData()
          break
        case 'tab-fourth': //我的订单
          this.myOrderDataArr = [0]
          this.handleInitMyOrderData(true)
          break
        case 'tab-fifth': //我的消息
          break
        case 'tab-sixth': //个人设置
          break
        case 'tab-seventh': //兑换码管理
          this.getUsedInvitationCodeList()
          break
        case 'tab-eighth': //发票管理
          this.unTicketDataChange(1)
          break
        case 'tab-ninth': //自定制项目
          this.customerProjectList()
          break
      }
      persistStore.set('gid', item.name)
    },
    // 我的课程 commonmethods
    handleMyCourseChange(status, pagenum) {
      this.styleForm.types = status
      this.styleForm.categoryId = 0
      this.styleForm.pages = pagenum
      this.styleForm.limits = 12
      // this.pagemsg2.page = pagenum
      this._data['pagemsg' + status].page = pagenum
      this.allCourseLoad = true

      profileHome.studyCurriculumList(this.styleForm).then(response => {
        this._data['myCourseData' + status] = response.data.curriculumList
        this._data['pagemsg' + status].total = response.data.pageCount
        for (let item of response.data.curriculumList) {
          item.percent = Number(item.percent)
        }
        // 为 已过期 的课程添加overtime字段  用于button判断
        for (var i = 0; i < this._data['myCourseData' + 4].length; i++) {
          this.$set(this._data['myCourseData' + 4][i], 'overtime', true)
        }
        // this._data['myCourseData' + status].map(item => {
        //   this.$set(item, 'overtime', true)
        // })
        // console.log(response, '这是response')
        // if (response.data.pageCount > 0) {
        //   this.noMsgCourse = false
        // } else {
        //   this.noMsgCourse = true
        // }

        this.allCourseLoad = false
      })
    },
    // 我的课程-收藏
    collectionPageChange(val) {
      this.pagecltcourse.page = val
      this.collectionForm.pages = val
      this.collectionForm.categoryId = 0
      this.collectionForm.limits = 12
      profileHome.collectionList(this.collectionForm).then(response => {
        this.collectionData = response.data.curriculumList
        this.pagecltcourse.total = response.data.pageCount
      })
    },
    // 我的课程 首页 数据初始化
    handleInitMyCourseData() {
      this.myCourseDataArr.map(item => {
        this.handleMyCourseChange(item, 1)
      })
    },
    // 我的项目 commonmethods 我的项目分页没做
    handleMyProjectChange(status, pagenum) {
      this.projectForm.types = status
      this.projectForm.pages = pagenum
      this.projectForm.limits = 12
      this._data['myProjectPage' + status].page = pagenum
      this.allProjectLoad = true
      profileHome.getProjectList(this.projectForm).then(response => {
        this._data['myProjectData' + status] = response.data.studyProjectList
        this._data['myProjectPage' + status].total = response.data.pageCount
        for (let item of response.data.studyProjectList) {
          item.percent = Number(item.percent)
        }
        // 为 已过期 的课程添加overtime字段  用于button判断
        for (var i = 0; i < this._data['myProjectData' + 3].length; i++) {
          this.$set(this._data['myProjectData' + 3][i], 'overtime', true)
        }
        this.allProjectLoad = false
      })
    },
    // 我的项目-收藏
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
    // 我的项目数据 页面初始化
    handleInitMyProjectData() {
      this.myProjectDataArr.map(item => {
        this.handleMyProjectChange(item, 1)
      })
    },
    // 我的订单 commonmethods
    handleMyOrderChange(status, pagenum) {
      this.allOrderLoadAll = true
      this.orderForm.payStatus = status
      this.orderForm.pages = pagenum
      this._data['pagemsg' + (status + 4)].page = pagenum
      profileHome.getAllOrderData(this.orderForm).then(response => {
        this._data['pagemsg' + (status + 4)].total =
          response.data.searchOrderTotal
        if (status === 1) {
          this.orderTotal = response.data.orderTotal
        }
        this._data['allOrderData' + (status + 4)] = response.data.orderList
        this.allOrderLoadAll = false
      })
    },
    // 我的订单数据 页面初始化
    handleInitMyOrderData(type) {
      if (type == true) {
        this.myOrderDataArr.map(item => {
          this.handleMyOrderChange(item, 1)
        })
      }
    },
    // 我的发票 未开发票 分页切换
    unTicketDataChange(val) {
      this.allTicket = true
      this.pagemsg8.page = val
      this.orderNotInvoiceForm.pages = val
      profileHome.orderNotInvoice(this.orderNotInvoiceForm).then(response => {
        this.allTicket = false
        this.unTicketData = response.data.orderList
        this.unTicketData.forEach(item => {
          item.checked = false
        })
        this.readyOrderLoad = false
      })
    },
    // 我的发票 开票历史 分页切换
    historyOrderDataChange(val) {
      this.unfinishedOrderLoad = true
      this.pagemsg9.page = val
      this.tickethistoryForm.pages = val
      profileHome.tickethistory(this.tickethistoryForm).then(response => {
        this.historyOrderData = response.data.invoiceList

        this.unfinishedOrderLoad = false
      })
    },
    // 我的发票 tab切换 更新数据
    handleTicketTabChange(item) {
      if (item === '1') {
        // 按订单开发票
        this.$bus.$emit('CloseAllChecked') // 消除上次默认选中
        this.unTicketDataChange(1)
      } else if (item === '2') {
        // 开票历史
        this.historyOrderDataChange(1)
      }
    },
    // 兑换码 搜索 兑换码列表
    searchCodeList(data) {
      this.codeListForm.ordersn = data
      this.getCodeList()
    },
    // 兑换码 获取 兑换码列表
    getCodeList() {
      this.allCode = true
      profileHome.getCodeList(this.codeListForm).then(response => {
        this.allCode = false
        this.codeData = response.data.orderInvitationCodeList
        this.codeListForm.ordersn = ''
      })
    },
    // 兑换码 兑换详情页的搜索
    recordList(data) {
      this.getCodeListForm.code = data
      this.getRecordList()
    },
    // 兑换码 管理子类切换
    handleCourseCode(item) {
      if (item.name === 'first') {
        this.getCodeList()
      }
      if (item.name === 'second') {
        this.getRecordList()
      }
      if (item.name === 'fourth') {
        this.getUsedInvitationCodeList()
      }
    },
    // 邀请记录--兑换详情
    getRecordList() {
      profileHome.getRecordList(this.getCodeListForm).then(response => {
        this.recordData = response.data.usedInvitationCodeList
        this.getCodeListForm.code = ''
      })
    },
    // 兑换码 获取已经添加的兑换码
    getUsedInvitationCodeList() {
      profileHome.getUsedInvitationCodeList().then(response => {
        this.invitationCodeList = response.data.usedInvitationCodeList
      })
    },
    //获取发票详情
    goTicketDetail(msg) {
      this.showTicketList = false
      this.orderForm.ids = persistStore.get('order')
      profileHome.curriculumPayApply(this.orderForm).then(response => {
        if (response.status === 0) {
          this.courseList = response.data.orderCurriculumList
          this.projectList = response.data.orderProjectList
          this.orderDetail = response.data.orderDetail
        }
      })
    },
    //发票详情-返回发票列表页
    goTicketBack(val) {
      this.showTicketList = true
    },
    // 订单详情
    curriculumPayApply(data) {
      if (data == false) {
        this.showTicketList = false
      } else {
        this.showOrderList = false
      }
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
      this.customer = true
      profileHome
        .customerProjectList(this.customerProjectForm)
        .then(response => {
          this.customerProjectListData = response.data.curriculumProjectList
          this.customerPagemsg.total = response.data.pageCount
          this.customer = false
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
    },
    // 初始化 bus 事件
    initBusEvent() {
      this.$bus.$on('selectProfileIndex', data => {
        this.activeTab = data
      })
      // 头部绑定成功更新
      this.$bus.$on('studyCourse', data => {
        this.handleMyCourseChange(1, 1)
        this.handleMyProjectChange(1, 1)
        this.activeTab = data
        persistStore.set('gid', data)
      })
      // 展示订单详情
      this.$bus.$on('goOrderDetail', data => {
        this.curriculumPayApply(data)
      })
      // 我的订单 事件搜索
      this.$bus.$on('searchDatas', (data, num) => {
        this.orderForm.startTime = data[0]
        this.orderForm.endTime = data[1]
        this.handleMyOrderChange(Number(num), 1)
      })
      // 发票管理 开票历史 由于层级较深
      this.$bus.$on('historyOrderDataChange', data => {
        this.historyOrderDataChange(1)
      })
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.activeTab = this.gid
      if (persistStore.get('isSingleLogin')) {
        this.initBusEvent()
        this.handleInitMyCourseData() //我的课程
        this.handleInitMyProjectData() //我的项目
        // this.collectProjectPageChange(1) //我的项目-收藏
        // this.collectionPageChange(1) //我的课程-收藏
        this.handleInitMyOrderData(true) //我的订单
        this.getCodeList() //兑换码管理-兑换码列表
        // this.getRecordList()  //兑换码管理-兑换详情
        // this.getUsedInvitationCodeList()  //兑换码管理-我的兑换
        // this.historyOrderDataChange(1)  //我的发票 开票历史
        this.unTicketDataChange(1) //我的发票 按订单开发票
        this.customerProjectList() //自定义项目
      }
    }
  }
}
</script>

<style scope lang="scss">
@import '~assets/style/profile/home';
</style>
