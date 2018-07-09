<template>
  <div>
    <v-list :cidData="cidData" :pidData="pidData" :cidBg="cidBg" :pidBg="pidBg" @selectAllCid="selectAllCid" @selectCid="selectCid" @selectAllPid="selectAllPid" @selectPid="selectPid" v-if="this.cg !=='1'"></v-list>
    <div class="center category-style">
      <v-filter @selectActiveTab="selectActiveTab"></v-filter>
      <div class="carlist" v-if="categoryData.length" v-loading="loadCourse">
        <v-card :data="categoryData" :config="categoryCard"></v-card>
      </div>
      <div v-else v-loading="loadCourse">
        <v-nothing></v-nothing>
      </div>
    </div>
    <v-page :pagemsg="pagemsg" @handlePageChange="handlePageChange"></v-page>
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import SearchNothing from '@/components/common/SearchNothing.vue'
import { home } from '~/lib/v1_sdk/index'
import { mapState, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'

import List from '@/pages/course/components/List'
import Filter from '@/pages/course/components/Filter'
import Page from '@/components/common/Pagination'
export default {
  components: {
    'v-card': CustomCard,
    'v-nothing': SearchNothing,
    'v-list': List,
    'v-filter': Filter,
    'v-page': Page
  },
  computed: {
    ...mapState('auth', ['pid', 'cid', 'cindex', 'cg'])
  },
  data() {
    return {
      cidData: [],
      pidData: [],
      loadBanner: true,
      loadCourse: true,
      cidBg: 0,
      pidBg: 0,
      activeTab: '',
      categoryData: [],

      categoryCard: {
        card_type: 'profile',
        card: 'home'
      },
      pagemsg: {
        page: 1,
        pagesize: 8,
        total: 5
      },

      categoryForm: {
        cids: null,
        pids: null,
        sortBy: 1,
        pages: 1,
        limits: 8
      },
      cidform: {
        cids: '',
        indexs: '',
        pids: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setCid']),
    selectCid(item, index) {
      this.pidBg = 0
      this.cidBg = item.id
      this.pidData = this.cidData[index]
      this.cidform.cids = item.id
      this.cidform.pids = ''
      this.setCid(this.cidform)
      this.getcourseList()
    },
    selectPid(item, index) {
      this.pidBg = item.id
      this.cidform.pids = item.id
      this.setCid(this.cidform)
      this.getcourseList()
    },

    selectAllCid() {
      this.cidform.cids = ''
      this.cidBg = 0
      this.setCid(this.cidform)
      this.getcourseList()
    },
    selectAllPid() {
      this.cidform.pids = ''
      this.pidBg = 0
      this.setCid(this.cidform)
      this.getcourseList()
    },
    selectActiveTab(item) {
      item.name === 'second'
        ? (this.categoryForm.sortBy = 1)
        : (this.categoryForm.sortBy = 2)
      this.getcourseList()
    },
    // 分页事件
    handlePageChange(val) {
      this.pagemsg.page = val
      this.categoryForm.pages = val
      home.curriculumList(this.categoryForm).then(res => {
        this.categoryData = res.data.curriculumList
        this.pagemsg.total = res.data.pageCount
        this.loadCourse = false
      })
    },
    // 顶部列表数据
    getCidPidList() {
      home.childCategoryList().then(res => {
        this.cidData = res.data.categoryList
        console.log(this.cindex, '00000000')
        this.pidData = res.data.categoryList[this.cindex]
        this.loadBanner = false
      })
    },
    // 获取课程列表
    getcourseList() {
      this.loadCourse = true
      this.categoryForm.cids = this.cid
      this.categoryForm.pids = this.pid
      home.curriculumList(this.categoryForm).then(res => {
        this.categoryData = res.data.curriculumList
        this.pagemsg.total = res.data.pageCount
        this.loadCourse = false
      })
    }
  },
  mounted() {
    this.activeTab = 'first'
    console.log(this.cid, '这是cid')
    console.log(this.pid, '这是pid')
    this.cidBg = this.cid
    this.pidBg = this.pid

    this.getCidPidList()
    this.getcourseList()
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>

<style scoped lang="scss">
// 因兼容问题暂时组件引入
@import '~assets/style/course/category';
</style>
