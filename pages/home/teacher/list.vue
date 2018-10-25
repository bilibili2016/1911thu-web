<template>
  <div class="news-list teacherList" v-loading="loading">
    <div class="banner-con" @click.stop="beTeacher">
      <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    </div>
    <div class="center shadow teacherList">
      <div @click="getNewInfoList"></div>
      <!-- <div class="recruit" @click="beTeacher"> <span>成为1911学堂导师</span> </div> -->
      <v-card :famousList="famousList" :config="config" class="new-card-on"></v-card>
    </div>
    <div class="pagination" v-show="famousList.length!=0">
      <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomBanner from '@/components/common/Banner.vue'
import CustomCard from '@/pages/home/teacher/components/Card.vue'
import { list } from '~/lib/v1_sdk/index'
import { setTitle } from '@/lib/util/helper'
export default {
  components: {
    'v-card': CustomCard,
    'v-banner': CustomBanner
  },
  data() {
    return {
      bannerImg: 'http://papn9j3ys.bkt.clouddn.com/famousTeacher.png',
      load: true,
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
      },
      loading: false
    }
  },
  mounted() {
    setTitle('名师智库-1911学堂')
    this.getNewInfoList()
  },
  methods: {
    getNewInfoList() {
      this.teacherForm.pages = 1
      this.teacherForm.limits = 7
      this.loading = true
      list.getTeacherList(this.teacherForm).then(response => {
        if (response.status === 100008) {
          let data = { type: true, res: response }
          this.$bus.$emit('reLoginAlertPop', data)
          return false
        }
        this.pagemsg.total = Number(response.data.pageCount)
        this.famousList = response.data.teacherList
        this.loading = false
      })
    },
    beTeacher() {
      this.$router.push('/home/teacher/beTeacher')
    },
    selectPages(val) {
      this.teacherForm.pages = val
      this.pagemsg.page = val
      this.teacherForm.limits = this.pagemsg.pagesize

      list.getTeacherList(this.teacherForm).then(response => {
        this.pagemsg.total = Number(response.data.pageCount)
        this.famousList = response.data.teacherList
        document.body.scrollTop = document.documentElement.scrollTop = 0
      })

      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>

