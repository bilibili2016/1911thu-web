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
        <el-tabs v-model="activeName">
          <el-tab-pane label="介绍" name="first">
            <div class="detail descript" v-html="courseList.content" v-loading="loadMsg"></div>
          </el-tab-pane>
          <el-tab-pane label="目录" name="second">
            <v-line :catalogs="catalogs" :privileMsg="privileMsg"></v-line>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div style="width:345px" class="fr">
        <!-- 讲师介绍 -->
        <v-teacherintro v-loading="loadTeacher" :courseList="courseList"></v-teacherintro>
        <!-- <div class="teacher">
          <h4>讲师介绍</h4>
          <div class="personal clearfix">
            <img class="fl" :src="courseList.head_img" alt="" @click="goTeacherInfo(courseList.teacher_id)">
            <div class="fl">
              <h5 @click="goTeacherInfo(courseList.teacher_id)">{{courseList.teacher_name}}</h5>
              <h6>{{courseList.graduate}}</h6>
            </div>
            <p>{{courseList.teacher_content}}</p>
          </div>
        </div> -->
        <!-- 课程评价 -->
        <!-- v-show="courseList.is_study != 0 && courseList.is_evaluate==0 " -->
        <!-- 已经学习（1） -->
        <!-- {{courseList.is_study}} == {{courseList.is_evaluate}} -->

        <v-evaluatecase v-show="courseList.is_study != 0 && courseList.is_evaluate==0" :isClose="isClose" :courseList="courseList" @changeList="cbList"> </v-evaluatecase>
        <!-- 课程评价的弹窗 -->
        <div class="evaluate-tag shadow " v-show="dialogVisible ">
          <div class="personal ">
            <!-- 弹窗 -->
            <el-dialog title="课程评价 " :visible.sync="dialogVisible " width="30% " :before-close="handleClose ">
              <div v-loading="loadMsg " class="topDiv ">
                <!-- 用户评价内容组件 -->
                <v-evaluate :evaluteData="commentator " class="dialog-line "></v-evaluate>
              </div>
              <div class="pagination course-style ">
                <el-pagination :id="pagemsg.total " v-show="pagemsg.total!='0' " background layout="prev, pager, next " :page-size="pagemsg.pagesize " :page-count="pagemsg.pagesize " :current-page="pagemsg.page " :total="pagemsg.total " @current-change="handleCurrentChange "></el-pagination>
              </div>
            </el-dialog>
          </div>
        </div>
        <!-- 用户评论 列表-->
        <div class="evaluate " v-loading="loadEvaluate ">
          <h4>用户评价
            <span v-if="pageCount>3" @click="getMore">查看更多></span>
          </h4>
          <div v-loading="loadMsg">
            <div class="score">
              <span class="fl">{{totalEvaluateInfo.totalScore}}</span>
              <el-rate disabled v-model="sumUserStart" class="itemBox-rate fl"></el-rate>
              <span class="fr">{{totalEvaluateInfo.totalEvaluate}}人评价 好评度{{totalEvaluateInfo.evaluatePercent}}%</span>
            </div>
            <!-- 评价内容组件 -->
            <v-evaluate :evaluteData="commentators"></v-evaluate>
          </div>
        </div>
      </div>
    </div>
    <v-backtop :data="showCheckedCourse"></v-backtop>
  </div>
</template>

