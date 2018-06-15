<template>
  <div class="unlogged">
    <div class="unloginner">
      <!-- <i class="el-icon-close" @click="close"></i> -->
      <img src="@/assets/images/light.png">
      <p class="unlognote">未登录，请您先
        <span @click="showLogin">登陆</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showLogin() {
      this.$bus.$emit('loginShow', true)
      this.$emit('showTips', false)
    }
  }
}
</script>




