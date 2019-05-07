<template>
  <div>
    <input type="text" v-model="aliPlayer.room">
    <div class="button" @click="begin">开始咨询</div>
    <video class="pushVideo" ref="video" autoplay></video>
    <div class="pullBox" ref="pullBox">
      <video class="pullVideo" autoplay ref="pullVideo"></video>
    </div>
  </div>
</template>

<script>
import { profileHome } from "~/lib/v1_sdk/index";
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
      }
    }
  },
  methods: {
    begin () {
      // 先关闭之前的推流
      //   this.aliWebrtc.leaveChannel();
      //   this.aliWebrtc.dispose();

      this.otherAli()
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
        message(this, "success", '发布流成功')
        this.addevent()
      }, (error) => {
        alert(error.message);
      });
    },
    // 1. 获取频道鉴权令牌参数
    otherAli () {
      profileHome.otherAli(this.aliPlayer).then(res => {
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
        this.receivePublish(publisher);
        //远程发布者ID
        console.log(publisher.publisherId, '啦啦啦啦啦啦啦啦啦啦啦');
        //远程发布名字
        console.log(publisher.displayName);
        //远程流内容，streamConfigs是数组，mslabel字段就是streamId
        console.log(publisher.streamConfigs);
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
          this.aliWebrtc.setDisplayRemoteVideo(subscriber, video, stream)
        }
      });
    },
    receivePublish (publisher) {
      var publisherId = publisher.publisherId,
        displayName = publisher.displayName;
      //5.订阅remote流
      this.aliWebrtc.subscribe(publisherId).then((subscribeCallId) => {
        console.log('订阅成功')
      }, (error) => {
        alert(error.message);
      });
    },
    // 获取显示远程视频
    getDisplayRemoteVideo (publisherId, subscribeCallId, displayName) {
      console.log(displayName, 'displayNamedisplayNamedisplayNamedisplayNamedisplayName');

      //   var id = subscribeCallId + '_' + publisherId;
      //   var videoWrapper = $('#' + id);
      //   if (videoWrapper.length == 0) {
      //     videoWrapper = $('<div class="pullVideo" ref="pullVideo" id=' + id +
      //       '> <video autoplay=""></video><div class="display-name"></div></div>');
      //     // $('.video-container').append(videoWrapper);
      //   }
      //   videoWrapper.find('.display-name').text(displayName);
      //   return videoWrapper.find('video')[0];


      //   this.$refs.pullBox
      //   this.$refs.pullVideo
      return this.$refs.pullVideo;

    }
  },
  mounted () {
    this.aliWebrtc = new AliRtcEngine();
    // this.otherAli()
    // this.creatAliplayer()
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