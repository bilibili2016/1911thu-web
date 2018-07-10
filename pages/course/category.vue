<template>
  <div>
    <!-- 当经典好课 list不显示 this.cg !=='1' -->
    <v-list :cidData="cidData" :pidData="pidData" :cidBg="cidBg" :pidBg="pidBg" @selectAllCid="selectAllCid" @selectCid="selectCid" @selectAllPid="selectAllPid" @selectPid="selectPid" v-if="this.cg !=='1'"></v-list>
    <div class="classList" v-if="this.cg ==='1'">
      <ul>
        <li v-for="(item,index) in classList" :key="index" @click="bind(item.id,index)">
          <span :class="{checked:checkedLi===index? true : false}">{{item.short_name}}</span>
        </li>
      </ul>
    </div>
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
      classList: [],
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
      },
      cgForm: {
        cgs: null
      },
      checkedLi: null,
      // 竖直列表
      newsCurriculumForm: {
        pages: 0,
        limits: 100,
        categoryId: null,
        evaluateLimit: null,
        sortBy: null,
        onOff: 0
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setCid']),
    selectCid(item, index) {
      // console.log(index, '这是index')
      this.pidBg = 0
      this.cidBg = item.id
      this.pidData = this.cidData[index]
      this.cidform.cids = item.id
      this.cidform.pids = ''
      this.cidform.indexs = index
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
    },
    // 获取竖直分类列表
    getClassicsList() {
      return new Promise((resolve, reject) => {
        home.getClassicsList(this.classList).then(response => {
          console.log(response.data.categoryList, '这是竖直列表')
          this.classList = response.data.categoryList
          resolve(true)
        })
      })
    },
    // 点击竖直列表获取数据
    recommendCurriculumList() {
      this.loadCourse = true
      return new Promise((resolve, reject) => {
        home.getClassicCourseList(this.newsCurriculumForm).then(response => {
          this.categoryData = response.data.curriculumList
          resolve(true)
          this.loadCourse = false
        })
      })
    },
    // 点击竖直列表
    bind(id, index) {
      this.checkedLi = index
      this.newsCurriculumForm.categoryId = id
      this.recommendCurriculumList()
    }
  },
  mounted() {
    this.activeTab = 'first'
    console.log(this.cid, '这是cid')
    console.log(this.pid, '这是pid')
    this.cidBg = this.cid
    this.pidBg = this.pid
    // 获取竖直列表
    this.getClassicsList()
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
.classList {
  width: 1272px;
  margin: 0 auto;
  position: fixed;
  top: 190px;
  left: 50%;
  margin-left: -636px;
  z-index: 1;
  ul {
    width: 95px;
    border-radius: 6px;
    background-color: #6417a6;
    color: #fff;
    font-size: 14px;
    position: absolute;
    left: -20px;
    top: 0;
    text-align: center;
    overflow: hidden;
    li {
      height: 76px;
      line-height: 76px;
      cursor: pointer;
      transition: all 300ms;
      span {
        width: 100%;
        height: 100%;
        padding: 0 5px;
        &.checked {
          background-color: #8f4acb;
        }
      }
      &:hover {
        color: #fafafa;
      }
      &:nth-child(2) {
        line-height: 76px;
      }
      &:nth-child(3) {
        line-height: 76px;
      }
    }
  }
}
</style>
