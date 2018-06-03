<template>
  <div class="shopCart">
    <!-- 购物车列表 -->

    <!-- 提交公司信息 -->
    <div class="information" @click.self="close" v-show="shwoInfo">
      <div class="info">
        <div class="infoTitle">
          <h4>为方便我们的沟通，请填写下列信息</h4>
        </div>
        <el-form :model="companyInfo" :rules="rules" ref="ruleForm" label-width="136px" class="companyInfo">
          <el-form-item label="公司名称：" prop="name">
            <el-autocomplete
              v-model="companyInfo.name"
              :fetch-suggestions="querySearch"
              placeholder="请输入公司名称"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item label="公司地址：" prop="address">
            <el-input placeholder="请输入公司地址" v-model="companyInfo.address"></el-input>
          </el-form-item>
          <el-form-item label="联系人：" prop="contacts">
            <el-input placeholder="请输入联系人姓名" v-model="companyInfo.contacts"></el-input>
          </el-form-item>
          <el-form-item label="联系方法：" prop="tel">
            <el-input placeholder="请输入手机号" v-model="companyInfo.tel"></el-input>
          </el-form-item>
          <el-form-item class="code" label="验证码：" prop="code">
            <el-input placeholder="请输入短信验证码" v-model="companyInfo.code"></el-input>
            <span>获取验证码</span>
          </el-form-item>
          <el-form-item class="btnCommit">
            <el-button type="primary" @click="submitForm('companyInfo')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      </div>
  </div>
</template>

<script>
  export default {
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      close(){
        this.shwoInfo=false;
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    data(){
      return{
        shwoInfo: true,
        restaurants: [
          {"value":"11111"},
          {"value":"22"},
          {"value":"222"},
          {"value":"1"},
          {"value":"111"}
        ],
        companyInfo:{
          name:"",
          address:"",
          contacts:"",
          tel:"",
          code:""
        },
        rules: {
          name: [
            { required: true, message: '请输入公司名称', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请填写公司地址', trigger: 'blur' }
          ],
          contacts: [
            { required: true, message: '请填写联系人姓名', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '请填写手机号', trigger: 'blur' },
            { type: 'number', message: '请填写正确手机号', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请填写短信验证码', trigger: 'blur' }
          ],
        }
      }
    }
  }
</script>
