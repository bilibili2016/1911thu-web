<template>
  <div class="news-list">
    <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    <div class="center shadow">
      <div @click="getNewInfoList"></div>
      <v-card :famousList="famousList" :config="config" @checkdetail="checkdetail" class="new-card-on"></v-card>
    </div>
    <div class="pagination">
      <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0'" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomBanner from '@/components/common/Banner.vue'
import CustomCard from '@/pages/home/teacher/components/Card.vue'
import CustomPagination from '@/components/common/Pagination.vue'
import { list } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    'v-card': CustomCard,
    'v-page': CustomPagination,
    'v-banner': CustomBanner
  },
  data() {
    return {
      bannerImg: 'http://papn9j3ys.bkt.clouddn.com/famousTeacher-bg.png',
      configs: {
        banner_type: 'famousList'
      },
      // config: {
      //   card_type: 'goodlesson2'
      // },
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
      },
      nidForm: {
        nids: null
      }
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.getNewInfoList()
  },
  methods: {
    ...mapActions('auth', ['setNid']),
    getNewInfoList() {
      this.teacherForm.pages = 1
      this.teacherForm.limits = 7
      return new Promise((resolve, reject) => {
        list.getTeacherList(this.teacherForm).then(response => {
          this.pagemsg.total = Number(response.data.pageCount)
          this.famousList = response.data.teacherList
        })
      })
    },
    selectPages(val) {
      this.teacherForm.pages = val
      this.pagemsg.page = val
      this.teacherForm.limits = this.pagemsg.pagesize
      return new Promise((resolve, reject) => {
        list.getTeacherList(this.teacherForm).then(response => {
          this.pagemsg.total = Number(response.data.pageCount)
          this.famousList = response.data.teacherList
        })
      })
    },
    checkdetail(index) {
      this.nidForm.nids = index
      this.setNid(this.nidForm)
    }
  }
}
</script>

