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
      <div :class="{ HREntry : true , islogined : this.islogin === '123' ? true : false }">
        <span class="hrin" @click="goLink('home/pages/hrEntry')">Hr入口</span>
        <span v-if="this.token === '123' ? true : false" @click="goLink('second')">我的课程</span>
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
        <div class="shoppingCart" v-if="this.token === '123' ? true : false"  @click="goLink('/shop/shoppingCart')">
          <img src="@/assets/images/shoppingCart.png" alt=""><i>2</i>
        </div>
      </div>
      <div class="lrBtn" v-if="this.token === '123' ? false : true">
        <!-- @click="login" -->
        <span @click ="loginCardShow">登录</span>
        <!-- @click="register" -->
        <span class="register" >注册</span>
      </div>
      <div class="headImg" v-else>
        <img :src="user.userImg" alt="">
        <ul class="subPages">
          <li class="cli" @click="goLink('first')">我的首页</li>
          <li @click="goLink('second')">我的课程</li>
          <li @click="goLink('third')">我的消息</li>
          <li @click="goLink('fourth')">个人设置</li>
          <li @click="goLink('fifth')">绑定课程</li>
          <li @click="signOut">退出</li>
        </ul>
      </div>
    </div>

    <!-- 登录注册 -->
    <div class="start">
      <div class="bgt" ></div>
      <!-- @click="close" -->
      <div class="lrFrame" >
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="login">
            <!-- 登录 表单-->
            <el-form :model="loginData" status-icon :rules="loginRules" ref="loginData" class="demo-ruleForm">
              <el-form-item prop="phonenum">
                <el-input v-model.number="loginData.phonenum" placeholder="请输入登录手机号"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input :type="loginData.pwdType" v-model="loginData.password" auto-complete="off" placeholder="6-10位密码，区分大小写，不能用空格"></el-input>
                <span :class="{hidePwd:!loginData.showPwd,showPwd:loginData.showPwd}" @click="changePwd" alt=""></span>
              </el-form-item>
              <el-row>
                 <!-- @click="goSearchd('/home/pages/forgotPassword')"  -->
                <div @click="forget">忘记密码?</div>
                <el-button @click="signIns('loginData')">登录</el-button>
              </el-row>
            </el-form>
            <div class="otherLogin" @click="scanCode">其它方式登录</div>
          </el-tab-pane>
          <!-- 注册表单 -->
          <el-tab-pane label="注册" name="register">
            <el-form :model="registerData" status-icon :rules="registRules" ref="registerData" class="demo-ruleForm">
              <el-form-item prop="phones">
                <el-input v-model="registerData.phones" placeholder="请输入登录手机号"></el-input>
              </el-form-item>
              <el-form-item prop="codes">
                <el-input class="captcha" v-model="registerData.codes" placeholder="请输入验证码"></el-input>
                <div class="getCode" @click="handleGetCode">获取验证码</div>
                <!--  -->
              </el-form-item>
               <el-form-item prop="passwords">
                <el-input v-model="registerData.passwords" placeholder="请输入密码"></el-input>
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
            <div class="otherLogin" @click="scanCode">其它方式登录</div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 微信登录 -->
      <!-- <div class="lrFrame wechatLogin" v-show="wechatLogin">
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
          <h4 class="clearfix"><span>微信登录</span> <i class="el-icon-close fr" @click="closeWechat"></i></h4>
          <img :src="QRcode" alt="">
          <p>请使用微信扫描“1911学堂”二维码登录</p>
        </div>

        <div class="bindSuccess" v-show="bindSuccessShow">
          <img src="@/assets/images/bindingSuccess.png" alt="">
          <h5>手机账号绑定成功</h5>
          <p>返回登录 3S</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  import {
    getQueryString
  } from "@/lib/util/helper";
  import {
    other,
    auth
  } from "~/lib/v1_sdk/index";
  import {
    mapState,
    mapActions,
    mapGetters
  } from "vuex";
  import {
    checkPhone,
    checkCode
  } from "~/lib/util/validatefn";
  export default {
    data() {
      var checkTel = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("手机号不能为空"));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error("请输入正确手机号"));
          }
        }, 1000);
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
      return {
        searchImg: require("~/assets/images/search.png"),
        start: false,
        lrFrame: false,
        islogin: false,
        activeName: "second",
        search: "",
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
          checked: false
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
          phones: '',
          passwords: '',
          types: 1,
          codes: "",
          checked: [],
          companyCodes: ''
        },
        // 注册表单验证
        registRules: {
          phones: [{
              required: true,
              message: "请输入手机号",
              trigger: "blur"
            },
            {
              validator: checkPhone,
              trigger: "blur"
            }
          ],
          passwords: [
            { required: true, message: '请输入账户密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度为 6 位以上', trigger: 'blur' }
          ],
          codes: [{
              required: true,
              message: "请输入验证码",
              trigger: "blur"
            },
            {
              validator: checkCode,
              trigger: "blur"
            }
          ],
          checked: [{
            type: "array",
            required: true,
            message: "请勾选同意用户协议",
            trigger: "change"
          }]
        },
        // 登录表单验证
        loginRules: {
          phonenum: [{
              required: true,
              message: "请输入手机号",
              trigger: "blur"
            },
            {
              validator: checkPhone,
              trigger: "blur"
            }
          ],
          password: [
            { required: true, message: '请输入账户密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度为 6 位以上', trigger: 'blur' }
          ]
        },
        gidForm: {
          gids: null
        }
        // ipone code
      };
    },
    computed: {
      ...mapState("auth", ["token"])
    },
    methods: {
      ...mapActions("auth", ["signIn", "setGid"]),
      // 登录显示card
      async loginCardShow () {
        this.start = !this.start;
        this.lrFrame = this.start;
        this.activeName = "login";
        this.stop();
        this.bgMsg = true;
        // this.tokenForm.tokens = "123";
      },
      // // 获取验证码
      async handleGetCode() {
        return new Promise((resolve, reject) => {
           auth.smsCodes(this.registerData).then(response => {
            // console.log(response, '这是response')
            this.$message({
              type: response.status === '1' ? 'success' : 'error',
              message: response.msg
                })
          })
        })
        // console.log('获取验证码被点击')
      },
      // 注册 请求
      signUp(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            return new Promise((resolve, reject) => {
              auth.signUp(this.registerData).then(response => {
                this.$message({
                  type: response.status === '1' ? 'success' : 'error',
                  message: response.msg
                })
              })
            })
          } else {
            // console.log("error submit!!");
            return false;
          }
        });
      },
      // 登录 请求
      signIns(formName) {
        // this.signIn(this.tokenForm);
        // this.start = false;
        this.$refs[formName].validate(valid => {
          if (valid) {
            // console.log(this.loginData, '678')
            this.signIn(this.loginData)
            //  return new Promise((resolve, reject) => {
            //     auth.signIns(this.loginData).then(response => {
            //       console.log(response, '这是response')
            //       this.$message({
            //             type: response.status === '1' ? 'success' : 'error',
            //             message: response.msg
            //           })
            //     })
            //   })
          } else {
            // console.log("error submit!!");
            return false;
          }
        })
        this.move();
      },
      // 忘记密码
      forget () {
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
      login() {

      },

      signOut() {
        this.tokenForm.tokens = "";
        // this.signIn(this.tokenForm);
      },
      changePwd() {
        if (this.showPwd) {
          this.showPwd = false;
          this.loginData.pwdType = "password";
        } else {
          this.showPwd = true;
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
        // document.body.style.overflow = 'auto';
      },
      closeWechat() {
        this.start = false;
        this.lrFrame = false;
        this.wechatLogin = false;
        document.body.style.overflow = "auto";
      },
      handleClick(tab, event) {},
      scanCode() {
        //微信登录
        this.lrFrame = false;
        this.wechatLogin = true;
        this.scanCodeShow = true; //微信扫码
        // this.bindTelShow=true; //绑定手机号
        // this.bindSuccessShow=true; // 登录成功
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
    },
    mounted() {}
  };
</script>

<style lang="scss" scoped>
  .cli {
    cursor: pointer;
  }
</style>
