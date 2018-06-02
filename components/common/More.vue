<template>
  <div>
    <div class="card-button">
      <el-button type="primary" @click='getMore()'>查看更多</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['linkdata'],
    methods: {
      getMore() {
        this.$router.push(this.linkdata)
      }
    },
    mounted() {
      console.log(this.linkdata)
    }
  };
</script>

<style scoped lang="scss">
  .card-button {
    width: 174px;
    margin: 40px auto 90px;
    cursor: pointer;
    .el-button {
      width: 174px;
      height: 56px;
      border-radius: 38px;
      background-color: #6417a6;
      transition: background 300ms;
      border: none;
      font-weight: 400;
      &:hover{
        background-color: #8F4ACB;
      }
    }
  }
</style>
