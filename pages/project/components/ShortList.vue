<template>
  <!-- 项目列表card组件[首页]-->
  <div class="shortlist">
    <div class="goodCourse project">
      <div class="courseLi clearfix" v-for="(course,index) in cardData" :key="index" @click="projectInfo(course)">
        <div class="fl">
          <img :src="projectImg" alt="" class="project-img">
          <img :src="course.picture" alt="" class="teacher-picture">
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
  </div>

</template>

<script>
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['cardData'],
  data() {
    return {
      projectImg: 'http://papn9j3ys.bkt.clouddn.com/p4.png',
      stydyNum: require('@/assets/images/home_num.png')
    }
  },
  methods: {
    //项目详情
    projectInfo(item, index) {
      persistStore.set('projectId', item.id)
      window.open(
        window.location.origin + '/project/ProjectDetail?id=' + item.id
      )
    }
  }
}
</script>

