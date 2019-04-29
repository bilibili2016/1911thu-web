<template>
  <div class="groupLeader">
    <div class="inner">
      <h2 class="title">专家组组长</h2>
      <div class="list" v-loading="teacherListLoading">
        <div class="item" v-for="(item,index) in groupLeader" :key="index" v-if="index<6" @click="handleItem(item)">
          <img :src="item.head_img" alt="">
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
import { store as persistStore } from "~/lib/core/store";
export default {
  props: ['groupLeader', 'teacherListLoading'],
  methods: {
    handleItem (item) {
      persistStore.set("cid", item.college_id);
      this.$router.push("/home/teacher/list");
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/style/teacher/groupLeader";
</style>