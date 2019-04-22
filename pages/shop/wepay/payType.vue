<template>
  <div>
    <div class="more">
      支付方式
    </div>
    <div class="method">
      <div class="center">
        <div class="payOne" @click="selectWx" :class="{borderColor: wxMsg}">
          <img class="payImg" :src="wechatPay" alt="">
          <img class="payOk" src="https://static-image.1911edu.com/ok.png" alt="" v-if="wxMsg">
        </div>
        <div class="payOne" @click="selectZfb" :class="{borderColor: zfbMsg}">
          <img class="payImg" :src="zfbPay" alt="">
          <img class="payOk" src="https://static-image.1911edu.com/ok.png" alt="" v-if="zfbMsg">
        </div>
        <div class="payOne" @click="selectPub" :class="{borderColor: pubMsg}">
          <img class="payImg" src="https://static-image.1911edu.com/payPublic.png" alt="">
          <img class="payOk" src="https://static-image.1911edu.com/ok.png" alt="" v-if="pubMsg">
        </div>
      </div>
    </div>
    <div class="text">
      <i class="el-icon-warning"></i>
      请在14天内支付完成，如未完成此订单将自动关闭，需重新购买！
      <span class="fr">应付金额：￥{{orderDetail.order_amount}}</span>

    </div>
    <!-- <div class="restTime">
      <i class="el-icon-time"></i>{{restTime}}
    </div> -->
    <div class="fr pay">
      <el-button @click="addPaySubmit">下一步</el-button>
    </div>
    <div class="fk fr" @click="showRpt">
      我有疑问，需要反馈?
    </div>
    <v-dialog v-if="showDialog" :dialog="dialogInfo" @closeDialog="closeDialog"></v-dialog>
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { timestampToTime, matchSplits, message } from "~/lib/util/helper";
import { wepay } from "@/lib/v1_sdk/index";
import Dialog from "@/components/common/Dialog.vue";

export default {
  props: ["orderDetail", "codeData", "listData"],
  components: {
    "v-dialog": Dialog
  },
  data () {
    return {
      showDialog: false,
      dialogInfo: {},
      wechatPay: "https://static-image.1911edu.com/wxp.png",
      zfbPay: "https://static-image.1911edu.com/zfb.png",
      orderType: "",
      wxMsg: true,
      zfbMsg: false,
      pubMsg: false,
      val: "",
      addPaySubmitForm: {
        types: "1",
        companyId: null
      },
      payListForm: {
        orderId: null,
        attachs: 1
      },
      projectList: [],
      restTime: "",
      countdown: {
        hour: "",
        minutes: "",
        seconds: ""
      },
      isWSW: false
      // attachs: null
    };
  },
  watch: {
    orderDetail (val) {
      if (val.order_amount > 5000 && val.order_amount < 500000) {
        this.showDialog = true;
        this.dialogInfo.info =
          "您的订单支付金额超过5000元，建议您通过对公转账方式进行支付，感谢配合！";

        this.wxMsg = false;
        this.zfbMsg = false;
        this.pubMsg = true;
        this.wechatPay = "https://static-image.1911edu.com/wxp.png";
        this.zfbPay = "https://static-image.1911edu.com/zfb.png";
      } else if (val.order_amount >= 500000) {
        this.showDialog = true;
        this.dialogInfo.info =
          "您的订单支付金额超过50万元，请通过对公转账方式进行支付，感谢配合！";

        this.selectPub();
        this.isWSW = true;
        this.wechatPay = "https://static-image.1911edu.com/wxpUnclick.png";
        this.zfbPay = "https://static-image.1911edu.com/zfbUnclick.png";
      } else {
        this.showDialog = false;

        this.wechatPay = "https://static-image.1911edu.com/wxp.png";
        this.zfbPay = "https://static-image.1911edu.com/zfb.png";
        this.isWSW = false;
      }
    }
  },
  methods: {
    //关闭dialog提示框
    closeDialog () {
      this.showDialog = false;
    },
    showRpt () {
      this.$emit("showRpt");
    },
    addPaySubmit () {
      this.wxMask = true;
      if (this.wxMsg === true) {
        this.$bus.$emit("showCode", this.codeData.code_url);
        this.getStatus();
      } else if (this.zfbMsg == true) {
        this.$bus.$emit("showCode", this.codeData.qr_code);
        this.getStatus();
      } else if (this.pubMsg == true) {
        let urlLen = matchSplits("order");
        this.$router.push("/shop/payPublic?orderID=" + urlLen);
      }
    },
    getStatus () {
      let cpyid = matchSplits("order");
      // let attachs = matchSplits('attach')
      this.payListForm.orderId = cpyid;
      // this.payListForm.attachs = 2
      // if (attachs == 2) {
      //   this.payListForm.attachs = 2
      // } else {
      // }
      this.interval = setInterval(() => {
        if (this.seconds <= 0) {
          clearInterval(this.interval);
        } else {
          this.seconds--;
          wepay.payResult(this.payListForm).then(response => {
            if (response.status === 0) {
              clearInterval(this.interval);
              this.$bus.$emit("closeCode");
              this.$router.push({
                path: "/shop/payResult" + "?order=" + cpyid
              });
            } else if (response.status == 100007 || response.status == 100008) {
              message(this, 'error', response.msg)
              this.$router.push("/");
              clearInterval(this.interval);
            } else if (response.status == 100100) {
              message(this, 'error', response.msg)
              clearInterval(this.interval);
            }
          });
        }
      }, 1000);
    },
    selectWx () {
      if (!this.isWSW) {
        this.wxMsg = true;
        this.zfbMsg = false;
        this.pubMsg = false;
      }
    },
    selectZfb () {
      if (!this.isWSW) {
        this.wxMsg = false;
        this.zfbMsg = true;
        this.pubMsg = false;
      }
    },
    selectPub () {
      this.wxMsg = false;
      this.zfbMsg = false;
      this.pubMsg = true;
    },
    time () {
      setInterval(data => {
        if (this.orderDetail.create_time) {
          let mss = new Date() - new Date(this.orderDetail.create_time * 1000);
          this.MillisecondToDate(mss);
        }
      }, 1000);
    },
    MillisecondToDate (msd) {
      var time = 24 * 60 * 60 - parseFloat(msd) / 1000;
      if (null != time && "" != time) {
        if (time > 60 && time < 60 * 60) {
          time =
            parseInt(time / 60.0) +
            "分钟" +
            parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) +
            "秒";
        } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
          time =
            parseInt(time / 3600.0) +
            "小时" +
            parseInt(
              (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
            ) +
            "分钟" +
            parseInt(
              (parseFloat(
                (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
              ) -
                parseInt(
                  (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
                )) *
              60
            ) +
            "秒";
        } else {
          time = "订单已过期！";
        }
      }
      this.restTime = time;
    }
  },
  mounted () {
    //this.orderType 1:其他订单 2:vip订单
    this.orderType = matchSplits("type");
    this.$bus.$on("clearInterval", dat => {
      clearInterval(this.interval);
    });
    this.$bus.$on("addPaySubmit", dat => {
      this.addPaySubmit();
    });
    // this.time()
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/shop/paytype.scss";
</style>
