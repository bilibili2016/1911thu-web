<template>
  <!-- 面包屑 -->
  <div class="breadCrumb">
    <span v-show="config.position">当前位置：</span>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <!-- 跳转到项目详情 -->
      <el-breadcrumb-item :to="{ path: '/project/projectdetail?kid='+config.projectId }" v-if="config.projectCourse">{{config.project}}</el-breadcrumb-item>
      <!-- 跳转到项目分类列表 -->
      <el-breadcrumb-item :to="{ path: '/course/category?cid=16&cp=1&xid=0&pid=0' }" v-if="config.project&&!config.projectCourse">{{config.project}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{config.text}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<script>
export default {
  props: ['config']
}
</script>

<style scoped>
</style>
