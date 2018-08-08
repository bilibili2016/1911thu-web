<template>
  <!-- 学堂资讯新闻列表[首页]-->
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
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  props: ['infoArticle', 'linkfive'],
  data() {
    return {
      nidForm: {
        nids: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setNid']),
    selectDetail(index, course, link) {
      this.nidForm.nids = course.id
      this.setNid(this.nidForm)
      this.$emit('checkdetail', course.id)
      window.open(window.location.origin + '/news/' + course.id)
    }
  }
}
</script>

