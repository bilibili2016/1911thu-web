<template>
  <div class="projectDetail" v-loading="projectDetailLoad">
    <!-- <img :src="projectDetail.study_picture" alt="" class="bg-banner"> -->
    <!-- <div class="proHeader" :style="{'background-image':'url('+projectDetail.picture+')'}"> -->
    <div class="proHeader">
      <div class="proHeader-mask"></div>
      <img class="proHeader-img" :src="projectDetail.study_picture" alt="">
      <!-- 项目详情基本信息 -->
      <v-detail :projectDetail="projectDetail" :projectType="project" @payment="payment" class="proHeader-detail"></v-detail>
    </div>
    <!-- 介绍 线上课程 线下课程说明 用户评价 常见问题-->
    <div class="proContent">
      <el-tabs v-model="activeName" class="proTab">
        <el-tab-pane label="介绍" name="first">
          <div class="detail" v-html="projectDetail.content" v-if="project.types == '1'"></div>
          <div class="introduction" v-html="projectDetail.introduction" v-if="project.types === '2'"></div>
        </el-tab-pane>
        <el-tab-pane label="线上课程" name="second">
          <v-procourse :vipGoodsList="projectDetail.vipGoodsList" v-loading="inlineLoad" :projectId="project.projectId"></v-procourse>
        </el-tab-pane>
        <!-- 互动项目显示 -->
        <el-tab-pane label="线下课程目录" name="third" v-if="projectDetail.study_type =='3' ">
          <v-offlinedesc :project="project" :data="projectDetail"></v-offlinedesc>
        </el-tab-pane>
        <!-- 混合项目 和 自定制项目 显示 -->
        <el-tab-pane label="线下课程目录" name="third" v-if="project.types == '1'&&projectDetail.study_type =='2' ">
          <v-offlinedesc :project="project" :data="projectDetail"></v-offlinedesc>
        </el-tab-pane>
        <!-- 混合项目 和 自定制项目 显示 -->
        <el-tab-pane label="线下课程说明" name="third" v-if="project.types == '2'&&projectDetail.study_type =='2' ">
          <v-offlinedesc :project="project" :data="projectDetail"></v-offlinedesc>
        </el-tab-pane>
        <!-- <el-tab-pane label="用户评价" name="fifth" v-if="project.types == '1'">
          <v-proevaluate :evaluateData="evaluateData" :evaluateInfo="evaluateInfo" v-loading="evaluateDataLoad" :pagemsg="pagemsg" @handleCurrentChange="handleCurrentChange"></v-proevaluate>
        </el-tab-pane> -->
        <el-tab-pane label="常见问题" name="fourth" v-if="project.types == '1'">
          <v-proproblems v-loading="problemLoad" :projectDetail="projectDetail" ></v-proproblems>
        </el-tab-pane>
        <el-tab-pane label="资料下载" name="fiveth">
          <v-download :isConfig="isConfig"></v-download>
        </el-tab-pane>
      </el-tabs>
    </div>
    <v-pay v-if="showPayment" :projectDetail="projectDetail" @closePay="closePay"></v-pay>
  </div>

</template>

<script>
import { projectdetail, projectplayer } from "@/lib/v1_sdk/index";
import { mapActions, mapGetters } from "vuex";
import Detail from "@/pages/project/components/Detail";
import Procourse from "@/pages/project/components/ProjectCourse";
import Proevaluate from "@/pages/project/components/ProjectEvaluate";
import Commonproblems from "@/pages/project/components/CommonProblems";
import OfflineDesc from "@/pages/project/components/OfflineDesc";
import Pay from "@/pages/project/components/Pay";
import Download from '@/components/common/DataDownload.vue'

import { store as persistStore } from "~/lib/core/store";
import { message, matchSplits, setTitle } from "@/lib/util/helper";
export default {
  components: {
    "v-procourse": Procourse,
    "v-proevaluate": Proevaluate,
    "v-proproblems": Commonproblems,
    "v-detail": Detail,
    "v-offlinedesc": OfflineDesc,
    "v-pay": Pay,
    'v-download':Download
  },
  data () {
    return {
      isConfig:false,
      showPayment: false,
      customerBanner:
        "https://static-image.1911edu.com/customer-detail-banner.png",
      projectDetailLoad: true,
      inlineLoad: true,
      evaluateDataLoad: true,
      problemLoad: true,
      rateModel: 3,
      collectMsg: {
        isCollect: 0,
        types: 2
      },
      activeName: "first",
      loadMsg: false,
      addCollectionForm: {
        curriculumId: "",
        types: 2
      },
      project: {
        projectId: "1",
        types: 1
      },
      projectDetail: {
        study_type: "2"
      },
      pagemsg: {
        page: 1,
        pagesize: 3,
        total: 5
      },
      evaluateForm: {
        pages: 1,
        limits: 3,
        ids: "",
        types: 2,
        isRecommend: 2
      },
      evaluateInfo: {},
      evaluateData: []
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("auth", ["setProductsNum", "setKid", "setNid", "setTid"]),
    payment () {
      this.showPayment = true;
    },
    closePay () {
      this.showPayment = false;
    },
    // 获取项目详情
    getProjectInfo () {
      projectdetail.getProjectInfo(this.project).then(res => {
        if (res.status == 0) {
          this.projectDetail = res.data.curriculumProjectDetail;
          this.projectDetail.score = Number(this.projectDetail.score);
          this.projectDetailLoad = false;
          this.inlineLoad = false;
          if (res.data.curriculumProjectDetail.is_Collection) {
            this.collectMsg.isCollect = 1;
          } else {
            this.collectMsg.isCollect = 0;
          }
        } else if (res.status == 100100) {
          message(this, "error", res.msg);
        }
      });
    },
    // 获取项目评论
    getEvaluateList () {
      this.evaluateForm.ids = matchSplits("kid");
      projectdetail.getEvaluateList(this.evaluateForm).then(res => {
        if (res.status == 0) {
          this.evaluateData = res.data.evaluateList;
          this.evaluateInfo = res.data.totalEvaluateInfo;
          this.evaluateDataLoad = false;
          this.pagemsg.total = res.data.pageCount;
        }
      });
    },
    //评论分页
    handleCurrentChange (val) {
      this.pagemsg.page = val;
      this.evaluateForm.pages = val;
      this.evaluateForm.limits = 3;
      this.evaluateForm.ids = matchSplits("kid");
      projectdetail.getEvaluateList(this.evaluateForm).then(res => {
        if (res.status == 0) {
          this.evaluateData = res.data.evaluateList;
          this.evaluateInfo = res.data.totalEvaluateInfo;
          this.evaluateDataLoad = false;
        }
      });
    }
  },
  mounted () {
    this.project.projectId = matchSplits("kid");
    this.project.types = matchSplits("type");
    this.getProjectInfo();
    if (this.project.types === "1") {
      this.getEvaluateList();
    }

    this.problemLoad = false;
    this.$bus.$on("reProjectData", data => {
      this.getProjectInfo();
    });
  },
  updated () {
    setTitle("项目详情-1911学堂");
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bus.$emit("headerFooterShow");
    });
  }
};
</script>

