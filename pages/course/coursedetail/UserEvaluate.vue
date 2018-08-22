<template>
  <div class="evaluate " v-loading="loadEvaluate ">
    <h4>用户评价
      <span v-if="pageCount>3" @click="getMore">查看更多></span>
    </h4>
    <div v-loading="loadMsg">
      <div class="score">
        <span class="fl">{{totalEvaluateInfo.totalScore}}</span>
        <el-rate disabled v-model="sumUserStart" class="itemBox-rate fl"></el-rate>
        <span class="fr">{{totalEvaluateInfo.totalEvaluate}}人评价 好评度{{totalEvaluateInfo.evaluatePercent}}%</span>
      </div>
      <!-- 评价内容组件 -->
      <v-evaluate :evaluteData="commentators"></v-evaluate>
    </div>
  </div>
</template>

<script>
import EvaluateContent from '@/components/common/EvaluateContent.vue'
export default {
  props: [
    'totalEvaluateInfo',
    'commentators',
    'loadEvaluate',
    'pageCount',
    'loadMsg',
    'sumUserStart'
  ],
  components: {
    'v-evaluate': EvaluateContent
  },
  methods: {
    getMore() {
      this.$emit('more')
    }
  }
}
</script>

<style scoped>
</style>
