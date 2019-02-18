<template>
  <!-- 学堂资讯新闻列表[首页]-->
  <div class="info-list">
    <div v-for="(card,index) in infoArticle" :index="index" :key="card.id" class="info" v-if="index<3">
      <div class="info-box clearfix" @click="selectDetail(card)">
        <img class="titleImg fl" :src="card.picture" alt="">
        <div class="fl">
          <h4 :title="card.title">{{card.title}}</h4>
          <p>{{card.introduce}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['infoArticle', 'linkfive'],
  data () {
    return {}
  },
  methods: {
    selectDetail (course) {
      this.$router.push('/home/news/' + course.id)
    }
  }
}
</script>

