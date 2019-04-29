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
          <el-input v-model="updateTimeForm.name" disabled></el-input>
        </div>
      </div>
      <div class="con-item clearfix">
        <div class="fl">咨询时长：</div>
        <div class="fr">
          <el-input v-model="updateTimeForm.courseTimeName" disabled></el-input>
        </div>
      </div>
      <div class="con-item clearfix">
        <div class="fl">预约开始时间：</div>
        <div class="fr">
          <el-input v-model="updateTimeForm.startTime" disabled></el-input>
        </div>
      </div>
      <div class="con-item clearfix" v-if="selectTime">
        <div class="fl">期待修改时间：</div>
        <div class="fr selectFr">
          <el-radio-group v-model="updateTimeForm.timeType">
            <el-radio label="1">按照未预约时间表选择时间</el-radio>
            <el-radio label="2">自定义时间</el-radio>
          </el-radio-group>
          <div class="selectBT" v-if="updateTimeForm.timeType==1">
            <el-select v-model="updateTimeForm.nextTime" placeholder="请选择" @change="handleselectChange">
              <el-option v-for="item in appointTimeList" :key="item.id" :label="item.start_time" :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="selectBT" v-if="updateTimeForm.timeType==2">
            <el-date-picker v-model="updateTimeForm.appointmentDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="请选择开始日期" :picker-options="pickerOptions">
            </el-date-picker>
            <el-time-select v-model="updateTimeForm.appointmentTime" :picker-options="{start: '08:00',step: '01:00',end: '20:00'}" placeholder="请选择开始时间">
            </el-time-select>
          </div>

        </div>
      </div>
      <div class="textarea clearfix">
        <p class="fl">咨询问题概述：</p>
        <ul>
          <li v-for="(item,index) in questionList" :key="index">{{index+1+'、'}}{{item}}</li>
        </ul>
      </div>
      <div class="textarea clearfix">
        <p class="fl">修改原因描述：</p>
        <textarea placeholder="例：与用户电话协调，进行时间调整。" v-model="updateTimeForm.describe"></textarea>
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
          <p>尊敬的导师，您期望将学员{{updateTimeForm.name}}的直播咨询时间调整为{{updateTimeForm.timeType==1?successTime:updateTimeForm.customTime}}，
            我们会在12个小时内联系您并确定时间。
          </p>
          <span class="btn" @click="handleGoTo('list')">返回个人中心</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { myTeacher } from "~/lib/v1_sdk/index";
import { message, IEPopup, Trim } from "~/lib/util/helper";

export default {
  props: ["timeID"],
  data () {
    return {
      successTime: "",
      isShowPop: false,
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() <= Date.now();
        }
      },
      changeTimeData: false,
      selectTime: true,
      updateTimeForm: {
        name: "", //姓名
        appointmentDate: "", //自定义预约开始日期
        appointmentTime: "", //自定义预约开始时间
        startTime: "", //预约开始时间
        courseTimeName: "50分钟", //咨询时长（固定）
        describe: "", //修改原因描述
        nextTime: "",
        timeType: "1", //期待修改时间的方式
        customTime: "" //自定义时间 字符串
      },
      appointTimeList: [],
      questionList: []
    };
  },
  watch: {
    "updateTimeForm.timeType" (val) {
      if (val == 1) {
        this.updateTimeForm.appointmentDate = "";
        this.updateTimeForm.appointmentTime = "";
      } else {
        this.updateTimeForm.nextTime = "";
      }
    }
  },
  methods: {
    handleselectChange (val) {
      this.updateTimeForm.nextTime = val;
    },
    handleGoTo (url) {
      let obj = { name: url };
      this.$bus.$emit("gotoURL", obj);
      IEPopup("pane-tab-thirteenth", "relative", 1);
    },
    validate () {
      try {
        if (this.updateTimeForm.timeType == "1") {
          if (this.updateTimeForm.nextTime == "") throw "请选择期待修改时间";
        }
        if (this.updateTimeForm.timeType == "2") {
          if (this.updateTimeForm.appointmentDate == "")
            throw "请选择自定义日期";
          if (this.updateTimeForm.appointmentTime == "")
            throw "请选择自定义时间";
        }
        if (Trim(this.updateTimeForm.describe) == "") throw "请描述修改原因";
      } catch (error) {
        message(this, "error", error);
        return false;
      }
      this.submit();
    },
    submit () {
      this.updateTimeForm.customTime =
        this.updateTimeForm.appointmentDate +
        " " +
        this.updateTimeForm.appointmentTime;
      this.updateTimeForm.id = this.timeID;
      console.log(this.updateTimeForm);

      myTeacher.doModifyBespokeTime(this.updateTimeForm).then(res => {
        if (res.status == 0) {
          this.isShowPop = true;
          IEPopup("pane-tab-thirteenth", "-ms-page", 0);
          //提交成功弹窗所需时间
          this.appointTimeList.forEach(item => {
            if (item.id == this.updateTimeForm.nextTime) {
              this.successTime = item.start_time;
            }
          });
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    changeTime () {
      this.selectTime = !this.selectTime;
    },
    getData () {
      myTeacher.modifyBespokeTime({ id: this.timeID }).then(res => {
        if (res.status == 0) {
          let data = res.data.bespokeDetail;
          this.updateTimeForm.name = data.real_name;
          this.updateTimeForm.startTime = data.start_time;
          this.appointTimeList = res.data.otherTimeList;
          this.questionList = res.data.bespokeDetail.ask_question;
        }
      });
    }
  },
  mounted () {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/profile/myTeacher/updateTable";
</style>

