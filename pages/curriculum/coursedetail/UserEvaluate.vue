<template>
  <div class="evaluate " v-loading="loadEvaluate ">
    <!-- pageCount 评论条数 -->
    <div v-loading="loadMsg">{{loadMsg}}
      <div class="score clearfix">
        <span class="fl">{{totalEvaluateInfo.totalEvaluate}}人评价
          <i>好评度{{totalEvaluateInfo.evaluatePercent}}%</i>
        </span>
        <el-rate disabled v-model="sumUserStart" class="itemBox-rate fl"></el-rate>
        <span class="fr">总评分：{{totalEvaluateInfo.totalScore}}</span>
      </div>
      <!-- 评价内容组件 -->
      <v-evaluate :evaluteData="commentator"></v-evaluate>
      <div class="pagination course-style " v-if="pageCount>3">
        <el-pagination :id="pagemsg.total " v-show="pagemsg.total!='0' " background layout="prev, pager, next " :page-size="pagemsg.pagesize " :page-count="pagemsg.pagesize " :current-page="pagemsg.page " :total="pagemsg.total " @current-change="handleCurrentChange"></el-pagination>
      </div>
      <div class="noEvl" v-else>—— 暂无更多评论 ——</div>
    </div>
  </div>
</template>

<script>
import EvaluateContent from '@/components/common/EvaluateContent.vue'
export default {
  props: [
    'totalEvaluateInfo',
    'commentator',
    'loadEvaluate',
    'pageCount',
    'loadMsg',
    'sumUserStart',
    'pagemsg'
  ],
  components: {
    'v-evaluate': EvaluateContent
  },
  methods: {
    // 分页事件
    handleCurrentChange (val) {
      this.$emit('pagechange', val)
    }
  }
}
</script>

<style scoped>
</style>
