<template>
    <!-- 考试记录 -->
    <div class="examineRecord">
        <div class="top">
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
                        <td>{{record.title}}</td>
                        <td>{{record.time}}</td>
                        <td>{{record.record}}</td>
                        <td v-if="record.record>=85">优秀</td>
                        <td v-if="record.record<85 && record.record>=75">良好</td>
                        <td v-if="record.record<75 && record.record>=60">及格</td>
                        <td v-if="record.record<60">不及格</td>

                    </tr>

                    <!-- <v-nomsg v-if=" !recordData||recordData.length<1" class="noCodes" :config="noMsg">
                            </v-nomsg> -->

                </table>
            </div>
        </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      recordData: [
        {
          title: '干部网络学院认证',
          time: '2018-07-10',
          record: 90
        },
        {
          title: '干部网络学院认证',
          time: '2018-07-10',
          record: 80
        },
        {
          title: '干部网络学院认证',
          time: '2018-07-10',
          record: 60
        },
        {
          title: '干部网络学院认证',
          time: '2018-07-10',
          record: 59
        }
      ]
    }
  },
  methods: {
    handleBack() {}
  }
}
</script>