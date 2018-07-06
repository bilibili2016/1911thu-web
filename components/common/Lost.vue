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
  data() {
    return {
      img: 'http://papn9j3ys.bkt.clouddn.com/404.png'
    }
  },
  methods: {
    go(link) {
      this.$router.push(link)
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 585px;
  height: 324px;
  display: block;
  margin: 134px auto 0;
}
h4 {
  font-size: 18px;
  color: #888;
  margin: 40px 0 30px;
  text-align: center;
}
p {
  text-align: center;
  padding-bottom: 200px;
  span {
    display: inline-block;
    width: 154px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    background-color: #6417a6;
    color: #fff;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      background-color: #8f4acb;
    }
  }
}
</style>
