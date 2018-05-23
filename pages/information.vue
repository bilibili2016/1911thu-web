<template>
    <el-form label-width="80px" :rules="rules" :model="formLabelAlign" class="formList">
        <el-form-item label="头像" prop="name">
           <div class="userImg">
                <img src="" alt="" v-if="formLabelAlign.imgUrl">
                <div v-else>
                    <input type="file">
                    <i>编辑图片</i>
                </div>
            </div>
            <p class="updownError" v-show="formLabelAlign.showError">支持jpg、png、jpeg格式，文件不超过2MB</p>
        </el-form-item>
        

        <el-form-item label="昵称" prop="name">
            <el-input v-model="formLabelAlign.nickName"></el-input>
        </el-form-item>

        <el-radio-group v-model="formLabelAlign.radio" class="sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
        </el-radio-group>

        <el-form-item label="生日">
            <el-date-picker
            @change="col"
            v-model="formLabelAlign.date"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
        </el-form-item>

        <el-form-item label="职位" prop="pst">
            <el-input v-model="formLabelAlign.position"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="formLabelAlign.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="formLabelAlign.tel"></el-input>
        </el-form-item>
        <el-form-item label="单位信息">
            <el-input v-model="formLabelAlign.company"></el-input>
        </el-form-item>

    </el-form>
        
</template>

<script>
export default{
    methods: {
        col(){
            console.log(this.ruleForm.date)
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
        }
    },
    data(){
        return{
            formLabelAlign:{
                imgUrl:false,
                showError: false,
                nickName: '',
                radio:'',
                date: '',
                position: '',
                position: '',
                email: '',
                tel:'',
                company:'',
                dialogImageUrl: '',
                dialogVisible: false
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                pst:[
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                ],
                email:[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]
            }
        }
    }
}
</script>

<style lang="scss">
@import "~assets/style/information";
</style>

