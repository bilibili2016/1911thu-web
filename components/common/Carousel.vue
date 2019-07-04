<template>
  <div>
    <div class="banner" v-if="config.carousel==='home'">
      <div class="carousel homeCarousel">
        <el-carousel :interval="5000" class="lbt indexBanner" ref="elCarousel">
          <el-carousel-item class="elCarouselItem" v-for="(img,index) in items" :key="index" :class="{'marginLeft':marginLeft}">
            <div class="videoDiv" v-if="img.jump_type==5" @click="playVideo(img.jump_url)">
              <img id="innerImg" class="bannerImg" :src="img.picture">
              <img class="playImg" src="https://static-image.1911edu.com/videoPlay.png" alt="">
            </div>
            <img v-if="img.jump_type!=5" class="bannerImg" id="innerImg" :src="img.picture" alt="" @click="handleLink(img)">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 首页banner图视频播放弹窗 -->
    <div class="shadow" v-if="showShadow">
      <div class="videoBox">
        <i class="el-icon-close" @click="pauseVideo()"></i>
        <video class="video" ref="video" controls="controls">
          <source :src="player.url" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="newsCarousel fl" v-if="config.carousel==='news'">
      <el-carousel :interval="4000">
        <!-- <el-carousel-item v-for="(item,index) in swiperData" :key="index" v-if="index<4"> -->
        <el-carousel-item>

          <div class="newsLi" @click="goDetail(swiperData[0])">
            <img :src="swiperData[0].picture" alt="">
            <div class="info">
              <h4>{{swiperData[0].title}}</h4>
              <p>{{swiperData[0].introduce}}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 名师智库 -->
    <div class="banner" v-if="config.carousel==='teacher'">
      <div class="carousel homeCarousel">
        <el-carousel :interval="5000" class="lbt indexBanner" ref="elCarousel">
          <el-carousel-item class="teacherElCarouselItem" v-for="(img,index) in teacherBanner" :key="index">
            <img class="bannerImg" style="cursor:inherit" id="innerImg" :src="img.picture" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { isMobileTerminal } from "@/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";
import { open, checkURL } from "@/lib/util/helper";
export default {
  props: ["items", "config", "swiperData", "coreData", "teacherBanner"],
  data () {
    return {
      timer: null,
      showShadow: false,
      kidForm: {
        kids: ""
      },
      player: {
        url: ""
      },
      courseUrl: {
        base: "/curriculum/detail",
        kid: 0,
        tid: 0,
      },
      marginLeft: false
    };
  },
  methods: {
    ...mapActions("auth", ["setKid"]),
    setActiveItem (index) {
      // if (this.$refs.coreCarousel.$el.style.display == "none") {
      //   return false;
      // }
      //   setTimeout(() => {
      //     console.log(this.$refs.coreRightCarousel.$el, "pp");
      //   }, 4000);
      this.$nextTick(() => {
        // this.$refs.elCarousel.setActiveItem(index);
      });
    },
    handleLink (img) {
      // jump_type = 0  普通跳转 根据jump_url地址跳转
      // jump_type = 1  跳转至课程详情 jump_id 课程id
      // jump_type = 2  跳转至项目详情 jump_id 项目id
      if (img.jump_type == "0" && img.jump_url != "") {
        window.open(checkURL(img.jump_url));
      }
      if (img.jump_type == "1" && img.jump_id != "") {
        this.courseUrl.kid = img.jump_id;
        open(this.courseUrl);
      }
      if (img.jump_type == "2" && img.jump_id != "") {
        this.$router.push({
          path: "/project/projectdetail",
          query: {
            kid: img.jump_id,
            type: 1
          }
        });
      }
    },
    goDetail (news) {
      this.$router.push("/home/news/" + news.id);
    },
    setWidth () {
      let Dwidth = document.body.clientWidth;
      if (document.getElementsByClassName("el-carousel").length != 0) {
        if (Dwidth > 1920) {
          document.getElementsByClassName("el-carousel")[0].style.width =
            1920 + "px";
        } else {
          document.getElementsByClassName("el-carousel")[0].style.width =
            Dwidth + "px";
        }
      }
    },
    playVideo (url) {
      this.player.url = url;
      this.showShadow = true;
      this.$nextTick(() => {
        this.$refs.video.play();
      });
    },
    //暂停
    pauseVideo () {
      this.showShadow = false;
      this.$refs.video.pause();
    }
  },
  mounted () {
    this.setWidth();
    window.onresize = () => {
      return (() => {
        this.setWidth();
        let Dwidth = document.body.clientWidth;
        let imgArr;
        if (document.getElementsByClassName("elCarouselItem")) {
          imgArr = document.getElementsByClassName("elCarouselItem");
        }
        if (document.getElementsByClassName("teacherElCarouselItem")) {
          imgArr = document.getElementsByClassName("teacherElCarouselItem");
        }

        if (Dwidth <= 1920) {
          let marginLeft = (1920 - Dwidth) / 2;
          for (var i = 0; i < imgArr.length; i++) {
            imgArr[i].style.marginLeft = -marginLeft + "px";
          }
        }
      })();
    };
    if (isMobileTerminal()) {
      this.marginLeft = true
    } else {
      this.marginLeft = false
    }
  }
};
</script>
