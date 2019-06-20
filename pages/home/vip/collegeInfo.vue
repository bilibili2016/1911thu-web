<template>
  <div>
    <div class="collegeInfo" v-if="noCollege" v-loading="loading">
      <!-- <v-chineseCollege v-if="title=='chineseCollege'"></v-chineseCollege> -->
      <v-k12College v-if="title=='chineseCollege'"></v-k12College>
      <v-healthCollege v-if="title=='healthCollege'"></v-healthCollege>
      <v-sportsCollege v-if="title=='sportsCollege'"></v-sportsCollege>
      <v-smartCollege v-if="title=='smartCollege'"></v-smartCollege>
      <v-eduCollege v-if="title=='eduCollege'"></v-eduCollege>
      <v-newsCollege v-if="title=='newsCollege'"></v-newsCollege>
      <v-commercialCollege v-if="title=='commercialCollege'"></v-commercialCollege>
      <v-cadreCollege v-if="title=='cadreCollege'"></v-cadreCollege>
      <!-- 底部学院学费信息 -->
      <div class="btns clearfix" ref="btns" :class="{fixedBottom:!bottom,bottomHeight:bottom}">
        <div class="btn-con">
          <span class="button" @click="lookProject">混合式项目</span>
          <!-- <span class="button"  @click="goVipDetail">在线学院</span> -->
          <span class="button" v-if="title!='chineseCollege'" @click="goVipDetail">在线学院</span>
          <span class="button" v-if="title!='chineseCollege'" @click="goLink('/project/degreeProject')">学位项目</span>
        </div>
      </div>
    </div>
    <div class="noCollege" v-if="!noCollege">
      <img src="https://static-image.1911edu.com/noCollege.png" alt="">
      <p>正在筹备中，敬请期待...</p>
    </div>
  </div>

</template>

<script>
import { vip } from "@/lib/v1_sdk/index";
import {
  matchSplits,
  setTitle,
  message,
  isMobileTerminal
} from "@/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";
import CadreCollege from "@/pages/home/vip/pages/CadreCollege";
// import ChineseCollege from "@/pages/home/vip/pages/ChineseCollege";
import K12College from "@/pages/home/vip/pages/K12College";
import CommercialCollege from "@/pages/home/vip/pages/CommercialCollege";
import EduCollege from "@/pages/home/vip/pages/EduCollege";
import HealthCollege from "@/pages/home/vip/pages/HealthCollege";
import NewsCollege from "@/pages/home/vip/pages/NewsCollege";
import SmartCollege from "@/pages/home/vip/pages/SmartCollege";
import SportsCollege from "@/pages/home/vip/pages/SportsCollege";

export default {
  components: {
    // "v-college": College,
    // "v-chineseCollege": ChineseCollege,
    "v-k12College": K12College,
    "v-healthCollege": HealthCollege,
    "v-sportsCollege": SportsCollege,
    "v-smartCollege": SmartCollege,
    "v-eduCollege": EduCollege,
    "v-newsCollege": NewsCollege,
    "v-commercialCollege": CommercialCollege,
    "v-cadreCollege": CadreCollege
  },
  data () {
    return {
      collegeImg: ["", ""],
      bottom: true,
      loading: true,
      vipDetailData: {
        id: ""
      },
      vipInfo: "",
      width: "",
      windowHeight: "",
      paperHeight: "",
      scrollTop: "",
      arr: "",
      noCollege: true,
      title: "",
      bottom: true
    };
  },
  methods: {
    goVipDetail () {
      this.$router.push({
        path: "/home/vip/collegeDetail",
        query: {
          id: this.vipInfo.id,
          cid: this.vipInfo.category_id,
          title: this.vipInfo.en_title
        }
      });
    },
    goLink (link) {
      this.$router.push(link);
    },
    // 跳转到项目分类
    lookProject () {
      this.$router.push(
        `/course/category?cid=${this.relativeID}&cp=1&xid=0&pids=0&vid=${
        this.vipDetailData.id
        }`
      );
    },
    //会员详情
    vipDetail () {
      vip.vipGoodsDetail(this.vipDetailData).then(res => {
        if (res.status == 0) {
          this.vipInfo = res.data.vipGoodsDetail;
          this.title = res.data.vipGoodsDetail.en_title;
          this.noCollege = true;
          setTitle(this.vipInfo.title + "-1911学堂");
        } else {
          message(this, "error", res.msg);
          this.noCollege = false;
          this.$router.push("/");
        }
      });
    },
    // 设置图片宽度
    setWidth () {
      if (this.collegeImg.length == 0) {
        this.noCollege = false;
        return false;
      } else {
        this.noCollege = true;
      }
      // 手机端动态设置margin 手动缩放zoom比例
      if (isMobileTerminal()) {
        this.width = ((1920 - document.documentElement.clientWidth) / 2) * 0.81;
      } else {
        this.width = (1920 - document.documentElement.clientWidth) / 2;
      }
      this.$nextTick(() => {
        if (document.documentElement.clientWidth < 1920) {
          this.arr = document.getElementsByClassName("collegeImg");
          for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].style.marginLeft = -this.width + "px";
          }
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
      this.loading = false;
    },
    // 底部操作栏动态
    addClass () {
      this.windowHeight = document.body.scrollHeight;
      this.paperHeight = document.documentElement.clientHeight;
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (this.windowHeight - this.scrollTop - this.paperHeight < 100) {
        this.bottom = true;
      } else {
        this.bottom = false;
      }
    },
    init () {
      this.relativeID = matchSplits("cid");
      this.vipDetailData.id = matchSplits("id");
      this.title = matchSplits("title");
    }
  },
  mounted () {
    this.loading = true;
    this.init();
    this.vipDetail();
    // 寛高设置
    window.addEventListener("scroll", this.addClass);
  },
  watch: {
    $route (v, oldv) {
      this.init();
      this.vipDetail();
    },
    title () {
      this.setWidth();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/style/college/collegeInfo";
</style>
