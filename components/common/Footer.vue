<template>
  <div class="footerBox">
    <div class="main">
      <div class="logo">
        <i></i>
      </div>

      <div class="copyright">
        <img src="@/assets/images/logof.png" alt="" class="logof">
        <span class="about">关于我们</span>
        <span class="about">|</span>
        <span class="about"> 加入我们</span>
        <span>京ICP证 98278361836726381号 一九一一（北京）教育科技有限公司 版权所有</span>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      indexData: {
        indexs: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setIndex']),
    goLink(num) {
      this.indexData.indexs = num
      this.setIndex(this.indexData)
      this.$router.push('/other/aboutus')
    }
  }
}
</script>
<style lang="scss">
.copyright {
  .about {
    margin-right: 20px;
    display: inline-block;
  }
  // .logof {
  //   width: 177px;
  //   height: 50px;
  // }
}
</style>
