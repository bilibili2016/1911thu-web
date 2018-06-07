<template>
<div>
  <v-home></v-home>
</div>
</template>
 <script src="//imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.min.js"></script>
<script>

import Home from "@/pages/home/index.vue";
export default {
  components: {
    "v-home": Home
  },
   mounted () {
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
};
</script>

