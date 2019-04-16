<template>
  <div>
    <!-- 老师页 -->
    <div class="teacherCard clearfix">
      <div class="teacherList clearfix" v-for="(teacher,index) in famousList " :key="index">
        <div class="list-con">
          <img :src="teacher.head_img" alt="" class="teacherImg">
          <p class="name">{{teacher.teacher_name}}</p>
          <p class="position">{{teacher.graduate}}</p>
          <p class="operate">
            <span class="btn" v-if="teacher.is_teachering" @click.stop="handleLinkTeacherInfo(teacher)">已开课</span>
            <span class="btn preparation" v-else>筹备中</span>

            <span class="btn" v-if="teacher.is_meet ==1" @click.stop="reservation(teacher)">预约导师</span>
            <span v-if="teacher.is_meet ==0" class="btn unBook">预约导师</span>
          </p>
        </div>
        <div class="mask">
          <div class="mask-con" @click.stop="handleLinkTeacherInfo(teacher)">
            <h4>导师介绍</h4>
            <p>{{teacher.content}}</p>
          </div>
          <p class="operate">
            <span class="btn" v-if="teacher.is_teachering" @click.stop="handleLinkTeacherInfo(teacher)">已开课</span>
            <span class="btn preparation" v-else>筹备中</span>
            <span class="btn" v-if="teacher.is_meet ==1" @click.stop="reservation(teacher)">预约导师</span>
            <span v-if="teacher.is_meet ==0" class="btn unBook">预约导师</span>

          </p>
        </div>
      </div>

      <!-- <div class="course  clearfix bottom " v-for="(teacher,index) in famousList " :key="index ">
        <div class="currentclum clearfix" @click="handleLinkTeacherInfo(teacher)">
          <img :src="teacher.head_img" class="fl" alt=" ">
          <h4>{{teacher.teacher_name}}</h4>
          <p class="small-title">{{teacher.graduate}}</p>
          <div class="teacherBtn">
            <span v-if="teacher.is_teachering" @click.stop="handleLinkTeacherInfo(teacher)">已开课</span>
            <span class="preparations" v-else>筹备中</span>
            <span @click.stop="reservation(teacher)">预约导师</span>
          </div>
          <div class="title-desc">
            <h5>导师介绍</h5>
            <p v-if="teacher.wish_word">{{teacher.content}}</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { message } from "~/lib/util/helper";
import { list } from "~/lib/v1_sdk/index";
export default {
  props: ["famousList"],
  data () {
    return {
      teacher: {
        tid: ""
      }
    };
  },
  methods: {
    reservation (teacher) {
      //   this.$router.push({
      //     path: "/home/teacher/orderTeacher",
      //     query: {
      //       id: teacher.id
      //     }
      //   });
      this.$emit('reservation', teacher)
    },
    handleLinkTeacherInfo (item) {
      if (item.is_teachering) {
        this.$router.push("/home/teacher/" + item.id);
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/teacher/card";
</style>

