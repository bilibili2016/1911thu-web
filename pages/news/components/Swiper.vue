<template>
    <div class="newsCarousel fl">
        <el-carousel :interval="4000">
            <el-carousel-item v-for="(item,index) in swiperData" :key="index" v-if="index<4">
                <div class="newsLi" @click="goDetail(item)">
                    <img :src="item.picture" alt="">
                    <h4>{{item.title}}</h4>
                    <p>{{item.introduce}}</p>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  props: ['swiperData'],
  data() {
    return {
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
    }
  }
}
</script>

<style scoped>
</style>