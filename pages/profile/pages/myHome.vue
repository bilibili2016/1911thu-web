<template>
  <div>
    <el-card class="card-style">
      <div slot="header" class="clearfix">
        <span>最近学习</span>
      </div>
      <div class="content">
        <div :class="{ minheight : allHome}" v-loading="allHome">
          <v-list v-if="studyData  && studyData.length>0" :data="studyData" :config="configZero"></v-list>
        </div>

        <v-nomsg class="fillTop" v-if="studyData.length == 0&& !allHome" :config="noMsgOne"></v-nomsg>
      </div>
    </el-card>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/pages/noMsg.vue'
import CustomList from '@/pages/profile/components/List.vue'
export default {
  props: ['studyData', 'configZero', 'noMsgOne', 'allHome'],
  components: {
    'v-nomsg': NoMsg,
    'v-list': CustomList
  }
}
</script>

<style scoped>
.minheight {
  min-height: 400px;
}
</style>
