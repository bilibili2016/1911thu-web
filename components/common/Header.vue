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
        this.start=!this.start;
        this.activeName = 'login';
        if(this.start === true){
          this.stop()
        } else {
          this.move()
        }
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
      handleClick(tab, event) {
        console.log(tab, event);
      },
      stop(){
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
      },
      /***取消滑动限制***/
      move(){
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
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
        activeName: 'second',
        search:'',
        activeName: 'login',
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
.headerBox{
    width: 100%;
    height: 90px;
    .main{
        width: 1100px;
        height: 90px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .headerLogo{
            width: 177px;
            img{
                width: 177px;
                height: 44px;
            }
        }
        .search{
            width: 240px;
            height: 30px;
            margin-left: 289px;
            border: 1px solid #6417a6;
            border-radius: 14px;
            position: relative;
            input{
                height: 28px;
                margin-left: 14px;
                font-size: 14px;
            }
            input::-webkit-input-placeholder {
              color: #6417a6;
            }
            input:-moz-placeholder{
              color: #6417a6;
            }
            input::-moz-placeholder{
              color: #6417a6;
            }
            input:-ms-input-placeholder{
              color: #6417a6;
            }
            img{
                width: 16px;
                height: 16px;
                position: absolute;
                top: 6px;
                right: 18px;
            }
        }
        .HREntry{
            margin-left: 62px;
            span{
                color:#222;
                width: 56px;
                border-right: 2px solid #ccc;
                vertical-align: top;
                cursor: pointer;
            }
            span:hover{
                color: #8F4ACB;
            }
            .phone{
                display: inline-block;
                width: 14px;
                height: 20px;
                margin: 0 31px;
                background: url('~assets/images/phone.png') no-repeat;
                &:hover{
                    background: url('~assets/images/phone2.png') no-repeat;

                }
            }
        }
        .lrBtn{
            span{
                width: 95px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #491C9C;
                border-radius: 5px;
                text-align: center;
                font-size: 14px;
                cursor: pointer;
                &:hover{
                    border-color: #8F4ACB;
                }
            }
            .login{
                color: #491C9C;
                margin-right: 10px;
                &:hover{
                    color: #8F4ACB;
                }
            }
            .register{
                background-color: #6417A6;
                color: #fff;
                &:hover {
                  background-color: #8F4ACB;
                }
            }

        }
    }
    .start{
        width: 100%;
        height: 1000px;
        position: fixed;
        left: 0;
        z-index: 99;
        .bgt{
            width: 100%;
            height: 100%;
            opacity: 0.8;
            background-color: #6417A6;
        }
        .lrFrame{
            width: 364px;
            height: auto;
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            top: 98px;
            left: 50%;
            margin-left: -182px;
            .hidePwd{
                position: absolute;
                right: 55px;
                top: 13px;
                width: 20px;
                height: 13px;
                background: url('~/assets/images/eyeo.png') no-repeat;
                background-size: 20px 13px;
                cursor: pointer;
            }
            // .showPwd{
            //     position: absolute;
            //     right: 57px;
            //     top: 16px;
            //     width: 16px;
            //     height: 9px;
            //     background: none;
            //     background: url('~/assets/images/eyec.png') no-repeat;
            //     background-size: 16px 9px;
            //     cursor: pointer;
            // }
            // .otherLogin{
            //     width: 125px;
            //     height: 24px;
            //     line-height: 24px;
            //     margin: 30px auto 25px;
            //     text-align: center;
            //     padding-right: 40px;
            //     background: url('~/assets/images/wx1.png') no-repeat 97px 0;
            //     background-size: 24px 24px;
            //     font-size: 14px;
            //     color: #555555;
            //     cursor: pointer;
            //     &:hover{
            //         background: url('~/assets/images/wx2.png') no-repeat 97px 0;
            //     }
            // }
            // .getCode{
            //     width: 118px;
            //     height: 40px;
            //     text-align: center;
            //     line-height: 40px;
            //     margin-left: 18px;
            //     border-radius: 6px;
            //     background-color: #eee;
            //     color: #6417a6;
            //     font-size: 12px;
            //     display: inline-block;
            //     vertical-align: middle;
            //     cursor: pointer;
            // }
            // .el-checkbox{
            //     margin-bottom: 30px;
            // }
            // .bindCompany{
            //     height: 39px;
            //     position: absolute;
            //     right: 50px;
            //     top: 0;
            //     color: #bbb;
            //     font-size: 12px;
            //     background-color: #fff;
            // }
        }
    }
}
</style>
