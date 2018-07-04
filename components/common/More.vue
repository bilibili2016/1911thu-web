<template>
  <div>
    <div class="card-button">
      <el-button type="primary" @click='getMore()'>查看更多</el-button>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['linkdata'],
  methods: {
    getMore() {
      // this.$router.push(this.linkdata)
      if (this.linkdata === '/course/classifylist') {
        persistStore.set('showFree', true)
      }
      this.$emit('getMoreData')
      window.open(window.location.origin + this.linkdata)
    }
  },
  mounted() {}
}
</script>

<style scoped lang="scss">
.card-button {
  width: 174px;
  margin: 10px auto 60px;
  cursor: pointer;
  .el-button {
    width: 174px;
    height: 56px;
    border-radius: 38px;
    background-color: #6417a6;
    transition: background 300ms;
    border: none;
    font-weight: 400;
    &:hover {
      background-color: #8f4acb;
    }
  }
}
</style>
