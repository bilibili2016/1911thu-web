<template>
  <div class="checkedCourseList">
    <!-- 购物车列表 -->
    <div class="main">
      <div class="table">
        <div class="tableHeader">
          <span class="courseName">课程名称</span>
          <span class="price">单价</span>
          <span class="operation">操作</span>
        </div>
        <div class="tableBody">
          <div v-for="(course,index) in courseList" :key="index">
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
        <div class="tableFooter">商品总额：￥94.00</div>
      </div>
    </div>
  </div>
</template>

<script>
// 总价 多选
  export default {
    data(){
      return{
        shwoInfo: false,
        selectAll:false,
        checked:[],
        isIndeterminate:true,
        number:1,
        courseList:[
          {
            src: require("~/assets/images/ke-3.png"),
            title:"H5和小程序直播开发",
            period:52,
            teacher:"王建中",
            price:23.56
          },
          {
            src: require("~/assets/images/ke-3.png"),
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

<style scoped>
</style>
