<template>
<div>
  <el-main class="home">
     <!-- 头部导航 -->
  <v-tab :items="items" :classify ="classify" :classtext = "classtext" :courses="courses" :tabmsg="tabmsg" :activeName="activeName"  :dingData="dingData" :config = "ding"></v-tab>
    <!-- 新上好课 -->
    <v-new :config="configZero" :newData="newData" :titleOne="titleOne" :linkone="linkone"></v-new>
    <!-- 经典好课 -->
    <v-classic :config="configZ" :classicData="classicData" :titleTwo="titleTwo" :linktwo="linktwo"></v-classic>
    <!-- 名师大咖秀 -->
    <v-famous :teachers ="teachers" :titleThree = "titleThree"></v-famous>
    <!-- 用户评价 -->
    <v-evaluate :titleFour="titleFour" :carouselSrc = "carouselSrc" :evaluateData="evaluateData"></v-evaluate>
    <!-- 学堂资讯 -->
    <v-info :infoDesc = "infoDesc" :infoArticle= "infoArticle" :infoTwo="infoTwo" :infoOne="infoOne" :titleFive= "titleFive" :linkfour="linkfours"></v-info>
    <!-- 合作伙伴 -->
    <v-partner :data="partnerList"></v-partner>
    <v-backtotop></v-backtotop>
    <v-notlogin></v-notlogin>
  </el-main>
</div>
</template>

<script>
import Partner from "@/pages/home/pages/partner.vue";
import Info from "@/pages/home/pages/info.vue";
import Evaluate from "@/pages/home/pages/evaluate.vue";
import Famous from "@/pages/home/pages/famous.vue";
import Classic from "@/pages/home/pages/classic.vue";
import New from "@/pages/home/pages/new.vue";
import Tab from "@/pages/home/pages/tab.vue";
import BackToTop from "@/components/common/BackToTop.vue";
import NotLogin from "@/components/common/NotLogin.vue";
  import {
    other,
    home
  } from "~/lib/v1_sdk/index";
