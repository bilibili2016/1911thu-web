<template>
  <div style="height:400px">
    <li class="row" style="margin-top:400px;">
      <div class="social-share" data-sites="weibo,qq,qzone,tencent,wechat"></div>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    var $config = {
      url: 'http://www.1911edu.com/'
    }

    socialShare('.social-share', $config)
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  text-align: center;
}

a {
  color: #42b983;
  text-decoration: none;
}

h1 {
  font-size: 54px;
  color: #42b983;
  margin: 30px 0 10px;
}

h2 {
  font-size: 22px;
  color: #555;
}

@media (max-width: 768px) {
  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 16px;
  }
}
.wechat-qrcode {
  width: 100px;
}
</style>
