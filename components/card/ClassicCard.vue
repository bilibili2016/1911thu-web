<template>
  <div class="goodCourse">
    <div class="courseLi clearfix" v-for="(course,index) in data" :key="index" @click="handleLink(course)">
      <div class="fl">
        <img class="teacherImg" :src="course.teacher_picture" alt="">
      </div>
      <div class="fr courseInfo">
        <h4>{{course.title}}</h4>
        <h5>{{course.deputy_title}}</h5>

        <p v-if="course.is_free === '1'" class="money">￥{{course.present_price}}</p>
        <p v-else class="money">免费</p>
        <h6 class="clearfix">
          <p class="fl">{{course.study_time}}学时 <img :src="stydyNum" alt=""> {{course.study_number}}</p>
          <p class="fr">
            <el-rate disabled v-model="course.score" class="itemBox-rate"></el-rate>
          </p>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { open } from '~/lib/util/helper'
export default {
  props: ['data'],
  data() {
    return {
      stydyNum: require('@/assets/images/home_num.png'),
      coursedetail: {
        base: '/course/coursedetail',
        kid: null
      }
    }
  },
  methods: {
    handleLink(item) {
      this.coursedetail.kid = item.id
      open(this.coursedetail)
    }
  }
}
</script>

<style scoped>
</style>
