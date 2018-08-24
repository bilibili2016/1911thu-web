<template>
  <div>
    <!-- 顶部list -->
    <div>
      <!-- :loadList="loadList" -->
      <v-list :cidData="cidData" :pidData="pidData" :cidBg="cidBg" :pidBg="pidBg" @selectCid="selectCid" @selectPid="selectPid"></v-list>
    </div>
    <div class="center category-style">
      <!-- 选择全部 最新和最热 -->
      <v-filter @selectActiveTab="selectActiveTab"></v-filter>
      <!-- 非选课的下面 课程列表 -->
      <div v-if="xid === '0'">

        <div class="carlist" v-loading="loadCourseAll" :class="{ minheights : loadCourseAll}">
          <v-card :data="categoryData" :config="categoryCard" v-if="categoryData.length&&xid === '0'"></v-card>
        </div>
        <div v-if="categoryData.length == 0 &&!loadCourseAll" class="noMsg">
          <v-nothing></v-nothing>
        </div>
      </div>

      <div v-if="xid === '1'">
        <!-- {{categoryDataChoose}} -->
        <!-- 选课的课程列表 <v-card :data="categoryData" :config="configSevent"></v-card>-->
        <div class="carlist" v-loading="loadCourse" ref="content" :class="{ minheights : loadCourse}">
          <v-card :data="categoryDataChoose" v-if="categoryDataChoose.length&& xid === '1'" :config="configSevent" @selCheckboxChange="selCheckboxChange"></v-card>
        </div>
        <!-- 无课程时候显示 -->
        <div v-loading="loadCourse" class="noMsg" v-if="categoryDataChoose.length<=0 && !loadCourse">
          <v-nothing></v-nothing>
        </div>
        <div v-show="categoryDataChoose.length !=0&&xid === '1'" class="allChecked" @click="allChecked">全选</div>
      </div>
    </div>
    <v-page :id="pagemsg.total" :data="pagemsg.pagesize" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize" :pagemsg="pagemsg" @handlePageChange="handlePageChange" v-if="!loadCourse"></v-page>
  </div>
</template>

