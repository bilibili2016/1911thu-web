<template>
    <div class="main">
        <div class="personalSet">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基础信息" name="first"></el-tab-pane>
                <el-tab-pane label="修改密码" name="second"></el-tab-pane>
            </el-tabs>
            <!-- 填写个人信息 -->
            <el-form v-if="hasPersonalInfo" :model="psnForm" :rules="rules" ref="psnForm" label-width="135px" class="psnForm">
                <el-form-item label="昵称" prop="name">
                    <el-input v-model="psnForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别"  prop="sex">
                    <el-radio-group v-model="psnForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="生日" prop="birthday">
                    <el-date-picker v-model="psnForm.birthday" type="date"></el-date-picker> 
                </el-form-item>
                <el-form-item label="所在地区" prop="address">
                    <el-select v-model="psnForm.province" placeholder="省">
                    <el-option label="北京" value="beijing"></el-option>
                    <el-option label="上海" value="shanghai"></el-option>
                    </el-select>
                    <el-select v-model="psnForm.city" placeholder="市">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="psnForm.district" placeholder="区">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="职位" prop="position">
                    <el-input v-model="psnForm.position"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="psnForm.email"></el-input>
                </el-form-item>
                <el-form-item disable label="手机号" prop="name">
                    <el-input v-model="psnForm.tel" disabled></el-input>
                </el-form-item>
                <el-form-item label="公司信息" prop="name">
                    <el-input v-model="psnForm.company" disabled></el-input>
                </el-form-item>
                <el-form-item size="large" class="submit">
                    <el-button type="primary" @click="onSubmit" round>提交</el-button>
                </el-form-item>
            </el-form>
            <!-- 展示个人信息 -->
            <div v-else class="psnInfo">
                <ul>
                    <li><span>昵称：</span><span>{{psnInfo.name}}</span></li>
                    <li><span>性别：</span><span>{{psnInfo.sex}}</span></li>
                    <li><span>生日：</span><span>{{psnInfo.birthday}}</span></li>
                    <li><span>所在地区：</span><span>{{psnInfo.address}}</span></li>
                    <li><span>职位：</span><span>{{psnInfo.position}}</span></li>
                    <li><span>邮箱：</span><span>{{psnInfo.email}}</span></li>
                    <li><span>手机号：</span><span class="default">{{psnInfo.tel}}</span></li>
                    <li><span>公司信息：</span><span class="default">{{psnInfo.company}}</span></li>
                </ul>
            </div>
            <!-- 修改密码 -->
            <div v-show="showPwd" class="changePwd">
                <el-form :model="changePwd" status-icon :rules="pwdRules" ref="ruleForm2" label-width="135px" class="demo-ruleForm">
                    <el-form-item label="原密码：" prop="oldPass">
                    <el-input type="password" v-model="changePwd.oldPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码：" prop="newPass">
                    <el-input type="password" v-model="changePwd.newPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码：" prop="checkPass">
                        <el-input type="password" v-model="changePwd.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('changePwd')">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            handleClick(){

            },
            onSubmit(){

            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(valid)
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            }
        },
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.changePwd.checkPass !== '') {
                    this.$refs.changePwd.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.changePwd.newPass) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };
            return{
                activeName:"first",
                hasPersonalInfo:false,
                showPwd:false,
                changePwd: {
                    oldPass: '',
                    newPass:'',
                    checkPass: ''
                },
                pwdRules: {
                    oldPass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    newPass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                },
                psnInfo:{
                    name: "王大锤丢了锤",
                    sex:"男",
                    birthday:"2018-05-31",
                    address:"河南省郑州市郑东新区",
                    position:"技术",
                    email:"163735467@qq.com",
                    tel:"19728166173",
                    company:"北京那么大科技有限公司"
                },
                psnForm: {
                    name: "",
                    sex:"",
                    birthday:"",
                    province:"",
                    city:"",
                    district:"",
                    position:"",
                    email:"",
                    tel:"19728166173",
                    company:"北京那么大科技有限公司"
                },
                rules: {
                    name: [
                        { message: '请输入昵称', trigger: 'blur' },
                        { min: 3, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    sex: [
                        {message: '请选择性别', trigger: 'change' }
                    ],
                    birthday: [
                        { type: 'date', message: '请选择生日', trigger: 'change' }
                    ],
                    address: [
                        { message: '请选择您的所在地', trigger: 'change' }
                    ],
                    position: [
                        { message: '请填写您的职位', trigger: 'blur' }
                    ],
                    email: [
                        { message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]
                }
            }
        }
    }
</script>

<style scoped lang="scss">
@import "~assets/style/personalSet";
</style>