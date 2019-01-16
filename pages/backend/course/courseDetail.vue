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
          <v-card
            :courseList="courseList"
            :config="config"
            @refreshData="refreshData"
            @changePlayImg="changePlayImg"
          ></v-card>
        </div>
      </div>
      <div class="bottomCard">
        <!-- 左侧的课程目录和介绍和评论 -->
        <div class="content fl">
          <v-coursecatelog
            :activeName="activeName"
            :courseList="courseList"
            :loadMsg="loadMsg"
            :catalogs="catalogs"
            :config="config"
            :changeImg="changeImg"
            :totalEvaluateInfo="totalEvaluateInfo"
            :commentator="commentator"
            :loadEvaluate="loadEvaluate"
            :pageCount="pageCount"
            :sumUserStart="sumUserStart"
            :pagemsg="pagemsg"
            @pagechange="handleCurrentChange"
          ></v-coursecatelog>
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
import { coursedetail } from "~/lib/v1_sdk/index";
import { mapState, mapGetters, mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { uniqueArray, matchSplits, setTitle, Trim } from "@/lib/util/helper";
import CustomCard from "@/pages/backend/course/components/Card.vue";
import TeacherIntro from "@/pages/backend/course/components/teacherIntro.vue";
import CourseCatalog from "@/pages/backend/course/components/CourseCatalog.vue";

export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
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
      vipGoodsDetail: ""
    };
  },
  methods: {
    ...mapActions("auth", ["setIsCollection"]),
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
            this.getCourseDetail();
            this.getEvaluateList();
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
      this.evaluateListForm.ids = matchSplits("kid");
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
      this.evaluateListForm.ids = matchSplits("kid");
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
    // 课程-获取课程详情
    getCourseDetail () {
      this.loadTeacher = true;
      this.kidForm.ids = matchSplits("kid");

      coursedetail.getCourseDetail(this.kidForm).then(response => {
        if (response.status === 0) {
          this.loadMsg = false;
          this.courseList = response.data.curriculumDetail;

          this.content = response.data.curriculumPrivilege;
          this.loadTeacher = false;

          this.vipGoodsDetail = response.data.curriculumDetail.vipGoodsDetail;
          this.BreadCrumb.category =
            response.data.curriculumDetail.vipGoodsDetail.title;
          this.BreadCrumb.categoryId =
            response.data.curriculumDetail.vipGoodsDetail.category_id;
          this.BreadCrumb.vipID = this.vipGoodsDetail.id;
        }
      });
    },
    // 课程-获取课程列表
    getCourseList () {
      this.kidForm.ids = matchSplits("kid");
      coursedetail.getCourseList(this.kidForm).then(response => {
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
      this.getCourseDetail();
      this.getCourseList();
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
    },
    //关闭购买弹窗
    changeVipShow (val) {
      this.vipPopShow = false;
    }
  },
  mounted () {
    this.initAll();
    this.$bus.$on("reCourseData", data => {
      this.initAll();
    });
  },
  watch: {
    //在当前页面进行登录操作更新状态
    isAuthenticated (val) {
      this.getCourseDetail();
    }
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

