<template>
  <div class="container courseDetail">
    <div class="main clearfix">
      <!-- 面包屑 收藏分享 -->
      <div class="main-crumb">
        <div class="fl">
          <!-- 面包屑组件 -->
          <v-breadcrumb :config="BreadCrumb"></v-breadcrumb>
        </div>
        <div class="fr">
          <!-- 收藏分享 -->
          <v-collection :collectData="collectMsg"></v-collection>
        </div>
      </div>
      <!-- 顶部的card -->
      <div class="main-header" v-loading="loadMsg">
        <v-card :courseList="courseList" :config="config" :linkdata="linkseven" :privileMsg="privileMsg" :cardetails="courseList"></v-card>
      </div>
      <!-- 左侧的课程目录和介绍 -->
      <div class="content fl">
        <v-coursecatelog :activeName="activeName" :courseList="courseList" :loadMsg="loadMsg" :catalogs="catalogs" :privileMsg="privileMsg" :config="config"></v-coursecatelog>
      </div>
      <div style="width:345px" class="fr">
        <!-- 讲师介绍 -->
        <v-teacherintro v-loading="loadTeacher" :courseList="courseList" @handleLinkTeacher="handleLinkTeacher"></v-teacherintro>
        <!-- 课程评价-->
        <v-evaluatecase v-show="courseList.is_study != 0 && courseList.is_evaluate==0" :isClose="isClose" :courseList="courseList" @changeList="cbList" :config="config"> </v-evaluatecase>
        <!-- 用户评价  查看更多 -->
        <v-evaluatedialog :dialogVisible="dialogVisible" :commentator="commentator" :pagemsg="pagemsg" @pagechange="handleCurrentChange" @handleClose="handleClose"></v-evaluatedialog>
        <!-- 用户评论 列表-->
        <v-userevaluate :totalEvaluateInfo="totalEvaluateInfo" :commentators="commentators" :loadEvaluate="loadEvaluate" :pageCount="pageCount" :sumUserStart="sumUserStart" @more="getMore"></v-userevaluate>
      </div>
    </div>
    <v-pay></v-pay>
    <v-backtop :data="showCheckedCourse"></v-backtop>
  </div>
</template>

