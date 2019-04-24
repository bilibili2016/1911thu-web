<template>
  <div>
    <div class="updateTable">
      <h4>
        <span @click="handleGoTo('list')">教师入口 ></span>
        <span @click="handleGoTo('timeTable')"> 预约时间表 ></span>
        <span class="active"> 申请修改时间</span>
      </h4>
      <div class="con-item clearfix">
        <div class="fl">学员姓名：</div>
        <div class="fr">
          <el-input v-model="teacherForm.name" disabled></el-input>
        </div>
      </div>
      <div class="con-item clearfix">
        <div class="fl">咨询时长：</div>
        <div class="fr">
          <el-input v-model="teacherForm.courseTimeName" disabled></el-input>
        </div>
      </div>
      <div class="con-item clearfix">
        <div class="fl">预约开始时间：</div>
        <div class="fr">
          <el-input v-model="teacherForm.startTime" disabled></el-input>
        </div>
      </div>
      <div class="con-item clearfix" v-if="selectTime">
        <div class="fl">期待修改时间：</div>
        <div class="fr selectFr">
          <el-radio-group v-model="teacherForm.updateTime">
            <el-radio label="1">按照未预约时间表选择时间</el-radio>
            <el-radio label="2">自定义时间</el-radio>
          </el-radio-group>
          <div class="selectBT" v-if="teacherForm.updateTime==1">
            <el-select v-model="teacherForm.nextTime" multiple placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectBT" v-if="teacherForm.updateTime==2">
            <el-date-picker v-model="teacherForm.appointmentDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="请选择开始日期" :picker-options="pickerOptions">
            </el-date-picker>
            <el-time-select v-model="teacherForm.appointmentTime" :picker-options="{start: '08:00',step: '01:00',end: '20:00'}" placeholder="请选择开始时间">
            </el-time-select>
          </div>

        </div>
      </div>
      <div class="textarea clearfix">
        <p class="fl">咨询问题概述：</p>
        <el-input type="textarea" disabled autosize v-model.trim="teacherForm.problems" :rows="3"></el-input>
      </div>
      <div class="textarea clearfix">
        <p class="fl">修改原因描述：</p>
        <textarea placeholder="例：与用户电话协调，进行时间调整。" v-model="teacherForm.describe"></textarea>
      </div>
      <div class="btns">
        <span class="btn" @click="validate">提交申请</span>
      </div>
    </div>
    <div class="successMask" v-if="isShowPop">
      <div class="submitSuccess">
        <div class="icon">
          <img src="@/assets/images/submit-success.png" alt="">
        </div>
        <div class="alert">提交成功！</div>
        <div class="desc">
          <p>尊敬的XXX导师，您期望将学员XXX的直播咨询时间调整为2019年3月29日10:00-10:50，
            我们会在12个小时内联系您并确定时间。
          </p>
          <span class="btn" @click="handleGoTo('list')">返回个人中心</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowPop: false,
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() <= Date.now();
        }
      },
      changeTimeData: false,
      selectTime: true,
      teacherForm: {
        teacherId: "", //导师ID
        name: "", //姓名
        tel: "", //手机号
        teacherName: "",
        appointmentDate: "", //预约开始时间
        appointmentTime: "", //预约结束时间
        startTime: "",
        courseTimeName: "50分钟", //授课时长
        describe: "",
        problems: "",
        nextTime: "",
        updateTime: "1",
        checked: false,
        hasTel: true,
        hasName: false
      },
      options: [
        {
          label: "123",
          value: "1"
        },
        {
          label: "456",
          value: "2"
        },
        {
          label: "789",
          value: "3"
        }
      ]
    };
  },
  mounted () { },
  methods: {
    handleGoTo (url) {
      let obj = { name: url };
      this.$bus.$emit("gotoURL", obj);
    },
    validate () { },
    changeTime () {
      this.selectTime = !this.selectTime;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/profile/myTeacher/updateTable";
</style>

