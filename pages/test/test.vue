<template>
  <div>
    <div class="centers">
      <!-- <video id="movd" width="414" height="270" preload="auto" playsinline webkit-playinline x5-playinline ref="mov">
      </video> -->
      <div id="movd" style="width:100%;height:auto;"></div>
    </div>
  </div>
</template>

<script>
// import tcPlayer from 'tcplayer'

  export default {
    data() {
      return {
      }
    },
    methods: {
    },
    mounted () {
      // console.log(this.$refs.mov.id, '这是this')
      this.$nextTick(function () {
        const player = new TcPlayer('movd' , {
          "m3u8": "http://2157.liveplay.myqcloud.com/2157_358535a.m3u8", //请替换成实际可用的播放地址
"autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
"coverpic" : "http://www.test.com/myimage.jpg",
"width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
"height" : '320'//视频的显示高度，请尽量使用视频分辨率高度
        });
      })
    }
  }
</script>

<style scoped>
.centers {
  width: 244px;
  height: 200px;
  margin: 133px auto;
}
.centers img{
  width: 244px;
  height: 200px;;
}
</style>
