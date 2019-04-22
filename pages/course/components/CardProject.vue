<template>
  <div>
    <div class="curriculumList center">
      <!-- v-for="(course,index) in courseList -->
      <div class="course clearfix  ">
        <el-card class="fl" :body-style="{ padding: '0px' }">
          <div class="goodplay">
            <img :src="courseList.picture" class="image">
          </div>
          <v-player></v-player>
        </el-card>
        <div class="particularss fr">
          <div class="currentclum">
            <!-- 公共项目标题 -->
            <h4>{{courseList.title}} </h4>
            <!-- 免费课程 未学习 start-->
            <div class="study clearfix">
              <!-- 课程介绍 -->
              <p>{{courseList.introduction}}</p>
              <!-- 学时 以及 学习人数 星级 价钱-->
              <div class="studyInfo">
                <span class="fl coursenum">
                  <img src="@/assets/images/icon_id.png" alt="">学习人数：{{courseList.study_number}}</span>
                <span class="fl coursenum">
                  <span><img src="@/assets/images/icon_time.png" alt="">总学时：{{courseList.study_time}}</span>
                </span>
                <span class="rate">课程评分：
                  <el-rate disabled v-model="courseList.score"></el-rate>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardPlayer from '@/pages/course/components/CardPlayer'
export default {
  components: {
    'v-player': CardPlayer
  },
  props: ['courseList', 'privileMsg', 'config'],
  data () {
    return {
      playImg: 'https://static-image.1911edu.com/play.png'
    }
  }
}
</script>

