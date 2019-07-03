<template>
  <div class="catalog">
    <!-- 遍历章节 -->
    <div class="chapter" v-for="(catalog,index) in catalogs" :key="index">
      <h4>{{catalog.title}}</h4>
      <!-- 遍历小节 -->
      <div class="bar clearfix" v-for="(bar,index) in catalog.childList" :key="index" @click="handleCatalog(index,catalog)">
        <span class="fl playIcon" v-show="changeImg.id == bar.id?false:true">
          <i class="el-icon-caret-right"></i>
        </span>
        <span class="fl playImg" v-show="changeImg.id == bar.id?true:false">
          <img :src="changeImg.img" alt>
        </span>
        <p>
          <span class="fl barName">{{bar.video_number}}.{{bar.title}}({{bar.video_time}}分钟)</span>
          <span class="fr">
            <span class="fr freePlay">立即观看</span>
          </span>
        </p>
        <span>
          <el-progress v-if="catalog.isLogin == true && bar.isFree == false && bar.percentage>0" class="fr" :text-inside="true" :stroke-width="8" :percentage="bar.percentage" :show-text="false" color="#773084"></el-progress>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { mapState, mapActions, mapGetters } from 'vuex'
import { auth, line } from '~/lib/v1_sdk/index'
import { message, matchSplits, open } from '~/lib/util/helper'
export default {
  props: ['catalogs', 'privileMsg', 'config', 'changeImg'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data () {
    return {
      move: true,
      percents: 50,
      playerForm: {
        curriculumId: '',
        catalogId: '',
        curriculumType: 1,
        autoplay: true
      },
    }
  },
  methods: {
    handleCatalog (index, item) {
      let curriculum_id = item.childList[index].curriculum_id
      let catalog_id = item.childList[index].id
      this.playerForm.curriculumId = curriculum_id
      this.playerForm.catalogId = catalog_id
      this.$bus.$emit('updateCourse', this.playerForm)
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
  }
}
</script>

<style scoped lang="scss">
@import "~assets/style/components/line";
</style>
