<template>
  <div>
    <v-search @Search="handleSearchs"></v-search>
    <div class="center">
      <div class="cnums">
        共找到 {{courseNumber}} 门“ {{searchForm.searchword}} ”相关课程
      </div>
      <div v-if="result" v-loading="loadSearch">
        <v-card :data="searchData" :config="config" element-loading-text="拼命加载中" element-loading-background="#fff"></v-card>
        <v-page :id="pagemsg.total" v-show="pagemsg.total!='0'" :pagemsg="pagemsg"></v-page>
        <v-backtotop></v-backtotop>
      </div>
      <div class="searchFalse" v-else v-loading="loadSearch">
        <div class="noMsg">
          <img :src="noMsg.img" alt="">
          <p>未找到相关内容</p>
        </div>
        <div class="doYouLike">
          <div class="clearfix title">
            <p class="fl">猜你喜欢</p>
            <p class="fr" @click="getLikeList">
              <i class="el-icon-refresh"></i>换一批</p>
          </div>
          <!--猜你喜欢 card组件 -->
          <v-card :data="getData" :config="config" v-loading="loadinged" element-loading-text="拼命加载中" element-loading-background="rgba(255, 255, 255, 0.8)"></v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/common/Search.vue'
import CustomCard from '@/components/card/Card.vue'
import CustomPagination from '@/components/common/Pagination.vue'
import BackToTop from '@/components/common/BackToTop.vue'
import { search } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
export default {
  components: {
    'v-search': Search,
    'v-card': CustomCard,
    'v-page': CustomPagination,
    'v-backtotop': BackToTop
  },
  data() {
    return {
      ressult: false,
      loadSearch: false,
      noMsg: {
        img: 'http://papn9j3ys.bkt.clouddn.com/noSearch.png'
      },
      searchData: [],
      getData: [],
      config: {
        card_type: 'profile',
        new: 'false'
      },
      pagemsg: {
        page: 1,
        pageSize: 1,
        total: null
      },
      searchForm: {
        pages: 1,
        limits: 20,
        searchword: null,
        categoryid: null,
        sortby: 2
      },
      getLikeForm: {
        limits: 4
      },
      loadinged: true,
      result: true,
      courseNumber: 0
    }
  },
  methods: {
    handleSearchs(val) {
      this.searchForm.searchword = persistStore.get('key')
      this.searchCurriculumList()
    },
    searchCurriculumList() {
      this.loadSearch = true
      search.searchCurriculumList(this.searchForm).then(response => {
        this.searchData = response.data.curriculumList
        if (response.data.curriculumList.length === 0) {
          this.result = false
          this.courseNumber = 0
          this.getLikeList()
        } else {
          this.result = true
          this.pagemsg.total = Math.ceil(
            response.data.curriculumList.length / 20
          )
          this.courseNumber = response.data.curriculumList.length
        }

        this.loadSearch = false
      })
    },
    // 获取猜你喜欢列表
    getLikeList() {
      search.getLikeList(this.getLikeForm).then(response => {
        this.getData = response.data.curriculumList
        if (this.getData !== 0) {
          this.loadinged = false
        }
      })
    }
  },
  mounted() {
    this.handleSearchs()
    // this.$bus.$emit('bannerShow', false)
  },
  watch: {
    $route(to, from) {
      this.handleSearchs()
    }
  }
}
</script>

