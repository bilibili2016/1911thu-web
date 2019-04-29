<template>
  <div class="appointment">
    <div class="content">
      <h3>预约咨询</h3>
      <i class="el-icon-close closeAppoint" @click="closeForm"></i>
      <p class="tips">亲爱的学员，欢迎您使用预约咨询服务，请选择您方便接收回复的时间段，<br>
        我们将会在此时间段通过视频直播的方式为您提供一对一的咨询服务！</p>
      <el-form :model="teacherForm" :rules="rules" ref="teacherForm" class="teacherForm">
        <el-form-item label="您的联系方式：" prop="tel">
          <el-input v-model="teacherForm.tel" :disabled="teacherForm.hasTel"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名：" prop="name">
          <el-input v-model="teacherForm.name" :disabled="teacherForm.hasName" placeholder="请填写您的联系方式"></el-input>
        </el-form-item>
        <el-form-item label="预约咨询的导师：" prop="teacherName">
          <el-input v-model="teacherForm.teacherName" disabled></el-input>
        </el-form-item>
        <el-form-item label="咨询时长：">
          <el-input class="min" v-model="teacherForm.courseTimeName" disabled></el-input>
        </el-form-item>
        <el-form-item class="selectTime" label="请选择开始时间：" prop="startTime">
          <el-select v-model="teacherForm.startTime" placeholder="请选择开始时间" @change="handleselectChange">
            <el-option v-for="item in timeList" :key="item.id" :label="item.start_time" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="selectTime" label="请选择咨询问题：" prop="problems">
          <el-select v-model="teacherForm.problems" multiple collapse-tags placeholder="请选择咨询问题">
            <el-option v-for="item in questionList" :key="item.id" :label="item.title" :value="item.title"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="descItem" label="请输入您的想要咨询的其他问题" prop="remark">
          <el-input type="textarea" placeholder="请输入您想要咨询的问题，预约成功，导师将一对一解答。" v-model="teacherForm.remark"></el-input>
        </el-form-item>
        <el-form-item class="agreement" label="" prop="checked">
          <el-checkbox v-model="teacherForm.checked">我已阅读并同意</el-checkbox><i @click="serviceAgreement">《服务协议》</i>
          <span class="cost">咨询费用100元</span>
        </el-form-item>

        <el-form-item size="large" class="submit">
          <el-button type="primary" class="submitAble" @click="appointmentTeacher('teacherForm')" round>提交</el-button>
        </el-form-item>
      </el-form>

      <!-- <div class="con-item name clearfix">
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
      </div> -->
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
        problems: [],
        checked: [],
        hasTel: true,
        hasName: false
      },
      questionList: [],
      timeList: [],
      rules: {
        name: [
          {
            required: true,
            message: "请填写您的真实姓名",
            trigger: "blur"
          }
        ],
        tel: [
          {
            required: true,
            message: "请输入您的联系方式",
            trigger: "blur"
          }
        ],
        startTime: [
          { required: true, message: '请选择开始时间', trigger: 'change' }
        ],
        problems: [
          {
            required: true,
            message: "请选择您的想要咨询的问题",
            trigger: "blur"
          }
        ],
        remark: [
          {
            required: true,
            message: "请输入您的想要咨询的其他问题",
            trigger: "blur"
          }
        ],
        checked: [
          { type: 'array', required: true, message: '请先阅读并同意《服务协议》', trigger: 'change' }
        ]
      },
    };
  },
  methods: {
    closeForm () {
      this.$emit("closeForm");
    },
    // 提交预约导师
    appointmentTeacher (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          teacherInfo.teacherBespoke(this.teacherForm).then(response => {
            //不需要验证是否登录
            if (response.status === 0) {
              this.closeForm();
              this.$emit("goPay", response.data.id);
            } else {
              message(this, "error", response.msg);
            }
          });
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
          this.questionList = response.data.questionList;
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    handleselectChange (val) {
      this.teacherForm.startTime = val
    },
    serviceAgreement () {
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
// @import "assets/style/teacher/appointmentTeacher";
</style>