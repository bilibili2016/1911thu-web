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
            <el-checkbox v-model="course.checkMsg" @change="handleSelectChange(course,index)"></el-checkbox>
            <div class="courseInfo clearfix">
              <img class="fl" :src="course.picture" alt="">
              <div class="fl">
                <h4>{{course.title}}</h4>
                <h6>{{course.curriculum_time}}学时</h6>
                <p>讲师：{{course.teacher}}</p>
              </div>
            </div>
            <div class="coursePrice">
              ￥{{course.present_price}}
            </div>
            <div class="courseOperation" @click="handleDelete(course,index)">
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
            <span class="person">购买人数：</span>
            <span class="number clearfix">
              <i class="fl minus el-icon-minus"  @click="delNumber"></i>
              <input type="text" class="fl num" v-model.number="numForm.number" @blur="changeNumber">
              <i class="fl add el-icon-plus" @click="addNumber"></i>
            </span>
          </span>
          <span class="commitOrder fr">
            <el-button @click="showCommit">提交</el-button>
          </span>
          <span class="allPrice fr">{{prices}}￥</span>

        </div>
      </div>
    </div>

    <!-- 提交公司信息 -->
    <div class="information" @click.self="close" v-show="showInfo">
      <div class="info">
        <div class="infoTitle">
          <h4>为方便我们的沟通，请填写下列信息</h4>
        </div>
        <el-form :model="companyInfo" :rules="rules" ref="ruleForm" label-width="136px" class="companyInfo">
          <el-form-item label="公司名称：" prop="companyname">
            <el-autocomplete
              v-model="companyInfo.companyname"
              :fetch-suggestions="querySearch"
              placeholder="请输入公司名称"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item label="公司地址：" prop="companyaddress">
            <el-input placeholder="请输入公司地址" v-model="companyInfo.companyaddress"></el-input>
          </el-form-item>
          <el-form-item label="联系人：" prop="contactperson">
            <el-input placeholder="请输入联系人姓名" v-model="companyInfo.contactperson"></el-input>
          </el-form-item>
          <el-form-item label="联系方法：" prop="phones">
            <el-input placeholder="请输入手机号" v-model.number="companyInfo.phones"></el-input>
          </el-form-item>
          <el-form-item class="code" label="验证码：" prop="codes">
            <el-input placeholder="请输入短信验证码" v-model="companyInfo.codes"></el-input>
            <span @click="handleGetCode">获取验证码</span>
          </el-form-item>
          <el-form-item class="btnCommit">
            <el-button type="primary" @click="addPaySubmit">提交</el-button>
            <!-- <el-button type="primary" @click="submitForm('companyInfo')">提交</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      </div>
  </div>
</template>

<script>
import { home,auth } from '@/lib/v1_sdk/index'
// 总价 多选
  export default {
    data(){
      return{
        showInfo: false,
        selectAll:false,
        checked:[],
        isIndeterminate:true,
        numForm:{
          number:1,
        },

        money: [],
        courseList:[

        ],
        restaurants: [
          {"value":"11111"},
          {"value":"22"},
          {"value":"222"},
          {"value":"1"},
          {"value":"111"}
        ],
        companyInfo:{
          companyname:"",
          companyaddress:"",
          contactperson:"",
          phones:"",
          codes:"",
          types: 6,
        },
        rules: {
          companyname: [
            { required: true, message: '请输入公司名称', trigger: 'blur' }
          ],
          companyaddress: [
            { required: true, message: '请填写公司地址', trigger: 'blur' }
          ],
          contactperson: [
            { required: true, message: '请填写联系人姓名', trigger: 'blur' }
          ],
          phones: [
            { required: true, message: '请填写手机号', trigger: 'blur' },
            { type: 'number', message: '请填写正确手机号', trigger: 'blur' }
          ],
          codes: [
            { required: true, message: '请填写短信验证码', trigger: 'blur' }
          ]
        },
        arraySum: 0,
        curriculumcartids: {
          cartid: null
        },
        prices: 0.00,
        addArray:{
          curriculumcartid: []
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {

            return false;
          }
        });
      },
      showCommit(){
        this.showInfo=true;
        // this.$router.push('/shop/checkedCourse');
        return new Promise((resolve, reject) => {
          home.addChecked(this.addArray).then(response => {
            // console.log(response, '这是curriculumcartids')
            resolve(true)
          })
        })
      },
      close(){
        this.showInfo=false;
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
      handleSelect(item, index) {
      },
      handleSelectAllChange(item,index) {

      },
      handleSelectChange(item,index) {
        this.$set(this.courseList[index], 'checkMsg', true)
        this.arraySum =this.arraySum + Number(this.courseList[index].price)
        // console.log(item,'1231323123')
        // console.log(item.present_price, '价钱')
        this.prices = Number(this.prices) + Number(item.present_price)
        this.addArray.curriculumcartid.push(item.id)
        // console.log( this.addArray)
      },
      addNumber(){
        this.numForm.number= Number(this.numForm.number) + Number(1)
        this.prices = (this.numForm.number)* this.prices

        this.changeCartNumber()
      },
      delNumber(){
         this.numForm.number= Number(this.numForm.number) - Number(1)
         this.changeCartNumber()
      },
      changeCartNumber(){
        return new Promise((resolve, reject) => {
          home.changeCartNumber(this.numForm).then(response => {
            // console.log(response)
            resolve(true)
          })
        })
      },
      changeNumber (){
        if(typeof this.number !== "number" || this.number<1){
          this.number=1;
        }
      },
      addPaySubmit (){
        console.log('-------')
      this.$refs.ruleForm.validate(valid => {
        console.log('eeeeeee',valid)
        if (valid) {
          return new Promise((resolve, reject) => {
            home.addPaySubmit(this.companyInfo).then(response => {
              // console.log(response)
              this.$message({
                type: response.status === 0 ? "success" : "error",
                message: response.msg
              });
              if(response.status === 0){
                this.$router.push('/shop/checkedCourse')
              }
              resolve(true)
            })
          })
        }else{
          return false
        }
      })
      },
      shopCartList (){
        return new Promise((resolve, reject) => {
          home.shopCartList().then(response => {
            // console.log(response, '这是response')
            this.courseList = response.data.curriculumCartList
          })
        })
      },
      handleDelete (item,index){
        this.curriculumcartids.cartid = item.id
        return new Promise((resolve, reject) => {
        home.delShopCart(this.curriculumcartids).then(response => {
            // console.log(response, '898989')
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.shopCartList()
          })
        })
        // console.log(this.curriculumcartids, '787878787')
      },
     delShopCart (){

      },
       async handleGetCode() {
      return new Promise((resolve, reject) => {
        auth.smsCodes(this.companyInfo).then(response => {
          this.$message({
            type: response.status === 0 ? "success" : "error",
            message: response.msg
          });
          // this.captchaDisable = true;
          // this.bindTelData.getCode = this.bindTelData.seconds + "秒后重新发送";
          // let interval = setInterval(() => {
          //   if (this.bindTelData.seconds <= 0) {
          //     this.bindTelData.getCode = "获取验证码";
          //     this.bindTelData.seconds = 60;
          //     this.captchaDisable = false;
          //     clearInterval(interval);
          //   } else {
          //     this.bindTelData.getCode =
          //       --this.bindTelData.seconds + "秒后重新发送";
          //   }
          // }, 1000);
        });
      });
    },
    },
    mounted () {
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
      this.shopCartList()
    }
  }
</script>
