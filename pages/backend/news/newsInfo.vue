<template>
  <div class="newsDetail">
    <div class="news-banner">
      <img :src="bannerImg" alt>
    </div>
    <!-- 面包屑组件 -->
    <div class="breadCrumb">
      <span v-show="BreadCrumb.position">当前位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{BreadCrumb.text}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 新闻内容 -->
    <div class="detail">
      <div class="newsContent" v-loading="loading">
        <h3>{{newsDetail.title}}</h3>
        <p class="time">{{newsDetail.create_time}}&nbsp;&nbsp;&nbsp;新闻来源：{{newsDetail.source}}</p>
        <div class="newsInner" v-html="newsDetail.content"></div>
        <h5 class="author" v-if="newsDetail.author">责任编辑：{{newsDetail.author}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import CustomBanner from "@/components/common/Banner.vue";
import { previewapi } from "~/lib/v1_sdk/index";
import { timestampToTime, message, matchSplits } from "~/lib/util/helper";
export default {
  components: {
    "v-banner": CustomBanner,
  },
  data () {
    return {
      BreadCrumb: {
        type: "newsDetail",
        home: true,
        position: true, //是否显示当前位置
        text: "新闻资讯"
      },
      bannerImg: "https://static-image.1911edu.com/profile_banner03.png",
      newsDetail: {},
      loading: true,
    };
  },
  methods: {
    getMore (item) {
      this.$router.push(item);
    },
    // 获取资讯详情
    getNewInfoDetail (id) {
      if (this.newsDetail.id == id || !id) {
        message(this, "info", "暂无更多内容！");
        return false;
      }
      let newsId = {
        ids: id
      };

      previewapi.getNewInfoDetail(newsId).then(response => {
        if (response.status === 0) {
          this.newsDetail = response.data.newDetail;
          this.newsDetail.create_time = timestampToTime(
            this.newsDetail.create_time
          );
          this.loading = false;
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        } else {
          message(this, "error", response.msg);
        }
      });
    }
  },
  mounted () {
    let nid = matchSplits('nid');
    this.getNewInfoDetail(nid);
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bus.$emit('backendHeaderShow')
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$bus.$emit('backendHeaderHide')
    next()
  }
};
</script>
<style lang="scss">
@import "~assets/style/news/newsDetail";
@import "~assets/style/components/breadCrumb.scss";
</style>
