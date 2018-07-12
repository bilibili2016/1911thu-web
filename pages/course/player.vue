<template>
  <div class="playerBox clearfix" ref="playerBox">
    <div class="mediaL fl" ref="mediaL" :style="{ width: mediaLW+'%' }">
      <div class="playTop" @click="goLink()">
        <i class="el-icon-arrow-left"></i>{{player.title}}
      </div>
      <div class="playInner" ref="playInner">
        <video id="movd" ref="movd" preload="auto" playsinline webkit-playinline x5-playinline></video>
      </div>
      <div class="playBottom clearfix">
        <span class="fl usePhone">手机观看
          <div class="ewCode">
            <img src="@/assets/images/attentionWechat2.png" alt="">
            <i></i>
          </div>
        </span>
        <span class="fl problem" @click="showRpt">报告问题</span>
        <span class="fr share" style="position:reletive">
          <i class="el-icon-share "></i>分享
          <span class="shareIcond">
            <span class="social-share" data-sites="weibo,qq,wechat"></span>
          </span>

        </span>
        <span class="fr collection" @click="collection" :class=" { bag: this.collectMsg === 1 }">
          <i class="el-icon-star-on"></i>
          <span>收藏</span>
        </span>
        <span class="fr elt" @click="showElt" v-if="this.iseve === 0">
          <i class="el-icon-edit"></i>课程评价
        </span>
        <span class="fr elt" v-else :class=" { bag: this.iseve === 1 }">
          <i class="el-icon-edit"></i>已评价
        </span>
      </div>
    </div>
    <div class="mediaR fl" ref="mediaR" :style="{ width: mediaRW+'%' }">
      <div v-show="mediaRInner" class="inner">
        <h5 class="title">{{player.title}}</h5>
        <div class="teacher clearfix">

          <img class="fl" :src="player.head_img" alt="" @click="goTeacherInfo(player.teacher_id)">
          <div class="playername fl" @click="goTeacher(player.teacher_id)">
            <!-- <div>{{player.is_car === 1 ? false : true}}</div> -->
            <div>{{player.teacher_name}}</div>
            <div>{{player.graduate}}</div>
            <!-- <div>{{player.is_cart}}</div> -->
          </div>
          <!-- player.is_car ===  1 ? false : true -->
          <!-- <div v-if="player.is_cart === 1">
            <div class="fr shopcart" @click="playerBuy(courseList, player)"><img src="@/assets/images/shopcart2.png" alt=""></div>
          </div> -->
          <!-- <div v-else>{{player.is_cart}}</div> -->
        </div>
        <div class="courseList" ref="courseList">
          <div class="chapter" v-for="(section,index) in courseList" :key="index">
            <h4>{{section.title}}</h4>
            <div class="knobble clearfix" v-for="(bar,index) in section.childList" :key="index" @click="handleCourse(bar,index)" :class="{cli:ischeck == bar.id?true:false}">
              <span class="fl playIcon" v-show="ischeck == bar.id?false:true">
                <i class="el-icon-caret-right"></i>
              </span>
              <span class="fl playImg" v-show="ischeck == bar.id?true:false">
                <img :src="playing" alt="" ref="videoButton">
              </span>
              <span class="fl barName">{{bar.video_number}}{{bar.title}}({{parseInt(bar.video_time / 60)}}分{{parseInt(bar.video_time % 60)}}秒)</span>
              <span class="barNameHover">{{bar.video_number}}{{bar.title}}({{parseInt(bar.video_time / 60)}}分{{parseInt(bar.video_time % 60)}}秒)</span>
            </div>
          </div>
        </div>
      </div>
      <div class="fold" @click="fold">
        <i :class="mediaRIcon"></i>
      </div>
    </div>
    <div class="reportBug" v-show="showReportBug">
      <div class="note">
        <h4>报告问题
          <i @click="closeReport" class="el-icon-close fr"></i>
        </h4>
        <el-input type="textarea" :rows="4" placeholder="请详细描述您遇到的问题" v-model="problem.content">
        </el-input>
        <div class="commitBug">
          <el-button @click="reportProblem">提交</el-button>
        </div>
      </div>
    </div>
    <div class="evaluate" v-show="showEvaluate">
      <div class="note">
        <h4>课程评价
          <i class="el-icon-close fr" @click="closeEvaluate"></i>
        </h4>
        <h5>请问该课程对您有帮忙吗？快来评个分吧！</h5>
        <h6>课程评分：

          <el-rate v-model="rateModel" @change="changeRate"></el-rate>

        </h6>
        <div v-for="(item,index) in btnData" :key="index" @click="getBtnContent(item,index)" :class="{borderColor: item.isCheck}" class="detail-btngrounp">
          {{item.value}}
        </div>
        <el-input type="textarea" :rows="4" placeholder="请输入您的评价" v-model="word">
        </el-input>
        <div class="commitBug">
          <el-button round @click.native="addEvaluate">提交</el-button>
        </div>
      </div>
    </div>
    <el-button type="text" @click="goShoppingCart"></el-button>
  </div>
