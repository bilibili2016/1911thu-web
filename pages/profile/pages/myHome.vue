<template>
  <div>
    <el-card class="card-style">
      <div slot="header" class="clearfix">
        <span>最近学习</span>
      </div>
      <div class="content">
        <v-list v-if="studyData  && studyData.length>0" :data="studyData" :config="configZero"></v-list>
        <!-- <v-nomsg class="fillTop" v-else :config="noMsgOne"></v-nomsg> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import CustomList from '@/pages/profile/components/List.vue'
export default {
  props: ['studyData', 'configZero', 'noMsgOne'],
  components: {
    'v-list': CustomList
  }
}
</script>

<style scoped>
</style>
