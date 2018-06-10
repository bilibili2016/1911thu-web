<template>
  <div class="footerBox">
    <div class="main">
      <div class="logo">
        <img src="../../assets/images/logobt.png" alt="">
      </div>
      <div class="companyInfo">
        <div class="enterprise">
          <p>电话：010-6270 1911</p>
          <p>邮箱：info@1911thu.com</p>
          <p>地址：北京市海淀区双清路77号院</p>
        </div>
        <div class="verticalLine"></div>
        <div class="aboutUs clearfix">
          <dl>
            <dt>关于我们</dt>
            <dd @click="goLink('/home/pages/aboutUs')">关于集团</dd>
            <dd @click="goLink('/home/pages/aboutUs')">发展历程</dd>
          </dl>
          <dl>
            <dt>加入我们</dt>
            <dd>热招职位</dd>
          </dl>
        </div>
        <div class="QRCode clearfix">
          <div>
            <img src="@/assets/images/wechatLogin.png" alt="">
            <p>扫码关注公众号</p>
          </div>
          <div>
            <img src="@/assets/images/wechatLogin.png" alt="">
            <p>扫码下载APP</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      京ICP证 98278361836726381号 一九一一（北京）教育科技有限公司 版权所有
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      goLink(link){
        this.$router.push(link);
      }
    }
  };
</script>
