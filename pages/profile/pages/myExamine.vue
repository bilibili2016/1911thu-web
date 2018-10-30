<template>
  <div class="examine">
    <el-card class="changeNav">
      <!-- 列表 -->
      <div class="list" v-show="isShowList">
        <div class="top-con clearfix">
          <span>考试认证</span>
        </div>
        <div class="certificateList" v-loading="examineLoading" :class="{ minheight : examineLoading}">
          <v-list v-if="examineListData.length > 0" :examineListData="examineListData"></v-list>
        </div>
        <div class="pagination" v-if="examinePagemsg.total>11&&examineListData.length > 0">
          <el-pagination background layout="prev, pager, next" :page-size="examinePagemsg.pagesize" :pager-count="5" :page-count="examinePagemsg.pagesize" :current-page="examinePagemsg.page" :total="examinePagemsg.total" @current-change="examineListChange"></el-pagination>
        </div>
        <v-nomsg v-if="examineListData.length == 0&&!examineLoading" :config="noMsg"></v-nomsg>
      </div>
      <!-- 个人信息填写 -->
      <div class="info" v-show="isShowInfo">
        <v-info :vipID="vipID"></v-info>
      </div>
      <!-- 认证资格介绍 -->
      <div class="intro" v-show="isShowIntro">
        <v-intro :vipID="vipID"></v-intro>
      </div>
      <!-- 考试记录 -->
      <div class="record" v-show="isShowRecord">
        <v-record :vipID="vipID"></v-record>
      </div>
    </el-card>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import List from '@/pages/profile/components/myexamine/certificateList'
import Info from '@/pages/profile/components/myexamine/info'
import Intro from '@/pages/profile/components/myexamine/intro'
import Record from '@/pages/profile/components/myexamine/examineRecord'

export default {
  props: ['examineListData', 'examinePagemsg', 'examineLoading'],
  components: {
    'v-list': List,
    'v-info': Info,
    'v-intro': Intro,
    'v-record': Record,
    'v-nomsg': NoMsg
  },
  data() {
    return {
      isShowList: true,
      isShowInfo: false,
      isShowIntro: false,
      isShowRecord: false,
      vipID: '',
      noMsg: {
        type: 'myExamine',
        text: '加入学院后才会有认证资格呦，快去加入吧！'
      }
    }
  },

  methods: {
    examineListChange() {
      this.$emit('examineListChange')
    }
    // showList() {
    //   this.$bus.$emit('whichShow', 'list')
    // }
  },
  mounted() {
    this.$bus.$on('whichShow', data => {
      this.vipID = data.id
      this.isShowList = false
      this.isShowInfo = false
      this.isShowIntro = false
      this.isShowRecord = false
      switch (data.name) {
        case 'list':
          this.isShowList = true
          break
        case 'info':
          this.isShowInfo = true
          break
        case 'intro':
          this.isShowIntro = true
          break
        case 'record':
          this.isShowRecord = true
          this.$bus.$emit('examineRecord')
          break
        default:
          break
      }
    })
  }
}
</script>
