<template>
  <div>
    <div class="collegeInfo" v-if="noCollege" v-loading="loading">
      <!-- <v-college v-if="title=='cadreCollege'||title=='commercialCollege'" :vipInfo="vipInfo"></v-college> -->
      <v-chineseCollege v-if="title=='chineseCollege'" :data="collegeImg"></v-chineseCollege>
      <v-healthCollege v-if="title=='healthCollege'" :data="collegeImg"></v-healthCollege>
      <v-sportsCollege v-if="title=='sportsCollege'" :data="collegeImg"></v-sportsCollege>
      <v-smartCollege v-if="title=='smartCollege'" :data="collegeImg"></v-smartCollege>
      <v-eduCollege v-if="title=='eduCollege'" :data="collegeImg"></v-eduCollege>
      <v-newsCollege v-if="title=='newsCollege'" :data="collegeImg"></v-newsCollege>
      <v-businessCollege v-if="title=='commercialCollege'" :data="collegeImg"></v-businessCollege>
      <v-leaderCollege v-if="title=='cadreCollege'" :data="collegeImg"></v-leaderCollege>
      <!-- 底部学院学费信息 -->
      <v-info v-if="flag" :vipInfo="vipInfo" @lookCourse="lookCourse" @buyVip="buyVip" @identificate="identificate"></v-info>
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
import { matchSplits, setTitle, message } from "@/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";
import VipBuy from "@/components/common/VipBuy.vue";

import College from "@/pages/home/vip/components/College";
import ChineseCollege from "@/pages/home/vip/components/ChineseCollege";
import HealthCollege from "@/pages/home/vip/components/HealthCollege";
import SportsCollege from "@/pages/home/vip/components/SportsCollege";
import SmartCollege from "@/pages/home/vip/components/SmartCollege";
import EduCollege from "@/pages/home/vip/components/EduCollege";
import NewsCollege from "@/pages/home/vip/components/NewsCollege";
import BusinessCollege from "@/pages/home/vip/components/CommercialCollege";
import LeaderCollege from "@/pages/home/vip/components/CadreCollege";

