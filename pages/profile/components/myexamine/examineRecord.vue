<template>
  <!-- 考试记录 -->
  <div class="examineRecord">
    <div class="examine-top clearfix">
      <span class="goBack" @click="handleBack">
        <i class=" el-icon-arrow-left icon"></i>考试记录
      </span>
      <span v-if="restExamineTime!=0 && isApplyExam==0 && examPrivilege" class="goExamine" @click="gotoExamine">去考试（剩余{{restExamineTime}}次）></span>
    </div>
    <div class="bottom">
      <div class="tables">
        <table class="recordTable">
          <tr class="tr_header">
            <th>考试类型</th>
            <th>考试科目</th>
            <th>时间</th>
            <th>成绩</th>
            <th>等级</th>
          </tr>
          <tr class="tr_body" v-for="(record,index) in recordData" :key="index">
            <td v-if="record.type=='1'">正式</td>
            <td v-else>模拟</td>
            <td>{{record.exam_name}}</td>
            <td>{{exchangeTime(record.create_time)}}</td>
            <td>{{record.total_score}}</td>
            <td>{{record.score_rank?record.score_rank:""}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>

</template>
<script>
import { examine } from "~/lib/v1_sdk/index";
import { timestampToYMD } from "@/lib/util/helper";

export default {
  props: ["vipID"],
  data () {
    return {
      recordData: [],
      restExamineTime: "",
      isApplyExam: "",
      examPrivilege: "",
      logForm: {
        vipID: "",
        page: 1,
        limit: 5
      },
      pageData: {
        id: "",
        name: ""
      },
      responseData: {
        type: true,
        res: ""
      }
    };
  },
  methods: {
    handleBack () {
      this.pageData.name = "list";
      this.$bus.$emit("whichShow", this.pageData);
    },
    //考试记录列表
    examRecordLog () {
      this.logForm.vipID = this.vipID;
      examine.examRecordLog(this.logForm).then(res => {
        if (res.status == 0) {
          this.recordData = res.data.examRecordLogList;
          this.restExamineTime = res.data.surplusFrequency;
          this.isApplyExam = res.data.isApplyExam;
          this.examPrivilege = res.data.examPrivilege;
        } else if (res.status === 100008) {
          this.responseData.res = res;
          this.$router.push("/");
          return false;
        }
      });
    },
    //去考试
    gotoExamine () {
      this.pageData.id = this.vipID;
      this.pageData.name = "intro";
      this.$bus.$emit("whichShow", this.pageData);
    },
    // 时间戳转日期格式
    exchangeTime (time) {
      return timestampToYMD(time);
    }
  },
  mounted () {
    this.examRecordLog();

    this.$bus.$on("examineRecord", () => {
      this.examRecordLog();
    });
  }
};
</script>