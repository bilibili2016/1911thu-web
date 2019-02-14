<template>
  <div class="searchCer">
    <div class="content">
      <div v-if="isShowSearch">
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
              <img src="mall.1911thu.com/Publics/VerificationCode/createVcode" onClick="this.src='/Publics/VerificationCode/createVcode/'+new Date().getTime();">
            </span>
          </div>
          <div class="buttonn" @click="searchCer">查询</div>
        </div>
      </div>
      <v-view v-if="!isShowSearch" :viewData="viewData"></v-view>
    </div>
  </div>
</template>
<script>
import { Trim, matchSplits, setTitle, message } from "@/lib/util/helper";
import viewPage from "@/pages/home/certification/viewPage.vue";

export default {
  components: {
    "v-view": viewPage
  },
  data() {
    return {
      isShowSearch: true,
      viewData: {
        name: "徐楠",
        sex: "女",
        birthday: "1985年10月1日",
        number: "19112019020001",
        projectName: "在线商学院",
        startTime: "2019年12月31日",
        endTime: "2019年12月31日",
        time: 100
      },
      searchForm: {
        number: "",
        name: "",
        code: ""
      }
    };
  },
  methods: {
    searchCer() {
      // try {
      //   if (Trim(this.searchForm.number) === "") throw "请输入证书编号";
      //   if (Trim(this.searchForm.name) === "") throw "请输入您的姓名";
      //   if (Trim(this.searchForm.code) === "") throw "请输入验证码";
      // } catch (err) {
      //   message(this, "error", err);
      //   return false;
      // }
      this.isShowSearch = false;
      console.log(this.viewData);
      this.$router.push("/home/certification/viewPage");
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/certification/searchPage.scss";
</style>