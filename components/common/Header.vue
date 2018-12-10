<template>
  <div class="headerBox">
    <!-- 测试 123 -->
    <!-- 优惠主题入口 -->
    <v-discount v-if="bannerMsg" @closeBanner="closeBanner"></v-discount>
    <div class="main">
      <div class="header-fl clearfix" :class="{big:isBig}">
        <v-logo @handleLink="handleLink"></v-logo>
        <v-homeselect :projectArr="projectArr" :categoryArr="categoryArr"></v-homeselect>
      </div>
      <div class="header-fr clearfix" :class="{big:isBig}">
        <v-lrbtn v-if="!isAuthenticated" @login="login" @register="register"></v-lrbtn>
        <v-headerimg
          v-else
          :data="user"
          @handleLinkProfile="handleLinkProfile"
          @handleSignOut="handleSignOut"
        ></v-headerimg>
        <v-enter
          :class="['HREntry' ,{islogined : isAuthenticated }]"
          @handleLink="handleLink"
          @addEcg="handleAddEcg"
        ></v-enter>
        <v-search @handleSearch="handleSearch"></v-search>
      </div>
      <v-code
        v-show="bindForm.isBind"
        :bindForm="bindForm"
        @detection="handleDetection"
        @closeEcg="handleCloseEcg"
      ></v-code>
      <v-login></v-login>
    </div>
  </div>
</template>

<script>
import { setPagesHeight, matchSplits } from "~/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";
import { getQueryString } from "@/lib/util/helper";
import { auth, header, home } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import { validateSearch } from "~/lib/util/validate";
import { checkSearch } from "~/lib/util/validatefn";
import HomeSelect from "@/components/common/HomeSelect.vue";
import Login from "@/pages/auth/Login.vue";
import Discount from "@/components/header/Discount.vue";
import CodeCase from "@/components/header/CodeCase.vue";

