<template>
<div>
  <el-main class="home">
     <!-- 头部导航 -->
  <v-tab :items="items" :classify ="classify" :classtext = "classtext" :courses="courses" :tabmsg="tabmsg" :activeName="activeName"  :dingData="dingData" :config = "ding"></v-tab>
    <!-- 新上好课 -->
    <div @click="getNewCourseList">123</div>
    <v-new :config="configZero" :newData="newData" :titleOne="titleOne" :linkone="linkone"></v-new>
    <div @click="getClassicCourseList">经典</div>
    <!-- 经典好课 -->
    <v-classic :config="configZ" :classicData="classicData" :titleTwo="titleTwo" :linktwo="linktwo"></v-classic>
    <!-- 名师大咖秀 -->
    <div @click="getTeacherList">名师</div>
    <v-famous :teachers ="teachers" :titleThree = "titleThree"></v-famous>
    <!-- 用户评价 -->
    <div @click="getEvaluateList">评论</div>
    <v-evaluate :titleFour="titleFour" :carouselSrc = "carouselSrc" :evaluateData="evaluateData"></v-evaluate>
    <!-- 学堂资讯 -->
    <div @click="getNewInfoList">资讯</div>
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

      // newData: [
      //   {
      //     picture: require("@/assets/images/home_new01.png"),
      //     title: "H5和小程序直播开发",
      //     graduate: '123',
      //     teacher_name: 'name',
      //     curriculum_time: 12,
      //     study_number: 899,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 14,
      //     score: 3
      //   },
      //   {
      //     picture: require("@/assets/images/home_new02.png"),
      //     title: "H5和小程序直播开发",
      //     graduate: '123',
      //     teacher_name: 'name',
      //     curriculum_time: 34,
      //     study_number: 2312,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 12,
      //     score: 5
      //   },
      //   {
      //     picture: require("@/assets/images/home_new03.png"),
      //     title: "H5和小程序直播开发",
      //     graduate: '123',
      //     teacher_name: 'name',
      //     curriculum_time: 26,
      //     study_number: 799,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 13,
      //     score: 1
      //   },
      //   {
      //     picture: require("@/assets/images/home_new04.png"),
      //     title: "H5和小程序直播开发",
      //     graduate: '123',
      //     teacher_name: 'name',
      //     curriculum_time: 12,
      //     study_number: 4399,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 16,
      //     score: 2
      //   }
      // ],
      newData: [],
      classicData: [],
      // classicData: [
      //   {
      //     bg: require("@/assets/images/home_new01.png"),
      //     title: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 899,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 1,
      //     rate: 3
      //   },
      //   {
      //     bg: require("@/assets/images/home_new02.png"),
      //     title: "H5和小程序直播开发",
      //     cnum: 34,
      //     pnum: 2312,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 2,
      //     rate: 5
      //   },
      //   {
      //     bg: require("@/assets/images/home_new03.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 26,
      //     pnum: 799,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 3,
      //     rate: 1
      //   },
      //   {
      //     bg: require("@/assets/images/home_new04.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 4399,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 4,
      //     rate: 2
      //   },
      //   {
      //     bg: require("@/assets/images/home_new01.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 899,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 5,
      //     rate: 3
      //   },
      //   {
      //     bg: require("@/assets/images/home_new02.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 34,
      //     pnum: 2312,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 6,
      //     rate: 5
      //   },
      //   {
      //     bg: require("@/assets/images/home_new03.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 26,
      //     pnum: 799,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 7,
      //     rate: 1
      //   },
      //   {
      //     bg: require("@/assets/images/home_new04.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 4399,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 8,
      //     rate: 2
      //   }
      // ],
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
      // teachers: [
      //   {
      //     head_img: require("@/assets/images/teacher1.png"),
      //     teacher_name: "张邵阳",
      //     content:
      //       "源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。"
      //   },
      //   {
      //     head_img: require("@/assets/images/teacher2.png"),
      //     teacher_name: "张邵阳",
      //     content:
      //       "源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。"
      //   },
      //   {
      //     head_img: require("@/assets/images/teacher3.png"),
      //     teacher_name: "张邵阳",
      //     content:
      //       "源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。"
      //   }
      // ],
      teachers: [],
      // evaluateData: [{
      //   "nick_name": '王笑笑',
      //   "position": '北京中航科技有限公司 CEO',
      //   "evaluate_content": '互联网是一个快速迭代的行业，技术知识和产品创新瞬息万变，产品经理更要紧跟时代潮流。在开课吧学习后，我拥有了领先多数同龄人的技能，也改变了自己的生活和对待生活的态度。'
      // },{
      //   "nick_name": '王笑笑',
      //   "position": '北京中航科技有限公司 CEO',
      //   "evaluate_content": '互联网是一个快速迭代的行业，技术知识和产品创新瞬息万变，产品经理更要紧跟时代潮流。在开课吧学习后，我拥有了领先多数同龄人的技能，也改变了自己的生活和对待生活的态度。'
      // },{
      //   "nick_name": '王笑笑',
      //   "position": '北京中航科技有限公司 CEO',
      //   "evaluate_content": '互联网是一个快速迭代的行业，技术知识和产品创新瞬息万变，产品经理更要紧跟时代潮流。在开课吧学习后，我拥有了领先多数同龄人的技能，也改变了自己的生活和对待生活的态度。'
      // }],
      evaluateData: [],
      // infoArticle: [
      //   {
      //     avatar: require("@/assets/images/home_info02.png"),
      //     created_at: "2018-05-04 07:37:00",
      //     data_type: 1,
      //     deleted_at: null,
      //     example_url: "",
      //     examples: "",
      //     id: 14,
      //     info: {},
      //     name: "收集工具",
      //     overview: "",
      //     ref: 0,
      //     rules_and_tips: "",
      //     steps: "",
      //     tags: "",
      //     updated_at: "2018-05-04 07:37:00"
      //   },
      //   {
      //     avatar: require("@/assets/images/home_info03.png"),
      //     created_at: "2018-05-04 07:37:00",
      //     data_type: 1,
      //     deleted_at: null,
      //     example_url: "",
      //     examples: "",
      //     id: 24,
      //     info: {},
      //     name: "收集工具",
      //     overview: "",
      //     ref: 0,
      //     rules_and_tips: "",
      //     steps: "",
      //     tags: "",
      //     updated_at: "2018-05-04 07:37:00"
      //   },
      //   {
      //     avatar: require("@/assets/images/home_info04.png"),
      //     created_at: "2018-05-04 07:37:00",
      //     data_type: 1,
      //     deleted_at: null,
      //     example_url: "",
      //     examples: "",
      //     id: 34,
      //     info: {},
      //     name: "收集工具",
      //     overview: "",
      //     ref: 0,
      //     rules_and_tips: "",
      //     steps: "",
      //     tags: "",
      //     updated_at: "2018-05-04 07:37:00"
      //   }
      // ],

      infoArticle: [],

      // infoDesc: [
      //   {
      //     picture: require("@/assets/images/home_info01.png"),
      //     id: 54,
      //     title: '1911广场旗下1911咖啡获香港文利国际餐饮300万天使轮投资',
      //     introduce: '1911广场旗下1911咖啡获香港文利国际餐饮300万天使轮投资'
      //   }
      // ],
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
        { src: require("@/assets/images/banner.png") },
        { src: require("@/assets/images/banner.png") },
        { src: require("@/assets/images/banner.png") }
      ],
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
        pages: null,
        limits: null,
        evaluateLimit: null
      },
      classicForm: {
        pages: null,
        limits: null,
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
        isRecommend: null
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
    this.getNewCourseList()
    this.getClassicCourseList()
    this.getTeacherList()
    this.getEvaluateList()
    this.getNewInfoList()
  },
  methods: {
    getNewCourseList() {
       this.curruntForm.pages = 1;
       this.curruntForm.limits = 4;
       return new Promise((resolve, reject) => {
           home.getNewCourseList(this.curruntForm).then(response => {
            this.newData = response.data.curriculumList
            console.log(response.data.curriculumList, '123')
          })
        })
    },
    getClassicCourseList() {
      this.classicForm.pages = 1
      this.classicForm.limits = 8
      return new Promise((resolve, reject) => {
        home.getClassicCourseList(this.classicForm).then(response => {
          this.classicData = response.data.curriculumList
          console.log(response, '234')
        })
      })
    },

    getTeacherList() {
      this.teacherForm.pages = 1
      this.teacherForm.limits = 3
      return new Promise((resolve, reject) => {
        home.getTeacherList(this.teacherForm).then(response => {
          this.teachers = response.data.teacherList
          console.log(response, '567')
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
          // console.log(response, 'evaluateForm')
        })
      })
    },
    // 学堂资讯
    getNewInfoList () {
      this.newsInfoForm.pages = 1
      this.newsInfoForm.limits =4
      return new Promise((resolve, reject) => {
        home.getNewInfoList(this.newsInfoForm).then(response => {
          // this.evaluateData = response.data.evaluateList
          console.log(response, 'newsInfoForm')
          this.infoDesc = response.data.newsList
          this.infoArticle = response.data.newsList
        })
      })
    }
  }
};
</script>

