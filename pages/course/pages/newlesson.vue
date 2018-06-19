<template>
  <div class="goodLesson">
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
    <div class="card-button">
      <el-button type="primary" @click='getMoreData()'>查看更多</el-button>
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
      atopImg: require('@/assets/images/banner2.png'),
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
      }
    }
  },
  methods: {
    getNewCourseList() {
      return new Promise((resolve, reject) => {
        home.getNewCourseList(this.newsCurriculumForm).then(response => {
          // console.log(response, '123')
          this.courseList = this.courseList.concat(response.data.curriculumList)
          this.pageCount = response.data.pageCount
          // for
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
  }
}
</script>
<style lang="scss" scoped>
.card-button {
  text-align: center;
  margin: 70px 0 100px;
  .el-button {
    width: 174px;
    height: 56px;
    line-height: 56px;
    border-radius: 28px;
    background-color: #6417a6;
    text-align: center;
    margin: 0;
    padding: 0;
    border: none;
    transition: all 300ms;

    &:hover {
      background-color: #8e4fc8;
    }
  }
}
</style>

