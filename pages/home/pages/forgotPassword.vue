<template>
    <div>
        <!-- 忘记密码 -->
        <div class="start forgot">
            <div class="lrFrame">
                <div class="logo">
                    <img src="@/assets/images/1911xt.png" alt="">
                </div>
                <div class="pwd">
                    <span>忘记密码</span>
                </div>
                <!-- 忘记密码 -->
                <el-form :model="fpData" status-icon :rules="rules2" ref="fpData" class="demo-ruleForm">
                    <el-form-item prop="tel">
                        <!-- 手机号 -->
                        <el-input v-model.number="fpData.tel" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="code" class="clearfix">
                        <!-- 验证码 -->
                        <el-input class="captcha" v-model.number="fpData.code" placeholder="请输入短信验证码"></el-input>
                        <div class="getCode">{{fpData.getCode}}</div>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <!-- 密码 -->
                        <el-input :type="pwdType" v-model="fpData.password" placeholder="6-10位密码，区分大小写，不能用空格"></el-input>
                        <span :class="{hidePwd:!showPwd,showPwd:showPwd}" @click="changePwd" alt=""></span>
                    </el-form-item>
                    <el-row>
                        <el-button>提交</el-button>
                    </el-row>
                </el-form>
                <div class="otherLogin">返回登录</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
                } else if (value.length < 6 || value.length > 10) {
                callback(new Error('请输入6-10位密码'));
                return false;
                }
            };
            return{
                showPwd:false,
                pwdType:"password",
                fpData:{
                    tel: '',
                    code: '',
                    getCode: '获取验证码'
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
                }
            }
        },
        methods:{
            changePwd() {
                if (this.showPwd) {
                    this.showPwd = false;
                    this.pwdType = 'password';
                } else {
                    this.showPwd = true;
                    this.pwdType = 'text';
                }
            },
        },
        mounted () {
            document.getElementsByClassName("headerBox")[0].style.display="none";
            document.getElementsByClassName("footerBox")[0].style.display="none";
        },

    }
</script>

<style scoped lang="scss">
@import "~assets/style/home/forgotPassword"
</style>
