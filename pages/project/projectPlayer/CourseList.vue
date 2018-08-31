<template>
  <div>
    <!-- 播放页右侧课程列表 -->
    <div v-for="(course,index) in courseList" :key="index">
      <h5 class="title">{{course.curriculum_title}}</h5>
      <div class="courseList">
        <div class="chapter" v-for="(section,index) in course.curriculumCatalogList" :key="index">
          <h4>{{section.title}}</h4>
          <div class="knobble clearfix" v-for="(bar,index) in section.catalogList" :key="index" @click="handleCourse(bar)" :class="{cli:ischeck == bar.id?true:false}">
            <span class="fl playIcon" v-show="ischeck == bar.id?false:true">
              <i class="el-icon-caret-right"></i>
            </span>
            <span class="fl playImg" v-show="ischeck == bar.id?true:false">
              <img :src="playing" alt="">
            </span>
            <span class="fl barName">{{bar.video_number}}、{{bar.title}}({{parseInt(bar.video_time / 60)}}分{{parseInt(bar.video_time % 60)}}秒)</span>
            <span class="barNameHover">{{bar.video_number}}{{bar.title}}({{parseInt(bar.video_time / 60)}}分{{parseInt(bar.video_time % 60)}}秒)</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['courseList', 'playing', 'ischeck'],
  data() {
    return {}
  },
  methods: {
    handleCourse(item) {
      this.$bus.$emit('clickCatalog', item)
    }
  }
}
</script>

<style scoped>
</style>