<template>
  <div class="footerBox">
    <div class="main">
      <div class="logo">
        <i></i>
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
            <dd @click="goLink('first')">关于集团</dd>
            <dd @click="goLink('second')">发展历程</dd>
          </dl>
          <dl>
            <dt>加入我们</dt>
            <dd>热招职位</dd>
          </dl>
        </div>
        <div class="QRCode clearfix">
          <div>
            <i></i>
            <p>扫码关注公众号</p>
          </div>
          <div>
            <i></i>
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
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      indexData: {
        indexs: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setIndex']),
    goLink(num) {
      this.indexData.indexs = num
      this.setIndex(this.indexData)
      this.$router.push('/other/aboutUs')
    }
  }
}
</script>
