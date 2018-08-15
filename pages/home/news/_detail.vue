<template>
  <div class="newsDetail">
    <div class="news-banner">
      <img :src="bannerImg" alt="">
    </div>
    <!-- 面包屑组件 -->
    <v-breadcrumb :config="BreadCrumb"></v-breadcrumb>
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
        <p class="time">{{newsDetail.create_time}}</p>
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
import { news } from '~/lib/v1_sdk/index'
import { timestampToTime } from '~/lib/util/helper'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
export default {
  components: {
    'v-banner': CustomBanner,
    'v-breadcrumb': BreadCrumb
  },
  data() {
    return {
      BreadCrumb: {
        type: 'newsDetail',
        position: true, //是否显示当前位置
        text: '新闻资讯'
      },
      bannerImg: 'http://papn9j3ys.bkt.clouddn.com/profile_banner03.png',
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

      news.getNewInfoDetail(newsId).then(response => {
        this.newsDetail = response.data.newDetail
        this.newsDetail.create_time = timestampToTime(
          this.newsDetail.create_time
        )
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
        this.loading = false
      })
    }
  },
  mounted() {
    // 分享暂时注释
    // var $config = {
    //   url: 'http://edu.1911thu.com/news/' + this.nid
    // }
    // socialShare('.social-share', $config)
    let nid = window.location.pathname.split('/')[3]
    this.getNewInfoDetail(nid)
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>

