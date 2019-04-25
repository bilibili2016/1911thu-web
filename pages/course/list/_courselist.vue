<template>
  <div class="goodLesson" v-loading="loading">
    <div class="topImg" :class="{
      projectImg:cidNumber==='0', courseImg:cidNumber==='1', goodCourseImg:cidNumber==='2', freeImg:cidNumber==='3',
    }">
    </div>
    <div>
      <v-card :courseList="courseList" :config="config"></v-card>
      <div class="pagination" v-if="pageMsgs">
        <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCard from "@/pages/course/components/ListCard.vue";
import { categorylist } from "~/lib/v1_sdk/index";
import { message, setTitle } from "~/lib/util/helper";
export default {
  components: {
    "v-card": CustomCard
  },
  data () {
    return {
      projectImg: "https://static-image.1911edu.com/banner-project.png",
      freeImg: "https://static-image.1911edu.com/banner-free.png",
      courseImg: "https://static-image.1911edu.com/banner-course.jpg",
      goodCourseImg: "https://static-image.1911edu.com/banner-goodCourse.png",
      config: {
        card_type: "goodlesson",
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
    };
  },
  methods: {
    // 获取最新课程列表
    getCourseList () {
      if (this.cidNumber === "0") {
        this.getProjectList();
      } else if (this.cidNumber === "1") {
        this.getNewCourseList();
      } else if (this.cidNumber === "2") {
        this.getClassicCourseList();
      } else {
        this.getFreeCourseList();
      }
    },
    //获取最新项目列表
    getProjectList () {
      this.loading = true;
      categorylist.getProjectList(this.newsCurriculumForm).then(response => {
        if (response.status === 0) {
          this.loading = false;
          this.courseList = response.data.curriculumProjectList;
          this.pagemsg.total = Number(response.data.pageCount);
          this.coursename = "混合式项目";
          this.pageMsgs = true;
        }
      });
    },
    // 最新课程列表
    getNewCourseList () {
      this.loading = true;
      categorylist.getNewCourseList(this.newsCurriculumForm).then(response => {
        if (response.status === 0) {
          this.loading = false;
          this.courseList = response.data.curriculumList;
          this.pagemsg.total = Number(response.data.pageCount);
          this.coursename = "最新课程";
          this.pageMsgs = true;
        }
      });
    },
    // 获取经典课程列表
    getClassicCourseList () {
      this.loading = true;
      categorylist
        .getClassicCourseList(this.newsCurriculumForm)
        .then(response => {
          if (response.status === 0) {
            this.loading = false;
            this.courseList = response.data.curriculumList;
            this.pagemsg.total = Number(response.data.pageCount);
            this.coursename = "精品好课";
            this.pageMsgs = true;
          }
        });
    },
    // 获取最新课程列表
    getFreeCourseList () {
      this.loading = true;
      categorylist.getFreeCourseList(this.newsCurriculumForm).then(response => {
        if (response.status === 0) {
          this.loading = false;
          this.courseList = response.data.curriculumList;
          this.pagemsg.total = Number(response.data.pageCount);
          this.coursename = "限时免费";
          this.pageMsgs = true;
        }
      });
    },
    // 点击下面分页按钮
    selectPages (val) {
      this.newsCurriculumForm.pages = val;
      this.pagemsg.page = val;
      this.newsCurriculumForm.limits = this.pagemsg.pagesize;
      this.getCourseList();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    // 下拉查看更多
    getMoreData () {
      if (this.pageCount === this.courseList.length) {
        message(this, "error", "没有更多课程了！");
      } else {
        this.newsCurriculumForm.pages = this.newsCurriculumForm.pages + 1;
        this.getNewCourseList();
      }
    },
    // 监听下拉刷新方法 -- 暂时不用
    downRefresh () {
      window.addEventListener("scroll", () => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        if (scrollTop + windowHeight == scrollHeight) {
          if (this.scrollTopMsg === true) {
            this.scrollTopMsg = false;
            this.newsCurriculumForm.pages = this.newsCurriculumForm.pages + 1;
            this.getNewCourseList();
          }
        }
      });
    },

    // 初始化所有方法
    initAll () {
      this.getCourseList();
    }
  },
  mounted () {
    this.cidNumber = window.location.pathname.split("/")[3];
    this.initAll();
  },
  updated () {
    if (this.cidNumber == "0") {
      setTitle("混合式项目-1911学堂");
    } else if (this.cidNumber == "1") {
      setTitle("最新课程-1911学堂");
    } else if (this.cidNumber == "2") {
      setTitle("精品课程-1911学堂");
    } else if (this.cidNumber == "3") {
      setTitle("限时免费-1911学堂");
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/course/courseList";
</style>

