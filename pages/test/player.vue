<template>
  <div>
    <input type="text" v-model="aliPlayer.room">
    <div class="button" @click="begin">开始咨询</div>
    <video ref="video" autoplay></video>
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
      }, (error) => {
        console.log(1);

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
video {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>