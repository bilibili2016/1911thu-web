<template>
  <div class="checkedCourse">
    <div class="main">
      <div class="company" v-for="(courseList, index ) in curriculumPayData" :key="index">
        <div class="title clearfix">
          <span class="fl">{{courseList.company_name}}</span>
          <span class="fr">{{courseList.batch}}</span>
        </div>
        <div class="content">
          <div class="course">
            <div class="courseOne" v-for="(course,index) in courseList.CurriculumPayApplyList" :key="index">
              <img class="fl" :src="course.curriculum_picture" alt="">
              <div class="fl">
                <h4>{{course.curriculum_title}}</h4>
                <h6>{{course.number}}学时</h6>
                <p>讲师：{{course.teacher_name}}</p>
              </div>
            </div>
            <div class="more" v-show="courseList.CurriculumPayApplyList.length>1" @click="selectPayApply(courseList, index)">
              查看更多课程>
            </div>
          </div>
          <div class="price height" :style="{height:courseList.length>3? 3*140+60+'px' :courseList.length*140+'px'}">¥{{allPrice}}</div>
          <div class="telephone height" :style="{height: courseList.length>3? 3*140+60+'px' :courseList.length*140 + 'px' }">
            <p>客服电话</p>
            <p>010-6270 1911</p>
          </div>
          <div class="status height" :style="{height: courseList.length > 3? 3*140+60+'px' :courseList.length*140 + 'px' }">{{status}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { home } from '@/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
  export default {
    data() {
      return {
        company: "北京分分形状科技有限公司",
        time: "2018-06-05 09：30：05",
        courseList: [
        ],
        curriculumPayData: [],
        allPrice: "69.00",
        status: "等待审核",
      }
    },
     mounted () {
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
      this.curriculumPayApply()
    },
    methods: {
      curriculumPayApply() {
        return new Promise((resolve, reject) => {
          home.curriculumPayApply().then(response => {
            // console.log(response, '123')
            this.curriculumPayData = response.data.curriculumPayApply

            resolve(true)
          })
        })
      },
      selectPayApply(item,index){
        // console.log(item, 'item')
        // console.log(index, 'index')
         persistStore.set('pay', index)
         this.$router.push('/shop/checkedCourseList')
      },
      goLink(item){
        this.$router.push(item)
      }
    },
  }
</script>

<style scoped>

</style>
