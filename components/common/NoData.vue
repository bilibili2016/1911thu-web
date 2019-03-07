<template>
  <div class="noData">
    <img :src="pageType.imgUrl" alt="">
    <h4>{{pageType.text}}</h4>
    <!-- 购物车返回按钮 -->
    <p class="link" v-if="pageType.page == 'shoppingCart'" @click="handleLink">返回首页</p>
  </div>
</template>
<script>
export default {
  props: ["pageType"],
  data() {
    return {};
  },
  methods: {
    handleLink() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/components/noData.scss";
</style>