import HomeLogo from "@/components/header/HomeLogo.vue";
import { message } from "@/lib/util/helper";
import LRBtn from "@/components/header/LRBtn.vue";
import HeaderImg from "@/components/header/HeaderImg.vue";
import HREntry from "@/components/header/HREntry.vue";
import HeaderSearch from "@/components/header/HeaderSearch.vue";
export default {
  components: {
    "v-homeselect": HomeSelect,
    "v-login": Login,
    "v-discount": Discount,
    "v-code": CodeCase,
    "v-lrbtn": LRBtn,
    "v-headerimg": HeaderImg,
    "v-enter": HREntry,
    "v-logo": HomeLogo,
    "v-search": HeaderSearch
  },
  watch: {
    // 绑定兑换码
    "bindForm.courseId" (val, oldval) {
      if (val == "") {
        this.bindForm.isInput = false;
      } else {
        if (/^[A-Za-z0-9]+$/.test(val)) {
          this.bindForm.isInput = true;
        }
      }
    }
  },
  data () {
    return {
      isBig: false,
      // 顶部列表
      curruntForm: {
        pages: 1,
        limits: "",
        evaluateLimit: null,
        isevaluate: 1
      },
      categoryArr: [],
      projectArr: [],
      isHasClass: true,
      judegExplorer: false, //判断当前浏览器，如果是IE页面顶部提示
      bannerMsg: false,
      iphones: false,
      bindForm: {
        courseId: "",
        isBind: false,
        isInput: false,
        error: ""
      },
      loadLogin: false,
      search: "",
      shoppingCartNum: 1,

      bgMsg: false,
      user: {
        userImg: ""
      },
      QRcode: "http://static-image.1911edu.com/wechatLogin.png",

      gidForm: {
        gids: null
      },
      authPath: [
        "/shop/affirmorder",
        "/shop/shoppingcart",
        "/profile",
        "/shop/wepay"
      ],
      pass: true,
      skip: "" //兑换码类型
    };
  },
  computed: {
    ...mapState("auth", ["token", "productsNum"]),
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("auth", ["setGid", "setProductsNum", "signOut"]),
    closeBanner () {
      this.bannerMsg = false;
    },
    // 跳转 公共路由方法
    handleLink (data) {
      if (data === "/other/pages/search") {
        let ID = Math.random();
        this.$router.push({ path: data, query: { ID } });
      } else if (data === "/shop/shoppingcart") {
        if (persistStore.get("token")) {
          this.$router.push(data);
        } else {
          this.handleSignOut();
          this.$bus.$emit("loginShow", true);
        }
      } else {
        this.$router.push(data);
      }
    },
    // 下拉列表
    getClassifyList () {
      home.getClassifyList(this.curruntForm).then(response => {
        if (response.status === 0) {
          this.categoryArr = [];
          this.projectArr = [];
          for (let item of response.data.categoryList) {
            if (item.is_picture_show == 0) {
              this.categoryArr.push(item);
            } else {
              this.projectArr.push(item);
            }
          }
        }
      });
    },
    handleSearchData (item) {
      persistStore.set("key", item);
      this.handleLink("/other/pages/search");
    },
    // 搜索
    handleSearch (item) {
      this.search = item.replace(/[ ]/g, "");
      checkSearch(this.search, this.handleSearchData);
    },
    // 兑换码 --- 关闭头部绑定课程
    handleCloseEcg () {
      this.bindForm.courseId = "";
      this.bindForm.isBind = false;
    },
    // 兑换码 --- 打开头部绑定课程
    handleAddEcg () {
      if (persistStore.get("token")) {
        this.bindForm.isBind = true;
      } else {
        this.$alert(
          "您暂未登录，无法绑定兑换码，请先完成用户登录！",
          "温馨提示",
          {
            confirmButtonText: "确定",
            center: true,
            callback: action => {
              if (action === "cancel") {
              } else {
                this.handleSignOut();
                this.$bus.$emit("loginShow", true);
              }
            }
          }
        );
      }
    },
    // 兑换码 --检测兑换码内是否包含已绑定的课程
    handleDetection () {
      if (!/^[A-Za-z0-9]{6}$/.test(this.bindForm.courseId)) {
        message(this, "error", "请输入正确的兑换码！");
        this.bindForm.isInput = false;
        return false;
      }
      header.detectionCode(this.bindForm).then(res => {
        if (res.status === 100100) {
          message(this, "error", res.msg);
          this.bindForm.isBind = false;
          return false;
        } else if (res.status === 100008) {
          this.bindForm.isBind = false;
          this.isSingleLogin(res);
          return false;
        } else {
          // 判断兑换码内是否包含已绑定的课程
          if (res.data.is_exist === 1) {
            this.$confirm(
              "该兑换码所包含商品与已购商品重复，如继续绑定，重复商品将进行有效时间累加。",
              {
                confirmButtonText: "取消",
                cancelButtonText: "坚持绑定",
                closeOnHashChange: false,
                // type: 'warning',
                center: true
              }
            )
              .then(() => {
                message(this, "info", "已取消绑定");
              })
              .catch(() => {
                // 添加绑定课程
                this.handleBind();
              });
          } else {
            this.handleBind();
          }
        }
      });
    },
    invitationCodeType (item) {
      switch (item) {
        case "1":
          //兑换码内只有课程
          this.skip = "tab-second";
          break;
        case "2":
          //兑换码内只有项目
          this.skip = "tab-third";
          break;
        case "3":
          //兑换码内只有项目 +课程
          this.skip = "tab-first";
          break;
        case "4":
          //兑换码内只有自定义项目
          this.skip = "tab-third";
          break;
        case "5":
          //兑换码内只有学院
          this.skip = "tab-first";
          break;
      }
    },
    // 兑换码 -- 头部绑定课程
    handleBind () {
      header.bindingCurriculumPrivate(this.bindForm).then(res => {
        let error = res.status === 0 ? "success" : "error";
        message(this, error, res.msg);
        if (res.status === 0) {
          this.invitationCodeType(res.data.invitation_code_type);
          // 兑换完成只要不是课程就更新个人中心头部的VIP天数
          if (res.data.invitation_code_type != 1) {
            this.$bus.$emit("reUserInfo");
          }
          this.bindForm.courseId = "";
          this.bindForm.isBind = false;
          if (JSON.stringify(res.data.vipGoodsDetail) != "{}") {
            //绑定学院兑换码跳转到学院介绍页
            this.$router.push({
              path: "/home/vip/vipPage",
              query: {
                id: res.data.vipGoodsDetail.vip_id,
                cid: res.data.vipGoodsDetail.category_id
              }
            });
            this.$message({
              showClose: true,
              message: "欢迎进入学院！",
              type: "success",
              duration: 4000
            });
            return false;
          }

          if (window.location.pathname === "/profile") {
            this.$bus.$emit("studyCourse", this.skip);
          } else {
            this.handleLinkProfile(this.skip);
          }
        } else if (res.status === 100100) {
          this.bindForm.error = res.msg;
        } else {
          this.bindForm.isBind = false;
          this.isSingleLogin(res);
        }
      });
    },
    // 个人中心 跳转
    handleLinkProfile (item) {
      this.gidForm.gids = item;
      this.setGid(this.gidForm);
      this.getUserInfo();
      this.$router.push("/profile");
      this.$bus.$emit("selectProfileIndex", item);
    },
    // 个人中心 退出
    handleSignOut () {
      this.signOut();
      this.$router.push("/");
      persistStore.clearAll();
    },
    // 个人中心 登录ZRlUuF
    login () {
      this.$bus.$emit("loginShow");
    },
    // 个人中心 注册
    register () {
      this.$bus.$emit("registerShow");
    },
    // 个人中心 购物车数量
    getShopCartNum () {
      if (persistStore.get("token")) {
        header.shopCartList().then(res => {
          if (res.status === 100008) {
          } else {
            if (res.data) {
              this.setProductsNum({
                pn:
                  Number(res.data.curriculumCartList.length) +
                  Number(res.data.projectCartList.length)
              });
            }
          }
        });
      }
    },
    // 个人中心 重新登录 弹框
    reLoginAlert (type, res) {
      this.handleSignOut();
      this.$alert(res.msg + "," + "请重新登录", "温馨提示", {
        confirmButtonText: "确定",
        callback: action => {
          // 展示出登录框
          this.$bus.$emit("loginShow", true);
          //初始化首页数据
          if (type) {
            this.$bus.$emit("refetchData", true);
          }
        }
      });
    },
    // 您未登录请先登录 弹框
    notLogIn (type, res) {
      this.handleSignOut();
      this.$alert(res.msg, "温馨提示", {
        confirmButtonText: "确定",
        callback: action => {
          // 展示出登录框
          this.$bus.$emit("loginShow", true);
          //初始化首页数据
          if (type) {
            this.$bus.$emit("refetchData", true);
          }
        }
      });
    },
    // 个人中心 单点登录 逻辑 判断
    isSingleLogin (res) {
      if (res.status === 100008) {
        // 设置单点登录
        this.reLoginAlert(true, res);
      } else if (res.status === 100100) {
        // 设置单点登录
        if (this.authPath.indexOf(window.location.pathname) > 0) {
          this.reLoginAlert(true, res);
        }
      } else if (res.status === 0) {
        this.getAll();
        persistStore.set("isSingleLogin", true);
        // 设置用户信息
        this.setUserInfo(res);
        // this.getClassifyList()
      }
      this.pass = true;
    },
    // 个人中心 个人信息设置
    setUserInfo (res) {
      this.userInfo = res.data.userInfo;
      persistStore.set("nickName", this.userInfo.nick_name);
      persistStore.set("phone", this.userInfo.user_name);
      if (this.userInfo.head_img && this.userInfo.head_img != "") {
        this.user.userImg = this.userInfo.head_img;
      } else {
        this.user.userImg =
          "http://static-image.1911edu.com/defaultHeadImg.jpg";
      }
    },
    // 个人中心 用户头像
    getUserInfo () {
      if (!this.pass) {
        return false;
      }
      if (persistStore.get("token")) {
        this.pass = false;
        header.getUserInfo().then(res => {
          this.isSingleLogin(res);
        });
      }
    },
    getAll () {
      this.getShopCartNum();
      if (!persistStore.get("token")) {
        this.signOut();
      }
    },
    onBusEvent () {
      // 监听 优惠专题入口的banner 隐藏
      this.$bus.$on("bannerImg", data => {
        this.bannerMsg = data;
      });
      // 更换头像
      this.$bus.$on("changeimg", data => {
        this.user.userImg = data;
      });
      // 重新拉取用户信息
      this.$bus.$on("getUserInfo", data => {
        this.getUserInfo();
      });
      // 获取购物车数量
      this.$bus.$on("updateCount", () => {
        this.getShopCartNum();
      });
      this.$bus.$on("isSingleLogin", data => {
        this.isSingleLogin(data);
      });
    },
    // 兼容IE
    explorer () {
      if (!!window.ActiveXObject || "ActiveXObject" in window) {
        this.judegExplorer = true;
      } else {
        this.judegExplorer = false;
      }
    },
    // 判断浏览器是否是移动端
    browserRedirect () {
      var sUserAgent = window.navigator.userAgent.toLowerCase();
      var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
      var bIsMidp = sUserAgent.match(/midp/i) == "midp";
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
      var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
      var bIsAndroid = sUserAgent.match(/android/i) == "android";
      var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
      var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
      if (
        bIsIpad ||
        bIsIphoneOs ||
        bIsMidp ||
        bIsUc7 ||
        bIsUc ||
        bIsAndroid ||
        bIsCE ||
        bIsWM
      ) {
        //跳转移动端页面
        document.body.classList.add("mobile");
      } else {
        //跳转pc端页面
        document.body.classList.remove("mobile");
      }
    },
    resize () {
      let wWidth = window.innerWidth;
      this.isBig = wWidth < 1420 ? false : true;
    }
  },
  mounted () {
    this.resize();
    window.addEventListener("resize", this.resize);
    // 当前浏览器是否是移动端
    this.browserRedirect();
    this.onBusEvent();
    this.$bus.$on("reLoginAlertPop", data => {
      this.reLoginAlert(data.type, data.res);
    });
    this.$bus.$on("getClassifyList", data => {
      this.getClassifyList();
    });
    this.$bus.$on("notLogIn", data => {
      this.notLogIn(data.type, data.res);
    });
  }
};
</script>
