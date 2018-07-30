<template>
  <el-carousel :interval="5000" class="lbt indexBanner">
    <el-carousel-item v-for="(img,index) in items" :key="index">
      <img :src="img.picture" alt="" @click="goLink(img.jump_url,img.jump_type,img.jump_id)">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['items'],
  data() {
    return {
      kidForm: {
        kids: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    goLink(link, type, id) {
      if (type === '0') {
        if (link === '' || link === null) {
          return false
        } else {
          window.open(link)
        }
      }
      if (type === '1') {
        if (id === '' || id == null) {
          return false
        }
        this.kidForm.kids = id
        persistStore.set('curriculumId', id)
        this.setKid(this.kidForm)
        window.open(window.location.origin + '/course/coursedetail')
      }
      if (type === '2') {
        if (id === '' || id == null) {
          return false
        }
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.lbt {
  background-color: rgb(211, 208, 255);
}
.el-main {
  padding: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
</style>
