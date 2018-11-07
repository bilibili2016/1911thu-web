<template>
  <div class="invitation" v-loading="allCode">
    <v-search @search="search" :placeHolder="placeHolder"></v-search>
    <div class="table" :class="{ minheight : allCode}">
      <div class="tr_header">
        <span>兑换码</span>
        <span>类型</span>
        <span>购买日期</span>
        <span>可用个数</span>
        <span>剩余天数</span>
        <span>所属订单</span>
      </div>
      <!-- codeData&&codeData.length> -->
      <div v-if="codeData&&codeData.length>0" v-for="(code,index) in codeData" :key="index" :class="(code.use_code_number==0||code.expire_days==0)?'noCodes tr_body':'tr_body'">
        <span>{{code.invitation_code}}</span>
        <span v-if="code.type==='1'">课程</span>
        <span v-if="code.type==='2'">项目</span>
        <span v-if="code.type==='3'">课程+项目</span>
        <span v-if="code.type==='4'">自定制项目</span>
        <span v-if="code.type==='5'">学院</span>

        <span>{{exchangeTime(code.pay_time)}}</span>
        <span>{{code.use_code_number}}</span>
        <span>{{code.expire_days}}</span>
        <span class="orderNum" @click="handleMyOrder(code)">{{code.order_sn}}
          <i class="used" v-if="code.expire_days==0&&code.use_code_number==0"></i>
          <i class="efficacy" v-else-if="code.expire_days==0"></i>
          <i class="used" v-else-if="code.use_code_number==0"></i>
        </span>
      </div>

      <div v-if="codeData.length == 0&& !allCode" class="noCodes">
        <img :src="noMsgImg" alt="">
        <p>抱歉，现在还没有兑换码~</p>
      </div>
    </div>
    <div class="rules clearfix">
      <div class="rulesInfo">
        <h5>兑换规则</h5>
        <div class="word">
          <p>1、您将兑换码分享给好友，邀请其学习课程或加入学院；</p>
          <p>2、每个兑换码每个学员仅限使用一次；</p>
          <p>3、当一个兑换码可兑换次数>=1时，该兑换码可分别分享给不同的好友进行兑换；</p>
          <p>4、兑换码使用次数为0时，则不能再被兑换；</p>
          <p>5、兑换后，该兑换码将即刻生效，您可在个人中心中查看；</p>
          <p>6、为保护您的正当权益，请勿通过任何不正当途径获取、交易兑换码。</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { timestampToYMD } from '@/lib/util/helper'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import Search from '@/pages/profile/components/common/search.vue'
export default {
  props: ['codeData', 'allCode'],
  components: {
    'v-search': Search
  },
  data() {
    return {
      placeHolder: '请输入订单号',
      noCodes: true,
      number: '0',
      searchType: 2,
      orderNum: 0,
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
      this.$bus.$emit(
        'searchDatas',
        item.order_sn,
        this.searchType,
        this.orderNum
      )
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

<style scoped>
.minheight {
  min-height: 400px;
}
</style>
