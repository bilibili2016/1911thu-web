<template>
  <div>
    <div class="banner" v-if="config.carousel==='home'">
      <div class="carousel">
        <el-carousel :interval="5000" class="lbt indexBanner">
          <el-carousel-item v-for="(img,index) in items" :key="index">
            <img id="innerImg" :src="img.picture" alt="" @click="handleLink(img)">
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
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    handleLink(img) {
      this.kidForm.kids = img.jump_id
    },
    goDetail(news) {
      window.open(window.location.origin + '/home/news/' + news.id)
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   console.log(document.getElementsByClassName('el-carousel__item').length)
    // })

    // console.log(document.getElementsByClassName('el-carousel__item')[0].style)
    // document.getElementsByClassName('el-carousel__item')[0].style.marginLeft =
    //   '400px'
    let Dwidth = document.documentElement.clientWidth
    if (Dwidth > 1920) {
      document.getElementsByClassName('el-carousel')[0].style.width =
        1920 + 'px'
    } else {
      document.getElementsByClassName('el-carousel')[0].style.width =
        Dwidth + 'px'
    }
  }
}
</script>
