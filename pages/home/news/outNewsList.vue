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
        <div class="item">
          <span class="left">清华校友企业推在线学堂，有望获名校认证证书</span>
          <span class="right">北京日报</span>
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
import CustomCard from "@/pages/home/news/components/List.vue";
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import { news } from "~/lib/v1_sdk/index";
import { setTitle } from "~/lib/util/helper";

export default {
  components: {
    "v-card": CustomCard,
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
      load: false,
      bannerImg: "http://static-image.1911edu.com/newList-bg.png",
      linksix: "/news/detail",
      configs: {
        banner_type: "outNews"
      },
      config: {
        card_type: "newLists"
      },
      newsList: [],
      newsInfoForm: {
        pages: 1,
        limits: 6
      },
      pagemsg: {
        page: 1,
        pagesize: 6,
        total: null
      }
    };
  },
  mounted() {
    // this.getNewInfoList()
    setTitle("媒体报道-1911学堂");
  },
  methods: {
    getNewInfoList() {
      this.newsInfoForm.pages = 1;
      this.newsInfoForm.limits = 6;
      news.getNewInfoList(this.newsInfoForm).then(response => {
        if (response.status === 0) {
          this.pagemsg.total = Number(response.data.pageCount);
          this.newsList = response.data.newsList;
          this.load = false;
        }
      });
    },
    selectPages(val) {
      this.newsInfoForm.pages = val;
      this.pagemsg.page = val;
      this.newsInfoForm.limits = this.pagemsg.pagesize;
      news.getNewInfoList(this.newsInfoForm).then(response => {
        this.pagemsg.total = Number(response.data.pageCount);
        this.newsList = response.data.newsList;
      });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/news/outNewsList";
</style>
