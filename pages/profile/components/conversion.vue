<template>
  <div class="conversion">
    <div>
      <div class="tables">
        <table class="recordTable">
          <!--alternate-->
          <tr class="tr_header">
            <th>课程码</th>
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
          <div v-if="!recordData||recordData.length<1" class="noCodes">
            <img :src="noMsgImg" alt="">
            <p>抱歉，现在还没有课程码~</p>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { timestampToYMD } from '@/lib/util/helper'
export default {
  props: ['recordData'],
  data() {
    return {
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png'
    }
  },
  methods: {
    exchangeTime(time) {
      return timestampToYMD(time)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/profile/conversion.scss';
</style>
