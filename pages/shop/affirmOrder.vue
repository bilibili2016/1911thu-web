<template>
  <div>
    <!-- 无数据 -->
    <v-nodata :pageType="pageType" v-if="isNoMsg"></v-nodata>
    <div class="affirmOrder" ref="affirmOrder" v-else>
      <div class="contain" v-loading="loadGoods">
        <!-- 头部banner -->
        <v-banner :config="affirmOrder"></v-banner>
        <div class="main">
          <div class="goodsList">
            <v-backshopcart @handleLinkShopCart="handleLinkShopCart" :config="affirmOrder" @handleQuestion="handleReport"></v-backshopcart>
            <!-- 商品列表 -->
            <!-- <div class="goods">
              <v-list :config="affirmOrder" :data="curriculumLists"></v-list>
            </div> -->

            <div class="goods">
              <v-list :config="affirmOrder" :data="curriculumLists"></v-list>
            </div>
            <!-- 商品信息 -->
            <v-orderinfo :data="orderinfo"></v-orderinfo>
          </div>
          <v-orderbtn :data="orderinfo" @commitOrder="handleSubmit" @showRpt="handleReport" :config="affirmOrder"></v-orderbtn>
        </div>
      </div>
    </div>
    <!-- 超出限制提醒 -->
    <div class="alertMask" v-show="isShowAlert">
      <div class="alertPop">
        <i class="el-icon-close" @click="handlePopClick"></i>
        <img src="https://static-image.1911edu.com/alert.png" alt="">
        <p>{{alertText}}</p>
        <el-button @click="handleConfirmClick">知道了</el-button>
      </div>
    </div>
    <!-- 报告问题 -->
    <v-report :config="config" :showReportBug="showReportBug" @closeReport="closeReport"></v-report>
  </div>
</template>

<script>
import { affirmOrder, Pay } from "@/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import Banner from "@/pages/shop/components/banner";
import Report from "@/components/common/Report.vue";
import List from "@/pages/shop/components/List";
import orderInfo from "@/pages/shop/affirmorder/orderInfo";
import orderBtn from "@/pages/shop/affirmorder/orderBtn";
import NoData from "@/components/common/NoData.vue";

