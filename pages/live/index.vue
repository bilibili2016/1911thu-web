<template>
  <div class="live">
    <div class="liveCon">
      <div>
        <div class="playInner" ref="playInner">
          <div id="mediaPlayer" ref="mediaPlayer" class="mediaCon"></div>
        </div>
        <div class="self">
          <div class="liveBtn">
            <span @click="start_play">开始直播</span>
            <span @click="stop_play">结束直播</span>
          </div>
          <div class="tblive" id="tblive"></div>
        </div>
        <!-- <div class="topBar"></div>
        <img src="http://static-image.1911edu.com/live-bg1.png" alt="">
        <div class="bottomBar clearfix">
          <span class="time fl">直播倒计时：20分15秒</span>
          <span class="btn nearBtn fr">结束直播</span>
          <span class="btn endBtn fr">结束直播</span>
        </div> -->
      </div>
      <!-- 即将结束 -->
      <div class="pop nearEnd" v-if="nearEnd">
        <i class="el-icon-close"></i>
        <p>尊敬的学员您好，本次的咨询时间即将结束，请您合理分配时间！</p>
      </div>
      <!-- 已结束 -->
      <div class="pop end" v-if="isOver">
        <p>本次一对一视频直播咨询服务已结束。</p>
        <span class="btn">返回个人中心</span>
      </div>
    </div>
    <div class="liveDetail">
      <h1>咨询问题大纲</h1>
      <div class="detail-items">
        <p class="item" v-for="(item,index) in question" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { live } from "~/lib/v1_sdk/index";
import { matchSplits, setTitle, message } from "@/lib/util/helper";

export default {
  data () {
    return {
      isOver: false,
      nearEnd: false,
      question: [
        "1、远程班学习效果能保证吗？",
        "2、请问学完课程，将会获得什么？",
        "3、请问报名缴费后多久可以上课？",
        "4、报名缴费后可以退款吗？"
      ],
      teacherLiveInfo: {
        appointId: ""
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
        height: "620px",
        autoplay: true,
        isLive: true,
        rePlay: false,
        playsinline: true,
        preload: true,
        controlBarVisibility: "hover",
        useH5Prism: true,
        useFlashPrism: true
      },
      node: ''
    };
  },
  methods: {
    teacherBespokeInfo () {
      live.teacherBespokeInfo(this.teacherLiveInfo).then(response => {
        if (response.status == 0) {
          this.url = response.data
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    //开始直播
    start_play () {
      if (swfobject) {
        swfobject.getObjectById('tblive').Start(this.url.pushUrl);
        //   创建拉流播放器
        this.creatPlayer(this.url)
      } else {
        // 调用之前还没创建的话就再创建一下
        this.newPlayer()
      }
    },
    //结束直播
    stop_play () {
      swfobject.getObjectById("tblive").Stop();
      if (this.pullPlay) {
        this.pullPlay.pause();
        this.pullPlay.dispose();
        this.$refs.mediaPlayer.innerHTML = ""
        this.$refs.playInner.appendChild(this.node);
      }
    },
    newPlayer () {
      // 创建播放器并传入参数
      swfobject.embedSWF("//g.alicdn.com/aliyun/aliyun-assets/0.0.6/swfobject/new/liveroom.swf", "tblive", 580, 430, "9.0", "//g.alicdn.com/aliyun/aliyun-assets/0.0.6/swfobject/new/liveroom.swf?", {}, { quality: "high", allowFullScreen: "true", wmode: "transparent", menu: "true", allowScriptAccess: "always" });
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
      console.log("ready");
    },
    // 播放开始--启动计时器
    playerPlay () {
      console.log("playerPlay");
    },
    playerEnded () {
      console.log("playerEnded");
    },
    playerError (error) {
      console.log(error);
    }
  },
  mounted () {
    this.node = this.$refs.mediaPlayer
    this.teacherLiveInfo.appointId = matchSplits('id')
    this.teacherBespokeInfo()
    //   创建推流播放器
    this.newPlayer()

  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/live/index";
</style>
