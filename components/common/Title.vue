<template>
  <div class="title align-center">
    <el-row>
      <el-col :span="24">
        <h1>{{data}}</h1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: ["data"]
  };
</script>

<style scoped lang="scss">
  .title {
    h1 {
      color: #222;
      margin: 100px 0px;
    }
  }
</style>
