<template>
  <div class="backendHeader">
    <div class="main">
      <div class="header-fl clearfix" :class="{big:isBig}">
        <div class="headerLogo fl">
          <img src="https://static-image.1911edu.com/1911-logo.png" alt>
        </div>
        <div class="headerPage clearfix">
          <div class="nav" v-for="(item,index) in navList" :key="index" @click="handleClick()" @mouseenter="isShowSub">
            <div class="navInner">{{item.title}} <i v-if="item.childList" class="el-icon-arrow-down"></i></div>
            <ul v-if="item.childList" class="subPages" :class="{college:item.id == 'onlineCollege',subHidden:isHidden}" ref="subIndex">
              <li :class="{scanCode:child.id=='download'}" v-for="(child,index) in item.childList" :key="'child'+index">
                {{child.title}}
                <div class="downApp clearfix">
                  <qrcode v-if="child.id=='download'" class="" :value="downloadAppURL" :options="{ size: 150 }"></qrcode>
                  <p class="changeType">扫一扫下载APP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="header-fr clearfix" :class="{big:isBig}">
        <div class="search">
          <i class="el-icon-search out-icon"></i>
          <div ref="searchInput" class="searchInput">
            <input type="text" placeholder="请输入课程、导师" v-model="search">
            <span class="innerIcon">
              <i class="el-icon-search inner-icon"></i>
            </span>
          </div>
        </div>
        <div class="lrBtn">
          <span class="login">登录</span> /
          <span class="register">注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setPagesHeight,
  matchSplits,
  getQueryString,
  message,
  getNetwork
} from "~/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";
import { auth, header, home } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import { validateSearch } from "~/lib/util/validate";
import { } from "@/lib/util/helper";
export default {
  data () {
    return {
      isBig: false,
      isShowInput: false,
      search: "",
      isHidden: false,
      navList: [
        {
          title: "首页",
          id: "index",
          link: "/"
        },
        {
          title: "在线学院",
          id: "onlineCollege",
          link: "",
          childList: []
        },
        {
          title: "单位内训",
          id: "unit",
          link: "/other/activePages/Institutional"
        },
        {
          title: "学位项目",
          id: "project",
          link: "/project/degreeProject"
        },
        {
          title: "测评体系",
          id: "system",
          link: "/home/core/pages/personEval"
        },
        {
          title: "名师智库",
          id: "teacher",
          link: "/home/teacher/teacherIndex"
        },
        {
          title: "城市分校",
          id: "school",
          link: "/home/citySchool/schoolIntro"
        },
        {
          title: "服务支持",
          id: "service",
          link: "",
          childList: [
            {
              title: "证书查询",
              id: "certification",
              link: "/home/certification/searchPage"
            },
            {
              title: "兑换码",
              id: "code",
              link: ""
            },
            {
              title: "APP下载",
              id: "download",
              link: ""
            }
          ]
        },
        {
          title: "关于我们",
          id: "adoutUs",
          link: "/other/pages/homeUs"
        }
      ],
      downloadAppURL: "",
      downloadAppURL_test:
        "https://ceshiapi.1911edu.com/Api/v1_1/AppH5/appDownload",
      downloadAppURL_pro: "https://api.1911edu.com/Api/v1_1/AppH5/appDownload"
    };
  },
  methods: {
    handleClick () {
      this.isHidden = false;
    },
    isShowSub () {
      this.isHidden = false;
    },
    // 学院列表
    vipGoodsList () {
      home.vipGoodsList().then(response => {
        if (response.status === 0) {
          for (const key in this.navList) {
            if (this.navList[key].id == "onlineCollege") {
              this.navList[key].childList = response.data.vipGoodsList;
            }
          }
        }
      });
    },
    resize () {
      let wWidth = window.innerWidth;
      this.isBig = wWidth < 1420 ? false : true;
    }
  },
  mounted () {
    this.resize();
    window.addEventListener("resize", this.resize);
    this.vipGoodsList();
    if (getNetwork()) {
      this.downloadAppURL = this.downloadAppURL_test;
    } else {
      this.downloadAppURL = this.downloadAppURL_pro;
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/backend/backendHeader";
</style>
