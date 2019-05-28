<template>
  <div class="playInner cardPlayer" ref="playInner" @click="playMedia" @dblclick="dblclick">
    <div id="mediaPlayer" ref="mediaPlayer"></div>
    <!-- 播放按钮 -->
    <div class="playVideo" v-show="playVideo" @click="action" ref="playVideo"></div>
    <!-- 试看提示 -->
    <div class="isTrySee" v-show="isTrySee">
      试看
      <span>{{isTrySeeTime}}</span>分钟，观看完整版请
      <span class="gobuy">购买</span>
      <i @click="closeTip" class="el-icon-error"></i>
    </div>
    <v-error :showError="showError" :errorMsg="errorMsg" @getPlayerInfo="rePlay"></v-error>
  </div>
</template>

<script>
import { previewapi } from "~/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import { mapState, mapGetters, mapMutations } from "vuex";
import {
  message,
  matchSplits,
  getNet,
  exitScreen,
  requestFullScreen,
  exitFull
} from "@/lib/util/helper";
import playerNextComponent from "~/lib/core/next.js";
import playerPreviousComponent from "~/lib/core/previous.js";
import PlayerError from "@/components/common/PlayerError.vue";
export default {
  components: {
    "v-error": PlayerError
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  props: ["defaultCurriculumCatalog"],
  data () {
    return {
      isTrySee: false,
      isTrySeeTime: 0,
      clickTime: "",
      node: "",
      showError: false,
      playerForm: {
        curriculumId: "",
        catalogId: "",
        curriculumType: 1,
        seek: 0
      },
      playImg: "https://static-image.1911edu.com/playImg.gif",
      pauseImg: "https://static-image.1911edu.com/video.png",
      playerPreviousForm: {
        curriculumId: "",
        catalogId: ""
      },
      playerNextForm: {
        curriculumId: "",
        catalogId: ""
      },
      tcplayer: {
        mp4: "",
        width: "100%",
        height: "100%",
        live: false //是否是直播类型
      },
      aliPlayer: {
        id: "mediaPlayer", //播放器id
        width: "100%",
        height: "100%",
        autoplay: false, //自动播放
        vid: "", //点播播放的两个参数之一
        playauth: "", //点播播放的两个参数之二
        components: [
          {
            name: "playerNextComponent",
            type: playerNextComponent,
            args: [this.nextVideo]
          },
          {
            name: "playerPreviousComponent",
            type: playerPreviousComponent,
            args: [this.previousVideo]
          }
        ]
      },
      autoplay: false,
      playerDetailForm: {
        curriculumId: ""
      },
      defaultPlayerInfo: {
        curriculumId: ""
      },
      players: "",
      player: "",
      seconds: 500000,
      nextCatalogId: "", //下一小节的播放id
      link: "",
      lookAt: "",
      socket: "",
      playAuthInfo: {},
      index: 0,
      errorMsg: "",
      playLoading: "",
      loadingFlag: true,
      playVideo: false, //根据当前视频加载的状态，判断是否显示播放按钮
      beforeRoute: "",
      fullScreen: true
    };
  },
  methods: {
    closeTip () {
      this.isTrySee = false;
    },
    // 切换播放gif
    changePlayImg (img, id) {
      this.$emit("changePlayImg", img, id);
    },
    // 根据 课程id以及小节id 获取url
    getdefaultPlayerUrl () {
      // 判断socket 连接
      let that = this;
      // 新建socket 传地址
      this.socket = new io(getNet());
      // 连接socket
      this.socket.on("connect", () => {
        //用户登录
        that.socket.emit("login", persistStore.get("token"), "ordinaryUser");
        //用户分组
        that.socket.emit("userGroup", "ordinaryUser");
      });
      // 支付推送来消息时
      this.socket.on("new_msg", function (msg) {
        //支付成功
        if (msg.pay_status == "0") {
          that.$bus.$emit("payResult", true);
        }
        //支付失败
        if (msg.pay_status == 100100) {
          that.$bus.$emit("payResult", false);
          return false;
        }
      });
      // 断线重连
      this.socket.on("reconnect", function (msg) { });
      this.player = new Aliplayer(this.aliPlayer)



      this.playerForm.curriculumId = matchSplits("kid");
      if (this.playerForm.catalogId == '') {
        message(this, "error", "抱歉，此课程暂未上传视频，请上传后观看！");
        return false
      }
      previewapi.getPlayerInfo(this.playerForm).then(res => {
        if (res.status === 0) {
          // 先给默认播放的小节暂停
          this.changePlayImg(this.pauseImg, this.playerForm.catalogId);
          // 播放参数播放
          this.playAuthInfo = res.data;
          this.aliPlayer.vid = res.data.video_id;
          this.aliPlayer.playauth = res.data.playAuth;

          if (this.player) {
            this.player.dispose();
            this.$refs.playInner.insertBefore(this.node, this.$refs.playVideo);
          }
          // 不存在 直接创建播放器
          this.player = new Aliplayer(this.aliPlayer);
          // 获取到的下一节的播放信息
          this.playerNextForm.curriculumId = this.playerForm.curriculumId;
          this.playerNextForm.catalogId = res.data.nextCatalogId;
          // 获取到下一节的播放信息
          this.playerPreviousForm.curriculumId = this.playerForm.curriculumId;
          this.playerPreviousForm.catalogId = res.data.previousCatalogId;
          this.lookAt = res.data.look_at;
          this.nextCatalogId = res.data.nextCatalogId;
          this.$bus.$emit("closeCover");
          // 隐藏播放按钮，放出loading--解决网慢的时候播放按钮暴露--ready之后恢复原貌
          if (this.loadingFlag) {
            this.loadingFlag = false;
            this.playLoading = setInterval(() => {
              this.playerLoad();
            }, 500);
          }
          //   播放器默认事件
          this.player.on("ready", this.readyPlay);
          this.player.on("play", this.playerPlay);
          this.player.on("pause", this.playerPause);
          this.player.on("requestFullScreen", this.fullScreenTrue);
          this.player.on("cancelFullScreen", this.exitFullScreen);
          this.player.on("ended", this.playerEnded);
          this.player.on("error", this.playerError);
        } else {
          message(this, "error", res.msg);
          return false;
        }
        // 根据课程 是否购买&&是否试看 判断是否显示文字
        if (this.lookAt == 2) {
          this.isTrySee = true;
          this.isTrySeeTime =
            Math.round((Number(res.data.free_time) / 60) * 100) /
            100;
        } else {
          this.isTrySee = false;
        }
      });
    },
    // 隐藏播放按钮，放出loading--解决网慢的时候播放按钮暴露--ready之后恢复原貌
    playerLoad () {
      if (document.getElementsByClassName("prism-hide")[0]) {
        document.getElementsByClassName("prism-hide")[0].className =
          "prism-loading";
      }
    },
    // 重新获取播放参数、播放视频
    rePlay () {
      this.showError = false;
      this.getdefaultPlayerUrl();
    },
    // 视频准备好之后执行
    readyPlay () {
      //防止页面发生跳转视频继续播放的情况
      if (this.beforeRoute != this.$route.path) {
        return false;
      }

      clearInterval(this.playLoading);

      this.playerLoad();
      this.playVideo = true;
      this.loadingFlag = true;
      if (this.aliPlayer.autoplay) {
        this.playVideo = false;
        this.player.play();
      } else {
        this.playVideo = true;
      }

      // 如果课程购买了 判断有没有观看记录，跳转到指定位置播放
      if (this.bought && this.playerForm.seek) {
        this.player.seek(this.playerForm.seek);
        // 跳转到指定位置之后 把播放记录清零
        this.playerForm.seek = 0;
      }
      // 增加空格，上下左右键盘操作视频
      this.keyboard();
    },
    // 播放开始--启动计时器
    playerPlay () {
      this.playVideo = false;
      clearInterval(this.playLoading);
      let that = this;
      clearInterval(this.interval);
      // 播放开始启动计时器
      this.interval = setInterval(() => {
        if (this.seconds <= 0) {
          this.seconds = 1;
          this.courseList.success = false;
          this.courseList.inputID = "";
          clearInterval(this.interval);
        } else {
          this.seconds--;
          let playTime = this.player.getCurrentTime();
          // 试看的课程
          if (this.isTrySee) {
            this.preview(this.playAuthInfo.free_time, playTime);
          }
          if (this.playVideo) {
            this.playVideo = false;
          }
        }
      }, 1000);
      this.changePlayImg(this.playImg, this.playerForm.catalogId);
    },
    // 播放暂停暂停事件--停止icon跳动，socket停止记录播放时长
    playerPause () {
      let that = this;
      this.playVideo = true;
      this.player.pause();
      clearInterval(that.interval);
      this.changePlayImg(this.pauseImg, this.playerForm.catalogId);
    },
    // 视频播放完成之后--未购买：弹出快捷支付框，已购买：播放下一小节
    playerEnded () {
      this.playVideo = true;
      this.aliPlayer.autoplay = false;
      this.changePlayImg(this.pauseImg, this.playerForm.catalogId);
      // 播放结束过滤 --避免播放结束后的指数次回调
      clearInterval(this.interval);
      // 试看小节
      if (this.lookAt == "2") {
        // 取消全屏
        this.player.fullscreenService.cancelFullScreen();
      } else {
        this.$emit("refreshData");
        // 如果当前小节播放完成，直接播放下一小节
        if (this.nextCatalogId !== "") {
          this.nextVideo();
        }
      }
    },
    // 播放器报错
    playerError (error) {
      this.showError = true;
      this.errorMsg = error.paramData.display_msg;
    },
    // 试看的课程方法
    preview (freeTime, currentTime) {
      /**
       * 1、试看时长_freeTime
       * 2、当前播放时长_currentTime
       */
      if (Number(freeTime) < Number(currentTime)) {
        this.index++;
        this.player.pause();
        if (this.index < 2) {
          this.playerEnded();
          this.rePlay()
        }
      }
    },
    // 切换上一小节按钮
    previousVideo () {
      if (this.playerPreviousForm.curriculumId !== "") {
        this.playerForm.curriculumId = this.playerPreviousForm.curriculumId;
        this.playerForm.catalogId = this.playerPreviousForm.catalogId;
        this.aliPlayer.autoplay = true;
        this.getdefaultPlayerUrl();
      } else {
        message(this, "warning", "已经是第一节了！");
      }
    },
    // 切换下一小节按钮
    nextVideo () {
      if (this.playerNextForm.curriculumId !== "") {
        this.playerForm.curriculumId = this.playerNextForm.curriculumId;
        this.playerForm.catalogId = this.playerNextForm.catalogId;
        this.aliPlayer.autoplay = true;
        this.getdefaultPlayerUrl();
      } else {
        message(this, "warning", "已经是最后一节了！");
      }
    },
    // 点击播放器进行播放或暂停
    playMedia (item) {
      clearTimeout(this.clickTime);
      this.clickTime = setTimeout(() => {
        // 如果点击的当前这个标签是 mediaPlayer 才执行
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isFirefox = userAgent.indexOf("Firefox") > -1;
        if (isFirefox) {
          if (this.player && item.target.offsetParent.id == "mediaPlayer") {
            if (this.playVideo) {
              this.player.play();
            } else {
              this.player.pause();
            }
          }
        } else {
          if (this.player && item.path[1].id == "mediaPlayer") {
            if (this.playVideo) {
              this.player.play();
            } else {
              this.player.pause();
            }
          }
        }
      }, 300);
    },
    // 双击视频 全屏
    dblclick (item) {
      clearTimeout(this.clickTime);
      // 检测播放器是否存在
      if (this.player && item.path[1].id == "mediaPlayer") {
        // 判断当前播放器是否为全屏状态
        if (this.player.fullscreenService.getIsFullScreen()) {
          let bigPlay = document.getElementsByClassName(
            "prism-big-play-btn"
          )[0];
          bigPlay.style.visibility = "hidden";
          this.player.fullscreenService.cancelFullScreen();
        } else {
          let bigPlay = document.getElementsByClassName(
            "prism-big-play-btn"
          )[0];
          bigPlay.style.visibility = "visible";
          this.player.fullscreenService.requestFullScreen();
        }
      }
    },
    //  播放器进入全屏事件
    fullScreenTrue () {
      document.getElementsByClassName(
        "prism-big-play-btn"
      )[0].style.visibility = "visible";
      // 用于播放器全屏后大播放按钮显示问题
      this.fullScreen = true;
    },
    //  播放器退出全屏事件
    exitFullScreen () {
      document.getElementsByClassName(
        "prism-big-play-btn"
      )[0].style.visibility = "hidden";
      // 退出浏览器全屏
      exitScreen();
    },
    // 增加空格，上下左右键盘操作视频
    keyboard () {
      let man = this;
      window.onkeydown = function (e) {
        // 空格 播放暂停
        if (e.keyCode == 32 && man.player.fullscreenService.getIsFullScreen()) {
          if (man.player) {
            if (man.playVideo) {
              man.player.play();
            } else {
              man.player.pause();
            }
          }
        }
        if (e.keyCode == 37 && man.player.fullscreenService.getIsFullScreen()) {
          man.speedRetreat();
        }
        if (e.keyCode == 39 && man.player.fullscreenService.getIsFullScreen()) {
          man.speedAdvance();
        }
        if (e.keyCode == 38 && man.player.fullscreenService.getIsFullScreen()) {
          man.volumeUp();
        }
        if (e.keyCode == 40 && man.player.fullscreenService.getIsFullScreen()) {
          man.volumeDown();
        }
      };
    },
    // 快退
    speedRetreat () {
      this.player.seek(this.player.getCurrentTime() * 1 - 5);
    },
    // 快进
    speedAdvance () {
      if (this.player.getDuration() - this.player.getCurrentTime() > 5) {
        this.player.seek(this.player.getCurrentTime() * 1 + 5);
      }
    },
    // 音量增加
    volumeUp () {
      let volum = this.player.getVolume();
      volum = volum > 0.9 ? 1 : volum + 0.1;
      this.player.setVolume(volum);
    },
    // 音量减小
    volumeDown () {
      let volum = this.player.getVolume();
      volum = volum < 0.1 ? 0 : volum - 0.1;
      this.player.setVolume(volum);
    },
    // 改 原播放按钮
    action () {
      if (!this.player) return;
      if (
        this.player.getStatus() == "pause" ||
        this.player.getStatus() == "loading" ||
        this.player.getStatus() == "ready" ||
        this.player.getStatus() == "ended"
      ) {
        this.player.play();
        this.playVideo = false;
      }
      if (this.player.getStatus() == "playing") {
        this.player.pause();
        this.playVideo = true;
      }
    }
  },
  mounted () {
    this.$bus.$on("updateCourse", data => {
      this.playerForm = data;
      this.aliPlayer.autoplay = data.autoplay;
      this.rePlay();
    });
    this.$bus.$on("reupdatecourse", (id) => {
      this.playerForm.catalogId = id
      // 加载完之后自动播放
      this.aliPlayer.autoplay = true;
      this.getdefaultPlayerUrl()
    });
    this.node = this.$refs.mediaPlayer;
    this.beforeRoute = this.$route.path;
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.player) {
        vm.player.pause();
        clearInterval(that.interval);
      }
    });
  },
  beforeRouteLeave (to, from, next) {
    if (this.player) {
      this.player.pause();
      clearInterval(that.interval);
    }
    next();
  }
};
</script>
