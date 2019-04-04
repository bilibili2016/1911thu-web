<template>
  <div>
    <div class="collegeInfo" v-if="noCollege" v-loading="loading">
      <v-chineseCollege v-if="title=='chineseCollege'"></v-chineseCollege>
      <v-healthCollege v-if="title=='healthCollege'"></v-healthCollege>
      <v-sportsCollege v-if="title=='sportsCollege'"></v-sportsCollege>
      <v-smartCollege v-if="title=='smartCollege'"></v-smartCollege>
      <v-eduCollege v-if="title=='eduCollege'"></v-eduCollege>
      <v-newsCollege v-if="title=='newsCollege'"></v-newsCollege>
      <v-commercialCollege v-if="title=='commercialCollege'"></v-commercialCollege>
      <v-cadreCollege v-if="title=='cadreCollege'"></v-cadreCollege>
      <!-- 底部学院学费信息 -->
      <v-info :class="title" v-if="flag" :vipInfo="vipInfo" @lookCourse="lookCourse" @buyVip="buyVip" @identificate="identificate"></v-info>
      <!-- 会员购买弹窗 -->
      <v-vipbuy v-if="vipPopShow" :vipPopShow="vipPopShow" :vipInfo="vipInfo" @changeVipShow="changeVipShow"></v-vipbuy>
    </div>
    <div class="noCollege" v-if="!noCollege">
      <img src="http://static-image.1911edu.com/noCollege.png" alt="">
      <p>正在筹备中，敬请期待...</p>
    </div>
  </div>

</template>

<script>
import { vip } from "@/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import {
  matchSplits,
  setTitle,
  message,
  browserRedirect
} from "@/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";
import VipBuy from "@/components/common/VipBuy.vue";

// import College from "@/pages/home/vip/pages/College";
import CadreCollege from "@/pages/home/vip/pages/CadreCollege";
import ChineseCollege from "@/pages/home/vip/pages/ChineseCollege";
import CommercialCollege from "@/pages/home/vip/pages/CommercialCollege";
import EduCollege from "@/pages/home/vip/pages/EduCollege";
import HealthCollege from "@/pages/home/vip/pages/HealthCollege";
import NewsCollege from "@/pages/home/vip/pages/NewsCollege";
import SmartCollege from "@/pages/home/vip/pages/SmartCollege";
import SportsCollege from "@/pages/home/vip/pages/SportsCollege";

import Info from "@/pages/home/vip/components/Info";
export default {
  components: {
    // "v-college": College,
    "v-chineseCollege": ChineseCollege,
    "v-healthCollege": HealthCollege,
    "v-sportsCollege": SportsCollege,
    "v-smartCollege": SmartCollege,
    "v-eduCollege": EduCollege,
    "v-newsCollege": NewsCollege,
    "v-commercialCollege": CommercialCollege,
    "v-cadreCollege": CadreCollege,
    "v-info": Info,
    "v-vipbuy": VipBuy
  },
  data () {
    return {
      flag: false,
      vipInfo: "",
      collegeImg: ["", ""],
      vipPopShow: false,
      bottom: true,
      loading: true,
      vipDetailData: {
        id: ""
      },
      gidForm: {
        gids: null
      },
      vipInfo: "",
      width: "",
      windowHeight: "",
      paperHeight: "",
      scrollTop: "",
      arr: "",
      noCollege: true,
      title: ""
    };
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    //   查看课程
    lookCourse () {
      this.$router.push({
        path: "/course/category",
        query: {
          cid: this.relativeID,
          cp: 0,
          pids: 0,
          xid: 0,
          vid: matchSplits("id")
        }
      });
    },
    //立即购买
    buyVip () {
      if (persistStore.get("token")) {
        this.vipPopShow = true;
      } else {
        this.$bus.$emit("loginShow");
      }
    },
    //关闭购买弹窗
    changeVipShow (val) {
      this.vipPopShow = false;
    },
    //申请认证
    identificate () {
      if (persistStore.get("token")) {
        this.gidForm.gids = "tab-tenth";
        this.setGid(this.gidForm);
        this.$router.push("/profile");
        persistStore.set("whichIntro", matchSplits("id"));
      } else {
        this.$bus.$emit("loginShow", true);
      }
    },
    //会员详情
    vipDetail () {
      vip.vipGoodsDetail(this.vipDetailData).then(res => {
        if (res.status == 0) {
          this.vipInfo = res.data.vipGoodsDetail;
          this.title = res.data.vipGoodsDetail.en_title;
          this.noCollege = true;
          if (res.data.vipGoodsDetail.is_pay == 1) {
            this.flag = true;
          } else {
            this.flag = false;
          }
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
      if (browserRedirect()) {
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
.collegeInfo {
  width: 100%;
  padding-bottom: 20px;
}
</style>
