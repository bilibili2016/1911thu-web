<template>
  <div>
    <img :src="img" alt="">
    <h4>真的很抱歉，我们搞丢了页面...要不去首页看看？</h4>
    <p>
      <span @click="go('/')">返回首页</span>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: 'https://static-image.1911edu.com/404.png'
    }
  },
  methods: {
    go (link) {
      this.$router.push(link)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/style/components/lost";
</style>
