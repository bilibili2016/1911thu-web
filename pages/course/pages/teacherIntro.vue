<template>
    <!-- 讲师介绍 -->
    <div class="teacher">
        <h4>讲师介绍</h4>
        <div class="personal clearfix">
            <img class="fl" :src="courseList.head_img" alt="" @click="goTeacherInfo(courseList.teacher_id)">
            <div class="fl">
                <h5 @click="goTeacherInfo(courseList.teacher_id)">{{courseList.teacher_name}}</h5>
                <h6>{{courseList.graduate}}</h6>
            </div>
            <p>{{courseList.teacher_content}}</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['courseList'],
  data() {
    return {
      tidForm: {
        tids: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setTid', 'setIsCollection']),
    // 跳转老师详情页面
    goTeacherInfo(id) {
      this.tidForm.tids = id * 1
      this.setTid(this.tidForm)
      window.open(window.location.origin + '/teacher/' + id)
    }
  }
}
</script>

<style scoped>
</style>