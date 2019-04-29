<template>
  <!-- 登录注册 -->
  <div class="start" v-show="start">
    <div class="bgt"></div>
    <!-- @click="close" -->
    <div class="lrFrame" v-show="lrFrame">
      <i class="el-icon-close closelrFrom" @click="close"></i>
      <el-tabs v-model="activeName" @tab-click="handleClick" v-loading="loadLogin">
        <el-tab-pane label="登录" name="login">
          <!-- 登录 表单-->
          <!-- 账号密码登录-->
          <el-form :model="loginData" status-icon :rules="loginRules" ref="loginData" class="demo-ruleForm" @keyup.enter.native="signIns('loginData')" v-if="mobileloginmsg === false">
            <v-passwordlogin :loginData="loginData" :mobileloginmsg="mobileloginmsg" :isloginClick="isloginClick" @changePwd="changePwd" @forget="forget" @mobilelogin="mobilelogin" @signIns="signIns"  @phonesChange="phonesChange"></v-passwordlogin>
          </el-form>
          <!-- 手机验证码登录-->
          <el-form :model="registerMobileData" status-icon :rules="loginDXRules" ref="loginDatamobile" class="demo-ruleForm telLogin" v-if="mobileloginmsg === true">
            <v-codelogin :mobileloginmsg="mobileloginmsg" :registerMobileData="registerMobileData" :codeClick="codeClick" :bindTelData="bindTelData" :isloginClick="isloginClick" @handleMobileGetCode="handleMobileGetCode" @mobilelogin="mobilelogin" @signInsMobile="signInsMobile" @forget="forget" @phonesChange="phonesChange"></v-codelogin>
          </el-form>
          <div class="otherLogin" @click="wechatLogined">其它方式登录</div>
        </el-tab-pane>
        <!-- 注册 -->
        <el-tab-pane label="注册" name="register">
          <el-form :model="registerData" status-icon :rules="registRules" id="registerData" ref="registerData" class="demo-ruleForm">
            <v-register :registerData="registerData" :codeClick="codeClick" :isClick="isClick" :isloading="isloading" :bindTelData="bindTelData" @userProtocol="userProtocol" @verifyRgTel="verifyRgTel" @signUp="signUp" @phonesChange="phonesChange"></v-register>
          </el-form>
          <div class="otherLogin" @click="wechatLogined">其它方式登录</div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 微信登录 -->
    <div class="lrFrame wechatLogin" v-show="wechatLogin">
      <i class="el-icon-back wechatBack" @click="back" v-if="showBack"></i>
      <i class="el-icon-close closeWechat" @click="close"></i>
      <el-form :model="bindTelData" status-icon :rules="bindwxRules" class="demo-ruleForm" v-show="bindTelShow">
        <v-wechatlogin :bindTelData="bindTelData" @loginWechat="loginWechat" @verifyRgTelWX="verifyRgTelWX" @validationTel="validationTel"></v-wechatlogin>
      </el-form>
      <div class="scanCode" v-show="scanCodeShow">
        <h4 class="clearfix"></h4>
        <div class="wxchatIMG" id="wxchatIMG"></div>
      </div>
      <div class="bindSuccess" v-show="bindSuccessShow">
        <img src="https://static-image.1911edu.com/bindingSuccess.png" alt>
        <h5>手机账号绑定成功</h5>
        <p>返回登录 3S</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { auth, header, personalset } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import {
  checkPhone,
  checkCode,
  checkRegisterPhone
} from "~/lib/util/validatefn";
import { encryption, message } from "~/lib/util/helper";
import Register from "@/pages/auth/Register";
import WechatLogin from "@/pages/auth/wechatLogin";
import CodeLogin from "@/pages/auth/codeLogin";
import PasswordLogin from "@/pages/auth/passwordLogin";

