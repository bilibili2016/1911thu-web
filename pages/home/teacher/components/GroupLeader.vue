<template>
  <div class="groupLeader">
    <div class="inner">
      <v-title :title="title" :link="link"></v-title>
      <div class="list" v-loading="teacherListLoading">
        <div class="item" v-for="(item,index) in groupLeader" :key="index" v-if="index<6" @click="handleItem(item)">
          <img :src="item.head_img" alt="">
          <!-- <div class="bottom">
            <p><span class="name">{{item.teacher_name}}</span><span class="college">{{item.college_name}}</span></p>
            <p class="pro">{{item.graduate}}</p>
          </div> -->
          <div class="intro">
            <h4>{{item.teacher_name}}<span>{{item.college_name}}</span></h4>
            <p class="position">{{item.graduate}}</p>
            <p class="info">{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTitle from "@/components/common/Title.vue";
import { store as persistStore } from "~/lib/core/store";
export default {
  props: ['groupLeader', 'teacherListLoading', 'title', 'link'],
  components: {
    "v-title": CustomTitle,
  },
  methods: {
    handleItem (item) {
      persistStore.set("cid", item.college_id);
      this.$router.push("/home/teacher/teacherIndex");
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/style/teacher/groupLeader";
</style>