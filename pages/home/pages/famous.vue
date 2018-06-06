<template>
  <div class="teachers">
      <v-title :data = "titleThree"></v-title>
      <div class="blueBar"></div>
      <div class="cardList">
        <div class="card" v-for="(teacher,index) in teachers" :key="index">
          <img :src="teacher.head_img" class="image">
          <div class="diaphaneity">
            <div class="octImg"></div>
            <div class="abstract">
              <h4>{{teacher.teacher_name}}</h4>
              <p>{{teacher.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import CustomTitle from "@/components/common/Title.vue";

export default {
  props: ["teachers", "titleThree"],
  components: {
    "v-title": CustomTitle
  }
};
</script>
