<template>
  <div>
    <el-card class="card-style">
      <div slot="header" class="clearfix">
        <span>考试认证</span>
      </div>
      <div @click="goExam">
        去考试
      </div>

    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],
  methods: {
    goExam() {
      this.$router.push({
        path: '/profile/components/myexamine/answerQuestion',
        query: {
          id: 1
        }
      })
    }
  }
}
</script>

