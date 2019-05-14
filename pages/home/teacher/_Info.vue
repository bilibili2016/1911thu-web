<template>
  <div>
    <div class="home-teacher" v-loading="loading">
      <div class="tcInfo">
        <!-- <img :src="teacherBg" alt=""> -->
        <div class="bg-text">
          <div class="left-teacher">
            <img :src="teacherData.head_img" alt="">
          </div>
          <div class="desc">
            <h4>{{teacherData.teacher_name}}</h4>
            <h5>{{teacherData.graduate}}</h5>
            <h6>{{teacherData.content}}</h6>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="inner">
          <h3>您可在线预约导师咨询问题，也可以学习其课程或邀请导师授课！</h3>
          <div class="middle-con clearfix">
            <div class="left">
              <div class="title">擅长的话题</div>
              <ul class="topic" v-if="questionLeft.length>0">
                <li v-for="(item,index) in questionLeft" :key="index">{{item.title}}</li>
              </ul>
              <div class="noTopic" v-else>
                <img :src="noTopic" alt="">
                <p>暂无擅长的话题</p>
              </div>
              <div class="btn apponit" v-if="teacherData.is_meet==1" @click="handleAppoint">预约咨询</div>
              <div class="btn unBtn" v-else>预约导师</div>
            </div>
            <div class="right">
              <div class="title">讲授的课程</div>
              <ul class="course" v-if="questionRight.length>0">
                <li v-for="(item,index) in questionRight" :key="index">{{item.title}}</li>
              </ul>
              <div class="noTopic" v-else>
                <img :src="noTopic" alt="">
                <p>暂无讲授的课程</p>
              </div>
              <div class="btn invite" @click="inviteTutor">邀请导师授课</div>
            </div>
          </div>
        </div>
      </div>
      <div class="courseList">
        <div v-if="teacherCourse.length!=0">
          <h3>在教的课程</h3>
          <div class="list">
            <v-card v-if="teacherCourse.length" :data="teacherCourse" :config="config"></v-card>
          </div>
        </div>
        <!-- 无数据 -->
        <v-nodata v-else :pageType="pageType"></v-nodata>
      </div>
    </div>
    <!-- 未支付提醒弹框 -->
    <div class="unPayDiv" v-if="isShowProfile">
      <div class="inner-con">
        <i class="el-icon-close" @click="closeProfile"></i>
        <p class="text">您还有未支付的预约，请您到“个人中心-我的咨询”完成支付</p>
        <span class="btn" @click="handleGoto">前往个人中心</span>
      </div>
    </div>
    <v-appointment v-if="showAppointment" @closeForm="closeForm" :teacherInfo="teacherData" @goPay="goPay" :userInfo="userInfo" @unPay="unPay"></v-appointment>
    <v-pay v-if="showPay" @closePayed="closePayed" :userInfo="userInfo" :teacherInfo="teacherData" :orderInfo="orderInfo" :config="'teacherDetail'"></v-pay>
  </div>
</template>

<script>
import { teacherInfo, banner } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import CustomCard from "@/components/card/Card.vue";
import NoData from "@/components/common/NoData.vue";
import Pay from "@/pages/home/teacher/components/Pay.vue";
import Appointment from "@/pages/home/teacher/components/AppointmentTeacher";

export default {
  components: {
    "v-card": CustomCard,
    "v-nodata": NoData,
    "v-appointment": Appointment,
    "v-pay": Pay
  },
  data () {
    return {
      isShowProfile: false,
      showAppointment: false,
      showPay: false,
      orderInfo: {
        id: '',
        time: ''
      },
      userInfo: "",
      pageType: {
        page: "teacher/_info",
        text: "暂无在教的课程",
        imgUrl: "https://static-image.1911edu.com/noMsg.png"
      },
      noTopic: "https://static-image.1911edu.com/noTopic.png",
      config: {
        card_type: "profile",
        card: "home"
      },
      teacherData: {},
      questionLeft: '',
      questionRight: '',
      teacherCourse: [],
      teacherID: null,
      tidForm: {
        tids: null
      },
      gidForm: {
        gids: ""
      },
      teacherBg: "https://static-image.1911edu.com/teacher_bannerBG.png",
      loading: false,
      topicList: [
        '创业公司如何利用社群低成本营销创业公司如何利用社群低成本营销销创业公司如何利用社群低成本营销创业公司如何利用社群低成本营销销',
        '创业公司如何利用社群低成本营销',
        '创业公司如何利用社群低成本营销创业公司如何利用社群低成本营销创业公司如何利用社群低成本营销',
        '创业公司如何利用社群低成本营销创业公司如何利用社群低成本营销创业公司如何利用社群低成本营销',
        '创业公司如何利用社群低成本营销创业公司如何利用社群低成本营销创业公司如何利用社群低成本营销',
        '创业公司如何利用社群低成本营销',
        '创业公司如何利用社群低成本营销'
      ]
    };
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    closeProfile () {
      this.isShowProfile = false
    },
    handleGoto () {
      this.gidForm.gids = "tab-twelfth";
      this.setGid(this.gidForm);
      this.$router.push("/profile");
      this.$bus.$emit("selectProfileIndex", 'tab-twelfth');
    },
    unPay () {
      this.showAppointment = false
      this.isShowProfile = true
    },
    goPay (data) {
      console.log(data, 'datat');

      this.showPay = true;
      this.orderInfo.id = data.id;
      this.orderInfo.time = data.update_time;
    },
    closeForm () {
      this.showAppointment = !this.showAppointment;
    },
    // 支付弹框关闭的回调
    closePayed () {
      this.showPay = !this.showPay;
    },
    reservation (teacher) {
      if (persistStore.get("token")) {
        this.getUserInfo();
        this.teacherInfo = teacher;
        this.showAppointment = !this.showAppointment;
      } else {
        this.$bus.$emit("loginShow", true);
      }
    },
    inviteTutor () {
      this.$router.push(`/home/teacher/orderTeacher?id=${this.tidForm.tids}`)
    },
    getUserInfo () {
      banner.getUserInfo().then(res => {
        if (res.status === 0) {
          this.userInfo = res.data.userInfo;
        }
      });
    },
    getTeacherInfo () {
      teacherInfo.getTeacherInfo(this.tidForm).then(response => {
        this.teacherData = response.data.teacherInfo;
        this.questionLeft = response.data.teacherInfo.questionLeft
        this.questionRight = response.data.teacherInfo.questionRight
        this.loading = false;
      });
    },
    getTeacherCourse () {
      teacherInfo.getTeacherCourse(this.tidForm).then(response => {
        this.teacherCourse = response.data.curriculumList;
        this.loading = false;
      });
    },
    //预约导师
    handleAppoint () {
      if (persistStore.get("token")) {
        this.showAppointment = true;
        this.getUserInfo();
      } else {
        this.$bus.$emit("loginShow", true);
      }
    }
  },
  mounted () {
    let tid = window.location.pathname.split("/")[3];
    this.tidForm.tids = tid;
    this.loading = true;
    this.getTeacherInfo();
    this.getTeacherCourse();
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/teacher/teacher";
</style>