<script>
import CustomCard from '@/components/card/Card.vue'
import SearchNothing from '@/components/common/SearchNothing.vue'
import { home, players, category } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { splitUrl, openUrl } from '~/lib/util/helper'
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
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      cidData: [],
      pidData: [],
      loadBanner: true,
      loadCourse: false,
      loadCourseAll: false,
      classList: [],
      cidBg: 0,
      pidBg: 0,
      activeTab: '',
      loadStart: true,
      categoryData: [],
      categoryDataChoose: [],
      categoryCard: {
        card_type: 'category',
        card: 'home',
        new: 'false',
        free: 'true'
      },
      configSevent: {
        card_type: 'shoucang',
        card: 'home',
        types: 'buy',
        new: 'false',
        free: 'true'
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

      categoryId: '',
      type: '',
      categoryIndex: '',
      loadList: false,
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
      changeData: [],
      cp: '',
      categoryId: '',
      pidNumber: '',
      allData: {
        category_name: '全部',
        id: '0',
        parent_id: '1',
        picture: '',
        short_name: ''
      },
      allCourseData: {
        category_name: '全部',
        childList: [
          {
            category_name: '公共管理/履职能力',
            id: '2',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '时政解读',
            id: '3',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '法律法规',
            id: '4',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '政府绩效管理',
            id: '5',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '经济治理与城市规划',
            id: '6',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '城市治理',
            id: '7',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '应急管理',
            id: '8',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '国际形势及安全治理',
            id: '9',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '创新驱动发展',
            id: '10',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '社会治理',
            id: '11',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '一带一路与国际合作',
            id: '12',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '乡村振兴',
            id: '13',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '新闻宣传',
            id: '14',
            parent_id: '1',
            picture: '',
            short_name: ''
          },
          {
            category_name: '人文素养',
            id: '15',
            parent_id: '1',
            picture: '',
            short_name: ''
          }
        ],
        id: '0',
        parent_id: '0',
        picture: 'http://p8p47jzeo.bkt.clouddn.com/1531894819',
        short_name: '全部'
      },
      allProjectData: {
        category_name: '全部',
        childList: [
          {
            category_name: '党政干部综合项目',
            id: '21',
            parent_id: '16',
            picture: 'http://p8p47jzeo.bkt.clouddn.com/1530691988',
            short_name: '党政干部综合项目'
          },
          {
            category_name: '军转系统研修项目',
            id: '22',
            parent_id: '16',
            picture: 'http://p8p47jzeo.bkt.clouddn.com/1530692025',
            short_name: '军转系统研修项目'
          },
          {
            category_name: '教育系统研修项目',
            id: '24',
            parent_id: '16',
            picture: 'http://p8p47jzeo.bkt.clouddn.com/1530692056',
            short_name: '教育系统研修项目'
          },
          {
            category_name: '体育系统研修项目',
            id: '27',
            parent_id: '16',
            picture: 'http://p8p47jzeo.bkt.clouddn.com/1530692083',
            short_name: '体育系统研修项目'
          }
        ],
        id: '0',
        parent_id: '0',
        picture: 'http://p8p47jzeo.bkt.clouddn.com/1531894819',
        short_name: '全部'
      },
      selectCidItem: '',
      selectPidItem: '',
      selectUrl: {
        base: '/course/category',
        cid: '',
        cp: '',
        xid: '',
        pids: ''
      }
      // pids: '0'
    }
  },
  watch: {
    isUpdate(val) {
      if (val) {
        this.getUserInfo()
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setProductsNum']),
    // 公共 获取list 方法
    getHeaderList(type) {
      if (type === 'course') {
        this.loadList = true
        category.childCategoryList().then(res => {
          this.handleData(this.allCourseData, res)
          this.loadList = false
        })
      } else {
        this.loadList = true
        category.getNewProject().then(res => {
          this.handleData(this.allProjectData, res)
          this.loadList = false
        })
      }
    },
    // 处理数据 拼接全部数据
    handleData(data, res) {
      this.cidData = res.data.categoryList
      this.cidData.unshift(data)
      for (let item of this.cidData) {
        item.childList.unshift(this.allData)
      }
      this.loadList = false
      for (let item of this.cidData) {
        if (item.id === this.categoryId) {
          this.categoryIndex = this.cidData.indexOf(item)
        }
      }
      this.pidData = this.cidData[this.categoryIndex]
    },
    handelOpenUrl() {
      this.selectUrl.cid = this.selectCidItem
      this.selectUrl.pids = this.selectPidItem
      this.selectUrl.cp = this.cp
      this.selectUrl.xid = this.xid
      openUrl(this.selectUrl, this)
    },
    // 设置 cid pid 公共函数
    handleSelect(type, item, index) {
      if (type === 'cidType') {
        this.selectCidItem = item.id
        this.selectPidItem = '0'
        this.$bus.$emit('cid', item.id)
        this.categoryId = item.id
        this.pidData = this.cidData[index]
      } else {
        this.selectCidItem = this.categoryId
        this.selectPidItem = item.id
        this.pidNumber = item.id
      }
      this.handelOpenUrl()
      this.categoryForm.pages = 1
      this.$bus.$emit('pid', this.selectPidItem)
      // 设置调取 card数据 ---
      this.handleSelectCard(this.selectCidItem, this.selectPidItem)
    },
    handleSelectCard(selectCidItem, selectPidItem) {
      if (this.cp === '0') {
        if (this.xid === '0') {
          // 调取课程的数据
          this.getCourseCardList(selectCidItem, selectPidItem)
        } else {
          this.getCourseCardChooseList(selectCidItem, selectPidItem)
        }
      } else {
        // 调取项目的数据
        // 点击学院 分类为 0
        this.getProjectCardList(selectCidItem, selectPidItem)
      }
    },
    // 学院 item
    selectCid(item, index) {
      this.handleSelect('cidType', item, index)
    },
    // 分类 item
    selectPid(item, index) {
      this.handleSelect('pidType', item, index)
    },
    // 点击cid pid 获取 card列表
    setParamsPidCid(itemCid, itemPid) {
      this.categoryForm.cids = itemCid
      this.categoryForm.pids = itemPid
    },
    // 课程 card 列表
    getCourseCardList(itemCid, itemPid) {
      this.loadCourseAll = true
      this.setParamsPidCid(itemCid, itemPid)

      category.curriculumListNew(this.categoryForm).then(res => {
        this.loadCourseAll = false
        this.categoryData = res.data.curriculumList
        this.pagemsg.total = res.data.pageCount
      })
    },
    // 选课 card 列表
    getCourseCardChooseList(itemCid, itemPid) {
      this.loadCourse = true
      this.setParamsPidCid(itemCid, itemPid)
      category.chooseCurriculumList(this.categoryForm).then(res => {
        this.categoryDataChoose = res.data.curriculumList
        this.pagemsg.total = res.data.pageCount
        this.allCheckedId = []
        for (let item of res.data.curriculumList) {
          this.allCheckedId.push(item.id)
        }
        this.loadCourse = false
      })
    },
    // 项目 card列表
    getProjectCardList(itemCid, itemPid) {
      this.loadCourseAll = true
      this.setParamsPidCid(itemCid, itemPid)
      category.curriculumProjectList(this.categoryForm).then(res => {
        this.categoryData = res.data.curriculumProjectList
        this.pagemsg.total = res.data.pageCount
        this.loadCourseAll = false
      })
    },

    // 我要选课页面 点击全选
    allChecked() {
      this.idsForm.cartid = this.allCheckedId
      this.changeData = this.allCheckedId
      category.addShopCart(this.idsForm).then(response => {
        if (response.status === 0) {
          this.categoryDataChoose.forEach(function(v, i, arr) {
            v.is_checked = true
          })
          this.setProductsNum({
            //设置购物车数量
            pn: response.data.curriculumNumber
          })
          this.$message({
            showClose: true,
            type: 'success',
            message: response.msg
          })
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: response.msg
          })
        }
      })
    },
    // 点击 最新最热 筛选
    selectActiveTab(item) {
      let categoryId = splitUrl(0, 1)
      let pids = splitUrl(3, 1)
      item.name === 'second'
        ? (this.categoryForm.sortBy = 1)
        : (this.categoryForm.sortBy = 2)
      if (this.cp === '0') {
        if (this.xid === '0') {
          this.getCourseCardList(categoryId, pids)
        } else {
          this.getCourseCardChooseList(categoryId, pids)
        }
      } else {
        this.getProjectCardList(categoryId, pids)
      }
    },
    // 点击 底部分页分页事件
    handlePageChange(val) {
      this.loadCourse = false
      this.pagemsg.page = val
      this.categoryForm.pages = val
      let categoryId = splitUrl(0, 1)
      let pids = splitUrl(3, 1)
      if (this.xid === '0') {
        this.getCourseCardList(categoryId, pids)
      } else {
        this.getCourseCardChooseList(categoryId, pids)
      }
    },
    //处理单选
    selCheckboxChange(val) {
      if (val.is_checked === false) {
        //不勾选 增加全选值
        this.allCheckedId.push(val.id)
      } else {
        //勾选  删除全选值
        this.allCheckedId.forEach((item, index) => {
          if (item === val.id) {
            this.allCheckedId.splice(index, 1)
          }
        })
      }
    },
    // 初始化params参数
    initParams() {
      // categoryId 学院 id
      this.categoryId = splitUrl(0, 1)
      // cp(1)项目 cp(0)
      this.cp = splitUrl(1, 1)

      // 获取是 选课(1) 还是 学院(0)
      this.xid = splitUrl(2, 1)
      // pid 分类的id
      this.pids = splitUrl(3, 1)
      // 初始化背景
      this.cidBg = splitUrl(0, 1)
      this.pidBg = splitUrl(3, 1)
    },
    initListCard() {
      // cp(0) 课程 cp(1)
      if (this.cp === '0') {
        this.getHeaderList('course')
      } else {
        this.getHeaderList('project')
      }
      this.handleSelectCard(this.categoryId, this.categoryId)
    }
  },
  mounted() {
    this.initParams()
    this.initListCard()
  }
}
</script>

<style scoped lang="scss">
// 因兼容问题暂时组件引入
@import '~assets/style/course/category';
.minheights {
  min-height: 500px;
}
</style>
