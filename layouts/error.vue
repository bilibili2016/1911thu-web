<template>
  <div>
    <h2 v-if="error.statusCode == 404">
      <img src="https://static-image.1911edu.com/404.png" alt>
    </h2>
    <h2 v-else-if="error.statusCode == 500">
      <img src="https://static-image.1911edu.com/500.png" alt>
    </h2>
    <h2 class="pageAbnormal" v-else>
      <img src="https://static-image.1911edu.com/pageAbnormal.png" alt>
      <span>页面发生异常,请刷新重试！</span>
    </h2>
    <ul>
      <li>
        <nuxt-link to="/"></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
<style lang="scss" scoped>
h2 {
  width: 361px;
  height: 375px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  span {
    width: 100%;
    color: #ccc;
    font-size: 32px;
    text-align: center;
    margin-top: 10px;
  }
}
.pageAbnormal {
  width: 395px;
  height: 280px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>