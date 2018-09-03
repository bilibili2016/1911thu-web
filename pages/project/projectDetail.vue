<template>
  <div class="projectDetail" v-loading="projectDetailLoad">
    <!-- <div class="proHeader" :style="{'background-image':'url('+projectDetail.picture+')'}"> -->
    <div class="proHeader">
      <div class="proHeader-mask"></div>
      <img class="proHeader-img" :src="projectDetail.study_picture" alt="">
      <!-- 项目详情基本信息 -->
      <v-detail :projectDetail="projectDetail" :projectType="project" class="proHeader-detail"></v-detail>
    </div>
    <!-- 介绍 线上课程 线下课程介绍 用户评价 常见问题-->
    <div class="proContent">
      <el-tabs v-model="activeName" class="proTab">
        <el-tab-pane label="介绍" name="first">
          <div class="detail" v-html="projectDetail.content" v-if="project.types === '1'"></div>
          <div class="introduction" v-html="projectDetail.introduction" v-if="project.types === '2'"></div>
        </el-tab-pane>
        <el-tab-pane label="线上课程目录" name="second">
          <v-procourse :projectCourseData="projectDetail.system" v-loading="inlineLoad" :projectId="project.projectId"></v-procourse>
        </el-tab-pane>
        <!-- 定制项目并且项目类型为混合模式显示 -->
        <el-tab-pane label="线下课程说明" name="third" v-if="project.types === '2' &&projectDetail.study_type==='2' ">
          <v-offlinedesc></v-offlinedesc>
        </el-tab-pane>
        <el-tab-pane label="用户评价" name="fifth" v-if="project.types === '1'">
          <v-proevaluate :evaluateData="evaluateData" :evaluateInfo="evaluateInfo" v-loading="evaluateDataLoad"></v-proevaluate>
        </el-tab-pane>
        <el-tab-pane label="常见问题" name="fourth" v-if="project.types === '1'">
          <v-proproblems v-loading="problemLoad"></v-proproblems>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { projectdetail, projectplayer } from '@/lib/v1_sdk/index'
import { mapActions, mapGetters } from 'vuex'
import Detail from '@/pages/project/components/Detail'
import Procourse from '@/pages/project/components/ProjectCourse'
import Proevaluate from '@/pages/project/components/ProjectEvaluate'
import Commonproblems from '@/pages/project/components/CommonProblems'
import OfflineDesc from '@/pages/project/components/OfflineDesc'
import { store as persistStore } from '~/lib/core/store'
import { message, matchSplits } from '@/lib/util/helper'
export default {
  components: {
    'v-procourse': Procourse,
    'v-proevaluate': Proevaluate,
    'v-proproblems': Commonproblems,
    'v-detail': Detail,
    'v-offlinedesc': OfflineDesc
  },
  data() {
    return {
      customerBanner:
        'http://papn9j3ys.bkt.clouddn.com/customer-detail-banner.png',
      projectDetailLoad: true,
      inlineLoad: true,
      evaluateDataLoad: true,
      problemLoad: true,
      rateModel: 3,
      collectMsg: {
        isCollect: 0,
        types: 2
      },
      activeName: 'first',
      loadMsg: false,
      addCollectionForm: {
        curriculumId: '',
        types: 2
      },
      project: {
        projectId: '1',
        types: 1
      },
      projectDetail: {},

      evaluateForm: {
        pages: '',
        limits: '',
        ids: 2,
        types: 2,
        isRecommend: 2
      },
      evaluateInfo: {},
      evaluateData: []
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['setProductsNum', 'setKid', 'setNid', 'setTid']),
    // 获取项目详情
    getProjectInfo() {
      projectdetail.getProjectInfo(this.project).then(res => {
        this.projectDetail = res.data.curriculumProjectDetail
        this.projectDetail.score = Number(this.projectDetail.score)
        this.projectDetailLoad = false
        this.inlineLoad = false
        if (res.data.curriculumProjectDetail.is_Collection) {
          this.collectMsg.isCollect = 1
        } else {
          this.collectMsg.isCollect = 0
        }
      })
    },
    // 获取项目评论
    getEvaluateList() {
      projectdetail.getEvaluateList(this.evaluateForm).then(res => {
        this.evaluateData = res.data.evaluateList
        this.evaluateInfo = res.data.totalEvaluateInfo
        this.evaluateDataLoad = false
      })
    }
  },
  mounted() {
    this.project.projectId = matchSplits('kid')
    this.project.types = matchSplits('type')
    this.getProjectInfo()
    if (this.project.types === '1') {
      this.getEvaluateList()
    }

    this.problemLoad = false
  }
}
</script>

