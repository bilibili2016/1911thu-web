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
        <span class="hrin" @click="goSearchd('/home/pages/hrEntry')">Hr入口</span>
        <span v-show="isAuthenticated" @click="goToMourse()">我的课程</span>
        <div class="downLoad">
          <i class="phone"></i>
          <div class="downApp clearfix">
            <img class="fl" src="@/assets/images/wechatLogin.png" alt="">
            <div class="changeType fr">
              <span>下载1911学堂APP</span>
              <span><img src="@/assets/images/iphone.png" alt="">AppStore下载</span>
              <span><img src="@/assets/images/Android.png" alt="">Android下载</span>
            </div>
          </div>
        </div>
        <div class="shoppingCart" v-show="isAuthenticated" @click="goSearchd('/shop/shoppingCart')">
          <span class="cartIcon"></span>
          <i v-if="productsNum>0">{{productsNum}}</i>
        </div>
      </div>
      <div class="lrBtn" v-if="!isAuthenticated">
        <!-- @click="login" -->
        <span @click="loginCardShow">登录</span>
        <!-- @click="register" -->
        <span class="register" @click="register">注册</span>
      </div>
      <div class="headImg" v-else>
        <img :src="user.userImg" alt="">
        <ul class="subPages">
          <li @click="goLink('tab-first')">我的首页</li>
          <li @click="goLink('tab-second')">我的课程</li>
          <li @click="goLink('tab-third')">我的消息</li>
          <li @click="goLink('tab-fourth')">个人设置</li>
          <li @click="goLink('tab-fifth')">绑定课程</li>
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
            <el-form :model="loginData" status-icon :rules="loginRules" ref="loginData" class="demo-ruleForm" @keyup.enter.native="signIns('loginData')">
              <el-form-item prop="phonenum">
                <el-input v-model.number="loginData.phonenum" auto-complete="off" placeholder="请输入登录手机号" clearable></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input :type="loginData.pwdType" v-model="loginData.password" auto-complete="off" placeholder="8-16位密码，区分大小写，不能用空格"></el-input>
                <span :class="{hidePwd:!loginData.showPwd,showPwd:loginData.showPwd}" @click="changePwd" alt=""></span>
              </el-form-item>
              <el-row>
                <!-- @click="goSearchd('/home/pages/forgotPassword')"  -->
                <div @click="forget">忘记密码?</div>
                <el-button @click="signIns('loginData')">登录</el-button>
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
                <div class="getCode" @click="verifyRgTel">{{bindTelData.getCode}}</div>
                <!--  -->
              </el-form-item>
              <el-form-item prop="passwords">
                <el-input v-model="registerData.passwords" type="password" placeholder="8-16位密码，区分大小写，不能用空格"></el-input>
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
        <el-form :model="bindTelData" status-icon :rules="bindwxRules" class="demo-ruleForm" v-show="bindTelShow">
          <h4 class="clearfix">
            <span>绑定手机账号</span>
          </h4>
          <el-form-item prop="tel">
            <el-input v-model.number="bindTelData.phones" placeholder="请输入登录手机号"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input class="captcha" v-model.number="bindTelData.codes" placeholder="请输入验证码"></el-input>
            <div class="getCode" @click="verifyRgTelWX">{{bindTelData.getCode}}</div>
          </el-form-item>
          <el-form-item prop="companyCodes">
            <el-input v-model="bindTelData.companyCodes" placeholder="绑定企业"></el-input>
            <span class="bindCompany">(可选)</span>
          </el-form-item>
          <el-row>
            <el-button @click.native="loginWechat(bindTelData)">绑定</el-button>
          </el-row>
        </el-form>
        <div class="scanCode" v-show="scanCodeShow">
          <h4 class="clearfix"></h4>
          <!-- el-icon-loading -->
          <div class="wxchatIMG" id="wxchatIMG"></div>
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
import { store as persistStore } from '~/lib/core/store'
import { getQueryString } from '@/lib/util/helper'
import { other, auth, home } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
export default {
  data() {
    var checkTel = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('手机号不能为空'))
      }
      if (value.toString().length != 11) {
        return callback(new Error('请输入正确手机号123'))
      }
    }
    var checkRgTel = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('手机号不能为空'))
      }
      if (value.toString().length != 11) {
        return callback(new Error('请输入正确手机号'))
      }
      if (!/^1[3|5|6|7|8][0-9]\d{4,8}$/.test(value)) {
        return callback(new Error('请输入正确手机号'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
        return false
      } else if (value.length < 6 || value.length > 10) {
        callback(new Error('请输入6-10位密码'))
        return false
      }
    }
    var checkCompanyCodes = (rule, value, callback) => {
      if (value !== '' && !/^[A-Za-z0-9]+$/.test(value)) {
        return callback(new Error('请输入正确企业ID'))
      }
      return callback()
    }
    var checkProtocol = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请勾选同意用户协议'))
      }
      return callback()
    }
    return {
      searchImg: require('~/assets/images/search.png'),
      start: false,
      lrFrame: false,
      islogin: false,
      activeName: 'second',
      search: '',
      shoppingCartNum: 1,
      tokenForm: {
        tokens: '123'
      },
      bgMsg: false,
      user: {
        userImg: require('~/assets/images/headImg.png')
      },
      activeName: 'login',
      QRcode: require('~/assets/images/wechatLogin.png'),
      wechatLogin: false,
      bindTelShow: false,
      scanCodeShow: false,
      bindSuccessShow: false,
      WxLogin: {
        self_redirect: true,
        id: 'wxchatIMG',
        appid: 'wxefa2295aae13fe2e',
        scope: 'snsapi_login',
        redirect_uri: '', //重定向地址
        state: ''
      },
      bindTelData: {
        phones: '',
        codes: '',
        getCode: '获取验证码',
        seconds: 30,
        types: 1,
        openid: null,
        companyCodes: '',
        captchaDisable: false,
        exist: false,
        checked: false
      },
      getWXLoginImg: {
        time: 300,
        isget: '',
        WXverify: false
      },
      // 登录数据
      loginData: {
        password: '',
        phonenum: '',
        showPwd: false,
        pwdType: 'password',
        loginTypes: 1
      },
      // 注册数据
      registerData: {
        phones: '',
        passwords: '',
        types: 1,
        codes: '',
        checked: false,
        companyCodes: ''
      },
      // 注册表单验证
      registRules: {
        phones: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            validator: checkPhone,
            trigger: 'blur'
          }
        ],
        passwords: [
          {
            required: true,
            message: '请输入账户密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 8,
            max: 16,
            message: '密码长度为8-16位',
            trigger: 'blur'
          }
        ],
        codes: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }
        ],
        companyCodes: [
          {
            min: 6,
            max: 6,
            message: '请输入正确的企业ID',
            trigger: 'blur'
          },
          {
            validator: checkCompanyCodes,
            trigger: 'blur'
          }
        ],
        checked: [
          {
            validator: checkProtocol,
            trigger: 'change'
          }
        ]
      },
      // 登录表单验证
      loginRules: {
        phonenum: [
          // { required: true, message: "请输入手机号", trigger: "blur" },
          {
            validator: checkPhone,
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入账户密码',
            trigger: 'blur'
          }
        ]
      },
      // 微信绑定表单验证
      bindwxRules: {
        phones: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            validator: checkPhone,
            trigger: 'blur'
          }
        ],
        codes: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }
        ],
        companyCodes: [
          {
            min: 6,
            max: 6,
            message: '请输入正确的企业ID',
            trigger: 'blur'
          },
          {
            validator: checkCompanyCodes,
            trigger: 'blur'
          }
        ]
      },
      getwxtime: null,
      gidForm: {
        gids: null
      },
      tokenForm: {
        tokens: ''
      }
    }
  },
  computed: {
    ...mapState('auth', ['token', 'productsNum']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', [
      'signIn',
      'setGid',
      'setProductsNum',
      'signOut',
      'setToken'
    ]),
    // 登录显示card
    goToMourse() {
      let goTab = 'tab-second'
      this.$router.push({ path: '/profile', query: { goTab: goTab } })
    },
    async loginCardShow() {
      this.start = true
      this.lrFrame = this.start
      this.activeName = 'login'
      this.stop()
      this.bgMsg = true
    },
    // 登录显示card
    async loginCardShow() {
      this.closeWechat()
      this.start = true
      this.lrFrame = this.start
      this.activeName = 'login'
      this.stop()
      this.bgMsg = true
    },
    // 获取验证码 this.registerData
    async handleGetCode(data) {
      if (!this.bindTelData.captchaDisable) {
        return new Promise((resolve, reject) => {
          auth.smsCodes(data).then(response => {
            this.$message({
              type: response.status === 0 ? 'success' : 'error',
              message: response.msg
            })
            this.bindTelData.captchaDisable = true
            this.bindTelData.getCode = this.bindTelData.seconds + '秒后重新发送'
            let interval = setInterval(() => {
              if (this.bindTelData.seconds <= 0) {
                this.bindTelData.getCode = '获取验证码'
                this.bindTelData.seconds = 30
                this.bindTelData.captchaDisable = false
                clearInterval(interval)
              } else {
                this.bindTelData.getCode =
                  --this.bindTelData.seconds + '秒后重新发送'
              }
            }, 1000)
          })
        })
      }
    },
    // 验证手机号是否存在
    verifyRgTel() {
      return new Promise((resolve, reject) => {
        auth.verifyPhone(this.registerData).then(response => {
          if (response.status !== 0) {
            this.$message({
              type: 'error',
              message: response.msg
            })
            this.bindTelData.captchaDisable = true
          } else {
            if (this.bindTelData.seconds === 30) {
              this.bindTelData.captchaDisable = false
              this.handleGetCode(this.registerData)
            }
          }
        })
      })
    },
    // 验证手机号是否已经绑定了微信
    verifyRgTelWX() {
      return new Promise((resolve, reject) => {
        auth.verifywechat(this.bindTelData).then(response => {
          if (response.status != 0) {
            this.$message({
              type: 'error',
              message: response.msg
            })
            this.bindTelData.captchaDisable = true
          } else {
            this.bindTelData.captchaDisable = false
            this.handleGetCode(this.bindTelData)
          }
        })
      })
    },
    // 注册 请求
    signUp(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          return new Promise((resolve, reject) => {
            auth.signUp(this.registerData).then(response => {
              this.$message({
                type: response.status === 0 ? 'success' : 'error',
                message: response.msg
              })
              if (response.status === 0) {
                this.close()
              }
            })
          })
        } else {
          return false
        }
      })
    },
    // 登录 请求
    signIns(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          return new Promise((resolve, reject) => {
            this.signIn(this.loginData).then(response => {
              this.$message({
                type: response.status === '0' ? 'error' : 'success',
                message: response.msg
              })
              if (response.status === 0) {
                this.close()
              }
            })
          })
        } else {
          return false
        }
      })
      this.move()
    },
    // 从微信拉取二维码
    async wxLogin() {
      this.WxLogin.redirect_uri =
        'http%3A%2F%2Fwww.1911edu.com%2FWapi%2FIndex%2FwxBack'
      this.WxLogin.state = Math.random()
        .toString(36)
        .substr(2)
      const weixin = new WxLogin(this.WxLogin)
      this.getwxtime = setInterval(() => {
        this.getWXAccredit()
      }, 1000)
    },
    // 微信绑定手机号
    async loginWechat() {
      return new Promise((resolve, reject) => {
        auth.loginWechat(this.bindTelData).then(response => {
          if (response.status === 0) {
            this.$message({
              type: 'success',
              message: '登录成功！'
            })
            this.tokenForm.token = response.data.token
            this.setToken(this.tokenForm)
            this.closeWechat()
            this.close()
          } else {
            this.$message({
              type: 'error',
              message: response.msg
            })
          }
        })
      })
    },
    //获取微信登录是否已经绑定
    getWXAccredit() {
      return new Promise((resolve, reject) => {
        auth.getWXAccredit(this.WxLogin).then(response => {
          if (response.status === 0) {
            this.tokenForm.tokens = response.data.token
            this.setToken(this.tokenForm)
            clearInterval(this.getwxtime)
            this.scanCodeShow = false //微信扫码
            this.closeWechat()
          }
          if (response.status === 100102) {
            this.scanCodeShow = false //微信扫码
            this.bindTelShow = true
            this.bindTelData.captchaDisable = true
            this.bindTelData.openid = response.data.openid
            clearInterval(this.getwxtime)
          } else if (response.status === 100100) {
            this.$message({
              type: 'error',
              message: response.msg
            })
          }
        })
      })
    },
    // 忘记密码
    forget() {
      this.$router.push('/home/pages/forgotPassword')
      this.close()
    },
    goMycourse() {
      this.$router.push('/profile')
    },
    goLinks() {
      this.$router.push('/shop/shoppingCart')
    },
    goLink(item) {
      this.$bus.$emit('selectProfileIndex', '123')
    },
    login() {},
    signOuts() {
      this.signOut()
      this.$router.push('/')
    },
    changePwd() {
      if (this.loginData.showPwd) {
        this.loginData.showPwd = false
        this.loginData.pwdType = 'password'
      } else {
        this.loginData.showPwd = true
        this.loginData.pwdType = 'text'
      }
    },
    register() {
      this.closeWechat()
      this.start = true
      this.lrFrame = true
      this.activeName = 'register'
      if (this.start === true) {
        this.stop()
      } else {
        this.move()
      }
    },
    close() {
      this.move()
      this.start = false
      this.lrFrame = false
      this.bgMsg = false
      this.emptyForm()
      clearInterval(this.getwxtime)
    },
    closeWechat() {
      this.move()
      this.start = false
      this.lrFrame = false
      this.wechatLogin = false
      this.scanCodeShow = false
      this.bindTelShow = false
      clearInterval(this.getwxtime)
      // document.body.style.overflow = "auto";
    },
    emptyForm() {
      this.loginData.phonenum = ''
      this.loginData.password = ''
      this.loginData.pwdType = 'password'
      this.loginData.loginTypes = 1
      this.registerData.phones = ''
      this.registerData.passwords = ''
      this.registerData.types = 1
      this.registerData.codes = ''
      this.registerData.checked = [false]
      this.registerData.companyCodes = ''
    },
    handleClick(tab, event) {
      this.emptyForm()
    },
    wechatLogined() {
      //微信登录
      this.lrFrame = false
      this.wechatLogin = true
      this.scanCodeShow = true //微信扫码
      //this.bindTelShow=true; //绑定手机号
      // this.bindSuccessShow=true; // 登录成功
      this.wxLogin()
    },
    polling() {
      //轮询请求 微信扫码结果
    },
    stop() {
      var mo = function(e) {
        e.preventDefault()
      }
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', mo, false) //禁止页面滑动
    },
    /***取消滑动限制***/
    move() {
      var mo = function(e) {
        e.preventDefault()
      }
      document.body.style.overflow = 'auto' //出现滚动条
      document.removeEventListener('touchmove', mo, false)
    },
    goSearch(item) {
      persistStore.set('key', this.search)
      switch (window.location.pathname) {
        case '/course/pages/search':
          break
        default:
          this.$router.push('/course/pages/search')
          break
      }
    },
    gokey() {
      if (event.keyCode == 13) {
        persistStore.set('key', this.search)
        this.$router.push('/course/pages/search')
        // switch (window.location.pathname) {
        // case "/course/pages/search":
        //   break;
        // default:
        //   this.$router.push("/course/pages/search");
        //   break;
        // }
      }
    },
    goSearchd(item) {
      this.$router.push(item)
    },
    backHome() {
      this.$router.push('/')
    },
    goLink(item) {
      this.gidForm.gids = item
      this.setGid(this.gidForm)
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', item)
    }
  },
  mounted() {
    this.$bus.$on('loginShow', data => {
      this.loginCardShow()
    })
    return new Promise((resolve, reject) => {
      home.shopCartList().then(response => {
        let body = response.data.curriculumCartList
        let len = { pn: body.length }
        this.setProductsNum(len)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.cli {
  cursor: pointer;
}
</style>
