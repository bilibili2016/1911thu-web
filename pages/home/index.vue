<template>
  <div>
    <el-main class="home">
      <!-- 头部导航 -->
      <v-carousel class="topCarousel" :items="bannerData" v-loading="bannerLoading" :config="configCarousel"></v-carousel>
      <!-- 数字信息 -->
      <v-num></v-num>
      <!-- 导师列表 -->
      <v-teacher :title="teacherTitle" :link="teacherLink" :teacherData="teacherData" class="bgf8f8fd"></v-teacher>
      <!-- 干部网络学院 -->
      <!-- <v-course :config="configOne" :data="cadreCourseList" :title="cadreCollegeTitle" :link="cadreCollegeMore" class="index-course bgfff" v-if="cadreCourseList.length>0"></v-course> -->
      <!-- 在线商学院 -->
      <!-- <v-course :config="configOne" :data="commercialCourseList" :title="commercialCollegeTitle" :link="commercialCollegeMore" class="index-course bgf8f8fd" v-if="commercialCourseList.length>0"></v-course> -->
      <!-- 最新课程 -->
      <!-- <v-course :config="configOne" :data="newData" :title="newcoursetitle" :link="linknewcourse" class="index-course bgfff"></v-course> -->
      <!-- 免费专区 -->
      <!-- <v-course :config="configZero" :data="freeData" :title="freecoursetitle" :link="linkfreecourse" class="index-free bgfff" v-if="freeData.length>0"></v-course> -->
      <!-- 精品好课 -->
      <v-course :config="classicConfig" :data="classicData" :title="classiccoursetitle" :link="linkclassiccourse" class="index-goodcourse bgfff"></v-course>
      <!-- 互动式项目 -->
      <!-- <v-course v-if="projectData.length>0" :config="projectConfig" v-loading="projectLoading" :data="projectData" :title="newprojecttitle" :link="linknewproject" class="index-project bgf8f8fd"></v-course> -->
      <!-- <v-free :config="configZero" :freeData="freeData" :title="freecoursetitle" :link="linkfreecourse"></v-free> -->
      <!-- 名师智库 -->
      <!-- <v-famous :teachers="teachers" :title="famoustitle" :link="linkfamouscourse"></v-famous> -->
      <!-- 名师大咖秀 -->
      <!-- <v-famous :teachers="teachers" :titleFore="titleFore"></v-famous> -->
      <!-- 学堂资讯 -->
      <v-info v-if="newsListData.length" v-loading="infoLoading" :newsListData="newsListData" :outNewData="outNewData" :infoTwo="infoTwo" :infoOne="infoOne" :title="infotitle" :link="linkinfo" class="index-new bgf8f8fd"></v-info>
      <!-- 核心优势 -->
      <!-- <v-core></v-core> -->
      <!-- 专家组组长 -->
      <!-- <v-leader v-if="groupLeader.length>0" :groupLeader="groupLeader" :teacherListLoading="teacherListLoading" :title="groupTitle" :link="groupLink"></v-leader> -->

      <!-- 媒体报道 -->
      <v-outnews v-if="outNewsListData.length" v-loading="outNewsLoading" :outNewsListData="outNewsListData" :title="outNewsTitle" :link="outNewsLink" class="index-outNews"></v-outnews>
      <!-- 所获荣誉 -->
      <v-honor></v-honor>
      <v-backtotop :data="showCheckedCourse"></v-backtotop>
    </el-main>
  </div>
</template>

<script>
import Carousel from "@/components/common/Carousel.vue";
import Info from "@/pages/home/news/info.vue";
import outNews from "@/pages/home/news/outNews.vue";
// import Core from "@/pages/home/core/coreAdvantage.vue";
import Core from "@/pages/home/core/index.vue";
import Leader from "@/pages/home/teacher/components/GroupLeader.vue";

import BackToTop from "@/components/common/BackToTop.vue";
import HomeCourse from "@/pages/home/components/homecourse.vue";
import Num from "@/pages/home/components/number.vue";
import Teacher from "@/pages/home/teacher/homeList.vue";
import Honor from "@/pages/home/honor/index.vue";

