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

    <!-- <el-select v-model="value" @change="changeNav">
      <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value">
      </el-option>
    </el-select> -->
    <div class="main">
      <div class="headerLogo fl" @click="goSearchd('/')">
        <img src="http://papn9j3ys.bkt.clouddn.com/logo.png" alt="">
        <!-- <img src="@/assets/images/logo.png" alt=""> -->
      </div>
      <v-tabs></v-tabs>
      <div class="search">
        <input type="text" placeholder="请输入课程、老师" v-model="search" @keyup.enter="goSearch">
        <i class="el-icon-search" @click="goSearch"></i>
      </div>
      <div :class="['HREntry' ,{islogined : isAuthenticated }]">

        <span class="hrin center" @click="goSearchd('/other/institutional')">单位入口
          <i></i>
        </span>

        <span class="center" @click="addEcg" style="width:90px;">课程兑换码
          <i></i>
        </span>
        <!-- <span class="center" v-show="isAuthenticated" @click="goMycourse('tab-second')">我的课程</span> -->
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
        <span class="login" @click="loginCardShow">登录</span>
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
          <li @click="goLink('tab-sixth')">兑换码管理</li>
          <li @click="goLink('tab-seventh')">发票管理</li>
          <!-- <li v-if="this.codeData.length !== 0" @click="goLink('tab-sixth')">课程码管理</li> -->
          <li @click="signOuts">退出</li>
        </ul>
      </div>
    </div>
    <!-- 兑换码弹框 -->
    <div class="exchange" v-show="bindForm.isBind">
      <div class="innerWord">
        <i class="el-icon-close closeEcg" @click="closeEcg"></i>
        <div class="changeContent">
          <div class="changeInput">
            <span>课程兑换码:</span>
            <input v-model="bindForm.courseId" placeholder="请输入您的课程兑换码，区分大小写。">
            <p>
              <span>{{bindForm.error}}</span>
            </p>
          </div>
          <div class="changeTips">
            <p>课程兑换码说明：</p>
            <p>1.输入课程兑换码，绑定兑换购买的课程</p>
            <p>2.绑定成功后，不可更改。</p>
          </div>
          <div :class="['bind',{input:bindForm.isInput}]" @click="detection">绑定</div>
        </div>
      </div>
    </div>
    <!-- 登录注册 -->
    <div class="start" v-if="start">
      <div class="bgt"></div>
      <!-- @click="close" -->
      <div class="lrFrame" v-show="lrFrame">
        <i class="el-icon-close closelrFrom" @click="close"></i>
        <el-tabs v-model="activeName" @tab-click="handleClick" v-loading="loadLogin">
          <el-tab-pane label="登录" name="login">
            <!-- 登录 表单-->
            <!-- 账号密码登录 start-->
            <el-form :model="loginData" status-icon :rules="loginRules" ref="loginData" class="demo-ruleForm" @keyup.enter.native="signIns('loginData')" v-if="mobileloginmsg === false">
              <!-- 账号密码登录 -->
              <div>
                <el-form-item prop="phonenum">
                  <el-input v-model.number="loginData.phonenum" auto-complete="off" placeholder="请输入登录手机号" clearable type="text"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input :type="loginData.pwdType" v-model="loginData.password" auto-complete="off" placeholder="8-16位密码，区分大小写，不能用空格"></el-input>
                  <span :class="{hidePwd:!loginData.showPwd,showPwd:loginData.showPwd}" @click="changePwd" alt=""></span>
                </el-form-item>
              </div>
              <el-row>
                <div @click="forget">忘记密码?</div>
                <div class="mobile-login" style="float:left;" @click="mobilelogin">{{mobileloginmsg === true ? '账号密码登录' : '手机验证码登录'}}</div>
                <el-button :disabled="isloginClick" @click="signIns('loginData')">登录</el-button>
              </el-row>
            </el-form>
            <!-- 账号密码登录 end-->

            <!-- 手机验证码登录 start-->
            <el-form :model="registerMobileData" status-icon :rules="loginDXRules" ref="loginDatamobile" class="demo-ruleForm" v-if="mobileloginmsg === true">
              <!-- 手机验证码登录 -->
              <div v-if="mobileloginmsg === true">
                <el-form-item prop="phones">
                  <el-input v-model.number="registerMobileData.phones" placeholder="请输入登录手机号" clearable auto-complete="off" type="text"></el-input>
                </el-form-item>
                <el-form-item prop="codes" style="display:none">
                  <el-input v-model.number="registerMobileData.codes" placeholder="请输入登录手机号" clearable auto-complete="off" type="text"></el-input>
                </el-form-item>
                <el-form-item prop="codes">
                  <el-input class="captcha" v-model="registerMobileData.codes" placeholder="请输入验证码" auto-complete="off" type="text"></el-input>
                  <!-- <div class="getCode" @click="verifyRgTel">{{bindTelData.getCode}}</div> -->
                  <el-button type="primary" :disabled="codeClick" class="getCode" @click="handleMobileGetCode('loginDatamobile')" style="line-height:0">{{bindTelData.getCode}}</el-button>
                </el-form-item>
              </div>
              <el-row>
                <div @click="forget">忘记密码?</div>
                <div class="mobile-login" style="float:left;" @click="mobilelogin">{{mobileloginmsg === true ? '账号密码登录' : '手机验证码登录'}}</div>
                <el-button :disabled="isloginClick" @click="signInsMobile('loginDatamobile')">登录</el-button>
              </el-row>
            </el-form>
            <!-- 手机验证码登录 end-->
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
                <!-- <div class="getCode" @click="verifyRgTel">{{bindTelData.getCode}}</div> -->
                <el-button type="primary" :disabled="codeClick" class="getCode" @click="verifyRgTel" style="line-height:0">{{bindTelData.getCode}}</el-button>
                <!--  -->
              </el-form-item>
              <el-form-item prop="passwords">
                <el-input v-model="registerData.passwords" type="password" placeholder="8-16位密码，区分大小写，不能用空格"></el-input>
              </el-form-item>
              <!-- <el-form-item prop="companyCodes">
                <el-input v-model="registerData.companyCodes" placeholder="绑定单位ID"></el-input>
                <span class="bindCompany">(可选)</span>
              </el-form-item> -->
              <el-form-item prop="">
                <el-checkbox-group v-model="registerData.checked">
                  <el-checkbox label="同意" name="checked"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-row>
                <el-button :disabled="isClick" class="registerUser " :class="{noSubmit:isHasClass}" v-loading="isloading" @click.native="signUp('registerData')">注册</el-button>
              </el-row>
            </el-form>
            <div class="userPotal" @click="userProtocol">1911学堂《用户注册协议》</div>
            <div class="otherLogin" @click="wechatLogined">其它方式登录</div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 微信登录 -->
      <div class="lrFrame wechatLogin" v-show="wechatLogin">
        <i class="el-icon-close closeWechat" @click="close"></i>
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
          <!-- <el-form-item prop="companyCodes">
            <el-input v-model="bindTelData.companyCodes" placeholder="绑定单位"></el-input>
            <span class="bindCompany">(可选)</span>
          </el-form-item> -->
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
          <img src="http://papn9j3ys.bkt.clouddn.com/bindingSuccess.png" alt="">
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
import { other, auth, home, shopcart } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
import { MessageBox } from 'element-ui'
import { encryption } from '~/lib/util/helper'
import Tabs from '@/components/common/Tabs.vue'
export default {
  components: {
    'v-tabs': Tabs
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error('密码只能输入数字、字母'))
      }
      return callback()
    }
    var checkCompanyCodes = (rule, value, callback) => {
      if (value !== '' && !/^[A-Za-z0-9]+$/.test(value)) {
        return callback(new Error('请输入正确单位ID'))
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
      isHasClass: true,
      //codeData: [], //专属邀请码根据接口长度判断是否显示
      codeListForm: {
        pages: 1,
        limits: null
      },
      isloading: false, //注册按钮点击之后loading（体验）
      codeInterval: null, //注册获取验证码定时循环
      codeClick: false, //判断是否点击过 获取验证码（防重）
      judegExplorer: false, //判断当前浏览器，如果是IE页面顶部提示
      isClick: true, //判断是否点击过注册按钮（防重）
      isloginClick: false,
      searchImg: require('@/assets/images/search.png'),
      bannerMsg: false,
      downApp: 'http://papn9j3ys.bkt.clouddn.com/wechatLogin.png',
      bindForm: {
        courseId: '',
        isBind: false,
        isInput: false,
        showErr: false,
        error: ''
      },
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
      // 登录数据 手机验证码
      loginDatamobile: {
        password: '',
        ectpwd: '',
        phonenum: '',
        showPwd: false,
        pwdType: 'password',
        loginTypes: 2
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
      // 手机验证码登录数据
      registerMobileData: {
        phones: '',
        phonenum: '',
        passwords: '',
        ectpwd: '',
        loginTypes: 2,
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
        phonenum: [
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
            message: '请输入正确的单位ID',
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
      // 短信登录表单验证
      loginDXRules: {
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
            message: '请输入正确的单位ID',
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
      ],
      didForm: {
        dids: ''
      },
      mobileloginmsg: false
    }
  },
  computed: {
    ...mapState('auth', ['token', 'productsNum']),
    ...mapGetters('auth', ['isAuthenticated'])
  },

  methods: {
    ...mapActions('auth', [
      'signIn',
      'signInmobile',
      'setGid',
      'setProductsNum',
      'signOut',
      'setToken',
      'setPwd',
      'setDid'
    ]),
    closeEcg() {
      this.bindForm.courseId = ''
      this.bindForm.isBind = false
    },
    addEcg() {
      if (this.token) {
        this.bindForm.isBind = true
      } else {
        this.$alert('抱歉，您还未登录，请先登录吧！', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            if (action === 'cancel') {
            } else {
              this.signOuts()
              this.$bus.$emit('loginShow', true)
            }
          }
        })
      }
    },
    // 检测邀请码内是否包含已绑定的课程
    detection() {
      home.detectionCode(this.bindForm).then(res => {
        // 判断邀请码内是否包含已绑定的课程
        if (res.data.is_exist === 1) {
          this.$confirm(
            '该邀请码所包含商品与已购商品重复，如继续绑定，重复商品将进行有效时间累加。',
            {
              confirmButtonText: '坚持绑定',
              cancelButtonText: '取消',
              closeOnHashChange: false,
              // type: 'warning',
              center: true
            }
          )
            .then(() => {
              // 添加绑定课程
              this.goBind()
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '已取消绑定'
              })
            })
        } else {
          this.goBind()
        }
      })
    },
    // 头部绑定课程
    goBind() {
      home.bindingCurriculumPrivate(this.bindForm).then(res => {
        if (res.status === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: res.msg
          })
          this.bindForm.courseId = ''
          this.bindForm.isBind = false
          if (window.location.pathname === '/profile') {
            this.$bus.$emit('studyCourse')
          }
          this.goLink('tab-second')
        } else if (res.status === '100100') {
          this.bindForm.showErr = true
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
          this.bindForm.error = res.msg
        }
      })
    },
    // 验证手机登录还是账号密码登录
    mobilelogin() {
      this.mobileloginmsg = !this.mobileloginmsg
      this.registerMobileData.phones = ''
      this.registerMobileData.codes = ''
      this.emptyForm()
      // this.registerData.codes = '123'
    },
    explorer() {
      if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        this.judegExplorer = true
      } else {
        this.judegExplorer = false
      }
    },
    openWx() {
      var target_url =
        'http://qr.liantu.com/api.php?text=http://test.qicheyitiao.com'
      window.open(target_url, 'weixin', 'height=320, width=320')
    },
    closeBanner() {
      this.bannerMsg = false
    },
    getCount() {
      shopcart.shopCartList().then(response => {
        let body =
          Number(response.data.curriculumCartList.length) +
          Number(response.data.projectCartList.length)
        let len = {
          pn: body
        }
        this.setProductsNum(len)
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
      this.mobileloginmsg = false
    },
    // 注册时候获取验证码 this.registerData
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
              this.codeInterval = setInterval(() => {
                if (this.bindTelData.seconds <= 0) {
                  this.bindTelData.getCode = '获取验证码'
                  this.bindTelData.seconds = 30
                  this.bindTelData.captchaDisable = false
                  this.codeClick = false
                  clearInterval(this.codeInterval)
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
    // 手机验证码 登录时候
    async handleMobileGetCode() {
      if (!/^[1][3,4,5,6,7,8][0-9]{9}$/.test(this.registerMobileData.phones)) {
        this.$message({
          type: 'error',
          message: '请输入正确手机号'
        })
      } else {
        if (this.bindTelData.seconds === 30) {
          if (this.bindTelData.captchaDisable === false) {
            return new Promise((resolve, reject) => {
              auth.smsCodes(this.registerMobileData).then(response => {
                this.$message({
                  type: response.status === 0 ? 'success' : 'error',
                  message: response.msg
                })
                this.bindTelData.captchaDisable = true
                this.bindTelData.getCode =
                  this.bindTelData.seconds + '秒后重新发送'
                this.codeInterval = setInterval(() => {
                  if (this.bindTelData.seconds <= 0) {
                    this.bindTelData.getCode = '获取验证码'
                    this.bindTelData.seconds = 30
                    this.bindTelData.captchaDisable = false
                    this.codeClick = false
                    clearInterval(this.codeInterval)
                  } else {
                    this.bindTelData.getCode =
                      --this.bindTelData.seconds + '秒后重新发送'
                  }
                }, 1000)
              })
            })
          }
        }
      }
    },
    // 验证手机号是否存在
    verifyRgTel() {
      this.codeClick = true
      if (this.errorTel.tel === this.registerData.phones) {
        zxc

        this.$message({
          showClose: true,
          type: 'error',
          message: this.errorTel.msg
        })
        this.codeClick = false
      } else {
        if (this.bindTelData.seconds == 30) {
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
              this.codeClick = false
            } else {
              if (this.bindTelData.seconds === 30) {
                this.errorTel.tel = null
                this.errorTel.msg = null
                this.bindTelData.captchaDisable = false
                this.handleGetCode(this.registerData)
              }
            }
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
    },
    // 注册 请求
    signUp(formName) {
      this.isloading = true
      this.isClick = true
      this.registerData.ectpwd = encryption(this.registerData.passwords)
      this.$refs[formName].validate(valid => {
        if (this.registerData.checked) {
          if (valid) {
            this.loadLogin = true
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
              this.isloading = false
            })
          } else {
            this.isClick = false
            this.isloading = false
            return false
          }
        } else {
          this.isClick = false
          this.isloading = false
        }
      })
    },
    // 账号密码 登录 请求
    signIns(formName) {
      this.isloading = false
      this.loginData.ectpwd = encryption(this.loginData.password)
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.loadLogin = true

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
              // this.getCodeList()
              persistStore.set('loginMsg', false)
              this.$bus.$emit('reLogin', true)
            }
            this.isloginClick = false
            this.isloading = false
            // this.loadLogin = false
          })
        } else {
          this.isloginClick = false
          this.isloading = false
          return false
        }
      })
      this.move()
    },
    // 手机验证码 登录
    signInsMobile(formName) {
      this.isloginClick = true
      this.isloading = false
      // this.loginData.ectpwd = encryption(this.loginData.password)
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.loadLogin = true

          this.signInmobile(this.registerMobileData).then(response => {
            this.$message({
              showClose: true,
              type: response.status === 0 ? 'success' : 'error',
              message: response.msg
            })

            if (response.status === 0) {
              this.close()
              this.getUserInfo()
              this.getCount()
              // this.getCodeList()
              persistStore.set('loginMsg', false)
              this.$bus.$emit('reLogin', true)
            }
            this.isloginClick = false
            this.isloading = false
            // this.loadLogin = false
          })
        } else {
          this.isloading = false
          return false
        }
      })
      this.move()
    },
    // 从微信拉取二维码
    async wxLogin() {
      var link = window.location.origin
      // if (link === 'http://www.1911edu.com') {
      //   link = 'http://api.1911edu.com/Wapi/Index/wxBack'
      // } else {
      //   link = 'http://ceshi.1911edu.com/Wapi/Index/wxBack'
      // }
      if (link === 'http://edu.1911thu.com') {
        link = 'http://wapi.1911thu.com/Wapi/Index/wxBack'
        this.WxLogin.appid = 'wx60c7f5b807077a7b'
      } else {
        link = 'http://test.1911thu.com/Wapi/Index/wxBack'
        this.WxLogin.appid = 'wxefa2295aae13fe2e'
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
          // this.getCodeList()
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
    },
    //获取微信登录是否已经绑定
    getWXAccredit() {
      // 判断当前网址是否已经变更
      if (this.$route.path !== this.currentURL) {
        this.closeWechat()
        return false
      }

      auth.getWXAccredit(this.WxLogin).then(response => {
        if (response.status === 0) {
          clearInterval(this.getwxtime)
          this.tokenForm.tokens = response.data.token
          this.setToken(this.tokenForm)
          this.getUserInfo()
          this.getCount()
          // this.getCodeList()
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
      clearInterval(this.codeInterval)
      this.bindTelData.getCode = '获取验证码'
      this.bindTelData.seconds = 30
      this.bindTelData.captchaDisable = false
      this.codeClick = false
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

      this.registerMobileData.phones = ''
      this.registerMobileData.passwords = ''
      this.registerMobileData.types = 3
      this.registerMobileData.codes = ''
      // this.registerMobileData.checked = [false]
      this.registerMobileData.checked = false
      this.registerMobileData.companyCodes = ''
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
      if (
        !/[@#\$%\^&\*]+/g.test(this.search) &&
        this.search !== '' &&
        this.search.length < 30
      ) {
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
      } else {
        this.$message({
          type: 'error',
          message: '请输入不包含特殊字符且小于30个字符的关键词！'
        })
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
      // this.$bus.$emit('reLogin', false)
      // this.$bus.$emit('loginShow', false)
      home.getUserInfo().then(res => {
        if (res.status === '100008') {
          // 设置单点登录
          this.didForm.dids = '1'
          this.setDid(this.didForm)
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
          // 设置单点登录
          // this.didForm.dids = '1'
          // this.setDid(this.didForm)
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
          // 设置单点登录
          this.didForm.dids = '0'
          this.setDid(this.didForm)
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
    // 获取专属邀请码列表
    // getCodeList() {
    //   home.getCodeList(this.codeListForm).then(response => {
    //     if (response.status !== '100100') {
    //       this.codeData = response.data.orderInvitationCodeList
    //     }
    //   })
    // }
    // 判断浏览器的ie型
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
    // this.getCodeList()
    this.$bus.$emit('bannerShow', false)
    this.didForm.dids = '0'
    this.setDid(this.didForm)
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
    this.explorer()
  },
  watch: {
    // 监测登陆注册切换时清除注册获取验证码定时器
    activeName() {
      clearInterval(this.codeInterval)
      this.bindTelData.getCode = '获取验证码'
      this.bindTelData.seconds = 30
      this.bindTelData.captchaDisable = false
      this.codeClick = false
    },
    'registerData.checked'(val, oldVal) {
      if (val) {
        this.isClick = false
        this.isHasClass = false
      } else {
        this.isClick = true
        this.isHasClass = true
      }
    },
    'bindForm.courseId'(val, oldval) {
      if (val == '') {
        this.bindForm.showErr = true
        this.bindForm.isInput = false
      } else {
        if (/^[A-Za-z0-9]+$/.test(val)) {
          this.bindForm.showErr = false
          this.bindForm.isInput = true
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请您输入正确的课程兑换码！'
          })
        }
      }
    }
  }
}
</script>
