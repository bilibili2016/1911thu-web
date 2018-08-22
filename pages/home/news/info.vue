<template>
  <!-- 学堂资讯 -->
  <div class="home-info bg-none">
    <el-row class="info-center center">
      <v-title :title="title" :link="link"></v-title>
      <div v-loading="load" class="newsUl clearfix">
        <!-- 左边新闻轮播 -->
        <v-carousel :swiperData="infoDesc" :config="configCarousel"></v-carousel>
        <!-- 右边新闻列表组件 -->
        <v-info :infoArticle='infoArticle' :link="linkfive"></v-info>
      </div>
    </el-row>
  </div>
</template>

<script>
import CustomCard from '@/components/card/Card.vue'
import CustomInfo from '@/pages/home/news/components/Info.vue'
import CustomTitle from '@/components/common/Title.vue'
import Carousel from '@/components/common/Carousel.vue'
export default {
  components: {
    'v-card': CustomCard,
    'v-info': CustomInfo,
    'v-title': CustomTitle,
    'v-carousel': Carousel
  },
  props: ['infoDesc', 'infoArticle', 'linkfive', 'link', 'title'],
  data() {
    return {
      infoDescs: null,
      infoArticles: null,
      load: false,
      configCarousel: {
        carousel: 'news'
      }
    }
  }
}
</script>

