<template>
  <div class="playInner" ref="playInner">
    <div class="prism-player" id="mediaPlayer" ref="mediaPlayer"></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { projectplayer } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import { message, splitUrl } from '@/lib/util/helper'
import playerNextComponent from '~/lib/core/next.js'
import playerPreviousComponent from '~/lib/core/previous.js'
export default {
  props: [
    'playerForm',
    'isloaded',
    'playerInner',
    'isFreeCourse',
    'bought',
    'isLookAt'
  ],
  data() {
    return {
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
      playImg: 'http://papn9j3ys.bkt.clouddn.com/playImg.gif',
      pauseImg: 'http://papn9j3ys.bkt.clouddn.com/video.png',
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
      }
    }
  },
  methods: {
    ...mapActions('auth', ['signOut']),
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
          message(this, 'error', response.msg)
          this.playerForm.curriculumId = this.course.curriculumId
          this.playerForm.catalogId = this.course.catalogId
        } else if (response.status === '100006') {
          this.$alert('您已退出登录，请重新登录', '温馨提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.$router.push('/')
              this.signOut()
              //初始化首页数据
              this.$bus.$emit('reLogin', true)
              this.$bus.$emit('loginShow', true)
            }
          })
        } else {
          if (!that.bought && that.lookAt == '1') {
            this.goShoppingCart('您还未购买该项目，请先去购买吧！')
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
              this.$refs.playInner.innerHTML =
                '<div class="prism-player" id="mediaPlayer" ref="mediaPlayer"></div>'
            }
            // 创建播放器
            this.player = new Aliplayer(this.aliPlayer)
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
      // 如果课程购买了 判断有没有观看记录，跳转到指定位置播放
      if (this.bought && this.playerForm.seek != 0) {
        this.player.seek(this.playerForm.seek)
        this.playerForm.seek = 0
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
      this.changePlayImg(this.playImg, this.playerForm.catalogId)
    },
    // 播放暂停暂停事件--停止icon跳动，socket停止记录播放时长
    playerPause() {
      this.player.pause()
      this.changePlayImg(this.pauseImg, this.playerForm.catalogId)
      clearInterval(this.interval)
      this.socket.emit('watchRecordingTime_disconnect')
    },
    // 视频播放的时候拖动进度条触发--完成拖拽 参数返回拖拽点的时间
    changeSeek(time) {
      // 未购买&&试看的课程 && 拖动时间 > 试看时间   直接停止
      if (
        !this.bought &&
        this.lookAt == '2' &&
        time.paramData > this.playAuthInfo.free_time
      ) {
        this.playerEnded()
      } else {
        return false
      }
    },
    // 视频播放完成之后--未购买：弹出快捷支付框，已购买：播放下一小节
    playerEnded() {
      clearInterval(this.interval)
      // 未购买且试看
      if (!this.bought && this.lookAt == '2') {
        // 取消全屏
        this.player.fullscreenService.cancelFullScreen()
        this.$bus.$emit('openPay', this.pay)
        this.closePayed()
      } else {
        // 已购买并且有下一小节
        if (this.nextCatalogId !== '' && this.bought) {
          this.autoplay = true
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
    // 试看的课程方法
    preview(freeTime, currentTime) {
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
    previousVideo() {
      if (this.playerPreviousForm.curriculumId !== '') {
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
      if (this.playerNextForm.curriculumId !== '') {
        this.playerForm.curriculumId = this.playerNextForm.curriculumId
        this.playerForm.catalogId = this.playerNextForm.catalogId
        this.autoplay = true
        this.getPlayerInfo()
      } else {
        message(this, 'warning', '已经是最后一节了！')
      }
    },
    // 点击小节播放
    handleCourse(item) {
      if (this.playerForm.catalogId === item.id) {
        return false
      }
      this.playerForm.curriculumId = item.curriculum_id
      this.playerForm.catalogId = item.id
      clearInterval(this.interval)
      this.autoplay = true
      this.lookAt = item.look_at
      this.getPlayerInfo()
    },
    // 切换播放gif
    changePlayImg(img, id) {
      this.$emit('changePlayImg', img, id)
    },
    // 播放视频
    isPlay() {
      if (this.player) {
        this.player.play()
      }
    },
    // 暂停视频
    isPause() {
      if (this.player) {
        this.player.pause()
      }
    },
    // 关闭支付二维码、重新获取播放参数
    closePayed() {
      this.autoplay = false
      this.index = 0
      this.player.seek(0)
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
      this.shoppingForm.cartid = splitUrl(0, 1)
      projectplayer.addShopCart(this.shoppingForm).then(res => {
        if (res.status === 0) {
          // 添加购物车成功
          this.$router.push('/shop/shoppingcart')
        } else {
          message(this, 'error', res.msg)
        }
      })
    }
  },
  watch: {
    isloaded(val, old) {
      if (val) {
        this.lookAt = this.isLookAt
        this.getPlayerInfo()
        this.$emit('falseLoaded')
      }
    },
    playerInner(val, old) {
      this.$refs.playInner.style.height = val + 'px'
    }
  },
  mounted() {
    this.projectForm.ids = splitUrl(0, 1)
    this.$bus.$on('clickCatalog', data => {
      this.handleCourse(data)
    })
  }
}
</script>