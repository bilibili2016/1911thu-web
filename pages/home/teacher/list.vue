<template>
  <div class="news-list teacherList" v-loading="loading">
    <div class="banner-con">
      <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    </div>
    <div class="teacherLead clearfix">
      <p>名师智库是1911学堂携手清华大学等全球知名高校的数百位资深教授及世界500强企业的高管精英，集结全球知名专家教授组成的高端专家师资库。</p>
      <p>各机构单位可把实际需求提交给学堂，学堂将根据需求进行智能匹配，推荐最合适的专家教授及行业精英到单位真实的场景中授课、咨询。学员可以与学堂导师进行面对面交流、领略大师风采，在自己熟悉的学习环境中更加有效的掌握学习内容，切实提升问题解决能力和实际应用能力，从而提高学习效能，以实现委托单位“请进来、沉下去”的培训效果。</p>
    </div>
    <!-- 分类 -->
    <v-category @selectCid="selectCid" @selectPid="selectPid" @selectUid="selectUid" @changeCid="changeCid"></v-category>
    <div class="te-con" v-if="famousList.length">
      <div class="center teacherList">
        <div @click="getNewInfoList"></div>
        <v-card :famousList="famousList" :config="config"></v-card>
      </div>
      <div class="pagination" v-if="pagemsg.total>9">
        <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
      </div>
    </div>
    <!-- 无数据 -->
    <div class="noData" v-if="famousList.length==0">
      <img :src="noMsgImg" alt="">
      <h4>暂无数据</h4>
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
      noMsgImg: 'http://static-image.1911edu.com/noMsg.png',
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
        cid: 0,
        pid: 0,
        uid: 0
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
  methods: {
    // 加入1911教师
    joinTeacher() {
      this.$router.push('/home/teacher/beTeacher')
    },
    initTeacherList() {
      this.teacherForm.pages = 1
      this.teacherForm.limits = 9
      this.getNewInfoList()
    },
    //导师列表翻页
    selectPages(val) {
      this.teacherForm.pages = val
      this.pagemsg.page = val
      this.teacherForm.limits = this.pagemsg.pagesize
      this.getNewInfoList()
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
    //获取导师数据
    getNewInfoList() {
      this.loading = true
      list.getTeacherList(this.teacherForm).then(response => {
        if (response.status === 100008) {
          let data = { type: true, res: response }
          this.$bus.$emit('reLoginAlertPop', data)
        } else if (response.status === 0) {
          this.pagemsg.total = Number(response.data.pageCount)
          this.famousList = response.data.teacherList
          this.loading = false
          this.isShowBtn = true
        }
      })
    },
    //导师招募
    beTeacher() {
      this.$router.push('/home/teacher/beTeacher')
    },
    //选择一级分类
    selectCid(data, index) {
      this.teacherForm.cid = data.id
      this.getNewInfoList()
    },
    //选择二级分类
    selectPid(data, index) {
      this.teacherForm.pid = data.id
      this.getNewInfoList()
    },
    //所在单位
    selectUid(data, index) {
      this.teacherForm.uid = data.id
      this.getNewInfoList()
    },
    //一级分类下没有二级分类进行初始化
    changeCid(data) {
      this.teacherForm.pid = data
    }
  },
  mounted() {
    setTitle('名师智库-1911学堂')
    this.initTeacherList()
  }
}
</script>

