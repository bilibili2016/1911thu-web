<template>
  <!-- 面包屑 -->
  <div class="breadCrumb">
    <div>
      <span v-show="config.type !='courseDetail'">当前位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="config.project">{{config.project}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{config.text}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>

</template>

<script>
export default {
  props: ['config']
}
</script>

<style scoped>
</style>