export default {
  components: {
    "v-register": Register,
    "v-wechatlogin": WechatLogin,
    "v-codelogin": CodeLogin,
    "v-passwordlogin": PasswordLogin
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error("密码只能输入数字、字母"));
      }
      return callback();
    };
    var checkCompanyCodes = (rule, value, callback) => {
      if (value !== "" && !/^[A-Za-z0-9]+$/.test(value)) {
        return callback(new Error("请输入正确单位ID"));
      }
      return callback();
    };
    var checkProtocol = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请勾选同意用户协议"));
      }
      return callback();
    };
    return {
      isHasClass: true,
      showBack: true,
      codeListForm: {
        pages: 1,
        limits: null
      },
      isloading: false, //注册按钮点击之后loading（体验）
      codeInterval: null, //注册获取验证码定时循环
      codeClick: false, //判断是否点击过 获取验证码（防重）
      isClick: true, //判断是否点击过注册按钮（防重）
      isloginClick: false,
      downApp: "https://static-image.1911edu.com/wechatLogin.png",
      start: false,
      lrFrame: false,
      islogin: false,
      loadLogin: false,
      activeName: "second",
      shoppingCartNum: 1,
      tokenForm: {
        tokens: "123"
      },
      user: {
        userImg: ""
      },
      activeName: "login",
      QRcode: "https://static-image.1911edu.com/wechatLogin.png",
      wechatLogin: false,
      bindTelShow: false,
      scanCodeShow: false,
      bindSuccessShow: false,
      WxLogin: {
        self_redirect: true,
        id: "wxchatIMG",
        appid: "wxefa2295aae13fe2e",
        scope: "snsapi_login",
        redirect_uri: "", //重定向地址
        state: ""
      },
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
        checked: false,
        flag: true,
        bindType: 1 //loginType登陆后绑定手机号，1:微信登录,2:学号登录
      },
      getWXLoginImg: {
        time: 300,
        isget: "",
        WXverify: false
      },
      // 登录数据
      loginData: {
        password: "",
        ectpwd: "",
        phonenum: "",
        showPwd: false,
        pwdType: "password",
        loginTypes: 1
      },
      // 登录数据 手机验证码
      loginDatamobile: {
        password: "",
        ectpwd: "",
        phonenum: "",
        showPwd: false,
        pwdType: "password",
        loginTypes: 2
      },
      // 注册数据
      registerData: {
        phones: "",
        passwords: "",
        ectpwd: "",
        types: 1,
        codes: "",
        checked: false,
        companyCodes: ""
      },
      // 手机验证码登录数据
      registerMobileData: {
        phones: "",
        phonenum: "",
        passwords: "",
        ectpwd: "",
        loginTypes: 2,
        codes: "",
        checked: false,
        companyCodes: ""
      },
      // 注册表单验证
      registRules: {
        phones: [
          {
            required: true,
            message: "请输入您的手机号",
            trigger: "blur"
          },
          {
            validator: checkRegisterPhone,
            trigger: "blur"
          }
        ],
        phonenum: [
          {
            required: true,
            message: "请输入您的手机号",
            trigger: "blur"
          },
          {
            validator: checkPhone,
            trigger: "blur"
          }
        ],
        passwords: [
          {
            required: true,
            message: "请输入账户密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 8,
            max: 16,
            message: "密码长度为8-16位",
            trigger: "blur"
          },
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        codes: [
          {
            required: true,
            message: "请输入短信验证码",
            trigger: "blur"
          }
        ],
        companyCodes: [
          {
            min: 6,
            max: 6,
            message: "请输入正确的单位ID",
            trigger: "blur"
          },
          {
            validator: checkCompanyCodes,
            trigger: "blur"
          }
        ],
        checked: [
          {
            required: true,
            message: "",
            trigger: "change"
          },
          {
            validator: checkProtocol,
            trigger: "change"
          }
        ]
      },
      // 登录表单验证
      loginRules: {
        phonenum: [
          // { required: true, message: "请输入手机号", trigger: "blur" },
          {
            validator: checkPhone,
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入账户密码",
            trigger: "blur"
          }
        ]
      },
      // 短信登录表单验证
      loginDXRules: {
        phones: [
          {
            required: true,
            message: "请输入您的手机号",
            trigger: "blur"
          },
          {
            validator: checkPhone,
            trigger: "blur"
          }
        ],
        codes: [
          {
            required: true,
            message: "请输入短信验证码",
            trigger: "blur"
          }
        ]
      },
      // 微信绑定表单验证
      bindwxRules: {
        phones: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          },
          {
            validator: checkPhone,
            trigger: "blur"
          }
        ],
        codes: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ],
        companyCodes: [
          {
            min: 6,
            max: 6,
            message: "请输入正确的单位ID",
            trigger: "blur"
          },
          {
            validator: checkCompanyCodes,
            trigger: "blur"
          }
        ]
      },
      getwxtime: null,
      gidForm: {
        gids: null
      },
      tokenForm: {
        tokens: ""
      },
      pwdForm: {
        pwds: null
      },
      currentURL: null,
      errorTel: {
        tel: null,
        msg: null
      },
      authPath: [
        "/shop/affirmorder",
        "/shop/shoppingcart",
        "/profile",
        "/shop/wepay"
      ],
      mobileloginmsg: false
    };
  },
  computed: {
    ...mapState("auth", ["token", "productsNum"]),
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("auth", [
      "signIn",
      "signInmobile",
      "setGid",
      "setProductsNum",
      "signOut",
      "setToken",
      "setPwd"
    ]),
    phonesChange(val){
      this.registerMobileData.phones = val
       this.loginData.phonenum=val
       this.registerData.phones=val

    },
    //清除计时操作
    clearTime() {
      clearInterval(this.codeInterval);
      this.bindTelData.getCode = "获取验证码";
      this.bindTelData.seconds = 30;
      this.bindTelData.captchaDisable = false;
      this.codeClick = false;
    },
    // 验证手机登录还是账号密码登录
    mobilelogin() {
      //切换时清除计时器
      this.clearTime();
      this.mobileloginmsg = !this.mobileloginmsg;
      this.registerMobileData.codes = "";
      this.emptyForm();
    },
    // 登录显示card
    async loginCardShow() {
      this.closeWechat();
      this.start = true;
      this.lrFrame = this.start;
      this.activeName = "login";
      this.stop();
      this.mobileloginmsg = false;
    },
    // 注册显示card
    rigisterCardShow() {
      this.closeWechat();
      this.start = true;
      this.lrFrame = true;
      this.activeName = "register";
      if (this.start === true) {
        this.stop();
      } else {
        this.move();
      }
    },
    //微信登录
    wechatLogined() {
      this.lrFrame = false;
      this.wechatLogin = true;
      this.scanCodeShow = true; //微信扫码
      //this.bindTelShow=true; //绑定手机号
      // this.bindSuccessShow=true; // 登录成功
      this.wxLogin();
      this.bindTelData.getCode = "获取验证码";
      this.bindTelData.seconds = 30;
      this.bindTelData.captchaDisable = false;
      clearInterval(this.codeInterval);
    },

    // 注册时候获取验证码 this.registerData
    async handleGetCode(data) {
      if (this.bindTelData.seconds === 30) {
        if (
          this.bindTelData.captchaDisable === false &&
          this.bindTelData.flag
        ) {
          this.bindTelData.flag = false;
          auth.smsCodes(data).then(response => {
            let types = response.status === 0 ? "success" : "error";
            message(this, types, response.msg);
            this.bindTelData.captchaDisable = true;
            this.bindTelData.getCode =
              this.bindTelData.seconds + "秒后重新发送";
            this.codeInterval = setInterval(() => {
              if (this.bindTelData.seconds <= 0) {
                this.bindTelData.getCode = "获取验证码";
                this.bindTelData.seconds = 30;
                this.bindTelData.captchaDisable = false;
                this.codeClick = false;
                clearInterval(this.codeInterval);
                this.bindTelData.flag = true;
              } else {
                this.bindTelData.getCode =
                  --this.bindTelData.seconds + "秒后重新发送";
                this.bindTelData.flag = false;
              }
            }, 1000);
          });
        }
      }
    },
    // 手机验证码 登录时候
    async handleMobileGetCode() {
      if (
        !/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/.test(this.registerMobileData.phones)
      ) {
        message(this, "error", "请输入正确手机号");
      } else {
        if (this.bindTelData.seconds === 30) {
          if (this.bindTelData.captchaDisable === false) {
            this.codeClick = true;
            auth.smsCodes(this.registerMobileData).then(response => {
              let types = response.status === 0 ? "success" : "error";
              message(this, types, response.msg);

              this.bindTelData.captchaDisable = true;
              this.bindTelData.getCode =
                this.bindTelData.seconds + "秒后重新发送";
              this.codeInterval = setInterval(() => {
                if (this.bindTelData.seconds <= 0) {
                  this.bindTelData.getCode = "获取验证码";
                  this.bindTelData.seconds = 30;
                  this.bindTelData.captchaDisable = false;
                  this.codeClick = false;
                  clearInterval(this.codeInterval);
                } else {
                  this.codeClick = true;
                  this.bindTelData.getCode =
                    --this.bindTelData.seconds + "秒后重新发送";
                }
              }, 1000);
            });
          }
        }
      }
    },
    // 验证手机号是否存在
    verifyRgTel() {
      this.codeClick = true;
      if (this.errorTel.tel === this.registerData.phones) {
        message(this, "error", this.errorTel.msg);
        this.codeClick = false;
      } else {
        if (this.bindTelData.seconds == 30) {
          auth.verifyPhone(this.registerData).then(response => {
            if (response.status !== 0) {
              this.errorTel.tel = this.registerData.phones;
              this.errorTel.msg = response.msg;
              message(this, "error", response.msg);
              this.bindTelData.captchaDisable = true;
              this.codeClick = false;
            } else {
              if (this.bindTelData.seconds === 30) {
                this.errorTel.tel = null;
                this.errorTel.msg = null;
                this.bindTelData.captchaDisable = false;
                this.handleGetCode(this.registerData);
              }
            }
          });
        }
      }
    },
    // 验证手机号是否已经绑定了微信
    verifyRgTelWX() {
      if (this.bindTelData.seconds === 30) {
        if (!/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/.test(this.bindTelData.phones)) {
          message(this, "error", "请输入正确的手机号！");
          return false;
        }
        auth.verifywechat(this.bindTelData).then(response => {
          if (response.status != 0) {
            message(this, "error", response.msg);
            this.bindTelData.captchaDisable = true;
          } else {
            this.bindTelData.captchaDisable = false;
            this.handleGetCode(this.bindTelData);
          }
        });
      }
    },
    // 验证绑定学号的手机号是否存在
    validationTel() {
      if (this.bindTelData.bindType == 1) {
        this.bindTelData.types = 1;
      } else {
        this.bindTelData.types = 8;
      }
      if (this.bindTelData.seconds == 30) {
        auth.verifyPhone(this.bindTelData).then(response => {
          if (response.status !== 0) {
            message(this, "error", response.msg);
            this.bindTelData.captchaDisable = true;
            this.codeClick = false;
          } else {
            if (this.bindTelData.seconds === 30) {
              this.bindTelData.captchaDisable = false;
              this.handleGetCode(this.bindTelData);
            }
          }
        });
      }
    },
    // 注册完登录 请求
    alreadySignin(formName) {
      this.loginData.phonenum = this.registerData.phones;
      this.loginData.password = this.registerData.passwords;
      this.loginData.ectpwd = encryption(this.registerData.passwords);
      this.loadLogin = true;
      this.signIn(this.loginData).then(response => {
        let types = response.status === 0 ? "success" : "error";
        message(this, types, response.msg);
        if (response.status === 0) {
          this.close();
          this.getUserInfo();
          // 未登录后登陆后刷新当前页面
          this.refresh();
        }
        this.loadLogin = false;
      });
    },
    // 注册 请求
    signUp(formName) {
      this.isloading = true;
      this.isClick = true;
      this.registerData.ectpwd = encryption(this.registerData.passwords);
      this.$refs[formName].validate(valid => {
        if (this.registerData.checked) {
          if (valid) {
            this.loadLogin = true;
            auth.signUp(this.registerData).then(response => {
              if (response.status === 0) {
                this.alreadySignin();
                this.close();
              } else {
                message(this, "error", response.msg);
              }
              this.loadLogin = false;
              this.isClick = false;
              this.isloading = false;
            });
          } else {
            this.isClick = false;
            this.isloading = false;
            this.loadLogin = false;
            return false;
          }
        } else {
          this.isClick = false;
          this.isloading = false;
          this.loadLogin = false;
        }
      });
    },
    // 账号密码 登录 请求
    signIns(formName) {
      this.isloginClick = true;
      this.isloading = false;
      this.loginData.ectpwd = encryption(this.loginData.password);
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.signIn(this.loginData).then(response => {
            let types = response.status === 0 ? "success" : "error";
            message(this, types, response.msg);
            if (response.status === 0) {
              this.close();
              this.getUserInfo();
              persistStore.set("loginMsg", false);
              this.$bus.$emit("refetchData", true);
              // 未登录后登陆后刷新当前页面
              this.refresh();
            }
            this.isloginClick = false;
            this.isloading = false;
            // this.loadLogin = false
          });
        } else {
          this.isloginClick = false;
          this.isloading = false;
          return false;
        }
      });
      this.move();
    },
    // 手机验证码 登录
    signInsMobile(formName) {
      this.isloginClick = true;
      this.isloading = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.signInmobile(this.registerMobileData).then(response => {
            let types = response.status === 0 ? "success" : "error";
            message(this, types, response.msg);
            if (response.status === 0) {
              this.close();
              this.getUserInfo();
              this.$bus.$emit("updateCount"); //获取购物车数量
              persistStore.set("loginMsg", false);
              this.$bus.$emit("refetchData", true);
              // 未登录后登陆后刷新当前页面
              this.refresh();
            }
            this.isloginClick = false;
            this.isloading = false;
          });
        } else {
          this.isloginClick = false;
          this.isloading = false;
          return false;
        }
      });
      this.move();
    },
    // 从微信拉取二维码
    async wxLogin() {
      var link = window.location.origin;
      if (link === "https://www.1911edu.com") {
        link = "https://api.1911edu.com/Wapi/Index/wxBack";
        this.WxLogin.appid = "wx60c7f5b807077a7b";
      } else {
        link = "https://ceshiapi.1911edu.com/Wapi/Index/wxBack";
        this.WxLogin.appid = "wxefa2295aae13fe2e";
      }
      this.WxLogin.redirect_uri = encodeURIComponent(link);
      this.WxLogin.state = Math.random()
        .toString(36)
        .substr(2);
      const weixin = new WxLogin(this.WxLogin);
      this.currentURL = this.$route.path;
      this.getwxtime = setInterval(() => {
        this.getWXAccredit();
      }, 1000);
    },
    // 微信绑定手机号 + 学号绑定手机号
    async loginWechat() {
      this.loadLogin = true;
      try {
        if (this.bindTelData.phones === "") {
          throw "请输入手机号";
        }
        if (this.bindTelData.codes === "") {
          throw "请输入验证码";
        }
      } catch (error) {
        message(this, "error", error);
        return false;
      }
      if (this.bindTelData.bindType == 1) {
        //   微信绑定手机号
        auth.loginWechat(this.bindTelData).then(response => {
          if (response.status === 0) {
            message(this, "success", "登录成功");
            this.tokenForm.tokens = response.data.token;
            this.setToken(this.tokenForm);
            this.getUserInfo();
            this.$bus.$emit("updateCount"); //获取购物车数量
            this.closeWechat();
            this.close();
            // 未登录后登陆后刷新当前页面
            this.refresh();
          } else {
            message(this, "error", response.msg);
          }
          this.loadLogin = false;
        });
      } else {
        //  学号绑定手机号
        personalset.editPhone(this.bindTelData).then(res => {
          if (res.status == 0) {
            message(this, "success", "添加成功");
            this.getUserInfo();
            this.$bus.$emit("updateCount");
            this.closeWechat();
            this.close();
          } else {
            message(this, "error", res.msg);
          }
        });
      }
    },
    //获取微信登录是否已经绑定
    getWXAccredit() {
      // 判断当前网址是否已经变更
      if (this.$route.path !== this.currentURL) {
        this.closeWechat();
        return false;
      }
      auth.getWXAccredit(this.WxLogin).then(response => {
        if (response.status === 0) {
          message(this, "success", response.msg);
          clearInterval(this.getwxtime);
          this.tokenForm.tokens = response.data.token;
          this.setToken(this.tokenForm);
          this.getUserInfo();
          this.$bus.$emit("updateCount"); //获取购物车数量
          this.scanCodeShow = false; //微信扫码
          this.closeWechat();
          // 未登录后登陆后刷新当前页面
          this.refresh();
        }
        if (response.status === 100102) {
          this.scanCodeShow = false; //微信扫码
          this.bindTelShow = true;
          this.bindTelData.bindType = 1;
          this.bindTelData.captchaDisable = true;
          this.bindTelData.openid = response.data.openid;
          clearInterval(this.getwxtime);
        } else if (response.status === 100100) {
          // this.$message({
          //   showClose: true,
          //   type: 'error',
          //   message: response.msg
          // })
          message(this, "error", message.msg);
        }
      });
    },
    // 忘记密码
    forget() {
      this.$router.push("/auth/forgotpassword");
      this.close();
    },
    // 改变密码显示隐藏
    changePwd() {
      if (this.loginData.showPwd) {
        this.loginData.showPwd = false;
        this.loginData.pwdType = "password";
      } else {
        this.loginData.showPwd = true;
        this.loginData.pwdType = "text";
      }
    },
    // 微信扫码返回上一步
    back() {
      this.close();
      this.loginCardShow();
    },
    // 关闭登录注册
    close() {
      this.move();
      this.start = false;
      this.lrFrame = false;
      this.emptyForm();
      clearInterval(this.codeInterval);
      this.bindTelData.getCode = "获取验证码";
      this.bindTelData.seconds = 30;
      this.bindTelData.captchaDisable = false;
      this.codeClick = false;
      clearInterval(this.getwxtime);
    },
    // 关闭微信绑定
    closeWechat() {
      this.move();
      this.start = false;
      this.lrFrame = false;
      this.wechatLogin = false;
      this.scanCodeShow = false;
      this.bindTelShow = false;
      clearInterval(this.getwxtime);
      this.emptyWechatForm();
    },
    // 清空表单
    emptyForm() {
      // 账号密码登陆
      // this.loginData.phonenum = "";
      this.loginData.password = "";
      this.loginData.pwdType = "password";
      this.loginData.loginTypes = 1;

      // 注册
      this.registerData.types = 1;
      this.registerData.codes = "";
      this.registerData.passwords = '';
      // this.registerData.checked = [false]
      this.registerData.checked = false;
      this.registerData.companyCodes = "";
      // 手机验证码登陆
      // this.registerMobileData.phones = "";
      this.registerMobileData.passwords = "";
      this.registerMobileData.types = 3;
      this.registerMobileData.codes = "";
      // this.registerMobileData.checked = [false]
      this.registerMobileData.checked = false;
      this.registerMobileData.companyCodes = "";
    },
    // 清空微信表单
    emptyWechatForm() {
      (this.bindTelData.phones = ""),
        (this.bindTelData.codes = ""),
        (this.bindTelData.seconds = 30),
        (this.bindTelData.openid = null),
        (this.bindTelData.companyCodes = ""),
        (this.bindTelData.captchaDisable = false),
        (this.bindTelData.exist = false),
        (this.bindTelData.checked = false);
    },
    // 切换登录注册清空表单
    handleClick(tab, event) {
      this.emptyForm();
    },
    // 登陆成功获取用户信息
    getUserInfo() {
      this.$bus.$emit("getUserInfo");
    },
    // 禁止页面滑动
    stop() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    /***取消滑动限制***/
    move() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "auto"; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    },
    // 打开用户注册协议
    userProtocol() {
      window.open(window.location.origin + "/other/activePages/userProtocol");
    },
    // 判断当前页面路由-是否登录后刷新当前页面
    refresh() {
      let pathName = window.location.pathname;
      if (pathName === "/course/coursedetail") {
        this.$bus.$emit("reCourseData");
      } else if (pathName === "/project/projectdetail") {
        this.$bus.$emit("reProjectData");
      } else if (
        pathName.indexOf("/home/news/") == 0 &&
        pathName != "/home/news/list"
      ) {
        this.$bus.$emit("renewsDetailData");
      }
    }
  },
  mounted() {
    let me = this;
    this.$bus.$on("loginShow", data => {
      this.loginCardShow();
    });
    this.$bus.$on("registerShow", data => {
      this.rigisterCardShow();
    });
    // 学号登陆补充手机号
    this.$bus.$on("supplementTel", data => {
      this.closeWechat();
      this.showBack = false;
      this.start = true;
      this.wechatLogin = true;
      this.bindTelShow = true;
      this.bindTelData.bindType = 2;
    });
    if (!this.token) {
      this.signOut();
    }
  },
  watch: {
    // 监测登陆注册切换时清除注册获取验证码定时器
    activeName() {
      this.clearTime();
    },
    "registerData.checked"(val, oldVal) {
      if (val) {
        this.isClick = false;
        this.isHasClass = false;
      } else {
        this.isClick = true;
        this.isHasClass = true;
      }
    }
  }
};
</script>
