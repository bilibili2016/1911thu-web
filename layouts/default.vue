<template>
  <el-container class="is-vertical layout-default">
    <Header :class="{ showMsg : this.hsg }"></Header>
    <el-container>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
    <Footer></Footer>
  </el-container>
</template>
<script>
import Header from '~/components/common/Header'
import Footer from '~/components/common/Footer'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('auth', ['hsg'])
  },
  mounted() {
    // console.log('123')
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/style/config';
.headerBox {
  display: block;
}
</style>
