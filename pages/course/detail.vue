<template>
  <div class="container courseDetail">
    <div class="main clearfix">
      <div class="topCard">
        <!-- 面包屑 收藏分享 -->
        <div class="main-crumb clearfix">
          <div class="fl">
          </div>
        </div>
        <!-- 顶部的card -->
        <div class="main-header" v-loading="loadMsg">
          <v-card :courseList="courseList" :config="config" :linkdata="linkseven" :privileMsg="privileMsg" :cardetails="courseList"></v-card>
        </div>
      </div>
      <div class="bottomCard">
        <!-- 左侧的课程目录和介绍 -->
        <div class="content fl">
          <v-coursecatelog :activeName="activeName" :courseList="courseList" :loadMsg="loadMsg" :catalogs="catalogs" :privileMsg="privileMsg" :config="config" :changeImg="changeImg" :totalEvaluateInfo="totalEvaluateInfo" :commentator="commentator" :loadEvaluate="loadEvaluate" :pageCount="pageCount" :sumUserStart="sumUserStart" :pagemsg="pagemsg" @pagechange="handleCurrentChange"></v-coursecatelog>
        </div>
        <div style="width:345px" class="fr">
          <!-- 讲师介绍 -->
          <v-teacherintro v-loading="loadTeacher" :courseList="courseList" @handleLinkTeacher="handleLinkTeacher"></v-teacherintro>
        </div>
      </div>
    </div>
    <v-backtop :data="showCheckedCourse"></v-backtop>
  </div>
</template>

<script>
import CustomCard from "@/pages/course/components/CardProject.vue";
import { coursedetail } from "~/lib/v1_sdk/index";
import { mapState, mapGetters, mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { uniqueArray, message, matchSplits, open } from "@/lib/util/helper";
import BackToTop from "@/components/common/BackToTop.vue";
import TeacherIntro from "@/pages/course/coursedetail/teacherIntro.vue";
import CourseCatalog from "@/pages/course/coursedetail/CourseCatalog.vue";
export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  components: {
    "v-backtop": BackToTop,
    "v-card": CustomCard,
    "v-teacherintro": TeacherIntro,
    "v-coursecatelog": CourseCatalog
  },
  data () {
    return {
      changeImg: {
        img: "",
        id: ""
      },
      kidForm: {
        kid: ""
      },
      showCheckedCourse: false,
      activeName: "first",
      dialogVisible: false,
      loadTeacher: false,
      loadEvaluate: false,
      linkseven: "player",
      catalogs: [],
      commentator: [],
      commentators: [],
      pageCount: null,
      config: {
        card_type: "project"
      },
      courseList: {},
      kidForm: {
        ids: null
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
      loadMsg: true,
      pagemsg: {
        page: 1,
        pagesize: 3,
        total: 5
      },
      totalEvaluateInfo: {
        evaluatePercent: "",
        totalEvaluate: "",
        totalScore: ""
      },
      sumUserStart: 0,
      project: {
        projectId: ""
      }
    };
  },
  methods: {
    ...mapActions("auth", ["setIsCollection"]),
    // 跳转老师详情
    handleLinkTeacher (item) {
      this.courseUrl.tid = item;
      open(this.courseUrl);
    },
    // 评论-点击评论查看更多
    getMore () {
      this.dialogVisible = true;
      this.handleCurrentChange(1);
    },
    // 评论-评论查看更多-分页
    handleCurrentChange (val) {
      this.loadMsg = true;
      this.pagemsg.page = val;
      this.evaluateListForm.pages = val;
      this.evaluateListForm.limits = 3;
      // this.evaluateListForm.ids = persistStore.get('curriculumId')

      this.evaluateListForm.ids = matchSplits("kid");

      coursedetail.getEvaluateLists(this.evaluateListForm).then(response => {
        this.loadMsg = false;
        this.pagemsg.total = response.data.pageCount;
        this.commentator = response.data.evaluateList;
      });
    },
    // 评论-获取评论列表
    getEvaluateList () {
      this.loadEvaluate = true;
      this.evaluateListForm.ids = matchSplits("kid");
      coursedetail.getEvaluateLists(this.evaluateListForm).then(response => {
        this.loadMsg = false;
        this.pagemsg.total = response.data.pageCount;
        this.pageCount = response.data.pageCount;
        this.commentator = response.data.evaluateList;
        this.commentators = response.data.evaluateList;
        this.totalEvaluateInfo = response.data.totalEvaluateInfo;
        this.sumUserStart = Number(this.totalEvaluateInfo.totalScore);
        this.loadEvaluate = false;
      });
    },
    // 评论-关闭查看更多-评论弹框
    handleClose (done) {
      this.dialogVisible = false;
    },
    // 课程-获取课程详情
    getCourseDetail () {
      this.loadTeacher = true;
      coursedetail.getCourseDetail(this.kidForm).then(response => {
        this.loadMsg = false;
        this.courseList = response.data.curriculumDetail;
        this.privileMsg = response.data.curriculumPrivilege;
        this.content = response.data.curriculumPrivilege;
        this.loadTeacher = false;
        this.collectMsg.isCollect =
          response.data.curriculumDetail.is_collection;
      });
    },
    // 课程-获取课程列表
    getCourseList () {
      coursedetail.getCourseList(this.kidForm).then(response => {
        this.catalogs = response.data.curriculumCatalogList;
        for (let item of this.catalogs) {
          for (let i of item.childList) {
            i.second = i.video_time;
            i.video_time = Math.round(i.video_time / 60);
          }
        }
      });
    },
    // 初始化默认data
    initData () {
      this.kidForm.ids = matchSplits("kid");
      this.evaluateListForm.ids = matchSplits("kid");
      this.activeName = "second";
    },
    //拉取服务器数据 初始化所有方法
    initAll () {
      this.initData();
      this.getCourseDetail();
      this.getEvaluateList();
      this.getCourseList();
    }
  },
  mounted () {
    this.initAll();
  },
  watch: {
    //在当前页面进行登录操作更新状态
    isAuthenticated (val) {
      this.getCourseDetail();
    }
  }
};
</script>


