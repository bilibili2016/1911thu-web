<template>
  <div class="footerBox">
    <div class="main clearfix">
      <div class="logo fl">
        <i></i>
      </div>
      <div class="companyInfo fl">
        <span @click="goLink('first')">关于我们</span>
        <span class="line">|</span>
        <span>加入我们</span>
      </div>
      <div class="copyright fr">
        京ICP证 98278361836726381号 一九一一（北京）教育科技有限公司 版权所有
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
