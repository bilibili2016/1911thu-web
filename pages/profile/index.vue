<template>
  <div class="personalCenter">
    <v-banner :config="bconfig" :isShowUpAvtor="activeTab=='tab-sixth'" :userInfo="userInfo"></v-banner>
    <div class="center-tab center profile bigTab" style="min-height:900px;">
      <el-tabs :tab-position="tabPosition" v-model="activeTab" @tab-click="handleClick" class="profileContent">
        <!-- 最近学习 -->
        <el-tab-pane class="my-home" name="tab-first">
          <span slot="label" class="tabList">
            <i class="icon-home"></i> 最近学习
          </span>
          <v-myhome :allCourseLoad="allCourseLoad" :studyData="myCourseData3" :studyProjectData="myProjectData4" :configZero="configZero" :configFive="configFive" :pagemsg3="pagemsg3" :myProjectPage="myProjectPage4" :noMsgOne="noMsgOne" :noMsgOnes="noMsgOnes" @studyDataChange="handleMyCourseChange" @studyProjectChange="handleMyProjectChange"></v-myhome>
        </el-tab-pane>
        <!-- 我的学院 -->
        <el-tab-pane class="my-course my-examine" name="tab-eleventh">
          <span slot="label" class="tabList">
            <i class="icon-college"></i>&nbsp;我的学院
          </span>
          <v-mycollege :collegeListData="collegeListData" :collegeLoading="collegeLoading" :collegePagemsg="collegePagemsg" @collegeListChange="collegeListChange"></v-mycollege>
        </el-tab-pane>
        <!-- 我的课程 -->
        <el-tab-pane class="my-course" name="tab-second">
          <span slot="label" class="tabList">
            <i class="icon-course"></i> 我的课程
          </span>
          <v-mycourse :allCourseLoad="allCourseLoad" :noMsgCourse="noMsgCourse" :pagecltcourse="pagecltcourse" :newDataing="myCourseData1" :configOne="configOne" :pagemsg1="pagemsg1" :noMsgTwo="noMsgTwo" :newDataReady="myCourseData2" :configTwo="configTwo" :pagemsg2="pagemsg2" :noMsgThree="noMsgThree" :overTimeData="myCourseData4" :configFour="configFour" :noMsgFour="noMsgFour" :collectionData="collectionData" :configZero="configZero" :noMsgFive="noMsgFive" @readyStudyPageChange="handleMyCourseChange" @overStudyPageChange="handleMyCourseChange" @studyPageChange="handleMyCourseChange" @collectionPageChange="collectionPageChange" @handleActive="handleMyCourseChange" @handleActiveCollect="collectionPageChange"></v-mycourse>
        </el-tab-pane>
        <!-- 我的项目 -->
        <el-tab-pane class="my-course" name="tab-third">
          <span slot="label" class="tabList">
            <i class="icon-project"></i> 我的项目
          </span>
          <v-myproject :allProjectLoad="allProjectLoad" @handleActive="handleMyProjectChange" @handleActiveCollect="collectProjectPageChange" @studyProjectPageChange="handleMyProjectChange" @expiredProjectPageChange="handleMyProjectChange" @alreadyProjectPageChange="handleMyProjectChange" @collectProjectPageChange="collectProjectPageChange" :noMsgNine="noMsgNine" :projectPageCollect="projectPageCollect" :configZero="configFive" :collectProjectData="collectProjectData" :noMsgEight="noMsgEight" :projectPageExpired="myProjectPage3" :configSeven="configSeven" :expiredProjectData="myProjectData3" :noMsgSeven="noMsgSeven" :projectPageReady="myProjectPage2" :configSix="configSix" :studyProjectData="myProjectData1" :configOne="configThree" :projectPageStudy="myProjectPage1" :noMsgSix="noMsgSix" :readyProjectData="myProjectData2"></v-myproject>
        </el-tab-pane>
        <!-- 我的订单 -->
        <el-tab-pane class="my-course my-order" name="tab-fourth">
          <span slot="label" class="tabList">
            <i class="icon-order"></i> 我的订单
          </span>
          <v-myorder @goBack="showOrderList = true" @goTicketBack="showTicketList = true" @handleUpdate="handleMyOrderChange" @updateAll="handleMyOrderChange" :allOrderLoadAll="allOrderLoadAll" :orderTotal="orderTotal" :detailMsg="detailMsg" :orderType="orderType" :projectList="projectList" :courseList="courseList" :vipList="vipList" :bankInfo="bankInfo" :orderDetail="orderDetail" :teacherBespokeList="teacherBespokeList" :invalidOrderLoad="invalidOrderLoad" :invalidOrderData="allOrderData7" :readyOrderLoad="readyOrderLoad" :readyOrderData="allOrderData6" :unfinishedOrderData="allOrderData5" :noMsgTen="noMsgTen" :allOrderLoad="allOrderLoad" :allOrderData="allOrderData4" :showOrderList="showOrderList" :pagemsg4="pagemsg4" :pagemsg5="pagemsg5" :pagemsg6="pagemsg6" :pagemsg7="pagemsg7" @getUpdateMsg="handleInitMyOrderData(true)" @closedOrderDataChange="handleMyOrderChange" @getAllOrderDataChange="handleMyOrderChange" @unfinishedOrderDataChange="handleMyOrderChange" @getReadyOrderDataChange="handleMyOrderChange" @invalidOrderDataChange="handleMyOrderChange"></v-myorder>
        </el-tab-pane>
        <!-- 我的消息 -->
        <el-tab-pane class="my-info" name="tab-fifth">
          <span slot="label" class="tabList infoList">
            <i class="redInfo" v-if="infoNum!=0"></i>
            <i class="icon-message"></i> 我的消息
          </span>
          <v-myinfo :noMyMsg="noMyMsg" :noMsgEle="noMsgEle" @isNoMyMsg="isNoMyMsg"></v-myinfo>
        </el-tab-pane>
        <!-- 个人设置 -->
        <el-tab-pane name="tab-sixth">
          <span slot="label" class="tabList">
            <i class="icon-set"></i> 个人设置
          </span>
          <v-person :userInfo="userInfo" @getUserData="getUserInfo"></v-person>
        </el-tab-pane>
        <!-- 课程码管理 -->
        <el-tab-pane class="my-course my-invitation" name="tab-seventh">
          <span slot="label" class="tabList">
            <i class="icon-code"></i> 兑换码管理
          </span>
          <v-mycode @reGetCode="getUsedInvitationCodeList" @studyCourse="handleMyCourseChange" @studyProject="handleMyProjectChange" :codeData="codeData" :recordData="recordData" :allCode="allCode" :invitationCodeList="invitationCodeList" @handleCourseCode="handleCourseCode" @recordList="recordList" @searchCodeList="searchCodeList"></v-mycode>
        </el-tab-pane>
        <!-- 发票管理 -->
        <el-tab-pane class="my-course my-ticket" name="tab-eighth">
          <span slot="label" class="tabList">
            <i class="icon-ticket"></i> 发票管理
          </span>
          <v-myticket @handleTicket="handleTicketTabChange" :allTicket="allTicket" :showTicketList="showTicketList" :unTicketData="unTicketData" :readyOrderLoad="readyOrderLoad" :noMsgTwl="noMsgTwl" :historyOrderData="historyOrderData" :unfinishedOrderLoad="unfinishedOrderLoad" :noMsgThi="noMsgThi" :ticketType="ticketType" :courseList="courseList" :projectList="projectList" :teacherBespokeList="teacherBespokeList" :orderDetail="orderDetail" :pagemsg8="pagemsg8" :pagemsg9="pagemsg9" @unTicketDataChange="unTicketDataChange" @historyOrderDataChange="historyOrderDataChange" @goTicketDetail="goTicketDetail" @goTicketBack="goTicketBack"></v-myticket>
        </el-tab-pane>
        <!-- 自定制项目 -->
        <el-tab-pane class="my-course my-customerProject" name="tab-ninth">
          <span slot="label" class="tabList">
            <i class="icon-cusProject"></i>&nbsp;自定制项目
          </span>
          <v-myCustomerProject :customer="customer" :customerProjectListData="customerProjectListData" :customerPagemsg="customerPagemsg" @customerProjectChange="customerProjectChange" @deleteCustomerProject="deleteCustomerProject"></v-myCustomerProject>
        </el-tab-pane>
        <!-- 考试认证 -->
        <el-tab-pane class="my-course my-examine" name="tab-tenth">
          <span slot="label" class="tabList">
            <i class="icon-examine"></i>&nbsp;申请证书
          </span>
          <v-myexamine :examineListData="examineListData" :examineLoading="examineLoading" :examinePagemsg="examinePagemsg" @examineListChange="examineListChange"></v-myexamine>
        </el-tab-pane>
        <!-- 我的咨询 -->
        <el-tab-pane class="my-course" name="tab-twelfth">
          <span slot="label" class="tabList">
            <i class="icon-student"></i>&nbsp;我的咨询
          </span>
          <v-mystudent :data="teacherData" :teacherPagemsg="teacherPagemsg" @getTeacherData="getTeacherData"></v-mystudent>
        </el-tab-pane>
        <!-- 教师入口  -->
        <el-tab-pane class="my-course my-teacher" name="tab-thirteenth" v-if="userInfo.is_teacher=='1'">
          <span slot="label" class="tabList">
            <i class="icon-teacher"></i>&nbsp;教师入口
          </span>
          <v-myteacher :data="teacherData" :teacherPagemsg="teacherPagemsg" @getTeacherData="getTeacherData"></v-myteacher>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/common/Banner.vue";
