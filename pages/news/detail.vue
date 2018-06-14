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
        <img :src="sharewx" alt="">
        <img :src="sharewb" alt="">
        <img :src="sharekj" alt="">
      </div>
      <div class="newsContent">
        <h3>{{newsDetail.title}}</h3>
        <p class="time">{{newsDetail.create_time}}</p>
        <div class="newsInner" v-html="newsDetail.content"></div>
        <div class="next clearfix">
          <span class="fl" v-if="newsDetail.prePiece" @click="getMore('detailone')">上一篇
            <i>{{newsDetail.prePiece}}</i>
          </span>
          <span class="fr" v-if="newsDetail.nextPiece" @click="getMore('detailtwo')">下一篇
            <i>{{newsDetail.nextPiece}}</i>
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
export default {
  computed: {
    ...mapState('auth', ['nid'])
  },
  components: {
    'v-banner': CustomBanner
  },
  data() {
    return {
      bannerImg: require('~/assets/images/profile_banner03.png'),
      sharewx: require('~/assets/images/share-wx.png'),
      sharewb: require('~/assets/images/share-wb.png'),
      sharekj: require('~/assets/images/share-kj.png'),
      configs: {
        banner_type: 'news'
      },
      newsDetail: {
        title: '1911广场旗下1911咖啡获香港文利国际餐饮300万天使轮投资',
        time: '2018-05-20',
        detail: '',
        prePiece: '清华大学成立 “青年教师骨干领航工作站”',
        nextPiece: '清华大学成立 “青年教师骨干领航工作站”'
      },
      nidForm: {
        ids: null
      }
    }
  },
  methods: {
    getMore(item) {
      this.$router.push(item)
    },
    // 获取资讯详情
    getNewInfoDetail() {
      return new Promise((resolve, reject) => {
        home.getNewInfoDetail(this.nidForm).then(response => {
          this.newsDetail = response.data.newDetail
        })
      })
    }
  },
  mounted() {
    this.nidForm.ids = this.nid
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.getNewInfoDetail()
  }
}
</script>
