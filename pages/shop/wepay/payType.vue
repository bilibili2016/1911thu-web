<template>
  <div>
    <div class="more">
      支付方式
    </div>
    <div class="method">
      <div class="center">
        <div class="wx fl" @click="selectWx" :class="{borderColor: wxMsg}">
          <img src="http://papn9j3ys.bkt.clouddn.com/wxp.png" alt="">
          <img src="http://papn9j3ys.bkt.clouddn.com/ok.png" alt="" class="okImg" v-if="wxMsg">
        </div>
        <div class="pub fr" @click="selectPub" :class="{borderColor: pubMsg}">
          <img src="http://papn9j3ys.bkt.clouddn.com/payPublic.png" alt="">
          <img src="http://papn9j3ys.bkt.clouddn.com/ok.png" alt="" class="okImg" v-if="pubMsg">
        </div>
        <div class="zfb fr" @click="selectZfb" :class="{borderColor: zfbMsg}">
          <img src="http://papn9j3ys.bkt.clouddn.com/zfb.png" alt="">
          <img src="http://papn9j3ys.bkt.clouddn.com/ok.png" alt="" class="okImg" v-if="zfbMsg">
        </div>
      </div>
    </div>
    <div class="text">
      <i class="el-icon-warning"></i>
      请在24小时以内支付完成，如未完成此订单将自动关闭，需重新购买！
      <span class="fr">应付金额：¥{{orderDetail.order_amount}}</span>
    </div>
    <div class="fr pay">
      <el-button @click="addPaySubmit">立即支付</el-button>
    </div>
    <div class="fk fr" @click="showRpt">
      我有疑问，需要反馈?
    </div>

  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { wepay } from '@/lib/v1_sdk/index'
export default {
  props: ['orderDetail', 'codeData', 'data'],
  data() {
    return {
      wxMsg: true,
      zfbMsg: false,
      pubMsg: false,
      val: '',
      addPaySubmitForm: {
        types: '1',
        companyId: null
      },
      payListForm: {
        orderId: null
      },
      projectList: [],
      courseList: [],
      ref: ''
    }
  },
  methods: {
    showRpt() {
      this.$bus.$emit('openReport')
    },
    addPaySubmit() {
      this.wxMask = true
      if (this.wxMsg === true) {
        this.$bus.$emit('showCode', this.codeData.code_url)
        this.getStatus()
      } else {
        this.$bus.$emit('showCode', this.codeData.qr_code)
        this.getStatus()
      }
    },
    getStatus() {
      let cpyid = window.location.pathname.split('/')[2]
      this.payListForm.orderId = cpyid
      if (this.courseList.length !== 0 && this.projectList.length === 0) {
        //课程
        this.ref = 1
      } else if (
        this.courseList.length === 0 &&
        this.projectList.length !== 0
      ) {
        //项目
        this.ref = 2
      } else {
        //项目+课程
        this.ref = 3
      }

      this.interval = setInterval(() => {
        if (this.seconds <= 0) {
          clearInterval(this.interval)
        } else {
          this.seconds--
          wepay.payResult(this.payListForm).then(response => {
            if (response.status === 0) {
              clearInterval(this.interval)
              this.$bus.$emit('closeCode')
              this.$router.push({
                path: '/shop/result/' + cpyid,
                query: { ref: this.ref }
              })
            }
          })
        }
      }, 1000)
    },
    selectWx() {
      this.wxMsg = true
      this.zfbMsg = false
      this.pubMsg = false
    },
    selectZfb() {
      this.wxMsg = false
      this.zfbMsg = true
      this.pubMsg = false
    },
    selectPub() {
      this.wxMsg = false
      this.zfbMsg = false
      this.pubMsg = true
      this.$router.push('/shop/payPublic')
    },
    //获取课程和项目列表
    getType() {
      this.data.forEach(item => {
        if (item.type === '1') {
          this.courseList.push(item)
        } else {
          this.projectList.push(item)
        }
      })
    }
  },
  mounted() {
    console.log(this.data, '222')
    this.getType()
    this.$bus.$on('clearInterval', dat => {
      clearInterval(this.interval)
    })
    this.$bus.$on('addPaySubmit', dat => {
      this.addPaySubmit()
    })
  }
}
</script>

<style scoped>
</style>
