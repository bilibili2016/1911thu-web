<template>
  <div class="container">

    <div class="main clearfix">
      <div class="main-crumb">
        <div class="fl">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/course/pages/categorys' }">分类列表</el-breadcrumb-item>
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
            <img src="@/assets/images/wechatLogin.png" alt="">
            <h5>扫描二维码或关注“1911学堂”微信公众号</h5>
            <p>精彩好课，第一时间了解</p>
          </div>
        </div>
      </div>

      <!-- 讲师介绍 -->
      <div style="width:345px" class="fr">
        <div class="teacher ">
          <h4>讲师介绍</h4>
          <div class="personal">
            <img :src="courseList.head_img" alt="">
            <h5>{{courseList.teacher_name}}</h5>
            <h6>{{courseList.graduate}}</h6>
            <p>{{courseList.teacher_content}}</p>
          </div>
        </div>
        <!-- 评价 -->
        <div class="evaluate-tag">
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
                <el-button plain v-for="(item,index) in btnData" :key="index" @click="getBtnContent(item,index)" :class="{borderColor: borderIndex === index ? true : false }">
                  <!-- <span :class="{borderColor: borderIndex === index ? true : false }"> -->
                  {{item}}
                  <!-- {{item}}{{borderIndex === index ? true : false}} -->
                  <!-- </span> -->

                </el-button>
              </span>

            </div>
            <div class="area">
              <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </div>
            <div class="submit">
              <el-button type="primary" @click="addEvaluate()">提交</el-button>
            </div>
            <!-- 弹窗 -->
            <el-dialog title="报告问题" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
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
              <div class="pagination">
                <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="handleCurrentChange"></el-pagination>
              </div>
            </el-dialog>
          </div>
        </div>
        <!-- 用户评论 -->
        <div class="evaluate">
          <h4>用户评价
            <span @click="getMore">查看更多></span>
          </h4>
          <div v-loading="loadMsg">
            <div class="score">

              <span class="fl">{{evaluate.score}}</span>
              <el-rate disabled v-model="evaluate.rate" class="itemBox-rate fl"></el-rate>
              <span class="fr">{{evaluate.number}}人评价 好评度{{evaluate.praise}}</span>
            </div>
            <!-- <div>
              {{evaluate}}
            </div> -->
            <div class="commentator clearfix" v-for="(item,index) in commentator" :key="index">
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
      shareImg: require('~/assets/images/f.png'),
      shareImgc: require('~/assets/images/c.png'),
      value1: 5,
      linkseven: 'player',
      catalogs: [],
      teacher: {
        headImg: require('../../../assets/images/headImg.png'),
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
      config: {
        card_type: 'goodplay'
      },
      courseList: {},
      kidForm: {
        ids: null
      },
      evaluateListForm: {
        pages: 1,
        limits: 2,
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
        total: null
      },
      btnData: [],
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
      }
    }
  },
  methods: {
    handleClick() {},
    submit() {
      this.$message({
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
      this.evaluateListForm.limits = 2
      this.evaluateListForm.ids = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.getEvaluateLists(this.evaluateListForm).then(response => {
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
                type: 'warning',
                message: response.msg
              })
            } else {
              this.$message({
                type: 'success',
                message: response.msg
              })
            }
          })
        })
      } else {
        this.$message({
          type: 'warning',
          message: '您还没有观看过此课程，请先去观看吧！'
        })
      }
    },
    getBtnContent(val, index) {
      console.log(val, '这是val')
      console.log(index, '这是index')
      this.borderIndex = index
    },
    getCourseDetail() {
      this.kidForm.ids = persistStore.get('kid')
      return new Promise((resolve, reject) => {
        home.getCourseDetail(this.kidForm).then(response => {
          this.loadMsg = false
          this.courseList = response.data.curriculumDetail
          this.privileMsg = response.data.curriculumPrivilege
          this.content = response.data.curriculumPrivilege
        })
      })
    },
    // 获取评论列表
    getEvaluateList() {
      this.evaluateListForm.ids = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.getEvaluateLists(this.evaluateListForm).then(response => {
          this.loadMsg = false
          this.pagemsg.total = response.data.length
          this.commentator = response.data.evaluateList
        })
      })
    },
    getCourseList() {
      this.kidForm.ids = persistStore.get('kid')
      return new Promise((resolve, reject) => {
        home.getCourseList(this.kidForm).then(response => {
          this.catalogs = response.data.curriculumCatalogList
          for (let item of this.catalogs) {
            for (let i of item.childList) {
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
  .el-button {
    border-color: red !important;
  }
}
</style>
