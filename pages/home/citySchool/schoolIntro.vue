<template>
    <div class="schoolIntro">
        <div class="btn-con">
            <span @click="handleLink('/home/citySchool/schoolApplication')">立即申请</span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleLink(link) {
      this.$router.push(link)
    }
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/citySchool/schoolIntro.scss';
</style>