<template>
  <div class="carousel">
    <el-carousel :interval="5000" class="lbt indexBanner">
      <el-carousel-item v-for="(img,index) in items" :key="index">
        <img :src="img.picture" alt="" @click="handleLink(img)">
      </el-carousel-item>
    </el-carousel>
  </div>

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
    handleLink(img) {
      this.kidForm.kids = img.jump_id
      persistStore.set('curriculumId', img.jump_id)
      this.setKid(this.kidForm)
      // window.open(window.location.origin + '/course/coursedetail')
    }
  }
}
</script>

