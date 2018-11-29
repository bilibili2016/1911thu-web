<template>
  <el-container class="is-vertical layout-default">
    <Header v-show="hfshow"></Header>
    <el-container v-if="!showNetwork">
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
    <Footer v-show="hfshow"></Footer>
    <div
      class="no-network"
      v-show="showNetwork"
    >
      <img
        src="@/assets/images/no-network.png"
        alt=""
      >
    </div>
  </el-container>
</template>
<script>
import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";
import { store as persistStore } from "~/lib/core/store";
import { setPagesHeight, matchSplits } from "~/lib/util/helper";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      hfshow: true,
      showNetwork: false,
      index: 0,
      length: 0
    };
  },
  methods: {
    //设置头部homeSelect选中样式
    fetchUrl() {
      //检测网络连接情况
      if (navigator.onLine) {
        this.showNetwork = false;
      } else {
        this.showNetwork = true;
      }

      let pathName = window.location.pathname;
      let headerClass = document.getElementsByClassName("headerClass");
      this.$bus.$emit("getUserInfo");
      if (pathName === "/") {
        //首页
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove("active");
        }
        headerClass[0].classList.add("active");
      } else if (
        pathName === "/home/teacher/list" ||
        pathName == "/home/teacher/orderTeacher" ||
        pathName == "/home/teacher/beTeacher"
      ) {
        //名师智库
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove("active");
        }
        headerClass[3].classList.add("active");
      } else if (pathName === "/course/category") {
        //全部课程/全部项目
        // for (var i = 0; i < headerClass.length; i++) {
        //   headerClass[i].classList.remove('active')
        // }
        // if (matchSplits('cp') === '0') {
        //   //课程
        //   headerClass[1].classList.add('active')
        // } else if (matchSplits('cp') === '1') {
        //   //项目
        //   headerClass[2].classList.add('active')
        // }
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove("active");
        }
        if (matchSplits("cid") == 1) {
          headerClass[1].classList.add("active");
        } else if (matchSplits("cid") == 17) {
          headerClass[2].classList.add("active");
        }
      } else if (pathName === "/home/vip/vipPage") {
        //vip会员
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove("active");
        }
        if (matchSplits("id") == 2) {
          headerClass[1].classList.add("active");
        } else {
          headerClass[2].classList.add("active");
        }
        // if (persistStore.get('selectItem') == 0) {
        //   headerClass[1].classList.add('active')
        // } else {
        //   headerClass[2].classList.add('active')
        // }
      } else if (
        pathName == "/home/citySchool/schoolApplication" ||
        pathName == "/home/citySchool/schoolIntro" ||
        pathName == "/home/citySchool/submitSuccess" ||
        pathName == "/home/citySchool/viewSchoolAddress"
      ) {
        //城市分校
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove("active");
        }
        headerClass[4].classList.add("active");
      } else {
        //其他
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove("active");
        }
      }
    },
    addHandler(element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
      } else {
        element["on" + type] = handler;
      }
    },
    removeHandler(element, type, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
      } else if (element.detachEvent) {
        element.detachEvent("on" + type, handler);
      } else {
        element["on" + type] = null;
      }
    }
  },
  mounted() {
    document.getElementsByClassName("headerBox")[0].style.display = "inline";
    document.getElementsByClassName("footerBox")[0].style.display = "inline";
    this.fetchUrl();
    setPagesHeight();
    // 进入路由隐藏header和footer
    this.$bus.$on("headerFooterHide", () => {
      this.hfshow = false;
    });

    // 出路由显示header和footer
    this.$bus.$on("headerFooterShow", () => {
      this.hfshow = true;
    });
    this.$bus.$on("selectItem", data => {
      this.index = data;
    });

    this.addHandler(window, "online", function() {
      this.showNetwork = false;
    });
    this.addHandler(window, "offline", function() {
      this.showNetwork = true;
    });
  },
  watch: {
    $route: "fetchUrl"
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/config";
.headerBox {
  display: block;
}
</style>
