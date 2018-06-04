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
      <div :class="{HREntry:true,islogined:islogin}">
        <span class="hrin">Hr入口</span>
        <span v-if="islogin">我的课程</span>
        <i class="phone"></i>
      </div>
      <div class="lrBtn" v-if="!islogin">
        <span class="login" @click="login">登录</span>
        <span class="register" @click="register">注册</span>
      </div>
      <div class="headImg" v-else>
        <img :src="user.userImg" alt="">
      </div>
    </div>

    <!-- 登录注册 -->
    <div class="start" v-if="start" @touchmove.prevent>
      <div class="bgt" @click="close"></div>
      <div class="lrFrame">
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
                <div>忘记密码?</div>
                <el-button>登录</el-button>
              </el-row>
            </el-form>
            <div class="otherLogin">其它方式登录</div>
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
            <div class="otherLogin">其它方式登录</div>
          </el-tab-pane>
        </el-tabs>
        <div class="form">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getQueryString } from '@/lib/util/helper'
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
        } else if (value.length < 6 || value.length > 10) {
          callback(new Error('请输入6-10位密码'));
          return false;
        }
      };
      return {
        searchImg: require('~/assets/images/search.png'),
        start: false,
        islogin:false,
        activeName: 'second',
        search: '',
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

      }
    },
    methods: {
      login() {
        this.start = !this.start;
        this.activeName = 'login';
        if (this.start === true) {
          this.stop()
        } else {
          this.move()
        }
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
        this.activeName = 'register';
        if (this.start === true) {
          this.stop()
        } else {
          this.move()
        }
      },
      close() {
        this.start = false;
        document.body.style.overflow = 'auto';
      },
      handleClick(tab, event) {
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
      }
    }

  }
</script>
