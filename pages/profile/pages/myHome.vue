<template>
  <div>
    <el-card class="card-style">
      <div slot="header" class="clearfix">
        <span>课程学习</span>
      </div>
      <v-cardtab :allLoad="allCourseLoad" :data="studyData" :config="configZero" :pagemsg="pagemsg3" :noMsg="noMsgOne" @pageChange="studyDataChange"></v-cardtab>
    </el-card>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import CardTab from '@/pages/profile/components/common/CardTab.vue'
export default {
  props: [
    'studyData',
    'configZero',
    'noMsgOne',
    'allCourseLoad',
    'pagemsg3',
    'myProjectPage',
    'studyProjectData',
    'configFive'
  ],
  components: {
    'v-nomsg': NoMsg,
    'v-cardtab': CardTab
  },
  methods: {
    studyDataChange(val) {
      this.$emit('studyDataChange', 3, val)
    }
  }
}
</script>

<style scoped>
.minheight {
  min-height: 400px;
}
</style>
