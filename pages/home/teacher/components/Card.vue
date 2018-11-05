<template>
  <div>
    <!-- 老师页 -->
    <div class="teacherCard">
      <div class="course  clearfix bottom " v-for="(teacher,index) in famousList " :key="index ">
        <!-- <div class="fl " :body-style="{ padding: '0px' } ">
          课程封面
        </div> -->
        <div class="currentclum clearfix" @click="handleLinkTeacherInfo(teacher)">
          <img :src="teacher.head_img" class="fl" alt=" ">
          <div class="fl">
            <h4>{{teacher.teacher_name}}</h4>
            <p class="small-title">{{teacher.graduate}}</p>
            <div class="teacherBtn">
              <span class="begin" v-if="teacher.is_teachering" @click.stop="handleLinkTeacherInfo(teacher)">已开课</span>
              <span v-else>筹备中</span>
              <span class="reservation" @click.stop="reservation(teacher)">预约导师</span>
            </div>
          </div>
          <div class="title-desc">
            <h5>导师介绍</h5>
            <p v-if="teacher.wish_word">{{teacher.content}}</p>
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
    handleLinkTeacherInfo(item) {
      this.$router.push('/home/teacher/' + item.id)
    }
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/teacher/card';
</style>

