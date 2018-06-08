<template>
  <div class="headerBox">
    <div class="main">
      <div class="headerLogo fl" @click="goSearchd('/')">
        <img src="~/assets/images/1911xt.png" alt="">
      </div>
      <div class="search">
        <input type="text" placeholder="请输入课程、老师" v-model="search" @keyup.enter="gokey">
        <img :src="searchImg" alt="" @click="goSearch">
      </div>
      <div :class="{ HREntry : true , islogined : isAuthenticated }">
        <span class="hrin" @click="goSearchd('home/pages/hrEntry')">Hr入口</span>
        <span v-show="isAuthenticated" @click="goLink('second')">我的课程</span>
        <div class="downLoad">
          <i class="phone"></i>
          <div class="downApp clearfix">
            <img class="fl" src="@/assets/images/downApp.png" alt="">
            <div class="changeType fr">
              <span>下载1911学堂APP</span>
              <span><img src="@/assets/images/iphone.png" alt=""> App Store下载</span>
              <span><img src="@/assets/images/Android.png" alt=""> Android下载</span>
            </div>
          </div>
        </div>
        <div class="shoppingCart" v-show="isAuthenticated"  @click="goSearchd('/shop/shoppingCart')">
          <img src="@/assets/images/shoppingCart.png" alt=""><i v-show="shoppingCartNum>0">{{shoppingCartNum}}</i>
        </div>
      </div>
      <div class="lrBtn" v-if="!isAuthenticated">
        <!-- @click="login" -->
        <span @click ="loginCardShow" >登录</span>
        <!-- @click="register" -->
        <span class="register" @click="register">注册</span>
      </div>
      <div class="headImg" v-else>
        <img :src="user.userImg" alt="">
        <ul class="subPages">
          <li class="cli" @click="goLink('first')">我的首页</li>
          <li @click="goLink('second')">我的课程</li>
          <li @click="goLink('third')">我的消息</li>
          <li @click="goLink('fourth')">个人设置</li>
          <li @click="goLink('fifth')">绑定课程</li>
          <li @click="signOuts">退出</li>
        </ul>
      </div>
    </div>

    <!-- 登录注册 -->
    <div class="start" v-if="start">
      <div class="bgt" @click="close"></div>
      <!-- @click="close" -->
      <div class="lrFrame" v-show="lrFrame">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="login">
            <!-- 登录 表单-->
            <el-form :model="loginData" status-icon :rules="loginRules" ref="loginData" class="demo-ruleForm">
              <el-form-item prop="phonenum">
                <el-input v-model.number="loginData.phonenum" placeholder="请输入登录手机号" clearable></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input :type="loginData.pwdType" v-model="loginData.password" auto-complete="off" placeholder="6-10位密码，区分大小写，不能用空格"></el-input>
                <span :class="{hidePwd:!loginData.showPwd,showPwd:loginData.showPwd}" @click="changePwd" alt=""></span>
              </el-form-item>
              <el-row>
                 <!-- @click="goSearchd('/home/pages/forgotPassword')"  -->
                <div @click="forget">忘记密码?</div>
                <el-button @click="signIn('loginData')">登录{{this.token}}</el-button>
              </el-row>
            </el-form>
            <div class="otherLogin" @click="wechatLogined">其它方式登录</div>
          </el-tab-pane>
          <!-- 注册表单 -->
          <el-tab-pane label="注册" name="register">
            <el-form :model="registerData" status-icon :rules="registRules" ref="registerData" class="demo-ruleForm">
              <el-form-item prop="phones">
                <el-input v-model.number="registerData.phones" placeholder="请输入登录手机号" clearable></el-input>
              </el-form-item>
              <el-form-item prop="codes">
                <el-input class="captcha" v-model="registerData.codes" placeholder="请输入验证码"></el-input>
                <div class="getCode" @click="handleGetCode">{{bindTelData.getCode}}</div>
                <!--  -->
              </el-form-item>
               <el-form-item prop="passwords">
                <el-input v-model="registerData.passwords" type="password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item prop="companyCodes">
                <el-input v-model="registerData.companyCodes" placeholder="绑定企业"></el-input>
                <span class="bindCompany">(可选)</span>
              </el-form-item>
              <el-form-item prop="checked">
                <el-checkbox-group v-model="registerData.checked">
                  <el-checkbox label="同意用户注册协议" name="checked"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-row>
                <el-button @click.native="signUp('registerData')">注册</el-button>
              </el-row>
            </el-form>
            <div class="otherLogin" @click="wechatLogined">其它方式登录</div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 微信登录 -->
      <div class="lrFrame wechatLogin" v-show="wechatLogin">
        <el-form :model="bindTelData" status-icon ref="bindTelData" class="demo-ruleForm" v-show="bindTelShow">
          <h4 class="clearfix"><span>绑定手机账号</span> <i class="el-icon-close fr" @click="closeWechat"></i></h4>
          <el-form-item prop="tel">

            <el-input v-model.number="bindTelData.tel" placeholder="请输入登录手机号"></el-input>
          </el-form-item>
          <el-form-item prop="code">

            <el-input class="captcha" v-model.number="bindTelData.code" placeholder="请输入验证码"></el-input>
            <div class="getCode">{{bindTelData.getCode}}</div>
          </el-form-item>
          <el-form-item>

            <el-input v-model="bindTelData.company" placeholder="绑定企业"></el-input>
            <span class="bindCompany">(可选)</span>
          </el-form-item>
          <el-row>
            <el-button>绑定</el-button>
          </el-row>
        </el-form>

        <div class="scanCode" v-show="scanCodeShow">
          <h4 class="clearfix"><span>微信登录</span> <i class="el-icon-close fr" @click="closeWechat"></i></h4> <!-- el-icon-loading -->
          <img :src="getWXLoginImg.isget" alt="">
          <h5>请使用微信扫描“1911学堂”二维码登录</h5>
          <p>二维码将在5分钟后失效！<i @click="getWXCode">重新获取二维码</i></p>
        </div>

        <div class="bindSuccess" v-show="bindSuccessShow">
          <img src="@/assets/images/bindingSuccess.png" alt="">
          <h5>手机账号绑定成功</h5>
          <p>返回登录 3S</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { getQueryString } from "@/lib/util/helper";
