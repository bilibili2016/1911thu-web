<template>
  <div>
    <div class="curriculumList center">
      <!-- v-for="(course,index) in courseList -->
      <div class="course clearfix">
        <el-card class="fl" :body-style="{ padding: '0px' }">
          <div class="goodplay" v-if="isShowCover">
            <div class="img-con">
              <img :src="courseList.picture" class="image">
            </div>
            <div class="common-button btn-bg">
              <!-- 播放按钮 -->
              <div class="playBtn-detail">
                <img :src="playImg" alt @click="handleImgPlay(courseList)">
              </div>
            </div>
          </div>
          <v-player @changePlayImg="changePlayImg" @refreshData="refreshData"></v-player>
        </el-card>
        <div class="particularss fr">
          <div class="currentclum">
            <h4>{{courseList.title}}</h4>
            <!-- 课程介绍 登录 未登录 学习按钮 -->
            <div class="study clearfix">
              <!-- 课程介绍 -->
              <p>{{courseList.introduction}}</p>
              <!-- 学时 以及 学习人数 星级 价钱-->
              <div class="studyInfo">
                <span class="fl coursenum">
                  <img src="@/assets/images/icon_id.png" alt>
                  学习人数：{{courseList.study_number}}
                </span>
                <span class="fl coursenum">
                  <span>
                    <img src="@/assets/images/icon_time.png" alt>
                    总学时：{{courseList.study_time}}
                  </span>
                </span>
                <span class="rate">课程评分：
                  <el-rate disabled v-model="courseList.score"></el-rate>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { category } from "~/lib/v1_sdk/index";
import { message, matchSplits, open } from "~/lib/util/helper";
import CardPlayer from "@/pages/backend/course/components/CardPlayer";
export default {
  components: {
    "v-player": CardPlayer
  },
  props: ["courseList", "config"],
  computed: {
    ...mapState("auth", ["token", "productsNum"])
  },
  data () {
    return {
      isShowCover: true,
      playImg: "https://static-image.1911edu.com/play.png",
      curriculumcartids: {
        cartid: null,
        type: 1
      },
      playerForm: {
        curriculumId: "",
        catalogId: "",
        autoplay: true
      },
    };
  },
  methods: {
    refreshData () {
      this.$emit("refreshData");
    },
    changePlayImg (img, id) {
      this.$emit("changePlayImg", img, id);
    },
    // 左侧播放按钮事件
    handleImgPlay (item) {
      this.$bus.$emit("reupdatecourse", this.courseList.catalog_id);
    },
    closeCover () {
      this.isShowCover = false;
    },
  },
  mounted () {
    this.$bus.$on("closeCover", data => {
      this.closeCover();
    });
  }
};
</script>

