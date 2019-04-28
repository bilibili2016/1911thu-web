<template>
  <div class="appointment">
    <div class="content">
      <h3>预约咨询</h3>
      <i class="el-icon-close" @click="closeForm"></i>
      <p class="tips">亲爱的学员，欢迎您使用预约咨询服务，请选择您方便接收回复的时间段，<br>
        我们将会在此时间段通过视频直播的方式为您提供一对一的咨询服务！</p>
      <div class="con-item name clearfix">
        <div class="fl">您的联系方式：</div>
        <div class="fr">
          <el-input v-model="teacherForm.tel" :disabled="teacherForm.hasTel" placeholder="请填写您的联系方式"></el-input>
        </div>
      </div>
      <div class="con-item name clearfix">
        <div class="fl">真实姓名：</div>
        <div class="fr">
          <el-input v-model="teacherForm.name" :disabled="teacherForm.hasName" placeholder="请填写您的用户昵称"></el-input>
        </div>
      </div>
      <div class="con-item name clearfix">
        <div class="fl">预约咨询的导师：</div>
        <div class="fr">
          <el-input v-model="teacherForm.teacherName" disabled></el-input>
        </div>
      </div>
      <div class="con-item name clearfix">
        <div class="fl">咨询时长：</div>
        <div class="fr">
          <el-input class="min" v-model="teacherForm.courseTimeName" disabled></el-input>
        </div>
      </div>
      <div class="con-item name clearfix">
        <div class="fl">请选择开始时间：</div>
        <div class="fr">
          <el-select v-model="teacherForm.startTime" placeholder="请选择开始时间">
            <el-option v-for="item in timeList" :key="item.id" :label="item.start_time" :value="item.id">
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- <div class="con-item name clearfix">
        <div class="fl">请选择咨询日期：</div>
        <div class="fr">
          <el-date-picker v-model="teacherForm.appointmentDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="请选择开始日期" :picker-options="pickerOptions">
          </el-date-picker>
          <el-time-select v-model="teacherForm.appointmentTime" :picker-options="{start: '08:00',step: '01:00',end: '20:00'}" placeholder="请选择开始时间">
          </el-time-select>
        </div>
      </div> -->
      <!-- <div class="con-item clearfix">
        <div class="fl">请选择咨询的问题：</div>
        <div class="fr selectFr">
          <el-select v-model="teacherForm.problems" multiple collapse-tags placeholder="请选择">
            <el-option v-for="item in problems" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div> -->
      <div class="textarea">
        <p>请简单描述您想要咨询的问题</p>
        <textarea placeholder="请输入您想要咨询的问题，预约成功，导师将一对一解答。" v-model="teacherForm.remark"></textarea>
      </div>
      <div class="agreement">
        <el-checkbox v-model="teacherForm.checked">我已阅读并同意</el-checkbox><i @click="serviceAgreement">《服务协议》</i>
        <span class="cost">咨询费用100元</span>
      </div>
      <div class="btns">
        <span class="btn save active " @click="validate">提交</span>
      </div>
    </div>
  </div>
</template>

<script>
import { message, Trim } from "~/lib/util/helper";
import { teacherInfo } from "~/lib/v1_sdk/index";
export default {
  props: ["teacherInfo", "userInfo"],
  data () {
    return {
      teacherForm: {
        teacherId: "", //导师ID
        name: "", //姓名
        tel: "", //手机号
        teacherName: "",
        startTime: "",
        courseTimeName: "50分钟", //授课时长
        remark: "", //其他需求
        problems: "",
        checked: false,
        hasTel: true,
        hasName: false
      },
      problems: [],
      timeList: []
    };
  },
  methods: {
    closeForm () {
      this.$emit("closeForm");
    },
    // 提交数据
    validate () {
      //   const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
      try {
        if (Trim(this.teacherForm.tel) === "") throw "请填写手机号码";
        // if (!this.teacherForm.hasTel) {
        //   if (!telReg.test(Trim(this.teacherForm.tel)))
        //     throw "请填写正确的手机号码";
        // }
        if (Trim(this.teacherForm.name) === "") throw "请填写姓名";
        if (this.teacherForm.startTime === "") throw "请选择咨询开始时间";
        // if (this.teacherForm.problems === "") throw "请选择您想要咨询的问题";
        if (this.teacherForm.remark === "") throw "请简单描述您想要咨询的问题";
        if (!this.teacherForm.checked) throw "请先阅读《服务协议》";
      } catch (err) {
        message(this, "error", err);
        return false;
      }
      this.appointmentTeacher();
    },
    // 提交预约导师
    appointmentTeacher () {
      teacherInfo.teacherBespoke(this.teacherForm).then(response => {
        //不需要验证是否登录
        if (response.status === 0) {
          this.closeForm();
          this.$emit("goPay", response.data.id);
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    update () {
      this.teacherForm.name = this.userInfo.real_name;
      this.teacherForm.tel = this.userInfo.user_name;
      if (this.teacherForm.name) {
        this.teacherForm.hasName = true;
      }
    },
    teacherBespokeInfo () {
      teacherInfo.teacherBespokeInfo(this.teacherForm).then(response => {
        //不需要验证是否登录
        if (response.status === 0) {
          this.timeList = response.data.timeList;
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    serviceAgreement () {
      // console.log(123123123123);
    }
  },
  watch: {
    userInfo () {
      this.update();
    }
  },
  mounted () {
    this.teacherForm.teacherName = this.teacherInfo.teacher_name;
    this.teacherForm.teacherId = this.teacherInfo.id;
    this.update();
    this.teacherBespokeInfo();
  }
};
</script>

<style scoped lang="scss">
@import "assets/style/teacher/appointmentTeacher";
</style>