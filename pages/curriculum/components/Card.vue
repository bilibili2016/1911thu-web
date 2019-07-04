<template>
  <div>
    <div class="curriculumCard">
      <div class="topCard">
        <div class="goodplay" v-if="isShowCover">
          <div class="img-con">
            <img :src="courseList.picture" alt="" class="image courseImg">
            <!-- <img v-else :src="courseList.teacher_picture" alt="" class="image courseImg"> -->
          </div>
          <!-- project 页面的课程详情 不显示一些东西 -->
          <div class="common-button btn-bg">
            <!-- 登录 不登录 播放按钮 -->
            <div class="playBtn-detail">
              <img :src="playImg" alt="" @click="handleImgPlay(courseList)">
            </div>
          </div>
        </div>
        <v-player @changePlayImg="changePlayImg" @gobuy="handleAddShopCart(courseList,$event)" @refreshData="refreshData"></v-player>
      </div>
      <div class="particularss">
        <div class="currentclum">
          <!-- 公共项目标题 -->
          <h4>{{courseList.title}}</h4>
          <!-- 免费课程 未学习 start-->
          <div v-if=" courseList.is_free === '2' && courseList.is_study === 0 ">
            <!-- 课程介绍 登录 未登录 学习按钮 -->
            <div class="study clearfix">
              <!-- 课程介绍 -->
              <p>{{courseList.introduction}}</p>
              <!-- 学时 以及 学习人数 星级 价钱-->
              <div class="studyInfo">
                <span class="fl coursenum">
                  <img src="@/assets/images/icon_id.png" alt="">学习人数：{{courseList.study_number}}</span>
                <span class="fl coursenum">
                  <span><img src="@/assets/images/icon_time.png" alt="">总学时：{{courseList.study_time}}</span>
                </span>
                <span class="rate">课程评分：
                  <el-rate disabled v-model="courseList.score"></el-rate>
                </span>
              </div>
              <div class="common-button clearfix">
                <el-button type="primary " plain @click="handleAddShopCart(courseList,$event) ">加入购物车</el-button>
                <el-button class="leftBtn" :class="{'studentFree':courseList.is_vip}" type="primary" plain @click="handleFreeNoneStudy(courseList)">{{ isAuthenticated === false ? '立即学习': '开始学习'}}</el-button>
              </div>
            </div>
          </div>
          <!-- 免费课程 未学习 end-->

          <!-- 免费课程 已学习 start-->
          <div v-if=" courseList.is_free === '2' && courseList.is_study === 1 ">
            <!-- 时间 学习按钮  进度条-->
            <div class="study clearfix bought">
              <!-- 课程介绍 -->
              <p>{{courseList.introduction}}</p>
              <!-- 学时 以及 学习人数 星级 价钱-->
              <div class="studyInfo">
                <span class="fl coursenum">
                  <img src="@/assets/images/icon_id.png" alt="">学习人数：{{courseList.study_number}}</span>
                <span class="fl coursenum">
                  <span><img src="@/assets/images/icon_time.png" alt="">总学时：{{courseList.study_time}}</span>
                </span>
                <span class="rate">课程评分：
                  <el-rate disabled v-model="courseList.score"></el-rate>
                </span>
              </div>
              <div class="common-button clearfix">
                <!-- 学习进度 -->
                <div class="lineProgress">
                  <h5 class="clearfix">
                    <span class="fl">学习进度</span>
                    <span class="fr">已完成{{courseList.percent}}%</span>
                  </h5>
                  <el-progress :stroke-width="10" color="#3FBABE" :show-text="false" :percentage="courseList.percent"></el-progress>
                </div>
                <!-- 免费课程学习到100后显示再次学习 -->
                <!-- 项目课程 详情 不展示按钮 config.card_type !== 'project-->
                <div class="fr">
                  <el-button type="primary " plain @click="handleAddShopCart(courseList,$event) ">加入购物车</el-button>
                  <el-button class="leftBtn" :class="{'studentFree':courseList.is_vip}" v-if="Number(courseList.percent)>=0&&Number(courseList.percent)<100" type="primary" plain @click="handleFreeNoneStudy(courseList)">继续学习</el-button>
                  <el-button class="leftBtn" :class="{'studentFree':courseList.is_vip}" v-if="Number(courseList.percent)===100" type="primary" plain @click="handleFreeNoneStudy(courseList)">再次学习</el-button>
                </div>
              </div>
            </div>
          </div>
          <!-- 免费课程 已学习 end-->
          <!-- 收费课程 未学习 购买以及未购买判断在内部判断  start-->
          <!-- 收费课程 已学习 说明已经购买  start-->
          <div v-if=" courseList.is_free === '1'">
            <!-- 课程介绍 未购买 学习按钮-->
            <div class="study clearfix bought">
              <p>{{courseList.introduction}}</p>
              <!-- 学时 以及 学习人数 星级 价钱-->
              <!-- <h5 @click="vipGoodsDetail(courseList.vipGoodsDetail)">{{courseList.vipGoodsDetail.title}}</h5> -->
              <div class="studyInfo">
                <span class="fl coursenum">
                  <img src="@/assets/images/icon_id.png" alt="">学习人数：{{courseList.study_number}}</span>
                <span class="fl coursenum">
                  <span><img src="@/assets/images/icon_time.png" alt="">总学时：{{courseList.study_time}}</span>
                </span>
                <span class="rate">课程评分：
                  <el-rate disabled v-model="courseList.score"></el-rate>
                </span>
                <span class="coins">¥ {{courseList.present_price}} </span>
              </div>
              <!-- 购买判断  未购买-->
              <div class=" common-button clearfix" v-if="privileMsg==false">
                <el-button type="primary " plain @click="handleFreeNoneStudy(courseList,$event) ">加入购物车</el-button>
                <el-button class="leftBtn" v-if="courseList.is_free_video" type="primary " plain @click="freeStudy(courseList) ">立即试看</el-button>
              </div>
              <!-- 购买判断  已购买-->
              <div class="common-button clearfix" v-if="privileMsg==true">
                <!-- 学习判断  已学习-->
                <div v-if="courseList.is_study==1">
                  <div class="lineProgress">
                    <h5 class="clearfix">
                      <span class="fl">学习进度</span>
                      <span class="fr">已完成{{courseList.percent}}%</span>
                    </h5>
                    <el-progress :stroke-width="10" color="#3FBABE" :show-text="false" :percentage="courseList.percent"></el-progress>
                  </div>
                  <!-- 学习到100后显示再次学习，否则显示继续学习 -->
                  <div class="fr">
                    <div v-if="Number(courseList.percent)>=0&&Number(courseList.percent)<100">
                      <el-button type="primary" plain @click="handleAddShopCart(courseList,$event)">加入购物车</el-button>
                      <el-button class="leftBtn" :class="{'studentFree':courseList.is_vip}" type="primary" plain @click="handleFreeNoneStudy(courseList)">继续学习</el-button>
                    </div>
                    <div v-if="Number(courseList.percent)===100">
                      <el-button type="primary" plain @click="handleAddShopCart(courseList,$event)">加入购物车</el-button>
                      <el-button class="leftBtn" :class="{'studentFree':courseList.is_vip}" type="primary" plain @click="handleFreeNoneStudy(courseList)">再次学习</el-button>
                    </div>
                  </div>
                </div>
                <!-- 学习判断  未学习-->
                <div v-if="courseList.is_study==0">
                  <el-button type="primary " plain @click="handleAddShopCart(courseList,$event)">加入购物车</el-button>
                  <el-button class="leftBtn" :class="{'studentFree':courseList.is_vip}" type="primary " plain @click="handleFreeNoneStudy(courseList)">开始学习</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-if="showDialog" :dialog="dialogInfo" @closeDialog="closeDialog"></v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { category } from "~/lib/v1_sdk/index";
