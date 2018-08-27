<template>
  <div class="conversion clearfix">
    <v-search @search="search"></v-search>
    <div class="tables">
      <table class="recordTable">
        <!--alternate-->
        <tr class="tr_header">
          <th>兑换码</th>
          <th>兑换账户</th>
          <th>类型</th>
          <th>日期</th>
        </tr>
        <tr v-if="recordData&&recordData.length>0" v-for="(code,index) in recordData" :key="index" class="tr_body">
          <td>{{code.invitation_code}}</td>
          <td>{{code.user_name}}</td>
          <td v-if="code.type==='1'">课程</td>
          <td v-if="code.type==='2'">项目</td>
          <td v-if="code.type==='3'">课程+项目</td>
          <td>{{exchangeTime(code.create_time)}}</td>
        </tr>
        <v-nomsg v-if="!recordData||recordData.length<1" class="noCodes" :config="noMsg"></v-nomsg>

      </table>
    </div>
  </div>
</template>

<script>
import { timestampToYMD } from '@/lib/util/helper'
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import Search from '@/pages/profile/components/common/search.vue'
export default {
  props: ['recordData'],
  components: {
    'v-nomsg': NoMsg,
    'v-search': Search
  },
  data() {
    return {
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
      noMsg: {
        type: 'myCode',
        text: '抱歉，现在还没有兑换码~'
      }
    }
  },
  methods: {
    exchangeTime(time) {
      return timestampToYMD(time)
    },
    search(data) {
      this.$emit('goSearch', data)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/profile/conversion.scss';
</style>
