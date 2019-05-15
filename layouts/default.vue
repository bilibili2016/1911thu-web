<template>
  <el-container class="is-vertical layout-default">
    <Header v-if="HFShow"></Header>
    <backend-header v-if="backendHF"></backend-header>
    <el-container v-if="!showNetwork">
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
    <Footer v-if="HFShow"></Footer>
    <backend-footer v-if="backendHF"></backend-footer>
    <div class="no-network" v-show="showNetwork">
      <img src="@/assets/images/no-network.png" alt>
    </div>
  </el-container>
</template>
<script>
import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";
import backendHeader from "~/pages/backend/public/header";
import backendFooter from "~/pages/backend/public/footer";
import { store as persistStore } from "~/lib/core/store";
import { setPagesHeight, matchSplits } from "~/lib/util/helper";
export default {
  components: {
    Header,
    Footer,
    backendHeader,
    backendFooter
  },
  data () {
    return {
      HFShow: true,
      showNetwork: false,
      backendHF: false,
      length: 0
    };
  },
  methods: {
    fetchUrl () {
      //检测网络连接情况
      if (navigator.onLine) {
        this.showNetwork = false;
      } else {
        this.showNetwork = true;
      }
      let pathName = window.location.pathname;
      if (
        pathName != "/backend/news/newsInfo" &&
        pathName != "/backend/course/coursedetail" &&
        pathName != "/backend/project/projectDetail"
      ) {
        //路有改变判断登录状态,后台预览页不需要验证
        this.$bus.$emit("getUserInfo");
        //路由改变消除掉直播的播放器
        this.$bus.$emit("stopPlay");
      }
    },
    addHandler (element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
      } else {
        element["on" + type] = handler;
      }
    },
    removeHandler (element, type, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
      } else if (element.detachEvent) {
        element.detachEvent("on" + type, handler);
      } else {
        element["on" + type] = null;
      }
    }
  },
  mounted () {
    if (document.getElementsByClassName("headerBox")[0]) {
      document.getElementsByClassName("headerBox")[0].style.display = "inline";
      document.getElementsByClassName("footerBox")[0].style.display = "inline";
    }
    this.fetchUrl();
    setPagesHeight();

    // 进入路由隐藏header和footer
    this.$bus.$on("headerFooterHide", () => {
      this.HFShow = false;
    });

    // 出路由显示header和footer
    this.$bus.$on("headerFooterShow", () => {
      this.HFShow = true;
    });

    // 隐藏header 显示backendHeader
    this.$bus.$on("backendHeaderShow", () => {
      this.HFShow = false;
      this.backendHF = true;
    });
    // 显示header 隐藏backendHeader
    this.$bus.$on("backendHeaderHide", () => {
      this.HFShow = true;
      this.backendHF = false;
    });

    // 检测网络情况
    this.addHandler(window, "online", function () {
      this.showNetwork = false;
    });
    this.addHandler(window, "offline", function () {
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
