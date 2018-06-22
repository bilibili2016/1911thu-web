<template>
  <div class="notLogin" :data="notLogin" v-show="notLogin">
    <div class="tip">
      <i class="el-icon-close" @click="close"></i>
      <img :src="tipSrc" alt="">
      <p>未登录，请您先
        <span>登录</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['notLogin'],
  data() {
    return {
      tipSrc: require('http://pam8iyw9q.bkt.clouddn.com/tips.png')
    }
  },
  methods: {
    close() {
      this.notLogin = false
    }
  }
}
</script>

