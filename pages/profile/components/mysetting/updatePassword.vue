<template>
  <div>
    <div class="changePwd">
      <el-form :model="changePwd" status-icon :rules="pwdRules" ref="changePwd" label-width="135px" class="demo-ruleForm" autoComplete="off">
        <input type="password" class="hideInput">
        <el-form-item label="原密码：" prop="oldPass" id="onlyForm">
          <el-input type="password" name="noauto" v-model="changePwd.oldPass" auto-complete="off" id="onlyOne" placeholder="请输入您的当前密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="newPass" class="margin">
          <el-input type="password" v-model="changePwd.newPass" auto-complete="off" placeholder="请输入您的新密码"></el-input>
        </el-form-item>
        <p class="tips">提示：8-16位密码，包含字母、数字、标点符号等</p>
        <el-form-item label="确认新密码：" prop="checkPass">
          <el-input type="password" v-model="changePwd.checkPass" auto-complete="off" placeholder="请再次输入您的新密码"></el-input>
        </el-form-item>
        <!-- <p class="forgetPassword">如果您忘记原密码，建议通过
        <span @click="forget">找回密码</span>来修改密码！</p> -->
        <input type="password" class="hideInput">
        <el-form-item>
          <el-button type="primary" @click="submitForm('changePwd')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <v-dialog v-if="showDialog" :dialog="dialogInfo" @closeDialog="closeDialog"></v-dialog>

  </div>
</template>

<script>
import { personalset } from "~/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import { mapGetters, mapActions } from "vuex";
import { encryption } from "~/lib/util/helper";
import Dialog from "@/components/common/Dialog.vue";

export default {
  components: {
    "v-dialog": Dialog
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入原密码"));
      } else {
        if (this.changePwd.checkPass !== "") {
          this.$refs.changePwd.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else if (value.length < 8 || value.length > 17) {
        callback(new Error("请输入至少8位最多16位的密码"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.changePwd.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      showDialog: false,
      dialogInfo: {},
      changePwd: {
        oldPass: "",
        newPass: "",
        checkPass: ""
      },
      pwdRules: {
        oldPass: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        newPass: [
          {
            validator: validatePass2,
            trigger: "blur"
          }
        ],
        checkPass: [
          {
            validator: validatePass3,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions("auth", ["signOut"]),
    // 提交修改密码
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let tmp = {
            oldps: encryption(this.changePwd.oldPass),
            newpass: encryption(this.changePwd.newPass),
            newpasso: encryption(this.changePwd.checkPass)
          };
          personalset.editPassWord(tmp).then(res => {
            this.changePwd = {
              oldPass: "",
              newPass: "",
              checkPass: ""
            };
            if (res.status == 100008) {
              this.$router.push("/");
            }
            if (res.status == 0) {
              this.showDialog = true;
              this.dialogInfo.info = "修改成功，请重新登录！";

              persistStore.clearAll();
            } else if (res.status == 100100) {
              let msg = res.msg;
              this.$message({
                showClose: true,
                type: "error",
                message: res.msg
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    //关闭dialog提示框
    closeDialog () {
      this.showDialog = false;
      this.signOut();
      this.$bus.$emit("loginShow", true);
      this.$router.push("/");
    },
    forget () {
      this.$router.push("/auth/forgotpassword");
    }
  }
};
</script>

<style scoped>
</style>