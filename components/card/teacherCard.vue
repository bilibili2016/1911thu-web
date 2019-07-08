<template>
  <div class="teacherCard clearfix">
    <div class="item" v-for="(item,index) in data" :key="index" @click="goInfo(item.id)">
      <div class="img">
        <img :src="item.picture" alt="">
        <div class="topic">
          <div class="topicTitle">TA擅长的话题</div>
          <div class="topicItem" v-if="index<=2" v-for="(topic,index) in item.questionList" :key="'topic'+index">#{{topic.title}}</div>
        </div>
      </div>
      <div class="info">
        <div class="name">{{item.teacher_name}}</div>
        <div class="desc">{{item.graduate}}</div>
        <div class="bottom">学习人数<span class="num">{{item.bookingNum}}</span>人</div>
      </div>
    </div>
  </div>
</template>

<script>
import { open } from "@/lib/util/helper";
export default {
  props: ['data'],
  data () {
    return {
      courseUrl: {
        base: "/curriculum/detail",
        kid: 0,
        tid: 0,
      },
    }
  },
  methods: {
    goInfo (id) {
      this.courseUrl.tid = id;
      open(this.courseUrl);
    }
  },

}
</script>

<style lang="scss" scoped>
@import "~assets/style/components/teacherCard";
</style>
