<template>
  <!-- 考试记录 -->
  <div class="examineRecord">
    <div class="examine-top">
      <span class="goBack" @click="handleBack">
        <i class=" el-icon-arrow-left icon"></i>考试记录
      </span>
    </div>
    <div class="bottom">
      <div class="tables">
        <table class="recordTable">
          <tr class="tr_header">
            <th>考试科目</th>
            <th>时间</th>
            <th>成绩</th>
            <th>等级</th>
          </tr>
          <tr class="tr_body" v-for="(record,index) in recordData" :key="index">
            <td>{{record.exam_name}}</td>
            <td>{{record.create_time}}</td>
            <td>{{record.total_score}}</td>
            <td v-if="record.total_score>=85">优秀</td>
            <td v-if="record.total_score<85 && record.total_score>=75">良好</td>
            <td v-if="record.total_score<75 && record.total_score>=60">及格</td>
            <td v-if="record.total_score<60">不及格</td>
          </tr>
        </table>
      </div>
    </div>
  </div>

</template>
<script>
import { certificate } from '~/lib/v1_sdk/index'

export default {
  data() {
    return {
      recordData: [],
      logForm: {
        page: 1,
        limit: 5
      }
    }
  },
  methods: {
    handleBack() {},
    examRecordLog() {
      certificate.examRecordLog(this.logForm).then(res => {
        if (res.status == 0) {
          this.recordData = res.data.examRecordLogList
          console.log(res)
        }
      })
    }
  }
}
</script>