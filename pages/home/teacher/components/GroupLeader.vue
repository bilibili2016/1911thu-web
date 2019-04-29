<template>
  <div class="groupLeader">
    <div class="inner">
      <h2 class="title">专家组组长</h2>
      <div class="list" v-loading="teacherListLoading">
        <div class="item" v-for="(item,index) in groupLeader" :key="index">
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
export default {
  props: ['groupLeader', 'teacherListLoading'],
}
</script>

<style scoped lang="scss">
@import "~assets/style/teacher/groupLeader";
</style>