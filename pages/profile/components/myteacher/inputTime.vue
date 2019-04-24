<template>
  <div class="inputTime">
    <h4>
      <span @click="handleGoTo('list')">教师入口 ></span>
      <span @click="handleGoTo('timeTable')"> 预约时间表 ></span>
      <span class="active"> 录入可预约时间</span>
    </h4>
    <div class="con-item">
      <div class="left">请选择可以预约的日期：</div>
      <div class="right">
        <el-date-picker v-model="teacherForm.date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="请选择开始日期" :picker-options="pickerOptions">
        </el-date-picker>
      </div>
    </div>
    <div class="con-item">
      <div class="left">请选择可以预约的时间段：</div>
      <div class="right">
        <el-time-select placeholder="起始时间" v-model="teacherForm.startTime" :picker-options="{start: '08:00',step: '01:00',end: '22:00'}">
        </el-time-select>
        <span class="separated">----</span>
        <el-time-select placeholder="结束时间" v-model="teacherForm.endTime" :picker-options="{start: '08:00',step: '01:00',end: '22:00',minTime: teacherForm.startTime}">
        </el-time-select>
      </div>
    </div>
    <div class="btns">
      <span class="btn" @click="validate">确定</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() <= Date.now();
        }
      },
      teacherForm: {
        date: "",
        startTime: "",
        endTime: ""
      }
    };
  },
  methods: {
    handleGoTo(url) {
      let obj = { name: url };
      this.$bus.$emit("gotoURL", obj);
    },
    validate() {
      this.handleGoTo("timeTable");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/profile/myTeacher/inputTime";
</style>

