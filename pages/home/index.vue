<template>
  <div>
    <el-main class="home">
      <!-- 头部导航 -->
      <v-tab :items="items" :classify="classify" :courses="courses" :dingData="dingData" :config="ding"></v-tab>
      <!-- 免费专区 -->
      <v-free :config="configZero" :freeData="freeData" :titleOne="titleOne" :linkzero="linkzero"></v-free>
      <!-- 最新课程 -->
      <v-new :config="configOne" :newData="newData" :titleTwo="titleTwo" :linkone="linkone"></v-new>
      <!-- 精品好课 -->
      <v-classic :config="configZ" :classicData="classicData" :titleThree="titleThree" :linktwo="linktwo"></v-classic>
      <!-- 名师大咖秀 -->
      <!-- <v-famous :teachers="teachers" :titleFore="titleFore"></v-famous> -->
      <!-- 用户评价 -->
      <v-evaluate :titleFour="titleFour" :evaluateData="evaluateData"></v-evaluate>
      <!-- 学堂资讯 -->
      <v-info :infoDesc="infoDesc" :infoArticle="infoArticle" :infoTwo="infoTwo" :infoOne="infoOne" :titleFive="titleFive" :linkfour="linkfours" :linkfive="linkfive"></v-info>
      <!-- 合作伙伴 -->
      <v-partner :data="partnerList.list"></v-partner>
      <v-backtotop :data="showCheckedCourse"></v-backtotop>
    </el-main>
  </div>
</template>

<script>
import Tab from '@/pages/home/components/tab.vue'
import Free from '@/pages/home/components/free.vue'
import New from '@/pages/home/components/new.vue'
import Classic from '@/pages/home/components/classic.vue'
import Famous from '@/pages/home/components/famous.vue'
import Evaluate from '@/pages/home/components/evaluate.vue'
import Info from '@/pages/home/components/info.vue'
import Partner from '@/pages/home/components/partner.vue'
import BackToTop from '@/components/common/BackToTop.vue'
import { store as persistStore } from '~/lib/core/store'

import { home } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-partner': Partner,
    'v-info': Info,
    'v-evaluate': Evaluate,
    'v-famous': Famous,
    'v-classic': Classic,
    'v-free': Free,
    'v-new': New,
    'v-tab': Tab,
    'v-backtotop': BackToTop
  },
  data() {
    return {
      linkzero: '/course/classifylist',
      linkone: '/course/newlesson',
      linktwo: '/course/classifycourse',
      linkfours: '/news/list',
      linkfive: '/news/detail',
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
      configZ: {
        card_type: 'profile',
        card: 'home',
        new: 'false'
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
      titleFore: '名师大咖秀',
      titleFour: '用户评价',
      titleFive: '学堂资讯',
      partnerList: {
        list: [],
        pages: 1,
        limits: 10
      },
      teachers: [],
      evaluateData: [],
      infoArticle: [],
      infoDesc: [],
      ding: {
        card_type: 'ding'
      },
      dingData: [
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/pro3.817a75e.png',
          title: '面授、线下活动',
          content:
            '中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...',
          link: '/other/faceteach'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/pro2.b8c7f5f.png',
          title: '机构课程定制',
          content:
            '中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...',
          link: '/other/enterprisecustom'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/pro1.68e8047.png',
          title: '学位项目',
          content:
            '中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...',
          link: '/other/degree'
        }
      ],
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
          category_name: '干部通用学院',
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
        limits: null,
        evaluateLimit: null,
        isevaluate: 1
      },
      freeForm: {
        pages: 1,
        limits: '',
        isFree: 2
      },
      classicForm: {
        pages: 0,
        limits: null,
        categoryId: null,
        sortBy: null
      },
      teacherForm: {
        pages: 1,
        limits: 3
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
  beforeCreate() {
    // this.getAll()
  },
  created() {
    let aa = persistStore.get('dandian')
    this.getAll()
  },
  mounted() {
    this.$bus.$on('loginMsg', data => {
      if (data === true) {
        this.loginMsg = true
      }
    })

    this.$bus.$on('reLogin', data => {
      this.getAll()
    })
    this.$bus.$emit('bannerShow', false)
  },
  methods: {
    async getAll() {
      await Promise.all([
        this.getBanner(),
        this.getClassifyList(),
        this.getFreeCourseList(),
        this.getNewCourseList(),
        this.getClassicCourseList(),
        this.getTeacherList(),
        this.getEvaluateList(),
        this.getNewsInfoList(),
        this.getPartnerList()
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
        // console.log(
        //   response.data.categoryList,
        //   '这是response.data.categoryList'
        // )
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
      home.getNewCourseList(this.courseForm).then(response => {
        this.newData = response.data.curriculumList
      })
    },
    getClassicCourseList() {
      home.getClassicCourseList(this.classicForm).then(response => {
        this.classicData = response.data.curriculumList
      })
    },

    getTeacherList() {
      home.getTeacherList(this.teacherForm).then(response => {
        this.teachers = response.data.teacherList
      })
    },
    // 用户评价
    getEvaluateList() {
      home.getEvaluateList(this.evaluateForm).then(response => {
        this.evaluateData = response.data.evaluateList
      })
    },
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
    }
  }
}
</script>

