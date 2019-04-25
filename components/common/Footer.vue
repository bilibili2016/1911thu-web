<template>
  <div class="footerBox" id="footer">
    <div class="main clearfix">
      <div class="logo fl">
        <i></i>
      </div>
      <div class="companyInfo fl">
        <span @click="handleLink('first')">关于我们</span>
      </div>
      <div class="copyright fr">
        <p class="one">一九一一未来教育科技（北京）有限公司 版权所有</p>
        <p class="two">京ICP备18040329号&nbsp; | &nbsp;
          <span @click="handleClickA" style="cursor:pointer">京公网安备 11010802028321号</span>&nbsp; | &nbsp;
          <span @click="handleClickB" style="cursor:pointer">广播电视节目制作经营许可证(京)字第11716号</span>&nbsp; | &nbsp;
          <span @click="handleClickC" style="cursor:pointer">增值电信业务经营许可证京B2-20190479</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { open } from "@/lib/util/helper";
export default {
  methods: {
    handleLink () {
      this.$router.push("/other/pages/homeUs");
    },
    handleClickB () {
      window.open("https://static-image.1911edu.com/licence.jpg");
    },
    handleClickA () {
      window.open(
        "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802028321"
      );
    },
    handleClickC () {
      window.open("https://static-image.1911edu.com/qualification.jpg");
    }
  }
};
</script>
