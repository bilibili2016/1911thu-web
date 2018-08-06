<template>
  <div>
    <!-- 顶部list -->
    <div v-loading="loadList">
      <v-list :cidData="cidData" :pidData="pidData" :cidBg="cidBg" :pidBg="pidBg" @selectAllCid="selectAllCid" @selectCid="selectCid" @selectAllPid="selectAllPid" @selectPid="selectPid"></v-list>
    </div>

    <div class="center category-style">
      <!-- 选择全部 最新和最热 -->
      <v-filter @selectActiveTab="selectActiveTab"></v-filter>

      <!-- 非选课的下面 课程列表 -->
      <div class="carlist" v-if="categoryData.length&&xid === '0'" v-loading="loadCourse">
        <v-card :data="categoryData" :config="categoryCard"></v-card>
      </div>
      <!-- 选课的课程列表 <v-card :data="categoryData" :config="configSevent"></v-card>-->
      <div class="carlist" v-if="categoryData.length&& xid === '1'" v-loading="loadCourse">
        <v-card :data="categoryData" :config="configSevent"></v-card>
      </div>
      <!-- 无课程时候显示 -->
      <div v-else v-loading="loadCourse" class="noMsg">
        <v-nothing></v-nothing>
      </div>
    </div>
    <v-page :id="pagemsg.total" v-show="pagemsg.total!='0'" :pagemsg="pagemsg" @handlePageChange="handlePageChange"></v-page>
  </div>
</template>

<script>
import CustomCard from '@/components/card/Card.vue'
import SearchNothing from '@/components/common/SearchNothing.vue'
import { home, players } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
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
    ...mapState('auth', ['pid', 'cid', 'cindex', 'cg']),
    ...mapGetters('auth', ['isAuthenticated'])
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
        pagesize: 12,
        total: 5
      },

      categoryForm: {
        cids: null,
        pids: null,
        sortBy: 1,
        pages: 1,
        limits: 12
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
      },
      categoryId: '',
      type: '',
      categoryIndex: '',
      loadList: false,
      configSevent: {
        card_type: 'shoucang',
        card: 'home',
        types: 'buy'
      },
      xid: '0'
    }
  },
  methods: {
    ...mapActions('auth', ['setCid']),
    selectCid(item, index) {
      this.categoryForm.pages = 1
      this.pidBg = 0
      this.cidBg = item.id
      this.pidData = this.cidData[index]
      this.cidform.cids = item.id
      this.cidform.pids = '0'
      this.cidform.indexs = index
      this.setCid(this.cidform)
      if (this.type === '0') {
        this.getcourseList()
      } else {
        this.getNewProjectList()
      }
    },
    selectPid(item, index) {
      this.categoryForm.pages = 1
      this.pidBg = item.id
      this.cidform.pids = item.id
      this.cidform.cids = this.cid
      this.cidform.indexs = this.cindex
      this.setCid(this.cidform)
      if (this.type === '0') {
        this.getcourseList()
      } else {
        this.getNewProjectList()
      }
    },

    selectAllCid() {
      this.categoryForm.pages = 1
      this.cidform.cids = '0'
      this.cidform.indexs = 0
      this.cidform.pids = '0'
      this.cidBg = 0
      this.pidBg = 0

      this.pidData = this.cidData[0]
      this.setCid(this.cidform)
      if (this.type === '0') {
        this.getcourseList()
      } else {
        this.getNewProjectList()
      }
    },
    selectAllPid() {
      this.categoryForm.pages = 1
      this.cidform.pids = '0'
      this.pidBg = 0

      this.setCid(this.cidform)
      if (this.type === '0') {
        this.getcourseList()
      } else {
        this.getNewProjectList()
      }
    },
    selectActiveTab(item) {
      item.name === 'second'
        ? (this.categoryForm.sortBy = 1)
        : (this.categoryForm.sortBy = 2)
      if (this.type === '0') {
        this.getcourseList()
      } else {
        this.getNewProjectList()
      }
    },

    // 获取课程列表
    getcourseList() {
      this.loadCourse = true
      this.categoryForm.cids = this.cid
      this.categoryForm.pids = this.pid

      home.curriculumListNew(this.categoryForm).then(res => {
        this.categoryData = res.data.curriculumList
        this.pagemsg.total = res.data.pageCount
        // console.log(this.pagemsg.total)
        this.loadCourse = false
      })
    },
    // 获取项目列表
    getNewProjectList() {
      this.loadCourse = true
      this.categoryForm.cids = this.cid
      this.categoryForm.pids = this.pid
      home.curriculumProjectList(this.categoryForm).then(res => {
        this.categoryData = res.data.curriculumProjectList
        this.pagemsg.total = res.data.pageCount
        // console.log(this.pagemsg.total)

        this.loadCourse = false
      })
    },
    // 获取竖直分类列表
    getClassicsList() {
      home.getClassicsList(this.classList).then(response => {
        this.classList = response.data.categoryList
        // resolve(true)
      })
    },
    // 顶部 列表数据    ---  非 最新项目
    getCidPidList() {
      this.loadList = true
      home.childCategoryList().then(res => {
        this.cidData = res.data.categoryList
        this.loadList = false
        //最新项目
        if (this.categoryId === '0') {
          this.pidData = res.data.categoryList[0]
        } else {
          // 最新项目之外
          for (let item of res.data.categoryList) {
            if (item.id === this.categoryId) {
              this.categoryIndex = res.data.categoryList.indexOf(item)
            }
          }
          this.pidData = res.data.categoryList[this.categoryIndex]
        }

        this.loadBanner = false
      })
    },
    // 顶部列表数据 ---- 最新  项目
    getNewProject() {
      this.loadList = true
      home.getNewProject().then(res => {
        this.cidData = res.data.categoryList
        this.loadList = false
        //最新项目
        if (this.categoryId === '0') {
          this.pidData = res.data.categoryList[0]
          // this.cidform.cids = '0'
          // this.setCid(this.cidform)
        } else {
          // 最新项目之外
          for (let item of res.data.categoryList) {
            if (item.id === this.categoryId) {
              this.categoryIndex = res.data.categoryList.indexOf(item)
            }
          }
          this.pidData = res.data.categoryList[this.categoryIndex]
        }
      })
    },
    // 点击 分页分页事件
    handlePageChange(val) {
      this.loadCourse = true
      this.pagemsg.page = val
      this.categoryForm.pages = val
      home.curriculumList(this.categoryForm).then(res => {
        this.loadCourse = false
        this.categoryData = res.data.curriculumList
        this.pagemsg.total = res.data.pageCount
      })
    }
  },
  mounted() {
    this.categoryId = window.location.pathname.split('/')[2]

    this.type = window.location.search.split('=')[1].split('&')[0]
    this.xid = window.location.search.split('=')[2]
    console.log(window.location.search.split('=')[1], '这是type的值')
    // 非最新项目
    if (this.type === '0') {
      this.cidBg = window.location.pathname.split('/')[2]
      this.pidBg = this.pid
      this.getCidPidList()
      this.getcourseList()
    } else {
      // 最新项目逻辑
      this.cidBg = window.location.pathname.split('/')[2]
      //判断是否为最新项目
      if (this.categoryId === '0') {
        this.cidform.pids = '0'
        this.cidform.cids = '0'
        this.setCid(this.cidform)
      }
      this.getNewProject()
      this.getNewProjectList()
    }
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
.noMsg {
  min-height: 500px;
}
</style>
