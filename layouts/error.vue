<template>
    <div>
        <h2 v-if="error.statusCode == 404"><img src="http://papn9j3ys.bkt.clouddn.com/404.png" alt=""></h2>
        <h2 v-else><img src="http://papn9j3ys.bkt.clouddn.com/500.png" alt=""><span>服务器生病了！</span></h2>
        <ul>
            <li>
                <nuxt-link to="/"></nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['error']
}
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
</style>