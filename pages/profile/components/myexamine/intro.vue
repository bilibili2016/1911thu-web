<template>
    <!-- 认证资格介绍 -->
    <div class="examine-intro">
        <div class="examine-top">
            <span class="goBack" @click="handleBack">
                <i class=" el-icon-arrow-left icon"></i>认证资格介绍
            </span>
        </div>
        <div class="bottom">
            <div class="examine-btn " @click="handleExamine">开始考试</div>
        </div>
    </div>
</template>
<script>
import { examine } from '~/lib/v1_sdk/index'
import { message, matchSplits, getNet } from '@/lib/util/helper'
export default {
  props: ['vipId'],
  data() {
    return {
      vipForm: {
        vipId: ''
      }
    }
  },
  methods: {
    handleBack() {
      this.$bus.$emit('whichShow', 'info')
    },
    handleExamine() {
      this.vipForm.vipId = vipId
      examine.createExamRecordQuestion(this.vipForm).then(response => {
        if (response.status == 0) {
          this.$router.push(
            '/profile/components/myexamine/answerQuestion?id=' +
              response.data.exam_record_id
          )
        } else {
          message(this, 'error', response.msg)
        }
      })
    }
  }
}
</script>