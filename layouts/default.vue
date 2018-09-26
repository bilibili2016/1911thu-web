<template>
  <el-container class="is-vertical layout-default">
    <Header v-show="hfshow"></Header>
    <el-container>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
    <Footer v-show="hfshow"></Footer>
  </el-container>
</template>
<script>
import Header from '~/components/common/Header'
import Footer from '~/components/common/Footer'

import { setPagesHeight, matchSplits } from '~/lib/util/helper'
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
    //设置头部homeSelect选中样式
    fetchUrl() {
      let pathName = window.location.pathname
      let headerClass = document.getElementsByClassName('headerClass')
      this.$bus.$emit('getUserInfo')

      if (pathName === '/') {
        //首页
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove('active')
        }
        headerClass[0].classList.add('active')
      } else if (pathName === '/home/teacher/list') {
        //名师智库
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove('active')
        }
        headerClass[3].classList.add('active')
      } else if (pathName === '/course/category') {
        //全部课程/全部项目
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove('active')
        }
        if (matchSplits('cp') === '0') {
          //课程
          headerClass[1].classList.add('active')
        } else if (matchSplits('cp') === '1') {
          //项目
          headerClass[2].classList.add('active')
        }
      } else {
        //其他
        for (var i = 0; i < headerClass.length; i++) {
          headerClass[i].classList.remove('active')
        }
      }
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.fetchUrl()
    setPagesHeight()
    // 进入路由隐藏header和footer
    this.$bus.$on('headerFooterShow', () => {
      this.hfshow = true
    })
    // 出路由显示header和footer
    this.$bus.$on('headerFooterHide', () => {
      this.hfshow = false
    })
  },
  watch: {
    $route: 'fetchUrl'
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/style/config';
.headerBox {
  display: block;
}
</style>
