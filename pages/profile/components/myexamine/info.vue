<template>
  <!-- 个人信息填写 -->
  <div class="examine-info" :data='vipID'>
    <div class="examine-top">
      <span class="goBack" @click="handleBack">
        <i class=" el-icon-arrow-left icon"></i>个人信息填写
      </span>
    </div>
    <div class="bottom">
      <div class="bottom-title">请填写您的真实信息，用于申请认证，信息填写完成后不可更改！</div>
      <div class="inputs">
        <div class="items clearfix">
          <div class="fl">您的姓名：</div>
          <div class="fr">
            <el-input v-model="examineInfo.name" placeholder="请输入姓名"></el-input>
          </div>
        </div>
        <!-- <div class="items" clearfix>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="examineInfo.sex">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </div> -->
        <div class="items  clearfix">
          <div class="fl">您的手机号：</div>
          <div class="fr">
            <div v-if="phone==''">
              <el-input class=" tel" v-model="examineInfo.tel" placeholder="请输入手机号"></el-input>
              <el-input class=" tel" v-model="examineInfo.code" placeholder="请输入验证码"></el-input>
              <el-button @click="getCode">{{bindTelData.getCode}}</el-button>
            </div>
            <div v-else>
              <el-input v-model="examineInfo.tel" placeholder="请输入手机号" readonly></el-input>
            </div>
          </div>
        </div>
        <div class="items clearfix">
          <div class="fl">您的身份证号：</div>
          <div class="fr">
            <el-input v-model="examineInfo.idNumber" placeholder="请输入身份证号"></el-input>
          </div>
        </div>
        <div class="items clearfix">
          <div class="fl">您的单位名称：</div>
          <div class="fr">
            <el-input v-model="examineInfo.unit" placeholder="请输入单位名称"></el-input>
          </div>
        </div>

        <div class="examine-btn " @click="handleNext">下一步</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Trim, message, matchSplits, setTitle } from "~/lib/util/helper";
import { header, auth, examine } from "~/lib/v1_sdk/index";

export default {
  props: ["vipID"],
  data() {
    return {
      codeClick: true,
      phone: "",
      examineInfo: {
        name: "", //姓名
        tel: "", //手机号
        code: "", //验证码
        idNumber: "", //身份证号
        unit: "", //单位名称
        sex: 1 //性别
      },
      pageData: {
        id: "",
        name: ""
      },
      vipForm: { vipId: "" },
      bindTelData: {
        phones: "",
        codes: "",
        getCode: "获取验证码",
        seconds: 30,
        types: 1,
        openid: null,
        companyCodes: "",
        captchaDisable: false,
        exist: false,
        checked: false
      }
    };
  },
  methods: {
    //获取验证码
    getCode() {
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;

      if (Trim(this.examineInfo.tel) === "") {
        message(this, "error", "请填写手机号码");
        return false;
      }
      if (!telReg.test(Trim(this.examineInfo.tel))) {
        message(this, "error", "请填写正确的手机号码");
        return false;
      }
      if (this.codeClick) {
        this.codeClick = false;
        if (this.bindTelData.seconds === 30) {
          this.bindTelData.types = 6;
          this.bindTelData.phones = this.examineInfo.tel;

          auth.smsCodes(this.bindTelData).then(response => {
            let types = response.status === 0 ? "success" : "error";
            message(this, types, response.msg);
            this.bindTelData.getCode =
              this.bindTelData.seconds + "秒后重新发送";
            this.codeInterval = setInterval(() => {
              if (this.bindTelData.seconds <= 1) {
                this.codeClick = true;
                this.bindTelData.getCode = "获取验证码";
                this.bindTelData.seconds = 30;
                clearInterval(this.codeInterval);
              } else {
                this.bindTelData.getCode =
                  --this.bindTelData.seconds + "秒后重新发送";
              }
            }, 1000);
          });
        }
      }
    },
    handleBack() {
      this.pageData.name = "list";
      this.$bus.$emit("whichShow", this.pageData);
    },
    handleNext() {
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
      const IDreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      try {
        if (Trim(this.examineInfo.name) === "") throw "请输入您的姓名";
        if (Trim(this.examineInfo.tel) === "") throw "请输入您的手机号码";
        if (Trim(this.examineInfo.code) === "" && this.phone == "")
          throw "请输入验证码";
        if (!telReg.test(Trim(this.examineInfo.tel)) && this.phone == "")
          throw "请输入正确的手机号码";
        if (Trim(this.examineInfo.idNumber) === "") throw "请输入您的身份证号";
        if (!IDreg.test(Trim(this.examineInfo.idNumber)))
          throw "请输入正确的身份证号";
        if (Trim(this.examineInfo.unit) === "") throw "请输入您的单位名称";
      } catch (err) {
        message(this, "error", err);
        return false;
      }

      examine.saveExamUserInfo(this.examineInfo).then(res => {
        if (res.status == 0) {
          this.pageData.name = "intro";
          this.pageData.id = this.vipID;
          this.vipForm.vipId = this.vipID;
          // this.createExamRecordQuestion();
          this.$emit("examRulesPop", 1);
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    // 开始考试  跳出考试信息
    createExamRecordQuestion() {
      examine.createExamRecordQuestion(this.vipForm).then(response => {
        if (response.status == 100201) {
          this.pageData.name = "info";
          this.$bus.$emit("whichShow", this.pageData);
        } else if (response.status == 0) {
          this.$router.push(
            "/profile/components/myexamine/answerQuestion?id=" +
              response.data.exam_record_id
          );
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    getUserInfo() {
      header.getUserInfo().then(res => {
        if (res.status == 0) {
          this.phone = Trim(res.data.userInfo.user_name);
          if (this.phone != "") {
            this.examineInfo.tel = this.phone;
          }
        }
      });
    }
  },
  mounted() {
    this.getUserInfo();
    this.examineInfo.name = "";
    this.examineInfo.tel = "";
    this.examineInfo.idNumber = "";
    this.examineInfo.unit = "";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
};
</script>