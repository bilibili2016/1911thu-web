<template>
  <div class="cardList">
    <ul v-if="teacherData.length!=0">
      <li v-if="!config.isTeacher" v-for="(teacher,index) in teacherData " :key="index">
        <div class="headImg">
          <img :src="teacher.picture" alt="">
        </div>
        <div class="info clearfix">
          <div class="fl">
            <img :src="teacher.picture" alt="">
            <span>老师姓名</span>
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
    <div class="content" v-else>
      <div class="noCourse">
        <img src="http://static-image.1911edu.com/noMsg.png" alt="">
        <h4 v-if="config.isTeacher">您暂时没有已预约的直播咨询。</h4>
        <h4 v-else>你暂时没有已预约的直播咨询，快去<span class="link" @click="handleTeacher">名师智库</span>预约导师吧。</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { timestampToTime } from "@/lib/util/helper";
import NoMsg from "@/pages/profile/components/common/noMsg.vue";

export default {
  props: ["teacherData", "config"],
  components: {
    "v-nomsg": NoMsg
  },
  data () {
    return {
      noMsg: {
        type: "myTeacher",
        text: "您暂未加入任何学院，快去加入吧！"
      },
      time: ""
    };
  },
  methods: {
    handleTeacher () {
      this.$router.push("/home/teacher/list");
    },
    goLive (teacher) {
      this.$router.push("/live?id=" + teacher.id);
      //   this.$router.push('/live/studentLive')
    },
    changeTime (time) {
      return timestampToTime(time);
    }
  },
  mounted () {
    if (this.config.isTeacher) {
      this.noMsg.text = "您暂时没有已预约的直播咨询。";
    } else {
      this.noMsg.text = "你暂时没有已预约的直播咨询，快去名师智库预约导师吧。";
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/profile/part.scss";
</style>