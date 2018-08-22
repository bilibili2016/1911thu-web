<template>
  <div class="center">
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="handlePageChange"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pagemsg'],
  mounted() {},
  methods: {
    handlePageChange(val) {
      this.$emit('handlePageChange', val)
    }
  },
  pageSize: {
    type: Number,
    default: 2
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/pagination';
</style>
