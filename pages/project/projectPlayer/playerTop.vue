<template>
  <div class="playTop">
    <span @click="goDetail()">
      <i class="el-icon-arrow-left"></i>{{data}}
    </span>
  </div>
</template>

<script>
import { matchSplits } from '@/lib/util/helper'
export default {
  props: ['data'],
  methods: {
    // 跳转课程详情
    goDetail() {
      this.$router.push(
        '/project/projectdetail?kid=' +
          matchSplits('id') +
          '&type=' +
          matchSplits('type')
      )
    }
  }
}
</script>

<style scoped>
</style>