</template>


<script>
import { other, auth, home, players, coursedetail } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  computed: {
    ...mapState('auth', ['kid', 'tid']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      isFreeCourse: '',
      videoState: false,
      showReportBug: false,
      title: '1',
      showEvaluate: false,
      curriculumcartids: {
        cartid: null
      },
      ischeck: '',
      mediaRW: 28,
      mediaLW: 72,
      mediaRInner: true,
      fileID: '',
      appID: '',
      mediaRIcon: 'el-icon-arrow-right',
      radioBtn: '',
      playing: '',
      playImg: require('@/assets/images/playImg.gif'),
      pauseImg: require('@/assets/images/video.png'),
      // gifImg: require('@/assets/images/playImg.gif'),
      player: {},
      courseList: [
        {
          section: '第一章 图的基本概念',
          knobbles: [
            {
              number: '1-1',
              barName: '课程概述',
              duration: '32分钟',
              percentage: 30,
              isFree: true
            },
            {
              number: '1-1',
              barName: '课程概述',
              duration: '32分钟',
              percentage: 30,
              isFree: true
            }
          ]
        }
      ],
      problem: {
        curriculumId: null,
        content: '',
        curriculumcatalogid: ''
      },
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
      fileID: null,
      appID: null,
      tcplayer: {
        fileID: '',
        appID: '',
        autoplay: false, //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        plugins: {
          ContinuePlay: {
            // 开启续播功能
            auto: false, //[可选] 是否在视频播放后自动续播
            text: '上次播放至 ', //[可选] 提示文案
            btnText: '恢复播放' //[可选] 按钮文案
          }
        }
      },
      playerDetailForm: {
        curriculumId: ''
      },
      tidForm: {
        tids: null
      },
      addEvaluateForm: {
        ids: null,
        evaluatecontent: null,
        scores: null,
        types: 1,
        curriculumcatalogid: '',
        tag: []
      },
      addCollectionForm: {
        curriculumId: null
      },
      collectMsg: 1,
      iseve: 1,
      bought: false,
      isStudy: false,
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
      curriculumPrivilege: false,
      btnData: [],
      reTagBtn: [],
      tagGroup: '',
      rateModel: 5,
      addEvaluateForm: {
        ids: '',
        evaluatecontent: '',
        scores: '',
        types: 1,
        tag: [],
        curriculumcatalogid: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setHsg', 'setTid', 'signOut']),
    isHasClass() {
      let myVideo = document.getElementById('movd')
      // console.log(myVideo)
      if (myVideo == null) {
        return
      }
      if (myVideo.getAttribute('class')) {
        // 存在class属性

        // 方式2
        if (myVideo.className.indexOf('vjs-paused') > -1) {
          this.videoState = false
          // console.log('包含 test 这个class')
        } else {
          this.videoState = true
        }
      }
    },
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

      // this.borderIndex = index
      this.addEvaluateForm.tag.push(val.value)
    },
    handleCourse(item, index) {
      this.ischeck = item.id
      this.playing = this.playImg
      persistStore.set('curriculumId', item.curriculum_id)
      persistStore.set('catalogId', item.id)
      clearInterval(this.interval)
      this.clickMsg = true
      this.autoplay = true
      this.getPlayerInfo()
    },
    getEvaluateTags() {
      return new Promise((resolve, reject) => {
        coursedetail.getEvaluateTags().then(response => {
          // this.btnData = response.data.evaluateTags['1']
          this.tagGroup = response.data.evaluateTags
          this.changeRate('5')
          this.btnDatas = response.data.evaluateTags
          // this.tagGroup = response.data.evaluateTags
        })
      })
    },
    getBtnContent(val, index) {
      if (val.isCheck === true) {
        this.$set(val, 'isCheck', false)
      } else {
        this.$set(val, 'isCheck', true)
      }

      // this.borderIndex = index
      this.addEvaluateForm.tag.push(val.value)
    },
    goTeacherInfo(id) {
      this.tidForm.tids = Number(id)

      this.setTid(this.tidForm)
      window.open(window.location.origin + '/home/components/teacher')
    },
    goShoppingCart(msg) {
      this.$confirm(msg, '提示', {
        confirmButtonText: '去购买',
        cancelButtonText: '取消',
        closeOnHashChange: true,
        type: 'warning',
        center: true
      })
        .then(() => {
          // 未购买课程跳转到购物车
          this.addShopCart()
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // })
        })
    },
    addShopCart() {
      this.curriculumcartids.cartid = this.kid
      return new Promise((resolve, reject) => {
        home.addShopCart(this.curriculumcartids).then(response => {
          this.$router.push('/shop/shoppingcart')
        })
      })
    },
    selTypeChange(index) {
      this.radioBtn = index
    },
    showRpt() {
      this.showReportBug = true
    },
    showElt() {
      this.showEvaluate = true
    },
    closeReport() {
      this.showReportBug = false
    },
    closeEvaluate() {
      this.showEvaluate = false
      this.radioBtn = ''
      this.word = ''
    },
    resize() {
      if (this.$refs.playerBox) {
        const h = this.$refs.playerBox.offsetHeight
        this.$refs.mediaL.style.height = h + 'px'
        this.$refs.mediaR.style.height = h + 'px'
        this.$refs.courseList.style.height = h - 40 - 132 - 100 + 'px'
        this.$refs.playInner.style.height = h - 100 + 'px'
      }
    },
    fold() {
      if (this.$refs.mediaR.offsetWidth != 0) {
        this.mediaRW = 0
        this.mediaRInner = false
        this.mediaRIcon = 'el-icon-arrow-left'
        this.mediaLW = 100
        this.$refs.movd.children[0].style.width = this.mediaLW + '%'
      } else {
        this.mediaRW = 28
        this.mediaRInner = true
        this.mediaRIcon = 'el-icon-arrow-right'
        this.mediaLW = 72
      }
      // this.resize();
    },
    goLink() {
      this.$router.push('/course/coursedetail')
      // window.open(window.location.origin + '/course/coursedetail')
    },
    goTeacher(teacherID) {
      this.tidForm.tids = teacherID * 1
      this.setTid(this.tidForm)
      this.$router.push('/home/components/teacher')
    },

    playerBuy(item, info) {
      if (info.is_cart === 1) {
        // this.$alert('商品已在购物车内', '温馨提示', {
        //   confirmButtonText: '确定',
        //   callback: action => {}
        // })
      } else {
        this.curriculumcartids.cartid = item[0].curriculum_id
        return new Promise((resolve, reject) => {
          home.addShopCart(this.curriculumcartids).then(response => {
            // this.$router.push('/shop/shoppingCart')
            // window.open(window.location.origin + '/shop/shoppingcart')
            this.$message({
              type: 'success',
              message: '添加购物车成功'
            })
          })
        })
      }
    },
    getPlayerInfo() {
      if (typeof TCPlayer === 'undefined') {
        location.reload()
        return
      }

      if (this.clickMsg === true) {
        player = TCPlayer('movd_html5_api', this.tcplayer)
        player.dispose()
      } else {
        player = TCPlayer('movd', this.tcplayer)
        player.dispose()
      }
      this.$refs.playInner.innerHTML = ''
      this.$refs.playInner.innerHTML =
        '<video id="movd" ref="movd" preload="auto" playsinline webkit-playinline x5-playinline></video>'

      this.playerForm.curriculumId = persistStore.get('curriculumId')
      this.playerForm.catalogId = persistStore.get('catalogId')
      // 设置websocket
      var player = TCPlayer('movd', this.tcplayer)
      if (persistStore.get('volume')) {
        let volume = persistStore.get('volume')
        player.volume(volume)
      }
      player.pause()
      var link = window.location.origin
      if (
        link === 'http://frontend.1911edu.com' ||
        link == 'http://localhost:8080'
      ) {
        link = 'http://ceshi.1911edu.com:2120'
      } else {
        link = 'http://api.1911edu.com:2120'
      }
      var socket = new io(link) //'http://ceshi.1911edu.com:2120'
      // 连接socket
      socket.on('connect', function() {
        // console.log('已连接')
        socket.emit('login', persistStore.get('token'))
      })
      // 断线重连
      socket.on('reconnect', function(msg) {})
      let that = this
      player.on('pause', () => {
        this.isHasClass()
        this.playing = this.pauseImg
        clearInterval(that.interval)
        socket.emit('watchRecordingTime_disconnect')
      })
      player.on('volumechange', () => {
        consoel.log('volumechange')
        this.isHasClass()
        // console.log(this.$refs.videoButton.src)
        persistStore.set('volume', player.volume())
      })
      player.on('play', function() {
        that.interval = setInterval(() => {
          if (that.seconds <= 0) {
            that.seconds = 1
            that.courseList.success = false
            that.courseList.inputID = ''
            socket.emit('watchRecordingTime_disconnect')
            clearInterval(that.interval)
          } else {
            that.seconds--
            // console.log(that.seconds, '秒数')
            let playTime = player.currentTime()
            // console.log(playTime, '时间')
            socket.emit(
              'watchRecordingTime',
              persistStore.get('curriculumId'),
              persistStore.get('catalogId'),
              playTime
            )
          }
          // this.ischeck = item.id
        }, 1000)

        that.ischeck = persistStore.get('catalogId')
        that.playing = that.playImg
      })
      // 计时器
      return new Promise((resolve, reject) => {
        players.getPlayerInfos(this.playerForm).then(response => {
          if (response.status === '100100') {
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
            if (response.data.playAuthInfo.videoViewType == false) {
              player.loadVideoByID({
                fileID: response.data.playAuthInfo.fileID,
                appID: response.data.playAuthInfo.appID,
                sign: response.data.playAuthInfo.sign,
                t: response.data.playAuthInfo.t,
                exper: response.data.playAuthInfo.exper
              })
            } else {
              player.loadVideoByID({
                fileID: response.data.playAuthInfo.fileID,
                appID: response.data.playAuthInfo.appID,
                t: response.data.playAuthInfo.t,
                sign: response.data.playAuthInfo.sign
              })
            }
            if (this.autoplay) {
              player.play()
            }
          }
        })
      })

      this.isHasClass()
    },
    getCurriculumPlayInfo() {
      this.playerDetailForm.curriculumId = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        players.getCurriculumPlayInfo(this.playerDetailForm).then(response => {
          // console.log(response)
          // console.log(response.data.curriculumDetail, '9999')
          this.player = response.data.curriculumDetail
          this.iseve = response.data.curriculumDetail.is_evaluate
          this.bought = response.data.curriculumPrivilege
          this.isStudy = response.data.curriculumDetail.is_study
          this.courseList = response.data.curriculumCatalogList
          this.collectMsg = response.data.curriculumDetail.is_collection
          this.curriculumPrivilege = response.data.curriculumPrivilege
          this.isFreeCourse = response.data.curriculumDetail.is_free
        })
      })
    },
    // 反馈问题
    reportProblem() {
      this.problem.curriculumId = persistStore.get('curriculumId')
      this.problem.curriculumcatalogid = persistStore.get('catalogId')
      return new Promise((resolve, reject) => {
        home.reportProblem(this.problem).then(response => {
          // this.closeReport()

          if (response.status === '100100') {
            this.$message({
              showClose: true,
              type: 'success',
              message: response.msg
            })
          } else {
            this.closeReport()
            this.$message({
              showClose: true,
              type: 'success',
              message: response.msg
            })
          }

          if (this.word === '') {
            return
          }
        })
      })
    },
    // 增加评论
    addEvaluate() {
      //免费课程不购买可以评价
      if (!this.bought && this.isFreeCourse !== 2) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '您还没有购买该课程，请先购买后再来评论吧！'
        })
        this.showEvaluate = false
        return false
      }
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

      this.addEvaluateForm.ids = persistStore.get('curriculumId')
      this.addEvaluateForm.curriculumcatalogid = persistStore.get('catalogId')
      this.addEvaluateForm.evaluatecontent = this.word
      this.addEvaluateForm.scores = this.rateModel
      this.addEvaluateForm.tag = this.addEvaluateForm.tag
        .toString()
        .replace(/,/g, '#')

      // console.log(this.addEvaluateForm, '这是this.addEvaluateForm')
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
            this.word = ''
            this.showEvaluate = false
            this.$message({
              showClose: true,
              type: 'success',
              message: response.msg
            })
          }
        })
      })
    },
    // 判断是收藏还是为收藏
    collection() {
      if (this.collectMsg === 1) {
        this.deleteCollection()
      } else {
        this.addCollection()
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
    }
  },
  mounted() {
    this.videoState = document.getElementById('movd')
    this.resize()
    var $config = {
      url: 'http://www.1911edu.com/'
    }

    socialShare('.social-share', $config)
    window.addEventListener('resize', this.resize)
    // this.setHsg(this.hsgForm)
    document.getElementsByClassName('headerBox')[0].style.display = 'none'
    document.getElementsByClassName('footerBox')[0].style.display = 'none'

    this.getPlayerInfo()
    this.getCurriculumPlayInfo()
    this.$bus.$emit('hideHeader', true)
    ;(this.seconds = 10000000),
      // 获取评论接口
      this.getEvaluateTags()

    this.isHasClass()
  },
  watch: {
    videoState(flag) {
      // console.log(flag)
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
.displays {
  display: none;
}
.playerBox {
  .shareIcond {
    opacity: 0;
    display: none;
    margin-top: -104px;
    width: 121px;
    height: 56px;
    border-radius: 4px;
    position: absolute;
    transition: all 300ms;
    top: 55px;
    right: 0px;
    z-index: 99999;
    i {
      display: inline-block;
      width: 55.4px;
      line-height: 36px;
      text-align: center;
      color: #222;
      font-size: 12px;
      margin: 0;
      &:hover {
        color: #8f4acb;
      }
    }
    img {
      width: 100px;
      height: 100px;
      margin: 15px 0 0 2.7px;
      display: block;
      cursor: pointer;
    }
  }
}
.share {
  &:hover .shareIcond {
    opacity: 1;
    display: inline-block;
  }
}
</style>

