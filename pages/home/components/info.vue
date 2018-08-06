<template>
  <!-- 学堂资讯 -->
  <div class="home-info bg-none">
    <el-row class="info-center center">
      <!-- <v-title :data="titleFive"></v-title> -->
      <h1 class="clearfix">{{titleFive}}
        <span class="fr" @click="getMore(linkfour)">查看更多</span>
      </h1>
      <div v-loading="load" class="newsUl clearfix">
        <!-- <v-card ref="card" :infoDesc="infoDesc" :config="infoTwo"></v-card> -->
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
        <div class="info-list">
          <div v-for="(card,index) in infoArticle" :index="index" :key="card.id" class="info" v-if="index<3">
            <div class="info-box clearfix" @click="selectDetail(index,card,linkfive)">
              <img class="titleImg fl" :src="card.picture" alt="">
              <div class="fl">
                <h4>{{card.title}}</h4>
                <p>{{card.introduce}}</p>
              </div>

            </div>
          </div>
        </div>
        <!-- <v-card ref="card" :infoArticle="infoArticle" :config="infoOne" :linkdata="linkfour" :linkfive="linkfive"></v-card> -->
      </div>

    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import CustomCard from '@/components/common/Card.vue'
import CustomTitle from '@/components/common/Title.vue'
export default {
  components: {
    'v-card': CustomCard,
    'v-title': CustomTitle
  },
  props: [
    'infoDesc',
    'infoArticle',
    'infoTwo',
    'infoOne',
    'titleFive',
    'linkfour',
    'linkfive'
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