import {
  message,
  matchSplits,
  open,
  parabola,
  flyAnimation
} from "~/lib/util/helper";
import { fly } from "~/lib/util/fly";

import CardPlayer from "@/pages/curriculum/components/CardPlayer";
import Dialog from "@/components/common/Dialog.vue";

export default {
  components: {
    "v-player": CardPlayer,
    "v-dialog": Dialog
  },
  props: ["courseList", "privileMsg", "config"],
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapState("auth", ["token", "productsNum"])
  },
  watch: {
    courseList (val) {
      this.blankImg = val.picture;
    }
  },
  data () {
    return {
      showDialog: false,
      dialogInfo: {},
      isShowCover: true,
      playImg: "https://static-image.1911edu.com/play.png",
      blankImg: "https://static-image.1911edu.com/blank.png",
      two_is_cart: 0,
      curriculumcartids: {
        cartid: null,
        type: 1
      },
      playerForm: {
        curriculumId: "",
        catalogId: "",
        autoplay: true
      }
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
    vipGoodsDetail (item) {
      this.$router.push({
        path: "/home/vip/collegeDetail",
        query: {
          id: item.id,
          cid: item.category_id,
          title: item.en_title
        }
      });
    },
    // 免费试看
    freeStudy (item) {
      if (persistStore.get("token")) {
        this.$bus.$emit("reupdatecourse");
      } else {
        // 当用户未登录
        this.$bus.$emit("loginShow", true);
      }
    },
    // 左侧播放按钮事件
    handleImgPlay (item) {
      // 用户已登录
      if (persistStore.get("token")) {
        this.$bus.$emit("reupdatecourse");
      } else {
        // 未登录直接弹出登录
        this.$bus.$emit("loginShow", true);
      }
    },
    // 点击立即学习按钮
    handleFreeNoneStudy (item, event) {
      // 当用户登录
      if (persistStore.get("token")) {
        // // 用户已经购买 以及 课程为免费 获取默认播放id
        if (this.privileMsg === true) {
          this.$bus.$emit("reupdatecourse");
        } else {
          // 用户未购买 点击 加入购物车按钮
          this.handleAddShopCart(item, event);
        }
      } else {
        // 当用户未登录
        this.$bus.$emit("loginShow", true);
      }
    },
    // 用户 未购买的逻辑 点击加入购物车逻辑
    handleAddShopCart (item, event) {
      if (persistStore.get("token")) {
        // 第一次点击 没有 在购物车
        if (item.is_cart === 0) {
          if (this.two_is_cart === 0) {
            this.flyAnimation(event, item.picture);
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
    flyAnimation (event, imgUrl) {
      var offset = $("#cartNum").offset();
      var flyer = $('<img class="u-flyer" src="' + imgUrl + '">');
      flyer.fly({
        start: {
          left: event.pageX,
          top: event.pageY
        },
        end: {
          left: offset.left + 10,
          top: offset.top + 10,
          width: 0,
          height: 0
        },
        onEnd: function () { }
      });
    },
    closeCover () {
      this.isShowCover = false;
    },
    // 判断购物车数量
    goodsNmber (item) {
      if (persistStore.get("productsNum") < 70) {
        this.addCourseShopCart(item);
      } else {
        this.showDialog = true;
        this.dialogInfo.info = "您的购物车已满，建议您先去结算或清理";
      }
    },
    closeDialog () {
      this.showDialog = false;
      this.$router.push("/shop/shoppingcart");
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
    changeURLArg (url, arg, arg_val) {
      var pattern = arg + "=([^&]*)";
      var replaceText = arg + "=" + arg_val;
      if (url.match(pattern)) {
        var tmp = "/(" + arg + "=)([^&]*)/gi";
        tmp = url.replace(eval(tmp), replaceText);
        return tmp;
      } else {
        if (url.match("[?]")) {
          return url + "&" + replaceText;
        } else {
          return url + "?" + replaceText;
        }
      }
      return url + "\n" + arg + "\n" + arg_val;
    }
  },
  mounted () {
    this.$bus.$on("closeCover", data => {
      this.closeCover();
    });
  }
};
</script>

