<template>
  <div>
    <el-main class="home">
      <!-- 头部导航 -->
      <v-carousel :items="items" :config="configCarousel"></v-carousel>
      <!-- 干部网络学院 -->
      <v-course :config="configOne" :data="cadreCourseList" :title="cadreCollegeTitle" :link="cadreCollegeMore" class="index-course bgfff" v-if="cadreCourseList.length>0"></v-course>
      <!-- 在线商学院 -->
      <v-course :config="configOne" :data="commercialCourseList" :title="commercialCollegeTitle" :link="commercialCollegeMore" class="index-course bgf8f8fd" v-if="commercialCourseList.length>0"></v-course>
      <!-- 最新课程 -->
      <!-- <v-course :config="configOne" :data="newData" :title="newcoursetitle" :link="linknewcourse" class="index-course bgfff"></v-course> -->
      <!-- 免费专区 -->
      <v-course :config="configZero" :data="freeData" :title="freecoursetitle" :link="linkfreecourse" class="index-free bgfff" v-if="freeData.length>0"></v-course>
      <!-- 精品好课 -->
      <!-- <v-course :config="classicConfig" :data="classicData" :title="classiccoursetitle" :link="linkclassiccourse" class="index-goodcourse bgfff"></v-course> -->
      <!-- 最新项目 -->
      <v-course :config="projectConfig" v-loading="projectLoading" :data="projectData" :title="newprojecttitle" :link="linknewproject" class="index-project bgf8f8fd"></v-course>
      <!-- <v-free :config="configZero" :freeData="freeData" :title="freecoursetitle" :link="linkfreecourse"></v-free> -->
      <!-- 名师智库 -->
      <!-- <v-famous :teachers="teachers" :title="famoustitle" :link="linkfamouscourse"></v-famous> -->
      <!-- 名师大咖秀 -->
      <!-- <v-famous :teachers="teachers" :titleFore="titleFore"></v-famous> -->
      <!-- 学堂资讯 -->
      <v-info :infoDesc="infoDesc" :infoArticle="infoArticle" :infoTwo="infoTwo" :infoOne="infoOne" :title="infotitle" :link="linkinfo" class="index-new bgfff"></v-info>
      <v-backtotop :data="showCheckedCourse"></v-backtotop>
    </el-main>
  </div>
</template>

<script>
import Carousel from '@/components/common/Carousel.vue'

// import Famous from '@/pages/home/teacher/famous.vue'
import Info from '@/pages/home/news/info.vue'
import BackToTop from '@/components/common/BackToTop.vue'
import HomeCourse from '@/pages/home/components/homecourse.vue'
import { mapState, mapActions } from 'vuex'
import { home, news } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-carousel': Carousel,
    // 'v-famous': Famous,
    'v-info': Info,
    'v-backtotop': BackToTop,
    'v-course': HomeCourse
  },
  data() {
    return {
      projectLoading: true,
      windowWidth: '',
      // linknewproject: '/course/' + '0' + '?type=' + '1' + '&xid=0',
      cadreCollegeTitle: '干部网络学院',
      commercialCollegeTitle: '商学院',
      cadreCollegeMore: '/course/category?cid=1&cp=0&pids=0&xid=0',
      commercialCollegeMore: '/course/category?cid=17&cp=0&pids=0&xid=0',
      linknewproject: '/course/list/0',
      newprojecttitle: '最新项目',
      linknewcourse: '/course/list/1',
      newcoursetitle: '最新课程',
      linkclassiccourse: '/course/list/2',
      classiccoursetitle: '精品好课',
      linkfreecourse: '/course/list/3',
      freecoursetitle: '限时免费',
      linkfamouscourse: '/teacher/list',
      famoustitle: '名师智库',
      infotitle: '学堂资讯',
      linkinfo: '/home/news/list',
      freeData: [],
      newData: [],
      classicData: [],
      projectData: [],
      cadreCourseList: [],
      commercialCourseList: [],
      showCheckedCourse: false,
      configCarousel: {
        carousel: 'home'
      },
      configZero: {
        card_type: 'profile',
        new: 'false',
        free: 'true',
        home_type: 'cardone'
      },
      configOne: {
        card_type: 'profile',
        new: 'true',
        home_type: 'cardone'
      },
      classicConfig: {
        card_type: 'classic',
        home_type: 'cardthree'
      },
      projectConfig: {
        card_type: 'project',
        home_type: 'cardtwo'
      },
      infoOne: {
        card_type: 'infoOne'
      },
      infoTwo: {
        card_type: 'infoTwo'
      },

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
      projectForm: {
        pages: 1,
        limits: 2
      },
      loginMsg: false
    }
  },
  computed: {
    ...mapState('auth', [])
  },
  created() {},
  methods: {
    ...mapActions('auth', ['signOut']),
    getAll() {
      this.getBanner()
      this.getCollegeCourseList()
      this.getFreeCourseList()

      this.getClassicCourseList()
      // this.getEvaluateList(),
      this.getNewsInfoList()
      // this.$bus.$emit('updateCount')
      // this.getPartnerList(),
      // this.getPointList()
      this.getProjectList()
      // this.$bus.$emit('getClassifyList')
    },
    // 获取banner
    getBanner() {
      home.getBannerList(this.itemsData).then(response => {
        this.items = response.data.bannerList
        //设置banner溢出居中显示
        this.$nextTick(() => {
          let imgArr = document.getElementsByClassName('el-carousel__item')
          if (this.windowWidth <= 1920) {
            let marginLeft = (1920 - this.windowWidth) / 2
            for (var i = 0; i < imgArr.length; i++) {
              imgArr[i].style.marginLeft = -marginLeft + 'px'
            }
          }
        })
      })
    },
    // 获取分类列表
    // getClassifyList() {
    //   home.getClassifyList(this.curruntForm).then(response => {
    //     this.classify = response.data.categoryList
    //   })
    // },
    //获取项目列表
    getProjectList() {
      this.projectLoading = true
      home.getProjectList(this.projectForm).then(response => {
        this.projectLoading = false
        this.projectData = response.data.curriculumProjectList
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
      home.getNewCourseList(this.courseForm).then(response => {
        if (response.status === 0) {
          this.newData = response.data.curriculumList
          this.getAll()
        }
      })
    },
    // 获取精品好课列表
    getClassicCourseList() {
      home.getClassicCourseList(this.classicForm).then(response => {
        this.classicData = response.data.curriculumList
      })
    },
    // 获取学院课程列表
    getCollegeCourseList() {
      home.getCollegeCourseList().then(response => {
        // 干部学院
        this.cadreCourseList = response.data.cadreCurriculumList
        // 商学院
        this.commercialCourseList = response.data.commercialCurriculumList
      })
    },
    // 学堂资讯
    getNewsInfoList() {
      news.getNewsInfoList(this.newsInfoForm).then(response => {
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
  created() {
    this.getNewCourseList()
  },
  mounted() {
    document.getElementsByTagName('title')[0].innerText =
      '1911学堂-党政干部与企事业单位高管的终身学堂'
    this.windowWidth = document.documentElement.clientWidth
    this.$bus.$on('loginMsg', data => {
      if (data === true) {
        this.loginMsg = true
      }
    })

    this.$bus.$on('reLogin', data => {
      this.getNewCourseList()
    })
    // this.$bus.$emit('bannerShow', false)
    this.$bus.$on('getNewCourseList', data => {
      this.getNewCourseList()
    })
  }
}
</script>

