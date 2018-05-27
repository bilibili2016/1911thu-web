<template>
  <el-container class="is-vertical layout-default">
     <Header></Header>
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
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
@import "~assets/style/main";
</style>
