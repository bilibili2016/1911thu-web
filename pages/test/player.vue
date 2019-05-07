<template>
  <div>
    <input type="text" v-model="aliPlayer.room">
    <div class="button" @click="begin">开始咨询</div>
    <video ref="video" autoplay></video>
  </div>
</template>

<script>
import { profileHome } from "~/lib/v1_sdk/index";
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
      console.log(123);

      this.otherAli()
      this.creatAliplayer()
    },
    creatAliplayer () {
      this.aliWebrtc = new AliRtcEngine();
      this.aliWebrtc.startPreview(this.$refs.video).then((obj) => {
        console.log(this.authInfo, this.userName, 'yes');
        this.aliwebrtc.joinChannel(this.authInfo, this.userName).then((obj) => {
          console.log(obj, '入会成功');

          // 入会成功

        }, (error) => {
          // 入会失败，这里console下error内容，可以看到失败原因
          console.log(error.message);
        });

      }).catch((error) => {
        // 预览失败
      });
      //   this.aliWebrtc.startPreview(this.$refs.video).then((obj) => {
      //     // var localVideo = $('.local-video video');
      //     // localVideo[0].srcObject = obj.stream;
      //     //2. 获取频道鉴权令牌参数
      //     getRTCAuthInfo().then((authInfo) => {
      //       console.log(authInfo);

      //       //3. 加入房间
      //       this.aliWebrtc.joinChannel(authInfo, userName).then(() => {
      //         console.log('加入房间成功');
      //         // 4. 发布本地流
      //         this.aliWebrtc.publish().then((res) => {
      //           console.log('发布流成功');
      //         }, (error) => {
      //           console.log(1);

      //           alert(error.message);
      //         });
      //       }).catch((error) => {
      //         console.log(2);
      //         alert(error.message);
      //       })
      //     }).catch((error) => {
      //       console.log(3)
      //       alert(error.message);
      //     });
      //   }).catch((error) => {
      //     console.log(4);

      //     alert(error.message); // 预览失败
      //   });
    },

    otherAli () {
      console.log(1);

      profileHome.otherAli(this.aliPlayer).then(res => {
        console.log(2);

        if (res.status == 0) {
          console.log(3);

          console.log(res.data, ' res.data');

          this.authInfo = res.data
        } else {
          message(this, "error", res.msg);
        }
      });
    }
  },
  mounted () {
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