<template>
  <div class="VIP-con">
    <div class="vipBanner" :class="{netWork:page=='2',online:page=='3'}"></div>
    <div class="con-detail">
      <img class="conImg" v-if="page=='2'" :src="networkImg" alt="">
      <img class="conImg" v-if="page=='3'" :src="onlineImg" alt="">
      <div class="btns clearfix">
        <span class="text">开启学习之旅！</span>
        <div class="btn-item">
          <span class="button" @click="lookCourse">查看课程</span>
          <span class="button active" @click="buyVip">加入学院</span>
          <span class="button btn-three" @click="identificate">申请认证</span>
        </div>
      </div>
    </div>
    <div class="mask" v-show="vipPopShow">
      <div class="vipPop" v-show="!isShowAlert">
        <div class="pop-title">温馨提示</div>
        <i class="el-icon-close" @click="handlePopClick"></i>
        <div class="con">
          <p>1、购买单份会员，购买成功后立即生效；</p>
          <p>2、购买多份会员，购买成功后将生成兑换码， 绑定后生效；</p>
          <p>3、如果您再次购买此会员，将生成兑换码，绑定后生效。</p>
        </div>
        <div class="num clearfix">
          <div class="numText">请选择数量</div>
          <div class="numOpr">
            <span class="numBtn sub " @click="delNumber">-</span>
            <span class="inputText"><input type="text" v-model="vipData.number" @focus="handleFocus" @blur="changeNumber"></span>
            <span class="numBtn add" @click="addNumber">+</span>
          </div>
        </div>
        <div class="btn">
          <span class="cancel" @click="handlePopClick">取消</span>
          <span class="confirm" @click="handleConfirm">下一步</span>
        </div>
      </div>

      <div class="alertPop" v-show="isShowAlert">
        <i class="el-icon-close" @click="closeAlertPop"></i>
        <img src="http://papn9j3ys.bkt.clouddn.com/alert.png" alt="">
        <p>{{alertText}}</p>
        <el-button @click="closeAlertPop">知道了</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { store as persistStore } from '~/lib/core/store'
import { matchSplits, setTitle, message } from '@/lib/util/helper'
import { vip } from '@/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'

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
      }
    }
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
    handlePopClick() {
      this.vipPopShow = false
    },
    //减
    delNumber() {
      if (this.vipData.number <= 1) {
        this.vipData.number = 1
      } else {
        this.vipData.number--
      }
    },
    //加
    addNumber() {
      this.vipData.number++
      if (this.vipData.number >= 9999) {
        this.isShowAlert = true
        this.alertText = '商品数量不能大于9999'
        this.vipData.number = 9999
      }
    },
    //关闭超限弹窗
    closeAlertPop() {
      this.isShowAlert = false
    },
    // 购买人数输入框获取焦点记录当前数字
    handleFocus() {
      this.lastNum = this.vipData.number
    },
    // 购买人数输入框失去焦点
    changeNumber() {
      let reg = /^[0-9]*$/
      if (!reg.test(this.vipData.number)) {
        this.isShowAlert = true
        this.alertText = '商品数量超限'
        this.vipData.number = this.lastNum
        return false
      }
      if (this.vipData.number <= 0) {
        this.isShowAlert = true
        this.alertText = '商品数量必须大于0'
        this.vipData.number = this.lastNum
        return false
      }
      if (this.vipData.number > 9999) {
        this.isShowAlert = true
        this.alertText = '商品数量不能大于9999'
        this.vipData.number = this.lastNum
        return false
      }
    },
    //下一步
    handleConfirm() {
      this.$router.push(
        '/shop/affirmorder?id=' +
          matchSplits('id') +
          '&type=2&num=' +
          this.vipData.number
      )
      // this.vipData.vipId = matchSplits('id')
      // vip.addProduceOrderVip(this.vipData).then(res => {
      //   if (res.status == 0) {
      //     this.$router.push('/shop/affirmorder?id=' + res.data.id + '&type=2')
      //   } else {
      //     message(this, 'error', res.msg)
      //   }
      // })
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
  }
}
</script>