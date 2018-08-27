<template>
  <div>
    <!-- <div :class="{ minheight : allCourseLoad}" v-loading="allCourseLoad"> -->
    <v-list :data="data" :config="config" v-if="data  && data.length>0"></v-list>
    <!-- </div> -->
    <div class="pagination" v-if="data.length>11">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="studyPageChange"></el-pagination>
    </div>
    <v-nomsg v-if="data.length== 0" :config="noMsg"></v-nomsg>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import CustomList from '@/pages/profile/components/common/List.vue'
import CardTab from '@/pages/profile/components/common/CardTab.vue'
export default {
  props: ['data', 'config', 'pagemsg', 'noMsg'],
  components: {
    'v-nomsg': NoMsg,
    'v-list': CustomList,
    'v-cardtab': CardTab
  }
}
</script>

<style scoped>
</style>
