<template>
  <div class="error" v-if="showError">
    <div class="errorMsg">
      <h5>{{errorMsg}}</h5>
      <p>
        <span @click="reload">刷新</span>
        <span @click="getPlayerInfo">重试</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showError', 'errorMsg'],
  methods: {
    // 刷新页面
    reload() {
      window.location.reload()
    },
    getPlayerInfo() {
      this.$emit('getPlayerInfo')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/playerError.scss';
</style>