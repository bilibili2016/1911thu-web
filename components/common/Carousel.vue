<template>
  <div>
    <div class="banner" v-if="config.carousel==='home'">
      <div class="carousel">
        <el-carousel :interval="500000" class="lbt indexBanner">
          <el-carousel-item v-for="(img,index) in items" :key="index">
            <div class="videoDiv" v-if="img.jump_type==5" @mouseenter="enter()" @mouseleave="leave()">
              <!-- <video class="video" :src="img.jump_url" controls="controls">
                您的浏览器不支持 video 标签。
              </video> -->
              <video class="video" id="video">
                <source :src="img.jump_url" type="video/mp4" />
              </video>
              <div class="playBtn" id="play" v-if="palyVideoShow" @click="palyVideo">
                <img src="http://static-image.1911edu.com/videoPlay.png" alt="">
              </div>
              <div class="playBtn " id="pause" v-if="puseVideoShow" @click="pauseVideo">
                <img src="http://static-image.1911edu.com/videoPause.png" alt="">
              </div>
            </div>
            <img v-if="img.jump_type!=5" id="innerImg" :src="img.picture" alt="" @click="handleLink(img)">
          </el-carousel-item>
        </el-carousel>
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
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { open } from "@/lib/util/helper";
export default {
  props: ["items", "config", "swiperData"],
  data() {
    return {
      timer: null,
      play: true,
      palyVideoShow: true,
      puseVideoShow: false,
      kidForm: {
        kids: ""
      },
      courseUrl: {
        base: "/course/coursedetail",
        kid: 0,
        bid: "",
        page: 0
      }
    };
  },
  methods: {
    ...mapActions("auth", ["setKid"]),
    handleLink(img) {
      // jump_type = 0  普通跳转 根据jump_url地址跳转
      // jump_type = 1  跳转至课程详情 jump_id 课程id
      // jump_type = 2  跳转至项目详情 jump_id 项目id
      if (img.jump_type == "0" && img.jump_url != "") {
        if (/(http|https):\/\/([\w.]+\/?)\S*/.test(img.jump_url)) {
          window.open(img.jump_url);
        } else {
          img.jump_url = "http://" + img.jump_url;
          window.open(img.jump_url);
        }
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
    goDetail(news) {
      this.$router.push("/home/news/" + news.id);
    },
    setWidth() {
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
    palyVideo() {
      this.play = false;
      this.palyVideoShow = false;
      this.puseVideoShow = true;
      let video = document.getElementById("video");
      video.play();
      this.timer = setInterval(() => {
        if (document.getElementById("video").ended) {
          clearInterval(this.timer);
          video.load();
          this.play = true;
          this.palyVideoShow = true;
          this.puseVideoShow = false;
        }
      }, 1000);
    },
    pauseVideo() {
      let video = document.getElementById("video");
      video.pause();
      this.play = true;
      this.palyVideoShow = true;
      this.puseVideoShow = false;
    },
    enter() {
      if (!this.play) {
        this.puseVideoShow = true;
      }
    },
    leave() {
      this.puseVideoShow = false;
    }
  },
  mounted() {
    // var vdo = document.getElementById("videoPlay");
    // vdo.play();

    this.setWidth();
    window.onresize = () => {
      return (() => {
        this.setWidth();
        let Dwidth = document.body.clientWidth;
        let imgArr = document.getElementsByClassName("el-carousel__item");
        if (Dwidth <= 1920) {
          let marginLeft = (1920 - Dwidth) / 2;
          for (var i = 0; i < imgArr.length; i++) {
            imgArr[i].style.marginLeft = -marginLeft + "px";
          }
        }
      })();
    };
  }
};
</script>
