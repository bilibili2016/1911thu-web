<template>
  <div>
    <!-- 顶部list -->
    <div v-loading="loadList">
      <v-list :cidData="cidData" :pidData="pidData" :cidBg="cidBg" :pidBg="pidBg" @selectAllCid="selectAllCid" @selectCid="selectCid" @selectAllPid="selectAllPid" @selectPid="selectPid" :loadList="loadList"></v-list>
    </div>
    <div class="center category-style">
      <!-- 选择全部 最新和最热 -->
      <v-filter @selectActiveTab="selectActiveTab"></v-filter>
      <!-- 非选课的下面 课程列表 -->
      <div v-if="xid === '0'">
        <!-- -->
        <div class="carlist" v-if="categoryData.length&&xid === '0'" v-loading="loadCourse">
          <v-card :data="categoryData" :config="categoryCard"></v-card>
        </div>
        <div v-else v-loading="loadCourse" class="noMsg">
          <v-nothing></v-nothing>
        </div>
      </div>
      <div v-if="xid === '1'">
        <!-- 选课的课程列表 <v-card :data="categoryData" :config="configSevent"></v-card>-->
        <div class="carlist" v-if="categoryDataChoose.length&& xid === '1'" v-loading="loadCourse" ref="content">
          <v-card :data="categoryDataChoose" :config="configSevent" @selCheckboxChange="selCheckboxChange"></v-card>
        </div>
        <!-- 无课程时候显示 -->
        <div v-loading="loadCourse" class="noMsg" v-if="categoryDataChoose.length<0 && !loadCourse">
          <v-nothing></v-nothing>
        </div>
        <div v-show="categoryDataChoose.length !=0&&xid === '1'" class="allChecked" @click="allChecked">全选</div>
      </div>
    </div>
    <v-page :id="pagemsg.total" v-show="pagemsg.total!='0'" :pagemsg="pagemsg" @handlePageChange="handlePageChange"></v-page>
  </div>
</template>

