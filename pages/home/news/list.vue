<template>
  <div class=" goodLesson news-list famous-teacher">
    <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    <div class="center shadow">
      <div class="breadCrumb">
        <!-- 面包屑组件 -->
        <v-breadcrumb :config="BreadCrumb"></v-breadcrumb>
      </div>
      <div @click="getNewInfoList"></div>
      <v-card :newsList="newsList" :config="config" :linksix='linksix' class="new-card-on"></v-card>
    </div>
    <div class="pagination">
      <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0'" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomBanner from '@/components/common/Banner.vue'
import CustomCard from '@/pages/home/news/components/List.vue'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
import { news } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-card': CustomCard,
    'v-banner': CustomBanner,
    'v-breadcrumb': BreadCrumb
  },
  data() {
    return {
      BreadCrumb: {
        type: 'news',
        text: '学堂资讯'
      },
      bannerImg: 'http://papn9j3ys.bkt.clouddn.com/newList-bg.png',
      linksix: '/news/detail',
      configs: {
        banner_type: 'news'
      },
      config: {
        card_type: 'newLists'
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
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.getNewInfoList()
  },
  methods: {
    getNewInfoList() {
      this.newsInfoForm.pages = 1
      this.newsInfoForm.limits = 6
      news.getNewInfoList(this.newsInfoForm).then(response => {
        this.pagemsg.total = Number(response.data.pageCount)
        this.newsList = response.data.newsList
      })
    },
    selectPages(val) {
      this.newsInfoForm.pages = val
      this.pagemsg.page = val
      this.newsInfoForm.limits = this.pagemsg.pagesize
      news.getNewInfoList(this.newsInfoForm).then(response => {
        this.pagemsg.total = Number(response.data.pageCount)
        this.newsList = response.data.newsList
      })
    }
  }
}
</script>
