<template>
  <div class="playBottom clearfix">
    <span class="fl usePhone">手机观看
      <div class="ewCode">
        <img src="http://papn9j3ys.bkt.clouddn.com/attentionWechat2.png" alt="">
        <i></i>
      </div>
    </span>
    <span class="fl problem" @click="showRpt">报告问题</span>
    <span class="fl elt" @click="showElt" v-if="iseve === false">
      <i class="el-icon-edit"></i>项目评价
    </span>
    <span class="fl elt" v-else :class=" { bag: iseve === true }">
      <i class="el-icon-edit"></i>已评价
    </span>
    <!-- 收藏分享 -->
    <v-collection :collectData="collectMsg" class="projectCollect"></v-collection>
  </div>
</template>

<script>
import Collection from '@/components/common/Collection.vue'
export default {
  props: ['iseve', 'collectMsg'],
  components: {
    'v-collection': Collection
  },
  methods: {
    showRpt() {
      this.$emit('showRpt')
    },
    showElt() {
      this.$emit('showElt')
    }
  }
}
</script>

<style scoped>
</style>