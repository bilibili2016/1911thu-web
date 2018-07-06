<template>
  <div class="headerBox">
    <div class="recommend" v-if="bannerMsg">
      <div>
        <img src="@/assets/images/hr_discounts1.png" alt="">
        <span>优惠专题入口</span>
        <img src="@/assets/images/hr_discounts2.png" alt="">
        <i class="el-icon-close" @click="closeBanner"></i>
      </div>
    </div>
    <div class="main">
      <div class="headerLogo fl" @click="goSearchd('/')">
        <img src="http://papn9j3ys.bkt.clouddn.com/logo.png" alt="">
        <!-- <img src="@/assets/images/logo.png" alt=""> -->
      </div>
      <div class="search">
        <input type="text" placeholder="请输入课程" v-model="search" @keyup.enter="goSearch">
        <i @click="goSearch"></i>
      </div>
      <div :class="{ HREntry : true , islogined : isAuthenticated }">
        <span class="hrin center" @click="goSearchd('/other/institutional')">机构入口
          <i></i>
        </span>
        <span class="center" v-show="isAuthenticated" @click="goMycourse('tab-second')">我的课程</span>
        <div class="downLoad">
          <i class="phone"></i>
          <div class="downApp clearfix">
            <i :class={iphone:!iphones} class="downIcon fl"></i>
            <div class="changeType fr">
              <span>下载1911学堂APP</span>
              <span @mouseenter="changeImg('iphone')">
                <i></i>AppStore下载</span>
              <span @mouseenter="changeImg('android')">
                <i></i>Android下载</span>
            </div>
          </div>
        </div>
        <div class="shoppingCart" v-show="isAuthenticated" @click="goSearchd('/shop/shoppingcart')">
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
        <span>
          <img :src="user.userImg" alt="" @click="goLink('tab-first')">
        </span>
        <ul class="subPages">
          <li @click="goLink('tab-first')">我的首页</li>
          <li @click="goLink('tab-second')">我的课程</li>
          <li @click="goLink('tab-third')">我的订单</li>
          <li @click="goLink('tab-fourth')">我的消息</li>
          <li @click="goLink('tab-fifth')">个人设置</li>
          <li @click="goLink('tab-sixth')">绑定课程</li>
          <li @click="signOuts">退出</li>
        </ul>
      </div>
    </div>
    <!-- 登录注册 -->
    <div class="start" v-if="start">
      <div class="bgt" @click="close"></div>
      <!-- @click="close" -->
      <div class="lrFrame" v-show="lrFrame">
        <el-tabs v-model="activeName" @tab-click="handleClick" v-loading="loadLogin">
          <el-tab-pane label="登录" name="login">
            <!-- 登录 表单-->
            <el-form :model="loginData" status-icon :rules="loginRules" ref="loginData" class="demo-ruleForm" @keyup.enter.native="signIns('loginData')">
              <el-form-item prop="phonenum">
                <el-input v-model.number="loginData.phonenum" auto-complete="off" placeholder="请输入登录手机号" clearable type="text"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input :type="loginData.pwdType" v-model="loginData.password" auto-complete="off" placeholder="8-16位密码，区分大小写，不能用空格"></el-input>
                <span :class="{hidePwd:!loginData.showPwd,showPwd:loginData.showPwd}" @click="changePwd" alt=""></span>
              </el-form-item>
              <el-row>
                <!-- @click="goSearchd('/home/components/forgotpassword')"  -->
                <div @click="forget">忘记密码?</div>
                <el-button :disabled="isClick" @click="signIns('loginData')">登录</el-button>
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
              <!-- <el-form-item prop="companyCodes">
                <el-input v-model="registerData.companyCodes" placeholder="绑定机构ID"></el-input>
                <span class="bindCompany">(可选)</span>
              </el-form-item> -->
              <el-form-item prop="checked">
                <el-checkbox-group v-model="registerData.checked">
                  <el-checkbox label="同意" name="checked"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-row>
                <el-button :disabled="isClick" @click.native="signUp('registerData')">注册</el-button>
              </el-row>
            </el-form>

            <div class="userPotal" @click="userProtocol">1911学堂《用户注册协议》</div>

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
            <el-input v-model.number="bindTelData.phones" placeholder录手机号 "></el-input>
          </el-form-item>
          <el-form-item prop="code ">
            <el-input class="captcha " v-model.number="bindTelData.codes " placeholder="请输入验证码 "></el-input>
            <div class="getCode " @click="verifyRgTelWX ">{{bindTelData.getCode}}</div>
          </el-form-item>
          <el-form-item prop="companyCodes ">
            <el-input v-model="bindTelData.companyCodes " placeholder="绑定机构 "></el-input>
            <span class="bindCompany ">(可选)</span>
          </el-form-item>
          <el-row>
            <el-button @click.native="loginWechat(bindTelData) ">绑定</el-button>
          </el-row>
        </el-form>
        <div class="scanCode " v-show="scanCodeShow ">
          <h4 class="clearfix "></h4>
          <!-- el-icon-loading -->
          <div class="wxchatIMG " id="wxchatIMG "></div>
        </div>
        <div class="bindSuccess " v-show="bindSuccessShow ">
          <img src="http://papn9j3ys.bkt.clouddn.com/bindingSuccess.png " alt=" ">
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
import { MessageBox } from 'element-ui'
import { encryption } from '~/lib/util/helper'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error('密码只能输入数字、字母'))
      }
      return callback()
    }
    var checkCompanyCodes = (rule, value, callback) => {
      if (value !== '' && !/^[A-Za-z0-9]+$/.test(value)) {
        return callback(new Error('请输入正确机构ID'))
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
      isClick: false,
      searchImg: require('@/assets/images/search.png'),
      bannerMsg: false,
      downApp: 'http://papn9j3ys.bkt.clouddn.com/wechatLogin.png',
      start: false,
      iphones: true,
      lrFrame: false,
      islogin: false,
      loadLogin: false,
      activeName: 'second',
      search: '',
      shoppingCartNum: 1,
      tokenForm: {
        tokens: '123'
      },
      bgMsg: false,
      user: {
        userImg: ''
      },
      activeName: 'login',
      QRcode: 'http://papn9j3ys.bkt.clouddn.com/wechatLogin.png',
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
        ectpwd: '',
        phonenum: '',
        showPwd: false,
        pwdType: 'password',
        loginTypes: 1
      },
      // 注册数据
      registerData: {
        phones: '',
        passwords: '',
        ectpwd: '',
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
          },
          {
            validator: validatePass,
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
            message: '请输入正确的机构ID',
            trigger: 'blur'
          },
          {
            validator: checkCompanyCodes,
            trigger: 'blur'
          }
        ],
        checked: [
          {
            required: true,
            message: '',
            trigger: 'change'
          },
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
            message: '请输入正确的机构ID',
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
        '/shop/affirmorder',
        '/shop/shoppingcart',
        '/profile',
        '/shop/wepay'
      ]
    }
  },
  computed: {
    ...mapState('auth', ['token', 'productsNum']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  mounted() {
    let me = this
    this.getCount()
    this.$bus
      .$on('loginShow', data => {
        this.loginCardShow()
      })
      .$on('updateCount', () => {
        me.getCount()
      })
  },
  methods: {
    ...mapActions('auth', [
      'signIn',
      'setGid',
      'setProductsNum',
      'signOut',
      'setToken',
      'setPwd'
    ]),
    openWx() {
      var target_url =
        'http://qr.liantu.com/api.php?text=http://test.qicheyitiao.com'
      window.open(target_url, 'weixin', 'height=320, width=320')
    },
    closeBanner() {
      this.bannerMsg = false
    },
    getCount() {
      return new Promise((resolve, reject) => {
        home.shopCartList().then(response => {
          let body = response.data.curriculumCartList
          let len = {
            pn: body.length
          }
          this.setProductsNum(len)
        })
      })
    },
    changeImg(what) {
      what == 'android' ? (this.iphones = false) : (this.iphones = true)
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
      if (this.bindTelData.seconds === 30) {
        if (this.bindTelData.captchaDisable === false) {
          return new Promise((resolve, reject) => {
            auth.smsCodes(data).then(response => {
              this.$message({
                type: response.status === 0 ? 'success' : 'error',
                message: response.msg
              })
              this.bindTelData.captchaDisable = true
              this.bindTelData.getCode =
                this.bindTelData.seconds + '秒后重新发送'
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
      }
    },
    // 验证手机号是否存在
    verifyRgTel() {
      if (this.errorTel.tel === this.registerData.phones) {
        this.$message({
          showClose: true,
          type: 'error',
          message: this.errorTel.msg
        })
      } else {
        if (this.bindTelData.seconds == 30) {
          return new Promise((resolve, reject) => {
            auth.verifyPhone(this.registerData).then(response => {
              if (response.status !== 0) {
                this.errorTel.tel = this.registerData.phones
                this.errorTel.msg = response.msg
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: response.msg
                })
                this.bindTelData.captchaDisable = true
              } else {
                if (this.bindTelData.seconds === 30) {
                  this.errorTel.tel = null
                  this.errorTel.msg = null
                  this.bindTelData.captchaDisable = false
                  this.handleGetCode(this.registerData)
                }
              }
            })
          })
        }
      }
    },
    // 验证手机号是否已经绑定了微信
    verifyRgTelWX() {
      if (this.bindTelData.seconds === 30) {
        return new Promise((resolve, reject) => {
          auth.verifywechat(this.bindTelData).then(response => {
            if (response.status != 0) {
              this.$message({
                showClose: true,
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
      }
    },
    // 注册完登录 请求
    alreadySignin(formName) {
      this.loginData.phonenum = this.registerData.phones
      this.loginData.password = this.registerData.passwords
      this.loginData.ectpwd = encryption(this.registerData.passwords)
      this.loadLogin = true
      return new Promise((resolve, reject) => {
        this.signIn(this.loginData).then(response => {
          this.$message({
            showClose: true,
            type: response.status === 0 ? 'success' : 'error',
            message: response.msg
          })
          if (response.status === 0) {
            this.close()
            this.getUserInfo()
          }
          this.loadLogin = false
        })
      })
    },
    // 注册 请求
    signUp(formName) {
      this.isClick = true
      this.registerData.ectpwd = encryption(this.registerData.passwords)
      this.$refs[formName].validate(valid => {
        if (this.registerData.checked) {
          if (valid) {
            this.loadLogin = true
            return new Promise((resolve, reject) => {
              auth.signUp(this.registerData).then(response => {
                this.$message({
                  showClose: true,
                  type: response.status === 0 ? 'success' : 'error',
                  message: response.msg
                })
                if (response.status === 0) {
                  this.alreadySignin()
                  this.close()
                }
                this.loadLogin = false
                this.isClick = false
              })
            })
          } else {
            this.isClick = false
            return false
          }
        } else {
          this.isClick = false
        }
      })
    },
    // 登录 请求
    signIns(formName) {
      this.isClick = true
      this.loginData.ectpwd = encryption(this.loginData.password)
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.loadLogin = true
          return new Promise((resolve, reject) => {
            this.signIn(this.loginData).then(response => {
              this.$message({
                showClose: true,
                type: response.status === 0 ? 'success' : 'error',
                message: response.msg
              })
              if (response.status === 0) {
                this.close()
                this.getUserInfo()
                this.getCount()
                persistStore.set('loginMsg', false)
                this.$bus.$emit('reLogin', true)
              }
              this.isClick = false
              // this.loadLogin = false
            })
          })
        } else {
          this.isClick = false
          return false
        }
      })
      this.move()
    },
    // 从微信拉取二维码
    async wxLogin() {
      var link = window.location.origin
      if (link === 'http://www.1911edu.com') {
        link = 'http://api.1911edu.com/Wapi/Index/wxBack'
      } else {
        link = 'http://ceshi.1911edu.com/Wapi/Index/wxBack'
      }
      this.WxLogin.redirect_uri = encodeURIComponent(link)
      this.WxLogin.state = Math.random()
        .toString(36)
        .substr(2)
      const weixin = new WxLogin(this.WxLogin)
      this.currentURL = this.$route.path
      this.getwxtime = setInterval(() => {
        this.getWXAccredit()
      }, 1000)
    },
    // 微信绑定手机号
    async loginWechat() {
      this.loadLogin = true
      return new Promise((resolve, reject) => {
        auth.loginWechat(this.bindTelData).then(response => {
          if (response.status === 0) {
            this.$message({
              showClose: true,
              type: 'success',
              message: '登录成功！'
            })
            this.tokenForm.tokens = response.data.token
            this.setToken(this.tokenForm)
            this.getUserInfo()
            this.getCount()
            this.closeWechat()
            this.close()
          } else {
            this.$message({
              showClose: true,
              type: 'error',
              message: response.msg
            })
          }
          this.loadLogin = false
        })
      })
    },
    //获取微信登录是否已经绑定
    getWXAccredit() {
      // 判断当前网址是否已经变更
      if (this.$route.path !== this.currentURL) {
        this.closeWechat()
        return false
      }
      return new Promise((resolve, reject) => {
        auth.getWXAccredit(this.WxLogin).then(response => {
          if (response.status === 0) {
            clearInterval(this.getwxtime)
            this.tokenForm.tokens = response.data.token
            this.setToken(this.tokenForm)
            this.getUserInfo()
            this.getCount()
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
              showClose: true,
              type: 'error',
              message: response.msg
            })
          }
        })
      })
    },
    // 忘记密码
    forget() {
      this.$router.push('/home/components/forgotpassword')
      this.close()
    },
    goMycourse(item) {
      this.gidForm.gids = item
      this.setGid(this.gidForm)
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', item)
      this.$router.push({
        path: '/profile',
        query: {
          tab: item
        }
      })
    },
    goLinks() {
      this.$router.push('/shop/shoppingcart')
    },
    goLink(item) {
      this.$bus.$emit('selectProfileIndex', '123')
      // persistStore.set('selectTab', item)
    },
    login() {},
    signOuts() {
      this.signOut()
      persistStore.clearAll()
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
      this.emptyWechatForm()
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
      // this.registerData.checked = [false]
      this.registerData.checked = false
      this.registerData.companyCodes = ''
    },
    emptyWechatForm() {
      ;(this.bindTelData.phones = ''),
        (this.bindTelData.codes = ''),
        (this.bindTelData.seconds = 30),
        (this.bindTelData.openid = null),
        (this.bindTelData.companyCodes = ''),
        (this.bindTelData.captchaDisable = false),
        (this.bindTelData.exist = false),
        (this.bindTelData.checked = false)
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
      this.search = this.search.replace(/[ ]/g, '')
      if (this.search !== '') {
        persistStore.set('key', this.search)
        switch (window.location.pathname) {
          case '/course/search':
            this.$router.go()
            break
          default:
            this.$router.push('/course/search')
            // window.open(window.location.origin + '/course/search')
            break
        }
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
    },
    // 获取用户头像
    getUserInfo() {
      // if (this.isAuthenticated) {
      home.getUserInfo().then(res => {
        if (res.status === '100008') {
          persistStore.set('dandian', true)
          this.$alert(res.msg + ',' + '请重新登录', '温馨提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.signOuts()
              //初始化首页数据
              this.$bus.$emit('reLogin', true)
              this.$bus.$emit('loginShow', true)
            }
          })
        } else if (res.status === '100100') {
          persistStore.set('dandian', true)
          if (this.authPath.indexOf(window.location.pathname) > 0) {
            this.$alert(res.msg + ',' + '请重新登录', '温馨提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.signOuts()
                this.$bus.$emit('loginShow', true)
              }
            })
          }
        } else {
          persistStore.set('dandian', false)
          this.userInfo = res.data.userInfo
          persistStore.set('nickName', this.userInfo.nick_name)
          persistStore.set('phone', this.userInfo.user_name)
          if (this.userInfo.head_img && this.userInfo.head_img != '') {
            this.user.userImg = this.userInfo.head_img
          } else {
            this.user.userImg =
              'http://papn9j3ys.bkt.clouddn.com/profile_avator01.png'
          }
          if (/^\//.test(this.userInfo.head_img)) {
            this.user.userImg =
              'http://papn9j3ys.bkt.clouddn.com/profile_avator01.png'
          }
        }
      })
      // }
    },
    userProtocol() {
      window.open(window.location.origin + '/other/userProtocol')
    }
  },
  mounted() {
    // if (window.location.pathname === '/other/hrentry') {
    //   this.bannerMsg = true
    // }
    this.$bus.$emit('bannerShow', false)
    this.$bus.$on('bannerShow', data => {
      if (data === true) {
        this.bannerMsg = true
      } else {
        this.bannerMsg = false
      }
    })

    this.getUserInfo()
    this.$bus.$on('loginShow', data => {
      this.loginCardShow()
    }),
      this.$bus.$on('changeimg', data => {
        this.user.userImg = data
      })
    if (!this.token) {
      this.signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
.cli {
  cursor: pointer;
}
.recommend {
  // position: absolute;
  // top: 0;
  // left: 0;
  height: 40px;
  line-height: 40px;
  width: 100%;
  background: linear-gradient(to right, #5e00b5, #e91351);
  div {
    width: 1100px;
    margin: 0 auto;
    height: 40px;
    text-align: center;
    line-height: 40px;
    span {
      vertical-align: top;
      font-weight: 700;
      font-size: 18px;
      color: #fff;
      margin: 0 20px;
    }
    img {
      width: 52px;
      height: 37px;
    }
    img:first-child {
      width: 53px;
      height: 30px;
    }
  }
  i {
    float: right;
    width: 20px;
    height: 20px;
    margin-top: 10px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    background-color: #6417a6;
  }
}
.userPotal {
  position: absolute;
  right: 97px;
  bottom: 175px;
  font-size: 12px;
  color: #6417a6;
  font-weight: 500;
  cursor: pointer;
}
</style>
