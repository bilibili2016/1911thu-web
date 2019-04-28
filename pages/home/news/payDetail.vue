<template>
  <div class="newsDetail">
    <div class="news-banner">
      <img :src="bannerImg" alt="">
    </div>
    <!-- 面包屑 -->
    <div class="breadCrumb">
      <span>当前位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 新闻内容 -->
    <div class="detail">
      <div class="newsContent" v-loading='loading'>
        <h3>{{newsDetail.title}}</h3>
        <p class="time">{{newsDetail.create_time}}&nbsp;&nbsp;&nbsp;新闻来源：{{newsDetail.source}}</p>
        <!-- <h4 class="source" v-if="newsDetail.source">新闻来源：{{newsDetail.source}}</h4> -->
        <div class="newsInner" v-html="newsDetail.content"></div>
        <h5 class="author" v-if="newsDetail.author">责任编辑：{{newsDetail.author}}</h5>
        <div class="next clearfix">
          <span class="fl" v-if="beforeNews" @click="getNewInfoDetail(beforeNews.id)">上一篇&nbsp;&nbsp;&nbsp;&nbsp;{{beforeNews.title}}</span>
          <span class="fr" v-if="afterNews" @click="getNewInfoDetail(afterNews.id)">下一篇&nbsp;&nbsp;&nbsp;&nbsp;{{afterNews.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomBanner from "@/components/common/Banner.vue";
import { news } from "~/lib/v1_sdk/index";
import { timestampToTime, message } from "~/lib/util/helper";
export default {
  components: {
    "v-banner": CustomBanner
  },
  data () {
    return {
      bannerImg: "https://static-image.1911edu.com/profile_banner03.png",
      newsDetail: {},
      loading: true,
      afterNews: {
        id: "",
        title: ""
      },
      beforeNews: {
        id: "",
        title: ""
      },
    };
  },
  methods: {
    getMore (item) {
      this.$router.push(item);
    },
    // 获取资讯详情
    getNewInfoDetail (id) {
      let me = this;
      if (!id) return;
      let newsId = {
        ids: id
      };
      if (this.newsDetail.id == id) {
        message(this, "info", "暂无更多内容！");
        return false;
      }

      news.getNewInfoDetail(newsId).then(response => {
        if (response.status === 0) {
          this.newsDetail = response.data.newDetail;
          this.newsDetail.create_time = timestampToTime(
            this.newsDetail.create_time
          );
          if (response.data.beforeNews.id) {
            me.beforeNews = response.data.beforeNews;
          } else {
            me.beforeNews.title = "暂无";
          }
          if (response.data.afterNews.id) {
            me.afterNews = response.data.afterNews;
          } else {
            me.afterNews.title = "暂无";
          }
          this.loading = false;
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        } else {
          message(this, "error", response.msg);
          this.$router.push("/home/news/list");
        }
      });
    }
  },
  mounted () {
    let nid = window.location.pathname.split("/")[3];
    this.getNewInfoDetail(nid);
  }
};
</script>
<style lang="scss">
@import "~assets/style/news/newsDetail";
</style>
