<template>
  <div class="checkedCourse">
    <div class="main">
      <!-- {{curriculumPayData}} -->

      <div class="content" v-if="curriculumPayData.length === 0">
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4 style="color:#333;">抱歉，现在还没有选中的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
                 <div v-else >
          <div class="company" v-for="(courseList, index ) in curriculumPayData" :key="index">

          <div class="title clearfix">
            <span class="fl">{{courseList.company_name}}</span>
            <span class="fr">{{courseList.create_time}}</span>
          </div>
          <div class="content">
            <div class="course">
              <div class="courseOne" v-for="(course,index) in courseList.CurriculumPayApplyList" :key="index" v-if="index<3">
                <img class="fl" :src="course.curriculum_picture" alt="">
                <div class="fl">
                  <h4>{{course.curriculum_title}}</h4>
                  <h6>{{course.number}}学时</h6>
                  <p>讲师：{{course.teacher_name}}</p>
                </div>
              </div>
              <div class="more" v-show="courseList.CurriculumPayApplyList.length>0" @click="selectPayApply(courseList, index)">
                查看更多课程>
              </div>
            </div>
            <div class="price height" :style="{height:courseList.CurriculumPayApplyList.length > 3? 3*140+60+'px' :courseList.CurriculumPayApplyList.length*140+70+'px'}">¥{{courseList.totalPresentPrice}}</div>
            <div class="telephone height" :style="{height: courseList.CurriculumPayApplyList.length>3? 3*140+60+'px' :courseList.CurriculumPayApplyList.length*140+60+'px'}">
              <p>客服电话</p>
              <p>010-6270 1911</p>
            </div>
            <div class="status height" :style="{height: courseList.length > 3? 3*140+60+'px' :courseList.length*140 + 'px' }">{{status}}</div>
          </div>
        </div>
      </div>
      <div>

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
        time: null,
        noMsgImg:require("~/assets/images/noMsg.png")
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
           this.curriculumPayData = response.data.curriculumPayApply
          //  console.log(response, '123')
           for(let item of response.data.curriculumPayApply){
             item.create_time = this.timestampToTime(item.create_time)
            //  console.log(this.time, '678')
              // console.log(item, '这是item')
           }
            resolve(true)
          })
        })
      },
      selectPayApply(item,index){
         persistStore.set('pay', index)
          persistStore.set('price', item.totalPresentPrice)
         this.$router.push('/shop/checkedCourseList')
      },
      goLink(item){
        this.$router.push(item)
      },
      timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return Y+M+D+h+m+s;
      }
    },
  }
</script>

<style scoped>
.noCourse{
  width: 100%;
  height: 600px;
  text-align: center;
}
.noCourse img {
    width: 316px;
    height: 274px;
    margin-top: 35px;
}
.profile .content .noCourse h4{
      height: 70px;
    line-height: 70px;
    text-align: center;
    color: #999;
    font-size: 20px;
}
</style>
