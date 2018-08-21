<template>
  <el-container class="is-vertical layout-default">
    <Header v-if="hfshow"></Header>
    <el-container>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
    <Footer v-if="hfshow"></Footer>
  </el-container>
</template>
<script>
import Header from '~/components/common/Header'
import Footer from '~/components/common/Footer'

import { setPagesHeight } from '~/lib/util/helper'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      hfshow: true
    }
  },
  methods: {
    //设置选中样式
    fetchUrl() {
      let pathName = window.location.pathname
      let headerClass = document.getElementsByClassName('headerClass')
      if (pathName === '/') {
        //首页
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].remove('active')
        }
        headerClass[0].classList.add('active')
      } else if (pathName === '/home/teacher/list') {
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].remove('active')
        }
        headerClass[3].classList.add('active')
      }
    }
  },
  mounted() {
    // this.fetchUrl()
    setPagesHeight()
    this.$bus.$on('headerFooterShow', () => {
      this.hfshow = true
    })
    this.$bus.$on('headerFooterHide', () => {
      this.hfshow = false
    })
  }
  // watch: {
  //   $route: 'fetchData'
  // }
}
</script>
<style lang="scss" scoped>
@import '~assets/style/config';
.headerBox {
  display: block;
}
</style>
