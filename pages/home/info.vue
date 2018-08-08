<template>
  <!-- 学堂资讯 -->
  <div class="home-info bg-none">
    <el-row class="info-center center">
      <v-title :title="title" :link="link"></v-title>
      <div v-loading="load" class="newsUl clearfix">
        <!-- 左边新闻轮播 -->
        <v-swiper :swiperData="infoDesc"></v-swiper>
        <!-- 右边新闻列表组件 -->
        <v-info :infoArticle='infoArticle' :link="linkfive"></v-info>
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import CustomCard from '@/components/card/Card.vue'
import CustomInfo from '@/pages/news/components/Info.vue'
import CustomTitle from '@/components/common/Title.vue'
import CustomSwiper from '@/pages/news/components/Swiper.vue'
export default {
  components: {
    'v-card': CustomCard,
    'v-info': CustomInfo,
    'v-title': CustomTitle,
    'v-swiper': CustomSwiper
  },
  props: [
    'infoDesc',
    'infoArticle',
    'infoTwo',
    'infoOne',
    'linkfour',
    'linkfive',
    'link',
    'title'
  ],
  data() {
    return {
      infoDescs: null,
      infoArticles: null,
      infoTwos: null,
      infoOnes: null,
      load: false,
      nidForm: {
        nids: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setNid']),
    goDetail(news) {
      this.nidForm.nids = news.id
      this.setNid(this.nidForm)
      window.open(window.location.origin + '/news/' + news.id)
    },
    selectDetail(index, course, link) {
      this.nidForm.nids = course.id
      this.setNid(this.nidForm)
      this.$emit('checkdetail', course.id)
      window.open(window.location.origin + '/news/' + course.id)
    },
    getMore(item) {
      window.open(window.location.origin + item)
    }
  }
}
</script>

