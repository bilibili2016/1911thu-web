<template>
  <!-- 学堂资讯 -->
  <div class="home-info bg-none">
    <el-row class="info-center center">
<<<<<<< HEAD
      <v-title
        :title="title"
        :link="link"
      ></v-title>
      <div
        v-loading="load"
        class="newsUl clearfix"
      >
=======
      <v-title :title="title" :link="link"></v-title>
      <div v-loading="load" class="newsUl clearfix">
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
        <!-- 左边新闻轮播 -->
        <!-- <v-carousel :swiperData="infoDesc" :config="configCarousel"></v-carousel> -->

        <div class="newsCarousel fl">
<<<<<<< HEAD
          <div
            class="newsLi"
            @click="goDetail(outNewData)"
          >
            <div class="newImg">
              <img
                class="outImg"
                :src="outNewData.picture"
                alt=""
              ></div>
=======
          <div class="newsLi" @click="goDetail(outNewData)">
            <div class="newImg">
              <img class="outImg" :src="outNewData.picture" alt=""></div>
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
            <div class="info">
              <h4>{{outNewData.title}}</h4>
              <p>{{outNewData.introduce}}</p>
            </div>
          </div>
        </div>
        <div class="info-list">
<<<<<<< HEAD
          <div
            v-for="(card,index) in newsListData"
            :index="index"
            :key="card.id"
            class="info"
            v-if="index>0"
          >
            <div
              class="info-box clearfix"
              @click="goDetail(card)"
            >
              <img
                class="titleImg fl"
                :src="card.picture"
                alt=""
              >
=======
          <div v-for="(card,index) in newsListData" :index="index" :key="card.id" class="info" v-if="index>0">
            <div class="info-box clearfix" @click="goDetail(card)">
              <img class="titleImg fl" :src="card.picture" alt="">
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
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
import CustomCard from "@/components/card/Card.vue";
import CustomInfo from "@/pages/home/news/components/Info.vue";
import CustomTitle from "@/components/common/Title.vue";
import Carousel from "@/components/common/Carousel.vue";
<<<<<<< HEAD
=======
import { checkURL } from '@/lib/util/helper'
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
export default {
  components: {
    "v-card": CustomCard,
    "v-info": CustomInfo,
    "v-title": CustomTitle,
    "v-carousel": Carousel
  },
  props: ["newsListData", "outNewData", "linkfive", "link", "title"],
<<<<<<< HEAD
  data() {
=======
  data () {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
    return {
      infoDescs: null,
      infoArticles: null,
      load: false,
      configCarousel: {
        carousel: "news"
      }
    };
  },
  methods: {
<<<<<<< HEAD
    goDetail(news) {
      this.$router.push("/home/news/" + news.id);
=======
    goDetail (news) {
      news.type == '3' ? window.open(checkURL(news.media_link)) : this.$router.push("/home/news/" + news.id)
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
    }
  }
};
</script>

