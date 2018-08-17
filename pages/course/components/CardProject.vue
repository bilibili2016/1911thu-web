<template>
  <div>
    <div class="curriculumList center">
      <!-- v-for="(course,index) in courseList -->
      <div class="course clearfix  ">
        <el-card class="fl" :body-style="{ padding: '0px' }">
          <div class="goodplay">
            <img :src="courseList.picture" class="image">
            <!-- <div class="mask">1</div> -->
            <!-- project 页面的课程详情 不显示一些东西 -->
            <div class="common-button btn-bg" v-if="config.card_type !== 'project'">
              <!-- 登录 不登录 播放按钮 -->
              <div class="playBtn-detail">
                <img :src="playImg" alt="" @click="handleImgPlay(courseList)">
              </div>
            </div>
          </div>
          <v-player></v-player>
        </el-card>
        <div class="particularss fr">
          <div class="currentclum">

            <!-- 公共项目标题 -->
            <h4>{{courseList.title}} </h4>
            <!-- 免费课程 未学习 start-->
            <div>
              <div>
                <span class="fl coursenum">
                  <span>{{courseList.study_time}}学时</span><img src="@/assets/images/home_num.png" alt=""> {{courseList.study_number}}</span>
                <span class="rate">
                  <el-rate disabled v-model="courseList.score"></el-rate>
                </span>
              </div>
              <!-- 课程介绍 登录 未登录 学习按钮 -->
              <div class="study clearfix">
                <!-- 课程介绍 -->
                <p>{{courseList.introduction}}</p>
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
  data() {
    return {
      playImg: 'http://papn9j3ys.bkt.clouddn.com/play.png'
    }
  }
}
</script>

