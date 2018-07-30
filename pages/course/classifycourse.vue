<template>
  <div>
    <div class="classification">
      <!-- <div class="classification">
        <div class="clsTitle clearfix">
          <div class="fl hotBtn">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="全部" name="first"></el-tab-pane>
              <el-tab-pane label="最新" name="second"></el-tab-pane>
              <el-tab-pane label="最热" name="third"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="fr rightPages">
            <span v-show="hideSwitch">
              <el-switch v-model="onOff" active-color="#8F4ACB" inactive-color="#ddd" @change="hideCourse">
              </el-switch>隐藏已参加课程
            </span>
          </div>
        </div>
      </div> -->
      <v-filter @selectActiveTab="selectActiveTab"></v-filter>
      <div class="classList">
        <ul>
          <li v-for="(item,index) in classList" :key="index" @click="bind(item.id,index)">
            <span :class="{checked:checkedLi===index? true : false}">{{item.short_name}}</span>
          </li>
        </ul>
      </div>
      <div class="center noCourse" v-if="categoryData.length" v-loading="loadCourse">
        <v-card :data="categoryData" :config="config" :linkdata="cardlink"></v-card>
      </div>
      <div v-else v-loading="loadCourse" class="noCourse">
        <v-nothing></v-nothing>
      </div>
    </div>
    <div class="pagination" v-if="categoryData.length">
      <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0'" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import CustomHots from '@/components/common/Hot.vue'
import SearchNothing from '@/components/common/SearchNothing.vue'
import CustomPagination from '@/components/common/Pagination.vue'
import Filter from '@/pages/course/components/Filter'
import { mapState, mapActions, mapGetters } from 'vuex'
import { home } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-hots': CustomHots,
    'v-card': CustomCard,
    'v-page': CustomPagination,
    'v-filter': Filter,
    'v-nothing': SearchNothing
  },
  data() {
    return {
      checked: true,
      onOff: false,
      hideSwitch: false,
      loadCourse: false,
      cardlink: 'coursedetail',
      classList: [],
      pagemsg: {
        page: 1,
        pagesize: 5,
        total: 4
      },
      checkedLi: null,
      categoryData: [],
      config: {
        card_type: 'profile',
        card: 'home'
      },
      newsCurriculumForm: {
        pages: 0,
        limits: 100,
        categoryId: null,
        evaluateLimit: null,
        sortBy: null,
        onOff: 0
      },
      activeName: null,
      categoryForm: {
        cids: null,
        pids: null,
        sortBy: 1,
        pages: 1,
        limits: 8
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    bind(id, index) {
      this.checkedLi = index
      this.newsCurriculumForm.categoryId = id
      this.recommendCurriculumList()
    },
    // 筛选最新最热
    selectActiveTab(item) {
      item.name === 'second'
        ? (this.newsCurriculumForm.sortBy = 1)
        : (this.newsCurriculumForm.sortBy = 2)
      this.recommendCurriculumList()
    },
    hideCourse() {
      if (this.onOff) {
        this.newsCurriculumForm.onOff = 1
      } else {
        this.newsCurriculumForm.onOff = 0
      }
      this.recommendCurriculumList()
    },
    getClassicsList() {
      return new Promise((resolve, reject) => {
        home.getClassicsList(this.classList).then(response => {
          this.classList = response.data.categoryList
          resolve(true)
        })
      })
    },
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
    handleClick(tab, event) {
      if (tab.name === 'second') {
        this.newsCurriculumForm.sortBy = 1
      } else if (tab.name === 'third') {
        this.newsCurriculumForm.sortBy = 2
      } else if (tab.name === 'first') {
        this.checkedLi = null
        this.newsCurriculumForm.categoryId = null
      }
      this.recommendCurriculumList()
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.activeName = 'first'
    this.recommendCurriculumList()
    this.getClassicsList()
    this.isAuthenticated ? (this.hideSwitch = true) : (this.hideSwitch = false)
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  margin: 20px 0px 60px;
  &.pages {
    margin: 0;
    display: inline-block;
  }
}
</style>


