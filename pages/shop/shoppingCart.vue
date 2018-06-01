<template>
  <div class="shopCart">
    <!-- 购物车列表 -->
    <div class="main">
      <div class="table">
        <div class="tableHeader">
          <el-checkbox v-model="selectAll" @change="handleSelectAllChange">全选</el-checkbox>
          <span class="courseName">课程名称</span>
          <span class="price">单价</span>
          <span class="operation">操作</span>
        </div>
        <div class="tableBody">
          <div v-for="(course,index) in courseList" :key="index">
            <el-checkbox v-model="checked" @change="handleSelectChange"></el-checkbox>
            <div class="courseInfo clearfix">
              <img class="fl" :src="course.src" alt="">
              <div class="fl">
                <h4>{{course.title}}</h4>
                <h6>{{course.period}}学时</h6>
                <p>讲师：{{course.teacher}}</p>
              </div>
            </div>
            <div class="coursePrice">
              ￥{{course.price}}
            </div>
            <div class="courseOperation">
              删除
            </div>
          </div>
        </div>
        <div class="pagination">
          <span>首页</span>
          <el-pagination
            :page-size="20"
            layout="prev, pager, next"
            :total="20">
          </el-pagination>
          <span>尾页</span>
        </div>
        <div class="tableFooter">
          <el-checkbox v-model="selectAll">全选</el-checkbox>
          <span class="courseNumber clearfix">
            <span class="deleteChecked">删除选中的课程</span>
            <span class="number clearfix">
              <i class="fl minus el-icon-minus"  @click="number>1?number--: 1"></i>
              <input type="text" class="fl num" v-model.number="number" @blur="changeNumber">
              <i class="fl add el-icon-plus" @click="number++"></i>
            </span>
          </span>
          <span class="commitOrder fr">
            <el-button>提交</el-button>
          </span>
          <span class="allPrice fr">￥94.00</span>
          
        </div>
      </div>
    </div>

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
// 总价 多选
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
      },
      handleSelectAllChange(val) {
        
      },
      handleSelectChange(value) {
        
      },
      changeNumber (){
        if(typeof this.number !== "number" || this.number<1){
          this.number=1;
        }
      }
    },
    data(){
      return{
        shwoInfo: false,
        selectAll:false,
        checked:[],
        isIndeterminate:true,
        number:1,
        courseList:[
          {
            src: require("../../assets/images/4.png"),
            title:"H5和小程序直播开发",
            period:52,
            teacher:"王建中",
            price:23.56
          },
          {
            src: require("../../assets/images/4.png"),
            title:"H5和小程序直播开发",
            period:52,
            teacher:"王建中",
            price: 40.60
          }
        ],
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
