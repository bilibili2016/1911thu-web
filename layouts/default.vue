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
      if (this.hfshow) {
        document.getElementsByClassName('headerBox')[0].style.display = 'inline'
        document.getElementsByClassName('footerBox')[0].style.display = 'inline'
      }
    },
    //设置titlt
    setTitle() {
      let pathName = window.location.pathname
      switch (pathName) {
        case '/':
          document.getElementsByTagName('title')[0].innerText = '需要设置的值'
          break
        case '/course/category':
          if (matchSplits('cp') === '0') {
            //课程
            document.getElementsByTagName('title')[0].innerText =
              '全部课程-1911学堂'
          } else if (matchSplits('cp') === '1') {
            //项目
            document.getElementsByTagName('title')[0].innerText =
              '培训项目-1911学堂'
          }
          break
        case '/home/teacher/list':
          document.getElementsByTagName('title')[0].innerText =
            '名师智库-1911学堂'
          break
        default:
          break
      }
    }
  },
  mounted() {
    this.fetchUrl()
    setPagesHeight()
    this.$bus.$on('headerFooterShow', () => {
      this.hfshow = true
    })
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
