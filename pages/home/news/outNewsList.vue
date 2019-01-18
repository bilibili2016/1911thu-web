<template>
  <div
    class="news-list outNewsList"
    v-loading="load"
  >
    <v-banner
      :bannerImg="bannerImg"
      :config="configs"
      class="singleList"
    ></v-banner>
    <!-- 面包屑组件 -->
    <v-breadcrumb :config="BreadCrumb"></v-breadcrumb>
    <div class="outNew-con">
      <div class="con-top">
        <span class="left">新闻标题</span>
        <span class="right">新闻来源</span>
      </div>
      <div class="con-items">
        <div
          class="item"
          v-for="(item,index) in outNewsList"
          :key="index"
        >
          <span
            class="left"
            @click="handleLink(item.media_link)"
          >{{item.title}}</span>
          <span class="right">{{item.source}}</span>
        </div>
      </div>
    </div>
    <div
      class="pagination"
      v-show="!load"
    >
      <el-pagination
        :id="pagemsg.total"
        v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize"
        background
        layout="prev, pager, next"
        :page-size="pagemsg.pagesize"
        :pager-count="5"
        :page-count="pagemsg.pagesize"
        :current-page="pagemsg.page"
        :total="pagemsg.total"
        @current-change="selectPages"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomBanner from "@/components/common/Banner.vue";
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import { news } from "~/lib/v1_sdk/index";
import { setTitle } from "~/lib/util/helper";

export default {
  components: {
    "v-banner": CustomBanner,
    "v-breadcrumb": BreadCrumb
  },
  data() {
    return {
      BreadCrumb: {
        type: "news",
        home: true, //是否显示 首页
        position: true, //是否显示 当前位置
        text: "媒体报道"
      },
      load: true,
      bannerImg: "http://static-image.1911edu.com/newList-bg.png",
      configs: {
        banner_type: "outNews"
      },
      outNewsList: [],
      pagemsg: {
        page: 1,
        pagesize: 20,
        total: null
      },
      outNewsForm: {
        page: 1,
        limits: 20,
        type: 2,
        isRecommend: ""
      }
    };
  },
  mounted() {
    this.getOutNewInfoList();
    setTitle("媒体报道-1911学堂");
  },
  methods: {
    getOutNewInfoList() {
      this.outNewsForm.page = 1;
      this.outNewsForm.limits = 20;
      news.getNewInfoList(this.outNewsForm).then(response => {
        if (response.status === 0) {
          this.pagemsg.total = Number(response.data.pageCount);
          this.outNewsList = response.data.newsList;
          this.load = false;
        }
      });
    },
    selectPages(val) {
      this.outNewsForm.page = val;
      this.pagemsg.page = val;
      this.outNewsForm.limits = this.pagemsg.pagesize;
      news.getNewInfoList(this.outNewsForm).then(response => {
        this.pagemsg.total = Number(response.data.pageCount);
        this.outNewsList = response.data.newsList;
      });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    handleLink(link) {
      window.open(link);
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/news/outNewsList";
</style>
