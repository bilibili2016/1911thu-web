<template>
  <div class="banner">
    <!-- banner -->
    <v-carousel :items="items"></v-carousel>
    <!-- <div class="popup-container">
      <div class="img-flex"></div>
    </div> -->
    <!-- <div id="three-container"></div> -->
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
  }
}
</script>

