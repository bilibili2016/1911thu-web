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
            <v-nomsg v-if="codeData.length == 0&& !allCode" class="noCodes" :config="noMsg"></v-nomsg>
        </div>
        <div class="rules clearfix">
            <div class="rulesInfo">
                <h5>兑换规则</h5>
                <div class="word">
                    <p>1、兑换码是学员在1911学堂获得在线学院学籍或观看在线课程的凭证号码，请您妥善保管；</p>
                    <p>2、兑换码包含单次兑换码及多次兑换码；单次兑换码仅限使用一次；多次兑换码可供不同学员多次兑换，且每位学员仅限使用一次该兑换码；兑换码兑换次数为0时，则不能兑换；</p>
                    <p>3、兑换后，该兑换码将即刻生效，您可在个人中心中查看；</p>
                    <p>4、为保护您的正当权益，请勿通过任何不正当途径获取、交易兑换码。</p>
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
import NoMsg from '@/pages/profile/components/common/noMsg.vue'

export default {
    props: ['codeData', 'allCode'],
    components: {
        'v-search': Search,
        'v-nomsg': NoMsg,
    },
    data() {
        return {
            placeHolder: '请输入订单号',
            noCodes: true,
            number: '0',
            searchType: 2,
            orderNum: 0,
            noMsgImg: 'https://static-image.1911edu.com/noMsg.png',
            gidForm: {
                gids: ''
            },
            noMsg: {
                type: 'myCode',
                text: '抱歉，您现在还没有兑换码~'
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
