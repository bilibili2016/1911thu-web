<template>
  <div class="cardList">
    <div class="process">
      <img class="student_pro" v-if="!config.isTeacher" src="https://static-image.1911edu.com/student-process.png" alt="">
      <img v-else src="https://static-image.1911edu.com/appoint-process.png" alt="">
    </div>
    <div v-if="teacherData.length!=0">
      <ul>
        <li v-if="!config.isTeacher" v-for="(teacher,index) in teacherData " :key="index">
          <div class="headImg" @click="handleDetail(teacher)">
            <img :src="teacher.picture" alt="">
          </div>
          <div class="info clearfix">
            <div class="fl">
              <img :src="teacher.teacher_head_img" alt="">
              <span>{{teacher.teacher_user_name}}</span>
            </div>
            <div class="fr">{{teacher.use_time/60}}min</div>
          </div>
          <div class="time">预约开始时间：{{changeTime(teacher.start_time)}}</div>
          <div class="btn clearfix">
            <div class="fl">￥{{teacher.price}}</div>
            <div class="fr">
              <span v-if="teacher.result_status == 2" class="wait">等待预约确认</span>
              <span v-if="teacher.result_status == 3">
                <span v-if="(Number(teacher.start_time)-teacher.service_time)/60>5" class="soon">等待开始</span>
                <span v-else>
                  <span v-if="Number(teacher.end_time)-teacher.service_time>0" class="begin" @click="goLive(teacher)">进入直播</span>
                  <span v-else class="end">已结束</span>
                </span>
              </span>
              <span v-if="teacher.result_status == 4" class="efficacy">已失效</span>
              <span v-if="teacher.result_status == 6" class="wait">调整待确认</span>
            </div>
          </div>
        </li>
        <li v-if="config.isTeacher" v-for="(teacher,index) in teacherData " :key="index">
          <div class="headImg" @click="handleDetail(teacher)">
            <img :src="teacher.picture" alt="">
          </div>
          <div class="info clearfix">
            <div class="fl">
              <img :src="teacher.user_head_img" alt="">
              <span>{{teacher.user_name}}</span>
            </div>
            <div class="fr">{{teacher.use_time/60}}min</div>
          </div>
          <div class="time">预约开始时间：{{changeTime(teacher.start_time)}}</div>
          <div class="btn clearfix">
            <div class="fl">￥{{teacher.price}}</div>
            <div class="fr">
              <span v-if="teacher.result_status == 2" class="wait">等待预约确认</span>
              <span v-if="teacher.result_status == 3">
                <span v-if="(Number(teacher.start_time)-teacher.service_time)/60>5" class="soon">等待开始</span>
                <span v-else>
                  <span v-if="Number(teacher.end_time)-teacher.service_time>0" class="begin" @click="goLive(teacher)">进入直播</span>
                  <span v-else class="end">已结束</span>
                </span>
              </span>
              <span v-if="teacher.result_status == 4" class="efficacy">已失效</span>
              <span v-if="teacher.result_status == 6" class="wait">调整待确认</span>
            </div>
          </div>
        </li>
      </ul>

    </div>
    <div class="content" v-else>
      <div class="noCourse">
        <img src="https://static-image.1911edu.com/noMsg.png" alt="">
        <h4 v-if="config.isTeacher">您暂时没有已预约的直播咨询。</h4>
        <h4 v-else>你暂时没有已预约的直播咨询，快去<span class="link" @click="handleTeacher">名师智库</span>预约导师吧。</h4>
      </div>
    </div>
    <v-appointinfo v-if="isShowDetail" :detail="appointInfo" :config="config" @closeDetailPop="closeDetailPop"></v-appointinfo>
  </div>
</template>

<script>
import { timestampToTime, message, IEPopup } from "@/lib/util/helper";
import { myTeacher } from "~/lib/v1_sdk/index";
import NoMsg from "@/pages/profile/components/common/noMsg.vue";
import Info from "@/pages/profile/components/common/appointInfo.vue";

export default {
  props: ["teacherData", "config", "teacherPagemsg"],
  components: {
    "v-nomsg": NoMsg,
    "v-appointinfo": Info
  },
  data () {
    return {
      isShowDetail: false,
      appointInfo: "",
      noMsg: {
        type: "myTeacher",
        text: "您暂未加入任何学院，快去加入吧！"
      },
      time: "",
      type: 1
    };
  },
  methods: {

    closeDetailPop () {
      this.isShowDetail = false;
      IEPopup("pane-tab-twelfth", "relative", 1);
    },
    handleDetail (item) {
      myTeacher.BespokeDetail({ id: item.id, type: this.type }).then(res => {
        if (res.status == 0) {
          IEPopup("pane-tab-twelfth", "-ms-page", 0);
          this.isShowDetail = true;
          this.appointInfo = res.data.teacherBespokeDetail;
          // this.handleGoTo("timeTable");
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    handleTeacher () {
      this.$router.push("/home/teacher/list");
    },
    goLive (teacher) {
      this.$router.push(`/live?id=${teacher.id}&type=${this.type}`);
      //   this.$router.push('/live/studentLive')
    },
    changeTime (time) {
      return timestampToTime(time);
    }
  },
  mounted () {
    if (this.config.isTeacher) {
      this.noMsg.text = "您暂时没有已预约的直播咨询。";
      this.type = 2;
    } else {
      this.noMsg.text = "你暂时没有已预约的直播咨询，快去名师智库预约导师吧。";
      this.type = 1;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/profile/myTeacher/part.scss";
</style>