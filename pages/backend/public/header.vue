<template>
  <div class="backendHeader">
    <div class="main">
      <div class="header-fl clearfix" :class="{big:isBig}">
        <div class="headerLogo fl">
          <img src="http://static-image.1911edu.com/1911-logo.png" alt>
        </div>
        <div class="headerPage clearfix">
          <div class="item" v-for="(item,index) in pages" :key="index">{{item.title}}</div>
        </div>
      </div>
      <div class="header-fr clearfix" :class="{big:isBig}">
        <div class="search">
          <i class="el-icon-search out-icon"></i>
        </div>
        <div class="clearfix HREntry">
          <span class="topCenter topCode">兑换码</span>
          <span class="hrin topCenter">
            单位入口
            <i></i>
          </span>
          <div class="downLoad">
            <i class="phone"></i>
          </div>
        </div>
        <div class="lrBtn">
          <span class="login">登录</span>/
          <span class="register">注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setPagesHeight, matchSplits, getQueryString, message } from "~/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";
import { auth, header, home } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import { validateSearch } from "~/lib/util/validate";
import { checkSearch } from "~/lib/util/validatefn";
export default {
  data () {
    return {
      isBig: false,
      pages: [],
      search: "",
      item1: [
        {
          title: "首页",
          id: "index"
        }
      ],
      item2: [],
      item3: [
        {
          title: "名师智库",
          id: "teacher"
        },
        {
          title: "城市分校",
          id: "school"
        }
        // {
        //   title: "证书查询",
        //   id: "searchCer"
        // }
      ]
    };
  },
  methods: {
    // 学院列表
    vipGoodsList () {
      home.vipGoodsList().then(response => {
        if (response.status === 0) {
          this.item2 = response.data.vipGoodsList;
          this.pages = [...this.item1, ...this.item2, ...this.item3];
        }
      });
    },
    resize () {
      let wWidth = window.innerWidth;
      this.isBig = wWidth < 1420 ? false : true;
    }
  },
  mounted () {
    this.resize()
    window.addEventListener("resize", this.resize);
    this.vipGoodsList();
  },
};
</script>
<style scoped lang="scss">
@import "~assets/style/backend/backendHeader";
</style>
