<template>
  <div class="news-list" v-loading="load">
    <v-banner :bannerImg="bannerImg" :config="configs" class="singleList"></v-banner>
    <!-- 面包屑 -->
    <div class="breadCrumb">
      <span>当前位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学堂资讯</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div @click="getNewInfoList"></div>
    <v-card :newsList="newsList" :config="config" :linksix='linksix'></v-card>
    <div class="pagination" v-show="!load">
      <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomBanner from "@/components/common/Banner.vue";
import CustomCard from "@/pages/home/news/components/List.vue";
import { news } from "~/lib/v1_sdk/index";
import { setTitle } from "~/lib/util/helper";

export default {
  components: {
    "v-card": CustomCard,
    "v-banner": CustomBanner
  },
  data () {
    return {
      load: true,
      bannerImg: "https://static-image.1911edu.com/newList-bg.png",
      linksix: "/news/detail",
      configs: {
        banner_type: "news"
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
  mounted () {
    this.getNewInfoList();
    setTitle("学堂资讯-1911学堂");
  },
  methods: {
    getNewInfoList () {
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
    selectPages (val) {
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
.news-list {
  padding-bottom: 40px;
  .center {
    margin-top: 40px;
  }
}
</style>