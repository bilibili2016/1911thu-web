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
import { open } from '@/lib/util/helper'
export default {
  props: ['items', 'config', 'swiperData'],
  data() {
    return {
      kidForm: {
        kids: ''
      },
      courseDetail: {
        base: '/course/coursedetail',
        kid: null,
        bid: '',
        page: 0
      },
      projectDetail: {
        base: '/project/projectdetail',
        kid: null,
        type: 1
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    handleLink(img) {
      // jump_type = 0  普通跳转 根据jump_url地址跳转
      // jump_type = 1  跳转至课程详情 jump_id 课程id
      // jump_type = 2  跳转至项目详情 jump_id 项目id
      if (img.jump_type == '0' && img.jump_url != '') {
        window.open(img.jump_url)
      }
      if (img.jump_type == '1' && img.jump_id != '') {
        this.courseDetail.kid = img.jump_id
        open(this.courseDetail)
      }
      if (img.jump_type == '2' && img.jump_id != '') {
        this.projectDetail.kid = img.jump_id
        open(this.projectDetail)
      }
    },
    goDetail(news) {
      window.open(window.location.origin + '/home/news/' + news.id)
    }
  },
  mounted() {
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
