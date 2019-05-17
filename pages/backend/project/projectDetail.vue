<template>
  <div class="projectDetail" v-loading="projectDetailLoad">
    <div class="proHeader">
      <div class="proHeader-mask"></div>
      <img class="proHeader-img" :src="projectDetail.study_picture" alt>
      <!-- 项目详情基本信息 -->
      <v-detail :projectDetail="projectDetail" :projectType="project" class="proHeader-detail"></v-detail>
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
        <el-tab-pane label="常见问题" name="fourth" v-if="project.types == '1'">
          <v-proproblems v-loading="problemLoad" :projectDetail="projectDetail"></v-proproblems>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { projectdetail, projectplayer, previewapi } from '@/lib/v1_sdk/index'
import { mapActions, mapGetters } from 'vuex'
import Detail from '@/pages/backend/project/components/Detail'
import Procourse from '@/pages/backend/project/components/ProjectCourse'
import Proevaluate from '@/pages/backend/project/components/ProjectEvaluate'
import Commonproblems from '@/pages/backend/project/components/CommonProblems'
import OfflineDesc from '@/pages/backend/project/components/OfflineDesc'
import { store as persistStore } from '~/lib/core/store'
import { message, matchSplits, setTitle } from '@/lib/util/helper'
export default {
  components: {
    'v-procourse': Procourse,
    'v-proevaluate': Proevaluate,
    'v-proproblems': Commonproblems,
    'v-detail': Detail,
    'v-offlinedesc': OfflineDesc
  },
  data () {
    return {
      customerBanner:
        'https://static-image.1911edu.com/customer-detail-banner.png',
      projectDetailLoad: true,
      inlineLoad: true,
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
      projectDetail: {
        study_type: '2'
      },
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['setProductsNum', 'setKid', 'setNid', 'setTid']),
    // 获取项目详情
    getProjectInfo () {
      previewapi.getProjectInfo(this.project).then(res => {
        if (res.status == 0) {
          this.projectDetail = res.data.curriculumProjectDetail
          this.projectDetail.score = Number(this.projectDetail.score)
          this.projectDetailLoad = false
          this.inlineLoad = false
          if (res.data.curriculumProjectDetail.is_Collection) {
            this.collectMsg.isCollect = 1
          } else {
            this.collectMsg.isCollect = 0
          }
        } else if (res.status == 100100) {
          message(this, 'error', res.msg)
        }
      })
    },
  },
  mounted () {
    this.project.projectId = matchSplits('kid')
    this.project.types = matchSplits('type')
    this.getProjectInfo()

    this.problemLoad = false
    this.$bus.$on('reProjectData', data => {
      this.getProjectInfo()
    })
  },
  updated () {
    setTitle('项目详情-1911学堂')
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bus.$emit('backendHeaderShow')
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$bus.$emit('backendHeaderHide')
    next()
  }
}
</script>

