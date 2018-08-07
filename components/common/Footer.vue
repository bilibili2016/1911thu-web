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
        京ICP证 98278361836726381号 一九一一未来教育科技（北京）有限公司 版权所有
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLink() {
      window.open(window.location.origin + '/other/homeUs')
    }
  }
}
</script>
