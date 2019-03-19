<template>
  <div class="newsDetail">
    <div class="news-banner">
      <img :src="bannerImg" alt="">
    </div>
    <!-- 面包屑组件 -->
    <v-breadcrumb :config="BreadCrumb"></v-breadcrumb>
    <!-- 新闻内容 -->
    <div class="detail">
      <div class="newsContent" v-loading='loading'>
        <div class="viewArea" ref="viewArea">
          <h3>{{newsDetail.title}}</h3>
          <p class="time">{{newsDetail.create_time}}&nbsp;&nbsp;&nbsp;新闻来源：{{newsDetail.source}}</p>
          <!-- <h4 class="source" v-if="newsDetail.source">新闻来源：{{newsDetail.source}}</h4> -->
          <div class="newsInner" v-html="newsDetail.content"></div>
          <h5 class="author" v-if="newsDetail.author">责任编辑：{{newsDetail.author}}</h5>

          <!-- <div class="payBar" v-if="isShowpayBar">
            <div class="payDiv">
              <span class="btn" @click.stop="handlepayNews">支付1元阅读更多</span>
            </div>
            <div class="height"></div>
          </div> -->
        </div>

        <div class="next clearfix">
          <span class="fl" v-if="beforeNews" @click="nextPage(beforeNews.id)">上一篇&nbsp;&nbsp;&nbsp;&nbsp;{{beforeNews.title}}</span>
          <span class="fr" v-if="afterNews" @click="nextPage(afterNews.id)">下一篇&nbsp;&nbsp;&nbsp;&nbsp;{{afterNews.title}}</span>
        </div>
      </div>
    </div>

    <!-- <v-pay v-if="isShowpayPopup" :payNewsDetail="payNewsDetail" @requestNews="requestNews" @closePop="closePop"></v-pay> -->
  </div>
</template>

<script>
import CustomBanner from "@/components/common/Banner.vue";
import { news } from "~/lib/v1_sdk/index";
import { timestampToTime, message } from "~/lib/util/helper";
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import newsPay from "@/pages/home/news/components/newsPay.vue";
import { store as persistStore } from "~/lib/core/store";

export default {
  components: {
    "v-banner": CustomBanner,
    "v-breadcrumb": BreadCrumb,
    "v-pay": newsPay
  },
  data () {
    return {
      nid: "",
      isShowpayPopup: false,
      // isShowpayBar: false,
      payNewsDetail: "",
      BreadCrumb: {
        type: "newsDetail",
        home: true,
        position: true, //是否显示当前位置
        text: "新闻资讯"
      },
      bannerImg: "http://static-image.1911edu.com/profile_banner03.png",
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
      configShare: {
        url: "http://edu.1911thu.com/",
        sites: ["qzone", "qq", "weibo", "wechat"],
        source: "http://edu.1911thu.com/"
        // wechatQrcodeTitle: '微信扫一扫：分享',
        // wechatQrcodeHelper:
        //   '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
      }
    };
  },
  methods: {
    getMore (item) {
      this.$router.push(item);
    },
    requestNews (flag) {
      this.getNewInfoDetail(this.nid, flag);
    },
    nextPage (id) {
      if (!id) return;
      this.$router.push(`/home/news/${id}`);
    },
    // 获取资讯详情
    getNewInfoDetail (id, flag) {
      let me = this;
      if (!id) return;
      let newsId = {
        ids: id
      };

      if (flag != 1) {
        //避免支付完成之后重新请求，进入
        if (this.newsDetail.id == id) {
          message(this, "info", "暂无更多内容！");
          return false;
        }
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

          // if (response.data.newDetail.news_power == "1") {
          //   this.isShowpayBar = true;
          //   this.$refs.viewArea.style.height = "500px";
          // } else {
          //   this.isShowpayBar = false;
          //   this.$refs.viewArea.style.height = "auto";
          // }

          this.payNewsDetail = this.newsDetail;

          this.loading = false;
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        } else {
          message(this, "error", response.msg);
          this.$router.push("/home/news/list");
        }
      });
    },
    //支付新闻
    handlepayNews () {
      // this.handleSignOut();
      if (persistStore.get("token")) {
        this.isShowpayPopup = true;
      } else {
        this.$bus.$emit("loginShow", true);
      }
    },
    //关闭支付弹窗
    closePop () {
      this.isShowpayPopup = false;
    }
  },
  mounted () {
    this.nid = window.location.pathname.split("/")[3];
    this.getNewInfoDetail(this.nid);
    this.$bus.$on("renewsDetailData", data => {
      this.getNewInfoDetail(this.nid, 1);
    });
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/news/newsDetail";
</style>
