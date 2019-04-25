<template>
  <div class="playBottom clearfix">
    <span class="fl usePhone">手机观看
      <div class="ewCode">
        <img src="https://static-image.1911edu.com/attentionWechat2.png" alt="">
        <i></i>
      </div>
    </span>
    <span class="fl problem" @click="showRpt">报告问题</span>
    <!-- 普通项目显示，自定义项目不显示评价和收藏 -->
    <span class="fl elt" v-if="config.type==='1'">
      <span class="fl" @click="showElt" v-if="iseve === false">
        <i class="el-icon-edit"></i>项目评价
      </span>
      <span class="fl" v-else :class=" { bag: iseve === true }">
        <i class="el-icon-edit"></i>已评价
      </span>
    </span>
    <!-- 收藏分享 -->
    <v-collection v-if="config.type==='1'" :collectData="collectMsg" class="projectCollect"></v-collection>
  </div>
</template>

<script>
import Collection from '@/components/common/Collection.vue'
export default {
  props: ['iseve', 'collectMsg', 'config'],
  components: {
    'v-collection': Collection
  },
  methods: {
    showRpt () {
      this.$emit('showRpt')
    },
    showElt () {
      this.$emit('showElt')
    }
  }
}
</script>