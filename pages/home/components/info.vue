<template>
  <div class="home-info bg-none">
    <el-row class="info-center center">
      <v-title :data="titleFive"></v-title>
      <div v-loading="load" class="newsUl clearfix">
        <!-- <v-card ref="card" :infoDesc="infoDesc" :config="infoTwo"></v-card> -->
        <div class="newsCarousel fl">
          <el-carousel :interval="4000" arrow="never">
            <el-carousel-item v-for="(item,index) in infoDesc" :key="index" v-if="index<4">
              <div class="newsLi" @click="goDetail(item)">
                <img :src="item.picture" alt="">
                <h4>{{item.title}}</h4>
                <p>{{item.introduce}}</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <v-card ref="card" :infoArticle="infoArticle" :config="infoOne" :linkdata="linkfour" :linkfive="linkfive"></v-card>
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
      window.open(window.location.origin + '/news/detail')
    }
  }
}
</script>
<style scoped lang="scss">
.newsUl {
  height: 466px;
  .newsCarousel {
    width: 472px;
    height: 406px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 6px 18px 0 rgba(73, 28, 156, 0.36);
    transition: all 300ms;
    .newsLi {
      position: relative;
      img {
        width: 472px;
        height: 254px;
      }
      h4 {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding: 0 10px;
        overflow: hidden;
        background: #6417a6;
        opacity: 0.8;
        position: absolute;
        top: 194px;
        left: 0;
        color: #fff;
      }
      p {
        width: 472px;
        font-size: 14px;
        color: #222;
        line-height: 28px;
        padding: 20px 15px 0;
        text-indent: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>

