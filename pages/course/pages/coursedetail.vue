<template>
  <div class="container">

    <div class="main clearfix">
      <div class="main-crumb">
        <div class="fl">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item @click.native="goCategory">分类列表</el-breadcrumb-item>
            <el-breadcrumb-item>课程详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="fr">
          <div class="collect">
            <div class="line-center">
              <span @click="collection" :class=" { bag: this.collectMsg === 1 }">
                <i class="el-icon-star-on"></i>
                <span>收藏 </span>
              </span>
              <span>
                <i class="el-icon-share"></i>
                <span> 分享 </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header" v-loading="loadMsg">
        <v-card :courseList="courseList" :config="config" :linkdata="linkseven" :privileMsg="privileMsg"></v-card>
      </div>
      <div class="content fl">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="介绍" name="first">
            <div class="detail" v-html="courseList.content" v-loading="loadMsg"></div>
          </el-tab-pane>
          <el-tab-pane label="目录" name="second">
            <v-line :catalogs="catalogs" :privileMsg="privileMsg"></v-line>
          </el-tab-pane>
        </el-tabs>
        <!-- 关注我们 -->
        <div class="attention">
          <div class="code">
            <img src="http://pam8iyw9q.bkt.clouddn.com/wechatLogin.png" alt="">
            <h5>扫描二维码或关注“1911学堂”微信公众号</h5>
            <p>精彩好课，第一时间了解</p>
          </div>
        </div>
      </div>

      <div style="width:345px" class="fr">
        <!-- 讲师介绍 -->
        <div class="teacher" v-loading="loadTeacher">
          <h4>讲师介绍</h4>
          <div class="personal">
            <img :src="courseList.head_img" alt="">
            <h5>{{courseList.teacher_name}}</h5>
            <h6>{{courseList.graduate}}</h6>
            <p>{{courseList.teacher_content}}</p>
          </div>
        </div>
        <!-- 评价 -->
        <div class="evaluate-tag" v-show="courseList.is_study">
          <h4>课程评价</h4>
          <div class="personal">
            <div class="title">请问该课程对您有帮忙吗？快来评个分吧！</div>

            <span class="rate">课程评分:</span>
            <span class="ratem">
              <el-rate v-model="rateModel"></el-rate>
            </span>
            <div class="bthgrop">
              <!-- borderIndex === index ? true : false -->
              <span>
                <div v-for="(item,index) in btnData" :key="index" @click="getBtnContent(item,index)" :class="{borderColor: borderIndex === index ? true : false }" class="detail-btngrounp">
                  {{item}}
                </div>
                <!-- <el-button plain v-for="(item,index) in btnDatas" :class="{borderColor: borderIndex === index ? true : false }">
                  {{item}}
                </el-button> -->
              </span>
            </div>
            <div class="area">
              <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </div>
            <div class="submit">
              <el-button type="primary" @click="addEvaluate()">提交</el-button>
            </div>
          </div>
        </div>

        <div class="evaluate-tag shadow" v-show="dialogVisible">
          <div class="personal">
            <!-- 弹窗 -->
            <el-dialog title="课程评价" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
              <div v-loading="loadMsg">
                <div v-for="(item,index) in commentator" :key="index" class="dialog-line">
                  <div class="commentator clearfix">
                    <img class="fl" :src="item.head_img" alt="">
                    <div class="fl">
                      <p style="margin-top:5px;">{{item.nick_name}}</p>
                      <p>{{item.create_time}}</p>
                    </div>
                    <div class="rates">
                      <el-rate disabled v-model="item.score" class="itemBox-rate fl"></el-rate>
                    </div>
                    <h5>{{item.evaluate_content}}</h5>
                  </div>
                </div>
              </div>
              <div class="pagination course-style">
                <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="handleCurrentChange"></el-pagination>
              </div>
            </el-dialog>
          </div>
        </div>

        <!-- 用户评论 -->
        <div class="evaluate" v-loading="loadEvaluate">
          <h4>用户评价
            <span @click="getMore">查看更多></span>
          </h4>
          <div v-loading="loadMsg">
            <div class="score">
              <!-- {{totalEvaluateInfo}} -->
              <span class="fl">{{totalEvaluateInfo.totalScore}}</span>
              <el-rate disabled v-model="totalEvaluateInfo.totalScore" class="itemBox-rate fl"></el-rate>
              <span class="fr">{{totalEvaluateInfo.totalEvaluate}}人评价 好评度{{totalEvaluateInfo.evaluatePercent}}%</span>
            </div>
            <div class="commentator clearfix" v-for="(item,index) in commentators" :key="index">
              <img class="fl" :src="item.head_img" alt="">
              <div class="fl">
                <p style="margin-top:5px;">{{item.nick_name}}</p>
                <p>{{item.create_time}}</p>
              </div>
              <div style="margin-top:10px;">
                <el-rate disabled v-model="item.score" class="itemBox-rate fr"></el-rate>
              </div>
              <h5>{{item.evaluate_content}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import CustomLine from '@/components/common/Line.vue'
import { other, home } from '~/lib/v1_sdk/index'
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['kid'])
  },
  components: {
    'v-card': CustomCard,
    'v-line': CustomLine
  },
  data() {
    return {
      activeName: 'second',
      dialogVisible: false,
      textarea: null,
      rateModel: null,
      loadTeacher: false,
      loadEvaluate: false,
      value1: 5,
      linkseven: 'player',
      catalogs: [],
      teacher: {
        teacherName: '莎良朋',
        degree: '华中科技大学博士',
        abstract:
          '目前着手于研究人工智能，精通Python编程和机器学习算法，主导过kaiterra全球天气污染智能预测系统的开发与部署，目前在做智能推荐系统的开发应用并且为相关公司提供解决方案。系统的开发应用。'
      },
      evaluate: {
        score: '9.8',
        rate: 5,
        number: '24',
        praise: '99%'
      },
      commentator: [],
      commentators: [],
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
        isRecommend: 2
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
        pagesize: 2,
        total: 5
      },
      btnData: [],
      btnDatas: [],
      borderIndex: 0,
      addEvaluateForm: {
        ids: '',
        evaluatecontent: '',
        scores: '',
        types: 1,
        tags: ''
      },
      evaluate: {
        eltnum: null
      },
      totalEvaluateInfo: {
        evaluatePercent: null,
        totalEvaluate: null,
        totalScore: null
      },
      defaultCatalogId: ''
    }
  },
  methods: {
    handleClick() {},
    goCategory() {
      this.$router.push('/course/pages/category')
      persistStore.set('cid', '1')
      persistStore.set('pid', '')
    },
    submit() {
      this.$message({
        showClose: true,
        type: 'success',
        message: '提交评价成功'
      })
    },
    // 点击评论查看更多
    getMore() {
      this.dialogVisible = true
    },
    // 评论查看更多-分页
    handleCurrentChange(val) {
      this.loadMsg = true
      this.pagemsg.page = val
      this.evaluateListForm.pages = val
      this.evaluateListForm.limits = 3
      this.evaluateListForm.ids = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.getEvaluateLists(this.evaluateListForm).then(response => {
          // console.log(response, 'response')
          this.loadMsg = false
          this.pagemsg.total = response.data.length
          this.commentator = response.data.evaluateList
        })
      })
    },
    // 关闭查看更多-评论弹框
    handleClose(done) {
      done()
    },
    //获取课程标签列表
    getEvaluateTags() {
      return new Promise((resolve, reject) => {
        home.getEvaluateTags().then(response => {
          // console.log(response)
          this.btnData = response.data.evaluateTags
          this.btnDatas = response.data.evaluateTags
        })
      })
    },
    // 提交评论接口
    addEvaluate() {
      this.addEvaluateForm.ids = persistStore.get('curriculumId')
      this.addEvaluateForm.evaluatecontent = this.textarea
      this.addEvaluateForm.scores = this.rateModel
      this.addEvaluateForm.tags = '内容精彩,内容生涩'

      if (this.courseList.is_study) {
        return new Promise((resolve, reject) => {
          home.addEvaluate(this.addEvaluateForm).then(response => {
            // console.log(response, '这是response')
            if (response.status === '100100') {
              this.$message({
                showClose: true,
                type: 'warning',
                message: response.msg
              })
            } else {
              this.$message({
                showClose: true,
                type: 'success',
                message: response.msg
              })
            }
          })
        })
      } else {
        this.$message({
          showClose: true,
          type: 'warning',
          message: '您还没有观看过此课程，请先去观看吧！'
        })
      }
    },
    getBtnContent(val, index) {
      // console.log(val, '这是val')
      // console.log(index, '这是index')
      this.borderIndex = index
    },
    getCourseDetail() {
      this.loadTeacher = true
      this.kidForm.ids = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.getCourseDetail(this.kidForm).then(response => {
          this.loadMsg = false
          // console.log(response, '获取详情的接口')
          this.courseList = response.data.curriculumDetail
          persistStore.set('curriculumId', response.data.curriculumDetail.id)

          this.privileMsg = response.data.curriculumPrivilege
          this.content = response.data.curriculumPrivilege
          this.loadTeacher = false
        })
      })
    },
    // 获取评论列表
    getEvaluateList() {
      this.loadEvaluate = true
      this.evaluateListForm.ids = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.getEvaluateLists(this.evaluateListForm).then(response => {
          // console.log(response, '获取评价')
          this.loadMsg = false
          this.totalEvaluateInfo = response.data.totalEvaluateInfo
          this.pagemsg.total = response.data.length
          this.commentator = response.data.evaluateList
          this.commentators = response.data.evaluateList
          this.totalEvaluateInfo = response.data.totalEvaluateInfo
          this.loadEvaluate = false
        })
      })
    },
    getCourseList() {
      this.kidForm.ids = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.getCourseList(this.kidForm).then(response => {
          this.catalogs = response.data.curriculumCatalogList
          for (let item of this.catalogs) {
            for (let i of item.childList) {
              i.second = i.video_time
              i.video_time = Math.round(i.video_time / 60)
            }
          }
        })
      })
    },
    // 判断是收藏还是未收藏
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
    // 添加收藏
    addCollection() {
      this.addCollectionForm.curriculumId = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.addCollection(this.addCollectionForm).then(response => {
          this.$message({
            showClose: true,
            type: 'success',
            message: '添加收藏成功'
          })
          this.collectMsg = 1
        })
      })
    },
    // 删除收藏
    deleteCollection() {
      this.addCollectionForm.curriculumId = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.deleteCollection(this.addCollectionForm).then(response => {
          // this.collectMsg = response.data.curriculumDetail.is_collection
          this.$message({
            showClose: true,
            type: 'success',
            message: '取消收藏成功'
          })
          this.collectMsg = 0
        })
      })
    },
    getdefaultCurriculumCatalog() {
      this.getdefaultForm.curriculumid = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.getdefaultCurriculumCatalog(this.getdefaultForm).then(response => {
          // console.log(response.data.defaultCurriculumCatalog.id, 'catalogId')
          persistStore.set(
            'catalogId',
            response.data.defaultCurriculumCatalog.id
          )
        })
      })
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.kidForm.ids = this.kid
    this.evaluateListForm.ids = this.kid
    this.activeName = 'first'
    this.getCourseDetail()
    this.getEvaluateList()
    this.getCourseList()
    this.getdefaultCurriculumCatalog()
    this.getEvaluateTags()
  }
}
</script>

<style scoped lang="scss">
.bag {
  color: #732eaf !important;
}
.pagination {
  margin-top: 50px;
}
.borderColor {
  border-color: #6417a6 !important;
}
.course-style {
  margin-top: 80px;
}
.detail-btngrounp {
  float: left;
  padding: 6px 11px;
  font-size: 12px;
  border-radius: 4px;
  margin: 10px 7px 0px 0px;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
}
</style>
