<template>
  <!--绑定手机-->
  <div class="bingPhone">
    <i
      class="el-icon-back backPop"
      @click="back"
      v-show="!isFirstShow && isReturnShow"
    ></i>
    <i
      class="el-icon-close closePop"
      @click="close"
    ></i>
    <!-- 认证手机号码 -->
    <el-form
      v-show="isFirstShow"
      :model="validataPhone"
      ref="validataPhone"
      status-icon
      :rules="validataPhoneRules"
      class="demo-ruleForm"
    >
      <div class="formInner">
        <div class="first">
          <h4 class="clearfix">认证手机号码</h4>
          <p class="text">友情提醒：解绑后，您将无法再使用此手机号进行找回密码和登录等相关操作。</p>
          <p class="text num">已绑定手机号：<span>{{numPhone}}</span></p>
          <el-form-item prop="phones">
            <el-input
              v-model.number="validataPhone.phones"
              placeholder="请输入您已绑定的手机号"
            ></el-input>
          </el-form-item>
          <el-row>
            <el-button @click.native="nextStep('validataPhone')">下一步</el-button>
          </el-row>
        </div>
      </div>
    </el-form>
    <!-- 修改手机号 -->
    <el-form
      v-show="!isFirstShow"
      :model="bindTelData"
      ref="bindTelData"
      status-icon
      :rules="bindwxRules"
      class="demo-ruleForm"
    >
      <div class="formInner">
        <div class="two">
          <h4 class="clearfix">绑定手机</h4>
          <el-form-item prop="phones">
            <el-input
              v-model.number="bindTelData.phones"
              placeholder="请输入您新的手机号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="codes"
            class="lastItem clearfix"
          >
            <el-input
              class="captcha"
              v-model.number="bindTelData.codes"
              placeholder="请输入短信验证码"
            ></el-input>
            <div
              class="getCode"
              @click="verifyRgTel"
            >{{bindTelData.getCode}}</div>
          </el-form-item>
          <el-row>
            <el-button
              class="submit"
              :disabled="!submitClick"
              @click.native="submitPhone('bindTelData')"
            >提交</el-button>
          </el-row>
        </div>
      </div>
    </el-form>
  </div>

</template>

<script>
import { checkCode, checkRegisterPhone } from "~/lib/util/validatefn";
import { personalset, auth } from "~/lib/v1_sdk/index";
import { message } from "~/lib/util/helper";

export default {
  props: ["bindTelData", "numPhone"],
  data() {
    return {
      codeInterval: null,
      isReturnShow: true,
      isFirstShow: true,
      codeClick: true,
      submitClick: true,
      validataPhone: {
        phones: ""
      },
      validataPhoneRules: {
        phones: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          },
          {
            validator: checkRegisterPhone,
            trigger: "blur"
          }
        ]
      },
      bindwxRules: {
        phones: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          },
          {
            validator: checkRegisterPhone,
            trigger: "blur"
          }
        ],
        codes: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    back() {
      this.isFirstShow = true;
      this.initData();
    },
    close() {
      this.$emit("close");
      this.isFirstShow = true;
      this.validataPhone.phones = "";
      this.initData();
    },
    //初始化数据
    initData() {
      this.bindTelData.phones = "";
      this.bindTelData.codes = "";
      clearInterval(this.codeInterval);
      this.bindTelData.getCode = "获取验证码";
      this.bindTelData.seconds = 30;
      this.codeClick = true;
    },
    //   下一步
    nextStep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          personalset.confirmPhoneByUser(this.validataPhone).then(res => {
            if (res.status == 0) {
              this.isFirstShow = false;
            } else {
              message(this, "error", res.msg);
            }
          });
        }
      });
    },
    // 验证手机号是否存在
    verifyRgTel() {
      if (this.bindTelData.seconds == 30 && this.codeClick) {
        this.codeClick = false;
        if (!/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/.test(this.bindTelData.phones)) {
          message(this, "error", "请输入正确的手机号！");
          this.codeClick = true;
          return false;
        }
        auth.verifyPhone(this.bindTelData).then(response => {
          if (response.status !== 0) {
            message(this, "error", response.msg);
            this.codeClick = true;
          } else {
            this.getCode();
          }
        });
      }
    },
    //获取验证码
    getCode() {
      if (this.bindTelData.seconds === 30) {
        this.bindTelData.types = 4;
        auth.smsCodes(this.bindTelData).then(response => {
          let types = response.status === 0 ? "success" : "error";
          message(this, types, response.msg);
          this.bindTelData.getCode = this.bindTelData.seconds + "秒后重新发送";
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
    },
    //提交
    submitPhone(formName) {
      if (this.submitClick) {
        this.submitClick = false;
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.bindTelData.oldPhone = this.validataPhone.phones;
            personalset.editPhone(this.bindTelData).then(res => {
              if (res.status == 0) {
                message(this, "success", "绑定成功");
                this.$bus.$emit("getUserInfoData", true);
                this.submitClick = true;
                this.close();
              } else {
                message(this, "error", res.msg);
                this.submitClick = true;
              }
            });
          } else {
            this.submitClick = true;
          }
        });
      }
    }
  },
  mounted() {
    this.$bus.$on("openTwo", () => {
      this.isFirstShow = false;
      this.isReturnShow = false;
    });
  }
};
</script>

<style scoped>
</style>
