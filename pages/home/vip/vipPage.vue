<template>
    <div class="VIP-con">
        <div class="btns">
            <span class="button" @click="lookCourse">查看课程</span>
            <span class="button active">加入购物车</span>
        </div>
    </div>
</template>
<script>
import { matchSplits, setTitle } from '@/lib/util/helper'

export default {
  data() {
    return {
      vipID: '',
      relativeID: ''
    }
  },
  methods: {
    lookCourse() {
      this.$router.push({
        path: '/course/category',
        query: {
          cid: this.relativeID,
          cp: 0,
          pids: 0,
          xid: 0
        }
      })
    }
  },
  mounted() {
    this.vipID = matchSplits('id')
    this.relativeID = matchSplits('relativeID')
  }
}
</script>