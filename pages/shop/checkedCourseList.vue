<template>
  <div class="checkedCourseList">
    <!-- 购物车列表 -->
    <div class="main" v-loading='loading'>
      <div class="table">
        <div class="tableHeader">
          <span class="courseName">课程名称</span>
          <span class="price" style="margin-left:830px;">单价</span>
          <!-- <span class="operation">操作</span> -->
        </div>
        <div class="tableBody">
          <div v-for="(course,index) in courseList" :key="index">
            <div class="courseInfo clearfix">
              <img class="fl" :src="course.curriculum_picture" alt="">
              <div class="fl">
                <h4>{{course.curriculum_title}}</h4>
                <h6>{{course.number}}学时</h6>
                <p>讲师：{{course.teacher_name}}</p>
              </div>
            </div>
            <div class="coursePrice">
              ￥{{course.present_price}}
            </div>
            <!-- <div class="courseOperation">
              删除
            </div> -->
          </div>
        </div>
        <div class="tableFooter">
          <p>课程数量：{{companyInfo.courseNum}}门</p>
          <p>学习人数：{{companyInfo.number}}人</p>
          <h4>商品总额：￥{{sum}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 总价 多选
import { home } from '@/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
export default {
  data() {
    return {
      loading: true,
      shwoInfo: false,
      selectAll: false,
      checked: [],
      isIndeterminate: true,
      number: 1,
      courseList: [],
      restaurants: [
        { value: '11111' },
        { value: '22' },
        { value: '222' },
        { value: '1' },
        { value: '111' }
      ],
      companyInfo: {
        name: '',
        address: '',
        contacts: '',
        tel: '',
        number: null,
        courseNum: null,
        code: '',
        payIndex: null
      },
      rules: {
        name: [{ required: true, message: '请输入公司名称', trigger: 'blur' }],
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
        code: [{ required: true, message: '请填写短信验证码', trigger: 'blur' }]
      },
      sum: 0.0
    }
  },
  methods: {
    curriculumPayApply() {
      return new Promise((resolve, reject) => {
        home.curriculumPayApply().then(response => {
          this.courseList =
            response.data.curriculumPayApply[
              this.payIndex
            ].CurriculumPayApplyList
          this.companyInfo.number =
            response.data.curriculumPayApply[this.payIndex].number
          this.companyInfo.courseNum =
            response.data.curriculumPayApply[
              this.payIndex
            ].CurriculumPayApplyList.length
          this.sum = persistStore.get('price')
          this.loading = false
          resolve(true)
        })
      })
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.payIndex = persistStore.get('pay')
    this.curriculumPayApply()
  }
}
</script>

<style scoped>
</style>
