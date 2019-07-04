<template>
  <div class="outNews">
    <div class="outCenter">
      <el-row class="center">
        <v-title :title="title" :link="link"></v-title>
        <div class="newsItems clearfix">
          <div class="item" v-for="(item,index) in outNewsListData" :key="index" @click="handleLink(item.media_link)">
            <img :src="item.picture" alt="">
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import CustomTitle from "@/components/common/Title.vue";

import { mapActions } from "vuex";
export default {
  props: ["outNewsListData", "config", "data", "title", "link"],
  components: {
    "v-title": CustomTitle
  },
  methods: {
    handleLink(link) {
      window.open(link);
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/news/outNews";
</style>
