<template>
  <div>
    房间号：<input type="text" v-model="aliPlayer.room">
    <div class="button" @click="begin">开始咨询</div>
    <video class="pushVideo" ref="video" autoplay></video>
    <div class="pullBox">
      <video class="pullVideo" autoplay ref="pullVideo"></video>
    </div>
    <div v-if="action">累计开始时长：{{minute}}分钟{{second}}秒</div>
  </div>
</template>

<script>
import { live } from "~/lib/v1_sdk/index";
import { message } from "@/lib/util/helper";
export default {
  data () {
    return {
      aliWebrtc: "",
      video: "",
      aliPlayer: {
        room: "1234567"
      },
      userName: "1911学堂在线咨询",
      authInfo: {},
      hvuex: {
        publisherList: []
      },
      time: 0,
      timer: "",
      second: 0,
      minute: 0,
      action: false
    }
  },
  methods: {
    begin () {
      if (this.aliPlayer.room) {
        this.otherAli()
      } else {
        message(this, "error", "填写房间号啊！！！");
      }
    },
    // 2. 找到播放器预览
    creatAliplayer () {
      this.aliWebrtc.startPreview(this.$refs.video).then((obj) => {
        // 3. 加入房间
        this.aliWebrtc.joinChannel(this.authInfo, this.userName).then((obj) => {
          // 入会成功
          this.publishLocalStreams()
        }, (error) => {
          // 入会失败，这里console下error内容，可以看到失败原因
          console.log(error.message);
        });

      }).catch((error) => {
        // 预览失败
      });
    },
    // 4. 发布本地流
    publishLocalStreams () {
      this.aliWebrtc.publish().then((res) => {
        console.log('发布流成功');

      }, (error) => {
        alert(error.message);
        console.log('发布流失败');


      });
    },
    // 1. 获取频道鉴权令牌参数
    otherAli () {
      live.otherAli(this.aliPlayer).then(res => {
        if (res.code == 0) {
          this.authInfo = res.data
          this.creatAliplayer()
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    // 事件监听
    addevent () {
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
          var video = this.getDisplayRemoteVideo(subscriber.publishId, subscriber.subscribeId, subscriber
            .displayName);
          console.log(subscriber, video, stream, '对方的直播参数');

          this.aliWebrtc.setDisplayRemoteVideo(subscriber, video, stream)
        }
      });
    },
    receivePublish (publisher) {
      var publisherId = publisher.publisherId,
        displayName = publisher.displayName;
      //5.订阅remote流
      this.aliWebrtc.subscribe(publisherId).then((subscribeCallId) => {
        console.log('订阅remote流----------订阅成功')
        this.theTimer()
      }, (error) => {
        alert(error.message);
      });
    },
    // 获取显示远程视频
    getDisplayRemoteVideo (publisherId, subscribeCallId, displayName) {
      return this.$refs.pullVideo;
    },
    theTimer () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.time = 0
      this.action = true
      this.timer = setInterval(() => {
        this.time++
        this.second = this.time % 60 < 10 ? '0' + this.time % 60 : this.time % 60
        this.minute = parseInt(this.time / 60) < 10 ? '0' + parseInt(this.time / 60) : parseInt(this.time / 60)
      }, 1000);
    }
  },
  mounted () {
    this.aliWebrtc = new AliRtcEngine();
    this.addevent()
  },
}
</script>

<style scoped>
input {
  width: 200px;
  height: 40px;
  border: 1px solid #000;
  margin: 30px;
  z-index: 9999;
  position: relative;
}
.button {
  width: 100px;
  height: 40px;
  margin: 0 30px;
  line-height: 40px;
  text-align: center;
  background-color: skyblue;
  color: #000;
  z-index: 9999;
  position: relative;
  cursor: pointer;
}
.pushVideo {
  width: 300px;
  height: 300px;
  position: fixed;
  top: 100px;
  right: 500px;
}
.pullVideo {
  width: 300px;
  height: 300px;
  position: fixed;
  top: 100px;
  right: 0;
}
.pullBox {
  display: inline-block;
}
</style>