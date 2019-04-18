<template>
  <div class="cardList">
    <ul>
      <li v-if="!config.isTeacher" v-for="(teacher,index) in teacherData " :key="index">
        <div class="headImg">
          <img :src="teacher.picture" alt="">
        </div>
        <div class="info clearfix">
          <div class="fl">
            <img :src="teacher.picture" alt="">
            <span>1911同学201800013</span>
          </div>
          <div class="fr">{{teacher.use_time/60}}min</div>
        </div>
        <div class="time">预约开始时间：{{changeTime(teacher.start_time)}}</div>
        <div class="btn clearfix">
          <div class="fl">￥{{teacher.price}}</div>
          <div class="fr">
            <span @click="goLive(teacher)">进入直播</span>
          </div>
        </div>
      </li>
      <li v-if="config.isTeacher" v-for="(teacher,index) in teacherData " :key="index">
        <div class="headImg">
          <img :src="teacher.picture" alt="">
        </div>
        <div class="info clearfix">
          <div class="fl">
            <img :src="teacher.picture" alt="">
            <span>1911同学201800013</span>
          </div>
          <div class="fr">{{teacher.use_time/60}}min</div>
        </div>
        <div class="time">预约开始时间：{{changeTime(teacher.start_time)}}</div>
        <div class="btn clearfix">
          <div class="fl">￥{{teacher.price}}</div>
          <div class="fr">
            <span @click="goLive(teacher)">进入直播</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { timestampToTime } from "@/lib/util/helper";

export default {
  props: ["teacherData", "config"],
  data () {
    return {
      time: ""
    };
  },
  methods: {
    goLive (teacher) {
      this.$router.push("/live?id=" + teacher.id);
      //   this.$router.push('/live/studentLive')
    },
    changeTime (time) {
      return timestampToTime(time);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/profile/part.scss";
</style>