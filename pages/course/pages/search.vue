<template>
  <div>
    <v-search @Search="handleSearchs"></v-search>
    <div class="center">
      <div class="cnums">
        共找到{{courseNumber}}门“冲突管理”相关课程
      </div>
      <div v-if="result">
        <v-card :data="searchData" :config="config"  v-loading="loading" element-loading-text="拼命加载中"
    element-loading-background="rgba(0, 0, 0, 0.8)"></v-card>
        <v-page :data="pagemsg"></v-page>
        <v-backtotop></v-backtotop>
      </div>
      <div class="searchFalse" v-else>
        <div class="noMsg">
          <img :src="noMsg.img" alt="">
          <p>未找到相关内容</p>
        </div>
        <div class="doYouLike">
          <!-- <div class="clearfix title">
            <p class="fl">猜你喜欢</p>
            <p class="fr"><i class="el-icon-refresh"></i>换一批</p>
          </div> -->
          <!--猜你喜欢 card组件 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from "@/components/common/Search.vue";
  import CustomCard from "@/components/common/Card.vue";
  import CustomPagination from "@/components/common/Pagination.vue";
  import BackToTop from "@/components/common/BackToTop.vue";
  import { home } from '~/lib/v1_sdk/index'
  export default {
    components: {
      "v-search": Search,
      "v-card": CustomCard,
      "v-page": CustomPagination,
      "v-backtotop": BackToTop
    },
    data() {
      return {
        ressult:false,
        noMsg:{
          img:require('~/assets/images/noSearch.png'),
        },
        searchData: [],
        config: {
          card_type: "profile",
          card: 'home'
        },
        pagemsg: {
          page: 1,
          pagesize: 1,
          total: null
        },
        searchForm: {
          pages: 0,
          limits: 2,
          searchword: null,
          categoryid: null,
          sortby: 2
        },
        loading: false,
        result: true,
        courseNumber: 0
      };
    },
    methods: {
      handleSearchs(val) {
        // console.log(val, '这是val')
        this.searchForm.searchword = val

        this.loading = true
        this.searchCurriculumList()
      },
      searchCurriculumList () {
        return new Promise((resolve, reject) => {
          home.searchCurriculumList(this.searchForm).then(response => {
            // console.log(response, '这是response')
            this.searchData = response.data.curriculumList
            // console.log(this.searchData, '123456')
            this.pagemsg.total = response.data.pageCount
            if(response.data.curriculumList.length === 0){
              this.result = false
            }
            this.pagemsg.total = response.data.curriculumList.length
            this.courseNumber = response.data.curriculumList.length
            this.loading = false
            resolve(true)
          })
        })
      }
    },
    mounted () {
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
  };
</script>

