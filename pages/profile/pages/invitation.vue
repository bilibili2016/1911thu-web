<template>
  <div class="invitation">
    <h4>专属邀请码</h4>
    <div class="table">
      <table :data="codeData">
        <tr class="tr_header">
          <th>专属邀请码</th>
          <th>购买日期</th>
          <th>可用个数</th>
        </tr>
        <tr v-for="(code,index) in codeData" :key="index" :class="number === code.use_code_number ?'noCodes tr_body':'tr_body' ">
          <td>{{code.invitation_code}}</td>
          <td>{{timestampToTime(code.pay_time)}}</td>
          <td>{{code.use_code_number}}
            <i></i>
          </td>
        </tr>
      </table>
    </div>
    <div class="rules clearfix">
      <div class="fl">
        <h5>邀请规则</h5>
        <div class="word">
          <p>
            <i>1、</i>每一位好友通过您分享的邀请码成功加入课程，邀请码的使用次数将减少一次；</p>
          <p>
            <i>2、</i>邀请码使用次数用尽，该邀请码失效；</p>
          <p>
            <i>3、</i>若通过不正当手段获得邀请码，1911学堂有权撤销邀请码；</p>
        </div>
      </div>
      <div class="fr">
        <h5>邀请记录</h5>
        <div class="tables">
          <table :data="recordData" class="recordTable">
            <!--alternate-->
            <tr class="tr_header">
              <th>邀请好友</th>
              <th>日期</th>
            </tr>
            <tr v-for="(code,index) in recordData" :key="index" :class="number === code.use_code_number ?'noCodes tr_body':'tr_body' ">
              <td>{{code.user_name}}通过
                <i>{{code.invitation_code}}</i> 加入学习</td>
              <td>{{code.create_time}}</td>
            </tr>
          </table>
          <div class="noCode" v-if="recordData.length === 0">
            <img :src="noMsgImg" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['codeData', 'recordData'],
  data() {
    return {
      noCodes: true,
      number: '0',
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png'
    }
  },
  methods: {
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-'
      let M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      let D =
        (date.getDate() * 1 < 10 ? '0' + date.getDate() : date.getDate()) + ' '
      let h =
        (date.getHours() * 1 < 10 ? '0' + date.getHours() : date.getHours()) +
        ':'
      let m =
        (date.getMinutes() * 1 < 10
          ? '0' + date.getMinutes()
          : date.getMinutes()) + ':'
      let s =
        date.getSeconds() * 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return Y + M + D + h + m + s
    }
  }
}
</script>
