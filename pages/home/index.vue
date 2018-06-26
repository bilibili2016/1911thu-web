<template>
  <div>
    <el-main class="home">
      <!-- 头部导航 -->
      <v-tab :items="items" :classify="classify" :courses="courses" :dingData="dingData" :config="ding"></v-tab>
      <!-- 新上好课 -->
      <v-new :config="configZero" :newData="newData" :titleOne="titleOne" :linkone="linkone"></v-new>
      <!-- 经典好课 -->
      <v-classic :config="configZ" :classicData="classicData" :titleTwo="titleTwo" :linktwo="linktwo"></v-classic>
      <!-- 名师大咖秀 -->
      <v-famous :teachers="teachers" :titleThree="titleThree"></v-famous>
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
import New from '@/pages/home/components/new.vue'
import Classic from '@/pages/home/components/classic.vue'
import Famous from '@/pages/home/components/famous.vue'
import Evaluate from '@/pages/home/components/evaluate.vue'
import Info from '@/pages/home/components/info.vue'
import Partner from '@/pages/home/components/partner.vue'
import BackToTop from '@/components/common/BackToTop.vue'

import { home } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-partner': Partner,
    'v-info': Info,
    'v-evaluate': Evaluate,
    'v-famous': Famous,
    'v-classic': Classic,
    'v-new': New,
    'v-tab': Tab,
    'v-backtotop': BackToTop
  },
  data() {
    return {
      linkone: '/course/newlesson',
      linktwo: '/course/classifycourse',
      linkfours: '/news/list',
      linkfive: '/news/detail',
      newData: [],
      classicData: [],
      showCheckedCourse: false,
      configZero: {
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
      titleOne: '新上好课',
      titleTwo: '经典课程',
      titleThree: '名师大咖秀',
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
          src: 'http://pam8iyw9q.bkt.clouddn.com/pro3.817a75e.png',
          title: '面授、线下活动',
          content:
            '中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...',
          link: '/activity/faceteach'
        },
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/pro2.b8c7f5f.png',
          title: '企业课程定制',
          content:
            '中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...',
          link: '/activity/enterpriseCustom'
        },
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/pro1.68e8047.png',
          title: '学位项目',
          content:
            '中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...',
          link: '/activity/degree'
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
          category_name: '党政系统学院',
          id: '16'
        },
        {
          category_name: '在线商学院',
          id: '17'
        },
        {
          category_name: '行业学院',
          id: '18'
        },
        {
          category_name: '职场学院',
          id: '19'
        },
        {
          category_name: '直播/热点课程',
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
      classicForm: {
        pages: 0,
        limits: 8,
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
      }
    }
  },
  beforeCreate() {
    // this.getAll()
  },
  created() {
    this.getAll()
  },
  mounted() {
    // document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    // document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.$bus.$on('reLogin', data => {
      this.getAll()
    })
  },
  methods: {
    async getAll() {
      await Promise.all([
        this.getBanner(),
        this.getClassifyList(),
        this.getNewCourseList(),
        this.getClassicCourseList(),
        this.getTeacherList(),
        this.getEvaluateList(),
        this.getNewInfoList(),
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
        this.classify = response.data.categoryList
      })
    },
    // 获取新上好课列表
    getNewCourseList() {
      home.getNewCourseList(this.curruntForm).then(response => {
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
    getNewInfoList() {
      home.getNewInfoList(this.newsInfoForm).then(response => {
        this.infoDesc = response.data.newsList
        this.infoArticle = response.data.newsList
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

