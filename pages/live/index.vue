<template>
  <div class="live">
    <div class="liveCon" ref="playerBox">
      <div class="left" ref="left">
        <div :class="[isShow?'index self':'self']">
          <video class="mediaCon" ref="pushVideo" autoplay></video>
        </div>
        <div :class="[isShow?'playInner':'playInner index']">
          <video class="pullVideo" autoplay ref="pullVideo"></video>
        </div>
        <div class="time" v-if="showTime==1">直播将在{{min}}分{{second}}秒后开始</div>
        <div class="time" v-if="showTime==2">直播倒计时：{{min}}分{{second}}秒</div>
      </div>
      <div class="right" ref="right">
        <div class="problemBox">
          <h4>咨询问题大纲{{authInfo.channel}}</h4>
          <ul ref="ul">
            <li v-for="(item,index) in questionList" :key="index">{{index+1+'、'}}{{item}}</li>
          </ul>
        </div>
        <div class="liveBtn clearfix">
          <span v-if="begin" class="fl" @click="startPlay">开始直播</span>
          <span v-else class="fl begin">开始直播</span>
          <span v-if="end" class="fr" @click="stopPlay">结束直播</span>
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
    <div class="rightBtn" v-if="isShow">
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
      aliWebrtc: "",
      userName: "1911学堂在线咨询",
      authInfo: {},
      hvuex: {
        publisherList: []
      },
      objLength: "",
      isShow: true,
      isOver: false,
      nearEnd: false,
      begin: false,
      end: false,
      questionList: [],
      teacherLiveInfo: {
        appointId: "",
        type: ""
      },
      aliPlayer: {
        room: "123"
      },
      timer: "",
      variable: 0,
      min: 10000,
      second: 10000,
      showTime: 3,
      gidForm: {
        gids: "tab-twelfth"
      },
      time: ""
    };
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    // 获取数据  直播房间号  详情
    teacherBespokeInfo () {
      live.teacherBespokeInfo(this.teacherLiveInfo).then(response => {
        if (response.status == 0) {
          this.aliPlayer.room = response.data.room_number
          this.time = response.data.teacherBespokeInfo;
          this.questionList = response.data.teacherBespokeInfo.ask_question;
          this.justTime();
          // 1.创建视频播放 房间号
          this.aliWebrtc = new AliRtcEngine();
          this.addevent()
        } else {
          this.begin = false;
          this.end = false;
          message(this, "error", response.msg);
        }
      });
    },
    // 开始直播
    startPlay () {
      live.getPlayAuthInfo(this.aliPlayer).then(res => {
        if (res.status == 0) {
          this.authInfo = res.data.data
          this.creatAliplayer()
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    // 2. 找到播放器预览
    creatAliplayer () {
      console.log('找到播放器预览');
      this.aliWebrtc.startPreview(this.$refs.pushVideo).then((obj) => {
        // 3. 加入房间
        console.log(this.authInfo.channel, '加入房间');
        this.aliWebrtc.joinChannel(this.authInfo, this.userName).then((obj) => {
          // 入会成功
          console.log('入会成功');

          this.publishLocalStreams()
        }, (error) => {
          // 入会失败，这里console下error内容，可以看到失败原因
          message(this, "error", error.message);
        });
      }).catch((error) => {
        // 预览失败
        message(this, "error", error.message);
      });
    },
    // 4. 发布本地流
    publishLocalStreams () {
      this.aliWebrtc.publish().then((res) => {
        console.log('发布流成功');
      }, (error) => {
        message(this, "error", error.message);
      });
    },
    // 事件监听
    addevent () {
      // 远程连接正在建立中时触发
      this.aliWebrtc.on('OnConnecting', (data) => {
        console.log(data.displayName + " 正在建立连接中...");
        console.log(data.type);
      });
      // 完成连接建立时会触发
      this.aliWebrtc.on('OnConnected', (data) => {
        console.log(data.displayName + " 连接已经建立");
        console.log(data.type);
      });
      this.aliWebrtc.on('onPublisher', (publisher) => {
        this.hvuex.publisherList.push(publisher);
        //远程发布者ID
        console.log("监听到远程视频", '啦啦啦啦啦啦啦啦啦啦啦');
        //远程发布名字
        // console.log(publisher.displayName);
        //远程流内容，streamConfigs是数组，mslabel字段就是streamId
        // console.log(publisher.streamConfigs);

        this.receivePublish(publisher);
      });
      //订阅remote流成功后，显示remote流
      this.aliWebrtc.on('onMediaStream', (subscriber, stream) => {
        if (subscriber.publishId != subscriber.subscribeId) {
          var publisher = this.hvuex.publisherList.filter(item => {
            return item.publisherId === subscriber.publishId;
          });
          publisher.length > 0 ? publisher[0].subscribeId = subscriber.subscribeId : '';
          let video = this.getDisplayRemoteVideo(subscriber.publishId, subscriber.subscribeId, subscriber
            .displayName);
          console.log(subscriber, video, stream, '对方的直播参数');
          this.aliWebrtc.setDisplayRemoteVideo(subscriber, video, stream)
        }
      });
      //   当频道里的其他人取消发布本地流时时触发
      this.aliWebrtc.on('onUnPublisher', (publisher) => {
        //远程发布者ID,subscribe方法需要这个参数值
        console.log(publisher.publisherId);
        //远程发布名字
        console.log(publisher.displayName);
        //所在频道
        console.log(publisher.channel);
      });
      //   当其他用户离开频道时触发
      this.aliWebrtc.on('onLeave', (data) => {
        console.log(data.displayName + "离开频道");
        message(this, "info", "对方离开了频道");

      });
      //  当有错误发生时触发
      this.aliWebrtc.on('onError', (error) => {
        let msg = error && error.message ? error.message : error;
        if (msg && msg.indexOf('no session') > 0) {
          error = "请重新登录：" + msg;
        }
        message(this, "error", "错误：" + msg);
      });
    },
    receivePublish (publisher) {
      var publisherId = publisher.publisherId,
        displayName = publisher.displayName;
      //5.订阅remote流
      this.aliWebrtc.subscribe(publisherId).then((subscribeCallId) => {
        console.log('订阅remote流----------订阅成功')
      }, (error) => {
        message(this, "error", error.message);
      });
    },
    // 获取显示远程视频
    getDisplayRemoteVideo (publisherId, subscribeCallId, displayName) {
      return this.$refs.pullVideo;
    },
    // 改变屏幕宽度重置播放器大小
    resize () {
      if (document.body.clientHeight) {
        this.$nextTick(() => {
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
    stopPlay () {
      if (this.aliWebrtc) {
        // 离开房间，服务端会自动断流
        this.aliWebrtc.leaveChannel();
        this.aliWebrtc.dispose();
        this.end = false
        console.log(123123123);

      } else {
        console.log(11111111);

        this.end = false
        message(this, "info", "请确认在开始直播之后再结束！");
      }
    },
    // 关闭即将结束
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
    // 切换显示隐藏我自己的视频
    handleClick () {
      this.isShow = !this.isShow;
    },
    // 判断当前时间：开始前预备时间——或——直播已经开始
    justTime () {
      //  开始前5分钟进来的
      if (
        (parseInt(this.time.start_time) - this.time.service_time) / 60 > 0 &&
        (parseInt(this.time.start_time) - this.time.service_time) / 60 < 5
      ) {
        this.variable = parseInt(this.time.start_time) - this.time.service_time;
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.countdown(1);
      } else {
        this.begin = true;
        this.end = true;
      }
      //   直播已经开始
      if (
        parseInt(this.time.start_time) < this.time.service_time &&
        parseInt(this.time.end_time) > this.time.service_time
      ) {
        this.variable = parseInt(this.time.end_time) - this.time.service_time;
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.countdown(2);
      }
    },
    // 进入页面后 触发的倒计时
    countdown (num) {
      this.timer = setInterval(() => {
        if (this.variable > 0) {
          this.showTime = num;
          this.variable--;
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
            this.stopPlay();
            this.begin = false;
            this.end = false;
            this.isOver = true;
          }
          this.showTime = 3;
        }
      }, 1000);
    },
  },
  mounted () {
    if (!persistStore.get("token")) {
      this.$router.push("/");
      this.$bus.$emit("loginShow", true);
      this.$bus.$emit("headerFooterShow");
      return false;
    }
    this.teacherLiveInfo.appointId = matchSplits("id");
    this.teacherLiveInfo.type = matchSplits("type");
    this.resize();
    window.addEventListener("resize", this.resize);
    this.teacherBespokeInfo();
    if (this.timer) {
      clearInterval(this.timer);
    }
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
