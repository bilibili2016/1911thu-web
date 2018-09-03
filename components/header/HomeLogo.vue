<template>
  <div>
    <div class="headerLogo fl" @click="handleLink">
      <img src="http://papn9j3ys.bkt.clouddn.com/1911-logo.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    handleLink() {
      this.$emit('handleLink', '/')
    }
  }
}
</script>

<style scoped>
</style>
