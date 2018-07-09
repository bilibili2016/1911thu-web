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
        <el-breadcrumb-item>最新课程</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <v-card :courseList="courseList" :config="config"></v-card>

    <div class="card-button" v-if="noMoreData">
      <el-button type="primary">暂无更多数据</el-button>
    </div>
    <div class="card-button" v-else>
      <el-button type="primary">下拉加载更多</el-button>
    </div>
    <!-- <v-more @getMoreData ="getMoreData"></v-more> -->
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import CustomMore from '@/components/common/More.vue'
import { home } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-card': CustomCard,
    'v-more': CustomMore
  },
  data() {
    return {
      config: {
        card_type: 'goodlesson'
      },
      courseList: [],
      pageCount: null,
      newsCurriculumForm: {
        pages: 1,
        limits: 5,
        evaluateLimit: 4,
        isevaluate: 1
      },
      scrollTopMsg: true,
      noMoreData: false
    }
  },
  methods: {
    // 获取最新课程列表
    getNewCourseList() {
      return new Promise((resolve, reject) => {
        home.getNewCourseList(this.newsCurriculumForm).then(response => {
          if (response.data.curriculumList.length === 0) {
            this.noMoreData = true
          }
          this.courseList = this.courseList.concat(response.data.curriculumList)
          for (var i = 0; i < this.courseList.length; i++) {
            this.$set(this.courseList[i], 'isCartNew', 0)
          }
          this.pageCount = response.data.pageCount
          this.scrollTopMsg = true

          resolve(true)
        })
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
        this.newsCurriculumForm.pages = this.newsCurriculumForm.pages + 1
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
        if (scrollTop + windowHeight == scrollHeight) {
          if (this.scrollTopMsg === true) {
            this.scrollTopMsg = false
            this.newsCurriculumForm.pages = this.newsCurriculumForm.pages + 1
            this.getNewCourseList()
          }
        }
      })
    }
  },
  mounted() {
    this.getNewCourseList()
    this.downRefresh()
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>

