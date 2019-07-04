<template>
  <!-- 老师页 -->
  <div class="teacherCard clearfix">
    <div class="teacherList clearfix" v-for="(teacher,index) in famousList " :key="index">
      <div class="list-con">
        <img :src="teacher.head_img" alt="" class="teacherImg">
        <p class="name">{{teacher.teacher_name}}</p>
        <p class="position" :class="{'ellipsis':teacher.graduate.length>25}">{{teacher.graduate}}</p>
        <p class="operate">
          <span class="btn" @click="handleLinkTeacherInfo(teacher.id)">查看导师详情</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { open } from "~/lib/util/helper";
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
    handleLinkTeacherInfo (item) {
      this.courseUrl.tid = item;
      open(this.courseUrl);
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/teacher/card";
</style>

