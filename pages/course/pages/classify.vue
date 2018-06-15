<template>
  <div>
    <div class="classification">
      <div class="classification">
        <div class="clsTitle clearfix">
          <div class="fl hotBtn">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <!-- <el-tab-pane label="全部" name="first"></el-tab-pane> -->
              <!-- <el-tab-pane label="全部" name="first"></el-tab-pane> -->
              <el-tab-pane label="最新" name="first"></el-tab-pane>
              <el-tab-pane label="最热" name="second"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="fr rightPages">
            <el-switch v-model="onOff" active-color="#8F4ACB" inactive-color="#999">
            </el-switch>隐藏已参加课程
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total"></el-pagination>
          </div>
        </div>
      </div>
      <div class="classList">
        <ul>
          <li v-for="(item,index) in classList" :key="index" @click="bind(item.id,index)">
            <span :class="{checked:checkedLi===index? true : false}">{{item.short_name}}</span>
          </li>
        </ul>
      </div>
      <div class="center">
        <v-card :data="categoryData" :config="config" :linkdata="cardlink"></v-card>
      </div>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import CustomHots from '@/components/common/Hot.vue'
import CustomPagination from '@/components/common/Pagination.vue'
import { home } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-hots': CustomHots,
    'v-card': CustomCard,
    'v-page': CustomPagination
  },
  data() {
    return {
      checked: true,
      onOff: true,
      cardlink: 'coursedetail',
      classList: [
        '干部通用',
        '党政系统',
        '商学院',
        '行业学院',
        '职场学院',
        '热点学院'
      ],
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
        sortBy: null
      },
      activeName: null
    }
  },
  methods: {
    bind(id, index) {
      // $('.classList ul li').removeClass('checked')
      // $('.classList ul li')
      //   .eq(id)
      //   .addClass('checked')
      // console.log(index * 1)

      this.checkedLi = index
      this.newsCurriculumForm.categoryId = id
      this.recommendCurriculumList()
    },
    getClassifyList() {
      return new Promise((resolve, reject) => {
        home.getClassifyList(this.classList).then(response => {
          this.classList = response.data.categoryList
          resolve(true)
        })
      })
    },
    recommendCurriculumList() {
      return new Promise((resolve, reject) => {
        home.getClassicCourseList(this.newsCurriculumForm).then(response => {
          this.categoryData = response.data.curriculumList
          resolve(true)
        })
      })
    },
    handleClick(tab, event) {
      if (tab.name === 'first') {
        this.newsCurriculumForm.sortBy = 1
        this.recommendCurriculumList()
      } else {
        this.newsCurriculumForm.sortBy = 2
        this.recommendCurriculumList()
      }
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    // this.activeName = 'first'
    this.recommendCurriculumList()
    this.getClassifyList()
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  margin: 200px 0px;
}
</style>


