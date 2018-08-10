<template>

  <div class="tableHeader" v-if="!isNoMsg">
    <el-checkbox v-model="selectAll" @change="handleSelectAll">全选</el-checkbox>
    <span class="courseName">课程</span>
    <span class="price">单价</span>
    <span class="operation">操作</span>
  </div>

</template>

<script>
export default {}
</script>

<style scoped>
</style>
