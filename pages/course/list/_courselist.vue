<template>
  <div class="goodLesson new-lesson" style="padding-bottom: 40px;" v-loading="loading">
    <div class="topImg" :class="{
      projectImg:cidNumber==='0', courseImg:cidNumber==='1', goodCourseImg:cidNumber==='2', freeImg:cidNumber==='3',
    }">

    </div>
    <div class="breadCrumb">
      <!-- 面包屑组件 -->
      <v-breadcrumb :config="BreadCrumb"></v-breadcrumb>
    </div>
    <div>
      <v-card :courseList="courseList" :config="config"></v-card>
      <div class="pagination" v-if="pageMsgs">
        <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0'" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCard from '@/pages/course/components/ListCard.vue'
import { categorylist } from '~/lib/v1_sdk/index'
import CustomPagination from '@/components/common/Pagination.vue'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
import { message } from '~/lib/util/helper'
export default {
  components: {
    'v-card': CustomCard,
    'v-page': CustomPagination,
    'v-breadcrumb': BreadCrumb
  },
  data() {
    return {
      projectImg: 'http://papn9j3ys.bkt.clouddn.com/banner-project.png',
      freeImg: 'http://papn9j3ys.bkt.clouddn.com/banner-free.png',
      courseImg: 'http://papn9j3ys.bkt.clouddn.com/banner-course.jpg',
      goodCourseImg: 'http://papn9j3ys.bkt.clouddn.com/banner-goodCourse.png',
      BreadCrumb: {
        type: 'goodlesson',
        position: true, //是否显示当前位置
        text: ''
      },
      config: {
        card_type: 'goodlesson',
        teacher: false
      },
      courseList: [],
      pageCount: null,
      newsCurriculumForm: {
        pages: 1,
        limits: 5,
        evaluateLimit: 4,
        isevaluate: 1
      },
      pagemsg: {
        page: 1,
        pagesize: 5,
        total: null
      },
      goodCurriculumForm: {
        pages: 1,
        limits: 5,
        evaluateLimit: 4,
        isEvaluate: 1
      },
      scrollTopMsg: true,
      noMoreData: false,
      cidNumber: null,
      coursename: null,
      pageMsgs: false,
      loading: false
    }
  },
  methods: {
    // 获取最新课程列表
    getCourseList() {
      if (this.cidNumber === '0') {
        this.getProjectList()
      } else if (this.cidNumber === '1') {
        this.getNewCourseList()
      } else if (this.cidNumber === '2') {
        this.getClassicCourseList()
      } else {
        this.getFreeCourseList()
      }
    },
    //获取最新项目列表
    getProjectList() {
      this.loading = true
      categorylist.getProjectList(this.newsCurriculumForm).then(response => {
        this.loading = false
        this.courseList = response.data.curriculumProjectList
        this.pagemsg.total = Number(response.data.pageCount)
        this.coursename = '最新项目'
        this.BreadCrumb.text = this.coursename
        this.pageMsgs = true
      })
    },
    // 最新课程列表
    getNewCourseList() {
      this.loading = true
      categorylist.getNewCourseList(this.newsCurriculumForm).then(response => {
        this.loading = false
        this.courseList = response.data.curriculumList
        this.pagemsg.total = Number(response.data.pageCount)
        this.coursename = '最新课程'
        this.BreadCrumb.text = this.coursename
        this.pageMsgs = true
      })
    },
    // 获取经典课程列表
    getClassicCourseList() {
      this.loading = true
      categorylist
        .getClassicCourseList(this.newsCurriculumForm)
        .then(response => {
          this.loading = false
          this.courseList = response.data.curriculumList
          this.pagemsg.total = Number(response.data.pageCount)
          this.coursename = '精品好课'
          this.BreadCrumb.text = this.coursename
          this.pageMsgs = true
        })
    },
    // 获取最新课程列表
    getFreeCourseList() {
      this.loading = true
      categorylist.getFreeCourseList(this.newsCurriculumForm).then(response => {
        this.loading = false
        this.courseList = response.data.curriculumList
        this.pagemsg.total = Number(response.data.pageCount)
        this.coursename = '免费课程'
        this.BreadCrumb.text = this.coursename
        this.pageMsgs = true
      })
    },
    // 点击下面分页按钮
    selectPages(val) {
      this.newsCurriculumForm.pages = val
      this.pagemsg.page = val
      this.newsCurriculumForm.limits = this.pagemsg.pagesize
      this.getCourseList()
    },
    // 下拉查看更多
    getMoreData() {
      if (this.pageCount === this.courseList.length) {
        message(this, 'error', '没有更多课程了！')
      } else {
        this.newsCurriculumForm.pages = this.newsCurriculumForm.pages + 1
        this.getNewCourseList()
      }
    },
    // 监听下拉刷新方法 -- 暂时不用
    downRefresh() {
      window.addEventListener('scroll', () => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight
        if (scrollTop + windowHeight == scrollHeight) {
          if (this.scrollTopMsg === true) {
            this.scrollTopMsg = false
            this.newsCurriculumForm.pages = this.newsCurriculumForm.pages + 1
            this.getNewCourseList()
          }
        }
      })
    },
    //初始化data
    initData() {
      document.getElementsByClassName('headerBox')[0].style.display = 'inline'
      document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    },
    // 初始化所有方法
    initAll() {
      this.initData()
      this.getCourseList()
      // this.downRefresh()
    }
  },
  mounted() {
    this.cidNumber = window.location.pathname.split('/')[3]

    this.initAll()
  }
}
</script>


