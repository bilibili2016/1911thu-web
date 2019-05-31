<template>
  <div class="container courseDetail">
    <div class="main clearfix">
      <div class="topCard">
        <!-- 面包屑 收藏分享 -->
        <div class="main-crumb">
          <!-- 面包屑组件 -->
          <div class="breadCrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
              <el-breadcrumb-item>{{BreadCrumb.category}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{BreadCrumb.text}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <!-- 顶部的card -->
        <div class="main-header" v-loading="loadMsg">
          <v-card :courseList="courseList" :config="config" @refreshData="refreshData" @changePlayImg="changePlayImg"></v-card>
        </div>
      </div>
      <div class="bottomCard">
        <!-- 左侧的课程目录和介绍和评论 -->
        <div class="content fl">
          <v-coursecatelog :activeName="activeName" :courseList="courseList" :loadMsg="loadMsg" :catalogs="catalogs" :config="config" :changeImg="changeImg" :totalEvaluateInfo="totalEvaluateInfo" :commentator="commentator" :loadEvaluate="loadEvaluate" :pageCount="pageCount" :sumUserStart="sumUserStart" :pagemsg="pagemsg" @pagechange="handleCurrentChange"></v-coursecatelog>
        </div>
        <div style="width:345px" class="fr">
          <!-- 讲师介绍 -->
          <v-teacherintro v-loading="loadTeacher" :courseList="courseList"></v-teacherintro>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { previewapi } from "~/lib/v1_sdk/index";
import { mapState, mapGetters, mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { uniqueArray, matchSplits, setTitle, Trim } from "@/lib/util/helper";
import CustomCard from "@/pages/backend/course/components/Card.vue";
import TeacherIntro from "@/pages/backend/course/components/teacherIntro.vue";
import CourseCatalog from "@/pages/backend/course/components/CourseCatalog.vue";

export default {
  components: {
    "v-card": CustomCard,
    "v-teacherintro": TeacherIntro,
    "v-coursecatelog": CourseCatalog
  },
  data () {
    return {
      vipPopShow: false,
      evaluateLoading: true,
      BreadCrumb: {
        vipID: "",
        type: "courseDetail",
        home: false, //是否显示《首页》
        category: "",
        categoryId: "",
        position: false, //是否显示《当前位置》
        text: "课程详情"
      },
      showCheckedCourse: false,
      activeName: "second",
      textarea: "",
      rateModel: 5,
      loadTeacher: false,
      loadEvaluate: false,
      catalogs: [],
      commentator: [],
      pageCount: null,
      config: {
        card_type: "course"
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
      loadMsg: true,
      pagemsg: {
        page: 1,
        pagesize: 3,
        total: 5
      },
      btnData: [],
      addEvaluateForm: {
        ids: "",
        evaluatecontent: "",
        scores: "",
        types: 1,
        tag: []
      },
      evaluate: {
        eltnum: null
      },
      totalEvaluateInfo: {
        evaluatePercent: null,
        totalEvaluate: null,
        totalScore: null
      },
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
    changePlayImg (img, id) {
      this.changeImg.img = img;
      this.changeImg.id = id;
    },
    // 评论-评论查看更多-分页
    handleCurrentChange (val) {
    },
    // 课程-获取课程详情
    getCourseDetail () {
      this.loadTeacher = true;
      this.kidForm.ids = matchSplits("kid");

      previewapi.getCourseDetail(this.kidForm).then(response => {
        if (response.status === 0) {
          this.loadMsg = false;
          this.courseList = response.data.curriculumDetail;

          this.content = response.data.curriculumPrivilege;
          this.loadTeacher = false;

          this.BreadCrumb.category =
            response.data.vipGoodsDetail.title;
          this.BreadCrumb.categoryId =
            response.data.vipGoodsDetail.category_id;
          this.BreadCrumb.vipID = response.data.vipGoodsDetail.id;

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
    // 课程-获取课程列表
    getCourseList () {
      this.kidForm.ids = matchSplits("kid");
      previewapi.getCourseList(this.kidForm).then(response => {
        if (response.status === 0) {

        }
      });
    },
    // 再次回去课程详情数据和课程目录数据
    refreshData () {
      this.getCourseDetail();
    },
    //拉取服务器数据 初始化所有方法
    initAll () {
      this.kidForm.ids = matchSplits("kid");
      this.evaluateListForm.ids = matchSplits("kid");
      this.activeName = "second";
      this.getCourseDetail();
    },
  },
  mounted () {
    this.initAll();
    this.$bus.$on("reCourseData", data => {
      this.initAll();
    });
  },
  updated () {
    setTitle("课程详情-1911学堂");
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bus.$emit('backendHeaderShow')
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$bus.$emit('backendHeaderHide')
    next()
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/components/breadCrumb.scss";
</style>

