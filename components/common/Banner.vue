<template>
  <div>
    <template v-if="config.banner_type === 'news'">
          <div class="news-banner">
            <img :src="bannerImg" alt="">
          </div>
    </template>
    <template v-if="config.banner_type === 'profile'">
      <div class="profile-banner">
        <div class="center-box">
          <div class="avator">
            <div class="img">
              <img :src="avator" alt="">
              <!-- <img :src="avator" alt="" v-if="userInfo.head_img"> -->

              <!-- <img :src="userInfo.head_img" alt="" v-if="userInfo.head_img">
              <img :src="avator" alt="" v-else> -->
              <!-- <el-upload v-show="isShowUpAvtor" class="up-user-avtor"
                action="http://www.1911edu.com/Wapi/MyInfo/uploadHeadImg"
                accept='image/*'
                :on-success="upSuccess"
                :on-error="failUp"
                :show-file-list="false">
                <el-button size="medium" type="primary">更换图片</el-button>
              </el-upload> -->
            </div>
          </div>
          <div class="name">
            <p>{{userInfo.nick_name}}</p>
            <p>{{userInfo.company_name}}</p>
          </div>
          <div class="time">
            <p class="fr">18小时32分钟</p>
            <p class="fr">总学习时长</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { home } from "~/lib/v1_sdk/index";
export default {
  props: ["bannerImg", "config", "isUpdate","isShowUpAvtor"],
  data() {
    return {
      avator:require("@/assets/images/profile_avator01.png"),
      userInfo: {
        nick_name: "",
        company_name: "",
        head_img:""
      }
    };
  },
  mounted() {
    this.getUserInfo();
  },
  watch: {
    isUpdate(val) {
      if (val) {
        this.getUserInfo();
      }
    }
  },
  methods: {
    getUserInfo() {
      home.getUserInfo().then(res => {
        this.userInfo = res.data.userInfo;
      });
    },
    upSuccess(res,file){
      this.userInfo.head_img= res.data.full_path
    },
    failUp(){

    }
  }
};
</script>

<style scoped lang="scss">
.news-banner {
  height: 148px;
  position: relative;
  img {
    width: 1920px;
    height: 148px;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -960px;
  }
}
</style>