<script>
import CustomCard from '@/pages/course/components/Card.vue'
import { coursedetail } from '~/lib/v1_sdk/index'
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { uniqueArray, splitUrl } from '@/lib/util/helper'
import BackToTop from '@/components/common/BackToTop.vue'
import Pay from '@/components/common/Pay.vue'
import EvaluateContent from '@/components/common/EvaluateContent.vue'
import EvaluateCase from '@/components/common/EvaluateCase.vue'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
import TeacherIntro from '@/pages/course/coursedetail/teacherIntro.vue'
import Collection from '@/components/common/Collection.vue'
import UserEvaluate from '@/pages/course/coursedetail/UserEvaluate.vue'
import EvaluateDialog from '@/pages/course/coursedetail/EvaluateDialog.vue'
import CourseCatalog from '@/pages/course/coursedetail/CourseCatalog.vue'
import { message } from '@/lib/util/helper'
export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
    // ...mapState('auth', ['kid', 'isCollection'])
  },
  components: {
    'v-backtop': BackToTop,
    'v-pay': Pay,
    'v-card': CustomCard,
    'v-evaluate': EvaluateContent,
    'v-evaluatecase': EvaluateCase,
    'v-breadcrumb': BreadCrumb,
    'v-teacherintro': TeacherIntro,
    'v-collection': Collection,
    'v-userevaluate': UserEvaluate,
    'v-evaluatedialog': EvaluateDialog,
    'v-coursecatelog': CourseCatalog
  },
  data() {
    return {
      BreadCrumb: {
        type: 'courseDetail',
        text: '课程详情',
        project: '项目详情'
      },
      isClose: false, //评论组件是否有关闭按钮
      showCheckedCourse: false,
      activeName: 'second',
      dialogVisible: false,
      textarea: '',
      rateModel: 5,
      loadTeacher: false,
      loadEvaluate: false,
      linkseven: 'player',
      catalogs: [],
      commentator: [],
      commentators: [],
      pageCount: null,
      config: {
        card_type: 'project'
      },
      courseList: {},
      kidForm: {
        ids: null
      },
      evaluateListForm: {
        pages: 1,
        limits: 3,
        ids: '',
        types: 1,
        isRecommend: ''
      },
      privileMsg: true,
      collectMsg: {
        types: 1,
        isCollect: 0
      },
      addCollectionForm: {
        curriculumId: null,
        types: 1
      },
      getdefaultForm: {
        curriculumid: ''
      },
      loadMsg: true,
      pagemsg: {
        page: 1,
        pagesize: 3,
        total: 5
      },
      btnData: [],
      btnDatas: [],
      borderIndex: 7,
      addEvaluateForm: {
        ids: '',
        evaluatecontent: '',
        scores: '',
        types: 1,
        tag: []
      },
      evaluate: {
        eltnum: null
      },
      totalEvaluateInfo: {
        evaluatePercent: null,
        totalEvaluate: null,
        totalScore: null
      },
      defaultCatalogId: '',
      tagGroup: '',
      reTagBtn: [],
      configShare: {
        url: 'http://www.1911edu.com/',
        sites: ['qzone', 'qq', 'weibo', 'wechat'],
        source: 'http://www.1911edu.com/'
      },
      sumUserStart: 0
    }
  },
  methods: {
    ...mapActions('auth', ['setIsCollection']),
    // 跳转老师详情
    handleLinkTeacher(item) {
      window.open(window.location.origin + '/home/teacher/' + item)
    },
    //标签 - 获取课程标签列表
    getEvaluateTags() {
      coursedetail.getEvaluateTags().then(response => {
        this.tagGroup = response.data.evaluateTags
        this.btnDatas = response.data.evaluateTags
        this.handleChangeRate('5')
      })
    },
    // 标签 - 点击评价改变星级
    handleChangeRate(val) {
      this.reTagBtn = []
      this.tagGroup[val].map((item, i) => {
        let obj = new Object()
        obj.value = item
        obj.index = i
        obj.isCheck = false
        this.reTagBtn.push(obj)
      })
      this.btnData = this.reTagBtn
      this.addEvaluateForm.tag = []
    },
    // 标签 - 点击获取标签内容
    getBtnContent(val, index) {
      if (val.isCheck === true) {
        this.$set(val, 'isCheck', false)
        for (var i = 0; i < this.addEvaluateForm.tag.length; i++) {
          if (this.addEvaluateForm.tag[i] === val.value) {
            this.addEvaluateForm.tag.splice(i, 1)
          }
        }
      } else {
        this.$set(val, 'isCheck', true)
        this.addEvaluateForm.tag.push(val.value)
        this.addEvaluateForm.tag = this.uniqueArray(this.addEvaluateForm.tag)
      }
    },
    // 评论-提交评论接口
    addEvaluate() {
      // this.addEvaluateForm.ids = persistStore.get('curriculumId')
      this.addEvaluateForm.ids = splitUrl(0, 1)

      if (this.textarea.length < 100) {
        this.addEvaluateForm.evaluatecontent = this.textarea
      } else {
        message(this, 'warning', '请输入少于100个字符！')
        return false
      }
      this.addEvaluateForm.scores = this.rateModel
      this.addEvaluateForm.tag = this.addEvaluateForm.tag
        .toString()
        .replace(/,/g, '#')
      if (this.courseList.is_study) {
        coursedetail.addEvaluate(this.addEvaluateForm).then(response => {
          if (response.status === '100100') {
            message(this, 'warning', response.msg)
          } else {
            this.addEvaluateForm.tag = []
            for (let item of this.btnData) {
              this.$set(item, 'isCheck', false)
            }
            message(this, 'success', response.msg)
            this.getCourseDetail()
            this.getEvaluateList()
          }
        })
        // this.addEvaluateForm.tag = []
      } else {
        message(this, 'warning', '您还没有观看过此课程，请先去观看吧！')
      }
    },
    // 评论-点击评论查看更多
    getMore() {
      this.dialogVisible = true
      this.handleCurrentChange(1)
    },
    // 评论-评论查看更多-分页
    handleCurrentChange(val) {
      this.loadMsg = true
      this.pagemsg.page = val
      this.evaluateListForm.pages = val
      this.evaluateListForm.limits = 3
      // this.evaluateListForm.ids = persistStore.get('curriculumId')
      this.evaluateListForm.ids = splitUrl(0, 1)

      coursedetail.getEvaluateLists(this.evaluateListForm).then(response => {
        this.loadMsg = false
        this.pagemsg.total = response.data.pageCount
        this.commentator = response.data.evaluateList
      })
    },
    // 评论-获取评论列表
    getEvaluateList() {
      this.loadEvaluate = true
      // this.evaluateListForm.ids = persistStore.get('curriculumId')
      this.evaluateListForm.ids = splitUrl(0, 1)

      return new Promise((resolve, reject) => {
        coursedetail.getEvaluateLists(this.evaluateListForm).then(response => {
          this.loadMsg = false
          this.pagemsg.total = response.data.pageCount
          this.pageCount = response.data.pageCount
          this.commentator = response.data.evaluateList
          this.commentators = response.data.evaluateList
          this.totalEvaluateInfo = response.data.totalEvaluateInfo
          let totalEvaluateInfo = response.data.totalEvaluateInfo
          this.sumUserStart = Number(totalEvaluateInfo.totalScore)
          this.loadEvaluate = false
        })
      })
    },
    // 评论-关闭查看更多-评论弹框
    handleClose(done) {
      this.dialogVisible = false
    },
    // 课程-获取课程详情
    getCourseDetail() {
      this.loadTeacher = true
      // this.kidForm.ids = persistStore.get('curriculumId')
      this.kidForm.ids = splitUrl(0, 1)

      coursedetail.getCourseDetail(this.kidForm).then(response => {
        this.loadMsg = false
        this.courseList = response.data.curriculumDetail
        // persistStore.set('curriculumId', response.data.curriculumDetail.id)
        this.privileMsg = response.data.curriculumPrivilege

        this.content = response.data.curriculumPrivilege
        this.loadTeacher = false
        this.collectMsg.isCollect = response.data.curriculumDetail.is_collection
      })
    },
    // 课程-获取课程列表
    getCourseList() {
      // this.kidForm.ids = persistStore.get('curriculumId')
      this.kidForm.ids = splitUrl(0, 1)

      coursedetail.getCourseList(this.kidForm).then(response => {
        this.catalogs = response.data.curriculumCatalogList
        for (let item of this.catalogs) {
          for (let i of item.childList) {
            i.second = i.video_time
            i.video_time = Math.round(i.video_time / 60)
          }
        }
      })
    },
    // 课程-获取默认播放信息
    getdefaultCurriculumCatalog() {
      // this.getdefaultForm.curriculumid = persistStore.get('curriculumId')
      this.getdefaultForm.curriculumid = splitUrl(0, 1)

      coursedetail
        .getdefaultCurriculumCatalog(this.getdefaultForm)
        .then(response => {
          this.$router.push(
            '/course/detail' +
              '?kid=' +
              splitUrl(0, 1) +
              '&bid=' +
              response.data.defaultCurriculumCatalog.id
          )
          // persistStore.set(
          //   'catalogId',
          //   response.data.defaultCurriculumCatalog.id
          // )
        })
    },
    // 分享 默认设置
    // shareDefault() {
    //   var $config = {
    //     url: 'http://www.11911edu.com/'
    //   }
    //   socialShare('.social-share', $config)
    // },
    // 初始化默认data
    initData() {
      // this.kidForm.ids = this.kid
      //  this.evaluateListForm.ids = this.kid
      this.kidForm.ids = splitUrl(0, 1)
      this.evaluateListForm.ids = splitUrl(0, 1)

      this.activeName = 'second'
    },
    //评论之后的回调
    cbList() {
      this.getCourseDetail()
      this.getEvaluateList()
    },
    //拉取服务器数据 初始化所有方法
    initAll() {
      this.initData()
      // this.shareDefault()
      this.getCourseDetail()
      this.getEvaluateList()
      this.getCourseList()
      this.getdefaultCurriculumCatalog()
      // 获取 评论列表
      // this.getEvaluateTags() //已提取到评论组件中调用
    }
  },
  mounted() {
    this.initAll()
  },
  watch: {
    //在当前页面进行登录操作更新状态
    isAuthenticated(val) {
      this.getCourseDetail()
    }
  }
}
</script>


