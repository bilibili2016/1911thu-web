<template>
  <div class="projectDetail">
    <div class="proHeader" :style="{'background-image':'url('+projectDetail.picture+')'}" v-loading="projectDetailLoad">
      <!-- 面包屑 收藏分享 projectDetail.picture-->
      <div class="headerTop clearfix">
        <div class="headerL fl">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/course/16?pid=1&xid=0' }">分类列表</el-breadcrumb-item>
            <el-breadcrumb-item>项目详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="headerR fr">
          <span :class="['collection',{'bag': this.collectMsg === true}]" @click="collection">
            <i class="el-icon-star-on"></i>
            <span>收藏 </span>
          </span>
          <!-- <span class="">
            <i class="el-icon-share"></i>
            <span>分享 </span>
          </span> -->
        </div>
      </div>
      <!-- 项目名 -->
      <h1>{{projectDetail.title}}</h1>
      <h3>{{projectDetail.deputy_title}}</h3>
      <h5>
        <span>{{projectDetail.study_time}} 课时</span>
        <i class="line"></i>
        <span>学习人数 {{projectDetail.study_number}}</span>
        <i class="line"></i>
        <el-rate v-model="projectDetail.score" disabled></el-rate>
      </h5>
      <div class="price clearfix">
        <div class="fl">
          <i>￥</i>{{projectDetail.present_price}}</div>
        <div class="fr" @click="addShoppingCart">
          <i>加入购物车</i>
          <span>
            <img src="http://papn9j3ys.bkt.clouddn.com/pro_cart.png" alt="">
          </span>
        </div>
        <div class="study" v-if="projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">开始学习</div>
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
import { mapActions } from 'vuex'
import Procourse from '@/pages/project/projectcourse'
import Proevaluate from '@/pages/project/projectevaluate'
import Commonproblems from '@/pages/project/commonproblems'
import { store as persistStore } from '~/lib/core/store'
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
      evaluateDataLoad: true,
      problemLoad: true,
      rateModel: 3,
      collectMsg: false,
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
      projectdetail.getProjectInfo(this.project).then(res => {
        this.projectDetail = res.data.curriculumProjectDetail
        this.collectMsg = res.data.curriculumProjectDetail.is_Collection
        this.projectDetail.score = Number(this.projectDetail.score)
        this.projectDetailLoad = false
        this.inlineLoad = false
      })
    },
    // 获取项目评论
    getEvaluateList() {
      projectdetail.getEvaluateList(this.evaluateForm).then(res => {
        this.evaluateData = res.data.evaluateList
        this.evaluateInfo = res.data.totalEvaluateInfo
        this.evaluateDataLoad = false
      })
    },
    // 项目加入购物车
    addShoppingCart() {
      this.shoppingForm.cartid = this.project.projectId
      projectdetail.addShopCart(this.shoppingForm).then(res => {
        if (res.status === 0) {
          // 添加购物车成功
          this.setProductsNum({
            pn: Number(res.data.curriculumNumber)
          })
        } else {
          this.$message({
            showClose: true,
            type: 'info',
            message: res.msg
          })
        }
        this.$router.push('/shop/shoppingcart')
      })
    },
    // 跳转到项目播放页
    goProjectPlayer() {
      window.open(window.location.origin + '/project/projectPlayer')
    },
    // 判断是收藏还是为收藏
    collection() {
      if (this.collectMsg === true) {
        this.deleteCollection()
      } else {
        this.addCollection()
      }
    },
    // 添加收藏
    addCollection() {
      this.addCollectionForm.curriculumId = persistStore.get('projectId')
      projectplayer.addCollection(this.addCollectionForm).then(response => {
        this.$message({
          showClose: true,
          type: 'success',
          message: '添加收藏成功'
        })
        this.collectMsg = true
      })
    },
    // 删除收藏
    deleteCollection() {
      this.addCollectionForm.curriculumId = persistStore.get('projectId')
      projectplayer.deleteCollection(this.addCollectionForm).then(response => {
        this.$message({
          showClose: true,
          type: 'success',
          message: '取消收藏成功'
        })
        this.collectMsg = false
      })
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.project.projectId = persistStore.get('projectId')
    this.getProjectInfo()
    this.getEvaluateList()

    this.problemLoad = false
  }
}
</script>

