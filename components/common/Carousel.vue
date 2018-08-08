<template>
  <div>
    <div class="banner" v-if="config.carousel==='home'">
      <div class="carousel">
        <el-carousel :interval="5000" class="lbt indexBanner">
          <el-carousel-item v-for="(img,index) in items" :key="index">
            <img :src="img.picture" alt="" @click="handleLink(img)">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="newsCarousel fl" v-if="config.carousel==='news'">
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
  </div>
</template>


<script>
import { mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['items', 'config', 'swiperData'],
  data() {
    return {
      kidForm: {
        kids: ''
      },
      nidForm: {
        nids: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid', 'setNid']),
    handleLink(img) {
      this.kidForm.kids = img.jump_id
      persistStore.set('curriculumId', img.jump_id)
      this.setKid(this.kidForm)
      // window.open(window.location.origin + '/course/coursedetail')
    },
    goDetail(news) {
      this.nidForm.nids = news.id
      this.setNid(this.nidForm)
      window.open(window.location.origin + '/news/' + news.id)
    }
  }
}
</script>
