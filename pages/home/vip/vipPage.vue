<template>
  <div class="VIP-con">
    <div class="vipBanner" :class="{netWork:page=='2',online:page=='3'}"></div>
    <div class="con-detail">
      <img class="conImg" v-if="page=='2'" :src="networkImg" alt="">
      <img class="conImg" v-if="page=='3'" :src="onlineImg" alt="">
      <div class="btns clearfix" ref="btns" :class="{bottomHeight:bottom}">
        <span class="text">开启学习之旅！</span>
        <div class="btn-item">
          <span class="button" @click="lookCourse">进入学院学习</span>
          <span class="button active" @click="buyVip">加入学院</span>
          <span class="button btn-three" @click="identificate">申请结业证书</span>
        </div>
      </div>
    </div>
    <!-- 会员购买弹窗 -->
    <v-vipbuy :vipPopShow="vipPopShow" :vipId="page" @changeVipShow="changeVipShow"></v-vipbuy>
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
      onlineImg: 'http://papn9j3ys.bkt.clouddn.com/online-con.png',
      networkImg: 'http://papn9j3ys.bkt.clouddn.com/network-con.png',
      vipPopShow: false,
      alertShow: false,
      isShowAlert: false,
      vipID: '',
      relativeID: '',
      lastNum: '',
      alertText: '商品数量不能大于9999',
      vipData: {
        vipId: '',
        number: 1
      },
      page: '',
      gidForm: {
        gids: null
      },
      windowHeight: 0,
      paperHeight: 0,
      scrollTop: 0,
      bottom: false
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
        this.$bus.$emit('selectProfileIndex', 'tab-tenth')
      } else {
        this.$bus.$emit('loginShow', true)
      }
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
    this.page = matchSplits('id') //2:干部网络学院  3:在线商学院
    // 寛高设置

    window.addEventListener('scroll', this.addClass)
  }
}
</script>