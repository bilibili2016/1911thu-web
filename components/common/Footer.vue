<template>
  <div class="footerBox">
    <div class="main clearfix">
      <div class="logo fl">
        <i></i>
      </div>
      <div class="companyInfo fl">
        <span @click="handleLink('first')">关于我们</span>
      </div>
      <div class="copyright fr">
        <p class="one">一九一一未来教育科技（北京）有限公司 版权所有</p>
        <p class="two">京ICP备18040329号 | &nbsp;&nbsp;广播电视节目制作经营许可证(京)字第11716号</p>
      </div>
    </div>
  </div>
</template>

<script>
import { open } from '@/lib/util/helper'
export default {
  methods: {
    handleLink() {
      // let urlLink = {
      //   base: '/other/pages/homeUs'
      // }
      // open(urlLink)
      window.open(window.location.origin + '/other/pages/homeUs')
    }
  }
}
</script>
