<template>
  <!-- 我的消息 -->
  <div>
    <template>
      <div class="content clearfix" v-for="(card,index) in infoList" :index="index" :key="card.id">
        <div class="text fl fc16-222 flh-30">
          {{card.message}}
        </div>
        <div class="time fr f14-888 flh-30">
          {{card.send_time}}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { info } from '~/lib/v1_sdk/index'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      infoList: [],
      curruntForm: {}
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    // 获取我的消息列表
    getInfo() {
      return new Promise((resolve, reject) => {
        info.userMessage(this.curruntForm).then(res => {
          this.infoList = res.data.userMessage
          let noMsg = this.infoList && this.infoList.length > 0 ? false : true
          this.$emit('noMsg', noMsg)
        })
      })
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.getInfo()
    }
  }
}
</script>
<style scoped lang="scss">
// 页面有兼容
@import '~assets/style/profile/info.scss';
</style>
