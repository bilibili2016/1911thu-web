<template>
  <div>
    <template v-if="config.banner_type === 'news'">
          <div class="news-banner">
            <img :src="bannerImg" alt="">
          </div>
</template>

<template v-if="config.banner_type === 'profile'">
  <div class="profile-banner">
    <div class="center-box">
      <div class="avator">
        <img :src="avator" alt="" class="img">
      </div>
      <div class="name">
        <p>扶摇1006</p>
        <p>北京某某某科技有限公司</p>
      </div>
      <div class="time">
        <p class="fr">18小时32分钟</p>
        <p class="fr">总学习时长</p>
      </div>
    </div>
  </div>
</template>
  </div>
</template>

<script>
  export default {
    props: ["bannerImg", "config"],
    data() {
      return {
        avator: require("~/assets/images/profile_avator01.png")
      }
    },
  };
</script>

<style scoped lang="scss">
  .news-banner {
    height: 360px;
    img {
      height: 100%;
    }
  }
</style>