import Info from "@/pages/home/vip/components/Info";
export default {
  components: {
    "v-college": College,
    "v-chineseCollege": ChineseCollege,
    "v-healthCollege": HealthCollege,
    "v-sportsCollege": SportsCollege,
    "v-smartCollege": SmartCollege,
    "v-eduCollege": EduCollege,
    "v-newsCollege": NewsCollege,
    "v-businessCollege": BusinessCollege,
    "v-leaderCollege": LeaderCollege,
    "v-info": Info,
    "v-vipbuy": VipBuy
  },
  data() {
    return {
      flag: false,
      vipInfo: "",
      collegeImg: ["", ""],
      vipPopShow: false,
      bottom: true,
      loading: true,
      collegeArr: [
        {
          title: "chineseCollege",
          url: [
            "http://static-image.1911edu.com/college_Chinese1.jpg",
            "http://static-image.1911edu.com/college_Chinese2.jpg",
            "http://static-image.1911edu.com/college_Chinese3.jpg",
            "http://static-image.1911edu.com/college_Chinese4.jpg"
          ]
        },
        {
          title: "healthCollege",
          url: [
            "http://static-image.1911edu.com/college_health1.jpg",
            "http://static-image.1911edu.com/college_health2.jpg",
            "http://static-image.1911edu.com/college_health3.jpg",
            "http://static-image.1911edu.com/college_health4.jpg",
            "http://static-image.1911edu.com/college_health5.jpg"
          ]
        },
        {
          title: "sportsCollege",
          url: [
            "http://static-image.1911edu.com/college_sports1.jpg",
            "http://static-image.1911edu.com/college_sports2.jpg",
            "http://static-image.1911edu.com/college_sports3.jpg",
            "http://static-image.1911edu.com/college_sports4.jpg"
          ]
        },
        {
          title: "smartCollege",
          url: [
            "http://static-image.1911edu.com/college_smart1.jpg",
            "http://static-image.1911edu.com/college_smart2.jpg",
            "http://static-image.1911edu.com/college_smart3.jpg",
            "http://static-image.1911edu.com/college_smart4.jpg"
          ]
        },
        {
          title: "eduCollege",
          url: [
            "http://static-image.1911edu.com/college_edu1.jpg",
            "http://static-image.1911edu.com/college_edu2.jpg",
            "http://static-image.1911edu.com/college_edu3.jpg",
            "http://static-image.1911edu.com/college_edu4.jpg"
          ]
        },
        {
          title: "newsCollege",
          url: [
            "http://static-image.1911edu.com/college_news1.jpg",
            "http://static-image.1911edu.com/college_news2.jpg",
            "http://static-image.1911edu.com/college_news3.jpg",
            "http://static-image.1911edu.com/college_news4.jpg"
          ]
        },
        {
          title: "commercialCollege",
          url: [
            "http://static-image.1911edu.com/college_business1.jpg",
            "http://static-image.1911edu.com/college_business2.jpg",
            "http://static-image.1911edu.com/college_business3.jpg",
            "http://static-image.1911edu.com/college_business4.jpg"
          ]
        },
        {
          title: "cadreCollege",
          url: [
            "http://static-image.1911edu.com/college_leader1.jpg",
            "http://static-image.1911edu.com/college_leader2.jpg",
            "http://static-image.1911edu.com/college_leader3.jpg",
            "http://static-image.1911edu.com/college_leader4.jpg"
          ]
        }
      ],
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
    lookCourse() {
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
    buyVip() {
      if (persistStore.get("token")) {
        this.vipPopShow = true;
      } else {
        this.$bus.$emit("loginShow");
      }
    },
    //关闭购买弹窗
    changeVipShow(val) {
      this.vipPopShow = false;
    },
    //申请认证
    identificate() {
      if (persistStore.get("token")) {
        this.gidForm.gids = "tab-tenth";
        this.setGid(this.gidForm);
        this.$router.push("/profile");
        persistStore.set("whichIntro", matchSplits("id"));
      } else {
        this.$bus.$emit("loginShow", true);
      }
    },
    screeningImg(data) {
      this.collegeArr.forEach(v => {
        if (v.title == data.en_title) {
          this.collegeImg = v.url;
          this.setWidth();
        }
      });
    },
    //会员详情
    vipDetail() {
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
          this.screeningImg(res.data.vipGoodsDetail);

          setTitle(this.vipInfo.title + "-1911学堂");
        } else {
          message(this, "error", res.msg);
          this.noCollege = false;
          this.$router.push("/");
        }
      });
    },
    // 设置图片宽度
    setWidth() {
      if (this.collegeImg.length == 0) {
        this.noCollege = false;
        return false;
      } else {
        this.noCollege = true;
      }
      this.width = (1920 - document.documentElement.clientWidth) / 2;
      this.$nextTick(() => {
        this.arr = document.getElementsByClassName("collegeImg");
        for (let i = 0; i < this.arr.length; i++) {
          this.arr[i].style.marginLeft = -this.width + "px";
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
      this.loading = false;
    },
    // 底部操作栏动态
    addClass() {
      this.windowHeight = document.body.scrollHeight;
      this.paperHeight = document.documentElement.clientHeight;
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (this.windowHeight - this.scrollTop - this.paperHeight <= 103) {
        this.bottom = true;
      } else {
        this.bottom = false;
      }
    },
    init() {
      this.relativeID = matchSplits("cid");
      this.vipDetailData.id = matchSplits("id");
      this.title = matchSplits("title");
    }
  },
  mounted() {
    (this.loading = true), this.init();
    this.vipDetail();
    // 寛高设置
    window.addEventListener("scroll", this.addClass);
    //   this.relativeID = matchSplits("cid");
  },
  watch: {
    $route(v, oldv) {
      this.init();
      this.vipDetail();
    },
    title() {
      this.setWidth();
    }
  }
};
</script>