<template>
  <div class="catalog">
    <!-- 遍历章节 -->
    <div class="chapter" v-for="(catalog,index) in catalogs" :key="index">
      <h4>{{catalog.title}}</h4>
      <!-- 遍历小节 -->
      <div class="bar clearfix" v-for="(bar,index) in catalog.childList" :key="index" @click="handleCatalog(index,catalog)">
        <!-- 小节上 左侧播放图片 项目中的 课程详情不展示-->
        <!-- <span class="fl playIcon" v-if="config.card_type!=='project'">
          <i class="el-icon-caret-right"></i>
        </span>-->
        <span class="fl playIcon" v-show="changeImg.id == bar.id?false:true">
          <i class="el-icon-caret-right"></i>
        </span>
        <span class="fl playImg" v-show="changeImg.id == bar.id?true:false">
          <img :src="changeImg.img" alt>
        </span>
        <p>
          <span class="fl barName">{{bar.video_number}}.{{bar.title}}({{bar.video_time}}分钟)</span>
          <!-- 用户已购买 并且进度大于零 -->
          <span v-if="privileMsg === true">
            <span v-if="bar.percent > 0&&config.card_type!=='project'">
              <!-- 课程目录进度条 -->
              <el-progress :percentage="bar.percent" :show-text="false"></el-progress>
            </span>
          </span>
          <!-- 用户 登录 -->
          <!-- 项目 中课程详情 不显示按钮 config.card_type!=='project'-->
          <span v-if="config.card_type!=='project'" class="fr">
            <span v-if="isAuthenticated" class="fr">
              <span v-if="privileMsg === false">
                <span class="fr freePlay" v-if="bar.look_at === '2' || catalog.isLogin" @click="goLink('player')">立即试看</span>
                <span class="fr freePlay" v-else @click="goBuy(catalog,index)">购买课程</span>
              </span>
              <span v-if="privileMsg === true">
                <span class="fr freePlay" v-if="bar.look_at === '2' || catalog.isLogin" @click="goLink('player')">立即观看</span>
                <span class="fr freePlay" v-if="bar.look_at === '1' || catalog.isLogin" @click="goLink('player')">立即观看</span>
              </span>
            </span>
            <span v-else class="fr clearfix">
              <span class="fr freePlay" v-if="bar.look_at === '2' && bar.is_free === '1'" @click="buyMask">立即试看{{bar.is_free}}==={{bar.look_at}}</span>
              <span class="fr freePlay" v-if="bar.is_free === '2'" @click="buyMask">立即观看{{bar.is_free}}==={{bar.look_at}}</span>
              <span class="fr freePlay" v-if="bar.is_free === '1'&&bar.look_at === '1'" @click="goBuy(catalog,index)">购买课程{{bar.is_free}}==={{bar.look_at}}</span>
            </span>
          </span>
        </p>
        <span v-if="privileMsg === true&&config.card_type!=='project'">
          <el-progress v-if="catalog.isLogin == true && bar.isFree == false && bar.percentage>0" class="fr" :text-inside="true" :stroke-width="8" :percentage="bar.percentage" :show-text="false" color="#773084"></el-progress>
        </span>
      </div>
    </div>
    <v-dialog v-if="showDialog" :dialog="dialogInfo" @closeDialog="closeDialog"></v-dialog>

  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { mapState, mapActions, mapGetters } from "vuex";
import { auth, line } from "~/lib/v1_sdk/index";
import { message, matchSplits, open } from "~/lib/util/helper";
import Dialog from "@/components/common/Dialog.vue";

export default {
  props: ["catalogs", "privileMsg", "config", "changeImg"],
  components: {
    "v-dialog": Dialog
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  data () {
    return {
      showDialog: false,
      dialogInfo: {},
      curriculumcartids: {
        cartid: null
      },
      move: true,
      percents: 50,
      playerForm: {
        curriculumId: "",
        catalogId: "",
        curriculumType: 1,
        autoplay: true
      },
    };
  },
  methods: {
    goLink (item) {
      // this.$router.push(item)
    },
    goBuy (item, index) {
      if (persistStore.get("token")) {
        this.curriculumcartids.cartid = item.curriculum_id;
        this.goodsNmber();
      } else {
        this.$bus.$emit("loginShow", true);
      }
    },
    // 判断购物车数量
    goodsNmber () {
      if (persistStore.get("productsNum") < 70) {
        this.addShopCart();
      } else {
        this.showDialog = true;
        this.dialogInfo.info = "您的购物车已满，建议您先去结算或清理";
      }
    },
    closeDialog () {
      this.showDialog = false;
      this.$router.push("/shop/shoppingcart");
    },
    addShopCart () {
      line.addShopCart(this.curriculumcartids).then(response => {
        this.$router.push("/shop/shoppingcart");
      });
    },
    handleCatalog (index, item) {
      // 是否为项目下的课程
      if (this.config.card_type === "project") {
        return false;
      } else {
        // 是否登录
        if (!persistStore.get("token")) {
          this.$bus.$emit("loginShow", true);
          return false;
        }
        // 该课程是否为未购买 且不可试看
        if (
          this.privileMsg === false &&
          item.childList[index].look_at === "1"
        ) {
          this.curriculumcartids.cartid = item.childList[index].curriculum_id;
          this.goodsNmber();
          return false;
        }
        let curriculum_id = item.childList[index].curriculum_id;
        let catalog_id = item.childList[index].id;
        this.playerForm.curriculumId = curriculum_id;
        this.playerForm.catalogId = catalog_id;
        this.$bus.$emit("updateCourse", this.playerForm);
        document.body.scrollTop = document.documentElement.scrollTop = 300;
      }
    },
    buyMask () {
      this.$bus.$emit("loginShow", true);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/components/line";
</style>
