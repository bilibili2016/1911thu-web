<template>
  <div class="checkedCourseList">
    <!-- 购物车列表 -->
    <div class="main" v-loading='loading'>
      <div class="table">
        <div class="tableHeader">
          <span class="courseName">课程名称</span>
          <span class="price" style="margin-left:830px;">单价</span>
        </div>
        <div class="tableBody">
          <div v-for="(course,index) in courseList" :key="index">
            <div class="courseInfo clearfix">
              <img class="fl" :src="course.picture" alt="">
              <div class="fl">
                <h4 style="padding:0">{{course.name}}</h4>
                <h6>{{course.curriculum_time}}学时</h6>
                <p>讲师：{{course.teacher_name}}</p>
              </div>
            </div>
            <div class="coursePrice">
              ￥{{course.price}}
            </div>
            <!-- <div class="courseOperation">
              删除
            </div> -->
          </div>
        </div>
        <div class="tableFooter">
          <p>课程数量：{{courseList.length}}门</p>
          <p>学习人数：{{orderDetail.pay_number}}人</p>
          <h4>商品总额：￥{{orderDetail.order_amount}}</h4>
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
      orderForm: {
        ids: null
      },
      courseList: [],
      orderDetail: {}
    }
  },
  methods: {
    curriculumPayApply() {
      return new Promise((resolve, reject) => {
        home.curriculumPayApply(this.orderForm).then(response => {
          this.courseList = response.data.orderCurriculumList
          // response.data.curriculumPayApply[this.payIndex].CurriculumPayApplyList
          // this.companyInfo.number =
          //   response.data.curriculumPayApply[this.payIndex].number
          // this.companyInfo.courseNum =
          //   response.data.curriculumPayApply[
          //     this.payIndex
          //   ].CurriculumPayApplyList.length
          this.orderDetail = response.data.orderDetail
          this.loading = false
          resolve(true)
        })
      })
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    // this.payIndex = persistStore.get('pay')
    // console.log(this.payIndex)
    this.orderForm.ids = persistStore.get('order')
    this.curriculumPayApply()
  }
}
</script>

