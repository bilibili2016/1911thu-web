<template>
  <div class="title">
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
  text-align: center;
  h1 {
    color: #222;
    margin: 100px 0px;
  }
}
</style>
