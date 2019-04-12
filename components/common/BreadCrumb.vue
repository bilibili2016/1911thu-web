<template>
  <!-- 面包屑 -->
  <div class="breadCrumb">
    <span v-show="config.position">当前位置：</span>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
      <el-breadcrumb-item v-if="config.home" :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="!config.home&&config.type=='courseDetail'" :to="{ path: `/home/vip/collegeDetail?id=${config.vipID}&cid=${config.categoryId}&title=${config.enTitle}` }">{{config.category}}</el-breadcrumb-item>
      <!-- 项目里的线上课程 跳转到项目详情 -->
      <!-- <el-breadcrumb-item :to="{ path: '/project/projectdetail?kid='+config.projectId+'&type=1' }" v-if="config.projectCourse && config.text!=='定制项目详情'">{{config.project}}1111</el-breadcrumb-item> -->
      <!-- 跳转到项目分类列表 -->
      <el-breadcrumb-item :to="{ path: '/course/category?cid=16&cp=1&xid=0&pids=0&vid=-1'}" v-if="config.project&&!config.projectCourse &&  config.text!=='定制项目详情'">{{config.project}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{config.text}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: ["config"]
};
</script>

<style scoped lang="scss">
@import "~assets/style/components/breadCrumb.scss";
</style>
