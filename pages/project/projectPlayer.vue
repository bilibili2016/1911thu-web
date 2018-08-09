<template>
  <div class="projectPlayer clearfix" ref="playerBox">
    <div class="mediaL fl" ref="mediaL" :style="{ width: mediaLW+'%' }">
      <div class="playTop" @click="goLink()">
        <i class="el-icon-arrow-left"></i>{{projectDetail.title}}
      </div>
      <div class="playInner" ref="playInner">
        <div id="mediaPlayer" ref="mediaPlayer" style="width:100%; height:100%;"></div>
      </div>
      <div class="playBottom clearfix">
        <span class="fl usePhone">手机观看
          <div class="ewCode">
            <img src="@/assets/images/attentionWechat2.png" alt="">
            <i></i>
          </div>
        </span>
        <span class="fl problem" @click="showRpt">报告问题</span>
        <!-- <span class="fr share" style="position:reletive">
          <i class="el-icon-share "></i>分享
          <span class="shareIcond">
            <span class="social-share" data-sites="weibo,qq,wechat"></span>
          </span>

        </span> -->

        <span class="fl elt" @click="showElt" v-if="this.iseve === false">
          <i class="el-icon-edit"></i>课程评价
        </span>
        <span class="fl elt" v-else :class=" { bag: this.iseve === true }">
          <i class="el-icon-edit"></i>已评价
        </span>
        <!-- 收藏分享 -->
        <v-collection :collectData="collectMsg" class="projectCollect"></v-collection>

      </div>
    </div>
    <div class="mediaR fl" ref="mediaR" :style="{ width: mediaRW+'%' }">
      <div v-show="mediaRInner" class="inner" ref="inner">
        <div v-for="(course,index) in courseList" :key="index" ref="courseList">
          <h5 class="title">{{course.curriculum_title}}</h5>
          <div class="courseList">
            <div class="chapter" v-for="(section,index) in course.curriculumCatalogList" :key="index">
              <h4>{{section.title}}</h4>
              <div class="knobble clearfix" v-for="(bar,index) in section.catalogList" :key="index" @click="handleCourse(bar,index)" :class="{cli:ischeck == bar.id?true:false}">
                <span class="fl playIcon" v-show="ischeck == bar.id?false:true">
                  <i class="el-icon-caret-right"></i>
                </span>
                <span class="fl playImg" v-show="ischeck == bar.id?true:false">
                  <img :src="playing" alt="" ref="videoButton">
                </span>
                <span class="fl barName">{{bar.video_number}}、{{bar.title}}({{parseInt(bar.video_time / 60)}}分{{parseInt(bar.video_time % 60)}}秒)</span>
                <span class="barNameHover">{{bar.video_number}}{{bar.title}}({{parseInt(bar.video_time / 60)}}分{{parseInt(bar.video_time % 60)}}秒)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fold" @click="fold">
        <i :class="mediaRIcon"></i>
      </div>
    </div>
    <!-- 报告问题 -->
    <v-report :config="config"></v-report>
    <!-- <v-evaluatecase class="evaluate" v-show="showEvaluate" :isClose="isClose" :courseList="courseList" @closeEvaluate="closeEvaluate"> </v-evaluatecase> -->
    <div class="evaluate" v-show="showEvaluate">
      <div class="note">
        <h4>课程评价
          <i class="el-icon-close fr" @click="closeEvaluate"></i>
        </h4>
        <h5>请问该课程对您有帮忙吗？快来评个分吧！</h5>
        <h6>课程评分：

          <el-rate v-model="rateModel" @change="changeRate"></el-rate>

        </h6>
        <div v-for="(item,index) in btnData" :key="index" @click="getBtnContent(item,index)" :class="['detail-btngrounp',{borderColor: item.isCheck}]">
          {{item.value}}
        </div>
        <el-input type="textarea" :rows="4" placeholder="其它想说的" v-model="word">
        </el-input>
        <div class="commitBug">
          <el-button round @click.native="addProjectEvaluate">提交</el-button>
        </div>
      </div>
    </div>
    <el-button type="text" @click="goShoppingCart"></el-button>
    <!-- <v-pay></v-pay> -->
  </div>
</template>


<script>
import { auth, projectplayer } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import EvaluateCase from '@/components/common/EvaluateCase.vue'
import Repore from '@/components/common/Report.vue'
import Pay from '@/components/common/pay.vue'
import Collection from '@/components/common/Collection.vue'

