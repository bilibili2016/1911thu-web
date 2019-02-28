<template>
  <div class="rightContent">
    <div class="shoppingCart" v-if="isShowLRBtn" @click="handleLink('/shop/shoppingcart')">
      <span class="cartIcon"></span>
      <i v-if="productsNum>0">{{productsNum}}</i>
    </div>
    <div class="headImg">
      <img :src="data.userImg" alt="" @click="handleLinkProfile('tab-first')">
      <!-- 个人中心下拉框 -->
      <ul class="subPages">
        <li v-for="(item,index) in subPagesData" :key="index" @click="handleLinkProfile(item.link)">{{item.text}}</li>
        <li @click="handleSignOut">退出</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  props: ["data", "isShowLRBtn"],
  data() {
    return {
      subPagesData: [
        {
          link: "tab-first",
          text: "最近学习"
        },
        {
          link: "tab-eleventh",
          text: "我的学院"
        },
        {
          link: "tab-second",
          text: "我的课程"
        },
        {
          link: "tab-third",
          text: "我的项目"
        },
        {
          link: "tab-fourth",
          text: "我的订单"
        },
        {
          link: "tab-fifth",
          text: "我的消息"
        },
        {
          link: "tab-sixth",
          text: "个人设置"
        },
        {
          link: "tab-seventh",
          text: "兑换码管理"
        },
        {
          link: "tab-eighth",
          text: "发票管理"
        },
        {
          link: "tab-ninth",
          text: "自定制项目"
        },
        {
          link: "tab-tenth",
          text: "申请证书"
        }
      ]
    };
  },
  computed: {
    ...mapState("auth", ["productsNum"])
  },
  methods: {
    handleLink(data) {
      this.$emit("handleLink", data);
    },
    handleLinkProfile(data) {
      this.$emit("handleLinkProfile", data);
      let obj = {
        name: data
      };

      this.$bus.$emit("handleHeadClick", obj);
    },
    handleSignOut() {
      this.$emit("handleSignOut");
    }
  }
};
</script>

<style scoped>
</style>
