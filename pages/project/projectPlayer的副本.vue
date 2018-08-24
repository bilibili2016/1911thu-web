<template>
  <div class="projectPlayer clearfix" ref="playerBox">
    <!-- 左侧播放器 -->
    <div class="mediaL fl" ref="mediaL" :style="{ width: mediaLW+'%' }">
      <div class="playTop">
        <span @click="goLink()">
          <i class="el-icon-arrow-left"></i>{{projectDetail.title}}
        </span>
      </div>
      <!-- <v-player ></v-player> -->
      <div class="playInner" ref="playInner">
        <div class="prism-player" id="mediaPlayer" ref="mediaPlayer"></div>
      </div>
      <div class="playBottom clearfix">
        <span class="fl usePhone">手机观看
          <div class="ewCode">
            <img src="http://papn9j3ys.bkt.clouddn.com/attentionWechat2.png" alt="">
            <i></i>
          </div>
        </span>
        <span class="fl problem" @click="showRpt">报告问题</span>
        <span class="fl elt" @click="showElt" v-if="this.iseve === false">
          <i class="el-icon-edit"></i>项目评价
        </span>
        <span class="fl elt" v-else :class=" { bag: this.iseve === true }">
          <i class="el-icon-edit"></i>已评价
        </span>
        <!-- 收藏分享 -->
        <v-collection :collectData="collectMsg" class="projectCollect"></v-collection>
      </div>
    </div>
    <!-- 右侧课程小结列表 -->
    <div class="mediaR fl" ref="mediaR" :style="{ width: mediaRW+'%' }">
      <div v-show="mediaRInner" class="inner" ref="inner">
        <v-list :courseList="courseList" :playing="playing" :ischeck="ischeck"></v-list>
      </div>
      <div class="fold" @click="fold">
        <i :class="mediaRIcon"></i>
      </div>
    </div>
    <!-- 报告问题 -->
    <v-report :config="playerForm"></v-report>
    <!-- 写评价 -->
    <v-evaluate @closeEvaluate="closeEvaluate" :showEvaluate="showEvaluate" :shoppingForm="shoppingForm" :playerForm="playerForm"></v-evaluate>
    <!-- 扫码支付 -->
    <v-pay @closePay="closePayed"></v-pay>
  </div>
</template>


