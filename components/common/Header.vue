<template>
  <div class="headerBox">
    <div class="main">
      <div class="headerLogo fl" @click="goSearchd('/')">
        <img src="~/assets/images/1911xt.png" alt="">
      </div>
      <div class="search">
        <input type="text" placeholder="请输入课程、老师" v-model="search" @keyup.enter="gokey">
<!-- <el-input v-model="search" placeholder="请输入内容">
  <i
    class="el-icon-edit el-input__icon"
    slot="suffix"
    @click="goSearch">
  </i>
</el-input> -->
        <img :src="searchImg" alt="" @click="goSearch">
      </div>
      <div :class="{ HREntry : true , islogined : this.token === '123' ? true : false }">
        <span class="hrin">Hr入口</span>
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
      </div>
      <div class="lrBtn" v-if="this.token === '123' ? false : true">
        <span class="login" @click="login">登录</span>
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
          <li @click="signOut">退出</li>
        </ul>
      </div>
    </div>

    <!-- 登录注册 -->
    <div class="start" v-if="start" @touchmove.prevent>
      <div class="bgt"  v-if="bgMsg"></div>
      <!-- @click="close" -->
      <div class="lrFrame" v-show="lrFrame">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="login">
            <!-- 登录 -->
            <el-form :model="loginData" status-icon :rules="rules2" ref="loginData" class="demo-ruleForm">
              <el-form-item prop="tel">
                <el-input v-model.number="loginData.tel" placeholder="请输入登录手机号"></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input :type="loginData.pwdType" v-model="loginData.pass" auto-complete="off" placeholder="6-10位密码，区分大小写，不能用空格"></el-input>
                <span :class="{hidePwd:!loginData.showPwd,showPwd:loginData.showPwd}" @click="changePwd" alt=""></span>
              </el-form-item>
              <el-row>
                <div @click="goSearchd('/home/pages/forgotPassword')">忘记密码?</div>
                <el-button @click="signIns">登录</el-button>
              </el-row>
            </el-form>
            <div class="otherLogin" @click="scanCode">其它方式登录</div>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <!-- 注册 -->
            <el-form :model="registerData" status-icon :rules="rules2" ref="registerData" class="demo-ruleForm">
              <el-form-item prop="tel">
                <!-- 手机号 -->
                <el-input v-model.number="registerData.tel" placeholder="请输入登录手机号"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <!-- 验证码 -->
                <el-input class="captcha" v-model.number="registerData.code" placeholder="请输入验证码"></el-input>
                <div class="getCode">{{registerData.getCode}}</div>
              </el-form-item>
              <el-form-item>
                <!-- 手机号 -->
                <el-input v-model="registerData.company" placeholder="绑定企业"></el-input>
                <span class="bindCompany">(可选)</span>
              </el-form-item>
              <el-row>
                <el-checkbox v-model="registerData.checked">同意用户注册协议</el-checkbox>
                <el-button>登录</el-button>
              </el-row>
            </el-form>
            <div class="otherLogin" @click="scanCode">其它方式登录</div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 微信登录 -->
      <div class="lrFrame wechatLogin" v-show="wechatLogin">
        <el-form :model="bindTelData" status-icon :rules="rules2" ref="bindTelData" class="demo-ruleForm" v-show="bindTelShow">
          <h4 class="clearfix"><span>绑定手机账号</span> <i class="el-icon-close fr" @click="closeWechat"></i></h4>
          <el-form-item prop="tel">
            <!-- 手机号 -->
            <el-input v-model.number="bindTelData.tel" placeholder="请输入登录手机号"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <!-- 验证码 -->
            <el-input class="captcha" v-model.number="bindTelData.code" placeholder="请输入验证码"></el-input>
            <div class="getCode">{{bindTelData.getCode}}</div>
          </el-form-item>
          <el-form-item>
            <!-- 绑定企业 -->
            <el-input v-model="bindTelData.company" placeholder="绑定企业"></el-input>
            <span class="bindCompany">(可选)</span>
          </el-form-item>
          <el-row>
            <el-button>绑定</el-button>
          </el-row>
        </el-form>
        <!-- 扫码 -->
        <div class="scanCode" v-show="scanCodeShow">
          <h4 class="clearfix"><span>微信登录</span> <i class="el-icon-close fr" @click="closeWechat"></i></h4>
          <img :src="QRcode" alt="">
          <p>请使用微信扫描“1911学堂”二维码登录</p>
        </div>
        <!-- 绑定成功 -->
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
import { getQueryString } from '@/lib/util/helper'
import { other, auth } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    data() {
      var checkTel = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入正确手机号'));
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
          return false;
        } else if (value.length < 6 || value.length > 10){
          callback(new Error('请输入6-10位密码'));
          return false;
        }
      };
      return {
        searchImg: require('~/assets/images/search.png'),
        start: false,
        lrFrame:false,
        islogin:false,
        activeName: 'second',
        search: '',
        tokenForm: {
          tokens: '123'
        },
        bgMsg: false,
        user:{
          userImg:require("~/assets/images/headImg.png"),
        },
        activeName: 'login',
        loginData: {
          pass: '',
          tel: '',
          showPwd: false,
          pwdType: 'password'
        },
        registerData: {
          tel: '',
          code: '',
          getCode: '获取验证码',
          checked: false
        },
        QRcode:require("~/assets/images/wechatLogin.png"),
        wechatLogin:false,
        bindTelShow:false,
        scanCodeShow:false,
        bindSuccessShow:false,
        bindTelData: {
          tel: '',
          code: '',
          getCode: '获取验证码',
          checked: false
        },
        rules2: {
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          tel: [{
              validator: checkTel,
              trigger: 'blur'
            },
            {
              type: 'number',
              message: '年龄必须为数字值',
              trigger: 'blur'
            }
          ],
          code: [{
            required: true,
            message: '验证码不能为空',
            trigger: 'blur'
          }]
        },
        gidForm: {
          gids: null
        }
      }
    },
    computed: {
    ...mapState('auth', [
      'token'
    ])
  },
    methods: {
      ...mapActions('auth', [
      'signIn',
      'setGid'
      ]),
      goMycourse () {
        this.$router.push('/profile')

      },
      goLink(item) {
        this.$router.push(item);
      },
      login() {
        this.start = !this.start;
        this.lrFrame = this.start;
        this.activeName = 'login';
        this.stop()
        this.bgMsg = true
        this.tokenForm.tokens = '123'
      },
      signIns () {
        this.signIn(this.tokenForm)
        this.start = false
        this.move()
      },
      signOut () {
        this.tokenForm.tokens = ''
        this.signIn(this.tokenForm)
      },
      changePwd() {
        if (this.showPwd) {
          this.showPwd = false;
          this.loginData.pwdType = 'password';
        } else {
          this.showPwd = true;
          this.loginData.pwdType = 'text';
        }
      },
      register() {
        this.start = true;
        this.lrFrame = true;
        this.activeName = 'register';
        if (this.start === true) {
          this.stop()
        } else {
          this.move()
        }
      },
      close() {
        this.move()
        this.start = false;
        this.lrFrame = false;
        this.bgMsg = false;
        // document.body.style.overflow = 'auto';
      },
      closeWechat(){
        this.start = false;
        this.lrFrame = false;
        this.wechatLogin = false;
        document.body.style.overflow = 'auto';
      },
      handleClick(tab, event) {
      },
      scanCode(){ //微信登录
        this.lrFrame = false;
        this.wechatLogin=true;
        this.scanCodeShow=true; //微信扫码
        // this.bindTelShow=true; //绑定手机号
        // this.bindSuccessShow=true; // 登录成功
      },
      stop() {
        var mo = function(e) {
          e.preventDefault();
        };
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", mo, false); //禁止页面滑动
      },
      /***取消滑动限制***/
      move() {
        var mo = function(e) {
          e.preventDefault();
        };
        document.body.style.overflow = 'auto'; //出现滚动条
        document.removeEventListener("touchmove", mo, false);
      },
      goSearch(item) {
        switch (window.location.pathname) {
          case '/course/pages/search':
            break
          default:
            this.$router.push('/course/pages/search')
            break
        }
      },
      gokey () {
        if(event.keyCode==13){
          switch (window.location.pathname) {
          case '/course/pages/search':
            break
          default:
            this.$router.push('/course/pages/search')
            break
        }
        }
      },
      goSearchd (item) {
        this.$router.push(item)
      },
      backHome () {
        this.$router.push('/')
      },
      goLink (item) {
        this.gidForm.gids = item
        this.setGid(this.gidForm)
        this.$router.push('/profile')
        // switch (window.location.pathname) {
        //   case '/':
        //     this.$router.push('/profile');
        //     break
        //   default:

        //     break
        // }
      }
    },
    mounted () {

    }

  }
</script>
<style lang="scss" scoped>
.cli{
  cursor: pointer;
}
</style>
