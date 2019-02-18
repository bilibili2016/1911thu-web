<template>
  <div>
    <template v-if="config.banner_type === 'news' || config.banner_type === 'outNews'">
      <div class="news-banner">
<<<<<<< HEAD
        <img
          :src="bannerImg"
          alt
        >
        <div
          v-if="config.banner_type === 'news'"
          class="newLsit-desc"
        >
=======
        <img :src="bannerImg" alt>
        <div v-if="config.banner_type === 'news'" class="newLsit-desc">
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
          <p class="title">NEWS</p>
          <span class="line"></span>
          <p class="small-title">学堂资讯</p>
          <p class="desc">School Information</p>
        </div>
<<<<<<< HEAD
        <div
          v-if="config.banner_type === 'outNews'"
          class="newLsit-desc"
        >
=======
        <div v-if="config.banner_type === 'outNews'" class="newLsit-desc">
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
          <p class="title">NEWS</p>
          <span class="line"></span>
          <p class="small-title">媒体报道</p>
          <p class="desc">Media Coverage</p>
        </div>
      </div>
    </template>
    <template v-if="config.banner_type === 'famousList'">
<<<<<<< HEAD
      <div class="famousTeacher"></div>
=======
      <div class="famousTeacher" id="famousTeacher"></div>
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
    </template>

    <template v-if="config.banner_type === 'profile'">
      <div class="profile-banner">
        <div class="center-box">
<<<<<<< HEAD
          <img
            :class="{noImg :!userInfo.head_img,topImg:userInfo.head_img}"
            :src="userInfo.head_img"
          >
          <div
            class="up-user-avtor"
            v-show="isShowUpAvtor"
          >
            <div class="upload-img">
              <input
                type="file"
                @change="add_img"
                accept="image/png, image/gif, image/jpeg"
              >
=======
          <img :class="{noImg :!userInfo.head_img,topImg:userInfo.head_img}" :src="userInfo.head_img">
          <div class="up-user-avtor" v-show="isShowUpAvtor">
            <div class="upload-img">
              <input type="file" @change="add_img" accept="image/png, image/gif, image/jpeg">
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
            </div>
            <div class="mask">
              <span>更换图片</span>
            </div>
          </div>
          <div class="avator">
            <div class="img"></div>
          </div>
          <div class="name">
            <p class="nickName">{{userInfo.nick_name}}</p>
            <!-- <p class="companyName">{{userInfo.company_name}}</p> -->
            <p class="vipCard">
<<<<<<< HEAD
              <span
                v-for="(vip,index) in userInfo.vipPrivateList"
                :key="index"
              >
                <el-popover
                  placement="bottom-start"
                  :title="vip.title"
                  width="180"
                  trigger="hover"
                  :content="'剩余'+(vip.expire_days)+'天'"
                >
                  <el-button
                    slot="reference"
                    @click="goVipInfo(vip)"
                  >
=======
              <span v-for="(vip,index) in userInfo.vipPrivateList" :key="index">
                <el-popover placement="bottom-start" :title="vip.title" width="180" trigger="hover" :content="'剩余'+(vip.expire_days)+'天'">
                  <el-button slot="reference" @click="goVipInfo(vip)">
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
                    <img :src="vip.vip_icon">
                  </el-button>
                </el-popover>
              </span>
            </p>
          </div>
          <div class="time">
            <p>已学{{userInfo.study_time}}学时</p>
            <p>{{time.hour}}小时{{time.minutes}}分钟</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// banner 组件
// 学堂资讯组件
import { store as persistStore } from "~/lib/core/store";
import { banner } from "~/lib/v1_sdk/index";
import { mapGetters, mapActions } from "vuex";
import { message } from "@/lib/util/helper";
export default {
  props: ["bannerImg", "config", "isShowUpAvtor", "userInfo"],
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
<<<<<<< HEAD
  data() {
=======
  data () {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
    return {
      time: {
        hour: null,
        minutes: null,
        second: null
      },
      fileForm: {
        FILESS: []
      },
      imgs: []
    };
  },
  watch: {
<<<<<<< HEAD
    userInfo() {
=======
    userInfo () {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
      // 已学习时长
      this.changeTime(this.userInfo.study_curriculum_time);
    }
  },
  methods: {
    ...mapActions("auth", ["signOut"]),
<<<<<<< HEAD
    add_img(event) {
=======
    add_img (event) {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
      // var that = this
      var reader = new FileReader();
      let imgFiles = event.target.files[0];
      var formdata = new window.FormData();
      formdata.append("image", imgFiles);
      formdata.image = imgFiles;
      reader.readAsDataURL(imgFiles);
      this.fileForm.FILESS = [];
      reader.onloadend = () => {
        this.fileForm.FILESS.push(reader.result);
        banner.uploadHeadImg(this.fileForm).then(response => {
          this.userInfo.head_img = response.data.full_path;
          message(this, "success", response.msg);
          this.$bus.$emit("changeimg", response.data.full_path);
        });
      };
    },
<<<<<<< HEAD
    goVipInfo(vip) {
=======
    goVipInfo (vip) {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
      this.$router.push({
        path: "/home/vip/vipPage",
        query: {
          id: vip.id,
          cid: vip.category_id
        }
      });
    },
<<<<<<< HEAD
    changeTime(timing) {
=======
    changeTime (timing) {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
      this.time.hour = parseInt(timing / 3600);
      this.time.minutes = parseInt(
        (parseFloat(timing / 3600.0) - parseInt(timing / 3600.0)) * 60
      );
      this.time.second = parseInt(
        (parseFloat(
          (parseFloat(timing / 3600.0) - parseInt(timing / 3600.0)) * 60
        ) -
          parseInt(
            (parseFloat(timing / 3600.0) - parseInt(timing / 3600.0)) * 60
          )) *
<<<<<<< HEAD
          60
=======
        60
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/components/banner";
</style>
