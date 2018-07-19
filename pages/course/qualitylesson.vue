<template>
  <div class="goodLesson new-lesson">
    <div class="topImg">
      <div class="top-con">
        <p class="desc-one">走心课程</p>
        <p class="desc-two">实力覆盖</p>
      </div>
    </div>
    <div class="breadCrumb">
      <span>当前位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>精品好课</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <v-card :courseList="courseList" :config="config"></v-card>

    <div class="card-button" v-if="noMoreData">
      <el-button type="primary">暂无更多数据</el-button>
    </div>
    <div class="card-button" v-else>
      <el-button type="primary">下拉加载更多</el-button>
    </div>
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import { home, newlesson } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-card': CustomCard
  },
  data() {
    return {
      config: {
        card_type: 'goodlesson',
        teacher: true
      },
      courseList: [],
      pageCount: null,
      goodCurriculumForm: {
        pages: 1,
        limits: 5,
        evaluateLimit: 4,
        isEvaluate: 1
      },
      scrollTopMsg: true,
      noMoreData: false
    }
  },
  methods: {
    // 获取精品好课列表
    getNewCourseList() {
      home.getClassicCourseList(this.goodCurriculumForm).then(response => {
        if (response.data.curriculumList.length === 0) {
          this.noMoreData = true
        }
        this.courseList = this.courseList.concat(response.data.curriculumList)
        for (var i = 0; i < this.courseList.length; i++) {
          this.$set(this.courseList[i], 'isCartNew', 0)
        }
        this.pageCount = response.data.pageCount
        this.scrollTopMsg = true
      })
    },
    // 下拉查看更多
    getMoreData() {
      if (this.pageCount === this.courseList.length) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '没有更多课程了！'
        })
      } else {
        this.goodCurriculumForm.pages = this.goodCurriculumForm.pages + 1
        this.getNewCourseList()
      }
    },
    // 监听下拉刷新方法
    downRefresh() {
      window.addEventListener('scroll', () => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight

        if (scrollTop + windowHeight === scrollHeight) {
          if (this.scrollTopMsg === true) {
            this.scrollTopMsg = false
            this.goodCurriculumForm.pages = this.goodCurriculumForm.pages + 1
            this.getNewCourseList()
          }
        } else if (scrollTop + windowHeight > scrollHeight) {
          if (this.scrollTopMsg === true) {
            this.scrollTopMsg = false
            this.goodCurriculumForm.pages = this.goodCurriculumForm.pages + 1
            this.getNewCourseList()
          }
        } else {
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
      this.getNewCourseList()
      this.downRefresh()
    }
  },
  mounted() {
    this.initAll()
  }
}
</script>