export default {
  components: {
    "v-partner": Partner,
    "v-info": Info,
    "v-evaluate": Evaluate,
    "v-famous": Famous,
    "v-classic": Classic,
    "v-new": New,
    "v-tab": Tab,
    'v-backtotop': BackToTop,
    'v-notlogin': NotLogin
  },
  data() {
    return {
      linkone:'/course/pages/newlesson',
      linktwo: '/course/pages/classify',
      linkfours: '/news/list',
      tabmsg: false,
      newData: [],
      classicData: [],
       configZero: {
          card_type: "profile",
          card: 'home',
          new: 'true'
        },
        configZ: {
          card_type: "profile",
          card: 'home',
          new: 'false'
        },
      infoOne: {
        card_type: "infoOne"
      },
      infoTwo: {
        card_type: "infoTwo"
      },
      titleOne: "新上好课",
      titleTwo: "经典课程",
      titleThree: "名师大咖秀",
      titleFour: "用户评价",
      titleFive: "学堂资讯",
      partnerList: [
        { src: require("@/assets/images/ptn1.png") },
        { src: require("@/assets/images/ptn2.png") },
        { src: require("@/assets/images/ptn3.png") },
        { src: require("@/assets/images/ptn4.png") },
        { src: require("@/assets/images/ptn5.png") },
        { src: require("@/assets/images/ptn6.png") },
        { src: require("@/assets/images/ptn7.png") },
        { src: require("@/assets/images/ptn8.png") },
        { src: require("@/assets/images/ptn9.png") },
        { src: require("~/assets/images/ptn10.png") }
      ],
      teachers: [],
      evaluateData: [],
      infoArticle: [],
      infoDesc: [],
      ding: {
        card_type: "ding"
      },
      dingData: [
        {
          src: require("@/assets/images/pro1.png"),
          title: "面授、线下活动",
          content: "中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...",
          link: 'activity/faceteach'
        },
        {
          src: require("@/assets/images/pro2.png"),
          title: "企业课程定制",
          content:
            "中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...",
            link: 'activity/enterpriseCustom'
        },
        {
          src: require("@/assets/images/pro3.png"),
          title: "学位项目",
          content:
            "中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...",
            link: 'activity/degree'
        }
      ],
      numSrc: require("@/assets/images/home_num.png"),
      value1: 4,
      avator: require("@/assets/images/home_avator.png"),
      imgList: [
        {
          url: require("@/assets/images/home_teacher01.png")
        },
        {
          url: require("@/assets/images/home_teacher02.png")
        },
        {
          url: require("@/assets/images/home_teacher01.png")
        }
      ],
      carouselSrc: require("@/assets/images/home_avator02.png"),
      items: [
        { picture: require("@/assets/images/banner_1.png") },
        { picture: require("@/assets/images/banner_2.png") },
        { picture: require("@/assets/images/banner_3.png") }
      ],
      itemsData:{
        limit:null,
        types:1
      },
      classify: [
        "干部通用",
        "党政系统学院",
        "在线商学院",
        "行业学院",
        "职场学院",
        "热点学院"
      ],
      classtext: [ {
            name: "公共管理/履职能力",
            id: 9
          },
          {
            name: "时政解读",
            id: 10
          },
          {
            name: "法律法规",
            id: 11
          },
          {
            name: "政府绩效管理",
            id: 12
          },
          {
            name: "经济治理与城市规划",
            id: 13
          },
          {
            name: "城市管理",
            id: 14
          },
          {
            name: "新闻宣传国际形式及安全治理",
            id: 15
          },
          {
            name: "创新驱动发展",
            id: 16
          },
          {
            name: "一带一路与国际合作",
            id: 17
          },
          {
            name: "乡村振兴",
            id: 18
          },
          {
            name: "人文素养",
            id: 19
          },
          {
            name: "社会治理",
            id: 20
          }],
      activeName: "00",
      courses: [
        {
          src: require("@/assets/images/course1.png"),
          title: "高效团队与卓越执行力 高效团队",
          author: "王建林 清华大学电子工程系教授"
        },
        {
          src: require("@/assets/images/course2.png"),
          title: "高效团队与卓越执行力 高效团队",
          author: "王建林 清华大学电子工程系教授"
        },
        {
          src: require("@/assets/images/course1.png"),
          title: "高效团队与卓越执行力 高效团队",
          author: "王建林 清华大学电子工程系教授"
        },
        {
          src: require("@/assets/images/course2.png"),
          title: "高效团队与卓越执行力 高效团队",
          author: "王建林 清华大学电子工程系教授"
        }
      ],
      notLogin:false,
      curruntForm: {
        pages: 1,
        limits: 4,
        evaluateLimit: null
      },
      classicForm: {
        pages: 0,
        limits: 4,
        categoryId: null,
        sortBy: null
      },
      teacherForm: {
        pages: 1,
        limits: 3
      },
      evaluateForm: {
        pages: null,
        limits: null,
        ids: null,
        types: null,
        isRecommend: 1
      },
      newsInfoForm: {
        page: 1,
        limits: 4
      }
    };
  },
  mounted () {
    document.getElementsByClassName("headerBox")[0].style.display="inline"
    document.getElementsByClassName("footerBox")[0].style.display="inline"
    this.getBanner()
    this.getClassifyList()
    this.getNewCourseList()
    this.getClassicCourseList()
    this.getTeacherList()
    this.getEvaluateList()
    this.getNewInfoList()
  },
  methods: {
    // 获取banner
    getBanner() {
      return new Promise((resolve, reject) => {
           home.getBannerList(this.itemsData).then(response => {
            this.items = response.data.bannerList;
          })
        })
    },
    // 获取分类列表
    getClassifyList() {
      return new Promise((resolve, reject) => {
           home.getClassifyList(this.curruntForm).then(response => {
            this.classify = response.data.categoryList;
          })
        })
    },
    // 获取新上好课列表
    getNewCourseList() {
      return new Promise((resolve, reject) => {
           home.getNewCourseList(this.curruntForm).then(response => {
            this.newData = response.data.curriculumList
          })
        })
    },
    getClassicCourseList() {
      return new Promise((resolve, reject) => {
        home.getClassicCourseList(this.classicForm).then(response => {
          this.classicData = response.data.curriculumList
        })
      })
    },

    getTeacherList() {
      return new Promise((resolve, reject) => {
        home.getTeacherList(this.teacherForm).then(response => {
          this.teachers = response.data.teacherList
        })
      })
    },
    // 用户评价
    getEvaluateList () {
      this.evaluateForm.pages = 1
      this.evaluateForm.limits = 4
      return new Promise((resolve, reject) => {
        home.getEvaluateList(this.evaluateForm).then(response => {
          this.evaluateData = response.data.evaluateList
        })
      })
    },
    // 学堂资讯
    getNewInfoList () {
      this.newsInfoForm.pages = 1
      this.newsInfoForm.limits =4
      return new Promise((resolve, reject) => {
        home.getNewInfoList(this.newsInfoForm).then(response => {
          this.infoDesc = response.data.newsList
          this.infoArticle = response.data.newsList
        })
      })
    },
  }
};
</script>

