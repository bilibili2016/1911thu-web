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
            <p class="title-desc" v-if="teacher.wish_word">{{teacher.wish_word}}</p>
          </div>
          <div class="teacherBtn">
            <span class="begin" v-if="teacher.is_teachering" @click="handleLinkTeacherInfo(teacher)">已开课</span>
            <span v-else>筹备中</span>
            <span class="reservation" @click="verifyAppointmentTeacher(teacher)">预约导师</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { message } from '~/lib/util/helper'
import { list } from '~/lib/v1_sdk/index'
export default {
  props: ['famousList'],
  data() {
    return {
      teacher: {
        tid: ''
      }
    }
  },
  methods: {
    reservation(teacher) {
      this.$router.push({
        path: '/home/teacher/orderTeacher',
        query: {
          id: teacher.id
        }
      })
    },
    // 验证导师是否可以预约
    verifyAppointmentTeacher(teacher) {
      this.teacher.tid = teacher.id
      list.verifyAppointmentTeacher(this.teacher).then(response => {
        if (response.status == 0) {
          this.reservation(teacher)
        } else {
          message(this, 'error', response.msg)
        }
      })
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

