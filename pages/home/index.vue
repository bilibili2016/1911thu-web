<template>
  <div>
    <el-main class="home">
      <!-- 头部导航 -->
      <v-carousel :items="items" :classify="classify" :courses="courses"></v-carousel>
      <!-- <v-project :dingData="dingData" :config="ding"></v-project> -->
      <!-- 最新项目 -->
      <v-newp :newData="newData" :titleTwo="titleEight" :linkone="linkone"></v-newp>
      <!-- 最新课程 -->
      <v-new :config="configOne" :newData="newData" :titleTwo="titleTwo" :linkthree="linkthree"></v-new>
      <!-- 精品好课 -->
      <v-classic :classicData="classicData" :titleThree="titleThree" :linktwo="linktwo"></v-classic>
      <!-- 免费专区 -->
      <v-free :config="configZero" :freeData="freeData" :titleOne="titleOne" :linkzero="linkzero"></v-free>
      <!-- 名师智库 -->
      <v-famous :teachers="teachers" :titleFore="titleFore" :linkSeven="linkSeven"></v-famous>

      <!-- 名师大咖秀 -->
      <!-- <v-famous :teachers="teachers" :titleFore="titleFore"></v-famous> -->
      <!-- 用户评价 -->
      <!-- <v-evaluate :titleFour="titleFour" :evaluateData="evaluateData"></v-evaluate> -->
      <!-- 学堂资讯 -->
      <v-info :infoDesc="infoDesc" :infoArticle="infoArticle" :infoTwo="infoTwo" :infoOne="infoOne" :titleFive="titleFive" :linkfour="linkfours" :linkfive="linkfive"></v-info>
      <!-- 合作伙伴 -->
      <!-- <v-partner :data="partnerList.list"></v-partner> -->
      <v-backtotop :data="showCheckedCourse"></v-backtotop>
    </el-main>
  </div>
</template>

<script>
import Carousel from '@/pages/home/components/carousel.vue'
import Newp from '@/pages/home/components/newcourse.vue'
import New from '@/pages/home/components/new.vue'
import Classic from '@/pages/home/components/classic.vue'
import Free from '@/pages/home/components/free.vue'
import Famous from '@/pages/home/components/famous.vue'
import Info from '@/pages/home/components/info.vue'
import BackToTop from '@/components/common/BackToTop.vue'
import { mapState, mapActions } from 'vuex'
import { home, newlesson } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-carousel': Carousel,
    'v-newp': Newp,
    'v-new': New,
    'v-classic': Classic,
    'v-free': Free,
    'v-famous': Famous,
    'v-info': Info,
    'v-backtotop': BackToTop
  },
  data() {
    return {
      linkzero: '/course/freelesson',
      linkone: '/course/category',
      linktwo: '/course/qualitylesson',
      linkthree: '/course/newlesson',
      linkfours: '/news/list',
      linkfive: '/news/detail',
      linkSix: '/home/components/teacher',
      linkSeven: '/famous/list',
      freeData: [],
      newData: [],
      classicData: [],
      showCheckedCourse: false,
      configZero: {
        card_type: 'profile',
        card: 'home',
        new: 'false',
        free: 'true'
      },
      configOne: {
        card_type: 'profile',
        card: 'home',
        new: 'true'
      },
      infoOne: {
        card_type: 'infoOne'
      },
      infoTwo: {
        card_type: 'infoTwo'
      },
      titleOne: '免费专区',
      titleTwo: '最新课程',
      titleThree: '精品好课',
      titleFore: '名师智库',
      titleFour: '用户评价',
      titleFive: '学堂资讯',
      titleEight: '最新项目',
      partnerList: {
        list: [],
        pages: 1,
        limits: 10
      },
      teacherResource: [],
      teachers: [],
      evaluateData: [],
      infoArticle: [],
      infoDesc: [],
      ding: {
        card_type: 'ding'
      },
      dingData: [],
      numSrc: require('@/assets/images/home_num.png'),
      value1: 4,
      imgList: [],
      items: [],
      itemsData: {
        limit: null,
        types: 1
      },
      classify: [
        {
          category_name: '干部网络学院',
          id: '1'
        },
        {
          category_name: '在线商学院',
          id: '17'
        },
        {
          category_name: '职场学院',
          id: '19'
        },
        {
          category_name: '党政委托项目',
          id: '16'
        },
        {
          category_name: '企业内训项目',
          id: '18'
        },
        {
          category_name: '管理公开项目',
          id: '20'
        }
      ],
      classtext: [],
      courses: [],
      notLogin: false,
      curruntForm: {
        pages: 1,
        limits: '',
        evaluateLimit: null,
        isevaluate: 1
      },
      courseForm: {
        pages: 1,
        limits: '8',
        evaluateLimit: null,
        isevaluate: 1
      },
      freeForm: {
        pages: 1,
        limits: '8'
      },
      classicForm: {
        pages: 0,
        limits: '6',
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
      newsInfoForm: {
        page: 1,
        limits: 4
      },
      loginMsg: false
    }
  },
  created() {},
  computed: {
    ...mapState('auth', [])
  },
  methods: {
    ...mapActions('auth', ['signOut']),
    async getAll() {
      await Promise.all([
        this.getBanner(),
        // this.getClassifyList(),
        this.getFreeCourseList(),
        this.getNewCourseList(),
        this.getClassicCourseList(),
        this.getTeacherList(),
        // this.getEvaluateList(),
        this.getNewsInfoList()
        // this.getPartnerList(),
        // this.getPointList()
      ])
    },
    // 获取banner
    getBanner() {
      home.getBannerList(this.itemsData).then(response => {
        this.items = response.data.bannerList
      })
    },
    // 获取分类列表
    getClassifyList() {
      home.getClassifyList(this.curruntForm).then(response => {
        this.classify = response.data.categoryList
      })
    },
    // 获取免费课程列表
    getFreeCourseList() {
      home.getFreeCourseList(this.freeForm).then(response => {
        this.freeData = response.data.curriculumList
      })
    },
    // 获取新上好课列表
    getNewCourseList() {
      newlesson.getNewCourseList(this.courseForm).then(response => {
        this.newData = response.data.curriculumList
      })
    },
    // 获取精品好课列表
    getClassicCourseList() {
      home.getClassicCourseList(this.classicForm).then(response => {
        this.classicData = response.data.curriculumList
      })
    },

    getTeacherList() {
      home.getTeacherList(this.teacherForm).then(response => {
        this.teachers = response.data.teacherList
        // this.teacherResource = response.data.teacherList
      })
    },
    // 用户评价
    // getEvaluateList() {
    //   home.getEvaluateList(this.evaluateForm).then(response => {
    //     this.evaluateData = response.data.evaluateList
    //   })
    // },
    // 学堂资讯
    getNewsInfoList() {
      home.getNewsInfoList(this.newsInfoForm).then(response => {
        this.infoDesc = response.data.outerList
        this.infoArticle = response.data.innerList
      })
    },
    // 获取合作伙伴
    getPartnerList() {
      home.getPartnerList(this.partnerList).then(response => {
        this.partnerList.list = response.data.collaborationEnterpriseList
      })
    },
    // 获取定制消息
    getPointList() {
      home.getPointList().then(response => {
        this.dingData = response.data.pointList
      })
    }
  },
  mounted() {
    this.$bus.$on('loginMsg', data => {
      if (data === true) {
        this.loginMsg = true
      }
    })

    this.getAll()
    this.$bus.$on('reLogin', data => {
      this.getAll()
    })
    this.$bus.$emit('bannerShow', false)
  }
}
</script>

