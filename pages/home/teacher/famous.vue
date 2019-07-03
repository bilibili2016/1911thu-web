<template>
  <!-- 名师智库 -->
  <div class="teachers">
    <v-title :title="famoustitle" :link="linkfamouscourse"></v-title>
    <div class="cardList ">
      <div class="item" v-for="(teacher,index) in teachers" :key="index" @click="goTeacherInfo(teacher.id)">
        <div class="item-img">
          <img :src="teacher.head_img" alt="">
        </div>
        <div class="item-desc">
          <p class="name">{{teacher.teacher_name}}</p>
          <p class="graudate">{{teacher.graduate}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { home } from '~/lib/v1_sdk/index'
import CustomTitle from '@/components/common/Title.vue'
export default {
  data () {
    return {
      tidForm: {
        tids: null
      },
      teacherForm: {
        pages: 1,
        limits: 7,
        recommend: 1
      },
      famoustitle: '名师智库',
      teachers: [],
      linkfamouscourse: '/teacher/list'
    }
  },
  components: {
    'v-title': CustomTitle
  },
  methods: {
    goLink (item) {
      this.$router.push(item)
    },
    goTeacherInfo (item) {
      this.courseUrl.tid = item;
      open(this.courseUrl);
    },
    getMore (item) {
      window.open(window.location.origin + item)
    },
    getTeacherList () {
      home.getTeacherList(this.teacherForm).then(response => {
        this.teachers = response.data.teacherList
        // this.teacherResource = response.data.teacherList
      })
    }
  },
  mounted () {
    this.getTeacherList()
  }
}
</script>

