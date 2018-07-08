<template>
  <div class="container">

    <div class="main clearfix">
      <div class="main-crumb">
        <div class="fl">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <!-- <el-breadcrumb-item @click.native="goCategory">分类列表</el-breadcrumb-item> -->
            <el-breadcrumb-item>课程详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="fr">
          <div class="collect">
            <div class="line-center">
              <span @click="collection" :class=" { bag: collectMsg === 1}">
                <i class="el-icon-star-on"></i>
                <!-- {{isCollection}} -->
                <span>收藏 </span>
              </span>
              <span>
                <i class="el-icon-share"></i>
                <span> 分享 </span>
                <!-- <div class="social-share" data-sites="weibo,qq,tencent,wechat" style="z-index:88888;margin-top:200px;"></div> -->
                <div class="shareIcons">
                  <div class="social-share" data-sites="weibo,qq,wechat" style=""></div>
                </div>

              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header" v-loading="loadMsg">
        <v-card :courseList="courseList" :config="config" :linkdata="linkseven" :privileMsg="privileMsg" :cardetails="courseList"></v-card>
      </div>
      <div class="content fl">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="介绍" name="first">
            <div class="detail descript" v-html="courseList.content" v-loading="loadMsg"></div>
          </el-tab-pane>
          <el-tab-pane label="目录" name="second">
            <v-line :catalogs="catalogs" :privileMsg="privileMsg"></v-line>
          </el-tab-pane>
        </el-tabs>
        <!-- 关注我们 -->
        <!-- <div class="attention">
          <div class="code">
            <img src="http://pam8iyw9q.bkt.clouddn.com/wechatLogin.png" alt="">
            <h5>扫描二维码，下载“1911学堂”APP</h5>
            <p>精彩好课，第一时间了解</p>
          </div>
        </div> -->
      </div>

      <div style="width:345px" class="fr">
        <!-- 讲师介绍 -->
        <div class="teacher" v-loading="loadTeacher">
          <h4>讲师介绍</h4>
          <div class="personal">
            <img :src="courseList.head_img" alt="" @click="goTeacherInfo(courseList.teacher_id)">
            <h5 @click="goTeacherInfo(courseList.teacher_id)">{{courseList.teacher_name}}</h5>
            <h6>{{courseList.graduate}}</h6>
            <p>{{courseList.teacher_content}}</p>
          </div>
        </div>
        <!-- 评价 -->
        <!-- v-show="courseList.is_study != 0 && courseList.is_evaluate==0" -->
        <!--  -->
        <!-- v-show="courseList.is_study != 0 && courseList.is_evaluate==0 " -->

        <div class="evaluate-tag" v-show="courseList.is_study != 0 && courseList.is_evaluate==0 ">
          <h4>课程评价</h4>
          <div class="personal">
            <div class="title">请问该课程对您有帮忙吗？快来评个分吧！</div>
            <span class="rate">课程评分:</span>
            <span class="ratem">
              <el-rate v-model="rateModel" @change="changeRate"></el-rate>
            </span>
            <div class="bthgrop">
              <span>
                <div v-for="(item,index) in btnData" :key="index" @click="getBtnContent(item,index)" :class="{borderColor: item.isCheck}" class="detail-btngrounp">
                  {{item.value}}
                </div>
                <input type="text">
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
                      <p style="margin:5px 0 8px;">{{item.nick_name}}</p>
                      <p class="time">{{item.create_time}}</p>
                    </div>
                    <div class="rates">
                      <el-rate disabled v-model="item.score" class="itemBox-rate fl"></el-rate>
                    </div>
                    <h5 v-if="item.tags ===''">{{item.evaluate_content}}</h5>
                    <h5 v-else>{{item.tags}}，{{item.evaluate_content}}</h5>
                  </div>
                </div>
              </div>
              <div class="pagination course-style">
                <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="handleCurrentChange"></el-pagination>
              </div>
            </el-dialog>
          </div>
        </div>

        <!-- 用户评论 -->
        <div class="evaluate" v-loading="loadEvaluate">
          <h4>用户评价
            <span v-if="pageCount>3" @click="getMore">查看更多></span>
          </h4>
          <div v-loading="loadMsg">
            <div class="score">
              <span class="fl">{{totalEvaluateInfo.totalScore}}</span>
              <el-rate disabled v-model="totalEvaluateInfo.totalScore" class="itemBox-rate fl"></el-rate>
              <span class="fr">{{totalEvaluateInfo.totalEvaluate}}人评价 好评度{{totalEvaluateInfo.evaluatePercent}}%</span>
            </div>
            <div class="commentator clearfix" v-for="(item,index) in commentators" :key="index" v-if="index<3">
              <img class="fl" :src="item.head_img" alt="">
              <div class="fl">
                <p style="margin:3px 0 8px;">{{item.nick_name}}</p>
                <p class="time">{{item.create_time}}</p>
              </div>
              <div style="margin-top:10px;">
                <el-rate disabled v-model="item.score" class="itemBox-rate fr"></el-rate>
              </div>
              <h5 v-if="item.tags ===''">{{item.evaluate_content}}</h5>
              <h5 v-else>{{item.tags}}，{{item.evaluate_content}}</h5>
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
    ...mapState('auth', ['kid', 'isCollection'])
  },
  components: {
    'v-card': CustomCard,
    'v-line': CustomLine
  },
  watch: {
    selectMsg(val) {}
  },
  data() {
    return {
      activeName: 'second',
      selectMsg: '',
      dialogVisible: false,
      textarea: '',
      rateModel: 5,
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
      collectionInfo: {
        isCollections: ''
      },
      tagGroup: '',
      iShare_config: '',
      reTagBtn: [],
      configShare: {
        url: 'http://www.1911edu.com/',
        sites: ['qzone', 'qq', 'weibo', 'wechat'],
        source: 'http://www.1911edu.com/'
        // wechatQrcodeTitle: '微信扫一扫：分享',
        // wechatQrcodeHelper:
        //   '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setTid', 'setIsCollection']),
    handleClick() {},
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
    goTeacherInfo(id) {
      this.tidForm.tids = id * 1

      this.setTid(this.tidForm)
      window.open(window.location.origin + '/home/components/teacher')
    },
    // goCategory() {
    //   this.$router.push('/course/classifylist')
    //   persistStore.set('cid', '1')
    //   persistStore.set('pid', '')
    // },
    submit() {
      this.$message({
        showClose: true,
        type: 'success',
        message: '提交评价成功'
      })
    },
    linkTeacher() {},
    // 点击评论查看更多
    getMore() {
      this.dialogVisible = true
      this.handleCurrentChange(1)
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
          this.loadMsg = false
          this.pagemsg.total = response.data.pageCount
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
          // this.btnData = response.data.evaluateTags['1']
          this.tagGroup = response.data.evaluateTags
          this.changeRate('5')
          this.btnDatas = response.data.evaluateTags
          // this.tagGroup = response.data.evaluateTags
        })
      })
    },
    // 提交评论接口
    addEvaluate() {
      this.addEvaluateForm.ids = persistStore.get('curriculumId')
      if (this.textarea.length < 300) {
        this.addEvaluateForm.evaluatecontent = this.textarea
      } else {
        this.$message({
          showClose: true,
          type: 'warning',
          message: '请输入少于300个字符！'
        })
        return false
      }
      this.addEvaluateForm.scores = this.rateModel
      this.addEvaluateForm.tag = this.addEvaluateForm.tag
        .toString()
        .replace(/,/g, '#')
      if (this.courseList.is_study) {
        return new Promise((resolve, reject) => {
          home.addEvaluate(this.addEvaluateForm).then(response => {
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
    unique(arr) {
      var newArr = [arr[0]]
      for (var i = 1; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
          newArr.push(arr[i])
        }
      }
      return newArr
    },
    remove(val) {
      var index = this.indexOf(val)
      if (index > -1) {
        this.splice(index, 1)
      }
    },
    getBtnContent(val, index) {
      // console.log(val, '这是val')

      if (val.isCheck === true) {
        this.$set(val, 'isCheck', false)

        for (var i = 0; i < this.addEvaluateForm.tag.length; i++) {
          // document.write(cars[i] + '<br>')
          if (this.addEvaluateForm.tag[i] === val.value) {
            this.addEvaluateForm.tag.splice(i, 1)
          }
        }
      } else {
        this.$set(val, 'isCheck', true)
        this.addEvaluateForm.tag.push(val.value)
        this.addEvaluateForm.tag = this.unique(this.addEvaluateForm.tag)
      }
    },
    getCourseDetail() {
      this.loadTeacher = true
      this.kidForm.ids = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.getCourseDetail(this.kidForm).then(response => {
          // console.log(response)
          this.loadMsg = false

          this.courseList = response.data.curriculumDetail
          persistStore.set('curriculumId', response.data.curriculumDetail.id)

          this.privileMsg = response.data.curriculumPrivilege
          this.content = response.data.curriculumPrivilege
          this.loadTeacher = false
          this.collectMsg = response.data.curriculumDetail.is_collection
        })
      })
    },
    // 获取评论列表
    getEvaluateList() {
      this.loadEvaluate = true
      this.evaluateListForm.ids = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.getEvaluateLists(this.evaluateListForm).then(response => {
          this.loadMsg = false
          this.totalEvaluateInfo = response.data.totalEvaluateInfo
          this.pagemsg.total = response.data.pageCount
          this.pageCount = response.data.pageCount
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
    //分享
    share() {},
    // 删除收藏
    deleteCollection() {
      this.addCollectionForm.curriculumId = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        home.deleteCollection(this.addCollectionForm).then(response => {
          this.collectMsg = response.data.curriculumDetail.is_collection
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
          persistStore.set(
            'catalogId',
            response.data.defaultCurriculumCatalog.id
          )
        })
      })
    },
    shareInit() {
      let url = 'http://parq881t8.bkt.clouddn.com/iShare_tidy.js'
      let script = document.createElement('script')
      script.setAttribute('src', url)
      document.getElementsByTagName('head')[0].appendChild(script)

      let iShare_config = {
        container: document.getElementById('iShare'),
        config: {
          title: '分享测试',
          description: '水淀粉及爱丽丝的房间里爱神的箭发牢骚',
          url: 'http://www.1911edu.com/course/coursedetail',
          WXoptions: {
            evenType: 'click',
            isTitleVisibility: true,
            isTipVisibility: true,
            tip: '这是一段测试文本',
            title: 'QR CODE'
          }
        }
      }
    }
  },
  mounted() {
    var $config = {
      url: 'http://www.1911edu.com/'
    }

    socialShare('.social-share', $config)
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
  },
  watch: {
    isCollection(flag) {
      // console.log(flag)
    }
  }
}
</script>
<style lang="scss" scoped>
.detail {
  span {
    display: inline !important;
    line-height: 40px;
  }
}
</style>

