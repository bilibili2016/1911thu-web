<template>
  <div class="container courseDetail">
    <div class="main clearfix">
      <div class="topCard">
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
          <v-card :courseList="courseList" :config="config" :linkdata="linkseven" :privileMsg="privileMsg" :cardetails="courseList" @changePlayImg="changePlayImg"></v-card>
        </div>
      </div>
      <div class="bottomCard">
        <!-- 左侧的课程目录和介绍 -->
        <div class="content fl">
          <v-coursecatelog :activeName="activeName" :courseList="courseList" :loadMsg="loadMsg" :catalogs="catalogs" :privileMsg="privileMsg" :config="config" :changeImg="changeImg" :totalEvaluateInfo="totalEvaluateInfo" :commentator="commentator" :loadEvaluate="loadEvaluate" :pageCount="pageCount" :sumUserStart="sumUserStart" :pagemsg="pagemsg" @pagechange="handleCurrentChange"></v-coursecatelog>
        </div>
        <div style="width:345px" class="fr">
          <!-- 讲师介绍 -->
          <v-teacherintro v-loading="loadTeacher" :courseList="courseList" @handleLinkTeacher="handleLinkTeacher"></v-teacherintro>
          <!-- 课程评价-->
          <v-evaluatecase v-show="courseList.is_study != 0 && courseList.is_evaluate==0" :isClose="isClose" :courseList="courseList" @changeList="cbList" :config="config"> </v-evaluatecase>

        </div>
      </div>
    </div>
    <v-pay @closePay="closePayed"></v-pay>
    <v-backtop :data="showCheckedCourse"></v-backtop>
  </div>
</template>

<script>
import CustomCard from '@/pages/course/components/Card.vue'
import { coursedetail } from '~/lib/v1_sdk/index'
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { uniqueArray, matchSplits } from '@/lib/util/helper'
import BackToTop from '@/components/common/BackToTop.vue'
import Pay from '@/components/common/Pay.vue'
import EvaluateContent from '@/components/common/EvaluateContent.vue'
import EvaluateCase from '@/components/common/EvaluateCase.vue'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
import TeacherIntro from '@/pages/course/coursedetail/teacherIntro.vue'
import Collection from '@/components/common/Collection.vue'
import CourseCatalog from '@/pages/course/coursedetail/CourseCatalog.vue'
export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
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
    'v-coursecatelog': CourseCatalog
  },
  data() {
    return {
      evaluateLoading: true,
      BreadCrumb: {
        type: 'courseDetail',
        position: false, //是否显示当前位置
        text: '课程详情'
      },
      isClose: false, //评论组件是否有关闭按钮
      showCheckedCourse: false,
      activeName: 'second',
      textarea: '',
      rateModel: 5,
      loadTeacher: false,
      loadEvaluate: false,
      linkseven: 'player',
      catalogs: [],
      commentator: [],
      pageCount: null,
      config: {
        card_type: 'course'
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
      sumUserStart: 0,
      changeImg: {
        img: '',
        id: ''
      }
    }
  },
  watch: {
    $route(to, from) {
      // if (from.query.key) {
      //   if (to.query.key > from.query.key) {
      //     this.transitionName = 'slide-fade'
      //   } else {
      //     this.transitionName = 'slide-left'
      //   }
      // } else {
      //   this.transitionName = 'slide-fade'
      // }
    }
  },
  methods: {
    ...mapActions('auth', ['setIsCollection']),
    changePlayImg(img, id) {
      this.changeImg.img = img
      this.changeImg.id = id
    },
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
      this.addEvaluateForm.ids = matchSplit('kid')

      if (this.textarea.length < 100) {
        this.addEvaluateForm.evaluatecontent = this.textarea
      } else {
        this.$message({
          showClose: true,
          type: 'warning',
          message: '请输入少于100个字符！'
        })
        return false
      }
      this.addEvaluateForm.scores = this.rateModel
      this.addEvaluateForm.tag = this.addEvaluateForm.tag
        .toString()
        .replace(/,/g, '#')
      if (this.courseList.is_study) {
        coursedetail.addEvaluate(this.addEvaluateForm).then(response => {
          if (response.status === '100100') {
            this.$message({
              showClose: true,
              type: 'warning',
              message: response.msg
            })
          } else {
            this.addEvaluateForm.tag = []
            for (let item of this.btnData) {
              this.$set(item, 'isCheck', false)
            }
            this.$message({
              showClose: true,
              type: 'success',
              message: response.msg
            })
            this.getCourseDetail()
            this.getEvaluateList()
          }
        })
        // this.addEvaluateForm.tag = []
      } else {
        this.$message({
          showClose: true,
          type: 'warning',
          message: '您还没有观看过此课程，请先去观看吧！'
        })
      }
    },
    // 评论-评论查看更多-分页
    handleCurrentChange(val) {
      this.loadMsg = true
      this.pagemsg.page = val
      this.evaluateListForm.pages = val
      this.evaluateListForm.limits = 3
      this.evaluateListForm.ids = matchSplits('kid')
      this.evaluateLoading = true
      coursedetail.getEvaluateLists(this.evaluateListForm).then(response => {
        this.loadMsg = false
        this.evaluateLoading = false
        this.pagemsg.total = response.data.pageCount
        this.commentator = response.data.evaluateList
        window.scrollTo(0, 436)
      })
    },
    // 评论-获取评论列表
    getEvaluateList() {
      this.loadEvaluate = true
      this.evaluateListForm.ids = matchSplits('kid')

      return new Promise((resolve, reject) => {
        coursedetail.getEvaluateLists(this.evaluateListForm).then(response => {
          this.loadMsg = false
          this.pagemsg.total = response.data.pageCount
          this.pageCount = response.data.pageCount
          this.commentator = response.data.evaluateList

          this.totalEvaluateInfo = response.data.totalEvaluateInfo
          let totalEvaluateInfo = response.data.totalEvaluateInfo
          this.sumUserStart = Number(totalEvaluateInfo.totalScore)
          this.loadEvaluate = false
        })
      })
    },
    // 课程-获取课程详情
    getCourseDetail() {
      this.loadTeacher = true
      // this.kidForm.ids = persistStore.get('curriculumId')
      this.kidForm.ids = matchSplits('kid')

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
      this.kidForm.ids = matchSplits('kid')

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
      this.getdefaultForm.curriculumid = matchSplits('kid')
      coursedetail
        .getdefaultCurriculumCatalog(this.getdefaultForm)
        .then(response => {
          this.$router.replace(
            '/course/coursedetail' +
              '?kid=' +
              matchSplits('kid') +
              '&bid=' +
              response.data.defaultCurriculumCatalog.id +
              '&page=' +
              matchSplits('page')
          )
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
      this.kidForm.ids = matchSplits('kid')
      this.evaluateListForm.ids = matchSplits('kid')
      this.activeName = 'second'
    },
    //评论之后的回调
    cbList() {
      this.getCourseDetail()
      this.getEvaluateList()
    },
    // 支付弹框关闭的回调
    closePayed() {
      this.$bus.$emit('closePayed')
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
  },
  beforeRouteLeave(to, from, next) {
    // this.$bus.$emit('headerFooterShow')
    next(vm => {})
  }
}
</script>


