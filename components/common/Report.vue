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
export default {
  props: ['config'],
  data() {
    return {
      showReportBug: false,
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
      this.showReportBug = false
      this.problem.content = ''
    },
    // 反馈问题
    reportProblem() {
      if (this.config.type === 1) {
        this.problem.curriculumId = persistStore.get('curriculumId')
        this.problem.curriculumcatalogid = persistStore.get('catalogId')
        this.problem.types = 1
      } else if (this.config.type === 2) {
        this.problem.curriculumId = ''
        this.problem.curriculumcatalogid = ''
        this.problem.types = 2
      }

      home.reportProblem(this.problem).then(response => {
        if (response.status === '100100') {
          this.$message({
            showClose: true,
            type: 'success',
            message: response.msg
          })
        } else {
          this.closeReport()
          this.$message({
            showClose: true,
            type: 'success',
            message: response.msg
          })
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
.reportBug {
  // display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 99999;
  .note {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -128px;
    margin-left: -180px;
    width: 360px;
    background-color: #fff;
    border-radius: 10px;
    padding: 0 20px;
    h4 {
      line-height: 62px;
      color: #222;
      font-size: 16px;
      i {
        font-size: 30px;
        margin-top: 15px;
        color: #6417a6;
      }
    }
    .el-textarea__inner {
      width: 100%;
      font-size: 12px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #bbbbbb;
    }
    .commitBug {
      text-align: center;
      margin: 30px 0;
      .el-button {
        border: none;
        transition: background 300ms;
        background-color: #6417a6;
        &:hover {
          background-color: #8f4acb;
        }
      }
      button {
        width: 160px;
        height: 40px;
        border-radius: 20px;
        color: #fff;
      }
    }
  }
}
</style>