import MyHome from "@/pages/profile/pages/myHome";
import PersonalSet from "@/pages/profile/pages/mySettings.vue";
import { profileHome, examine, college, banner } from "~/lib/v1_sdk/index";
import { message, setTitle, IEPopup } from "~/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";

import myCourse from "@/pages/profile/pages/myCourse";
import myProject from "@/pages/profile/pages/myProject";
import myOrder from "@/pages/profile/pages/myOrder";
import myInfo from "@/pages/profile/pages/myInfo";
import myCode from "@/pages/profile/pages/myCode";
import myTicket from "@/pages/profile/pages/myTicket";
import myCustomerProject from "@/pages/profile/pages/myCustomerProject";
import myExamine from "@/pages/profile/pages/myExamine";
import myCollege from "@/pages/profile/pages/myCollege";
import myStudent from "@/pages/profile/pages/myStudent";
import myTeacher from "@/pages/profile/pages/myTeacher";

export default {
  components: {
    "v-person": PersonalSet,
    "v-banner": Banner,
    "v-myhome": MyHome,
    "v-mycourse": myCourse,
    "v-myproject": myProject,
    "v-myorder": myOrder,
    "v-myinfo": myInfo,
    "v-mycode": myCode,
    "v-myticket": myTicket,
    "v-myCustomerProject": myCustomerProject,
    "v-myexamine": myExamine,
    "v-mycollege": myCollege,
    "v-mystudent": myStudent,
    "v-myteacher": myTeacher
  },
  data () {
    return {
      infoNum: "",
      orderType: {
        type: "order",
        showOrderList: false
      },
      ticketType: {
        type: "ticket",
        showTicketList: false
      },
      projectImg: "https://static-image.1911edu.com/p4.png", //项目图标
      isShowNoCourse: false,
      noMyMsg: false,
      study: false,
      noMsgImg: "https://static-image.1911edu.com/noMsg.png",
      tabPosition: "left",
      activeTab: "tab-first",
      bconfig: {
        banner_type: "profile"
      },
      configZero: {
        card_type: "shoucang",
        card: "home",
        position: "personal"
      },
      configOne: {
        card_type: "profile",
        card: "learning"
      },
      configTwo: {
        card_type: "profile",
        card: "already"
      },
      configThree: {
        card_type: "profile",
        card: "learning",
        project: true
      },
      configFour: {
        card_type: "profile",
        card: "overtime"
      },
      configFive: {
        card_type: "shoucang",
        card: "home",
        position: "personal",
        project: true
      },
      configSix: {
        card_type: "profile",
        card: "already",
        project: true
      },
      configSeven: {
        card_type: "profile",
        card: "overtime",
        project: true
      },
      noMsgOne: {
        type: "index",
        text: "抱歉，现在还没有学习过的课程呦~"
      },
      noMsgOnes: {
        type: "index",
        text: "抱歉，现在还没有学习过的项目呦~"
      },
      noMsgTwo: {
        type: "myCourse",
        text: "抱歉，现在还没有学习中的课程呦~"
      },
      noMsgThree: {
        type: "myCourse",
        text: "抱歉，现在还没有已经完成的课程呦~"
      },
      noMsgFour: {
        type: "myCourse",
        text: "抱歉，现在还没有已过期的课程呦~"
      },
      noMsgFive: {
        type: "myCourse",
        text: "抱歉，现在还没有已经收藏的课程呦~"
      },
      noMsgSix: {
        type: "myProject",
        text: "抱歉，现在还没有学习中的项目呦~"
      },
      noMsgSeven: {
        type: "myProject",
        text: "抱歉，现在还没有已经完成的项目呦~"
      },
      noMsgEight: {
        type: "myProject",
        text: "抱歉，现在还没有已过期的项目呦~"
      },
      noMsgNine: {
        type: "myProject",
        text: "抱歉，现在还没有已经收藏的项目呦~"
      },
      noMsgTen: {
        type: "myOrder",
        text: "抱歉，没有更多的订单了~"
      },
      noMsgEle: {
        type: "myInfo",
        text: "抱歉，您还没有收到新的消息~"
      },
      noMsgTwl: {
        type: "myTicket",
        text: "抱歉，您还没有订单需要开发票~"
      },
      noMsgThi: {
        type: "myTicket",
        text: "抱歉，没有已经开具的发票~"
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
        total: 20
      },
      pagemsg5: {
        page: 1,
        pagesize: 20,
        total: 20
      },
      pagemsg6: {
        page: 1,
        pagesize: 20,
        total: 20
      },
      pagemsg7: {
        page: 1,
        pagesize: 20,
        total: 20
      },
      pagemsg8: {
        page: 1,
        pagesize: 20,
        total: 20
      },
      pagemsg9: {
        page: 1,
        pagesize: 20,
        total: 20
      },
      projectForm: {
        types: 1,
        pages: "",
        limits: ""
      },
      customerPagemsg: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      examinePagemsg: {
        page: 1,
        pagesize: 5,
        total: 5
      },
      collegePagemsg: {
        page: 1,
        pagesize: 10,
        total: 10
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
        total: ""
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
      teacherBespokeList: [],
      vipList: [],
      companyData: null,
      options: [],
      value: "全部",
      collectionForm: {
        categoryId: 0,
        pages: 1,
        limits: 12
      },
      codeListForm: {
        pages: 1,
        limits: null,
        ordersn: ""
      },
      getCodeListForm: {
        pages: 1,
        limits: null,
        code: ""
      },
      orderForm: {
        pages: 1,
        limits: 20,
        payStatus: null,
        ids: null,
        startTime: null,
        orderSn: null
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
      orderTotal: "",
      myProjectData1: [],
      myProjectData2: [],
      myProjectData3: [],
      myProjectData4: [],
      myProjectPage1: {
        types: 1,
        pages: 1,
        limits: 12,
        pagesize: 12
      },
      myProjectPage2: {
        types: 2,
        pages: 1,
        limits: 12,
        pagesize: 12
      },
      myProjectPage3: {
        types: 3,
        pages: 1,
        limits: 12,
        pagesize: 12
      },
      myProjectPage4: {
        types: 4,
        pages: 1,
        limits: 12,
        pagesize: 12
      },
      myCourseData1: [],
      myCourseData2: [],
      myCourseData3: [],
      myCourseData4: [],
      myCourseDataArr: [1, 3], //初始化-我的课程  [1,2,3,4]全部
      myProjectDataArr: [1], //初始化-我的项目  [1,2,3,4]全部
      myOrderDataArr: [0, 1], //初始化-我的订单  [0，1,2,3]全部
      noMsgCourse: false,
      customer: false,
      examineLoading: false,
      collegeLoading: false,
      responseData: { type: true, res: "" },
      examineListForm: {
        page: 1,
        limit: 10
      },
      collegeListForm: {
        page: 1,
        limit: 10
      },
      examineListData: [],
      collegeListData: [],
      selectItem: {
        name: ""
      },
      userInfo: {
        head_img: "https://static-image.1911edu.com/defaultHeadImg.jpg"
      },
      getHistory: true,
      teacherData: [],
      teacherBespokeData: {
        statusType: 1,
        type: 1,
        page: 1,
        limit: 12
      },
      teacherPagemsg: {
        page: 1,
        pagesize: 12,
        total: 20
      }
    };
  },
  computed: {
    ...mapState("auth", ["token", "gid"]),
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("auth", ["setGid"]),

    /**
     * @param status 序号
     * @param pagenum 页码
     */
    // 我的消息空页面展示
    isNoMyMsg (isShow) {
      this.noMyMsg = isShow;
    },
    // 切换tab时保存tab的name 刷新就还是在这个tab
    handleClick (item) {
      if (persistStore.get("token")) {
        switch (item.name) {
          case "tab-first": //最近学习
            this.myCourseDataArr = [3];
            this.$bus.$emit("activeHome");
            this.handleInitMyCourseData([3]);
            break;
          case "tab-second": //我的课程
            this.myCourseDataArr = [1];
            this.$bus.$emit("activeCourse");
            this.handleInitMyCourseData([1]);
            break;
          case "tab-third": //我的项目
            this.myProjectDataArr = [1];
            this.$bus.$emit("activeProject");
            this.handleInitMyProjectData();
            break;
          case "tab-fourth": //我的订单
            this.myOrderDataArr = [0, 1];
            this.showOrderList = true;
            this.orderForm.orderSn = "";
            this.$bus.$emit("activeOrder");
            this.handleInitMyOrderData(true);
            break;
          case "tab-fifth": //我的消息
            this.$bus.$emit("isShowList");
            break;
          case "tab-sixth": //个人设置
            this.$bus.$emit("activeSet");
            this.$bus.$emit("getPositionList");
            break;
          case "tab-seventh": //兑换码管理
            this.$bus.$emit("activeCode");
            this.getCodeList();
            break;
          case "tab-eighth": //发票管理
            this.$bus.$emit("activeTicket");
            this.unTicketDataChange(1);
            break;
          case "tab-ninth": //自定制项目
            this.customerProjectList();
            break;
          case "tab-tenth": //考试认证
            this.examList();
            // this.$bus.$emit("whichShow", { id: "", name: "list" });
            break;
          case "tab-eleventh": //我的学院
            this.collegeList();
            break;
          case "tab-twelfth": //我的咨询
          this.$bus.$emit("activeStudent");
            this.getTeacherData({
              statusType: 1,
              type: 1
            });
            break;
          case "tab-thirteenth": //教师入口
          this.$bus.$emit("activeTeacher");
            this.getTeacherData({
              statusType: 1,
              type: 2
            });
            this.$bus.$emit("gotoURL", { name: "list" });
            break;
        }
        let gidForm = {
          gids: item.name
        };
        this.setGid(gidForm);
        this.$bus.$emit("selectProfileIndex", item.name);
        persistStore.set("gid", item.name);
      } else {
        this.$router.push("/");
        this.$bus.$emit("loginShow", true);
      }
    },
    // 我的课程 commonmethods
    handleMyCourseChange (status, pagenum) {
      this.styleForm.types = status;
      this.styleForm.categoryId = 0;
      this.styleForm.pages = pagenum;
      this.styleForm.limits = 12;
      // this.pagemsg2.page = pagenum
      this._data["pagemsg" + status].page = pagenum;
      this.allCourseLoad = true;

      profileHome.studyCurriculumList(this.styleForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status === 0) {
          this._data["myCourseData" + status] = response.data.curriculumList;
          this._data["pagemsg" + status].total = response.data.pageCount;
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent);
          }
          // 为 已过期 的课程添加overtime字段  用于button判断
          for (var i = 0; i < this._data["myCourseData" + 4].length; i++) {
            this.$set(this._data["myCourseData" + 4][i], "overtime", true);
          }
          // this._data['myCourseData' + status].map(item => {
          //   this.$set(item, 'overtime', true)
          // })
          // if (response.data.pageCount > 0) {
          //   this.noMsgCourse = false
          // } else {
          //   this.noMsgCourse = true
          // }

          this.allCourseLoad = false;
        }
      });
    },
    // 我的课程-收藏
    collectionPageChange (val) {
      this.pagecltcourse.page = val;
      this.collectionForm.pages = val;
      this.collectionForm.categoryId = 0;
      this.collectionForm.limits = 12;
      profileHome.collectionList(this.collectionForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status === 0) {
          this.collectionData = response.data.curriculumList;
          this.pagecltcourse.total = response.data.pageCount;
        }
      });
    },
    // 我的课程 首页 数据初始化
    handleInitMyCourseData () {
      this.myCourseDataArr.map(item => {
        this.handleMyCourseChange(item, 1);
      });
    },
    // 我的项目 commonmethods
    handleMyProjectChange (status, pagenum) {
      this.projectForm.types = status;
      this.projectForm.pages = pagenum;
      this.projectForm.limits = 12;
      this._data["myProjectPage" + status].page = pagenum;
      this.allProjectLoad = true;
      profileHome.getProjectList(this.projectForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status === 0) {
          this._data["myProjectData" + status] = response.data.studyProjectList;
          this._data["myProjectPage" + status].total = response.data.pageCount;
          for (let item of response.data.studyProjectList) {
            item.percent = Number(item.percent);
          }
          // 为 已过期 的课程添加overtime字段  用于button判断
          for (var i = 0; i < this._data["myProjectData" + 3].length; i++) {
            this.$set(this._data["myProjectData" + 3][i], "overtime", true);
          }
          this.allProjectLoad = false;
        }
      });
    },
    // 我的项目-收藏
    collectProjectPageChange (val) {
      this.projectPageReady.page = val;
      this.projectForm.pages = val;
      this.projectForm.types = 2;
      this.projectForm.limits = 12;
      profileHome.getProjectCollectList(this.projectForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status === 0) {
          this.collectProjectData =
            response.data.collectionCurriculumProjectList;
          this.projectPageCollect.total = response.data.pageCount;
        }
      });
    },
    // 我的项目数据 页面初始化
    handleInitMyProjectData () {
      this.myProjectDataArr.map(item => {
        this.handleMyProjectChange(item, 1);
      });
    },
    // 我的订单 commonMethods
    handleMyOrderChange (status, pagenum, flag) {
      if (flag) {
        //切换标签时默认清空搜索条件
        this.orderForm.startTime = "";
        this.orderForm.endTime = "";
        this.orderForm.orderSn = "";
        this.$bus.$emit("clearSearch");
      }
      this.allOrderLoadAll = true;
      this.orderForm.payStatus = status;
      this.orderForm.pages = pagenum;
      this._data["pagemsg" + (status + 4)].page = pagenum;
      profileHome.getAllOrderData(this.orderForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status === 0) {
          if (
            this.orderForm.startTime ||
            this.orderForm.endTime ||
            this.orderForm.orderSn
          ) {
            this.noMsgTen.text = "没有符合条件的订单，请尝试其他搜索条件。";
          } else {
            this.noMsgTen.text = "抱歉，没有更多的订单了~";
          }

          this._data["pagemsg" + (status + 4)].total =
            response.data.searchOrderTotal;
          if (status === 1) {
            this.orderTotal = response.data.orderTotal;
          }
          this._data["allOrderData" + (status + 4)] = response.data.orderList;
          this.allOrderLoadAll = false;
        }
      });
    },
    // 我的订单数据 页面初始化
    handleInitMyOrderData (type) {
      if (type == true) {
        this.myOrderDataArr.map(item => {
          this.handleMyOrderChange(item, 1);
        });
      }
    },
    // 我的发票 未开发票 分页切换
    unTicketDataChange (val) {
      this.allTicket = true;
      this.pagemsg8.page = val;
      this.orderNotInvoiceForm.pages = val;
      profileHome.orderNotInvoice(this.orderNotInvoiceForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status === 0) {
          this.allTicket = false;
          this.unTicketData = response.data.orderList;
          this.unTicketData.forEach(item => {
            item.checked = false;
          });
          this.readyOrderLoad = false;
        }
      });
    },
    // 我的发票 开票历史 分页切换
    historyOrderDataChange (val) {
      this.unfinishedOrderLoad = true;
      this.pagemsg9.page = val;
      this.tickethistoryForm.pages = val;
      if (this.getHistory) {
        this.getHistory = false;
        profileHome.tickethistory(this.tickethistoryForm).then(response => {
          if (response.status === 100008) {
            this.responseData.res = response;
            this.$router.push("/");
            this.getHistory = true;
            return false;
          } else if (response.status === 0) {
            this.historyOrderData = response.data.invoiceList;
            IEPopup("pane-tab-eighth", "relative", 1);
            this.getHistory = true;
            this.unfinishedOrderLoad = false;
          } else {
            this.getHistory = true;
          }
        });
      }
    },
    // 我的发票 tab切换 更新数据
    handleTicketTabChange (item) {
      if (item === "1") {
        // 按订单开发票
        this.$bus.$emit("CloseAllChecked"); // 消除上次默认选中
        this.unTicketDataChange(1);
      } else if (item === "2") {
        // 开票历史
        this.historyOrderDataChange(1);
      }
    },
    // 兑换码 搜索 兑换码列表
    searchCodeList (data) {
      this.codeListForm.ordersn = data;
      this.getCodeList();
    },
    // 兑换码 获取 兑换码列表
    getCodeList () {
      this.allCode = true;
      profileHome.getCodeList(this.codeListForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status === 0) {
          this.allCode = false;
          this.codeData = response.data.orderInvitationCodeList;
          this.codeListForm.ordersn = "";
        }
      });
    },
    // 兑换码 兑换详情页的搜索
    recordList (data) {
      this.getCodeListForm.code = data;
      this.getRecordList();
    },
    // 兑换码 管理子类切换
    handleCourseCode (item) {
      if (item.name === "first") {
        this.getCodeList();
      }
      if (item.name === "second") {
        this.getRecordList();
      }
      if (item.name === "fourth") {
        this.getUsedInvitationCodeList();
      }
    },
    // 邀请记录--兑换详情
    getRecordList () {
      profileHome.getRecordList(this.getCodeListForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status === 0) {
          this.recordData = response.data.usedInvitationCodeList;
          this.getCodeListForm.code = "";
        }
      });
    },
    // 兑换码 获取已经添加的兑换码
    getUsedInvitationCodeList () {
      profileHome.getUsedInvitationCodeList().then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status === 0) {
          this.invitationCodeList = response.data.usedInvitationCodeList;
        }
      });
    },
    //获取发票详情
    goTicketDetail (msg) {
      this.orderForm.ids = persistStore.get("order");
      profileHome.curriculumPayApply(this.orderForm).then(response => {
        if (response.status === 0) {
          this.courseList = response.data.orderCurriculumList;
          this.projectList = response.data.orderProjectList;
          this.orderDetail = response.data.orderDetail;
          this.showTicketList = false;
        } else if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    //发票详情-返回发票列表页
    goTicketBack (val) {
      this.showTicketList = true;
    },
    // 订单详情
    curriculumPayApply (data) {
      this.orderForm.ids = persistStore.get("order");
      this.detailMsg = true;
      profileHome.curriculumPayApply(this.orderForm).then(response => {
        if (response.status === 0) {
          this.detailMsg = false;
          this.courseList = response.data.orderCurriculumList;
          this.projectList = response.data.orderProjectList;
          this.teacherBespokeList = response.data.orderTeacherBespokeList;
          this.vipList = response.data.orderVipList;

          this.orderDetail = response.data.orderDetail;
          if (response.data.orderDetail) {
            this.bankInfo = response.data.bankInfo;
          }

          if (data == false) {
            this.showTicketList = false;
          } else {
            this.showOrderList = false;
          }
        } else if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    //自定制项目
    customerProjectList () {
      this.customer = true;
      profileHome
        .customerProjectList(this.customerProjectForm)
        .then(response => {
          if (response.status === 100008) {
            this.responseData.res = response;
            this.$router.push("/");
            return false;
          } else if (response.status === 0) {
            this.customerProjectListData = response.data.curriculumProjectList;
            this.customerPagemsg.total = response.data.pageCount;
            this.customer = false;
          }
        });
    },
    //自定制项目 分页
    customerProjectChange (val) {
      this.customerPagemsg.page = val;
      this.customerProjectForm.pages = val;
      profileHome
        .customerProjectList(this.customerProjectForm)
        .then(response => {
          if (response.status === 100008) {
            this.responseData.res = response;
            this.$router.push("/");
            return false;
          } else if (response.status === 0) {
            this.customerProjectListData = response.data.curriculumProjectList;
          }
        });
    },
    //删除自定制项目
    deleteCustomerProject (id) {
      profileHome.deleteCustomerProject({ id }).then(response => {
        if (response.status == 0) {
          message(this, "success", "删除成功");
          this.customerProjectList();
        } else if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else {
          message(this, "error", "删除失败");
        }
      });
    },
    // 我的咨询和老师入口tab切换
    getTeacherData (data) {
      this.teacherBespokeData.type = data.type;
      this.teacherBespokeData.statusType = data.statusType;
      this.teacherBespokeData.page = 1;
      this.teacherPagemsg.page = 1;
      this.teacherBespokeListData();
    },
    // 获取预约老师列表
    teacherBespokeListData () {
      profileHome.teacherBespokeList(this.teacherBespokeData).then(response => {
        if (response.status == 0) {
          this.teacherData = response.data.teacherBespokeList;
          this.teacherPagemsg.total = response.data.total;
          // this.teacherBespokeData.type = 1;
          // this.teacherBespokeData.page = 1;
          // this.teacherBespokeData.limit = 1;
        } else if (response.status === 100008) {
          this.$router.push("/");
          return false;
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    //预约列表翻页
    changeAppointLIst (val) {
      this.teacherPagemsg.page = val;
      this.teacherBespokeData.page = val;
      this.teacherBespokeListData();
    },
    // 初始化 bus 事件
    initBusEvent () {
      this.$bus.$on("selectProfileIndex", data => {
        this.activeTab = data;
      });
      // 头部绑定成功更新
      this.$bus.$on("studyCourse", data => {
        this.handleMyCourseChange(1, 1);
        this.handleMyProjectChange(1, 1);
        this.activeTab = data;
        persistStore.set("gid", data);
      });
      // 展示订单详情
      this.$bus.$on("goOrderDetail", data => {
        this.curriculumPayApply(data);
      });
      // 我的订单 事件搜索
      this.$bus.$on("searchDatas", (data, type, num) => {
        // 按照事件搜索订单 时间
        if (type === 1) {
          this.orderForm.startTime = data[0];
          this.orderForm.endTime = data[1];
          this.orderForm.orderSn = data[2];
          this.handleMyOrderChange(Number(num), 1, false);
        } else {
          //兑换码订单号搜索
          this.orderForm.orderSn = data;
          this.$bus.$emit("activeOrder");
          this.handleMyOrderChange(Number(num), 1, false);
        }
      });
      // 发票管理 开票历史 由于层级较深
      this.$bus.$on("historyOrderDataChange", data => {
        this.historyOrderDataChange(1);
      });
      this.$bus.$on("reUserInfo", data => {
        this.getUserInfo();
      });
    },

    // 考试认证列表
    examList () {
      this.examineLoading = true;
      examine.examList(this.examineListForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status == 0) {
          this.examineListData = response.data.examList;
          this.examinePagemsg = response.data.pageCount;
          this.examineLoading = false;
        }
      });
    },
    // 考试认证列表-分页
    examineListChange (val) {
      this.examineLoading = true;
      this.examinePagemsg.page = val;
      this.examineListForm.page = val;
      this.examList();
    },
    // 我的学院列表
    collegeList () {
      this.collegeLoading = true;
      college.collegeList(this.collegeListForm).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        } else if (response.status == 0) {
          this.collegeListData = response.data.userVipGoodsList;
          this.collegePagemsg = response.data.pageCount;
          this.collegeLoading = false;
        }
      });
    },
    // 考试认证列表-分页
    collegeListChange (val) {
      this.collegeLoading = true;
      this.collegePagemsg.page = val;
      this.collegeListForm.page = val;
      this.collegeList();
    },
    getUserInfo () {
      banner.getUserInfo().then(res => {
        if (res.status === 0) {
          this.userInfo = res.data.userInfo;
          if (this.userInfo.head_img && this.userInfo.head_img != "") {
            this.userInfo.head_img = this.userInfo.head_img;
          }
        }
      });
    }
  },
  mounted () {
    setTitle("个人中心-1911学堂");
    if (persistStore.get("token")) {
      this.getUserInfo();
      if (this.gid) {
        this.activeTab = this.gid;
      } else {
        this.activeTab = "tab-first";
      }
      this.initBusEvent();
      if (persistStore.get("isSingleLogin")) {
        this.selectItem.name = this.activeTab;
        this.handleClick(this.selectItem);
        // 以下默认获取全部数据接口变成上面只获取选中项的接口
        //   this.handleInitMyCourseData() //我的课程
        //   this.handleInitMyProjectData() //我的项目
        //   // this.collectProjectPageChange(1) //我的项目-收藏
        //   // this.collectionPageChange(1) //我的课程-收藏
        //   this.handleInitMyOrderData(true) //我的订单
        //   this.getCodeList() //兑换码管理-兑换码列表
        //   // this.getRecordList()  //兑换码管理-兑换详情
        //   // this.getUsedInvitationCodeList()  //兑换码管理-我的兑换
        //   // this.historyOrderDataChange(1)  //我的发票 开票历史
        //   this.unTicketDataChange(1) //我的发票 按订单开发票
        //   this.customerProjectList() //自定义项目
        //   this.examList() //考试认证
        //   this.collegeList() //我的学院
      }
    } else {
      let data = {
        type: false,
        res: {
          msg: "您还没有登录，请先登录吧！"
        }
      };
      this.$bus.$emit("notLogIn", data);
    }
    this.$bus.$on("handleHeadClick", data => {
      this.handleClick(data);
    });
    this.$bus.$on("changeAppointLIst", data => {
      this.changeAppointLIst(data);
    });
    this.$bus.$on('getTeacherData',()=>{
      this.getTeacherData({statusType: 1,type: 2});
    })

    this.infoNum = persistStore.get("infoNum");
    this.$bus.$on("profileInfoNum", data => {
      this.infoNum = persistStore.get("infoNum");
    });
  },
  beforeDestroy () {
    this.$bus.$off("goOrderDetail");
    this.$bus.$off("searchDatas");
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/profile/home";
</style>
