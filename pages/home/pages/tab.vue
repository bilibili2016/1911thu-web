<template>
  <div class="banner">
    <!-- banner -->
    <v-carousel :items="items"></v-carousel>
    <!-- <div class="popup-container">
      <div class="img-flex"></div>
    </div>
    <div id="three-container"></div> -->
    <!-- 分类 -->
    <v-tab :classify="classify" :courses="courses" :tab="tabmsg"></v-tab>
    <!-- 定制 -->
    <v-card :dingData="dingData" :config="config"></v-card>
  </div>
</template>

<script>
import Card from '@/components/common/Card.vue'
import Carousel from '@/components/common/Carousel.vue'
import Tab from '@/components/common/Tab.vue'
export default {
  props: ['classify', 'courses', 'tabmsg', 'items', 'dingData', 'config'],
  components: {
    'v-carousel': Carousel,
    'v-card': Card,
    'v-tab': Tab
  },
  data() {
    return {
      fragmentConfig: null
    }
  },
  mounted() {
    // this.fragmentConfig = {
    //   container: '.img-flex', //显示容器
    //   line: 5, //多少行
    //   column: 10, //多少列
    //   width: 1000, //显示容器的宽度
    //   animeTime: 3000, //最长动画时间,图片的取值将在 animeTime*0.33 + animeTime*0.66之前取值
    //   img: 'images/2.jpg' //图片路径
    // }
    // fragmentImg(fragmentConfig)
    // setInterval(function() {
    //   $('.img-flex').html('')
    //   fragmentImg(fragmentConfig)
    // }, 5000)
  }
}
</script>

