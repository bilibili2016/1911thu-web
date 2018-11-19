<template>
  <div class="VIP-con">
    <div class="vipBanner" :class="{netWork:vipDetailData.id=='2',online:vipDetailData.id=='3'}"></div>
    <div class="con-detail">
      <img class="conImg" v-if="vipDetailData.id=='2'" :src="networkImg" alt="">
      <img class="conImg" v-if="vipDetailData.id=='3'" :src="onlineImg" alt="">
      <div class="btns clearfix" ref="btns" :class="{fixedBottom:!bottom,bottomHeight:bottom}">
        <div class="btn-con">
          <span class="text">入学学费{{vipInfo.present_price}}元</span>
          <div class="btn-item">
            <!-- 是会员 -->
            <span v-if="vipInfo.vipPrivate" class="button" @click="lookCourse">进入学院学习</span>
            <!-- 不是会员 -->
            <span v-if="!vipInfo.vipPrivate" class="button" @click="lookCourse">查看学院课程</span>

            <span class="button" @click="buyVip">申请入学</span>
            <span class="button" @click="identificate">申请证书</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 会员购买弹窗 -->
    <v-vipbuy :vipPopShow="vipPopShow" :vipId="vipDetailData.id" @changeVipShow="changeVipShow"></v-vipbuy>
  </div>
</template>
<script>
import { store as persistStore } from '~/lib/core/store'
import { matchSplits, setTitle, message } from '@/lib/util/helper'
import { vip } from '@/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import VipBuy from '@/components/common/VipBuy.vue'

export default {
  data() {
    return {
      onlineImg: 'http://static-image.1911edu.com/online-con.png',
      networkImg: 'http://static-image.1911edu.com/network-con.png',
      vipPopShow: false,
      relativeID: '',
      gidForm: {
        gids: null
      },
      windowHeight: 0,
      paperHeight: 0,
      scrollTop: 0,
      bottom: true,
      vipDetailData: {
        id: ''
      },
      vipInfo: ''
    }
  },
  components: {
    'v-vipbuy': VipBuy
  },
  methods: {
    ...mapActions('auth', ['setGid']),
    //查看课程
    lookCourse() {
      this.$router.push({
        path: '/course/category',
        query: {
          cid: this.relativeID,
          cp: 0,
          pids: 0,
          xid: 0
        }
      })
    },
    //立即购买
    buyVip() {
      if (persistStore.get('token')) {
        this.vipPopShow = true
      } else {
        this.$bus.$emit('loginShow')
      }
    },
    //关闭购买弹窗
    changeVipShow(val) {
      this.vipPopShow = false
    },
    //申请认证
    identificate() {
      if (persistStore.get('token')) {
        this.gidForm.gids = 'tab-tenth'
        this.setGid(this.gidForm)
        this.$router.push('/profile')
        persistStore.set('whichIntro', matchSplits('id'))
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    //会员详情
    vipDetail() {
      vip.vipGoodsDetail(this.vipDetailData).then(res => {
        if (res.status == 0) {
          this.vipInfo = res.data.vipGoodsDetail
        }
      })
    },
    //
    addClass() {
      this.windowHeight = document.body.scrollHeight
      this.paperHeight = document.documentElement.clientHeight
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (this.windowHeight - this.scrollTop - this.paperHeight <= 100) {
        this.bottom = true
      } else {
        this.bottom = false
      }
    }
  },
  watch: {
    $route(v, oldv) {
      if (v.query !== oldv.query) {
        location.reload()
      }
    }
  },
  mounted() {
    this.relativeID = matchSplits('cid')
    this.vipDetailData.id = matchSplits('id') //2:干部网络学院  3:在线商学院
    if (this.vipDetailData.id == 2) {
      setTitle('在线干部学院-1911学堂')
    } else {
      setTitle('在线商学院-1911学堂')
    }
    this.vipDetail()
    // 寛高设置
    window.addEventListener('scroll', this.addClass)
  }
}
</script>