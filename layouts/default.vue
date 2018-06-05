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
    return {
      // headerMsg: true,
      // hsgForm: {
      //   hsgs: true
      // }
    }
  },

  computed: {
    ...mapState('auth', [
      'hsg'
    ])
  }
  // methods: {
  //   ...mapActions('auth', [
  //     'setHsg',
  //   ])
  // },
  // computed: {
  //   ...mapState('auth', [
  //     'hsg'
  //   ])
  // }
}
</script>
<style lang="scss" scoped>
@import "~assets/style/config";
// @import "~assets/style/default";
.headerBox{
  display: block
}
</style>
