<template>
  <div class="outNews">
    <el-row class="center">
      <v-title
        :title="title"
        :link="link"
      ></v-title>
      <div class="newsItems clearfix">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </el-row>
  </div>
</template>

<script>
import CustomTitle from "@/components/common/Title.vue";

import { mapActions } from "vuex";
export default {
  props: ["config", "data", "title", "link"],
  components: {
    "v-title": CustomTitle
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/news/outNews";
</style>
