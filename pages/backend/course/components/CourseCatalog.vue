<template>
  <div>
    <el-tabs v-model="activeNames">
      <el-tab-pane label="课程简介" name="first">
        <div class="detailWord descript" v-html="courseList.content" v-loading="loadMsg"></div>
      </el-tab-pane>
      <el-tab-pane label="课程目录" name="second">
        <v-line :catalogs="catalogs" :config="config" :changeImg="changeImg"></v-line>
      </el-tab-pane>
      <el-tab-pane label="用户评论" name="third">
        <v-userevaluate
          :totalEvaluateInfo="totalEvaluateInfo"
          :commentator="commentator"
          :loadEvaluate="loadEvaluate"
          :pageCount="pageCount"
          :sumUserStart="sumUserStart"
          :pagemsg="pagemsg"
          @pagechange="pagechange"
        ></v-userevaluate>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/**
 * 组件名字
 */
import CustomLine from '@/pages/backend/course/components/Line.vue'
import UserEvaluate from '@/pages/course/coursedetail/UserEvaluate.vue'
export default {
  components: {
    'v-line': CustomLine,
    'v-userevaluate': UserEvaluate
  },
  props: [
    'activeName',
    'courseList',
    'loadMsg',
    'catalogs',
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
      activeNames: 'first'
    }
  },
  methods: {
    // 分页事件
    pagechange (val) {
      this.$emit('pagechange', val)
    }
  },
  mounted () {
    this.activeNames = this.activeName
  }
}
</script>

