<template>
  <div>
    <div class="reportBug" v-show="showReportBug">
      <div class="note">
        <h4>报告问题
          <i @click="closeReport" class="el-icon-close fr"></i>
        </h4>
        <el-input type="textarea" :rows="4" placeholder="请详细描述您遇到的问题" v-model="problem.content">
        </el-input>
        <div class="commitBug">
          <el-button @click="reportProblem">提交</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { home } from '~/lib/v1_sdk/index'
import { splitUrl, message } from '@/lib/util/helper'
export default {
  props: ['config', 'showReportBug', 'problem'],
  data() {
    return {}
  },
  methods: {
    closeReport() {
      this.$emit('closeReport')
    },
    // 反馈问题
    reportProblem() {
      this.$emit('reportProblem')
    }
  },
  mounted() {}
}
</script>
<style scoped lang="scss">
@import '~assets/style/components/report';
</style>
