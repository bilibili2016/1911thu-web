<template>
  <div class="playInner" ref="playInner">
    <div id="mediaPlayer" ref="mediaPlayer" style="width:100%; height:100%;"></div>
  </div>
</template>

<script>
import { coursedetail, players } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import { mapState, mapActions, mapGetters } from 'vuex'
import { splitUrl, message } from '@/lib/util/helper'
export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      playerForm: {
        curriculumId: '',
        catalogId: ''
      },
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
        skinLayout: [
          {
            name: 'H5Loading',
            align: 'cc'
          },
          {
            name: 'errorDisplay',
            align: 'tlabs',
            x: 0,
            y: 0
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
        ]
      },
      autoplay: false,
      playerDetailForm: {
        curriculumId: ''
      },
      defaultPlayerInfo: {
        curriculumId: ''
      },
      getdefaultForm: {
        curriculumid: ''
      },
      players: '',
      player: '',
      ceshiUrl: 'http://ceshi.1911thu.com',
      localUrl: 'http://localhost:8080',
      wapiUrl: 'http://wapi.1911thu.com:2120',
      seconds: 500000,
      nextCatalogId: '', //下一小节的播放id
      link: '',
      bought: '',
      lookAt: '',
      isFree: '',
      pay: {
        type: 1
      },
      socket: '',
      playAuthInfo: {},
      index: 0,
      playerEnd: true
    }
  },
  methods: {
    // 课程-获取默认 的课程id 以及小节id
    getdefaultCurriculumCatalog() {
      this.getdefaultForm.curriculumid = splitUrl(0, 1)
      coursedetail
        .getdefaultCurriculumCatalog(this.getdefaultForm)
        .then(res => {
          this.playerForm.curriculumId =
            res.data.defaultCurriculumCatalog.curriculum_id
          this.playerForm.catalogId = res.data.defaultCurriculumCatalog.id
          this.autoplay = true
          // 获取播放的url
          this.getdefaultPlayerUrl()
        })
    },
    // 根据 课程id以及小节id 获取url
    getdefaultPlayerUrl() {
      // 判断socket 连接
      let that = this
      let origin = window.location.origin
      if (origin === this.ceshiUrl || origin == this.localUrl) {
        this.link = 'http://ceshi.1911thu.com:2120'
      } else {
        this.link = 'http://wapi.1911thu.com:2120'
      }
      // 新建socket
      this.socket = new io(this.link)
      // 连接socket
      this.socket.on('connect', () => {
        that.socket.emit('login', persistStore.get('token'))
      })
      // 支付推送来消息时
      this.socket.on('new_msg', function(msg) {
        //支付成功
        if (msg.pay_status == '0') {
          //执行重新播放视频
          message(that, 'warning', msg.msg)
          that.$bus.$emit('closePay')
          window.location.reload()
        }
        //支付失败
        if (msg.pay_status == '100100') {
          message(that, 'warning', msg.msg)
          return false
        }
      })
      // 断线重连
      this.socket.on('reconnect', function(msg) {})
      // this.player = new Aliplayer(this.aliPlayer)
      players.getPlayerInfos(this.playerForm).then(res => {
        if (res.status === 0) {
          // 播放参数播放
          this.playAuthInfo = res.data.playAuthInfo
          this.aliPlayer.vid = res.data.playAuthInfo.video_id
          this.aliPlayer.playauth = res.data.playAuthInfo.playAuth

          if (this.player) {
            // 用vid和playauth切换播放器播放
            this.player.reloaduserPlayInfoAndVidRequestMts(
              this.aliPlayer.vid,
              this.aliPlayer.playauth
            )
          } else {
            // 不存在 直接创建播放器
            this.player = new Aliplayer(this.aliPlayer)
          }

          this.bought = res.data.curriculumPrivilege
          this.lookAt = res.data.look_at
          this.isFree = res.data.is_free
          this.nextCatalogId = res.data.nextCatalogId
          this.$bus.$emit('closeCover')
          this.player.on('ready', this.readyPlay)
          this.player.on('play', this.playerPlay)
          this.player.on('pause', this.playerPause)
          this.player.on('ended', this.playerEnded)
        } else {
          message(this, 'warning', res.msg)
          return false
        }
      })
    },
    rePlay() {
      this.getdefaultPlayerUrl()
    },
    readyPlay() {
      if (this.autoplay) {
        this.player.play()
      }
    },
    // 播放开始--启动计时器
    playerPlay() {
      let that = this
      clearInterval(this.interval)
      // 播放开始启动计时器
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
            splitUrl(0, 1),
            splitUrl(1, 1),
            playTime,
            '',
            1
          )
        }
      }, 1000)
      this.playerEnd = true
    },
    // 播放暂停暂停事件--停止icon跳动，socket停止记录播放时长
    playerPause() {
      let that = this
      this.player.pause()
      clearInterval(that.interval)
      this.socket.emit('watchRecordingTime_disconnect')
    },
    // 视频播放完成之后--未购买：弹出快捷支付框，已购买：播放下一小节
    playerEnded() {
      // 播放结束过滤 --避免播放结束后的指数次回调
      if (this.playerEnd) {
        this.playerEnd = false
        clearInterval(this.interval)
        // 不免费 未购买 试看的课程弹出快捷支付弹框
        if (this.isFree === '1' && !this.bought && this.lookAt == '2') {
          // 取消全屏
          this.player.fullscreenService.cancelFullScreen()
          this.$bus.$emit('openPay', this.pay)
          this.playerEnd = true
        } else {
          // 如果当前小节播放完成，直接播放下一小节
          if (this.nextCatalogId !== '') {
            this.playerForm.catalogId = this.nextCatalogId
            this.getdefaultPlayerUrl()
          }
        }
      }
    },
    // 试看的课程方法
    preview(freeTime, currentTime) {
      /**
       * 1、试看时长_freeTime
       * 2、当前播放时长_currentTime
       */
      if (Number(freeTime) < Number(currentTime)) {
        this.index++
        this.player.pause()
        if (this.index < 2) {
          this.playerEnded()
        }
      }
    },
    closePayed() {
      this.index = 0
      this.player.seek(0)
      this.autoplay = false
      this.getdefaultPlayerUrl()
    }
  },
  mounted() {
    this.$bus.$on('updateCourse', data => {
      this.playerForm = data
      this.autoplay = data.autoplay
      this.rePlay()
    })
    this.$bus.$on('reupdatecourse', () => {
      this.getdefaultCurriculumCatalog()
    })
    // 支付框关闭后的回调
    this.$bus.$on('closePayed', () => {
      this.closePayed()
    })
  }
}
</script>

<style scoped>
.playInner {
  width: 480px;
  height: 312px;
}
</style>
