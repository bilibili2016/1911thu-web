<template>
  <!-- 讲师介绍 -->
  <div class="teacher">
    <h4>导师介绍</h4>
    <div class="personal clearfix">
      <img class="fl" :src="courseList.head_img" alt="" @click="handleLinkTeacher(courseList)">
      <div class="fl">
        <h5 @click="handleLinkTeacher(courseList)">{{courseList.teacher_name}}</h5>
        <h6>{{courseList.graduate}}</h6>
      </div>
      <p>{{courseList.teacher_content}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['courseList'],
  data () {
    return {}
  },
  methods: {
    ...mapActions('auth', ['setIsCollection']),
    handleLinkTeacher (item) {
      this.$emit('handleLinkTeacher', item.teacher_id)
    }
  }
}
</script>
