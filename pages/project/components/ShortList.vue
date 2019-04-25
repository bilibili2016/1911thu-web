<template>
  <!-- 项目列表card组件[首页]-->
  <div class="shortlist">
    <div class="goodCourse project">
      <div class="courseLi clearfix" v-for="(course,index) in cardData" :key="index" @click="projectInfo(course)">
        <div class="fl">
          <img :src="projectImg" alt="" class="project-img">
          <img :src="course.picture" alt="" class="teacher-picture">
        </div>
        <div class="fr courseInfo">
          <h4 :title="course.title">{{course.title}}</h4>
          <h5>{{course.deputy_title}}</h5>
          <p v-if="(course.is_free === '1'&&course.study_type=='2')||(course.is_free === '1'&&course.study_type=='3')" class="money">¥{{course.present_price}}/班</p>
          <p v-if="(course.is_free === '1'&&course.study_type=='1')" class="money">¥{{course.present_price}}/人</p>
          <h6 class="clearfix">
            <p class="fl">{{course.study_time}}学时 <img :src="stydyNum" alt=""> {{course.study_number}}</p>
            <p class="fr">
              <el-rate disabled v-model="course.score" class="itemBox-rate"></el-rate>
            </p>
          </h6>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { store as persistStore } from "~/lib/core/store";
export default {
  props: ["cardData"],
  data () {
    return {
      projectImg: "https://static-image.1911edu.com/p4.png",
      stydyNum: require("@/assets/images/home_num.png")
    };
  },
  methods: {
    //项目详情
    projectInfo (item, index) {
      this.$router.push({
        path: "/project/projectdetail",
        query: {
          kid: item.id,
          type: 1
        }
      });
    },
    changeManey (money) {
      if (money >= 10000) {
        return money / 10000 + "万";
      } else {
        return money + "元";
      }
    }
  }
};
</script>

