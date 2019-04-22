<template>
  <div class="live">
    <div class="liveCon">
      <div>
        <div class="btn-start" @click="start_play">开始直播</div>
        <div class="btn-end" @click="stop_play">结束直播</div>
        <div id="tblive"></div>
        <!-- <div class="topBar"></div>
        <img src="https://static-image.1911edu.com/live-bg1.png" alt="">
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
        appointId: '',
      },
      jsFile: '//g.alicdn.com/aliyun/aliyun-assets/0.0.3/swfobject/swfobject.js',
      url: {
        pushUrl: '',
        pullUrl: ''
      }
    };
  },
  methods: {
    teacherBespokeInfo () {
      live.teacherBespokeInfo(this.teacherLiveInfo).then(response => {
        if (response.status == 0) {
          this.url = response.data
          this.newPlayer()
        } else {
          message(this, 'error', response.msg)
        }
      });
    },
    //开始直播
    start_play () {
      //   console.log(this.url.pullUrl);
      swfobject.getObjectById('tblive').Start(this.url.pushUrl);
    },
    //结束直播
    stop_play () {
      swfobject.getObjectById('tblive').Stop();
    },
    creatPlayer () {
      let script = document.createElement('script');
      script.type = "text/javascript";
      script.src = this.jsFile;
      document.body.appendChild(script);
    },
    newPlayer () {
      // 创建播放器并传入参数
      swfobject.embedSWF("//g.alicdn.com/aliyun/aliyun-assets/0.0.6/swfobject/new/liveroom.swf", "tblive", 580, 430, "9.0", "//g.alicdn.com/aliyun/aliyun-assets/0.0.6/swfobject/new/liveroom.swf?", {}, { quality: "high", allowFullScreen: "true", wmode: "transparent", menu: "true", allowScriptAccess: "always" });
    }
  },
  mounted () {
    // this.creatPlayer()
    this.teacherLiveInfo.appointId = matchSplits('id')
    this.teacherBespokeInfo()

  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/live/teacherLive";
</style>
