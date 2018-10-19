<template>
  <div>
    <!-- 老师页 -->
    <div class="newOrFreeCourseList famousList center goodlesson">
      <div class="course  clearfix bottom " v-for="(teacher,index) in famousList " :key="index " @click="handleLinkTeacherInfo(teacher)">
        <el-card class="fl " :body-style="{ padding: '0px' } ">
          <!-- 课程封面 -->
          <img :src="teacher.head_img" class="image teacherList-img" alt=" ">
        </el-card>
        <div class="particulars fl ">
          <div class="currentclum ">
            <h4>{{teacher.teacher_name}}</h4>
            <p class="small-title">{{teacher.graduate}}</p>
            <p class="title-desc">{{teacher.content}}</p>
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
    handleLinkTeacherInfo(item) {
      this.$router.push('/home/teacher/' + item.id)
    }
  }
}
</script>

