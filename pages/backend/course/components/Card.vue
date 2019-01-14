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
            <!-- <div class="mask">1</div> -->
            <!-- project 页面的课程详情 不显示一些东西 -->
            <div class="common-button btn-bg">
              <!-- 登录 不登录 播放按钮 -->
              <div class="playBtn-detail">
                <img :src="playImg" alt @click="handleImgPlay(courseList)">
              </div>
            </div>
          </div>
          <v-player
            @changePlayImg="changePlayImg"
            @gobuy="handleAddShopCart(courseList)"
            @refreshData="refreshData"
          ></v-player>
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
              <div class="common-button">
                <el-button type="primary " plain @click="handleAddShopCart(courseList) ">加入购物车</el-button>
                <el-button
                  :class="{'studentFree':courseList.is_vip}"
                  type="primary"
                  plain
                  @click="handleFreeNoneStudy(courseList)"
                >{{ isAuthenticated === false ? '立即学习': '开始学习'}}</el-button>
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
  props: ["courseList", "privileMsg", "config"],
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapState("auth", ["token", "productsNum"])
  },
  data () {
    return {
      isShowCover: true,
      playImg: "http://static-image.1911edu.com/play.png",
      two_is_cart: 0,
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
    ...mapActions("auth", ["setProductsNum"]),
    refreshData () {
      this.$emit("refreshData");
    },
    changePlayImg (img, id) {
      this.$emit("changePlayImg", img, id);
    },
    // 左侧播放按钮事件
    handleImgPlay (item) {
      // 用户已登录
      if (persistStore.get("token")) {
        //   更新播放数据
        this.$bus.$emit("reupdatecourse");
      } else {
        // 未登录直接弹出登录
        this.$bus.$emit("loginShow", true);
      }
    },
    // 点击立即学习按钮
    handleFreeNoneStudy (item) {
      // 当用户登录
      if (persistStore.get("token")) {
        // // 用户已经购买 以及 课程为免费 获取默认播放id
        if (this.privileMsg === true) {
          //   更新播放数据
          this.$bus.$emit("reupdatecourse");
        } else {
          // 用户未购买 点击 加入购物车按钮
          this.handleAddShopCart(item);
        }
      } else {
        // 当用户未登录
        this.$bus.$emit("loginShow", true);
      }
    },
    // 用户 未购买的逻辑 点击加入购物车逻辑
    handleAddShopCart (item) {
      if (persistStore.get("token")) {
        // 第一次点击 没有 在购物车
        if (item.is_cart === 0) {
          if (this.two_is_cart === 0) {
            this.goodsNmber(item);
          } else {
            message(this, "success", "您的课程已经在购物车里面");
          }
        } else {
          // 第一次点击 在购物车
          message(this, "success", "您的课程已经在购物车里面");
        }
      } else {
        // 当用户未登录
        this.$bus.$emit("loginShow", true);
      }
    },
    closeCover () {
      this.isShowCover = false;
    },
    // 判断购物车数量
    goodsNmber (item) {
      if (persistStore.get("productsNum") < 70) {
        this.addCourseShopCart(item);
      } else {
        this.$alert("您的购物车已满，建议您先去结算或清理", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {
            this.$router.push("/shop/shoppingcart");
          }
        });
      }
    },
    // 添加购物车函数
    addCourseShopCart (item) {
      this.curriculumcartids.cartid = item.id;
      category.addShopCart(this.curriculumcartids).then(response => {
        if (response.status == 0) {
          let len = Number(this.productsNum) + 1;
          this.setProductsNum({
            pn: len
          });
          this.two_is_cart = 1;
          message(this, "success", "加入购物车成功");
        } else {
          message(this, "error", response.msg);
        }
      });
    },
  },
  mounted () {
    this.$bus.$on("closeCover", data => {
      this.closeCover();
    });
  }
};
</script>

