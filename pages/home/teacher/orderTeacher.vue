<template>
  <!-- 预约导师 -->
  <div class="beTeacher orderTeacher" @click="documentHandler">
    <div class="order-topImg">
      <h4>预约导师</h4>
      <div class="wordBox">
        <div class="">
          <div class="wordInfo">
            <div class="word-item clearfix">
              <div class="fl"><i class="red">*</i>导师姓名：</div>
              <div class="fr">{{teacherData.teacher_name}}</div>
            </div>
            <div class="word-item clearfix">
              <div class="fl">导师职称：</div>
              <div class="fr">{{teacherData.graduate}}</div>
            </div>
            <div class="word-item teacherForm clearfix">
              <div class="fl"></div>
              <div class="fr">
                <p style="margin-bottom:15px;">您可通过以下方式，联系我们预约导师</p>
                <div class="info">
                  <p><span class="courseForm">邮箱：</span><span>info@1911thu.com</span></p>
                  <p><span class="courseForm">电话：</span><span>18612651911 </span></p>
                </div>
                <p class="code"><img src="https://static-image.1911edu.com/teacherCode.png" alt=""><span>添加学堂教务微信，预约导师</span></p>
                <!-- <p><span class="courseForm">添加微信预约导师：</span><span>xuetang</span></p> -->
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="con">
      <div class="content">
        <div class="con-info">
          <div class="tip">请填写您的信息，让我们能了解您的需求并联系到您。</div>
          <div>
            <div class="con-item name clearfix">
              <div class="fl"><i class="red">*</i>姓名：</div>
              <div class="fr">
                <el-input v-model="teacherForm.name" placeholder="请填写您的姓名"></el-input>
              </div>
            </div>
            <div class="con-item name clearfix">
              <div class="fl"><i class="red">*</i>手机号：</div>
              <div class="fr">
                <el-input class="tel" v-model="teacherForm.tel" placeholder="请填写手机号"></el-input>
                <el-input class="verification" v-model="teacherForm.code" placeholder="请填写短信验证码"></el-input>
                <span class="code" @click="smsCodes">{{telCodes.getCode}}</span>
              </div>
            </div>
            <div class="con-item name clearfix">
              <div class="fl">单位名称：</div>
              <div class="fr">
                <el-input v-model="teacherForm.unit" placeholder="请填写您的单位名称"></el-input>
              </div>
            </div>
            <div class="con-item name clearfix">
              <div class="fl">职务：</div>
              <div class="fr">
                <el-input v-model="teacherForm.duty" placeholder="请填写您的职务"></el-input>
              </div>
            </div>
            <div class="con-item name clearfix">
              <div class="fl"><i class="red">*</i>常用邮箱：</div>
              <div class="fr">
                <el-input v-model="teacherForm.email" placeholder="请填写您的常用邮箱"></el-input>
              </div>
            </div>
            <div class="con-item name clearfix">
              <div class="fl">预约时间范围：</div>
              <div class="fr">
                <el-date-picker v-model="teacherForm.appointmentStartTime" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="请选择开始日期">
                </el-date-picker>
                <span class="dataPickSpan">至</span>
                <el-date-picker v-model="teacherForm.appointmentEndTime" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="请选择结束日期">
                </el-date-picker>
              </div>
            </div>
            <div class="con-item name clearfix">
              <div class="fl">授课内容：</div>
              <div class="fr">
                <el-input v-model="teacherForm.content" placeholder="请填写您希望导师授课的内容"></el-input>
              </div>
            </div>
            <div class="con-item style clearfix">
              <div class="fl">导师合作形式：</div>
              <div class="fr">
                <el-checkbox-group v-model="teacherForm.serviceName" @change="handleserviceChange">
                  <el-checkbox v-for="service in serviceList" :label="service.id" :key="service.id" @click="handleserviceClick(service)">{{service.name}}</el-checkbox>
                  <i class="el-icon-question styleAsk">
                    <div class="descript-text" style="width:530px;">
                      <div>
                        <p>线上授课：与1911学堂合作录制在线课程，学员登录1911学堂平台进行学习；</p>
                        <p>线下授课：授课地点为北京，主要形式包括大班课，小班课以及讲座；</p>
                        <p>课程顾问：亲临项目所在地，实地授课；</p>
                        <p>咨询：项目相关的课程研发、培训流程及活动设计等问题的咨询服务；</p>
                        <p>课题研究：基于客户提出的科研主题，协助客户完成相关内容的研究。</p>
                      </div>
                    </div>
                  </i>
                </el-checkbox-group>
              </div>
            </div>
            <div class="con-item clearfix">
              <div class="fl">授课对象：</div>
              <div class="fr selectFr">
                <div class="select-con ">
                  <div class="divClick" @click.stop="handlecourseObjClick">
                    <span>
                      <el-input v-model="teacherForm.courseObjName" placeholder="请选择授课对象" readonly></el-input>
                    </span>
                    <span class="pull-down">
                      <i class="el-icon-caret-bottom"></i>
                    </span>
                  </div>
                </div>
                <div class="pull-down-text" v-if="isShowObj">
                  <ul>
                    <li v-for="(item,index) in objLi" :key="index" @click.stop="chooseObj(item)">{{item.name}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="con-item clearfix">
              <div class="fl">授课人数：</div>
              <div class="fr selectFr">
                <div class="select-con ">
                  <div class="divClick" @click.stop="handleCourseNumClick">
                    <span>
                      <el-input v-model="teacherForm.courseNumName" placeholder="请选择授课人数" readonly></el-input>
                    </span>
                    <span class="pull-down">
                      <i class="el-icon-caret-bottom"></i>
                    </span>
                  </div>
                </div>
                <div class="pull-down-text" v-if="isShowNum">
                  <ul>
                    <li v-for="(item,index) in numLi" :key="index" @click.stop="chooseNum(item)">{{item.name}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="con-item clearfix">
              <div class="fl">授课时长：</div>
              <div class="fr selectFr">
                <div class="select-con ">
                  <div class="divClick" @click.stop="handleCourseTimeClick">
                    <span>
                      <el-input v-model="teacherForm.courseTimeName" placeholder="请选择授课时长" readonly></el-input>
                    </span>
                    <span class="pull-down">
                      <i class="el-icon-caret-bottom"></i>
                    </span>
                  </div>
                </div>
                <div class="pull-down-text" v-if="isShowTime">
                  <ul>
                    <li v-for="(item,index) in timeLi" :key="index" @click.stop="chooseTime(item)">{{item.name}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="con-item name clearfix">
              <div class="fl">项目预算：</div>
              <div class="fr">
                <el-input v-model="teacherForm.projectBudget" placeholder="请填写项目预算"></el-input>
              </div>
            </div>
            <div class="con-item name clearfix">
              <div class="fl">其他需求：</div>
              <div class="fr">
                <el-input v-model="teacherForm.otherNeed" placeholder="请填写其他需求"></el-input>
              </div>
            </div>
          </div>
        </div>

        <div class="btns ">
          <span class="btn save active " @click="validate">提交</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Trim, message, matchSplits, setTitle } from "~/lib/util/helper";
import { timestampToYMD } from "@/lib/util/helper";
import { teacherInfo, list } from "~/lib/v1_sdk/index";

export default {
  data () {
    return {
      isShowObj: false,
      isShowNum: false,
      isShowTime: false,
      serviceList: [],
      objLi: [],
      numLi: [],
      timeLi: [],
      teacher: {
        tids: ""
      },
      telCodes: {
        tel: "",
        types: 6,
        seconds: 30,
        getCode: "获取验证码",
        send: true
      },
      teacherData: {},
      teacherForm: {
        teacherId: "", //导师ID
        service: [], //导师服务形式id
        serviceName: [], //导师服务形式
        name: "", //姓名
        tel: "", //手机号
        code: "", //手机验证码
        unit: "", //单位名称
        duty: "", //职务
        email: "", //常用邮箱
        appointmentStartTime: "", //预约开始时间
        appointmentEndTime: "", //预约结束时间
        content: "", //授课内容
        courseObj: "", //授课对象
        courseObjName: "", //授课对象展示
        courseNum: "", //授课人数id
        courseNumName: "", //授课人数
        courseTime: "", //授课时长id
        courseTimeName: "", //授课时长
        projectBudget: "", //项目预算
        otherNeed: "" //其他需求
      }
    };
  },
  methods: {
    //授课人数 点击
    handleCourseNumClick () {
      this.isShowNum = !this.isShowNum;
      this.isShowArea = false;
      this.isShowTime = false;
    },
    //授课对象 点击
    handlecourseObjClick () {
      this.isShowNum = false;
      this.isShowObj = !this.isShowObj;
      this.isShowTime = false;
    },
    //授课时长 点击
    handleCourseTimeClick () {
      this.isShowNum = false;
      this.isShowObj = false;
      this.isShowTime = !this.isShowTime;
    },
    documentHandler (e) {
      this.isShowNum = false;
      this.isShowObj = false;
      this.isShowTime = false;
    },
    //授课人数-分类-下拉选项点击
    chooseNum (val) {
      this.teacherForm.courseNum = val.id;
      this.teacherForm.courseNumName = val.name;
      this.isShowNum = false;
    },
    //授课对象-分类-下拉选项点击
    chooseObj (val) {
      this.teacherForm.courseObj = val.id;
      this.teacherForm.courseObjName = val.name;
      this.isShowObj = false;
    },
    //授课时长-分类-下拉选项点击
    chooseTime (val) {
      this.teacherForm.courseTime = val.id;
      this.teacherForm.courseTimeName = val.name;
      this.isShowTime = false;
    },
    //多选框
    handleserviceChange (val) {
      this.teacherForm.service = val;
      //   console.log(this.teacherForm.service)
    },

    //表单验证
    validate () {
      const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;

      let start = new Date(this.teacherForm.appointmentStartTime).getTime();
      let end = new Date(this.teacherForm.appointmentEndTime).getTime();
      try {
        if (Trim(this.teacherForm.name) === "") throw "请填写姓名";
        if (Trim(this.teacherForm.tel) === "") throw "请填写手机号码";
        if (!telReg.test(Trim(this.teacherForm.tel)))
          throw "请填写正确的手机号码";
        if (Trim(this.teacherForm.code) === "") throw "请填写手机号验证码";
        if (Trim(this.teacherForm.email) === "") throw "请填写常用邮箱";
        if (!emailReg.test(Trim(this.teacherForm.email)))
          throw "请填写正确的邮箱";
        // if (this.teacherForm.appointmentStartTime === '')
        //   throw '请选择预约开始时间'
        // if (this.teacherForm.appointmentEndTime === '')
        //   throw '请选择预约结束时间'
        if (start > end) throw "预约结束日期不能小于预约开始日期";
        // if (this.teacherForm.courseObj === '') throw '请选择授课对象'
        // if (this.teacherForm.courseNum === '') throw '请选择授课人数'
        // if (this.teacherForm.courseTime === '') throw '请选择授课时长'
        // if (Trim(this.teacherForm.projectBudget) === '') throw '请填写项目预算'
      } catch (err) {
        message(this, "error", err);
        return false;
      }
      this.appointmentTeacher();
    },

    // 获取老师详情信息
    getTeacherInfo () {
      teacherInfo.getTeacherInfo(this.teacher).then(response => {
        this.teacherData = response.data.teacherInfo;
      });
    },
    async smsCodes () {
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
      if (
        Trim(this.teacherForm.tel) === "" ||
        !telReg.test(Trim(this.teacherForm.tel))
      ) {
        message(this, "error", "请填写正确的手机号码");
        return false;
      } else {
        this.telCodes.tel = this.teacherForm.tel;
      }
      if (this.telCodes.seconds === 30 && this.telCodes.send) {
        this.telCodes.send = false;
        list.smsCodes(this.telCodes).then(response => {
          let types = response.status === 0 ? "success" : "error";
          message(this, types, response.msg);

          this.telCodes.getCode = this.telCodes.seconds + "秒后重新发送";
          this.codeInterval = setInterval(() => {
            if (this.telCodes.seconds <= 1) {
              this.telCodes.getCode = "获取验证码";
              this.telCodes.seconds = 30;
              this.telCodes.send = true;
              clearInterval(this.codeInterval);
            } else {
              this.telCodes.getCode = --this.telCodes.seconds + "秒后重新发送";
            }
          }, 1000);
        });
      }
    },
    // 获取预约导师选项信息
    getTeacherSelect () {
      list.getTeacherSelect().then(response => {
        if (response.status == 0) {
          this.numLi = response.data.studyNumber;
          this.timeLi = response.data.studyTime;
          this.serviceList = response.data.offerService;
          this.objLi = response.data.recipient;
        }
      });
    },
    // 提交预约导师
    appointmentTeacher () {
      this.teacherForm.teacherId = this.teacher.tids;
      list.appointmentTeacher(this.teacherForm).then(response => {
        //不需要验证是否登录
        if (response.status === 0) {
          message(
            this,
            "success",
            "提交成功，我们的客服人员会尽快与您取得联系！"
          );
          this.$router.push("/home/teacher/list");
        } else {
          message(this, "error", response.msg);
        }
      });
    }
  },
  mounted () {
    setTitle("预约导师-1911学堂");
    this.teacher.tids = matchSplits("id");
    this.getTeacherInfo();
    this.getTeacherSelect();
  }
};
</script>