<script>
import CustomCard from '@/components/card/Card.vue'
import SearchNothing from '@/components/common/SearchNothing.vue'
import { home, players, category } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { splitUrl } from '~/lib/util/helper'
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
      loadCourse: true,
      classList: [],
      cidBg: 0,
      pidBg: 0,
      activeTab: '',
      categoryData: [],
      categoryDataChoose: [],
      categoryCard: {
        card_type: 'profile',
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
      pidNumber: ''
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
    // 学院 item
    selectCid(item, index) {
      this.$router.push(
        '/course/category' +
          '?cid=' +
          item.id +
          '&cp=' +
          this.cp +
          '&xid=' +
          this.xid +
          '&pids=' +
          '0'
      )

      this.categoryForm.pages = 1

      // 点击cid时候 cid选中 pid置为 0
      this.$bus.$emit('cid', item.id)
      // 为了点击pid，保存cid
      this.categoryId = item.id
      this.$bus.$emit('pid', '0')
      // 设置点击 cid 获取piddata
      this.pidData = this.cidData[index]

      if (this.cp === '0') {
        if (this.xid === '0') {
          // 调取课程的数据
          this.getCourseCardList(item.id, null)
        } else {
          this.getCourseCardChooseList(item.id, null)
        }
      } else {
        // 调取项目的数据
        this.getProjectCardList(item.id, null)
      }
    },
    // 分类 item
    selectPid(item, index) {
      this.categoryForm.pages = 1
      this.$router.push(
        '/course/category' +
          '?cid=' +
          this.categoryId +
          '&cp=' +
          this.cp +
          '&xid=' +
          this.xid +
          '&pids=' +
          item.id
      )
      this.$bus.$emit('pid', item.id)
      this.pidNumber = item.id
      // cp 为 0 调用课程
      if (this.cp === '0') {
        this.getCourseCardList(null, item.id)
        if (this.xid === '0') {
          // 调取课程的数据
          this.getCourseCardList(null, item.id)
        } else {
          this.getCourseCardChooseList(null, item.id)
        }
      } else {
        // cp 为 1 调用项目
        this.getProjectCardList(null, item.id)
      }
    },
    // 学院全部
    selectAllCid() {
      this.categoryForm.pages = 1
      this.categoryId = '0'
      this.$router.push(
        '/course/category' +
          '?cid=' +
          '0' +
          '&cp=' +
          this.cp +
          '&xid=' +
          this.xid +
          '&pids=' +
          '0'
      )
      // 点击全部 cid 和pid 都为 0
      this.$bus.$emit('cid', '0')
      this.$bus.$emit('pid', '0')
      if (this.cp === '0') {
        this.getCourseCardList(null, null)

        if (this.xid === '0') {
          // 调取课程的数据
          this.getCourseCardList(null, null)
        } else {
          this.getCourseCardChooseList(null, null)
        }
      } else {
        this.getProjectCardList(null, null)
      }
    },
    // 分类 全部
    selectAllPid() {
      this.categoryForm.pages = 1

      this.$router.push(
        '/course/category' +
          '?cid=' +
          this.categoryId +
          '&cp=' +
          this.cp +
          '&xid=' +
          this.xid +
          '&pids=' +
          '0'
      )
      // this.$bus.$emit('cid', this.categoryId)
      this.$bus.$emit('pid', '0')
      if (this.cp === '0') {
        // 点pid 全部，cid 保持
        if (this.xid === '0') {
          // 调取课程的数据
          this.getCourseCardList(this.categoryId, '0')
        } else {
          this.getCourseCardChooseList(this.categoryId, '0')
        }
        this.getCourseCardList(this.categoryId, '0')
      } else {
        this.getProjectCardList(this.categoryId, '0')
      }
    },
    // 点击cid pid 获取 card列表
    setParamsPidCid(itemCid, itemPid) {
      if (itemCid) {
        console.log('1')
        this.categoryForm.cids = itemCid
        // 将点击的id获取url中 不可以截取会发生 延迟
        this.categoryForm.pids = '0'
      } else if (itemPid) {
        console.log('2')
        this.categoryForm.cids = splitUrl(0, 1)
        // 将点击的id获取url中 不可以截取会发生 延迟
        this.categoryForm.pids = itemPid
        // console.log(this.categoryForm, '123')
      } else {
        this.categoryForm.cids = '0'
        // 将点击的id获取url中 不可以截取会发生 延迟
        this.categoryForm.pids = '0'
      }
    },
    // 课程 card 列表
    getCourseCardList(itemCid, itemPid) {
      this.loadCourse = true

      this.setParamsPidCid(itemCid, itemPid)
      category.curriculumListNew(this.categoryForm).then(res => {
        this.categoryData = res.data.curriculumList
        this.pagemsg.total = res.data.pageCount
        // this.allCheckedId = []
        // for (let item of res.data.curriculumList) {
        //   this.allCheckedId.push(item.id)
        // }
        // console.log(this.pagemsg.total)
        this.loadCourse = false
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
        // console.log(this.pagemsg.total)
        this.loadCourse = false
      })
    },

    // 项目 card列表
    getProjectCardList(itemCid, itemPid) {
      console.log(itemCid, 'itemCid')
      console.log(itemPid, 'itemPid')
      this.loadCourse = true
      this.setParamsPidCid(itemCid, itemPid)
      category.curriculumProjectList(this.categoryForm).then(res => {
        this.categoryData = res.data.curriculumProjectList
        this.pagemsg.total = res.data.pageCount
        // console.log(this.pagemsg.total)
        this.loadCourse = false
      })
    },
    // 课程 顶部 list
    getCourseList() {
      this.loadList = true
      category.childCategoryList().then(res => {
        this.cidData = res.data.categoryList
        this.loadList = false
        // 选课进入 categoryId 为 0
        if (this.categoryId === '0') {
          this.pidData = res.data.categoryList[0]
        } else {
          // 顶部 课程进入
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
    // 项目 顶部 list
    getProjectList() {
      this.loadList = true
      category.getNewProject().then(res => {
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
    // 下面 card list 列表  --- 我要选课页面
    // curriculumList() {
    //   this.loadCourse = true
    //   this.curriculumListForm.categoryIda = splitUrl(0, 1)
    //   this.curriculumListForm.categoryIdb = splitUrl(3, 1)
    //   category.curriculumList(this.curriculumListForm).then(response => {
    //     this.categoryData = response.data.curriculumList
    //     this.pagemsg.total = response.data.pageCount
    //     for (let item of response.data.curriculumList) {
    //       this.$set(item, 'checkmsg', false)
    //     }
    //     this.loadCourse = false
    //     var that = this
    //     for (let item of response.data.curriculumList) {
    //       this.allCheckedId.push(item.id)
    //     }
    //   })
    // },
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
      this.loadCourse = true
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
    initHeader() {},
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
      // cp(0) 课程 cp(1) 项目
      if (this.cp === '0') {
        // 无论是选课页面，还是顶部选课进来
        this.getCourseList()
        if (this.xid === '0') {
          // 获取刷新后数据，使用url cid pid
          this.getCourseCardList(this.categoryId, this.pids)
        } else {
          this.getCourseCardChooseList(this.categoryId, this.pids)
        }
      } else {
        this.getProjectList()
        // 项目页面 获取刷新后数据，使用url cid pid
        this.getProjectCardList(this.categoryId, this.pids)
      }
    }
  },
  mounted() {
    this.initParams()
    this.initListCard()
    this.initHeader()
  }
}
</script>

<style scoped lang="scss">
// 因兼容问题暂时组件引入
@import '~assets/style/course/category';
</style>
