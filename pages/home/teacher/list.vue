<template>
  <div class="news-list">
    <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    <div class="center shadow">
      <div @click="getNewInfoList"></div>
      <v-card :famousList="famousList" :config="config" class="new-card-on"></v-card>
    </div>
    <div class="pagination" v-show="famousList.length!=0">
      <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0'" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomBanner from '@/components/common/Banner.vue'
import CustomCard from '@/pages/home/teacher/components/Card.vue'
import { list } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-card': CustomCard,
    'v-banner': CustomBanner
  },
  data() {
    return {
      bannerImg: 'http://papn9j3ys.bkt.clouddn.com/famousTeacher-bg.png',
      configs: {
        banner_type: 'famousList'
      },
      config: {
        card_type: 'famousList'
      },
      famousList: [],
      teacherForm: {
        pages: 1,
        limits: 7,
        recommend: 0
      },
      pagemsg: {
        page: 1,
        pagesize: 7,
        total: null
      }
    }
  },
  mounted() {
    this.getNewInfoList()
  },
  methods: {
    getNewInfoList() {
      this.teacherForm.pages = 1
      this.teacherForm.limits = 7
      list.getTeacherList(this.teacherForm).then(response => {
        this.pagemsg.total = Number(response.data.pageCount)
        this.famousList = response.data.teacherList
      })
    },
    selectPages(val) {
      this.teacherForm.pages = val
      this.pagemsg.page = val
      this.teacherForm.limits = this.pagemsg.pagesize

      list.getTeacherList(this.teacherForm).then(response => {
        this.pagemsg.total = Number(response.data.pageCount)
        this.famousList = response.data.teacherList
      })
    }
  }
}
</script>

