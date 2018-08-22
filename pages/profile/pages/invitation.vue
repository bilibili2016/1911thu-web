<template>
  <div class="invitation clearfix">
    <v-search @search="search"></v-search>
    <div class="table">
      <div class="tr_header">
        <span>兑换码</span>
        <span>类型</span>
        <span>购买日期</span>
        <span>可用个数</span>
        <span>剩余天数</span>
        <span>所属订单</span>
      </div>
      <!-- codeData&&codeData.length> -->
      <div v-if="codeData&&codeData.length>0" v-for="(code,index) in codeData" :key="index" :class="code.use_code_number==='0'||code.expire_days==='0'?'noCodes tr_body':'tr_body' ">
        <span>{{code.invitation_code}}</span>
        <span v-if="code.type==='1'">课程</span>
        <span v-if="code.type==='2'">项目</span>
        <span v-if="code.type==='3'">课程+项目</span>
        <span>{{exchangeTime(code.pay_time)}}</span>
        <span>{{code.use_code_number}}</span>
        <span>{{code.expire_days}}</span>
        <span class="orderNum" @click="handleMyOrder(code.id)">{{code.order_sn}}
          <i class="efficacy" v-if="code.expire_days==='0'"></i>
          <i class="used" v-if="code.use_code_number==='0'"></i>
        </span>
      </div>
      <div v-if="!codeData||codeData.length<1" class="noCodes">
        <img :src="noMsgImg" alt="">
        <p>抱歉，现在还没有兑换码~</p>
      </div>
    </div>
    <div class="rules clearfix">
      <div class="rulesInfo">
        <h5>兑换规则</h5>
        <div class="word">
          <p>1、每一位好友通过您分享的兑换码成功加入课程，兑换码的使用次数将减少一次；</p>
          <p>2、兑换码使用次数用尽，该兑换码失效；</p>
          <p>3、项目兑换码，绑定之后存入我的项目，兑换码，绑定之后存入我的课程，项目+兑换码，绑定之后分别存入我的项目、我的课程；</p>
          <p>4、若通过不正当手段获得兑换码，1911学堂有权撤销兑换码；</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { timestampToYMD } from '@/lib/util/helper'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import Search from '@/pages/profile/components/search.vue'
export default {
  props: ['codeData'],
  components: {
    'v-search': Search
  },
  data() {
    return {
      noCodes: true,
      number: '0',
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
      gidForm: {
        gids: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setGid']),
    handleMyOrder(item) {
      this.gidForm.gids = 'tab-fourth'
      this.setGid(this.gidForm)
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', 'tab-fourth')

      persistStore.set('order', item)
      this.$bus.$emit('goOrderDetaild', item)
    },
    exchangeTime(time) {
      return timestampToYMD(time)
    },
    search(data) {
      this.$emit('searchOrder', data)
    }
  }
}
</script>
