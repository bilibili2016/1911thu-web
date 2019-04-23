<template>
  <div class="updateTable">
    <div class="con-item clearfix">
      <div class="fl">学员姓名：</div>
      <div class="fr">
        <el-input v-model="teacherForm.name"></el-input>
      </div>
    </div>
    <div class="con-item clearfix">
      <div class="fl">咨询时长：</div>
      <div class="fr">
        <el-input v-model="teacherForm.courseTimeName"></el-input>
      </div>
    </div>
    <div class="con-item clearfix">
      <div class="fl">预约开始时间：</div>
      <div class="fr">
        <el-input v-model="teacherForm.startTime" disabled></el-input>
      </div>
    </div>
    <div class="con-item clearfix">
      <div class="fl">期待修改时间：</div>
      <div class="fr">
        <el-date-picker v-model="teacherForm.appointmentDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="请选择开始日期" :picker-options="pickerOptions">
        </el-date-picker>
        <el-time-select v-model="teacherForm.appointmentTime" :picker-options="{start: '08:00',step: '01:00',end: '20:00'}" placeholder="请选择开始时间">
        </el-time-select>
      </div>
    </div>
    <div class="textarea clearfix">
      <p class="fl">咨询问题概述：</p>
      <textarea placeholder="请输入您想要咨询的问题，预约成功，导师将一对一解答。" v-model="teacherForm.problems"></textarea>
    </div>
    <div class="textarea clearfix">
      <p class="fl">修改原因描述：</p>
      <textarea placeholder="例：与用户电话协调，进行时间调整。" v-model="teacherForm.describe"></textarea>
    </div>
    <div class="btns">
      <span class="btn" @click="validate">提交申请</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() <= Date.now();
        }
      },
      teacherForm: {
        teacherId: "", //导师ID
        name: "", //姓名
        tel: "", //手机号
        teacherName: "",
        appointmentDate: "", //预约开始时间
        appointmentTime: "", //预约结束时间
        startTime: "",
        courseTimeName: "", //授课时长
        describe: "",
        problems: "",
        checked: false,
        hasTel: true,
        hasName: false
      },
    }
  },
  mounted () {

  },
  methods: {
    validate () {

    }
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/style/profile/myTeacher/updateTable";
</style>

