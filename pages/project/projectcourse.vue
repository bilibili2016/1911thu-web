<template>
  <!-- 项目线上课程列表 -->
  <div class="projectCourse">
    <!-- <h3>{{projectCourseData}}</h3> -->
    <div class="system" v-for="(item,index) in projectCourseData" :key="index">
      <h4>{{item.system_name}}</h4>
      <div class="course">
        <div class="courseOne clearfix" v-for="(course,index) in item.curriculumList" :key="index">
          <img class="fl" :src="course.teacher_head_img" alt="">
          <div class="fl">
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
export default {
  props: ['projectCourseData']
}
</script>

<style scoped lang="scss">
@import '~assets/style/project/projectCourse';
</style>