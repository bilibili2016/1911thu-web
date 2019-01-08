<template>
  <div>
    <div
      class="pay "
      v-show="isShowPop"
    >
      <div
        class="note newsPayDetail"
        id="note"
      >
        <i
          @click="close"
          class="el-icon-close fr"
        ></i>
        <h4>扫一扫支付阅读更多</h4>
        <div class="goodsInfo">
          <div class="userImg">
            <img
              :src="userInfo.head_img"
              alt=""
            >
            <span>{{userInfo.nick_name}}</span>
          </div>
          <div>
            <p>学堂资讯名称：{{payNewsDetail.title}}</p>
            <p>
              <span>资讯价格：
                <strong>1.00</strong>元</span>
            </p>
          </div>

        </div>
        <div class="code">
          <div class="codeL">
            <p>微信</p>
            <div
              v-loading="loading"
              class="codeBox"
            >
              <qrcode
                v-show="!loading"
                :value="wechat"
                :options="{ size: 120 }"
                class="qrcode"
              ></qrcode>
            </div>
          </div>
          <div class="codeC"></div>
          <div class="codeR">
            <p>支付宝</p>
            <div
              v-loading="loading"
              class="codeBox"
            >
              <qrcode
                v-show="!loading"
                :value="alipay"
                :options="{ size: 120 }"
                class="qrcode"
              ></qrcode>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapState, mapMutations } from "vuex";
import VueQrcode from "@xkeshi/vue-qrcode";
import { store as persistStore } from "~/lib/core/store";
import { header, news } from "~/lib/v1_sdk/index";
import { matchSplits, message } from "@/lib/util/helper";

Vue.component(VueQrcode.name, VueQrcode);
export default {
  props: ["payNewsDetail"],
  data() {
    return {
      isShowPop: true,
      timer: "",
      loading: true,
      wechat: "",
      alipay: "",
      payForm: {
        newsID: ""
      },
      userInfo: ""
    };
  },
  methods: {
    //获取支付订单详情  二维码
    getNewsPay() {
      this.payForm.newsID = this.payNewsDetail.id;
      news.newsOrder(this.payForm).then(res => {
        clearInterval(this.timer);
        this.wechat = res.data.code_url;
        this.alipay = res.data.qr_code;
        this.requestPayResult(res.data.order_id);

        this.loading = false;
      });
    },
    //轮询请求支付结果
    requestPayResult(id) {
      this.timer = setInterval(() => {
        news.payResultNews({ newsOrderID: id }).then(res => {
          if (res.status == 0) {
            //支付成功
            message(this, "success", "支付成功");
            this.isShowPop = false;
            document.body.style.position = "static";
            this.$emit("requestNews", 1);
            clearInterval(this.timer);
          } else if (res.status == 100100) {
            //支付失败
            message(this, "error", "支付失败");
            clearInterval(this.timer);
          } else if (res.status == 100101) {
            //等待支付中
          }
        });
      }, 1000);
    },
    getUserInfo() {
      header.getUserInfo().then(res => {
        this.userInfo = res.data.userInfo;
      });
    },
    //关闭弹窗
    close() {
      this.isShowPop = false;
      this.$emit("closePop");
      clearInterval(this.timer);
    }
  },
  mounted() {
    clearInterval(this.timer);
    this.getUserInfo();
    this.getNewsPay();
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/components/pay.scss";
</style>
