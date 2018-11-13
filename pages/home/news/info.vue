<template>
  <!-- 学堂资讯 -->
  <div class="home-info bg-none">
    <el-row class="info-center center">
      <v-title :title="title" :link="link"></v-title>
      <div v-loading="load" class="newsUl clearfix">
        <!-- 左边新闻轮播 -->
        <!-- <v-carousel :swiperData="infoDesc" :config="configCarousel"></v-carousel> -->

        <div class="newsCarousel fl">
          <div class="newsLi" @click="goDetail(outNewData)">
            <img :src="outNewData.picture" alt="">
            <div class="info">
              <h4>{{outNewData.title}}</h4>
              <p>{{outNewData.introduce}}</p>
            </div>
          </div>
        </div>
        <div class="info-list">
          <div v-for="(card,index) in newsListData" :index="index" :key="card.id" class="info" v-if="index>0">
            <div class="info-box clearfix" @click="goDetail(card)">
              <img class="titleImg fl" :src="card.picture" alt="">
              <div class="fl">
                <h4 :title="card.title">{{card.title}}</h4>
                <p>{{card.introduce}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 右边新闻列表组件 -->
        <!-- <v-info :infoArticle='infoArticle' :link="linkfive"></v-info> -->
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
  props: ['newsListData', 'outNewData', 'linkfive', 'link', 'title'],
  data() {
    return {
      infoDescs: null,
      infoArticles: null,
      load: false,
      configCarousel: {
        carousel: 'news'
      }
    }
  },
  methods: {
    goDetail(news) {
      this.$router.push('/home/news/' + news.id)
    }
  }
}
</script>

