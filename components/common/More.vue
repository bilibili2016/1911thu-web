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
    ...mapActions('auth', ['setCid', 'setCg']),
    getMore() {
      console.log(this.linkdata, '这是this.linkdata')
      // 免费课程路由 设置cid pid cindex
      // if (this.linkdata === '/course/category') {
      //   this.setCid(this.cidform)
      // }

      // 经典课程cgs === '1'
      if (this.linkdata === '/course/classifylesson') {
        this.cgForm.cgs = '1'
        this.setCg(this.cgForm)
        // window.open(window.location.origin + '/course/category')
      } else if (this.linkdata === '/course/freelesson') {
        // 免费课程cgs === '2'

        this.setCid(this.cidform)
        this.cgForm.cgs = '2'
        this.setCg(this.cgForm)
        // window.open(window.location.origin + '/course/freelesson')
      } else {
        // window.open(window.location.origin + this.linkdata)
      }
      this.$emit('getMoreData')
      // window.open(window.location.origin + this.linkdata)
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
