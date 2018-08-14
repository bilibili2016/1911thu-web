<template>
  <div class="goodCourse 3333">
    <div class="courseLi clearfix" v-for="(course,index) in data" :key="index" @click="handleLink(course)">
      <div class="fl">
        <img :src="course.teacher_picture" alt="">
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
export default {
  props: ['data'],
  data() {
    return {
      stydyNum: require('@/assets/images/home_num.png')
    }
  },
  methods: {
    handleLink(item) {
      persistStore.set('curriculumId', item.id)
      window.open(
        window.location.origin + '/course/coursedetail?kid=' + item.id
      )
    }
  }
}
</script>

<style scoped>
</style>
