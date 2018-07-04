<template>
  <div class="goodLesson new-lesson">
    <div class="topImg">
      <img :src="atopImg" alt="">
    </div>
    <div class="breadCrumb">
      <span>当前位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新上好课</el-breadcrumb-item>
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
      atopImg: 'http://pam8iyw9q.bkt.clouddn.com/banner2.png',
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
    getNewCourseList() {
      return new Promise((resolve, reject) => {
        home.getNewCourseList(this.newsCurriculumForm).then(response => {
          if (response.data.curriculumList.length === 0) {
            this.noMoreData = true
          }
          this.courseList = this.courseList.concat(response.data.curriculumList)
          this.pageCount = response.data.pageCount
          this.scrollTopMsg = true

          resolve(true)
        })
      })
    },
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
    }
  },
  mounted() {
    this.getNewCourseList()
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    // 缓存指针
    let _this = this
    // 设置一个开关来避免重负请求数据
    let sw = true
    // 此处使用node做了代理

    // 注册scroll事件并监听
    window.addEventListener('scroll', () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      //变量scrollHeight是滚动条的总高度
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
}
</script>
<style lang="scss" scoped>
</style>

