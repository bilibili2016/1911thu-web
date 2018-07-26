<template>
  <div class="newsDetail">
    <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    <!-- 面包屑 -->
    <el-breadcrumb class="news" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前位置</el-breadcrumb-item>
      <el-breadcrumb-item class="home" @click.native="getMore('/')">首页</el-breadcrumb-item>
      <el-breadcrumb-item class="current">新闻资讯</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 新闻内容 -->
    <div class="detail">
      <!-- 分享暂时注释 -->
      <!-- <div class="topbar">
        <span>分享：</span>
        <div class="shareIcons">
          <div class="social-share" data-sites="weibo,qq,wechat" style=""></div>
        </div>
      </div> -->
      <div class="newsContent" v-loading='loading'>
        <h3>{{newsDetail.title}}</h3>
        <p class="time">{{getTime(newsDetail.create_time)}}</p>
        <div class="newsInner" v-html="newsDetail.content"></div>
        <div class="next clearfix">
          <span class="fl" v-if="beforeNews" @click="getNewInfoDetail(beforeNews.id)">上一篇
            <i>{{beforeNews.title}}</i>
          </span>
          <span class="fr" v-if="afterNews" @click="getNewInfoDetail(afterNews.id)">下一篇
            <i>{{afterNews.title}}</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomBanner from '@/components/common/Banner.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import { other, home } from '~/lib/v1_sdk/index'
import { timestampToTime } from '~/lib/util/helper'
export default {
  computed: {
    ...mapState('auth', ['nid'])
  },
  components: {
    'v-banner': CustomBanner
  },
  data() {
    return {
      bannerImg: 'http://papn9j3ys.bkt.clouddn.com/profile_banner03.png',
      configs: {
        banner_type: 'news'
      },
      newsDetail: {},
      loading: true,
      afterNews: {
        id: '',
        title: ''
      },
      beforeNews: {
        id: '',
        title: ''
      },
      configShare: {
        url: 'http://edu.1911thu.com/',
        sites: ['qzone', 'qq', 'weibo', 'wechat'],
        source: 'http://edu.1911thu.com/'
        // wechatQrcodeTitle: '微信扫一扫：分享',
        // wechatQrcodeHelper:
        //   '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
      }
    }
  },
  methods: {
    getTime(time) {
      return timestampToTime(time)
    },
    getMore(item) {
      this.$router.push(item)
    },
    // 获取资讯详情
    getNewInfoDetail(id) {
      let me = this
      if (!id) return
      let newsId = {
        ids: id
      }
      return new Promise((resolve, reject) => {
        home.getNewInfoDetail(newsId).then(response => {
          this.newsDetail = response.data.newDetail
          if (response.data.beforeNews.id) {
            me.beforeNews = response.data.beforeNews
          } else {
            me.beforeNews.title = '暂无'
          }
          if (response.data.afterNews.id) {
            me.afterNews = response.data.afterNews
          } else {
            me.afterNews.title = '暂无'
          }
          // me.afterNews = response.data.afterNews
          this.loading = false
        })
      })
    }
  },
  mounted() {
    // 分享暂时注释
    // var $config = {
    //   url: 'http://edu.1911thu.com/news/' + this.nid
    // }
    // socialShare('.social-share', $config)
    this.getNewInfoDetail(this.nid)
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>
<style lang="scss" scoped>
.newsDetail .detail .newsContent h3 {
  margin: 0;
  padding: 59px 45px 0;
}
</style>

