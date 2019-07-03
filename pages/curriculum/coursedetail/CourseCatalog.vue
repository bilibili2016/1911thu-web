<template>
  <el-tabs class="content" v-model="activeNames" @tab-click="selectActiveTab">
    <el-tab-pane label="课程简介" name="first">
      <div class="detailWord descript" v-html="courseList.content" v-loading="loadMsg"></div>
    </el-tab-pane>
    <el-tab-pane label="课程目录" name="second">
      <v-line :catalogs="catalogs" :privileMsg="privileMsg" :config="config" :changeImg="changeImg"></v-line>
    </el-tab-pane>
    <el-tab-pane label="用户评论" name="third">
      <v-userevaluate :totalEvaluateInfo="totalEvaluateInfo" :commentator="commentator" :loadEvaluate="loadEvaluate" :pageCount="pageCount" :sumUserStart="sumUserStart" :pagemsg="pagemsg" @pagechange="pagechange"></v-userevaluate>
    </el-tab-pane>
    <el-tab-pane label="资料下载" name="four">
      <v-download :isConfig="isConfig" :privileMsg="privileMsg" :detailInfo="courseList"></v-download>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
/**
 * 组件名字
 */
import CustomLine from '@/components/common/Line.vue'
import Download from '@/components/common/DataDownload.vue'
import UserEvaluate from '@/pages/curriculum/coursedetail/UserEvaluate.vue'
export default {
  components: {
    'v-line': CustomLine,
    'v-userevaluate': UserEvaluate,
    'v-download': Download
  },
  props: [
    'activeName',
    'courseList',
    'loadMsg',
    'catalogs',
    'privileMsg',
    'config',
    'changeImg',
    'totalEvaluateInfo',
    'commentator',
    'loadEvaluate',
    'pageCount',
    'sumUserStart',
    'pagemsg'
  ],
  data () {
    return {
      isConfig: true,
      activeNames: 'first'
    }
  },
  methods: {
    // 分页事件
    pagechange (val) {
      this.$emit('pagechange', val)
    },
    selectActiveTab (tab) {
      this.$emit('selectActiveTab', tab.name)
    }
  },
  mounted () {
    this.activeNames = this.activeName
  }
}
</script>

