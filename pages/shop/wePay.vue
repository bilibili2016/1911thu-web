<template>
  <div class="wepay" ref="wepay" v-loading="loading">
    <div class="checkedCourse-wepay">
      <!-- 头部banner -->
      <v-banner :config="wePay"></v-banner>
      <div class="main">
        <div class="company">
          <div class="title clearfix">
            <span class="fl">订单号：{{orderDetail.order_sn}}</span>
            <span class="fr" :class="{active:takeupMsg}" @click="takeUp">{{takeupMsg?'收起':'展开'}}
              <i class="el-icon-arrow-down"></i>
            </span>
          </div>
          <div class="content">
            <div class="course">
              <!-- 购买课程列表 -->
              <v-list :config="wePay" :data="orderCurriculumLists" v-if="takeupMsg"></v-list>
              <!-- 支付类型选择-支付 -->
              <v-paytype :orderDetail="orderDetail" :codeData="codeData" :listData="orderCurriculumLists" @showRpt="showRpt"></v-paytype>
            </div>
          </div>
        </div>
      </div>
      <!-- 支付二维码展示 -->
      <v-qrcode :orderDetail='orderDetail'></v-qrcode>
      <!-- 报告问题 -->
      <v-report :config="config" :showReportBug="showReportBug" @closeReport="closeReport"></v-report>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { wepay } from "@/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import Vue from "vue";
import VueQrcode from "@xkeshi/vue-qrcode";
import Repore from "@/components/common/Report.vue";
import Banner from "@/pages/shop/components/banner";
import List from "@/pages/shop/components/List";
import PayType from "@/pages/shop/wepay/payType";
import Qrcode from "@/pages/shop/wepay/qrcode";
import {
  setPagesHeight,
  matchSplits,
  message,
  setTitle
} from "~/lib/util/helper";
Vue.component(VueQrcode.name, VueQrcode);
export default {
  components: {
    "v-banner": Banner,
    "v-list": List,
    "v-report": Repore,
    "v-paytype": PayType,
    "v-qrcode": Qrcode
  },
  data () {
    return {
      showReportBug: false,
      wePay: {
        type: "wePay",
        text: "支付中心"
      },
      payListForm: {
        orderId: null,
        attachs: null //1普通课程和普通项目订单，2 扫码支付和定制项目订单
      },
      orderDetail: {
        order_sn: null,
        order_amount: null
      },
      orderCurriculumLists: [],
      codeData: {
        code_url: "",
        qr_code: ""
      },
      config: {
        type: 2
      },
      val: "",
      interval: "",
      seconds: 1000000,
      takeupMsg: false,
      loading: false
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    takeUp () {
      this.takeupMsg = !this.takeupMsg;
    },
    goLink (item) {
      this.$router.push(item);
    },
    // 获取订单id列表
    getPayList (item) {
      this.loading = true;
      this.payListForm.orderId = matchSplits("order");
      wepay.webPay(this.payListForm).then(response => {
        this.loading = false;
        if (response.status === 100100) {
          this.$message({
            showClose: true,
            type: "error",
            message: response.msg
          });
          return false;
        } else if (response.status === 0) {
          this.orderDetail = response.data.orderDetail;
          this.orderCurriculumLists = response.data.orderCurriculumLists;
          this.codeData.code_url = response.data.code_url;
          this.codeData.qr_code = response.data.qr_code;
          this.$bus.$emit("load", false);
          if (item === "recode") {
            this.$bus.$emit("addPaySubmit");
          }
        } else if (response.status === 100110) {
          this.$router.push(
            "/shop/payPublic?orderID=" + this.payListForm.orderId
          );
        }
      });
    },
    //打开问题弹窗
    showRpt () {
      this.showReportBug = true;
    },
    //关闭问题弹窗
    closeReport () {
      this.showReportBug = false;
    }
  },
  mounted () {
    if (persistStore.get("token")) {
      this.getPayList();
    } else {
      message(this, "error", "您未登录,请先登录!");
      this.$router.push("/");
      this.$bus.$emit("loginShow", true);
    }
    setPagesHeight();

    this.$bus.$on("getPayList", data => {
      this.getPayList(data);
    });
  },
  updated () {
    setTitle("支付中心-1911学堂");
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/shop/wepay";
</style>