import backShopCart from "@/pages/shop/affirmorder/backShopCart";
import {
  message,
  splitUrl,
  setTitle,
  Trim,
  matchSplits
} from "@/lib/util/helper";
import { home } from "~/lib/v1_sdk/index";
export default {
  components: {
    "v-banner": Banner,
    "v-report": Report,
    "v-list": List,
    "v-orderinfo": orderInfo,
    "v-orderbtn": orderBtn,
    "v-nodata": NoData,
    "v-backshopcart": backShopCart
  },
  data () {
    return {
      isShowAlert: false,
      alertText: "",
      affirmOrder: {
        type: "affirmOrder",
        text: "确认订单"
      },
      customOrder: {
        type: "customOrder",
        text: "确认订单"
      },
      config: {
        type: 2
      },
      flag: true,
      person: true,
      isNoMsg: false,
      loadGoods: false,
      curriculumLists: [],
      customculumLists: [],
      curriculumSum: null,
      payNumber: null,
      restaurants: [],
      company: {
        id: null
      },
      orderinfo: {
        curriculumProjectLists: "",
        curriculumSum: "",
        goodsAmount: "",
        payNumber: ""
      },
      noMsg: {
        backSeconds: 5
      },
      pageType: {
        page: "affirmOrder",
        text: `您没有正在进行的订单,5s后将会跳转到首页！`,
        imgUrl: "https://static-image.1911edu.com/noMsg.png"
      },
      showReportBug: false,
      problem: {
        types: 1,
        curriculumId: null,
        content: "",
        curriculumcatalogid: ""
      },
      customId: null,
      orderType: null,
      curriculumForm: {
        curriculumProjectId: null,
        number: ""
      },
      vipForm: {
        vipID: ""
      },
      payForm: {
        ids: null,
        type: null,
        number: ""
      },
      vipForm: {
        vipId: "",
        number: ""
      },
      timer: ""
    };
  },
  watch: {
    // 保留例子
    "ticketForm.province" (val, oldval) {
      if (!this.province && this.province.length == 0) {
        this.getRegionList();
      }
      this.city = this.getRegion(this.province, val);
    }
  },

  methods: {
    handlePopClick () {
      this.isShowAlert = false;
    },
    //返回到上一页
    handleConfirmClick () {
      if (this.customId != -1) {
        if (this.orderType == 2) {
          this.$router.go(-1);
        } else {
          //定制项目返回到上一页是定制项目的编辑页
          this.$router.push(
            `/project/customerProject?sid=${this.customId}&edit=2`
          );
        }
      } else {
        this.$router.go(-1);
      }
    },
    // 报告问题
    handleReport () {
      this.showReportBug = true;
    },
    closeReport () {
      this.showReportBug = false;
      this.problem.content = "";
    },
    // reportProblem() {
    //   this.problem.curriculumId = this.config.curriculumId
    //   this.problem.curriculumcatalogid = this.config.catalogId
    //   this.problem.types = 2
    //   if (Trim(this.problem.content) === '') {
    //     message(this, 'error', '请输入要反馈的问题！')
    //     return false
    //   }
    //   this.problem.content = Trim(this.problem.content)
    //   home.reportProblem(this.problem).then(response => {
    //     if (response.status === 100100) {
    //       message(this, 'success', response.msg)
    //     } else if (response.status === 0) {
    //       this.closeReport()
    //       message(this, 'success', '提交成功，我们会尽快解决！')
    //     }
    //     if (this.word === '') {
    //       return
    //     }
    //   })
    // },
    // 返回购物车
    handleLinkShopCart () {
      this.$router.push("/shop/shoppingcart");
    },
    // 点击提交订单
    handleSubmitOrder (price) {
      affirmOrder.commitOrder().then(res => {
        if (res.status === 0) {
          this.$router.push("/shop/wepay?order=" + res.data.id + "&type=1");
        } else {
          message(this, "error", res.msg);
          if (res.status === 100007) {
            this.$router.push("/");
            this.$bus.$emit("loginShow", true);
          }
        }
      });
    },
    // 项目 提交订单->到支付页面
    handleGetCode () {
      this.payForm.ids = this.customId;
      this.payForm.type = 2;
      if (window.location.search.indexOf("pn") >= 0) {
        this.payForm.number = matchSplits("pn");
      }
      affirmOrder.getCode(this.payForm).then(res => {
        this.$router.push("/shop/wepay?order=" + res.data.order_id + "&type=1");
      });
    },
    // vip提交订单
    handleVipConfirm () {
      this.vipForm.vipId = this.customId;
      this.vipForm.number = matchSplits("pn");

      affirmOrder.addProduceOrderVip(this.vipForm).then(res => {
        this.$router.push("/shop/wepay?order=" + res.data.id + "&type=2");
      });
    },
    //获取商 品信息 列表
    handleGoodsList () {
      this.loadGoods = true;
      affirmOrder.goodsList(this.addArray).then(res => {
        if (res.status === 0) {
          this.curriculumLists = res.data.curriculumProjectLists;
          this.orderinfo = res.data;
          this.orderinfo.nickName = persistStore.get("nickName");
          if (JSON.stringify(res.data.companyInfo) != "{}") {
            this.company = res.data.companyInfo;
            this.person = false;
            this.flag = false;
          }
          this.loadGoods = false;
        } else {
          this.timer = setInterval(() => {
            if (this.noMsg.backSeconds < 1) {
              clearInterval(this.timer);
              this.$router.push("/");
            }
            this.pageType.text = `您没有正在进行的订单,${
              this.noMsg.backSeconds
              }s后将会跳转到首页！`;
            this.noMsg.backSeconds--;
          }, 1000);
          this.isNoMsg = true;
        }
      });
    },
    // 项目确认订单
    handleCustomProject (val) {
      this.affirmOrder.type = "customOrder";
      this.loadGoods = true;
      this.curriculumForm.curriculumProjectId = val;
      if (window.location.search.indexOf("pn") >= 0) {
        this.curriculumForm.number = matchSplits("pn");
      }
      affirmOrder.customProject(this.curriculumForm).then(res => {
        this.loadGoods = false;
        if (res.status === 0) {
          this.curriculumLists = res.data.curriculumProjectDetail;
          this.orderinfo = res.data.curriculumProjectDetail;
          this.orderinfo.nickName = persistStore.get("nickName");
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    //vip确认订单
    handleVip (val) {
      this.affirmOrder.type = "vip";
      this.vipForm.vipID = val;
      this.loadGoods = true;
      affirmOrder.produceOrderVip(this.vipForm).then(res => {
        this.loadGoods = false;
        if (res.status === 0) {
          this.curriculumLists = res.data.vipGoodsDetail;
          this.orderinfo.curriculumSum = matchSplits("pn");
          this.orderinfo.price = res.data.vipGoodsDetail.present_price;

          this.orderinfo.nickName = persistStore.get("nickName");
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    // 提交订单
    handleSubmit (price) {
      if (price > 10000000) {
        this.isShowAlert = true;
        this.alertText =
          "订单金额超过单笔订单限额(1000万),请将订单拆分后重新下单！";
        return false;
      }

      if (this.customId != -1) {
        if (this.orderType == 2) {
          //   vip订单
          this.handleVipConfirm();
        } else {
          // 项目订单
          this.handleGetCode();
        }
      } else {
        //   课程提交订单
        this.handleSubmitOrder();
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    clearInterval(this.timer);
    next();
  },
  mounted () {
    this.customId = matchSplits("id");
    if (this.customId == -1) {
      this.handleGoodsList();
    } else {
      //this.orderType  1:其他订单 2:vip订单
      this.orderType = matchSplits("type");

      if (this.orderType == 2) {
        this.handleVip(this.customId);
      } else {
        this.handleCustomProject(this.customId);
      }
    }
  },
  updated () {
    setTitle("确认订单-1911学堂");
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/shop/affirmOrder.scss";
</style>