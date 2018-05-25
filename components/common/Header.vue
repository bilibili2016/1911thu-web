<template>
  <div class="headerBox">
    <div class="main">
      <div class="headerLogo fl">
        <img src="../../assets/images/1911xt.png" alt="">
      </div>
      <div class="search">
        <input type="text" placeholder="请输入课程、老师" v-model="search">
        <img src="../../assets/images/search.png" alt="">
      </div>
      <div class="HREntry">
        <span>Hr入口</span>
        <i class="phone"></i>
      </div>
      <div class="lrBtn">
        <span class="login" @click="login">登录</span>
        <span class="register" @click="register">注册</span>
      </div>
    </div>

    <!-- 登录注册 -->
    <div class="start" v-show="start">
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
              <el-form-item prop="tel"> <!-- 手机号 -->
                <el-input v-model.number="registerData.tel" placeholder="请输入登录手机号"></el-input>
              </el-form-item>
              <el-form-item prop="code"> <!-- 验证码 -->
                <el-input class="captcha" v-model.number="registerData.code" placeholder="请输入验证码"></el-input>
                <div class="getCode">{{registerData.getCode}}</div>
              </el-form-item>
              <el-form-item> <!-- 手机号 -->
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
  export default {
    methods:{
      login(){
        this.start=true;
        this.activeName = 'login';
      },
      changePwd(){
        console.log(this.showPwd);
        if(this.showPwd){
          this.showPwd = false;
          this.loginData.pwdType = 'password';
        }else{
          this.showPwd = true;
          this.loginData.pwdType = 'text';
        }
      },
      register(){
        console.log(this.activeName);
        this.start=true;
        this.activeName = 'register';
      },
      close(){
        this.start=false;
      },
      handleClick(){
        
      }
    },
    data(){
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
        } else if(value.length<6 || value.length>10){
          callback(new Error('请输入6-10位密码'));
          return false;
        }
      };
      return{
        start:false,
        search:'',
        activeName: '',
        loginData:{
          pass:'',
          tel: '',
          showPwd: false,
          pwdType:'password'
        },
        registerData:{
          tel:'',
          code:'',
          getCode:'获取验证码',
          checked:false
        },
        rules2:{
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          tel: [
            { validator: checkTel, trigger: 'blur' },
            { type: 'number', message: '年龄必须为数字值', trigger: 'blur'}
          ],
          code: [
            { required: true, message: '验证码不能为空', trigger: 'blur'}
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
@import '~assets/style/reset';
@import '~assets/style/header';
</style>