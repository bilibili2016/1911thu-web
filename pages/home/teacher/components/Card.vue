<template>
  <div>
    <!-- 老师页 -->
    <div class="newOrFreeCourseList famousList center goodlesson">
      <div class="course  clearfix bottom " v-for="(teacher,index) in famousList " :key="index ">
        <el-card class="fl " :body-style="{ padding: '0px' } ">
          <!-- 课程封面 -->
          <img @click="handleLinkTeacherInfo(teacher)" :src="teacher.head_img" class="image teacherList-img" alt=" ">
        </el-card>
        <div class="particulars fl ">
          <div class="currentclum ">
            <h4 @click="handleLinkTeacherInfo(teacher)">{{teacher.teacher_name}}</h4>
            <p class="small-title">{{teacher.graduate}}</p>
            <p class="title-desc">{{teacher.content}}</p>
          </div>
          <div class="teacherBtn">
            <span class="begin" v-if="teacher.is_teachering">已开课</span>
            <span v-else>筹备中</span>
            <span class="reservation" @click="reservation(teacher)">预约导师</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['famousList'],
  methods: {
    reservation(teacher) {
      console.log(teacher)
      this.$router.push('/home/teacher/orderTeacher')
    },
    handleLinkTeacherInfo(item) {
      this.$router.push('/home/teacher/' + item.id)
    }
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/teacher/card';
</style>

