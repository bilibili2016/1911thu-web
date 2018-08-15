<template>
  <div data="222" class="playInner" ref="playInner">
    <div id="mediaPlayer" ref="mediaPlayer" style="width:100%; height:100%;"></div>
  </div>
</template>

<script>
import { coursedetail, players } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import { mapState, mapActions, mapGetters } from 'vuex'
import { splitUrl } from '@/lib/util/helper'
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
      closeCoverNum: 0,
      players: '',
      ceshiUrl: 'http://ceshi.1911thu.com',
      localUrl: 'http://localhost:8080',
      wapiUrl: 'http://wapi.1911thu.com:2120',
      seconds: 500000,
      link: '',
      socket: null,
      bought: '',
      lookAt: '',
      pay: {
        type: 1
      }
    }
  },
  methods: {
    // 课程-获取默认 的课程id 以及小节id
    getdefaultCurriculumCatalog() {
      // this.getdefaultForm.curriculumid = persistStore.get('curriculumId')
      this.getdefaultForm.curriculumid = splitUrl(0, 1)

      coursedetail
        .getdefaultCurriculumCatalog(this.getdefaultForm)
        .then(res => {
          this.playerForm.curriculumId =
            res.data.defaultCurriculumCatalog.curriculum_id
          this.playerForm.catalogId = res.data.defaultCurriculumCatalog.id
          this.bought = res.data.defaultCurriculumCatalog.curriculumPrivilege
          this.lookAt = res.data.defaultCurriculumCatalog.look_at
          // 获取播放的url
          this.getdefaultPlayerUrl()
        })
    },
    // 根据 课程id以及小节id 获取url
    getdefaultPlayerUrl() {
      // 判断socket 连接
      let origin = window.location.origin
      if (origin === this.ceshiUrl || origin == this.localUrl) {
        this.link = 'http://ceshi.1911thu.com:2120'
      } else {
        this.link = 'http://wapi.1911thu.com:2120'
      }
      // 新建socket
      var socket = new io(this.link)
      // 连接socket
      socket.on('connect', () => {
        socket.emit('login', persistStore.get('token'))
      })
      // 支付推送来消息时
      socket.on('new_msg', function(msg) {
        //支付成功
        if (msg.pay_status == '0') {
          //执行重新播放视频
          that.$message({
            showClose: true,
            type: 'warning',
            message: msg.msg
          })
          that.$bus.$emit('closePay')
          window.location.reload()
        }
        //支付失败
        if (msg.pay_status == '100100') {
          that.$message({
            showClose: true,
            type: 'warning',
            message: msg.msg
          })
          return false
        }
      })
      // 断线重连
      socket.on('reconnect', function(msg) {})

      players.getPlayerInfos(this.playerForm).then(res => {
        // if (res.status === '100006') {
        //   this.$bus.$emit('loginShow', true)
        // }
        // console.log(res, '这是res')
        if (res.status === 0) {
          this.$refs.mediaPlayer.innerHTML = ''
          this.tcplayer.mp4 = res.data.playAuthInfo.video_address
          this.players = new TcPlayer('mediaPlayer', this.tcplayer)
          window.qcplayer = this.players
          if (this.autoplay) {
            window.qcplayer.play()
          }
          if (this.closeCoverNum > 0) {
            this.$bus.$emit('closeCover')
          } else {
            this.closeCoverNum++
          }
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
          return false
        }
      })
      let that = this
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
              /**
               * socket.emit()6个参数
               * 1、watchRecordingTime固定参数
               * 2、课程ID
               * 3、小节ID
               * 4、当前播放时间
               * 5、项目播放的时候为项目ID，课程播放为空
               * 6、type:1是课程，2是项目
               */
              socket.emit(
                'watchRecordingTime',
                splitUrl(0, 1),
                splitUrl(1, 1),
                playTime,
                '',
                1
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
        // 监听播放停止事件
        if (msg.type == 'ended') {
          // 未购买且试看
          if (!that.bought && that.lookAt == '2') {
            that.$bus.$emit('openPay', that.pay)
          }
        }
      }
    },
    // 对播放器事件的监听
    addEventPlayer() {
      let that = this
      this.tcplayer.listener = function(msg) {
        // 播放开始启动计时器
        if (msg.type == 'play') {
          that.interval = setInterval(() => {
            if (that.seconds <= 0) {
              that.seconds = 1
              that.courseList.success = false
              that.courseList.inputID = ''
              that.socket.emit('watchRecordingTime_disconnect')
              clearInterval(that.interval)
            } else {
              that.seconds--
              let playTime = window.qcplayer.currentTime()
              that.socket.emit(
                'watchRecordingTime',
                // persistStore.get('curriculumId'),
                splitUrl(0, 1),
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
    },
    rePlay() {
      // this.linksocket()
      this.getdefaultPlayerUrl()
      // this.addEventPlayer()
    }
  },
  mounted() {
    // 如果已经登录 调用默认课程信息
    if (this.isAuthenticated) {
      this.getdefaultCurriculumCatalog()
    } else {
      // 未登录 不调用
    }

    this.$bus.$on('updateCourse', data => {
      this.playerForm = data
      this.autoplay = data.autoplay
      this.rePlay()
    })
    this.$bus.$on('reupdatecourse', () => {
      this.getdefaultCurriculumCatalog()
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
