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
  mounted() {
    // console.log(this.pagemsg)
  },
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
.center {
  width: 1100px;
  margin: 0 auto;
  .pagination {
    text-align: center;
    margin: 77px 0px 127px 0px;
  }
}
</style>
