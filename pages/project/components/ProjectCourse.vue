<template>
  <!-- 项目线上课程列表 -->
  <div class="projectCourse">
    <!-- <h3>{{projectCourseData}}</h3> -->
    <div class="system" v-for="(item,index) in projectCourseData" :key="index">
      <h4>{{item.system_name}}</h4>
      <div class="course">
        <div class="courseOne clearfix" v-for="(course,index) in item.curriculumList" :key="index">
          <img class="fl" :src="course.teacher_head_img" alt="" @click="goCourseDetail(course)">
          <div class="fl" @click="goCourseDetail(course)">
            <h5>{{course.title}}</h5>
            <h6>{{course.teacher_name}} {{course.teacher_graduate}}</h6>
            <p>{{course.introduction}}</p>
          </div>
          <img class="fr" src="~assets/images/pro_player.png" alt="" @click="goProjectPlayer()">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { splitUrl, message, open } from '@/lib/util/helper'
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
      let urlLink = {
        base: '/course/coursedetail',
        kid: item.curriculum_id,
        pid: this.id,
        page: 0
      }
      open(urlLink)
      // window.open(
      //   window.location.origin +
      //     '/course/coursedetail?kid=' +
      //     item.curriculum_id +
      //     '&pid=' +
      //     this.id
      // )
    },
    // 跳转到项目播放页
    goProjectPlayer() {
      if (this.isAuthenticated) {
        let urlLink = {
          base: '/project/projectPlayer',
          id: splitUrl(0, 1),
          type: splitUrl(1, 1)
        }
        open(urlLink)
        // window.open(
        //   window.location.origin +
        //     '/project/projectPlayer?id=' +
        //     splitUrl(0, 1) +
        //     '&type=' +
        //     splitUrl(1, 1)
        // )
      } else {
        this.$bus.$emit('loginShow', true)
      }
    }
  }
}
</script>

