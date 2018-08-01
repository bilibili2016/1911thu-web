<template>
  <div class="projectCourse">
    <h3>{{projectCourseData.title}}</h3>
    <div class="system" v-for="(item,index) in projectCourseData.system" :key="index">
      <h4>{{item.title}}</h4>
      <div class="course">
        <div class="courseOne clearfix" v-for="(course,index) in item.course" :key="index">
          <img class="fl" :src="course.headImg" alt="">
          <div class="fl">
            <h5>{{course.title}}</h5>
            <h6>{{course.teacher}} {{course.position}}</h6>
            <p>{{course.word}}</p>
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