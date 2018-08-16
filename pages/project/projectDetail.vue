<template>
  <div class="projectDetail" v-loading="projectDetailLoad">
    <div class="proHeader" :style="{'background-image':'url('+projectDetail.picture+')'}">

      <!-- 项目详情基本信息 -->
      <v-detail :projectDetail="projectDetail"></v-detail>
    </div>
    <!-- 介绍 线上课程 线下课程介绍 用户评价 常见问题-->
    <div class="proContent">
      <el-tabs v-model="activeName" class="proTab">
        <el-tab-pane label="介绍" name="first">
          <div class="detail" v-html="projectDetail.content"></div>
        </el-tab-pane>
        <el-tab-pane label="线上课程介绍" name="second">
          <v-procourse :projectCourseData="projectDetail.system" v-loading="inlineLoad"></v-procourse>
        </el-tab-pane>
        <el-tab-pane label="用户评价" name="third">
          <v-proevaluate :evaluateData="evaluateData" :evaluateInfo="evaluateInfo" v-loading="evaluateDataLoad"></v-proevaluate>
        </el-tab-pane>
        <el-tab-pane label="常见问题" name="fourth">
          <v-proproblems :problems="problems" v-loading="problemLoad"></v-proproblems>
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
        projectId: '1'
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
      evaluateData: [],
      problems: [
        {
          qustion: '购买课程之后如何加入学员群？',
          answer:
            '请购买课程后的同学务必添加学堂老师微信号：xuetangx1，备注“党政学位”，老师会在1～3个工作日内拉大家加入课程学员群。'
        },
        {
          qustion: '本课程是否有参考教材？',
          answer: '该课程没有参考教材，但每门课程都有专业的参考书目分享给大家。'
        },
        {
          qustion: '证书怎么申请？',
          answer:
            '并完成课后题目，即可获得单课证书。学完19门线上课程中的8门课程并完成课后题目，即可获得微学位大证书。'
        },
        {
          qustion: '学习有效期是多久？',
          answer: '本课程自购买之日起，一年之内长期有效'
        },
        {
          qustion: '能否开发票？',
          answer:
            '添加学堂老师微信号：xuetangx1，备注“微学位发票”，老师会在1～3个工作日内私聊联系。'
        },
        {
          qustion: '关于：新商科微学位与商科微学位',
          answer:
            '新商科微学位是商科微学位的升级版课程。新商科微学位于3月16日上午8:00正式上线，面向人群为：3月16日上午8:00以后报名学员。3月16日之前购买商科微学位学员依然享有原商科微学位的所有权益。'
        },
        {
          qustion: '课程购买之后还能退费吗？',
          answer: '线上课程属于虚拟产品，课程购买之后不予退费。谢谢谅解'
        }
      ]
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

