<template>
  <div class="live">
    <div class="liveCon" ref="playerBox">
      <div class="left" ref="left">
        <div :class="[isShow?'playInner':'playInner index']" ref="playInner">
          <div id="mediaPlayer" ref="mediaPlayer" class="mediaCon"></div>
        </div>
        <div :class="[isShow?'index self':'self']">
          <div ref="tbliveDiv" class="tbliveDiv">
            <div class="tblive" id="tblive" ref="tblive"></div>
          </div>
          <embed v-show="showEmbedDiv" ref="embedDiv" class="embedDiv" src="/images/zhansi.swf" quality="high" pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="580" height="430" style="background-color:#626262">
        </div>
        <div class="time" v-if="showTime==1">{{min}}分{{second}}秒后开始直播</div>
        <div class="time" v-if="showTime==2">直播倒计时：{{min}}分{{second}}秒</div>
        <!-- <div class="topBar"></div>
        <img src="https://static-image.1911edu.com/live-bg1.png" alt="">
        <div class="bottomBar clearfix">
          <span class="time fl">直播倒计时：20分15秒</span>
          <span class="btn nearBtn fr">结束直播</span>
          <span class="btn endBtn fr">结束直播</span>
        </div> -->
      </div>
      <div class="right" ref="right">
        <div class="problemBox">
          <h4>咨询问题大纲</h4>
          <ul ref="ul">
            <!-- <li v-for="(item,index) in question" :key="index">{{item}}</li> -->
            <!-- <li>{{time.remark}}</li> -->
          </ul>
        </div>
        <div class="liveBtn clearfix">
          <span v-if="begin" class="fl" @click="start_play">开始直播</span>
          <span v-else class="fl begin">开始直播</span>
          <span v-if="end" class="fr" @click="stop_play">结束直播</span>
          <span v-else class="fr end">结束直播</span>
        </div>
      </div>
      <!-- 即将结束 -->
      <div class="pop nearEnd" v-if="nearEnd">
        <i class="el-icon-close" @click="closeNearend"></i>
        <p>尊敬的学员您好，本次的咨询时间即将结束，请您合理分配时间！</p>
      </div>
      <!-- 已结束 -->
      <div class="pop over" v-if="isOver">
        <p>本次一对一视频直播咨询服务已结束。</p>
        <span class="btn" @click="goProfile">返回个人中心</span>
      </div>
    </div>
    <!-- 即将结束 -->
    <div class="nearEnd pop" v-if="nearEnd">
      <i class="el-icon-close" @click="closeNearend"></i>
      <p>尊敬的{{this.teacherLiveInfo.type=='1'?"学员":"导师"}}您好，本次的咨询时间即将结束，请您合理分配时间！</p>
    </div>
    <!-- 已结束 -->
    <div class="over" v-if="isOver">
      <div class="inner pop">
        <p>本次一对一视频直播咨询服务已结束。</p>
        <span class="btn" @click="goProfile">返回个人中心</span>
      </div>
    </div>
    <div class="rightBtn">
      <div class="yellow" @click="handleClick">
        <img v-if="!isShow" src="https://static-image.1911edu.com/live-white.png" alt="">
        <img v-else src="https://static-image.1911edu.com/live-yellow.png" alt="">
        <p :class="{white:!isShow}">我的视频</p>
      </div>
    </div>
  </div>
</template>
<script>
import { live } from "~/lib/v1_sdk/index";
import { mapActions } from "vuex";
import { matchSplits, setTitle, message } from "@/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";

