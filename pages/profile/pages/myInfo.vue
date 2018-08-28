<template>
  <div>
    <el-card class="card-style">
      <div slot="header" class="clearfix">
        <span>我的消息</span>
      </div>
      <v-info @noMsg="isNoMyMsg"></v-info>
      <v-nomsg v-show="noMyMsg" :config="noMsgEle"></v-nomsg>
    </el-card>
  </div>
</template>

<script>
import Info from '@/pages/profile/components/myinfo/Info.vue'
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
export default {
  components: {
    'v-info': Info,
    'v-nomsg': NoMsg
  },
  props: ['noMyMsg', 'noMsgEle'],
  methods: {
    isNoMyMsg() {
      this.$emit('isNoMyMsg')
    }
  }
}
</script>

