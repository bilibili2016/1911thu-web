<template>
  <div class="playTop">
    <span @click="goDetail()">
      <i class="el-icon-arrow-left"></i>{{data}}
    </span>
  </div>
</template>

<script>
import { splitUrl } from '@/lib/util/helper'
export default {
  props: ['data'],
  methods: {
    // 跳转课程详情
    goDetail() {
      this.$router.push(
        '/project/projectdetail?id=' +
          splitUrl(0, 1) +
          '&type=' +
          splitUrl(1, 1)
      )
    }
  }
}
</script>

<style scoped>
</style>