<template>
  <!-- 学堂资讯 -->
  <div class="home-info bg-none">
    <el-row class="info-center center">
      <!-- <v-title :data="titleFive"></v-title> -->
      <h1 class="clearfix">{{title}}
        <span class="fr" @click="getMore(link)">查看更多</span>
      </h1>
      <div v-loading="load" class="newsUl clearfix">
        <div class="newsCarousel fl">
          <el-carousel :interval="4000">
            <el-carousel-item v-for="(item,index) in infoDesc" :key="index" v-if="index<4">
              <div class="newsLi" @click="goDetail(item)">
                <img :src="item.picture" alt="">
                <h4>{{item.title}}</h4>
                <p>{{item.introduce}}</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
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
export default {
  components: {
    'v-card': CustomCard,
    'v-info': CustomInfo,
    'v-title': CustomTitle
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

