<template>
  <div class="projectDetail">
    <div class="proHeader" :style="{'background-image':'url('+projectDetail.picture+')'}" v-loading="projectDetailLoad">
      <!-- 面包屑 收藏分享 projectDetail.picture-->
      <div class="headerTop clearfix">
        <div class="headerL fl">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>分类列表</el-breadcrumb-item>
            <el-breadcrumb-item>项目详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="headerR fr">
          <span class="collection">
            <i class="el-icon-star-on"></i>
            <span>收藏 </span>
          </span>
          <span class="">
            <i class="el-icon-share"></i>
            <span>分享 </span>
          </span>
        </div>
      </div>
      <!-- 项目名 -->
      <h1>{{projectDetail.title}}</h1>
      <h3>{{projectDetail.deputy_title}}</h3>
      <h5>
        <span>{{projectDetail.study_time}} 课时</span>
        <i></i>
        <span>学习人数 {{projectDetail.study_number}}</span>
        <i></i>
        <el-rate v-model="projectDetail.score" disabled></el-rate>
      </h5>
      <div class="price clearfix">
        <div class="fl">
          <i>￥</i>{{projectDetail.present_price}}</div>
        <div class="fr" @click="addShoppingCart">
          <i>加入购物车</i>
          <span>
            <img src="~assets/images/pro_cart.png" alt="">
          </span>
        </div>
        <div class="study" v-if="projectDetail.curriculumProjectPrivilege">开始学习</div>
      </div>
    </div>
    <!-- 介绍 线上课程 线下课程介绍 用户评价 常见问题-->
    <div class="proContent">
      <el-tabs v-model="activeName" class="proTab">
        <el-tab-pane label="介绍" name="first">
          <div class="detail" v-html="projectDetail.content" v-loading="projectDetailLoad"></div>
        </el-tab-pane>
        <el-tab-pane label="线上课程介绍" name="second">
          <v-procourse :projectCourseData="projectDetail.system" v-loading="inlineLoad"></v-procourse>
        </el-tab-pane>
        <el-tab-pane v-if="projectDetail.study_type==='2'" label="线下课程介绍" name="third">
          <v-procourse :projectCourseData="projectCourseData" v-loading="underlineLoad"></v-procourse>
        </el-tab-pane>
        <el-tab-pane label="用户评价" name="fourth">
          <v-proevaluate :evaluateData="evaluateData" :evaluateInfo="evaluateInfo" v-loading="evaluateDataLoad"></v-proevaluate>
        </el-tab-pane>
        <el-tab-pane label="常见问题" name="fifth">
          <v-proproblems :problems="problems" v-loading="problemLoad"></v-proproblems>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { home } from '@/lib/v1_sdk/index'
import { projectDetail } from '@/lib/v1_sdk/project/projectDetail'
import { mapActions } from 'vuex'
import Procourse from '@/pages/project/projectcourse'
import Proevaluate from '@/pages/project/projectevaluate'
import Commonproblems from '@/pages/project/commonproblems'
export default {
  components: {
    'v-procourse': Procourse,
    'v-proevaluate': Proevaluate,
    'v-proproblems': Commonproblems
  },
  data() {
    return {
      projectDetailLoad: true,
      inlineLoad: true,
      underlineLoad: true,
      evaluateDataLoad: true,
      problemLoad: true,
      rateModel: 3,
      activeName: 'first',
      loadMsg: false,
      project: {
        projectId: '1'
      },
      projectDetail: {},
      shoppingForm: {
        type: 2,
        cartid: ''
      },
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
  methods: {
    ...mapActions('auth', ['setProductsNum', 'setKid', 'setNid', 'setTid']),
    // 获取项目详情
    getProjectInfo() {
      projectDetail.getProjectInfo(this.project).then(res => {
        this.projectDetail = res.data.curriculumProjectDetail
        this.projectDetail.score = Number(this.projectDetail.score)
        this.projectDetailLoad = false
        this.inlineLoad = false
        this.underlineLoad = false
      })
    },
    // 获取项目评论
    getEvaluateList() {
      projectDetail.getEvaluateList(this.evaluateForm).then(res => {
        this.evaluateData = res.data.evaluateList
        this.evaluateInfo = res.data.totalEvaluateInfo

        this.evaluateDataLoad = false
      })
    },
    // 检测购物车中是否存在学习的课程/项目
    addShoppingCart() {
      this.shoppingForm.cartid = this.project.projectId
      home.addShopCart(this.shoppingForm).then(res => {
        if (res.status === 0) {
          // 添加购物车成功
          res.data.productsNum
          this.setProductsNum({
            pn: res.data.productsNum
          })
        }
      })
    }
  },
  mounted() {
    this.getProjectInfo()
    this.getEvaluateList()

    this.problemLoad = false
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/project/projectDetail';
</style>