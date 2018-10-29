<template>
    <!-- 查看证书 -->
    <div class="viewCertificate">
        <div class="con">
            <img :src="certification" alt="">
        </div>
    </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      certification: 'http://papn9j3ys.bkt.clouddn.com/certificate.png'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/profile/viewCertificate.scss';
</style>