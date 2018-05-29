<template>
    <div class="center">
        <div class="pagination">

          <el-pagination background layout="prev, pager, next" :page-size="8" :page-count="data.pagesize" :current-page="data.page" @current-change="handleCurrentChange" :total="data.total"></el-pagination>

    </div>
        </div>

</template>

<script>
export default {
  props: ["data"],
  methods: {
    handleCurrentChange(val) {
      this.$emit("page", val);
    }
  }
};
</script>

<style scoped lang="scss">
.center{
  width: 1100px;
  margin: 0 auto;
  .pagination {
    text-align:center;
    margin: 77px 0px 127px 0px;
  }
}
</style>