import { other, auth } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import { checkPhone, checkCode } from "~/lib/util/validatefn";
export default {
  data() {
    var checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      if (value.toString().length != 11) {
        return callback(new Error("请输入正确手机号"));
      }
      if (!/^1[3|5|6|7|8][0-9]\d{4,8}$/.test(value)) {
        return callback(new Error("请输入正确手机号"));
      }
    };
    var checkRgTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      if (value.toString().length != 11) {
        return callback(new Error("请输入正确手机号"));
      }
      if (!/^1[3|5|6|7|8][0-9]\d{4,8}$/.test(value)) {
        return callback(new Error("请输入正确手机号"));
      }
      
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
        return false;
      } else if (value.length < 6 || value.length > 10) {
        callback(new Error("请输入6-10位密码"));
        return false;
      }
    };
    var checkCompanyCodes = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        return callback(new Error("请输入正确企业ID"));
      }
    };
    return {
      searchImg: require("~/assets/images/search.png"),
      start: false,
      lrFrame: false,
      islogin: false,
      activeName: "second",
      search: "",
      shoppingCartNum: 1,
      tokenForm: {
        tokens: "123"
      },
      bgMsg: false,
      user: {
        userImg: require("~/assets/images/headImg.png")
      },
      activeName: "login",
      QRcode: require("~/assets/images/wechatLogin.png"),
      wechatLogin: false,
      bindTelShow: false,
      scanCodeShow: false,
      bindSuccessShow: false,
      bindTelData: {
        tel: "",
        code: "",
        getCode: "获取验证码",
        seconds: 60,
        captchaDisable: false,
        checked: false
      },
      getWXLoginImg:{
        time:300,
        isget:"",
      },
      // 登录数据
      loginData: {
        password: "",
        phonenumber: "",
        showPwd: false,
        pwdType: "password",
        loginTypes: 1
      },
      // 注册数据
      registerData: {
        phones: "",
        passwords: "",
        types: 1,
        codes: "",
        checked: [],
        companyCodes: ""
      },
      // 注册表单验证
      registRules: {
        phones: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkRgTel, trigger: "blur" }
        ],
        passwords: [
          { required: true, message: "请输入账户密码", trigger: "blur" },
          {
            type: "string",
            min: 8,
            max: 16,
            message: "密码长度为8-16位",
            trigger: "blur"
          }
        ],
        codes: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        companyCodes: [
          { min: 9, max: 9, message: "请输入正确的企业ID", trigger: "blur" },
          { validator: checkCompanyCodes, trigger: "blur" }
        ],
        checked: [
          {
            type: "array",
            required: true,
            message: "请勾选同意用户协议",
            trigger: "change"
          }
        ]
      },
      // 登录表单验证
      loginRules: {
        phonenum: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkTel, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入账户密码", trigger: "blur" }
        ]
      },
      gidForm: {
        gids: null
      }
      // ipone code
    };
  },
  computed: {
    ...mapState("auth", ["token"]),
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("auth", ["signIn", "setGid", "signOut"]),
    // 登录显示card
    async loginCardShow() {
      this.start = true;
      this.lrFrame = this.start;
      this.activeName = "login";
      this.stop();
      this.bgMsg = true;
    },
    // 获取验证码
    async handleGetCode() {
      return new Promise((resolve, reject) => {
        auth.smsCodes(this.registerData).then(response => {
          this.$message({
            type: response.status === "0" ? "success" : "error",
            message: response.msg
          });
          this.captchaDisable = true;
          this.bindTelData.getCode = this.bindTelData.seconds + "秒后重新发送";
          let interval = setInterval(() => {
            if (this.bindTelData.seconds <= 0) {
              this.bindTelData.getCode = "获取验证码";
              this.bindTelData.seconds = 60;
              this.captchaDisable = false;
              clearInterval(interval);
            } else {
              this.bindTelData.getCode =
                --this.bindTelData.seconds + "秒后重新发送";
            }
          }, 1000);
        });
      });
    },
    // 验证手机号是否存在
    verifyTel(tel){
      return new Promise((resolve, reject) => {
        this.verifyPhone(this.registerData.phones).then(response => {
          this.$message({
                type: response.status === "0" ? "success" : "error",
                message: response.msg
              });
        });
      });
    },
    // 注册 请求
    signUp(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          return new Promise((resolve, reject) => {
            auth.signUp(this.registerData).then(response => {
              this.$message({
                type: response.status === "0" ? "success" : "error",
                message: response.msg
              });
            });
          });
        } else {
          return false;
        }
      });
    },
    // 登录 请求
    signIn(formName) {
      // this.signIn(this.tokenForm);
      // this.start = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          return new Promise((resolve, reject) => {
            this.signIns(this.loginData).then(response => {
              if (response.status === 0) {
                this.start = false;
                this.islogin = true;
              }
              this.$message({
                type: response.status === "0" ? "success" : "error",
                message: response.msg
              });
            });
          });
        } else {
          return false;
        }
      });
      this.move();
    },
    // 获取微信登录二维码 请求
    async wxLogin() {
      return new Promise((resolve, reject) => {
        auth.wechat(this.getWXLoginImg.isget).then(response => {
          this.getWXLoginImg.isget = response.data.url;
          var timewx=setInterval(()=>{
            this.getWXLoginImg.time--;
          },1000)
        });
      });
    },
    // 忘记密码
    forget() {
      this.$router.push("/home/pages/forgotPassword");
      this.close();
    },
    goMycourse() {
      this.$router.push("/profile");
    },
    goLinks() {
      this.$router.push("/shop/shoppingCart");
    },
    goLink(item) {
      this.$router.push(item);
    },
    login() {},
    signOuts() {
      this.signOut();
    },
    changePwd() {
      if (this.loginData.showPwd) {
        this.loginData.showPwd = false;
        this.loginData.pwdType = "password";
      } else {
        this.loginData.showPwd = true;
        this.loginData.pwdType = "text";
      }
    },
    register() {
      this.start = true;
      this.lrFrame = true;
      this.activeName = "register";
      if (this.start === true) {
        this.stop();
      } else {
        this.move();
      }
    },
    close() {
      this.move();
      this.start = false;
      this.lrFrame = false;
      this.bgMsg = false;
    },
    closeWechat() {
      this.start = false;
      this.lrFrame = false;
      this.wechatLogin = false;
      // document.body.style.overflow = "auto";
    },
    handleClick(tab, event) {},
    wechatLogined() {
      //微信登录
      this.lrFrame = false;
      this.wechatLogin = true;
      this.scanCodeShow = true; //微信扫码
      // this.bindTelShow=true; //绑定手机号
      // this.bindSuccessShow=true; // 登录成功
      this.wxLogin();
    },
    getWXCode() {
      console.log(this.getWXLoginImg.time);
      if(this.getWXLoginImg.time <1){
        clearInterval(timewx);
        this.wxLogin();
      }else{
        this.$message({
          message: '请勿重复获取！',
          type: 'warning'
        });
      }
      
    },
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
    goSearch(item) {
      switch (window.location.pathname) {
        case "/course/pages/search":
          break;
        default:
          this.$router.push("/course/pages/search");
          break;
      }
    },
    gokey() {
      if (event.keyCode == 13) {
        switch (window.location.pathname) {
          case "/course/pages/search":
            break;
          default:
            this.$router.push("/course/pages/search");
            break;
        }
      }
    },
    goSearchd(item) {
      this.$router.push(item);
    },
    backHome() {
      this.$router.push("/");
    },
    goLink(item) {
      this.gidForm.gids = item;
      this.setGid(this.gidForm);
      this.$router.push("/profile");
      // switch (window.location.pathname) {
      //   case '/':
      //     this.$router.push('/profile');
      //     break
      //   default:

      //     break
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.cli {
  cursor: pointer;
}
</style>
