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
    fetchUrl() {
      //检测网络连接情况
      if (navigator.onLine) {
        this.showNetwork = false;
      } else {
        this.showNetwork = true;
      }
      //路有改变判断登录状态
      this.$bus.$emit("getUserInfo");
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

    // 检测网络情况
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
