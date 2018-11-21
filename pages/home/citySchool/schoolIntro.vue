<template>
  <div class="schoolIntro">
    <div class="btn-con">
      <span @click="handleLink('/home/citySchool/schoolApplication')">立即申请</span>
    </div>
  </div>
</template>
<script>
import { matchSplits, setTitle, message } from '@/lib/util/helper'

export default {
  data() {
    return {}
  },
  methods: {
    handleLink(link) {
      this.$router.push(link)
    }
  },
  mounted() {
    setTitle('城市分校-1911学堂')
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/citySchool/schoolIntro.scss';
</style>