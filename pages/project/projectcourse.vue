<template>
  <!-- 项目线上课程列表 -->
  <div class="projectCourse">
    <!-- <h3>{{projectCourseData}}</h3> -->
    <div class="system" v-for="(item,index) in projectCourseData" :key="index">
      <h4>{{item.system_name}}</h4>
      <div class="course">
        <div class="courseOne clearfix" v-for="(course,index) in item.curriculumList" :key="index">
          <img class="fl" :src="course.teacher_head_img" alt="" @click="goCourseDetail(course)">
          <div class="fl" @click="goCourseDetail(course)">
            <h5>{{course.title}}</h5>
            <h6>{{course.teacher_name}} {{course.teacher_graduate}}</h6>
            <p>{{course.introduction}}</p>
          </div>
          <img class="fr" src="~assets/images/pro_player.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['projectCourseData'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      kidForm: {
        ids: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    // 跳转课程详情
    goCourseDetail(item) {
      persistStore.set('curriculumId', item.curriculum_id)
      this.kidForm.kids = item.curriculum_id
      this.setKid(this.kidForm)
      window.open(window.location.origin + '/course/coursedetail')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/project/projectCourse';
</style>