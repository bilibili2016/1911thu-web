<template>
<div>
  <el-main class="home">
     <!-- 头部导航 -->
  <v-tab :items="items" :classify ="classify" :courses="courses" :tabmsg="tabmsg" :activeName="activeName"  :dingData="dingData" :config = "ding"></v-tab>
    <!-- 新上好课 -->
    <v-new :config="config" :newData="newData" :titleOne="titleOne"></v-new>
    <!-- 经典好课 -->
    <v-classic :config="config" :classicData="classicData" :titleTwo="titleTwo"></v-classic>
    <!-- 名师大咖秀 -->
    <v-famous :teachers ="teachers" :titleThree = "titleThree"></v-famous>
    <!-- 用户评价 -->
    <v-evaluate :titleFour="titleFour" :carouselSrc = "carouselSrc"></v-evaluate>
    <!-- 学堂资讯 -->
    <v-info :infoDesc = "infoDesc" :infoArticle= "infoArticle" :infoTwo="infoTwo" :infoOne="infoOne" :titleFive= "titleFive"></v-info>
    <!-- 合作伙伴 -->
    <v-partner :data="partnerList"></v-partner>
    <v-backtotop></v-backtotop>
  </el-main>
</div>
</template>

<script>
import Partner from "@/pages/home/pages/partner.vue";
import Info from "@/pages/home/pages/info.vue";
import Evaluate from "@/pages/home/pages/evaluate.vue";
import Famous from "@/pages/home/pages/famous.vue";
import Classic from "@/pages/home/pages/classic.vue";
import New from "@/pages/home/pages/new.vue";
import Tab from "@/pages/home/pages/tab.vue";
import BackToTop from "@/components/common/BackToTop.vue";
export default {
  components: {
    "v-partner": Partner,
    "v-info": Info,
    "v-evaluate": Evaluate,
    "v-famous": Famous,
    "v-classic": Classic,
    "v-new": New,
    "v-tab": Tab,
    'v-backtotop': BackToTop
  },
  data() {
    return {
      tabmsg: false,
      newData: [
        {
          bg: require("@/assets/images/home_new01.png"),
          name: "H5和小程序直播开发",
          cnum: 12,
          pnum: 899,
          avator: require("@/assets/images/home_avator.png"),
          id: 14,
          rate: 3
        },
        {
          bg: require("@/assets/images/home_new02.png"),
          name: "H5和小程序直播开发",
          cnum: 34,
          pnum: 2312,
          avator: require("@/assets/images/home_avator.png"),
          id: 12,
          rate: 5
        },
        {
          bg: require("@/assets/images/home_new03.png"),
          name: "H5和小程序直播开发",
          cnum: 26,
          pnum: 799,
          avator: require("@/assets/images/home_avator.png"),
          id: 13,
          rate: 1
        },
        {
          bg: require("@/assets/images/home_new04.png"),
          name: "H5和小程序直播开发",
          cnum: 12,
          pnum: 4399,
          avator: require("@/assets/images/home_avator.png"),
          id: 16,
          rate: 2
        }
      ],
      classicData: [
        {
          bg: require("@/assets/images/home_new01.png"),
          name: "H5和小程序直播开发",
          cnum: 12,
          pnum: 899,
          avator: require("@/assets/images/home_avator.png"),
          id: 1,
          rate: 3
        },
        {
          bg: require("@/assets/images/home_new02.png"),
          name: "H5和小程序直播开发",
          cnum: 34,
          pnum: 2312,
          avator: require("@/assets/images/home_avator.png"),
          id: 2,
          rate: 5
        },
        {
          bg: require("@/assets/images/home_new03.png"),
          name: "H5和小程序直播开发",
          cnum: 26,
          pnum: 799,
          avator: require("@/assets/images/home_avator.png"),
          id: 3,
          rate: 1
        },
        {
          bg: require("@/assets/images/home_new04.png"),
          name: "H5和小程序直播开发",
          cnum: 12,
          pnum: 4399,
          avator: require("@/assets/images/home_avator.png"),
          id: 4,
          rate: 2
        },
        {
          bg: require("@/assets/images/home_new01.png"),
          name: "H5和小程序直播开发",
          cnum: 12,
          pnum: 899,
          avator: require("@/assets/images/home_avator.png"),
          id: 5,
          rate: 3
        },
        {
          bg: require("@/assets/images/home_new02.png"),
          name: "H5和小程序直播开发",
          cnum: 34,
          pnum: 2312,
          avator: require("@/assets/images/home_avator.png"),
          id: 6,
          rate: 5
        },
        {
          bg: require("@/assets/images/home_new03.png"),
          name: "H5和小程序直播开发",
          cnum: 26,
          pnum: 799,
          avator: require("@/assets/images/home_avator.png"),
          id: 7,
          rate: 1
        },
        {
          bg: require("@/assets/images/home_new04.png"),
          name: "H5和小程序直播开发",
          cnum: 12,
          pnum: 4399,
          avator: require("@/assets/images/home_avator.png"),
          id: 8,
          rate: 2
        }
      ],
      config: {
        card_type: "home"
      },
      infoOne: {
        card_type: "infoOne"
      },
      infoTwo: {
        card_type: "infoTwo"
      },
      titleOne: "新上好课",
      titleTwo: "经典课程",
      titleThree: "名师大咖秀",
      titleFour: "用户评价",
      titleFive: "学堂资讯",
      partnerList: [
        { src: require("../assets/images/ptn1.png") },
        { src: require("../assets/images/ptn2.png") },
        { src: require("../assets/images/ptn3.png") },
        { src: require("../assets/images/ptn4.png") },
        { src: require("../assets/images/ptn5.png") },
        { src: require("../assets/images/ptn6.png") },
        { src: require("../assets/images/ptn7.png") },
        { src: require("../assets/images/ptn8.png") },
        { src: require("../assets/images/ptn9.png") },
        { src: require("../assets/images/ptn10.png") }
      ],
      teachers: [
        {
          src: require("../assets/images/teacher1.png"),
          name: "张邵阳",
          abstract:
            "源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。"
        },
        {
          src: require("../assets/images/teacher2.png"),
          name: "张邵阳",
          abstract:
            "源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。"
        },
        {
          src: require("../assets/images/teacher3.png"),
          name: "张邵阳",
          abstract:
            "源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。"
        }
      ],
      infoArticle: [
        {
          avatar: require("@/assets/images/home_info02.png"),
          created_at: "2018-05-04 07:37:00",
          data_type: 1,
          deleted_at: null,
          example_url: "",
          examples: "",
          id: 14,
          info: {},
          name: "收集工具",
          overview: "",
          ref: 0,
          rules_and_tips: "",
          steps: "",
          tags: "",
          updated_at: "2018-05-04 07:37:00"
        },
        {
          avatar: require("@/assets/images/home_info03.png"),
          created_at: "2018-05-04 07:37:00",
          data_type: 1,
          deleted_at: null,
          example_url: "",
          examples: "",
          id: 24,
          info: {},
          name: "收集工具",
          overview: "",
          ref: 0,
          rules_and_tips: "",
          steps: "",
          tags: "",
          updated_at: "2018-05-04 07:37:00"
        },
        {
          avatar: require("@/assets/images/home_info04.png"),
          created_at: "2018-05-04 07:37:00",
          data_type: 1,
          deleted_at: null,
          example_url: "",
          examples: "",
          id: 34,
          info: {},
          name: "收集工具",
          overview: "",
          ref: 0,
          rules_and_tips: "",
          steps: "",
          tags: "",
          updated_at: "2018-05-04 07:37:00"
        }
      ],

      infoDesc: [
        {
          avatar: require("@/assets/images/home_info01.png"),
          id: 54
        }
      ],
      ding: {
        card_type: "ding"
      },
      dingData: [
        {
          src: require("../assets/images/pro1.png"),
          title: "面授、线下活动",
          content:
            "中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办..."
        },
        {
          src: require("../assets/images/pro2.png"),
          title: "企业课程定制",
          content:
            "中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办..."
        },
        {
          src: require("../assets/images/pro3.png"),
          title: "企业课程定制",
          content:
            "中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办..."
        }
      ],
      numSrc: require("@/assets/images/home_num.png"),
      value1: 4,
      avator: require("@/assets/images/home_avator.png"),
      imgList: [
        {
          url: require("@/assets/images/home_teacher01.png")
        },
        {
          url: require("@/assets/images/home_teacher02.png")
        },
        {
          url: require("@/assets/images/home_teacher01.png")
        }
      ],
      carouselSrc: require("@/assets/images/home_avator02.png"),
      items: [
        { src: require("../assets/images/banner.png") },
        { src: require("../assets/images/banner.png") },
        { src: require("../assets/images/banner.png") }
      ],
      classify: [
        "干部通用",
        "党政系统学院",
        "在线商学院",
        "行业学院",
        "职场学院",
        "热点学院"
      ],
      activeName: "00",
      courses: [
        {
          src: require("../assets/images/course1.png"),
          title: "高效团队与卓越执行力 高效团队",
          author: "王建林 清华大学电子工程系教授"
        },
        {
          src: require("../assets/images/course2.png"),
          title: "高效团队与卓越执行力 高效团队",
          author: "王建林 清华大学电子工程系教授"
        },
        {
          src: require("../assets/images/course1.png"),
          title: "高效团队与卓越执行力 高效团队",
          author: "王建林 清华大学电子工程系教授"
        },
        {
          src: require("../assets/images/course2.png"),
          title: "高效团队与卓越执行力 高效团队",
          author: "王建林 清华大学电子工程系教授"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// 如果需要使用全局的 scss 变量就这样引入即可
@import "~assets/style/config";
@import "~assets/style/index";

</style>
