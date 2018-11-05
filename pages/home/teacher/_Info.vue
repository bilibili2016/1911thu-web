<template>
  <div class="teacher home-teacher" v-loading="loading">
    <div class="tcInfo">
      <img :src="teacherBg" alt="">
      <div class="bg-text">
        <p><img :src="teacherData.head_img" alt=""></p>
        <div class="desc">
          <h4>{{teacherData.teacher_name}}</h4>
          <h5>{{teacherData.graduate}}</h5>
          <h6>{{teacherData.wish_word}}</h6>
        </div>
      </div>

    </div>
    <div class="courseList">
      <h3>在教的课程</h3>
      <div class="list">
        <v-card :data="teacherCourse" :config="config"></v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { teacherInfo } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import CustomCard from '@/components/card/Card.vue'
export default {
  components: {
    'v-card': CustomCard
  },
  data() {
    return {
      config: {
        card_type: 'profile',
        card: 'home'
      },
      teacherData: {},
      teacherCourse: [],
      teacherID: null,
      tidForm: {
        tids: null
      },
      teacherBg: 'http://papn9j3ys.bkt.clouddn.com/teacher_bannerBG.png',
      loading: false
    }
  },
  methods: {
    getTeacherInfo() {
      teacherInfo.getTeacherInfo(this.tidForm).then(response => {
        this.teacherData = response.data.teacherInfo
        this.loading = false
      })
    },
    getTeacherCourse() {
      teacherInfo.getTeacherCourse(this.tidForm).then(response => {
        this.teacherCourse = response.data.curriculumList
        this.loading = false
      })
    }
  },
  mounted() {
    let tid = window.location.pathname.split('/')[3]
    this.tidForm.tids = tid
    this.loading = true
    this.getTeacherInfo()
    this.getTeacherCourse()
  }
}
</script>
