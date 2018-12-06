<template>
  <!-- 我的消息 -->
  <div>
    <div class="content clearfix" v-for="(card,index) in infoList" :index="index" :key="card.id">
      <div class="text fl fc16-222 flh-30">{{card.message}}</div>
      <div class="time fr f14-888 flh-30">{{card.send_time}}</div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagemsg.pagesize"
        :pager-count="5"
        :page-count="pagemsg.pagesize"
        :current-page="pagemsg.page"
        :total="pagemsg.total"
        @current-change="historyOrderDataChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { info } from '~/lib/v1_sdk/index'
import { mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'

export default {
  data () {
    return {
      infoList: [],
      curruntForm: {
        pages: 1,
        limits: 10
      },
      pagemsg: {
        page: 1,
        pagesize: 10,
        total: 10
      },
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    // 获取我的消息列表
    getInfo () {
      info.userMessage(this.curruntForm).then(res => {
        if (res.status === 0) {
          this.infoList = res.data.userMessage
          this.pagemsg.total = res.data.pageCount;
          let noMsg = this.infoList && this.infoList.length > 0 ? false : true
          this.$emit('noMsg', noMsg)
        }
      })
    },
    historyOrderDataChange (val) {
      this.pagemsg.page = val;
      this.curruntForm.pages = val;
      this.getInfo()
    }
  },
  mounted () {
    this.$bus.$on('getInfo', data => {
      this.getInfo()
    })
  }
}
</script>
<style scoped lang="scss">
// 页面有兼容
@import "~assets/style/profile/info.scss";
</style>
