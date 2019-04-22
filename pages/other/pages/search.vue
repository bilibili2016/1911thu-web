<template>
  <div>
    <v-search @Search="handleSearchs" :word="searchForm.searchword"></v-search>
    <div class="center">
      <div class="cnums">
        共找到 {{pagemsg.total}} 门“ {{searchForm.searchword}} ”相关课程
      </div>
      <div class="searchResult" v-if="result" v-loading="loadSearch">
        <v-card :data="searchData" :config="config" element-loading-text="拼命加载中" element-loading-background="#fff"></v-card>
        <div class="pagination" v-if="pagemsg.total!=0 && pagemsg.total>pagemsg.pageSize">
          <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pageSize" :page-count="pagemsg.pageSize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="pageChange"></el-pagination>
        </div>
        <v-backtotop></v-backtotop>
      </div>
      <div class="searchFalse" v-if="!result" v-loading="loadSearch">
        <!-- 无数据 -->
        <v-nodata :pageType="pageType"></v-nodata>
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
import Search from "@/components/common/Search.vue";
import CustomCard from "@/components/card/Card.vue";
import BackToTop from "@/components/common/BackToTop.vue";
import NoData from "@/components/common/NoData.vue";
import { search } from "~/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import { Trim } from "@/lib/util/helper";

export default {
  components: {
    "v-search": Search,
    "v-card": CustomCard,
    "v-backtotop": BackToTop,
    "v-nodata": NoData
  },
  data () {
    return {
      pageType: {
        page: "search",
        text: "未找到相关内容",
        imgUrl: "https://static-image.1911edu.com/noSearch.png"
      },
      ressult: false,
      loadSearch: false,
      searchData: [],
      getData: [],
      config: {
        card_type: "profile",
        new: "false"
      },
      pagemsg: {
        page: 1,
        pageSize: 8,
        total: 0
      },
      searchForm: {
        pages: 1,
        limits: 8,
        searchword: null,
        categoryid: null,
        sortby: 2
      },
      getLikeForm: {
        limits: 4
      },
      loadinged: true,
      result: true,
      responseData: { type: true, res: "" }
    };
  },
  methods: {
    handleSearchs (val) {
      this.searchForm.searchword = persistStore.get("key");
      this.searchCurriculumList();
    },
    searchCurriculumList () {
      this.loadSearch = true;
      this.searchForm.searchword = Trim(this.searchForm.searchword);
      search.searchCurriculumList(this.searchForm).then(response => {
        this.loadSearch = false;
        if (response.status == 0) {
          this.searchData = response.data.curriculumList;
          if (response.data.pageCount == 0) {
            this.result = false;
            this.pagemsg.total = 0;
            this.getLikeList();
          } else {
            this.result = true;
            this.pagemsg.total = response.data.pageCount;
          }
        } else if (response.status == 100008) {
          this.responseData.res = response;
          this.$router.push("/");
          return false;
        }
      });
    },
    pageChange (val) {
      this.searchForm.pages = val;
      this.searchCurriculumList();
    },
    // 获取猜你喜欢列表
    getLikeList () {
      search.getLikeList(this.getLikeForm).then(response => {
        this.getData = response.data.curriculumList;
        if (this.getData !== 0) {
          this.loadinged = false;
        }
      });
    }
  },
  mounted () {
    this.handleSearchs();
    // this.$bus.$emit('bannerShow', false)
  },
  watch: {
    $route (to, from) {
      this.handleSearchs();
    }
  }
};
</script>

