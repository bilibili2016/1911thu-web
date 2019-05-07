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
        <el-date-picker v-model="appointTimeForm.date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="请选择开始日期" :picker-options="pickerOptions">
        </el-date-picker>
      </div>
    </div>
    <div class="con-item">
      <div class="left">请选择可以预约的时间段：</div>
      <div class="right">
        <el-time-select placeholder="起始时间" v-model="appointTimeForm.startTime" :picker-options="{start: '08:00',step: '01:00',end: '21:00'}" @change="handleChange">
        </el-time-select>
        <span class="separated">----</span>
        <el-time-select placeholder="结束时间" v-model="appointTimeForm.endTime" :picker-options="{start: computedTime,step: '01:00',end: '22:00',}">
        </el-time-select>
      </div>
    </div>
    <div class="btns">
      <!-- <span class="btn" @click="next()">下一步</span> -->
      <span class="btn" @click="validate">确定</span>
    </div>
  </div>
</template>
<script>
import { myTeacher } from "~/lib/v1_sdk/index";
import { message } from "~/lib/util/helper";

export default {
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() <= Date.now();
        }
      },
      appointTimeForm: {
        date: "",
        startTime: "",
        endTime: ""
      },
      form: {
        date: "",
        startTime: "",
        endTime: ""
      },
      computedTime: ""
    };
  },
  methods: {
    handleChange () {
      this.appointTimeForm.endTime = "";
      let time = parseInt(this.appointTimeForm.startTime.split(":")[0]) + 1;
      this.computedTime = time < 10 ? `0${time}:00` : `${time}:00`;
    },
    handleGoTo (url) {
      let obj = { name: url };
      this.$bus.$emit("gotoURL", obj);
    },
    next(){
     try {
        if (this.appointTimeForm.date == "") throw "请选择可以预约的日期";
        if (this.appointTimeForm.startTime == "")
          throw "请选择可以预约的开始时间";
        if (this.appointTimeForm.endTime == "")
          throw "请选择可以预约的结束时间";
      } catch (error) {
        message(this, "error", error);
        return false
      }
      let obj = { name: 'previewTimeTable' };
      this.$bus.$emit("gotoURL", obj);
    },
    validate () {
       try {
        if (this.appointTimeForm.date == "") throw "请选择可以预约的日期";
        if (this.appointTimeForm.startTime == "")
          throw "请选择可以预约的开始时间";
        if (this.appointTimeForm.endTime == "")
          throw "请选择可以预约的结束时间";
      } catch (error) {
        message(this, "error", error);
        return false
      }
      this.form.date = this.appointTimeForm.date;
      this.form.startTime = this.appointTimeForm.startTime.split(":")[0];
      this.form.endTime = this.appointTimeForm.endTime.split(":")[0];
      myTeacher.doBespokeTime(this.form).then(res => {
        if (res.status == 0) {
          this.handleGoTo("timeTable");
        } else {
          message(this, "error", res.msg);
        }
      });
    }
  },
  mounted(){
     this.$bus.$on('confirmInput',()=>{
      this.validate();
    })
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/profile/myTeacher/inputTime";
</style>

