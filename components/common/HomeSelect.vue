<template>
  <div class="headerPage clearfix">
    <div class="nav" :class="{active:changeActive==item.id}" v-for="(item,index) in navList" :key="index" @click="handleClick(item)" @mouseenter="isShowSub">
      <div class="navInner">{{item.title}} <i v-if="item.childList" class="el-icon-arrow-down"></i></div>
      <ul v-if="item.childList" class="subPages" :class="{college:item.id == 'onlineCollege',subHidden:isHidden}" ref="subIndex">
        <li :class="{scanCode:child.id=='download'}" v-for="(child,index) in item.childList" :key="'child'+index" @click.stop="handleLiClick(item,child,index)">
          {{child.title}}
          <div class="downApp clearfix">
            <qrcode v-if="child.id=='download'" class="" :value="downloadAppURL" :options="{ size: 150 }"></qrcode>
            <p class="changeType">扫一扫下载APP</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { matchSplits, setTitle, message } from "@/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { home } from "~/lib/v1_sdk/index";
import { getNetwork } from "@/lib/util/helper";

export default {
  props: ["categoryArr", "projectArr"],
  data () {
    return {
      isHidden: false,
      changeActive: "",
      pages: [],
      navList: [
        {
          title: "首页",
          id: "index",
          link: "/"
        },
        {
          title: "课程",
          id: "courseCenter",
          link: "/course/category?cid=0&cp=0&pids=0&xid=0&vid=-1"
        },
        {
          title: "师资",
          id: "teacher",
          link: "/home/teacher/teacherIndex"
        },
        {
          title: "学院",
          id: "onlineCollege",
          link: "/home/vip/collegeIndex"
        },
        // {
        //   title: "单位内训",
        //   id: "unit",
        //   link: "/other/activePages/Institutional"
        // },
        // {
        //   title: "学位项目",
        //   id: "project",
        //   link: "/project/degreeProject"
        // },
        {
          title: "测评体系",
          id: "system",
          link: "/home/core/pages/personEval"
        },

        // {
        //   title: "城市分校",
        //   id: "school",
        //   link: "/home/citySchool/schoolIntro"
        // },
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
        }
        // {
        //   title: "关于我们",
        //   id: "adoutUs",
        //   link: "/other/pages/homeUs"
        // },

      ],
      downloadAppURL: "",
      downloadAppURL_test:
        "https://ceshiapi.1911edu.com/Api/v1_1/AppH5/appDownload",
      downloadAppURL_pro: "https://api.1911edu.com/Api/v1_1/AppH5/appDownload"
    };
  },
  methods: {
    handleClick (item, child, index) {
      this.isHidden = false;
      this.handleLiClick(item, child, index);
    },
    handleLiClick (item, child, index) {
      if (index != undefined) {
        document.getElementsByClassName("");
        let subLen = this.$refs.subIndex;
        for (let i = 0; i < subLen.length; i++) {
          // subLen[i].style.opacity = 0;
        }
      }
      if (item.link == "" && !child) {
        return false;
      }
      //学院
      // if (item.id == "onlineCollege") {
      //   this.$router.push({
      //     path: "/home/vip/collegeInfo",
      //     query: {
      //       id: child.id,
      //       cid: child.category_id,
      //       title: child.en_title
      //     }
      //   });
      // } else
      if (item.id == "service") {
        //服务支持
        if (child.id == "code") {
          this.isHidden = true;
          //兑换码
          this.$emit("addEcg");
        } else {
          this.$router.push(child.link);
        }
      } else {
        this.$router.push(item.link);
      }
    },
    isShowSub () {
      this.isHidden = false;
    },
    changeHeaderActive () {
      this.isHidden = true;

      let pathName = window.location.pathname;
      //初始化名师智库默认选中学院分类
      if (
        pathName == "/home/teacher/teacherIndex"
      ) {
      } else {
        persistStore.set("cid", -1);
      }

      switch (pathName) {
        //首页
        case "/":
          this.changeActive = "index";
          break;
        //关于我们
        case "/other/pages/homeUs":
          this.changeActive = "adoutUs";
          break;
        //在线学院
        case "/home/vip/collegeIndex":
        case "/home/vip/collegeInfo":

          this.changeActive = "onlineCollege";
          break;
        case "/course/category":
          if (matchSplits("cp") == 0 && matchSplits("vid") != -1) {
            this.changeActive = "onlineCollege";
          } else if (matchSplits("cp") == 0 && matchSplits("vid") == -1) {
            this.changeActive = "courseCenter";
          } else {
            this.changeActive = -1;
          }
          break;
        //单位内训
        case "/other/activePages/Institutional":
          this.changeActive = "unit";
          break;
        //测评体系
        case "/home/core/pages/personEval":
          this.changeActive = "system";
          break;
        //学位项目
        case "/project/degreeProject":
          this.changeActive = "project";
          break;
        //名师智库
        case "/home/teacher/teacherIndex":
        case "/home/teacher/list":
        case "/home/teacher/orderTeacher":
        case "/home/teacher/beTeacher":
          this.changeActive = "teacher";
          break;
        //城市分校
        case "/home/citySchool/schoolIntro":
        case "/home/citySchool/submitSuccess":
          this.changeActive = "school";
          break;
        //课程分类
        case "/course/category":
          this.changeActive = matchSplits("vid");
          break;
        //证书查询
        case "/home/certification/searchPage":
        case "/home/certification/viewPage":
          this.changeActive = "service";
          break;
        default:
          this.changeActive = -1;
          break;
      }
    },

  },
  mounted () {
    // this.vipGoodsList();
    this.changeHeaderActive();
    if (getNetwork()) {
      this.downloadAppURL = this.downloadAppURL_test;
    } else {
      this.downloadAppURL = this.downloadAppURL_pro;
    }
  },
  watch: {
    $route: "changeHeaderActive"
  }
};
</script>