export default {
  components: {
    'v-evaluatecase': EvaluateCase,
    'v-report': Repore,
    'v-pay': Pay,
    'v-collection': Collection
  },
  computed: {
    ...mapState('auth', ['kid', 'tid']),
    ...mapGetters('auth', ['isAuthenticated'])
  },

  data() {
    return {
      isClose: true,
      isFreeCourse: '',
      videoState: false,
      showReportBug: false,
      title: '1',
      showEvaluate: false,
      curriculumcartids: {
        cartid: null
      },
      ischeck: '',
      mediaRW: 22,
      mediaLW: 78,
      mediaRInner: true,
      fileID: '',
      appID: '',
      mediaRIcon: 'el-icon-arrow-right',
      radioBtn: '',
      playing: '',
      playImg: require('@/assets/images/playImg.gif'),
      pauseImg: require('@/assets/images/video.png'),
      player: {},
      courseList: [],
      projectDetail: {},
      word: '',
      evaluate: {
        eltnum: 5,
        btnList: [
          '内容精彩',
          '内容生涩',
          '音质不好',
          '讲解详细',
          '很有帮助',
          '点赞老师'
        ]
      },
      hsgForm: {
        hsgs: true
      },
      playerForm: {
        curriculumId: '',
        catalogId: ''
      },
      autoplay: false,
      currentTime: '',
      fileID: null,
      appID: null,
      tcplayer: {
        mp4: '',
        width: '100%',
        height: '100%',
        live: false //是否是直播类型
      },
      playerDetailForm: {
        curriculumId: ''
      },
      projectForm: {
        ids: ''
      },
      tidForm: {
        tids: null
      },
      addEvaluateForm: {
        ids: null,
        curriculumcatalogid: '',
        type: 2,
        evaluatecontent: null,
        scores: null,
        tag: []
      },
      addCollectionForm: {
        curriculumId: '',
        types: 2
      },
      // collectMsg: false,
      collectMsg: 2,
      iseve: false,
      bought: false,
      getdefaultForm: {
        curriculumid: ''
      },
      seconds: 500000,
      time: '',
      players: '',
      clickMsg: false,
      tidForm: {
        tids: ''
      },
      btnData: [],
      reTagBtn: [],
      tagGroup: '',
      rateModel: 5,
      addEvaluateForm: {
        ids: '',
        curriculumId: '',
        types: 2,
        scores: '',
        evaluateContent: '',
        tag: []
      },
      shoppingForm: {
        cartid: '',
        type: 2
      },
      config: {
        type: 1
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setHsg', 'signOut']),
    // isHasClass() {
    //   let myVideo = document.getElementById('movd')
    //   if (myVideo == null) {
    //     return
    //   }
    //   if (myVideo.getAttribute('class')) {
    //     // 存在class属性

    //     // 方式2
    //     if (myVideo.className.indexOf('vjs-paused') > -1) {
    //       this.videoState = false
    //       // console.log('包含 test 这个class')
    //     } else {
    //       this.videoState = true
    //     }
    //   }
    // },
    signOuts() {
      this.signOut()
      persistStore.clearAll()
      this.$router.push('/')
    },
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
    getBtnContent(val, index) {
      if (val.isCheck === true) {
        this.$set(val, 'isCheck', false)
      } else {
        this.$set(val, 'isCheck', true)
      }
      this.addEvaluateForm.tag = []
      this.btnData.forEach((v, i) => {
        if (v.isCheck === true) {
          this.addEvaluateForm.tag.push(v.value)
        }
      })
    },
    handleCourse(item, index) {
      this.ischeck = item.id
      this.playing = this.pauseImg
      persistStore.set('curriculumId', item.curriculum_id)
      persistStore.set('catalogId', item.id)
      clearInterval(this.interval)
      this.clickMsg = true
      this.autoplay = true
      this.getPlayerInfo()
    },
    getEvaluateTags() {
      return new Promise((resolve, reject) => {
        projectplayer.getEvaluateTags().then(response => {
          // this.btnData = response.data.evaluateTags['1']
          this.tagGroup = response.data.evaluateTags
          this.changeRate('5')
          this.btnDatas = response.data.evaluateTags
          // this.tagGroup = response.data.evaluateTags
        })
      })
    },
    // 提示跳转购车
    goShoppingCart(msg) {
      this.$confirm(msg, '提示', {
        confirmButtonText: '去购买',
        cancelButtonText: '取消',
        closeOnHashChange: true,
        type: 'warning',
        center: true
      })
        .then(() => {
          // 未购买课程跳转到购物车-点击去购买
          this.addShopCart()
        })
        .catch(() => {
          // 点击取消
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // })
        })
    },
    // 项目加入购物车
    addShopCart() {
      projectplayer.addShopCart(this.shoppingForm).then(res => {
        if (res.status === 0) {
          // 添加购物车成功
          this.$router.push('/shop/shoppingcart')
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    showRpt() {
      this.$bus.$emit('openReport')
    },
    showElt() {
      this.showEvaluate = true
    },
    closeEvaluate() {
      this.showEvaluate = false
      this.radioBtn = ''
      this.word = ''
    },
    // 改变屏幕宽度
    resize() {
      if (this.$refs.playerBox) {
        const h = this.$refs.playerBox.offsetHeight
        this.$refs.mediaL.style.height = h + 'px'
        this.$refs.mediaR.style.height = h + 'px'
        this.$refs.playInner.style.height = h - 100 + 'px'
        this.$refs.inner.style.height = h - 100 + 'px'
      }
    },
    fold() {
      if (this.$refs.mediaR.offsetWidth != 0) {
        this.mediaRW = 0
        this.mediaRInner = false
        this.mediaRIcon = 'el-icon-arrow-left'
        this.mediaLW = 100
      } else {
        this.mediaRW = 22
        this.mediaRInner = true
        this.mediaRIcon = 'el-icon-arrow-right'
        this.mediaLW = 78
      }
      // this.resize();
    },
    goLink() {
      this.$router.push('/project/projectdetail')
    },
    getPlayerInfo() {
      if (typeof TcPlayer === 'undefined') {
        location.reload()
        return
      }
      this.$refs.mediaPlayer.innerHTML = ''
      var link = window.location.origin
      // if (
      //   link === 'http://frontend.1911edu.com' ||
      //   link == 'http://localhost:8080'
      // ) {
      //   link = 'http://ceshi.1911edu.com:2120'
      // } else {
      //   link = 'http://api.1911edu.com:2120'
      // }
      if (
        link === 'http://ceshi.1911thu.com' ||
        link == 'http://localhost:8080'
      ) {
        link = 'http://ceshi.1911thu.com:2120'
      } else {
        link = 'http://wapi.1911thu.com:2120'
      }
      var socket = new io(link) //'http://ceshi.1911edu.com:2120'
      // 连接socket
      socket.on('connect', function() {
        socket.emit('login', persistStore.get('token'))
      })
      // 断线重连
      socket.on('reconnect', function(msg) {})

      // 获取播放url
      this.playerForm.curriculumId = persistStore.get('curriculumId')
      this.playerForm.catalogId = persistStore.get('catalogId')
      projectplayer.getPlayerInfos(this.playerForm).then(response => {
        if (response.status === '100100') {
          this.playing = this.pauseImg
          this.goShoppingCart(response.msg)
        } else if (response.status === '100006') {
          this.$alert('您已退出登录，请重新登录', '温馨提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.signOuts()
              //初始化首页数据
              this.$bus.$emit('reLogin', true)
              this.$bus.$emit('loginShow', true)
            }
          })
        } else {
          // 初始化播放器
          this.tcplayer.mp4 = response.data.playAuthInfo.video_address
          this.players = new TcPlayer('mediaPlayer', this.tcplayer)
          window.qcplayer = this.players
          if (persistStore.get('volume')) {
            let volume = persistStore.get('volume')
            window.qcplayer.volume(volume)
          }
          if (this.autoplay) {
            window.qcplayer.play()
          }
        }
      })
      let that = this
      // 事件监听集合
      this.tcplayer.listener = function(msg) {
        // 播放开始启动计时器
        if (msg.type == 'play') {
          that.interval = setInterval(() => {
            if (that.seconds <= 0) {
              that.seconds = 1
              that.courseList.success = false
              that.courseList.inputID = ''
              socket.emit('watchRecordingTime_disconnect')
              clearInterval(that.interval)
            } else {
              that.seconds--
              let playTime = window.qcplayer.currentTime()
              socket.emit(
                'watchRecordingTime',
                persistStore.get('curriculumId'),
                persistStore.get('catalogId'),
                playTime
              )
            }
          }, 1000)
          that.ischeck = persistStore.get('catalogId')
          that.playing = that.playImg
        }
        // 监听暂停事件
        if (msg.type == 'pause') {
          // that.isHasClass()
          that.playing = that.pauseImg
          clearInterval(that.interval)
          socket.emit('watchRecordingTime_disconnect')
        }
        // 监听播放器音量改变
        if (msg.type == 'volumechange') {
          // that.isHasClass()
          persistStore.set('volume', window.qcplayer.volume())
        }
      }

      // this.isHasClass()
    },
    // 获取视频播放参数
    getCurriculumPlayInfo() {
      this.projectForm.ids = persistStore.get('projectId')
      projectplayer.getPlayerList(this.projectForm).then(response => {
        this.projectDetail = response.data.curriculumProjectDetail
        this.courseList = response.data.curriculumProjectDetail.curriculumList
        this.shoppingForm.cartid = response.data.curriculumProjectDetail.id
        persistStore.set(
          'curriculumId',
          response.data.curriculumProjectDetail.defaultCurriculumCatalog
            .curriculum_id
        )
        persistStore.set(
          'catalogId',
          response.data.curriculumProjectDetail.defaultCurriculumCatalog
            .curriculumCatalog_id
        )
        this.bought =
          response.data.curriculumProjectDetail.curriculumProjectPrivilege
        this.isFreeCourse = response.data.curriculumProjectDetail.is_free
        this.iseve =
          response.data.curriculumProjectDetail.is_evaluateCurriculumProject
        if (response.data.curriculumProjectDetail.is_Collection) {
          this.collectMsg = 1
        } else {
          this.collectMsg = 2
        }
        // this.collectMsg = response.data.curriculumProjectDetail.is_Collection
        // 播放所需数据加载完成后加载播放器数据
        this.getPlayerInfo()
      })
    },
    // 增加评论
    addProjectEvaluate() {
      //免费课程不购买可以评价
      // if (!this.bought && this.isFreeCourse !== 2) {
      //   this.$message({
      //     showClose: true,
      //     type: 'error',
      //     message: '您还没有购买该课程，请先购买后再来评论吧！'
      //   })
      //   this.showEvaluate = false
      //   return false
      // }
      if (this.word.length < 100) {
        this.addEvaluateForm.evaluatecontent = this.word
      } else {
        this.$message({
          showClose: true,
          type: 'warning',
          message: '请输入少于100个字符！'
        })
        return false
      }
      this.addEvaluateForm.ids = this.shoppingForm.cartid
      this.addEvaluateForm.curriculumcatalogid = persistStore.get(
        'curriculumId'
      )
      this.addEvaluateForm.evaluateContent = this.word
      this.addEvaluateForm.scores = this.rateModel.toString().replace(/,/g, '#')
      projectplayer.addProjectEvaluate(this.addEvaluateForm).then(response => {
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
          this.word = ''
          this.showEvaluate = false
          this.$message({
            showClose: true,
            type: 'success',
            message: response.msg
          })
        }
      })
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
    },
    // 为播放器上当的播放按钮添加点击事件
    addPlay() {
      var that = this
      document.addEventListener('click', function(e) {
        event = e || window.event
        if (event.stopPropagation) {
          event.stopPropagation()
        } else if (window.event) {
          window.event.cancelBubble = true
        }
        // console.log(event)
        var target = event.path[3].classList[0]
        if (target == 'vjs-big-play-button') {
          projectplayer.getPlayerInfos(that.playerForm).then(response => {
            if (response.status === '100100') {
              that.playing = that.pauseImg
              that.goShoppingCart(response.msg)
            }
          })
        }
      })
    }
  },
  mounted() {
    // this.videoState = document.getElementById('movd')
    // 分享暂时注释
    // var $config = {
    //   url: 'http://www.1911edu.com/'
    // }
    // socialShare('.social-share', $config)
    // this.setHsg(this.hsgForm)
    document.getElementsByClassName('headerBox')[0].style.display = 'none'
    document.getElementsByClassName('footerBox')[0].style.display = 'none'
    this.resize()
    window.addEventListener('resize', this.resize)
    this.getCurriculumPlayInfo()
    this.$bus.$emit('hideHeader', true)
    ;(this.seconds = 10000000),
      // 获取评论接口
      this.getEvaluateTags()
    this.addPlay()
  },
  watch: {
    videoState(flag) {
      if (flag) {
        this.playing = this.playImg
      } else {
        this.playing = this.pauseImg
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/style/project/projectPlayer';
</style>

