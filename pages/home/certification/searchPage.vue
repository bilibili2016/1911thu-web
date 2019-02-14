<template>
  <div class="searchCer">
    <div class="content" v-if="isShowSearch">
      <div>
        <div class="top">
          <h4>1911学堂证书查询</h4>
        </div>
        <div class="bottom">
          <div class="item">
            <span class="left">证书编号</span>
            <span class="right">
              <input type="text" class="num" placeholder="请输入证书编号" v-model="searchForm.number">
            </span>
          </div>
          <div class="item">
            <span class="left">姓名</span>
            <span class="right">
              <input type="text" class="num" placeholder="请输入您的姓名" v-model="searchForm.name">
            </span>
          </div>
          <div class="item">
            <span class="left">
              验证码
            </span>
            <span class="right">
              <input type="text" class="code" placeholder="请输入验证码" v-model="searchForm.code">
              <img class="codeImg" :src="searchForm.codeImg" @click="updateCode">
            </span>
          </div>
          <div class="buttonn" @click="searchCer">查询</div>
        </div>
      </div>
    </div>
    <v-view v-if="!isShowSearch" :viewData="viewData"></v-view>
  </div>
</template>
<script>
import { Trim, matchSplits, setTitle, message } from "@/lib/util/helper";
import viewPage from "@/pages/home/certification/viewPage.vue";
import { certification } from "~/lib/v1_sdk/index";

export default {
  components: {
    "v-view": viewPage
  },
  data() {
    return {
      isShowSearch: true,
      viewData: {},
      searchForm: {
        number: "",
        name: "",
        code: "",
        codeImg: "",
        validateToken: ""
      }
    };
  },
  methods: {
    //更新验证码
    updateCode() {
      this.code();
    },
    // 获取图形验证码
    code() {
      certification.createVcode().then(res => {
        if (res.status == 0) {
          this.searchForm.codeImg = res.data.image_data_base64;
          this.searchForm.validateToken = res.data.identity_token;
        }
      });
    },
    //查询证书
    searchCer() {
      try {
        if (Trim(this.searchForm.number) === "") throw "请输入证书编号";
        if (Trim(this.searchForm.name) === "") throw "请输入您的姓名";
        if (Trim(this.searchForm.code) === "") throw "请输入验证码";
      } catch (err) {
        message(this, "error", err);
        return false;
      }
      certification.certificateDetail(this.searchForm).then(res => {
        if (res.status == 0) {
          this.viewData = res.data.certificateDetail;
          this.isShowSearch = false;
        } else {
          message(this, "error", res.msg);
        }
      });
    }
  },
  mounted() {
    this.code();
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/certification/searchPage.scss";
</style>