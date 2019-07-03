<template>
  <div class="curriculumDetail">
    <div class="teacherInfo clearfix">
      <div class="main clearfix" v-loading="loadMsg">
        <div class="fl">
          <img :src="teacherInfo.head_img" alt="">
        </div>
        <div class="fr">
          <h4>{{teacherInfo.teacher_name}}
            <!-- <i class="el-icon-location-outline"></i><span>北京</span> -->
          </h4>
          <h5>
            <span>{{teacherInfo.consultation_num}}</span>人约聊过
          </h5>
          <h6>{{teacherInfo.graduate}}</h6>
          <p>{{teacherInfo.content}}</p>
        </div>
      </div>
    </div>
    <div class="main clearfix">
      <div class="bigBlock fl" v-if="courseList.length>0">
        <!-- 课程详情card -->
        <div class="main-header" v-loading="loadMsg">
          <v-card :courseList="courseList" :config="config" :linkdata="linkseven" :privileMsg="privileMsg" :cardetails="courseList"></v-card>
        </div>
        <!-- 简介、目录、评论和下载 -->
        <div class="content">
          <v-coursecatelog :activeName="activeName" :courseList="courseList" :loadMsg="loadMsg" :catalogs="catalogs" :privileMsg="privileMsg" :config="config" :changeImg="changeImg" :totalEvaluateInfo="totalEvaluateInfo" :commentator="commentator" :loadEvaluate="loadEvaluate" :pageCount="pageCount" :sumUserStart="sumUserStart" :pagemsg="pagemsg" @pagechange="handleCurrentChange" @selectActiveTab="selectActiveTab"></v-coursecatelog>
        </div>
        <!-- 课程评价-->
        <v-evaluatecase v-if="isEvaluate&&courseList.is_study != 0 && courseList.is_evaluate==0&&privileMsg" :isClose="isClose" :courseList="courseList" @changeList="cbList" :config="config"></v-evaluatecase>
      </div>
      <v-nodata class="nodata" :pageType="pageType" v-else></v-nodata>
      <div class="smallBlock fr" v-if="teacherInfo">
        <!-- 擅长方向 -->
        <div class="good" v-loading="loadMsg" v-if="teacherInfo.questionLeft.length>0">
          <h4 class="title">擅长方向</h4>
          <p v-for="(item,index) in teacherInfo.questionLeft" :key="index">{{item.title}}</p>
        </div>
        <!-- 约聊方式 -->
        <div class="chatType" v-loading="loadMsg">
          <h4 class="title">选择约聊方式</h4>
          <div class="clearfix">
            <div class="fl" @click="showCode">
              <h4>线上问答</h4>
              <h5>1对1在线交流</h5>
            </div>
            <div :class="isOrder?'fr':'fr order'" @click="goMeet">
              <h4>线下约见</h4>
              <h5>1对1面谈</h5>
              <h6>￥{{teacherInfo.price}}</h6>
            </div>
          </div>
        </div>
        <!-- 在教的课程 -->
        <div class="course" v-loading="loadMsg">
          <h4 class="title">在教的课程</h4>
          <div class="courseOne" v-for="(item,index) in teacherInfo.curriculumList" :key="index">
            <img :src="item.picture" alt="">
            <h4>{{item.title}}</h4>
            <h5>{{item.deputy_title}}</h5>
            <div class="icon">
              <span>{{item.study_time}}学时</span>
              <span class="conter"><img :src="numSrc" alt="">{{item.study_number}}</span>
              <el-rate disabled v-model="item.score" class="rate fr"></el-rate>
            </div>
            <p class="price" v-if="item.is_free=='2'">免费</p>
            <p class="price" v-else>{{item.present_price}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="miniProgramCode" v-if="showMiniProgramCode">
      <div class="content">
        <i class="el-icon-close" @click="closeMini"></i>
        <img :src="teacherInfo.miniprogram_picture" alt="小程序二维码">
        <p>立即扫码，开启一对一线上交流</p>
      </div>
    </div>
    <v-pay @closePay="closePayed" :config="config" @refreshData="refreshData"></v-pay>
    <v-backtop :data="showCheckedCourse"></v-backtop>
  </div>
</template>

<script>
import CustomCard from "@/pages/curriculum/components/Card.vue";
import { coursedetail } from "~/lib/v1_sdk/index";
import { mapState, mapGetters, mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { uniqueArray, matchSplits, setTitle, Trim } from "@/lib/util/helper";
import BackToTop from "@/components/common/BackToTop.vue";
import Pay from "@/components/common/Pay.vue";
import EvaluateContent from "@/components/common/EvaluateContent.vue";
import EvaluateCase from "@/components/common/EvaluateCase.vue";
import Collection from "@/components/common/Collection.vue";
import CourseCatalog from "@/pages/curriculum/coursedetail/CourseCatalog.vue";
import NoData from "@/components/common/NoData.vue";
export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  components: {
    "v-nodata": NoData,
    "v-pay": Pay,
    "v-backtop": BackToTop,
    "v-card": CustomCard,
    "v-evaluatecase": EvaluateCase,
    "v-coursecatelog": CourseCatalog
  },
  data () {
    return {
      pageType: {
        text: "找不到任何课程信息！",
        imgUrl: "https://static-image.1911edu.com/noMsg.png"
      },
      showMiniProgramCode: false,
      numSrc: require("@/assets/images/home_num.png"),
      isOrder: false,
      vipPopShow: false,
      isShowAlert: false,
      evaluateLoading: true,
      isClose: false, //评论组件是否有关闭按钮
      showCheckedCourse: false,
      activeName: "second",
      textarea: "",
      rateModel: 5,
      loadEvaluate: false,
      isEvaluate: false,
      linkseven: "player",
      catalogs: [],
      commentator: [],
      pageCount: null,
      config: {
        card_type: "course"
      },
      courseList: {},
      idForm: {
        kid: 0,
        tid: 0
      },
      evaluateListForm: {
        pages: 1,
        limits: 3,
        ids: "",
        types: 1,
        isRecommend: ""
      },
      privileMsg: true,
      collectMsg: {
        types: 1,
        isCollect: 0
      },
      addCollectionForm: {
        curriculumId: null,
        types: 1
      },
      getdefaultForm: {
        curriculumid: ""
      },
      loadMsg: true,
      pagemsg: {
        page: 1,
        pagesize: 3,
        total: 5
      },
      btnData: [],
      btnDatas: [],
      borderIndex: 7,
      addEvaluateForm: {
        ids: "",
        evaluatecontent: "",
        scores: "",
        types: 1,
        tag: []
      },
      teacherInfo: '',
      curriculumList: [],
      evaluate: {
        eltnum: null
      },
      totalEvaluateInfo: {
        evaluatePercent: null,
        totalEvaluate: null,
        totalScore: null
      },

      defaultCatalogId: "",
      tagGroup: "",
      reTagBtn: [],
      sumUserStart: 0,
      changeImg: {
        img: "",
        id: ""
      },
    };
  },
  methods: {
    ...mapActions("auth", ["setIsCollection"]),
    goMeet () {
      if (isOrder) {
        this.$router.push("");
      }
    },
    showCode () {
      this.showMiniProgramCode = true
    },
    closeMini () {
      this.showMiniProgramCode = false
    },
    selectActiveTab (tab) {
      if (tab == "third") {
        this.isEvaluate = true
      } else {
        this.isEvaluate = false
      }
    },
    changePlayImg (img, id) {
      this.changeImg.img = img;
      this.changeImg.id = id;
    },
    // 标签 - 点击评价改变星级
    handleChangeRate (val) {
      this.reTagBtn = [];
      this.tagGroup[val].map((item, i) => {
        let obj = new Object();
        obj.value = item;
        obj.index = i;
        obj.isCheck = false;
        this.reTagBtn.push(obj);
      });
      this.btnData = this.reTagBtn;
      this.addEvaluateForm.tag = [];
    },
    // 标签 - 点击获取标签内容
    getBtnContent (val, index) {
      if (val.isCheck === true) {
        this.$set(val, "isCheck", false);
        for (var i = 0; i < this.addEvaluateForm.tag.length; i++) {
          if (this.addEvaluateForm.tag[i] === val.value) {
            this.addEvaluateForm.tag.splice(i, 1);
          }
        }
      } else {
        this.$set(val, "isCheck", true);
        this.addEvaluateForm.tag.push(val.value);
        this.addEvaluateForm.tag = this.uniqueArray(this.addEvaluateForm.tag);
      }
    },
    // 评论-提交评论接口
    addEvaluate () {
      // this.addEvaluateForm.ids = persistStore.get('curriculumId')
      this.addEvaluateForm.ids = matchSplit("kid");

      if (this.textarea.length < 100) {
        this.addEvaluateForm.evaluatecontent = this.textarea;
      } else {
        this.$message({
          showClose: true,
          type: "warning",
          message: "请输入少于100个字符！"
        });
        return false;
      }
      this.addEvaluateForm.scores = this.rateModel;
      this.addEvaluateForm.tag = this.addEvaluateForm.tag
        .toString()
        .replace(/,/g, "#");
      if (this.courseList.is_study) {
        coursedetail.addEvaluate(this.addEvaluateForm).then(response => {
          if (response.status === 100100) {
            this.$message({
              showClose: true,
              type: "warning",
              message: response.msg
            });
          } else if (response.status === 0) {
            this.addEvaluateForm.tag = [];
            for (let item of this.btnData) {
              this.$set(item, "isCheck", false);
            }
            this.$message({
              showClose: true,
              type: "success",
              message: response.msg
            });
            this.curriculumTeacherInfo();
          }
        });
        // this.addEvaluateForm.tag = []
      } else {
        this.$message({
          showClose: true,
          type: "warning",
          message: "您还没有观看过此课程，请先去观看吧！"
        });
      }
    },
    // 评论-评论查看更多-分页
    handleCurrentChange (val) {
      this.loadMsg = true;
      this.pagemsg.page = val;
      this.evaluateListForm.pages = val;
      this.evaluateListForm.limits = 3;
      this.evaluateListForm.ids = this.idForm.kid;
      this.evaluateLoading = true;
      coursedetail.getEvaluateLists(this.evaluateListForm).then(response => {
        if (response.status === 0) {
          this.loadMsg = false;
          this.evaluateLoading = false;
          this.pagemsg.total = response.data.pageCount;
          this.commentator = response.data.evaluateList;
          window.scrollTo(0, 436);
        }
      });
    },
    // 评论-获取评论列表
    getEvaluateList () {
      this.loadEvaluate = true;
      this.evaluateListForm.ids = this.idForm.kid
      coursedetail.getEvaluateLists(this.evaluateListForm).then(response => {
        if (response.status === 0) {
          this.loadMsg = false;
          this.pagemsg.total = response.data.pageCount;
          this.pageCount = response.data.pageCount;
          this.commentator = response.data.evaluateList;

          this.totalEvaluateInfo = response.data.totalEvaluateInfo;
          let totalEvaluateInfo = response.data.totalEvaluateInfo;
          this.sumUserStart = Number(totalEvaluateInfo.totalScore);
          this.loadEvaluate = false;
        }
      });
    },
    // 课程-获取课程列表
    getCourseList () {
      this.idForm.kid = this.idForm.kid;
      coursedetail.getCourseList(this.idForm).then(response => {
        if (response.status === 0) {
          this.catalogs = response.data.curriculumCatalogList;
          for (let item of this.catalogs) {
            for (let i of item.childList) {
              i.second = i.video_time;
              i.video_time = Math.round(i.video_time / 60);
            }
          }
        }
      });
    },
    // 再次回去课程详情数据和课程目录数据
    refreshData () {
      this.curriculumTeacherInfo();
    },
    // 获取--课程-教师--详情
    curriculumTeacherInfo () {
      coursedetail.curriculumTeacherInfo(this.idForm)
        .then(res => {
          if (res.status == 0) {
            this.loadMsg = false;
            this.isOrder = res.data.teacherInfo.bespoke_offline_time
            this.idForm.kid = res.data.curriculumDetail.id;
            // 教师详情
            this.teacherInfo = res.data.teacherInfo
            //   是否购买
            this.privileMsg = res.data.curriculumPrivilege;
            // 课程详情
            this.courseList = res.data.curriculumDetail;
            //   是否收藏
            this.collectMsg.isCollect = res.data.curriculumDetail.is_collection;
            this.initAll()
          }
        });
    },
    // 初始化默认data
    initData () {
      this.idForm.kid = matchSplits("kid");
      this.idForm.tid = matchSplits("tid");
      this.activeName = "second";
      this.curriculumTeacherInfo()
    },
    //评论之后的回调
    cbList () {
      this.curriculumTeacherInfo();
    },
    // 支付弹框关闭的回调
    closePayed () {
      this.$bus.$emit("closePayed");
    },
    //拉取服务器数据 初始化所有方法
    initAll () {
      this.getEvaluateList();
      this.getCourseList();
    },
    //关闭购买弹窗
    changeVipShow (val) {
      this.vipPopShow = false;
    }
  },
  mounted () {
    this.initData();
    this.initAll();
    this.$bus.$on("reCourseData", data => {
      this.initAll();
    });
  },
  watch: {
    //在当前页面进行登录操作更新状态
    isAuthenticated (val) {
      this.curriculumTeacherInfo();
    }
  },
  updated () {
    setTitle("师资详情-1911学堂");
  },
  beforeRouteLeave (to, from, next) {
    // this.$bus.$emit('headerFooterShow')
    next(vm => { });
  }
};
</script>


