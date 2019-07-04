<template>
  <div class="playInner cardPlayer" ref="playInner" @click="playMedia" @dblclick="dblclick">
    <div id="mediaPlayer" ref="mediaPlayer"></div>
    <!-- 播放按钮 -->
    <div class="playVideo" v-show="playVideo" @click="action" ref="playVideo"></div>
    <!-- 试看提示 -->
    <div class="isTrySee" v-show="isTrySee">
      试看
      <span>{{isTrySeeTime}}</span>分钟，观看完整版请
      <span class="gobuy" @click="gobuy">购买</span>
      <i @click="closeTip" class="el-icon-error"></i>
    </div>
    <v-error :showError="showError" :errorMsg="errorMsg" @getPlayerInfo="rePlay"></v-error>
  </div>
</template>

<script>
import { coursedetail, players } from "~/lib/v1_sdk/index";
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
    ...mapState("auth", ["closePay"]),
    ...mapGetters("auth", ["isAuthenticated"])
  },
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
      getdefaultForm: {
        curriculumid: ""
      },
      players: "",
      player: "",
      seconds: 500000,
      nextCatalogId: "", //下一小节的播放id
      link: "",
      bought: "",
      lookAt: "",
      isFree: "",
      pay: {
        type: 1
      },
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
    ...mapMutations("auth", ["setClosePay"]),
    gobuy () {
      this.$bus.$emit("openPay", this.pay);
      this.player.pause();
      // this.$emit("gobuy");
    },
    closeTip () {
      this.isTrySee = false;
    },
    // 切换播放gif
    changePlayImg (img, id) {
      this.$emit("changePlayImg", img, id);
    },
    // 课程-获取默认 的课程id 以及小节id
    getdefaultCurriculumCatalog () {
      this.getdefaultForm.curriculumid = matchSplits("kid")==0?matchSplits("tid"):matchSplits("kid");
      coursedetail
        .getdefaultCurriculumCatalog(this.getdefaultForm)
        .then(res => {
          if (res.status === 0) {
            this.playerForm.curriculumId =
              res.data.defaultCurriculumCatalog.curriculum_id;
            this.playerForm.catalogId = res.data.defaultCurriculumCatalog.id;
            this.playerForm.seek = Number(
              res.data.defaultCurriculumCatalog.see_spot
            );
            this.aliPlayer.autoplay = true;
            // 判断课程是否是未购买 且不能试看的
            if (res.data.defaultCurriculumCatalog.curriculumPrivilege) {
              // 获取播放的url
              this.getdefaultPlayerUrl();
            } else {
              if (res.data.defaultCurriculumCatalog.look_at === "2") {
                this.getdefaultPlayerUrl();
              } else {
                message(this, "error", "您还未购买该课程，请先去购买吧！");
              }
            }
          } else {
            message(this, "error", res.msg);
            return false;
          }
        });
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
      // this.player = new Aliplayer(this.aliPlayer)
      players.getPlayerInfos(this.playerForm).then(res => {
        if (res.status === 0) {
          // 先给默认播放的小节暂停
          this.changePlayImg(this.pauseImg, this.playerForm.catalogId);
          // 播放参数播放
          this.playAuthInfo = res.data.playAuthInfo;
          this.aliPlayer.vid = res.data.playAuthInfo.video_id;
          this.aliPlayer.playauth = res.data.playAuthInfo.playAuth;
          if (this.player) {
            this.player.dispose();
            this.$refs.playInner.insertBefore(this.node, this.$refs.playVideo);
          }
          // 不存在 直接创建播放器
          this.player = new Aliplayer(this.aliPlayer);
          // 获取到的下一节的播放信息
          this.playerNextForm.curriculumId = res.data.nextCurriculumId;
          this.playerNextForm.catalogId = res.data.nextCatalogId;
          // 获取到下一节的播放信息
          this.playerPreviousForm.curriculumId = res.data.previousCurriculumId;
          this.playerPreviousForm.catalogId = res.data.previousCatalogId;
          this.bought = res.data.curriculumPrivilege;
          this.lookAt = res.data.look_at;
          this.isFree = res.data.is_free;
          this.nextCatalogId = res.data.nextCatalogId;
          this.$bus.$emit("closeCover");
          // 隐藏播放按钮，放出loading--解决网慢的时候播放按钮暴露--ready之后恢复原貌
          if (this.loadingFlag) {
            this.loadingFlag = false;
            this.playLoading = setInterval(() => {
              this.playerLoad();
            }, 500);
          }
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
        if (!this.bought && res.data.playAuthInfo.is_try_see) {
          this.isTrySee = true;
          this.isTrySeeTime =
            Math.round((Number(res.data.playAuthInfo.free_time) / 60) * 100) /
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
          // 停止socket
          that.socket.emit("watchRecordingTime_disconnect");
          clearInterval(this.interval);
        } else {
          this.seconds--;
          let playTime = this.player.getCurrentTime();
          // 试看的课程
          if (this.playAuthInfo.is_try_see) {
            this.preview(this.playAuthInfo.free_time, playTime);
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
            "watchRecordingTime",
            this.playerForm.curriculumId,
            this.playerForm.catalogId,
            playTime,
            "",
            1
          );
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
      this.socket.emit("watchRecordingTime_disconnect");
    },
    // 视频播放完成之后--未购买：弹出快捷支付框，已购买：播放下一小节
    playerEnded () {
      this.playVideo = true;
      this.changePlayImg(this.pauseImg, this.playerForm.catalogId);
      // 播放结束过滤 --避免播放结束后的指数次回调
      clearInterval(this.interval);
      // 不免费 未购买 试看的课程弹出快捷支付弹框
      if (this.isFree === "1" && !this.bought && this.lookAt == "2") {
        // 取消全屏
        this.player.fullscreenService.cancelFullScreen();
        this.$bus.$emit("openPay", this.pay);
        this.closePayed();
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
    //播放器播放之后 单机击播放器 进行播放或暂停
    playMedia (item) {
      clearTimeout(this.clickTime);
      this.clickTime = setTimeout(() => {
        // 如果点击的当前这个标签是 mediaPlayer 才执行
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isFirefox = userAgent.indexOf("Firefox") > -1;
        var IE = "";
        if (
          userAgent.indexOf("Trident") > -1 &&
          userAgent.indexOf("rv:11") > -1
        ) {
          IE = "IE11";
        } else if (
          userAgent.indexOf("MSIE") > -1 &&
          userAgent.indexOf("Trident") > -1
        ) {
          IE = "IE(8-10)";
        } else if (userAgent.indexOf("MSIE") > -1) {
          IE = "IE(6-7)";
        }
        if (isFirefox) {
          if (this.player && item.target.offsetParent.id == "mediaPlayer") {
            if (this.playVideo) {
              this.player.play();
            } else {
              this.player.pause();
            }
          }
        } else {
          if (this.player && IE) {
            if (item.srcElement.className == "") {
              if (this.playVideo) {
                this.player.play();
              } else {
                this.player.pause();
              }
            }
          } else if (this.player && item.path[1].id == "mediaPlayer") {
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
    //ie低版本的全屏，退出全屏都这个方法
    // iefull () {
    //   if (window.navigator.userAgent.indexOf('compatible') != -1) {
    //     console.log('360兼容模式');
    //   }
    //   if (window.navigator.userAgent.indexOf('AppleWebKit') != -1) {
    //     console.log('360极速模式');
    //   }
    //   if (typeof window.ActiveXObject != "undefined") {
    //     //这的方法 模拟f11键，使浏览器全屏
    //     // var wscript = new ActiveXObject("WScript.Shell");
    //     // if (wscript != null) {
    //     //   console.log('F11');
    //     //   wscript.SendKeys("{F11}");
    //     // }

    //     // var WsShell = new ActiveXObject('WScript.Shell')
    //     // WsShell.SendKeys('{F11}');
    //     var el = document.getElementsByTagName('video')
    //     var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
    //       wscript;
    //     if (typeof rfs != "undefined" && rfs) {
    //       rfs.call(el);
    //       return;
    //     }
    //     if (typeof window.ActiveXObject != "undefined") {
    //       wscript = new ActiveXObject("WScript.Shell");
    //       if (wscript) {
    //         wscript.SendKeys("{F11}");
    //       }
    //     }
    //   }
    // },
    //  播放器进入全屏事件
    fullScreenTrue () {
      //   this.iefull()
      document.getElementsByClassName(
        "prism-big-play-btn"
      )[0].style.visibility = "visible";
      // 用于播放器全屏后大播放按钮显示问题
      this.fullScreen = true;
    },
    //  播放器退出全屏事件
    exitFullScreen () {
      console.log(document);

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
    // 关闭支付
    closePayed () {
      this.index = 0;
      this.player.seek(0);
      this.aliPlayer.autoplay = false;
      this.playVideo = false;
      this.getdefaultPlayerUrl();
      this.setClosePay({ closePay: false });
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
    this.$bus.$on("reupdatecourse", () => {
      this.getdefaultCurriculumCatalog();
      document.body.scrollTop = document.documentElement.scrollTop = 300;
    });
    this.node = this.$refs.mediaPlayer;
    this.beforeRoute = this.$route.path;
    //从个人中心-我的课程-继续学习跳转到课程详情页默认播放
    if (window.location.search.indexOf("paly") >= 0) {
      this.getdefaultCurriculumCatalog();
    }
  },
  watch: {
    closePay (val) {
      if (val) {
        this.closePayed();
      }
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.player) {
        vm.player.pause();
        vm.player.dispose();
        clearInterval(that.interval);
      }
    });
  },
  beforeRouteLeave (to, from, next) {
    if (this.player) {
      this.player.pause();
      this.player.dispose();
      clearInterval(that.interval);
    }
    next();
  }
};
</script>
