<template>
  <div>
    <div class="banner" v-loading="loadBanner">
      <div class="center category-style categoryd">
        <div class="college">
          <li class="title">学院：</li>
          <ul>
            <li :class="{bgs: this.cid === '' ? true : false }">
              <el-button @click="getCidList">全部</el-button>
            </li>
            <li v-for="(item,index) in data" :index="index" :key="index" :class="{bgs: bgmsg === item.id ? true : false }">
              <el-button @click="handleItemOne(item,index)">{{item.category_name}}</el-button>
            </li>
          </ul>
        </div>
        <div class="classification">
          <li class="title">分类：</li>
          <ul>
            <li :class="{bgs: this.pid === '' ? true : false }">
              <el-button @click="getPidList">全部</el-button>
            </li>
            <li v-for="(items,index) in data2.childList" :index="index" :key="index" :class="{bgs: bgmsgs === items.id ? true : false }">
              <el-button @click="handleItemTwo(items,index)">{{items.category_name}}</el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="center category-style">
      <div class="header">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabStyle">
          <el-tab-pane label="最新" name="first"></el-tab-pane>
          <el-tab-pane label="最热" name="second"></el-tab-pane>
        </el-tabs>
        <!-- <div class="pages"><el-pagination layout=" pager, prev, next" :total="1"></el-pagination></div> -->
        <!-- <el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费" class="switch"> -->
        <!-- <el-switch v-model="value3" active-text="隐藏已参加课程" class="switch">
            </el-switch> -->
      </div>
      <div class="carlist" v-if="categoryData.length" v-loading="loadCourse">
        <v-card :data="categoryData" :config="configSevent"></v-card>
      </div>
      <div v-else v-loading="loadCourse">
        <v-nothing></v-nothing>
      </div>
    </div>

    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="handleCurrentChange"></el-pagination>
    </div>
    <v-unlogged v-if="!isAuthenticated"></v-unlogged>
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import CustomPagination from '@/components/common/Pagination.vue'
import CustomShoppingCart from '@/pages/shop/shoppingcart.vue'
import CustomUnlogged from '@/components/common/Unlogged.vue'
import SearchNothing from '@/components/common/SearchNothing.vue'

import { auth, home } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    'v-card': CustomCard,
    'v-page': CustomPagination,
    'v-shop': CustomShoppingCart,
    'v-unlogged': CustomUnlogged,
    'v-nothing': SearchNothing
  },
  computed: {
    ...mapState('auth', ['pid', 'cid']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      bgmsg: 0,
      bgmsgs: 0,
      activeName: 'second',
      value3: true,
      value4: true,
      configSevent: {
        card_type: 'shoucang',
        card: 'home',
        types: 'buy'
      },
      pagemsg: {
        page: 1,
        pagesize: 8,
        total: 5
      },
      categoryData: [],
      curriculumListForm: {
        categoryIda: null,
        categoryIdb: null,
        sortBy: 1,
        pages: 1,
        limits: 8
      },
      data: [],
      data2: [],
      curriculumListForm: {
        categoryIda: null,
        categoryIdb: null,
        sortBy: 1,
        pages: 1,
        limits: 8
      },
      cidform: {
        cids: ''
      },
      pidform: {
        pids: ''
      },
      loadBanner: false,
      loadCourse: false
    }
  },
  methods: {
    ...mapActions('auth', ['setCid', 'setPid']),
    handleCurrentChange(val) {
      this.loadCourse = true
      this.pagemsg.page = val
      this.curriculumListForm.pages = val
      this.curriculumListForm.limits = 8
      return new Promise((resolve, reject) => {
        home.curriculumList(this.curriculumListForm).then(response => {
          this.categoryData = response.data.curriculumList
          this.pagemsg.total = response.data.pageCount
          resolve(true)
          this.loadCourse = false
        })
      })
    },
    handleItemOne(item, index) {
      this.bgmsg = index
    },
    handleItemTwo(item, index) {
      this.bgmsgs = index
    },
    handleItemTwo(item, index) {
      this.bgmsgs = item.id
      this.pidform.pids = item.id
      this.setPid(this.pidform)
      this.curriculumList()
    },
    getCidList() {
      this.cidform.cids = ''
      this.bgmsg = 0
      this.setCid(this.cidform)
      this.curriculumList()
    },
    getPidList() {
      this.pidform.pids = ''
      this.bgmsgs = 0
      this.setPid(this.pidform)
      this.curriculumList()
    },
    handleItemOne(item, index) {
      this.bgmsgs = 0
      this.bgmsg = item.id
      this.data2 = this.data[index]
      this.cidform.cids = item.id
      this.setCid(this.cidform)
      this.pidform.pids = ''
      this.setPid(this.pidform)
      this.curriculumList()
    },
    handleClick(tab, event) {},
    curriculumList() {
      this.loadCourse = true
      this.curriculumListForm.categoryIda = this.cid
      this.curriculumListForm.categoryIdb = this.pid
      return new Promise((resolve, reject) => {
        home.curriculumList(this.curriculumListForm).then(response => {
          this.categoryData = response.data.curriculumList
          this.pagemsg.total = response.data.pageCount
          for (let item of response.data.curriculumList) {
            this.$set(item, 'checkmsg', false)
          }
          resolve(true)
          this.loadCourse = false
        })
      })
    },
    childCategoryList() {
      this.loadBanner = true
      return new Promise((resolve, reject) => {
        home.childCategoryList().then(response => {
          this.data = response.data.categoryList
          // this.cid= '1'
          switch (this.cid) {
            case '1':
              this.data2 = this.data[0]
              break
            case '16':
              this.data2 = this.data[1]
              break
            case '17':
              this.data2 = this.data[2]
              break
            case '18':
              this.data2 = this.data[3]
              break
            case '19':
              this.data2 = this.data[4]
              break
            case '20':
              this.data2 = this.data[5]
              break
            default:
              // this.data2 = this.data[0]
              break
          }
          resolve(true)
          this.loadBanner = false
        })
      })
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.bgmsg = Number(this.cid) + Number(1)
    this.bgmsgs = Number(this.pid) + Number(1)
    this.cidform.cids = '1'
    this.pidform.pids = ''
    // this.bgmsg = 0;
    this.activeName = 'first'
    this.setCid(this.cidform)
    this.pidform.pids = ''
    this.bgmsg = this.cid
    this.setPid(this.pidform)
    //  this.data2 = this.data[0];
    this.curriculumList()
    this.childCategoryList()
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/course/category';
</style>
