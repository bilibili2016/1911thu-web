<template>
  <!-- 项目线上课程列表 -->
  <div class="projectCourse">
    <!-- <h3>{{projectCourseData}}</h3> -->
    <div class="system" v-for="(item,index) in projectCourseData" :key="index" v-if="projectCourseData.length>0">
      <h4>{{item.system_name}}</h4>
      <div class="course">
        <div class="courseOne clearfix" v-for="(course,index) in item.curriculumList" :key="index">
          <img class="fl course-img" :src="course.teacher_head_img" alt="" @click="goCourseDetail(course)">
          <div class="fl" @click="goCourseDetail(course)">
            <h5>{{course.title}}</h5>
            <h6>{{course.teacher_name}} {{course.teacher_graduate}}</h6>
            <p>{{course.introduction}}</p>
          </div>
          <img class="fr" src="http://static-image.1911edu.com/projectCoursePlay.png" alt="" @click="goProjectPlayer(course)">
        </div>
      </div>
    </div>
    <div class="noData" v-else>
      <img src="http://static-image.1911edu.com/noMsg.png" alt="">
      <p>还没有评论，快去抢沙发！</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { message, open, matchSplits } from '@/lib/util/helper'
export default {
  props: ['projectCourseData', 'projectId'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      kidForm: {
        ids: null
      },
      projectPlayer: {
        base: '/project/projectPlayer',
        kid: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    // 跳转课程详情
    goCourseDetail(item) {
      this.$router.push({
        path: '/course/detail',
        query: {
          kid: item.curriculum_id,
          pid: this.projectId,
          page: 0
        }
      })
    },
    // 跳转到项目播放页
    goProjectPlayer(course) {
      if (persistStore.get('token')) {
        let urlLink = {
          base: '/project/projectPlayer',
          kid: matchSplits('kid'),
          cid: course.curriculum_id,
          type: matchSplits('type')
        }
        open(urlLink)
      } else {
        this.$bus.$emit('loginShow', true)
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/project/projectCourse.scss';
</style>
