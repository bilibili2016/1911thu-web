<template>
  <div class="lrBtn">
    <span class="login" @click="login">登录</span>/
    <span class="register" @click="register">注册</span>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$emit('login')
    },
    register() {
      this.$emit('register')
    }
  }
}
</script>

<style scoped>
</style>