export default {
  data () {
    return {
      objLength: "",
      isShow: true,
      isOver: false,
      nearEnd: false,
      begin: false,
      end: false,
      question: [
        "1、远程班学习效果能保证吗？",
        "2、远程班学习效果能保证吗？远程班学习效果能保证吗？",
        "3、远程班学习效果能保证吗？",
        "4、远程班学习效果能保证吗？远程班学习效果能保证吗？",
        "5、远程班学习效果能保证吗？",
        "6、远程班学习效果能保证吗？远程班学习效果能保证吗？",
        "7、远程班学习效果能保证吗？",
        "8、远程班学习效果能保证吗？远程班学习效果能保证吗？",
        "9、远程班学习效果能保证吗？",
        "10、远程班学习效果能保证吗？远程班学习效果能保证吗？",
        "11、远程班学习效果能保证吗？",
        "12、远程班学习效果能保证吗？远程班学习效果能保证吗？",
        "13、远程班学习效果能保证吗？",
        "14、远程班学习效果能保证吗？远程班学习效果能保证吗？"
      ],
      teacherLiveInfo: {
        appointId: "",
        type: ""
      },
      jsFile:
        "//g.alicdn.com/aliyun/aliyun-assets/0.0.3/swfobject/swfobject.js",
      url: {
        pushUrl: "",
        pullUrl: ""
      },
      pullPlay: "",
      pullaliPlayer: {
        id: "mediaPlayer", //播放器id
        source: "",
        width: "100%",
        height: "100%",
        autoplay: true,
        isLive: true,
        rePlay: false,
        playsinline: true,
        preload: true,
        controlBarVisibility: "hover",
        useH5Prism: true,
        useFlashPrism: true
      },
      node: "",
      timer: "",
      variable: 0,
      min: 10000,
      second: 10000,
      showTime: 3,
      showEmbedDiv: true,
      gidForm: {
        gids: "tab-twelfth"
      },
      loadTime: "",
      time: ""
    };
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    // 改变屏幕宽度重置播放器大小
    resize () {
      console.log(2);

      if (document.body.clientHeight) {
        this.$nextTick(() => {
          console.log(3);

          const h = document.body.clientHeight;
          const w = document.body.clientWidth;
          this.width = document.body.clientWidth;
          if (this.$refs.left) {
            this.$refs.left.style.width = w - 300 + "px";
            this.$refs.left.style.height = h + "px";
            this.$refs.right.style.height = h + "px";
            this.$refs.ul.style.height = h - 80 - 90 + "px";
          }
        });
      }
    },
    closeNearend () {
      this.nearEnd = false;
    },
    // 跳转个人中心
    goProfile () {
      if (this.teacherLiveInfo.type == "1") {
        this.gidForm.gids = "tab-twelfth";
      } else {
        this.gidForm.gids = "tab-thirteenth";
      }
      this.setGid(this.gidForm);
      this.$router.push("/profile");
    },
    handleClick () {
      this.isShow = !this.isShow;
    },
    // 获取数据  播放地址  详情
    teacherBespokeInfo () {
      console.log(4);

      live.teacherBespokeInfo(this.teacherLiveInfo).then(response => {
        if (response.status == 0) {
          console.log(5);

          this.url = response.data;
          this.time = response.data.teacherBespokeInfo;
          this.justTime();
        } else {
          this.begin = false;
          this.end = false;
          message(this, "error", response.msg);
        }
        // this.$bus.$emit("headerFooterHide");
      });
    },
    // 判断当前时间：开始前预备时间——或——直播已经开始
    justTime () {
      console.log(6);

      //  开始前5分钟进来的
      if (
        (parseInt(this.time.start_time) - this.time.service_time) / 60 > 0 &&
        (parseInt(this.time.start_time) - this.time.service_time) / 60 < 5
      ) {
        console.log(7);

        this.variable = parseInt(this.time.start_time) - this.time.service_time;
        if (this.timer) {
          console.log(8);

          clearInterval(this.timer);
        }
        this.countdown(1);
      } else {
        console.log(9);

        this.begin = true;
        this.end = true;
      }
      //   直播已经开始
      if (
        parseInt(this.time.start_time) < this.time.service_time &&
        parseInt(this.time.end_time) > this.time.service_time
      ) {
        console.log(101);

        this.variable = parseInt(this.time.end_time) - this.time.service_time;
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.countdown(2);
      }
    },
    // 进入页面后 触发的倒计时
    countdown (num) {
      console.log(10000000);

      this.timer = setInterval(() => {
        if (this.variable > 0) {
          this.showTime = num;
          this.variable--;
          console.log(this.variable, 'this.variable');

          this.min = parseInt(this.variable / 60);
          this.second = this.variable % 60;
          if (this.variable == 300 && this.showTime == 2) {
            this.nearEnd = true;
          }
        } else {
          if (this.timer) {
            clearInterval(this.timer);
          }
          //   等待直播结束
          if (this.showTime == 1) {
            this.teacherBespokeInfo();
          }
          //   直播结束
          if (this.showTime == 2) {
            this.stop_play();
            this.begin = false;
            this.end = false;
            this.isOver = true;
          }
          this.showTime = 3;
        }
      }, 1000);
    },
    //开始直播
    start_play () {
      if (swfobject) {
        swfobject.getObjectById("tblive").Start(this.url.pushUrl);
        //   创建拉流播放器
        this.creatPlayer(this.url);
      } else {
        // 调用之前还没创建的话就再创建一下
        this.newPlayer();
      }
    },
    //结束直播
    stop_play () {
      swfobject.getObjectById("tblive").Stop();
      if (this.pullPlay) {
        this.pullPlay.pause();
        this.pullPlay.dispose();
        this.$refs.mediaPlayer.innerHTML = "";
        this.$refs.playInner.appendChild(this.node);
      }
    },
    // 创建播放器并传入参数
    newPlayer () {
      swfobject.embedSWF(
        "//g.alicdn.com/aliyun/aliyun-assets/0.0.6/swfobject/new/liveroom.swf",
        "tblive",
        580,
        430,
        "9.0",
        "//g.alicdn.com/aliyun/aliyun-assets/0.0.6/swfobject/new/liveroom.swf?",
        {},
        {
          quality: "high",
          allowFullScreen: "true",
          wmode: "transparent",
          menu: "true",
          allowScriptAccess: "always"
        }
      );
      //   this.objLength = document.getElementById("tblive").children.length;
      //   if (this.objLength == 0) {
      //     this.$refs.embedDiv.style.zIndex = 10;
      //   } else {
      //     this.$refs.embedDiv.style.zIndex = 1;
      //   }
      //   推流播放器样式改写
      //   document.getElementsByTagName("object")[0].style.background = "#626262"
    },
    // 刚进入页面的时候加载完flash播放器 轮询检测播放器是否创建成功
    load () {
      this.loadtime = setInterval(() => {
        if (document.getElementById("tblive")) {
          this.objLength = document.getElementById("tblive").children.length;
          if (this.objLength > 0) {
            if (!!window.ActiveXObject || "ActiveXObject" in window) {
              this.showEmbedDiv = false;
              //   this.demo()
              console.log(this.demo(), 1);

            } else {
              //   this.demo()
              console.log(this.demo(), 2);

              this.$refs.embedDiv.style.zIndex = 1;
            }
            clearInterval(this.loadtime);
          }
        }
      }, 1000);
    },
    demo () {
      var flag = false;
      if (window.ActiveXObject) {
        try {
          var swf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          if (swf) {
            flag = true;
          }
        } catch (e) {
        }
      } else {
        try {
          var swf = navigator.plugins['Shockwave Flash'];
          if (swf) {
            flag = true;
          }
        } catch (e) {
        }
      }
      if (flag) {
        return true
      } else {
        return false
      }
    },
    creatPlayer (url) {
      this.pullaliPlayer.source = url.pullUrl;
      // 不存在 直接创建播放器
      this.pullPlay = new Aliplayer(this.pullaliPlayer);
      this.pullPlay.on("ready", this.readyPlay);
      this.pullPlay.on("play", this.playerPlay);
      this.pullPlay.on("ended", this.playerEnded);
      this.pullPlay.on("error", this.playerError);
      document.getElementsByClassName("prism-ErrorMessage")[0].style.display =
        "none";
    },
    // 隐藏播放按钮，放出loading--解决网慢的时候播放按钮暴露--ready之后恢复原貌
    playerLoad () {
      if (document.getElementsByClassName("prism-hide")[0]) {
        document.getElementsByClassName("prism-hide")[0].className =
          "prism-loading";
      }
    },
    // 视频准备好之后执行
    readyPlay () {
      //   console.log("ready");
    },
    // 播放开始--启动计时器
    playerPlay () {
      //   console.log("playerPlay");
    },
    playerEnded () {
      //   console.log("playerEnded");
    },
    playerError (error) {
      //   console.log(error, 'error');
    }
  },
  mounted () {
    if (!persistStore.get("token")) {
      this.$router.push("/");
      this.$bus.$emit("loginShow", true);
      this.$bus.$emit("headerFooterShow");
      return false;
    }
    console.log(1);

    this.node = this.$refs.mediaPlayer;
    this.teacherLiveInfo.appointId = matchSplits("id");
    this.teacherLiveInfo.type = matchSplits("type");
    this.resize();
    window.addEventListener("resize", this.resize);

    this.teacherBespokeInfo();
    if (this.loadtime) {
      clearInterval(this.loadtime);
    }
    //   创建推流播放器
    this.newPlayer();
    this.load();
  },
  //  销毁之前展示头部 底部
  destroyed () {
    this.$bus.$emit("headerFooterShow");
  },
  //   进入页面的的时候
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bus.$emit("headerFooterHide");
    });
  },
  beforeRouteLeave (to, from, next) {
    // this.$bus.$emit("headerFooterShow");
    next();
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/live/index";
</style>