<script>
import CustomCard from '@/pages/course/components/Card.vue'
import CustomLine from '@/components/common/Line.vue'
import { coursedetail } from '~/lib/v1_sdk/index'
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { uniqueArray } from '@/lib/util/helper'
import BackToTop from '@/components/common/BackToTop.vue'
import EvaluateContent from '@/components/common/EvaluateContent.vue'
import EvaluateCase from '@/components/common/EvaluateCase.vue'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
import TeacherIntro from '@/pages/course/pages/teacherIntro.vue'
import Collection from '@/components/common/Collection.vue'
export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['kid', 'isCollection'])
  },
  components: {
    'v-backtop': BackToTop,
    'v-card': CustomCard,
    'v-line': CustomLine,
    'v-evaluate': EvaluateContent,
    'v-evaluatecase': EvaluateCase,
    'v-breadcrumb': BreadCrumb,
    'v-teacherintro': TeacherIntro,
    'v-collection': Collection
  },
  data() {
    return {
      BreadCrumb: {
        type: 'courseDetail',
        text: '课程详情'
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
        card_type: 'goodplay'
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
      collectMsg: 2,
      addCollectionForm: {
        curriculumId: null
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
      tidForm: {
        tids: ''
      },
      tagGroup: '',
      reTagBtn: [],
      configShare: {
        url: 'http://www.1911edu.com/',
        sites: ['qzone', 'qq', 'weibo', 'wechat'],
        source: 'http://www.1911edu.com/'
      },
      sumUserStart: null
    }
  },
  methods: {
    ...mapActions('auth', ['setTid', 'setIsCollection']),
    // 跳转老师详情页面
    goTeacherInfo(id) {
      this.tidForm.tids = id * 1
      this.setTid(this.tidForm)
      window.open(window.location.origin + '/home/components/teacher')
    },
    //标签-获取课程标签列表
    getEvaluateTags() {
      coursedetail.getEvaluateTags().then(response => {
        this.tagGroup = response.data.evaluateTags

        this.btnDatas = response.data.evaluateTags
        this.changeRate('5')
      })
    },
    // 标签-点击评价改变星级
    changeRate(val) {
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
    // 标签-点击获取标签内容
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
      this.addEvaluateForm.ids = persistStore.get('curriculumId')
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
      this.evaluateListForm.ids = persistStore.get('curriculumId')

      coursedetail.getEvaluateLists(this.evaluateListForm).then(response => {
        this.loadMsg = false
        this.pagemsg.total = response.data.pageCount
        this.commentator = response.data.evaluateList
      })
    },
    // 评论-获取评论列表
    getEvaluateList() {
      this.loadEvaluate = true
      this.evaluateListForm.ids = persistStore.get('curriculumId')
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
      done()
    },
    // 课程-获取课程详情
    getCourseDetail() {
      this.loadTeacher = true
      this.kidForm.ids = persistStore.get('curriculumId')

      coursedetail.getCourseDetail(this.kidForm).then(response => {
        this.loadMsg = false
        this.courseList = response.data.curriculumDetail
        persistStore.set('curriculumId', response.data.curriculumDetail.id)
        this.privileMsg = response.data.curriculumPrivilege
        this.content = response.data.curriculumPrivilege
        this.loadTeacher = false
        this.collectMsg = response.data.curriculumDetail.is_collection
      })
    },
    // 课程-获取课程列表
    getCourseList() {
      this.kidForm.ids = persistStore.get('curriculumId')
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
      this.getdefaultForm.curriculumid = persistStore.get('curriculumId')
      coursedetail
        .getdefaultCurriculumCatalog(this.getdefaultForm)
        .then(response => {
          persistStore.set(
            'catalogId',
            response.data.defaultCurriculumCatalog.id
          )
        })
    },
    // 收藏-判断是收藏还是未收藏
    collection() {
      if (this.isAuthenticated) {
        if (this.collectMsg === 1) {
          this.deleteCollection()
          this.collectMsg = 2
        } else {
          this.addCollection()
          this.collectMsg = 1
        }
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    // 收藏-添加收藏
    addCollection() {
      this.addCollectionForm.curriculumId = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        coursedetail.addCollection(this.addCollectionForm).then(response => {
          this.$message({
            showClose: true,
            type: 'success',
            message: '添加收藏成功'
          })
          this.collectMsg = 1
        })
      })
    },
    // 收藏-删除收藏
    deleteCollection() {
      this.addCollectionForm.curriculumId = persistStore.get('curriculumId')
      coursedetail.deleteCollection(this.addCollectionForm).then(response => {
        this.collectMsg = response.data.curriculumDetail.is_collection
        this.$message({
          showClose: true,
          type: 'success',
          message: '取消收藏成功'
        })
        this.collectMsg = 0
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
      this.kidForm.ids = this.kid
      this.evaluateListForm.ids = this.kid
      this.activeName = 'first'
      document.getElementsByClassName('headerBox')[0].style.display = 'inline'
      document.getElementsByClassName('footerBox')[0].style.display = 'inline'
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
      // this.getEvaluateTags()  //已提取到评论组件中调用
    }
  },
  mounted() {
    this.initAll()
  }
}
</script>


