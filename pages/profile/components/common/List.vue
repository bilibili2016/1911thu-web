    <!-- 我的课程：学习中，已完成，已过期，我的收藏 -->
<template>
  <div class="card">
    <!-- 学习中，已完成，已过期， -->
    <template v-if="config.card_type=='profile'">
      <div class="card-category">
        <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
          <el-card shadow="never" body-style="padding: 0;" class="itemBox learn">
            <div class="mask-style">
              <img v-if="!config.mask" :src="jinImg" alt class="jin-style">
            </div>
            <div class="bgImgs" @click="openDetail(card)">
              <img class="coverImg" :src="card.picture" alt>
            </div>
            <div class="tag">
              <span v-if="card.tag.length !== 0" v-for="(tag,index) in card.tag" :key="index">{{tag}}</span>
            </div>
            <div class="common-button btn-bgs">
              <!-- 学习中 -->
              <el-button v-if="card.percent < 1&&!card.overtime" type="primary" plain @click="openDetail(card)">开始学习</el-button>

              <!-- 已过期 -->
              <div v-else>
                <el-button type="primary" v-if="card.expire_day < 1&&card.overtime" plain @click="addShopCarts(card,index)">
                  <span>加入购物车</span>
                </el-button>
              </div>

              <!-- 学习中 -->
              <el-button v-if="card.percent > 0&&!card.overtime&&config.card=='learning'" type="primary" plain @click="goonStudy(card)">
                <span>继续学习</span>
              </el-button>
              <!-- 已完成 -->
              <el-button v-if="card.percent==100&&config.card=='already'" type="primary" plain @click="openDetail(card)">
                <span>再次学习</span>
              </el-button>
            </div>
            <el-row>
              <!-- 课程标题 -->
              <div class="item">
                <p class="itemBox-name itemBoxTitle" @click="openDetail(card)">
                  <span :title="card.title">{{card.title}}</span>
                </p>
              </div>
              <!-- 学习进度 -->
              <div class="line-wraps" v-if="config.card=='learning'">
                <div class="line-centers">
                  <span class="studyPercent" v-if="card.percent>0">已学习{{card.percent}}%</span>
                  <span class="studyIsFree" v-if="card.is_free ==1">剩余{{card.expire_day}}天</span>
                  <span class="studyIsFree" v-else>免费</span>
                  <el-progress v-if="card.percent>0" :percentage="card.percent" :show-text="false"></el-progress>
                </div>
              </div>
              <div v-if="config.card=='already' ">
                <div class="line-centers">
                  <span class="already">已完成100%</span>
                  <span class="studyIsFree" v-if="card.is_free ==1">剩余{{card.expire_day}}天</span>
                </div>
              </div>
              <div class="readyImg" v-if="config.card=='already' ">
                <img :src="readyImg " alt=" ">
              </div>
              <!-- 我的课程 已过期的图片 -->
              <div class="overtime" v-if="config.card=='overtime' ">
                <img :src="overTimeImg" alt=" ">
              </div>
              <!-- 我的课程 已过期的副标题 -->
              <div class="deputyTitleOverTime" v-if="config.card=='overtime' ">{{card.deputy_title}}</div>
            </el-row>
          </el-card>
        </div>
      </div>
    </template>
    <!-- 我的收藏-->
    <template v-if="config.card_type=='shoucang' ">
      <div class="card-category profile">
        <div v-for="(card,index) in data " :index="index " :key="card.id " class="card-list">
          <el-card shadow="never " body-style="padding: 0; " class="itemBox collect">
            <div @click="openDetail(card) ">
              <div class="mask-style">
                <img :src="jinImg " alt=" " class="jin-style">
              </div>
              <!-- 我的首页的图片背景 -->
              <div class="bgImgs">
                <img :src="card.picture " alt=" ">
              </div>
              <!-- 我的课程的 我的收藏 -->
              <el-row>
                <div class="item">
                  <p class="itemBox-name">
                    <span :title="card.title">{{card.title}}</span>
                  </p>
                  <div class="deputyTitleOverTime">{{card.deputy_title}}</div>
                </div>
                <div class="line-wrap" @click.stop="goTeacherInfo(card.teacher_id) ">
                  <div class="line-center">
                    <img :src="card.head_img " alt=" ">
                    <span>{{card.teacher_name}}</span>
                    <span class="title">{{card.graduate}}</span>
                  </div>
                </div>
              </el-row>
            </div>
          </el-card>
        </div>
      </div>
    </template>

    <v-dialog v-if="showDialog" :dialog="dialogInfo" @closeDialog="closeDialog"></v-dialog>

  </div>
</template>

<script>
import { profileHome } from "~/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import { open, matchSplits } from "@/lib/util/helper";
import Dialog from "@/components/common/Dialog.vue";

export default {
  props: ["config", "data"],
  components: {
    "v-dialog": Dialog
  },
  data () {
    return {
      showDialog: false,
      dialogInfo: {},
      readyImg: "https://static-image.1911edu.com/ready.png",
      overTimeImg: "https://static-image.1911edu.com/overtime.png",
      jinImg: "https://static-image.1911edu.com/jin.png",
      kidForm: {
        kids: ""
      },
      tidForm: {
        tids: ""
      },
      curriculumcartids: {
        cartid: null,
        type: 1
      },
      cidNumber: "",
      courseUrl: {
        base: "/course/coursedetail",
        kid: 0,
        bid: "",
        page: 0
      }
    };
  },
  methods: {
    study (item) {
      this.openDetail(item);
    },
    //继续学习
    goonStudy (item) {
      this.kidForm.kids = item.id;
      this.courseUrl.kid = item.id;
      //从个人中心-我的课程-继续学习跳转到课程详情页默认播放
      window.open(
        window.location.origin +
        "/course/coursedetail?kid=" +
        item.id +
        "&page=0&paly="
      );
    },
    openDetail (item) {
      this.kidForm.kids = item.id;
      this.courseUrl.kid = item.id;
      open(this.courseUrl);
    },
    goTeacherInfo (id) {
      this.tidForm.tids = id * 1;
      this.$router.push("/home/teacher/" + this.tidForm.tids);
    },
    // 判断购物车数量
    goodsNmber () {
      if (persistStore.get("productsNum") < 70) {
        profileHome.addShopCart(this.curriculumcartids).then(response => {
          this.$router.push("/shop/shoppingcart");
        });
      } else {
        this.showDialog = true;
        this.dialogInfo.info = "您的购物车已满，建议您先去结算或清理";
      }
    },
    //关闭dialog提示框
    closeDialog () {
      this.showDialog = false;
      this.$router.push("/shop/shoppingcart");
    },
    // 已过期商品直接加入购物车
    addShopCarts (item, index) {
      this.curriculumcartids.cartid = item.id;
      this.curriculumcartids.type = 1;
      this.goodsNmber();
      for (var i = 0; i < this.data.length; i++) {
        if (i == index) {
          this.$set(this.data[i], "is_checked", true);
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/profile/list.scss";
</style>
