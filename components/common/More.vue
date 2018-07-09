<template>
  <div>
    <div class="card-button">
      <el-button type="primary" @click='getMore()'>查看更多</el-button>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  props: ['linkdata'],
  data() {
    return {
      cidform: {
        cids: '1',
        indexs: 1,
        pids: ''
      },
      cgForm: {
        cgs: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setCid']),
    getMore() {
      // 免费课程路由 设置cid pid cindex
      // if (this.linkdata === '/course/category') {
      //   this.setCid(this.cidform)
      // }
      // if (this.linkdata === '/course/classifylesson') {
      //   this.cgForm.cgs = '1'
      //   this.setCg(this.cgForm)
      // }
      this.$emit('getMoreData')
      window.open(window.location.origin + this.linkdata)
    }
  }
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
