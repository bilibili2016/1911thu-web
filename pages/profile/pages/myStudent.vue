<template>
  <!-- 我的咨询 -->
  <el-card class="changeNav">
    <el-tabs v-model="activeName" @tab-click="handleActive">
      <!-- 未开始 -->
      <el-tab-pane label="未开始" name="first" value="1">
        <v-part :teacherData="data" :config="config"></v-part>
      </el-tab-pane>
      <!-- 已完成 -->
      <el-tab-pane label="已完成" name="second" value="2">
        <v-part :teacherData="data" :config="config"></v-part>
      </el-tab-pane>
      <!-- 已失效 -->
      <el-tab-pane label="已失效" name="fourth" value="3">
        <v-part :teacherData="data" :config="config"></v-part>
      </el-tab-pane>
    </el-tabs>
    <!-- <div class="timeTable">
      <div class="top clearfix">
        <div class="left"><span>教师入口 > </span> <span> 预约时间表</span></div>
        <div class="right"> <img src="https://static-image.1911edu.com/myTeacher-icon1.png" alt=""> <span class="right">录入可预约时间</span></div>
      </div>
      <div class="table">
        <div class="con">
          <table>
            <tr>
              <th>预约日期</th>
              <th>开始时间</th>
              <th>预约咨询时长</th>
              <th>真实姓名</th>
              <th>预约状态</th>
              <th>操作</th>
            </tr>
            <tr>
              <td>2019年04月29日</td>
              <td>11:30</td>
              <td>50min</td>
              <td>章三</td>
              <td class="unconfirmed">未确认</td>
              <td>
                <span class="operate accept">接受邀请</span>
                <span class="operate update">申请修改时间</span>
              </td>
            </tr>
            <tr>
              <td>2019年4月1日</td>
              <td>11:30</td>
              <td>50min</td>
              <td>章三</td>
              <td class="confirmed">已确认</td>
              <td></td>
            </tr>
            <tr>
              <td>2019年4月1日</td>
              <td>11:30</td>
              <td>50min</td>
              <td>章三</td>
              <td>未预约</td>
              <td></td>
            </tr>
            <tr>
              <td>2019年4月1日</td>
              <td>11:30</td>
              <td>50min</td>
              <td>章三</td>
              <td>未预约</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div> -->
  </el-card>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import NoMsg from "@/pages/profile/components/common/noMsg.vue";
import Part from "@/pages/profile/components/common/Part.vue";

export default {
  props: ["data"],
  components: {
    "v-nomsg": NoMsg,
    "v-part": Part,
  },
  data () {
    return {
      activeName: "first",
      config: {
        isTeacher: false
      },
      getData: {
        statusType: 1,
        type: 1
      }
    };
  },
  methods: {
    handleActive (item) {
      this.getData.statusType = item.$attrs.value;
      this.getTeacherData(this.getData);
    },
    getTeacherData (data) {
      this.$emit("getTeacherData", data);
    }
  }
};
</script>
<style lang="scss" scoped>
// @import "~assets/style/profile/myTeacher/timeTable";
</style>
