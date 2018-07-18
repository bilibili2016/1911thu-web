<template>
  <div style="height:400px">
    <!-- <li class="row" style="margin-top:400px;">
      <div class="social-share" data-sites="weibo,qq,qzone,tencent,wechat"></div>
    </li> -->
    <div class="container">
      <input value="admin" readonly/>
      <input type="password" value="1234567890" readonly/>
      <div id="captcha" style="position: relative"></div>
      <div id="msg"></div>
    </div>
  </div>
</template>

<script>
import { SwiperImg } from '@/lib/util/vailswiper'
export default {
  data() {
    return {}
  },
  methods: {
    test() {
      const img = document.createElement('img')
      img.onerror = () => {
        console.log(this, '这是this')
      }
      img.onerror()
    }
  },
  mounted() {
    console.log(SwiperImg, '这是SwiperImg')
    new SwiperImg(document.getElementById('captcha'), function() {
      document.getElementById('msg').innerHTML = '登录成功！'
    })
  }
}
</script>

<style scoped>
.container {
  width: 310px;
  margin: 100px auto;
}
input {
  display: block;
  width: 290px;
  line-height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  outline: none;
  border: 1px solid #c8cccf;
  border-radius: 4px;
  color: #6a6f77;
}
#msg {
  width: 100%;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
}
a:link,
a:visited,
a:hover,
a:active {
  margin-left: 100px;
  color: #0366d6;
}
</style>
