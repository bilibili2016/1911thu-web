<template>
  <div class="playTop">
    <span @click="goDetail()">
      <i class="el-icon-arrow-left"></i>{{data}}
    </span>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    // 跳转课程详情
    goDetail() {
      this.$router.push(
        '/project/projectdetail?id=' + window.location.search.split('=')[1]
      )
    }
  }
}
</script>

<style scoped>
</style>