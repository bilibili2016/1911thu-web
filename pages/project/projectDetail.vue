<template>
  <div class="projectDetail" v-loading="projectDetailLoad">
    <!-- <div class="proHeader" :style="{'background-image':'url('+projectDetail.picture+')'}"> -->
    <div class="proHeader">
      <div class="proHeader-mask"></div>
      <img class="proHeader-img" :src="projectDetail.picture" alt="">
      <!-- 项目详情基本信息 -->
      <v-detail :projectDetail="projectDetail" class="proHeader-detail"></v-detail>
    </div>
    <!-- 介绍 线上课程 线下课程介绍 用户评价 常见问题-->
    <div class="proContent">
      <el-tabs v-model="activeName" class="proTab">
        <el-tab-pane label="介绍" name="first">
          <div class="detail" v-html="projectDetail.content"></div>
        </el-tab-pane>
        <el-tab-pane label="线上课程介绍" name="second">
          <v-procourse :projectCourseData="projectDetail.system" v-loading="inlineLoad" :id="project.projectId"></v-procourse>
        </el-tab-pane>
        <el-tab-pane label="用户评价" name="third">
          <v-proevaluate :evaluateData="evaluateData" :evaluateInfo="evaluateInfo" v-loading="evaluateDataLoad"></v-proevaluate>
        </el-tab-pane>
        <el-tab-pane label="常见问题" name="fourth">
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
import { store as persistStore } from '~/lib/core/store'
import { splitUrl, message } from '@/lib/util/helper'
export default {
  components: {
    'v-procourse': Procourse,
    'v-proevaluate': Proevaluate,
    'v-proproblems': Commonproblems,
    'v-detail': Detail
  },
  data() {
    return {
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
    this.project.projectId = splitUrl(0, 1)
    this.getProjectInfo()
    this.getEvaluateList()

    this.problemLoad = false
  }
}
</script>

