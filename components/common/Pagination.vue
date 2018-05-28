<template>
    <div>
        <el-pagination background layout="prev, pager, next" :page-size="8" :page-count="data.pagesize" :current-page="data.page" @current-change="handleCurrentChange" :total="data.total"></el-pagination>
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

<style scoped>
</style>
