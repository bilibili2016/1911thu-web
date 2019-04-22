<template>
  <div class="live">
    <div class="liveCon">
      <div>
        <div class="topBar"></div>
        <!-- <img src="https://static-image.1911edu.com/live-bg1.png" alt=""> -->
        <div class="clearfix">
          <div id="mediaPlayer" ref="mediaPlayer" class="mediaCon"></div>
          <!-- <div class="pull" id="pullUrl" ref="pullUrl"></div> -->
        </div>
        <div class="bottomBar">
          <span class="time">直播倒计时：20分15秒</span>
        </div>
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
import { message, matchSplits } from "@/lib/util/helper";
import PlayerError from "@/components/common/PlayerError.vue";

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
      studengtInfo: {
        appointId: ""
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
        useH5Prism: true
      }
    };
  },
  methods: {
    getdefaultPlayerInfo () {
      live.teacherBespokeInfo(this.studengtInfo).then(res => {
        if (res.status == 0) {
          this.pullaliPlayer.source = res.data.pullUrl;
          // this.pullaliPlayer.source =
          //   "rtmp://pull.1911edu.com/1911xuetang/201800017?auth_key=1555501472-0-0-56ec4980ec520051da1ef6321596b5d4";
          // 不存在 直接创建播放器
          this.pullPlay = new Aliplayer(this.pullaliPlayer);
          this.pullPlay.on("ready", this.readyPlay);
          this.pullPlay.on("play", this.playerPlay);
          this.pullPlay.on("ended", this.playerEnded);
          this.pullPlay.on("error", this.playerError);
          document.getElementsByClassName(
            "prism-ErrorMessage"
          )[0].style.display = "none";
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
    this.studengtInfo.appointId = matchSplits("id");
    this.getdefaultPlayerInfo();
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/live/index";
</style>
