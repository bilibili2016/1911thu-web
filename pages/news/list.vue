<template>
  <div class="news-list">
    <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    <div class="center shadow">
      <div @click="getNewInfoList"></div>
      <v-card :newsList="newsList" :config="config" :linksix='linksix' @checkdetail="checkdetail" class="new-card-on"></v-card>
      <!-- <v-card :newsList="newsList" :config="config" :linksix='linksix' @checkdetail="checkdetail" class="new-card-on"></v-card> -->
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomBanner from '@/components/common/Banner.vue'
import CustomCard from '@/components/common/Card.vue'
import CustomPagination from '@/components/common/Pagination.vue'
import { other, home } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    'v-card': CustomCard,
    'v-page': CustomPagination,
    'v-banner': CustomBanner
  },
  data() {
    return {
      bannerImg: 'http://papn9j3ys.bkt.clouddn.com/profile_banner03.png',
      linksix: '/news/detail',
      configs: {
        banner_type: 'news'
      },
      // config: {
      //   card_type: 'goodlesson2'
      // },
      config: {
        card_type: 'goodplayTwo'
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
        home.getNewInfoList(this.newsInfoForm).then(response => {
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
        home.getNewInfoList(this.newsInfoForm).then(response => {
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
