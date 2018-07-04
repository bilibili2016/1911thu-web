<template>
  <div class="bg-none">
    <el-row class="center">
      <v-title :data="titleThree"></v-title>
      <!-- <v-card ref="card" :data="classicData" :config="config"></v-card> -->
      <div class="goodCourse" :data="classicData">
        <div class="courseLi clearfix" v-for="(course,index) in classicData" :key="index">
          <div class="fl">
            <img src="" alt="">
          </div>
          <div class="fr courseInfo">
            <h4>{{course.title}}</h4>
            <h5>

            </h5>
            <h6 class="clearfix">
              <p class="fl">{{course.curriculum_time}}课时{{course.study_number}}</p>
              <p class="fr">
                <el-rate disabled v-model="course.score" class="itemBox-rate"></el-rate>
              </p>
            </h6>
            <p>{{course.present_price}}</p>
          </div>
        </div>
      </div>
      <v-more :linkdata="linktwo"></v-more>
    </el-row>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import CustomCard from '@/components/common/Card.vue'
import CustomMore from '@/components/common/More.vue'
export default {
  props: ['config', 'classicData', 'titleThree', 'linktwo'],
  components: {
    'v-title': CustomTitle,
    'v-card': CustomCard,
    'v-more': CustomMore
  }
}
</script>
<style scope lang="scss">
.goodCourse {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .courseLi {
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
    img {
      width: 250px;
      height: 160px;
      border-radius: 16px;
      overflow: hidden;
    }
    .courseInfo {
      padding: 0 30px 0 20px;
      h4 {
        color: #1c1f21;
        font-size: 16px;
      }
      h5 {
        color: #93999f;
        font-size: 14px;
      }
      h6 {
        color: #93999f;
        font-size: 12px;
      }
      & > p {
        color: #1c1f21;
        font-size: 14px;
      }
    }
  }
}
</style>