<script>
import { auth, projectplayer } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import playerNextComponent from '~/lib/core/next.js'
import playerPreviousComponent from '~/lib/core/previous.js'
import EvaluateCase from '@/components/common/EvaluateCase.vue'
import Player from '@/pages/project/projectPlayer/player.vue'
import Repore from '@/components/common/Report.vue'
import Pay from '@/components/common/Pay.vue'
import List from '@/pages/project/projectPlayer/CourseList.vue'
import Collection from '@/components/common/Collection.vue'
import Evaluate from '@/pages/project/projectPlayer/evaluate.vue'
import { message } from '@/lib/util/helper'
export default {
  components: {
    'v-player': Player,
    'v-evaluatecase': EvaluateCase,
    'v-report': Repore,
    'v-pay': Pay,
    'v-collection': Collection,
    'v-list': List,
    'v-evaluate': Evaluate
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
      lookAt: '',
      mediaRInner: true,
      fileID: '',
      appID: '',
      mediaRIcon: 'el-icon-arrow-right',
      radioBtn: '',
      playing: '',
      playImg: 'http://papn9j3ys.bkt.clouddn.com/playImg.gif',
      pauseImg: 'http://papn9j3ys.bkt.clouddn.com/video.png',
      courseList: [],
      projectDetail: {},
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
        catalogId: '',
        type: 2
      },
      playerPreviousForm: {
        curriculumId: '',
        catalogId: ''
      },
      playerNextForm: {
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
      aliPlayer: {
        id: 'mediaPlayer', //播放器id
        width: '100%',
        height: '100%',
        autoplay: false, //自动播放
        vid: '', //点播播放的两个参数之一
        playauth: '', //点播播放的两个参数之二
        isLive: false,
        components: [
          {
            name: 'playerNextComponent',
            type: playerNextComponent,
            args: [this.nextVideo]
          },
          {
            name: 'playerPreviousComponent',
            type: playerPreviousComponent,
            args: [this.previousVideo]
          }
        ],
        skinLayout: [
          {
            name: 'bigPlayButton',
            align: 'cc'
          },
          {
            name: 'H5Loading',
            align: 'cc'
          },
          {
            name: 'infoDisplay'
          },
          {
            name: 'tooltip',
            align: 'blabs',
            x: 0,
            y: 56
          },
          {
            name: 'thumbnail'
          },
          {
            name: 'controlBar',
            align: 'blabs',
            x: 0,
            y: 0,
            children: [
              {
                name: 'progress',
                align: 'blabs',
                x: 0,
                y: 44
              },
              {
                name: 'playButton',
                align: 'tl',
                x: 15,
                y: 12
              },
              {
                name: 'timeDisplay',
                align: 'tl',
                x: 10,
                y: 7
              },
              {
                name: 'fullScreenButton',
                align: 'tr',
                x: 10,
                y: 12
              },
              {
                name: 'setting',
                align: 'tr',
                x: 15,
                y: 12
              },
              {
                name: 'volume',
                align: 'tr',
                x: 5,
                y: 10
              }
            ]
          }
        ] //播放器控件配置
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
      collectMsg: {
        types: 2,
        isCollect: 0
      },
      iseve: false,
      bought: false,
      getdefaultForm: {
        curriculumid: ''
      },
      seconds: 500000,
      time: '',
      player: '',
      clickMsg: false,
      tidForm: {
        tids: ''
      },
      rateModel: 5,
      shoppingForm: {
        cartid: '',
        type: 2
      },
      pay: {
        type: 2
      },
      currentTime: 0,
      socket: '',
      playAuthInfo: {},
      nextCatalogId: '', //默认播放下一小节id
      interval: '',
      index: 0
    }
  },
  methods: {
    ...mapActions('auth', ['signOut']),
    // 关闭支付二维码、重新获取播放参数
    closePayed() {
      this.autoplay = false
      this.index = 0
      this.player.seek(0)
      this.getPlayerInfo()
    },
    // 播放参数  wobsocket 播放器创建
    getPlayerInfo() {
      let that = this
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
      this.socket = new io(link) //'http://ceshi.1911edu.com:2120'
      // 连接socket
      this.socket.on('connect', function() {
        that.socket.emit('login', persistStore.get('token'))
      })
      // 支付推送来消息时
      this.socket.on('new_msg', function(msg) {
        //支付成功
        if (msg.pay_status == '0') {
          //执行重新播放视频
          message(that, 'warning', msg.msg)
          that.$bus.$emit('closePay')
          location.reload()
        }
        //支付失败
        if (msg.pay_status == '100100') {
          message(that, 'warning', msg.msg)
          return false
        }
      })

      // 断线重连
      this.socket.on('reconnect', function(msg) {})
      // 获取播放url
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
          if (!that.bought && that.lookAt == '1') {
            this.goShoppingCart('您还未购买该项目，请先去购买吧！')
          } else {
            this.playAuthInfo = response.data.playAuthInfo
            this.aliPlayer.vid = response.data.playAuthInfo.video_id
            this.aliPlayer.playauth = response.data.playAuthInfo.playAuth
            // 切换播放方法1、播放器如果存在就销毁播放器，重新创建
            if (this.player) {
              this.player.dispose()
              this.$refs.playInner.innerHTML =
                '<div class="prism-player" id="mediaPlayer" ref="mediaPlayer"></div>'
              // 切换播放方法2、切换vid和playauth播放参数
              // this.player.reloaduserPlayInfoAndVidRequestMts(
              //   that.aliPlayer.vid,
              //   that.aliPlayer.playauth
              // )
            }
            // 创建播放器
            this.player = new Aliplayer(this.aliPlayer)
            this.nextCatalogId = response.data.nextCatalogId
            // this.playerPreviousForm.curriculumId = response.data.nextCatalogId
            // this.playerPreviousForm.catalogId = response.data.nextCatalogId
            this.player.on('ready', this.readyPlay)
            this.player.on('play', this.playerPlay)
            this.player.on('pause', this.playerPause)
            this.player.on('ended', this.playerEnded)
          }
        }
      })
    },
    // 播放器加载完成后
    readyPlay() {
      if (this.autoplay) {
        this.player.play()
      }
    },
    // 播放开始--启动计时器
    playerPlay() {
      let that = this
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        if (this.seconds <= 0) {
          this.seconds = 1
          this.courseList.success = false
          this.courseList.inputID = ''
          that.socket.emit('watchRecordingTime_disconnect')
          clearInterval(this.interval)
        } else {
          this.seconds--
          let playTime = this.player.getCurrentTime()
          // 试看的课程
          if (this.playAuthInfo.is_try_see) {
            this.preview(this.playAuthInfo.free_time, playTime)
          }
          /**
           * socket.emit()6个参数
           * 1、watchRecordingTime固定参数
           * 2、课程ID
           * 3、小节ID
           * 4、当前播放时间
           * 5、项目播放的时候为项目ID，课程播放为空
           * 6、type:1是课程，2是项目
           */
          that.socket.emit(
            'watchRecordingTime',
            this.playerForm.curriculumId,
            this.playerForm.catalogId,
            playTime,
            this.projectForm.ids,
            2
          )
        }
      }, 1000)
      this.ischeck = this.playerForm.catalogId
      this.playing = this.playImg
    },
    // 播放暂停暂停事件--停止icon跳动，socket停止记录播放时长
    playerPause() {
      this.player.pause()
      this.playing = this.pauseImg
      clearInterval(this.interval)
      this.socket.emit('watchRecordingTime_disconnect')
    },
    // 视频播放完成之后--未购买：弹出快捷支付框，已购买：播放下一小节
    playerEnded() {
      clearInterval(this.interval)
      if (!this.bought && this.lookAt == '2') {
        // 未购买且试看
        // 取消全屏
        this.player.fullscreenService.cancelFullScreen()
        this.$bus.$emit('openPay', this.pay)
      } else {
        // 已购买并且有下一小节
        if (this.nextCatalogId !== '' && this.bought) {
          this.playerForm.catalogId = this.nextCatalogId
          this.autoplay = true
          this.getPlayerInfo()
        }
        // 已购买且没有下一小节了
        if (this.nextCatalogId == '' && this.bought) {
          this.playing = this.pauseImg
          clearInterval(this.interval)
          this.socket.emit('watchRecordingTime_disconnect')
        }
      }
    },
    // 试看的课程方法
    preview(freeTime, currentTime) {
      /**
       * 1、试看时长_freeTime
       * 2、当前播放时长_currentTime
       */
      let that = this
      if (Number(freeTime) < Number(currentTime)) {
        this.index++
        this.player.pause()
        clearInterval(this.interval)
        if (this.index < 2) {
          this.playerEnded()
        }
      }
    },
    // 切换上一小节按钮
    previousVideo() {
      if (this.nextCatalogId !== '') {
        this.playerForm.curriculumId = this.playerPreviousForm.curriculumId
        this.playerForm.catalogId = this.playerPreviousForm.catalogId
        this.autoplay = true
        this.getPlayerInfo()
      } else {
        message(this, 'warning', '已经是第一节了！')
      }
    },
    // 切换下一小节按钮
    nextVideo() {
      if (this.nextCatalogId !== '') {
        this.playerForm.curriculumId = this.playerNextForm.curriculumId
        this.playerForm.catalogId = this.playerNextForm.catalogId
        this.autoplay = true
        this.getPlayerInfo()
      } else {
        message(this, 'warning', '已经是最后一节了！')
      }
    },
    // 获取视频播放参数
    getCurriculumPlayInfo() {
      projectplayer.getPlayerList(this.projectForm).then(response => {
        this.projectDetail = response.data.curriculumProjectDetail
        this.courseList = response.data.curriculumProjectDetail.curriculumList
        this.shoppingForm.cartid = response.data.curriculumProjectDetail.id
        this.playerForm.curriculumId =
          response.data.curriculumProjectDetail.defaultCurriculumCatalog.curriculum_id
        this.playerForm.catalogId =
          response.data.curriculumProjectDetail.defaultCurriculumCatalog.curriculumCatalog_id
        this.bought =
          response.data.curriculumProjectDetail.curriculumProjectPrivilege
        this.isFreeCourse = response.data.curriculumProjectDetail.is_free
        this.iseve =
          response.data.curriculumProjectDetail.is_evaluateCurriculumProject
        this.aliPlayer.cover = response.data.curriculumProjectDetail.picture
        if (response.data.curriculumProjectDetail.is_Collection) {
          this.collectMsg.isCollect = 1
        } else {
          this.collectMsg.isCollect = 0
        }
        // 获取到默认播放小节里的是否试看
        this.lookAt =
          response.data.curriculumProjectDetail.defaultCurriculumCatalog.look_at
        // 播放所需数据加载完成后加载播放器数据
        this.getPlayerInfo()
      })
    },
    // 登出
    signOuts() {
      this.signOut()
      persistStore.clearAll()
      this.$router.push('/')
    },
    // 点击小节播放
    handleCourse(item) {
      if (this.playerForm.catalogId === item.id) {
        return false
      }
      this.ischeck = item.id
      this.playing = this.pauseImg
      this.playerForm.curriculumId = item.curriculum_id
      this.playerForm.catalogId = item.id
      clearInterval(this.interval)
      this.clickMsg = true
      this.autoplay = true
      this.lookAt = item.look_at
      this.getPlayerInfo()
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
        .catch(() => {})
    },
    // 项目加入购物车
    addShopCart() {
      projectplayer.addShopCart(this.shoppingForm).then(res => {
        if (res.status === 0) {
          // 添加购物车成功
          this.$router.push('/shop/shoppingcart')
        } else {
          message(this, 'error', res.msg)
        }
      })
    },
    // 打开报告问题
    showRpt() {
      this.$bus.$emit('openReport')
    },
    // 展示评论
    showElt() {
      this.showEvaluate = true
      // 展示评论-暂停播放器
      if (this.player) {
        this.player.pause()
      }
    },
    // 关闭评论
    closeEvaluate() {
      this.showEvaluate = false
      // 关闭评论-播放器继续播放
      if (this.player) {
        this.player.play()
      }
    },
    // 改变屏幕宽度重置播放器大小
    resize() {
      if (this.$refs.playerBox) {
        const h = this.$refs.playerBox.offsetHeight
        this.$refs.mediaL.style.height = h + 'px'
        this.$refs.mediaR.style.height = h + 'px'
        this.$refs.playInner.style.height = h - 100 + 'px'
        this.$refs.inner.style.height = h - 100 + 'px'
      }
    },
    // 隐藏右侧课程列表
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
    },
    // 跳转课程详情
    goLink() {
      this.$router.push(
        '/project/projectdetail?id=' + window.location.search.split('=')[1]
      )
    }
  },
  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
    if (this.isAuthenticated) {
      this.projectForm.ids = window.location.search.split('=')[1]
      this.getCurriculumPlayInfo()
    } else {
      this.$router.push(
        '/project/projectdetail?id=' + window.location.search.split('=')[1]
      )
      this.$bus.$emit('loginShow', true)
    }
    this.$bus.$emit('hideHeader', true)
    this.$bus.$on('clickCatalog', data => {
      this.handleCourse(data)
    })
    this.seconds = 10000000
  },
  watch: {
    videoState(flag) {
      if (flag) {
        this.playing = this.playImg
      } else {
        this.playing = this.pauseImg
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('headerFooterHide')
    })
  },
  beforeRouteLeave(to, from, next) {
    this.$bus.$emit('headerFooterShow')
    next(vm => {})
  }
}
</script>