import { mapState, mapActions } from "vuex";
import { home, news } from "~/lib/v1_sdk/index";
export default {
  components: {
    "v-carousel": Carousel,
    // 'v-famous': Famous,
    "v-info": Info,
    "v-backtotop": BackToTop,
    "v-course": HomeCourse,
    "v-outnews": outNews,
    "v-core": Core,
    "v-leader": Leader,
    "v-num": Num,
    "v-teacher": Teacher,
    "v-honor": Honor
  },
  data () {
    return {
      teacherListLoading: false,
      outNewsLoading: false,
      bannerLoading: false,
      infoLoading: false,
      projectLoading: false,
      windowWidth: "",
      cadreCollegeTitle: "在线干部学院",
      commercialCollegeTitle: "在线商学院",
      cadreCollegeMore: "/course/category?cid=1&cp=0&pids=0&xid=0&vid=2",
      commercialCollegeMore: "/course/category?cid=17&cp=0&pids=0&xid=0&vid=3",
      linknewproject: "/course/list/0",
      newprojecttitle: "混合式项目",
      linknewcourse: "/course/list/1",
      newcoursetitle: "最新课程",
      linkclassiccourse: "/course/list/2",
      classiccoursetitle: "精品好课",
      linkfreecourse: "/course/list/3",
      freecoursetitle: "限时免费",
      linkfamouscourse: "/teacher/list",
      famoustitle: "名师智库",
      infotitle: "学堂资讯",
      groupTitle: '学堂专家',
      groupLink: '/home/teacher/teacherIndex',
      linkinfo: "/home/news/list",
      outNewsTitle: "媒体报道",
      outNewsLink: "/home/news/outNewsList",
      teacherTitle: "百名导师等你来约",
      teacherLink: '/home/teacher/list',
      freeData: [],
      newData: [],
      classicData: [],
      projectData: [],
      cadreCourseList: [],
      commercialCourseList: [],
      groupLeader: [],
      showCheckedCourse: false,
      configCarousel: {
        carousel: "home"
      },
      configZero: {
        card_type: "profile",
        new: "false",
        free: "true",
        home_type: "cardone"
      },
      configOne: {
        card_type: "profile",
        new: "true",
        home_type: "cardone"
      },
      classicConfig: {
        card_type: "classic",
        home_type: "cardone"
      },
      projectConfig: {
        card_type: "project",
        home_type: "cardtwo"
      },
      infoOne: {
        card_type: "infoOne"
      },
      infoTwo: {
        card_type: "infoTwo"
      },

      partnerList: {
        list: [],
        pages: 1,
        limits: 10
      },
      teacherResource: [],
      teacherData: [],
      evaluateData: [],
      newsListData: [],
      outNewData: [],
      outNewsListData: [],
      ding: {
        card_type: "ding"
      },
      dingData: [],
      numSrc: require("@/assets/images/home_num.png"),
      value1: 4,
      imgList: [],
      bannerData: [],
      itemsData: {
        limit: null,
        types: 1
      },
      classtext: [],
      courses: [],
      notLogin: false,
      curruntForm: {
        pages: 1,
        limits: "",
        evaluateLimit: null,
        isevaluate: 1
      },
      courseForm: {
        pages: 1,
        limits: "8",
        evaluateLimit: null,
        isevaluate: 1
      },
      freeForm: {
        pages: 1,
        limits: "8"
      },
      classicForm: {
        pages: 0,
        limits: 8,
        evaluateLimit: 0,
        isEvaluate: 0
      },
      teacherForm: {
        pages: 1,
        limits: 7,
        recommend: 1
      },
      evaluateForm: {
        pages: 1,
        limits: 4,
        ids: null,
        types: null,
        isRecommend: 1
      },
      projectForm: {
        pages: 1,
        limits: 2
      },
      loginMsg: false,
      newsInfoForm: {
        page: 1,
        limits: 4
      },
      outNewsForm: {
        page: 1,
        limits: 8,
        type: 2,
        isRecommend: 1
      },
      teacherForm: {
        page: 1,
        limit: 8
      }
    };
  },
  computed: {
    ...mapState("auth", [])
  },
  created () { },
  methods: {
    ...mapActions("auth", ["signOut"]),
    getAll () {
      this.getBanner();
      //   this.getCollegeCourseList();
      //   免费课程列表
      //   this.getFreeCourseList();

      this.getClassicCourseList()
      // this.getEvaluateList(),
      this.getNewsInfoList();
      // this.getPartnerList(),
      // this.getPointList()
      //   项目列表
      //   this.getProjectList();
      this.getOutNewsList();
      // this.teacherExpertList()
      this.getTeacherData()
      // this.getNewCourseList()
      // this.$bus.$emit('getClassifyList')
    },
    // 获取banner
    getBanner () {
      this.bannerLoading = true;
      home.getBannerList(this.itemsData).then(response => {
        if (response.status === 0) {
          this.bannerLoading = false;
          this.bannerData = response.data.bannerList;

          //设置banner溢出居中显示
          this.$nextTick(() => {
            if (document.getElementsByClassName("elCarouselItem")) {
              let imgArr = document.getElementsByClassName("elCarouselItem");
              if (this.windowWidth <= 1920) {
                let marginLeft = (1920 - this.windowWidth) / 2;
                for (var i = 0; i < imgArr.length; i++) {
                  imgArr[i].style.marginLeft = -marginLeft + "px";
                }
              }
            }
          });
        }
      });
    },
    // 获取分类列表
    // getClassifyList() {
    //   home.getClassifyList(this.curruntForm).then(response => {
    //     this.classify = response.data.categoryList
    //   })
    // },
    //获取项目列表
    getProjectList () {
      this.projectLoading = true;
      home.getProjectList(this.projectForm).then(response => {
        if (response.status === 0) {
          this.projectLoading = false;
          this.projectData = response.data.curriculumProjectList;
        }
      });
    },
    // 获取免费课程列表
    getFreeCourseList () {
      home.getFreeCourseList(this.freeForm).then(response => {
        if (response.status === 0) {
          this.freeData = response.data.curriculumList;
        }
      });
    },
    // 获取新上好课列表
    getNewCourseList () {
      home.getNewCourseList(this.courseForm).then(response => {
        if (response.status === 0) {
          this.newData = response.data.curriculumList;
        }
      });
    },
    // 获取精品好课列表
    getClassicCourseList () {
      home.getClassicCourseList(this.classicForm).then(response => {
        this.classicData = response.data.curriculumList;
      });
    },
    // 获取学院课程列表
    getCollegeCourseList () {
      home.getCollegeCourseList().then(response => {
        if (response.status === 0) {
          // 干部学院
          this.cadreCourseList = response.data.cadreCurriculumList;
          // 商学院
          this.commercialCourseList = response.data.commercialCurriculumList;
        }
      });
    },
    // 学堂资讯
    getNewsInfoList () {
      this.infoLoading = true;
      news.getNewInfoList(this.newsInfoForm).then(response => {
        if (response.status === 0) {
          this.infoLoading = false;
          this.newsListData = response.data.newsList;
          this.outNewData = response.data.newsList[0];
        }
      });
    },
    //获取媒体报道
    getOutNewsList () {
      this.outNewsLoading = true;
      news.getNewInfoList(this.outNewsForm).then(response => {
        if (response.status === 0) {
          this.outNewsLoading = false;
          this.outNewsListData = response.data.newsList;
        }
      });
    },
    teacherExpertList () {
      this.teacherListLoading = true;
      home.teacherExpertList({ pages: 1, limits: 6 }).then(response => {
        if (response.status === 0) {
          this.teacherListLoading = false;
          this.groupLeader = response.data.expertList;
        }
      });
    },
    // 获取合作伙伴
    getPartnerList () {
      home.getPartnerList(this.partnerList).then(response => {
        this.partnerList.list = response.data.collaborationEnterpriseList;
      });
    },
    // 获取定制消息
    getPointList () {
      home.getPointList().then(response => {
        this.dingData = response.data.pointList;
      });
    },
    //导师列表
    getTeacherData () {
      home.getTeacherData(this.teacherForm).then(res => {
        this.teacherData = res.data.teacherList;
      });
    }
  },
  mounted () {
    this.windowWidth = document.documentElement.clientWidth;
    this.$bus.$on("loginMsg", data => {
      if (data === true) {
        this.loginMsg = true;
      }
    });
    this.getAll();

    this.$bus.$on("refetchData", data => {
      this.getAll();
    });

    // this.$bus.$emit('bannerShow', false)
  },
  head () {
    return {
      meta: [
        { hid: 'keywords', name: 'keywords', content: '终身教育，人工智能，商学院，干部培训，k12，大健康，新闻传播，体育培训，互联网学校' },
        { hid: 'description', name: 'description', content: '1911学堂是一所致力于终身教育的互联网学校，由1911集团联合清华大学、北京大学等国内外知名高校的近百位资深专家发起创立的终身教育平台。包含K12学院、商学院、新闻传播学院、大健康学院、人工智能学院、教育学院、体育学院、干部学院。为中小学师生、大学生、职场精英、企业高管、政府官员提供咨询、线上线下课程等教育服务近万人次。' }
      ]
    }
  }
};
</script>
<style scoped lang="scss">
.home {
  background: url("https://static-image.1911edu.com/home-bottom.png") no-repeat;
  background-size: 100% 564px;
  background-position: center bottom;
}
</style>

