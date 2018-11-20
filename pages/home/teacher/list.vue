<template>
  <div class="news-list teacherList" v-loading="loading">
    <div class="banner-con">
      <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    </div>
    <!-- <div class="teacherLead clearfix">
      <img class="fl" src="http://static-image.1911edu.com/teacherLead.png" alt="">
      <div class="fr">
        <p>1911学堂（1911edu.com），源自清华、面向世界，专注于职场教育的在线学堂。</p>
        <p>由1911集团联合清华大学等全球多所知名高校数百位资深教授及世界500强企业高管精英共同发起的继续教育品牌，基于大数据及自主研发的智慧教学工具，为学堂会员提供纯线上教育服务，以及互动式和顾问式的增值服务。</p>
        <p>平台目前有近200位授课师资，将面向国内985、211 等知名高校特聘数百位院士、教授、副教授，建立由数千名专家教授组成的师资库，共同构建全球顶尖的高校名师智库。</p>
      </div>
    </div> -->
    <!-- 分类 -->
    <v-category @selectOne="selectOne"></v-category>

    <div class="center teacherList">
      <div @click="getNewInfoList"></div>
      <v-card :famousList="famousList" :config="config"></v-card>
    </div>
    <div class="pagination" v-if="pagemsg.total>9">
      <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
    </div>
    <div class="joinTeacher" @click="joinTeacher" v-show="isShowBtn" style="cursor:pointer">
      <img src="http://static-image.1911edu.com/toDoTeacher-gif.gif" alt="">
    </div>
  </div>
</template>

<script>
import CustomBanner from '@/components/common/Banner.vue'
import CustomCard from '@/pages/home/teacher/components/Card.vue'
import { list } from '~/lib/v1_sdk/index'
import Category from '@/pages/home/teacher/components/teacherCategory'
import { setTitle } from '@/lib/util/helper'
export default {
  components: {
    'v-card': CustomCard,
    'v-banner': CustomBanner,
    'v-category': Category
  },
  data() {
    return {
      bannerImg: 'http://static-image.1911edu.com/famousTeacher.png',
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
        limits: 9,
        recommend: 0
      },
      pagemsg: {
        page: 1,
        pagesize: 9,
        total: null
      },
      loading: false,
      isShowBtn: false,
      showRecruitTeacher: true
    }
  },
  mounted() {
    setTitle('名师智库-1911学堂')
    this.getNewInfoList()
  },
  methods: {
    // 加入1911教师
    joinTeacher() {
      this.$router.push('/home/teacher/beTeacher')
    },
    getNewInfoList() {
      this.teacherForm.pages = 1
      this.teacherForm.limits = 9
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
        this.isShowBtn = true
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
    },
    selectOne() {}
  }
}
</script>

