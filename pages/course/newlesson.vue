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

    <div class="pagination">
      <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0'" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
    </div>
    <!-- <div class="card-button" v-if="noMoreData">
      <el-button type="primary">暂无更多数据</el-button>
    </div>
    <div class="card-button" v-else>
      <el-button type="primary">下拉加载更多</el-button>
    </div> -->
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import { home, newlesson } from '~/lib/v1_sdk/index'
import CustomPagination from '@/components/common/Pagination.vue'
export default {
  components: {
    'v-card': CustomCard,
    'v-page': CustomPagination
  },
  data() {
    return {
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
      scrollTopMsg: true,
      noMoreData: false
    }
  },
  methods: {
    // 获取最新课程列表
    getNewCourseList() {
      newlesson.getNewCourseList(this.newsCurriculumForm).then(response => {
        // if (response.data.curriculumList.length === 0) {
        //   this.noMoreData = true
        // }
        // this.courseList = this.courseList.concat(response.data.curriculumList)
        // for (var i = 0; i < this.courseList.length; i++) {
        //   this.$set(this.courseList[i], 'isCartNew', 0)
        // }
        // this.pageCount = response.data.pageCount
        // this.scrollTopMsg = true
        this.courseList = response.data.curriculumList
        this.pagemsg.total = Number(response.data.pageCount)
      })
    },
    selectPages(val) {
      this.newsCurriculumForm.pages = val
      this.pagemsg.page = val
      this.newsCurriculumForm.limits = this.pagemsg.pagesize
      this.getNewCourseList()
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
      // this.downRefresh()
    }
  },
  mounted() {
    this.initAll()
  }
}
</script>
<style scoped lang="scss">
.goodLesson {
  padding-bottom: 40px;
}
</style>

