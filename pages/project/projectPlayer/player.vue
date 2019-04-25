<template>
  <div class="playInner" ref="playInner" @click="playMedia" @dblclick="dblclick">
    <div class="prism-player" id="mediaPlayer" ref="mediaPlayer"></div>
    <!-- 播放按钮 -->
    <div class="playVideo" v-show="playVideo" @click="action" ref="playVideo"></div>
    <!-- 试看提示 -->
    <div class="isTrySee" v-show="isTrySee">试看<span>{{isTrySeeTime}}</span>分钟，观看完整版请<span class="gobuy" @click="gobuy">购买</span><i @click="closeTip" class="el-icon-error"></i></div>
    <!-- 播放器报错信息 -->
    <v-error :showError="showError" :errorMsg="errorMsg" @getPlayerInfo="getPlayerInfo"></v-error>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { projectplayer } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import { message, matchSplits, getNet, exitScreen } from '@/lib/util/helper'
import playerNextComponent from '~/lib/core/next.js'
import playerPreviousComponent from '~/lib/core/previous.js'
import PlayerError from '@/components/common/PlayerError.vue'
export default {
  components: {
    'v-error': PlayerError
  },
  props: ['playerForm', 'isloaded', 'playerInner', 'isFreeCourse', 'bought'],
  data () {
    return {
      isTrySee: false,
      isTrySeeTime: 0,
      clickTime: '',
      showError: false,
      projectForm: {
        ids: ''
      },
      playerPreviousForm: {
        curriculumId: '',
        catalogId: ''
      },
      playerNextForm: {
        curriculumId: '',
        catalogId: ''
      },
      index: 0,
      playImg: 'https://static-image.1911edu.com/playImg.gif',
      pauseImg: 'https://static-image.1911edu.com/video.png',
      autoplay: false,
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
        ]
      },
      player: '',
      socket: '',
      playAuthInfo: {},
      pay: {
        type: 2
      },
      shoppingForm: {
        cartid: '',
        type: 2
      },
      course: {
        catalogId: '',
        curriculumId: ''
      },
      node: '',
      errorMsg: '',
      playLoading: '',
      loadingFlag: true,
      playVideo: false //根据当前视频加载的状态，判断是否显示播放按钮
    }
  },
  methods: {
    ...mapActions('auth', ['signOut']),
    ...mapMutations('auth', ['setClosePay']),
    // 直接去购买
    gobuy () {
      this.$emit('gobuy')
    },
    closeTip () {
      this.isTrySee = false
    },
    // 播放参数  wobsocket 播放器创建
    getPlayerInfo () {
      let that = this
      this.socket = new io(getNet())
      // 连接socket
      this.socket.on('connect', function () {
        that.socket.emit('login', persistStore.get('token'))
      })
      // 支付推送来消息时
      this.socket.on('new_msg', function (msg) {
        //支付成功
        if (msg.pay_status == '0') {
          that.$bus.$emit('payResult', true)
        }
        //支付失败
        if (msg.pay_status == 100100) {
          that.$bus.$emit('payResult', false)
          return false
        }
      })
      // 断线重连
      this.socket.on('reconnect', function (msg) { })
      // 获取播放url
      projectplayer.getPlayerInfos(this.playerForm).then(response => {
        if (response.status === 0) {
          // 先给默认播放的小节暂停
          this.changePlayImg(this.pauseImg, this.playerForm.catalogId)
          // 没购买 && 不是免费 && 不能试看
          if (
            !that.bought &&
            response.data.is_free == '1' &&
            !response.data.playAuthInfo.is_try_see
          ) {
            this.$emit('buyProject')
            // 如果课程未购买，使用保存起来的课程id替换掉不能播放的课程id
            this.playerForm.curriculumId = this.course.curriculumId
            this.playerForm.catalogId = this.course.catalogId
          } else {
            // 把现在播放的课程ID保存起来
            this.course.curriculumId = this.playerForm.curriculumId
            this.course.catalogId = this.playerForm.catalogId
            // 接口返回的播放数据
            this.playAuthInfo = response.data.playAuthInfo
            this.aliPlayer.vid = response.data.playAuthInfo.video_id
            this.aliPlayer.playauth = response.data.playAuthInfo.playAuth
            // 切换播放方法1、播放器如果存在就销毁播放器，重新创建
            if (this.player) {
              this.player.dispose()
              this.$refs.playInner.insertBefore(this.node, this.$refs.playVideo)
            }
            // 创建播放器
            this.player = new Aliplayer(this.aliPlayer)
            // 隐藏播放按钮，放出loading--解决网慢的时候播放按钮暴露--ready之后恢复原貌
            if (this.loadingFlag) {
              this.loadingFlag = false
              this.playLoading = setInterval(() => {
                this.playerLoad()
              }, 500)
            }
            // 获取到的下一节的播放信息
            this.playerNextForm.curriculumId = response.data.nextCurriculumId
            this.playerNextForm.catalogId = response.data.nextCatalogId
            // 获取到上一节的播放信息
            this.playerPreviousForm.curriculumId =
              response.data.previousCurriculumId
            this.playerPreviousForm.catalogId = response.data.previousCatalogId
            this.player.on('ready', this.readyPlay)
            this.player.on('play', this.playerPlay)
            this.player.on('pause', this.playerPause)
            this.player.on('completeSeek', this.changeSeek)
            this.player.on('requestFullScreen', this.fullScreenTrue)
            this.player.on('cancelFullScreen', this.exitFullScreen)
            this.player.on('ended', this.playerEnded)
            this.player.on('error', this.playerError)
          }
          // 根据课程 是否购买&&是否试看 判断是否显示文字
          if (!that.bought && response.data.playAuthInfo.is_try_see) {
            this.isTrySee = true
            this.isTrySeeTime =
              Math.round((response.data.playAuthInfo.free_time / 60) * 100) /
              100
          } else {
            this.isTrySee = false
          }
        } else {
          message(this, 'error', response.msg)
          this.playerForm.curriculumId = this.course.curriculumId
          this.playerForm.catalogId = this.course.catalogId
        }
      })
    },
    // 隐藏播放按钮，放出loading--解决网慢的时候播放按钮暴露--ready之后恢复原貌
    playerLoad () {
      if (document.getElementsByClassName('prism-hide')[0]) {
        document.getElementsByClassName('prism-hide')[0].className =
          'prism-loading'
      }
    },
    // 播放器加载完成后
    readyPlay () {
      clearInterval(this.playLoading)
      this.playerLoad()
      this.loadingFlag = true
      if (this.aliPlayer.autoplay) {
        this.playVideo = false
        this.player.play()
      } else {
        this.playVideo = true
      }
      // 如果课程购买了 判断有没有观看记录，跳转到指定位置播放
      if (this.bought && this.playerForm.seek != 0) {
        this.player.seek(this.playerForm.seek)
        this.playerForm.seek = 0
      }
      // 增加空格，上下左右键盘操作视频
      this.keyboard()
    },
    // 播放开始--启动计时器
    playerPlay () {
      this.playVideo = false
      clearInterval(this.playLoading)
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
          // 获取当前的播放状态
          if (this.player.getStatus() == 'playing') {
            this.playVideo = false
          } else {
            this.playVideo = true
          }
        }
      }, 1000)
      this.changePlayImg(this.playImg, this.playerForm.catalogId)
    },
    // 播放暂停暂停事件--停止icon跳动，socket停止记录播放时长
    playerPause () {
      this.playVideo = true
      this.player.pause()
      this.changePlayImg(this.pauseImg, this.playerForm.catalogId)
      clearInterval(this.interval)
      this.socket.emit('watchRecordingTime_disconnect')
    },
    // 视频播放的时候拖动进度条触发--完成拖拽 参数返回拖拽点的时间
    changeSeek (time) {
      // 未购买&&试看的课程 && 拖动时间 > 试看时间   直接停止
      if (
        !this.bought &&
        this.playAuthInfo.is_try_see &&
        time.paramData > this.playAuthInfo.free_time
      ) {
        this.playerEnded()
      } else {
        this.playVideo = false
        return false
      }
    },
    // 视频播放完成之后--未购买：弹出快捷支付框，已购买：播放下一小节
    playerEnded () {
      this.playVideo = true
      clearInterval(this.interval)
      // 未购买且试看
      if (!this.bought && this.playAuthInfo.is_try_see) {
        // 取消全屏
        this.player.fullscreenService.cancelFullScreen()
        // 暂停播放小节ico
        this.changePlayImg(this.pauseImg, this.playerForm.catalogId)
        // 打开扫码支付弹框
        this.$bus.$emit('openPay', this.pay)
        this.closePayed()
      } else {
        // 已购买并且有下一小节
        if (this.nextCatalogId !== '' && this.bought) {
          this.aliPlayer.autoplay = true
          this.playVideo = false
          this.nextVideo()
        }
        // 已购买且没有下一小节了
        if (this.nextCatalogId == '' && this.bought) {
          this.changePlayImg(this.pauseImg, this.playerForm.catalogId)
          clearInterval(this.interval)
          this.socket.emit('watchRecordingTime_disconnect')
        }
      }
    },
    // 播放器报错
    playerError (error) {
      this.showError = true
      this.errorMsg = error.paramData.display_msg
    },
    // 试看的课程方法
    preview (freeTime, currentTime) {
      /**
       * 1、试看时长_freeTime
       * 2、当前播放时长_currentTime
       */
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
    previousVideo () {
      if (this.playerPreviousForm.curriculumId !== '') {
        this.playerForm.curriculumId = this.playerPreviousForm.curriculumId
        this.playerForm.catalogId = this.playerPreviousForm.catalogId
        this.aliPlayer.autoplay = true
        this.playVideo = false
        this.getPlayerInfo()
      } else {
        message(this, 'warning', '已经是第一节了！')
      }
    },
    // 切换下一小节按钮
    nextVideo () {
      if (this.playerNextForm.curriculumId !== '') {
        this.playerForm.curriculumId = this.playerNextForm.curriculumId
        this.playerForm.catalogId = this.playerNextForm.catalogId
        this.aliPlayer.autoplay = true
        this.playVideo = false
        this.getPlayerInfo()
      } else {
        message(this, 'warning', '已经是最后一节了！')
      }
    },
    // 点击小节播放
    handleCourse (item) {
      if (this.playerForm.catalogId === item.id) {
        return false
      }
      this.playerForm.curriculumId = item.curriculum_id
      this.playerForm.catalogId = item.id
      clearInterval(this.interval)
      this.aliPlayer.autoplay = true
      this.getPlayerInfo()
    },
    // 切换播放gif
    changePlayImg (img, id) {
      this.$emit('changePlayImg', img, id)
    },
    // 播放视频
    isPlay () {
      if (this.player) {
        this.player.play()
      }
    },
    // 暂停视频
    isPause () {
      if (this.player) {
        this.player.pause()
      }
    },
    // 点击播放器进行播放或暂停
    playMedia (item) {
      clearTimeout(this.clickTime)
      this.clickTime = setTimeout(() => {
        // 如果点击的当前这个标签是 mediaPlayer 才执行
        var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
        var isFirefox = userAgent.indexOf('Firefox') > -1
        if (isFirefox) {
          if (this.player && item.target.offsetParent.id == 'mediaPlayer') {
            if (this.playVideo) {
              this.player.play()
            } else {
              this.player.pause()
            }
          }
        } else {
          if (this.player && item.path[1].id == 'mediaPlayer') {
            if (this.playVideo) {
              this.player.play()
            } else {
              this.player.pause()
            }
          }
        }
      }, 300)
    },
    // 双击视频 全屏
    dblclick (item) {
      clearTimeout(this.clickTime)
      // 检测播放器是否存在
      // console.log(item)

      if (this.player && item.path[1].id == 'mediaPlayer') {
        // 判断当前播放器是否为全屏状态
        if (this.player.fullscreenService.getIsFullScreen()) {
          let bigPlay = document.getElementsByClassName('prism-big-play-btn')[0]
          bigPlay.style.visibility = 'hidden'
          this.player.fullscreenService.cancelFullScreen()
        } else {
          let bigPlay = document.getElementsByClassName('prism-big-play-btn')[0]
          bigPlay.style.visibility = 'visible'
          this.player.fullscreenService.requestFullScreen()
        }
      }
    },
    //  播放器进入全屏事件
    fullScreenTrue () {
      document.getElementsByClassName(
        'prism-big-play-btn'
      )[0].style.visibility = 'visible'
      // 用于播放器全屏后大播放按钮显示问题
      this.fullScreen = true
    },
    //  播放器退出全屏事件
    exitFullScreen () {
      document.getElementsByClassName(
        'prism-big-play-btn'
      )[0].style.visibility = 'hidden'
      // 退出浏览器全屏
      exitScreen()
    },
    // 增加空格，上下左右键盘操作视频
    keyboard () {
      let man = this
      window.onkeydown = function (e) {
        // 空格 播放暂停
        if (e.keyCode == 32) {
          if (man.player) {
            if (man.playVideo) {
              man.player.play()
            } else {
              man.player.pause()
            }
          }
        }
        if (e.keyCode == 37) {
          man.speedRetreat()
        }
        if (e.keyCode == 39) {
          man.speedAdvance()
        }
        if (e.keyCode == 38) {
          man.volumeUp()
        }
        if (e.keyCode == 40) {
          man.volumeDown()
        }
      }
    },
    // 快退
    speedRetreat () {
      this.player.seek(this.player.getCurrentTime() * 1 - 5)
    },
    // 快进
    speedAdvance () {
      if (this.player.getDuration() - this.player.getCurrentTime() > 5) {
        this.player.seek(this.player.getCurrentTime() * 1 + 5)
      }
    },
    // 音量增加
    volumeUp () {
      let volum = this.player.getVolume()
      volum = volum > 0.9 ? 1 : volum + 0.1
      this.player.setVolume(volum)
    },
    // 音量减小
    volumeDown () {
      let volum = this.player.getVolume()
      volum = volum < 0.1 ? 0 : volum - 0.1
      this.player.setVolume(volum)
    },
    // 关闭支付二维码、重新获取播放参数
    closePayed () {
      this.aliPlayer.autoplay = false
      this.index = 0
      this.player.seek(0)
      this.getPlayerInfo()
      this.setClosePay({ closePay: false })
    },
    // 改 原播放按钮
    action () {
      if (!this.player) return
      if (
        this.player.getStatus() == 'pause' ||
        this.player.getStatus() == 'loading' ||
        this.player.getStatus() == 'ready' ||
        this.player.getStatus() == 'ended'
      ) {
        this.player.play()
        this.playVideo = false
      }
      if (this.player.getStatus() == 'playing') {
        this.player.pause()
        this.playVideo = true
      }
    }
  },
  watch: {
    isloaded (val, old) {
      if (val) {
        // this.lookAt = this.isLookAt
        this.getPlayerInfo()
        this.$emit('falseLoaded')
      }
    },
    playerInner (val, old) {
      this.$refs.playInner.style.height = val + 'px'
    },
    closePay (val) {
      if (val) {
        this.closePayed()
      }
    }
  },
  mounted () {
    this.projectForm.ids = matchSplits('kid')
    this.$bus.$on('clickCatalog', data => {
      this.handleCourse(data)
    })
    this.node = this.$refs.mediaPlayer
  }
}
</script>
