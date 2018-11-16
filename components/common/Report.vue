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
import { matchSplits, message, Trim } from '@/lib/util/helper'
export default {
  props: ['config', 'showReportBug'],
  data() {
    return {
      problem: {
        types: 1,
        curriculumId: null,
        content: '',
        curriculumcatalogid: ''
      }
    }
  },
  methods: {
    closeReport() {
      this.$emit('closeReport')
      this.problem.content = ''
    },
    // 反馈问题
    reportProblem() {
      if (this.config.type === 1) {
        this.problem.curriculumId = matchSplits('order')
        this.problem.curriculumcatalogid = persistStore.get('catalogId')
        this.problem.types = 1
      } else if (this.config.type === 2) {
        this.problem.curriculumId = this.config.curriculumId
        this.problem.curriculumcatalogid = this.config.catalogId
        this.problem.types = 2
      }

      if (Trim(this.problem.content) === '') {
        message(this, 'error', '请输入要反馈的问题！')
        return false
      }
      this.problem.content = Trim(this.problem.content)
      home.reportProblem(this.problem).then(response => {
        this.$emit('closeReport')
        if (response.status === 100100) {
          message(this, 'error', response.msg)
        } else if (response.status === 0) {
          this.closeReport()
          message(this, 'success', '提交成功，我们会尽快解决！')
        }
        if (this.word === '') {
          return
        }
      })
    }
  },
  mounted() {
    this.$bus.$on('openReport', data => {
      this.showReportBug = true
    })
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/components/report';
</style>
