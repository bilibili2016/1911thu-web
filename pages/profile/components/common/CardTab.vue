<template>
  <div>
    <div :class="{ minheight : allLoad}" v-loading="allLoad">
      <v-list :data="data" :config="config" v-if="data  && data.length>0"></v-list>
    </div>
    <div class="pagination" v-if="pagemsg.total>11 && data.length!= 0">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="PageChange"></el-pagination>
    </div>
    <v-nomsg v-if="data.length== 0&& !allLoad" :config="noMsg"></v-nomsg>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import CustomList from '@/pages/profile/components/common/List.vue'
import CardTab from '@/pages/profile/components/common/CardTab.vue'
export default {
  props: ['data', 'config', 'pagemsg', 'noMsg', 'allLoad'],
  components: {
    'v-nomsg': NoMsg,
    'v-list': CustomList,
    'v-cardtab': CardTab
  },
  methods: {
    PageChange(val) {
      this.$emit('pageChange', val)
      document.body.scrollTop = document.documentElement.scrollTop = 172
    }
  }
}
</script>

<style scoped>
.minheight {
  min-height: 400px;
}
</style>
