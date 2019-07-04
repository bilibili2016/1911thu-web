// 首页导师列表
<template>
  <div class="indexList">
      <v-title :title="title" :link="link" :isTeacher="true"></v-title>
      <v-tcard :data="teacherData"></v-tcard>
  </div>
</template>
<script>
import CustomTitle from "@/components/common/Title.vue";
import TCard from "@/components/card/teacherCard.vue";

export default {
  components:{
    "v-title": CustomTitle,
    "v-tcard":TCard


  },
  props: ["teacherData","title","link"],

}
</script>
