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
      <div v-if="xid === '0'">
        <div class="carlist" v-if="categoryData.length&&xid === '0'" v-loading="loadCourse">
          <v-card :data="categoryData" :config="categoryCard"></v-card>
        </div>
        <div v-else v-loading="loadCourse" class="noMsg">
          <v-nothing></v-nothing>
        </div>
      </div>
      <div v-if="xid === '1'">
        <!-- 选课的课程列表 <v-card :data="categoryData" :config="configSevent"></v-card>-->
        <div class="carlist" v-if="categoryData.length&& xid === '1'" v-loading="loadCourse">
          <v-card :data="categoryData" :config="configSevent"></v-card>
        </div>
        <!-- 无课程时候显示 -->
        <div v-else v-loading="loadCourse" class="noMsg">
          <v-nothing></v-nothing>
        </div>
        <div v-show="categoryData.length !=0&&xid === '1'" class="allChecked" @click="allChecked">全选</div>
      </div>
    </div>
    <v-page :id="pagemsg.total" v-show="pagemsg.total!='0'" :pagemsg="pagemsg" @handlePageChange="handlePageChange"></v-page>
  </div>
</template>

<script>
import CustomCard from '@/components/card/Card.vue'
import ChooseCard from '@/components/common/Card.vue'
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
    'v-choose': ChooseCard,
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
      xid: '0',
      // 我要选课
      curriculumListForm: {
        categoryIda: null,
        categoryIdb: null,
        sortBy: 1,
        pages: 1,
        limits: 8
      },
      allCheckedId: [],
      idsForm: {
        cartid: [],
        type: 1
      },
      changeData: []
    }
  },
  methods: {
    ...mapActions('auth', ['setCid', 'setProductsNum']),
    // 获取顶部分类列表数据list    ---  非 最新项目
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
    // 获取顶部分类列表数据list ---- 最新 项目
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
    // 下面 card list 列表  --- 学院点进去
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
    // 下面 card list 列表   --- 项目 查看更多 点进去
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
    // 下面 card list 列表  --- 我要选课页面
    curriculumList() {
      console.log('进我要选课了')
      this.loadCourse = true
      this.curriculumListForm.categoryIda = window.location.pathname.split(
        '/'
      )[2]
      this.curriculumListForm.categoryIdb = this.pid
      home.curriculumList(this.curriculumListForm).then(response => {
        this.categoryData = response.data.curriculumList
        this.pagemsg.total = response.data.pageCount

        for (let item of response.data.curriculumList) {
          this.$set(item, 'checkmsg', false)
        }

        this.loadCourse = false
        var that = this
        for (let item of response.data.curriculumList) {
          this.allCheckedId.push(item.id)
        }
      })
    },
    // 我要选课页面 点击全选
    allChecked() {
      this.idsForm.cartid = this.allCheckedId
      this.changeData = this.allCheckedId

      return new Promise((resolve, reject) => {
        home.addShopCart(this.idsForm).then(response => {
          if (response.status === 0) {
            this.categoryData.forEach(function(v, i, arr) {
              v.is_checked = true
            })
            this.setProductsNum({
              //设置购物车数量
              pn: response.data.curriculumNumber
            })
          } else {
            this.$message({
              showClose: true,
              type: 'error',
              message: response.msg
            })
          }
          resolve(true)
        })
      })
    },
    // 点击分类列表    学院
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
    // 点击分类列表  分类
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
    // 点击分类列表  学院 全部
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
    // 点击分类列表 分类 全部
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
    // 点击 最新最热 筛选
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
    // 点击 底部分页分页事件
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
    // 获取学院的id
    this.categoryId = window.location.pathname.split('/')[2]
    // 获取是学院还是项目
    this.type = window.location.search.split('=')[1].split('&')[0]
    // 获取是 选课还是 学院
    this.xid = window.location.search.split('=')[2]
    // 点击顶部学院 或者 点击我要选课 页面
    if (this.type === '0') {
      // 点击顶部学院
      if (this.xid === '0') {
        this.cidBg = window.location.pathname.split('/')[2]
        this.pidBg = this.pid
        this.getCidPidList()
        this.getcourseList()
      } else {
        // 点击我要选课逻辑
        this.cidBg = window.location.pathname.split('/')[2]
        this.pidBg = this.pid
        this.getCidPidList()
        // 我要选课 card list
        this.curriculumList()
      }
    } else {
      // 点击最新项目 查看更多 页面
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
