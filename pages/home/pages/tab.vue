<template>
  <div class="banner">
    <!-- banner -->
    <v-carousel :items="items"></v-carousel>
    <!-- 分类 -->
    <v-tab :classify ="classify" :courses="courses" :tabmsg="tabmsg" :activeName="activeName"></v-tab>
    <!-- 定制 -->
   <v-card :dingData="dingData" :config = "config"></v-card>
  </div>
</template>

<script>
import Card from "@/components/common/Card.vue";
import Carousel from "@/components/common/Carousel.vue";
import Tab from "@/components/common/Tab.vue";
export default {
  props: [
    "classify",
    "courses",
    "tabmsg",
    "activeName",
    "items",
    "dingData",
    "config"
  ],
  components: {
    "v-carousel": Carousel,
    "v-card": Card,
    "v-tab": Tab
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/config";
@import "~assets/style/index";
</style>
