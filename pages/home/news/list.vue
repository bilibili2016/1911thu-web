<template>
  <div class=" goodLesson news-list famous-teacher">
    <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>

    <div class="center shadow">
      <div class="breadCrumb">
        <!-- 面包屑组件 -->
        <v-breadcrumb :config="BreadCrumb"></v-breadcrumb>

      </div>
      <div @click="getNewInfoList"></div>
      <!-- <v-card :newsList="newsList" :config="config" :linksix='linksix' @checkdetail="checkdetail" class="new-card-on"></v-card> -->
      <v-card :newsList="newsList" :config="config" :linksix='linksix' @checkdetail="checkdetail" class="new-card-on"></v-card>
    </div>
    <div class="pagination">
      <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0'" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomBanner from '@/components/common/Banner.vue'
import CustomCard from '@/pages/home/news/components/List.vue'
import CustomPagination from '@/components/common/Pagination.vue'
// import { other, home } from '~/lib/v1_sdk/index'
import { news } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
export default {
  components: {
    'v-card': CustomCard,
    'v-page': CustomPagination,
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
      // config: {
      //   card_type: 'goodlesson2'
      // },
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
      },
      nidForm: {
        nids: null
      }
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.getNewInfoList()
  },
  methods: {
    ...mapActions('auth', ['setNid']),
    getNewInfoList() {
      this.newsInfoForm.pages = 1
      this.newsInfoForm.limits = 6
      return new Promise((resolve, reject) => {
        news.getNewInfoList(this.newsInfoForm).then(response => {
          this.pagemsg.total = Number(response.data.pageCount)
          this.newsList = response.data.newsList
        })
      })
    },
    selectPages(val) {
      this.newsInfoForm.pages = val
      this.pagemsg.page = val
      this.newsInfoForm.limits = this.pagemsg.pagesize
      return new Promise((resolve, reject) => {
        news.getNewInfoList(this.newsInfoForm).then(response => {
          this.pagemsg.total = Number(response.data.pageCount)
          this.newsList = response.data.newsList
        })
      })
    },
    checkdetail(index) {
      this.nidForm.nids = index
      this.setNid(this.nidForm)
    }
  }
}
</script>
