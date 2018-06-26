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
      <div class="topbar">
        <span>分享：</span>
        <img @click="share(newsDetail.title,newsDetail.picture,'wx')" :src="sharewx" alt="">
        <img @click="share(newsDetail.title,newsDetail.picture,'wb')" :src="sharewb" alt="">
        <img @click="share(newsDetail.title,newsDetail.picture,'kj')" :src="sharekj" alt="">
      </div>
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
      bannerImg: 'http://pam8iyw9q.bkt.clouddn.com/profile_banner03.png',
      sharewx: require('@/assets/images/share-wx.png'),
      sharewb: require('@/assets/images/share-wb.png'),
      sharekj: require('@/assets/images/share-kj.png'),
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
          me.beforeNews = response.data.beforeNews
          me.afterNews = response.data.afterNews
          this.loading = false
        })
      })
    },
    share(title, picurl, where) {
      if (where === 'wb') {
        var sharesinastring =
          'http://v.t.sina.com.cn/share/share.php?title=' +
          title +
          '&url=' +
          window.location.href +
          '&content=utf-8&sourceUrl=' +
          window.location.href +
          '&pic=' +
          picurl
        window.open(
          sharesinastring,
          'newwindow',
          'height=400,width=400,top=100,left=100'
        )
      }
      if (where === 'wx') {
      }
      if (where === 'kj') {
        var shareqqzonestring =
          'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' +
          title +
          '&url=' +
          window.location.href +
          '&pics=' +
          picurl
        window.open(
          shareqqzonestring,
          'newwindow',
          'height=400,width=400,top=100,left=100'
        )
      }
    }
  },
  mounted() {
    this.getNewInfoDetail(this.nid)
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>
