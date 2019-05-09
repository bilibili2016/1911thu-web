<template>
  <div>
    <div class="pay">
      <div class="note" id="note" v-if="pay">
        <i @click="close" class="el-icon-close fr"></i>
        <h4>—— 尊敬的学员，请缴纳咨询费用 ——</h4>
        <div class="goodsInfo">
          <div class="userImg">
            <img :src="userInfo.head_img" alt>
            <span>{{userInfo.nick_name}}</span>
          </div>
          <div>
            <p>咨询的导师：{{teacherInfo.teacher_name?teacherInfo.teacher_name:teacherInfo.teacher_user_name}}</p>
            <p>咨询费用：{{produceOrderInfo.price}}元</p>
          </div>
        </div>
        <div class="code">
          <div class="codeL">
            <p>微信</p>
            <div v-loading="loading" class="codeBox">
              <qrcode v-show="!loading" :value="wechat" :options="{ size: 120 }" class="qrcode"></qrcode>
            </div>
          </div>
          <div class="codeC"></div>
          <div class="codeR">
            <p>支付宝</p>
            <div v-loading="loading" class="codeBox">
              <qrcode v-show="!loading" :value="alipay" :options="{ size: 120 }" class="qrcode"></qrcode>
            </div>
          </div>
        </div>
        <div class="bottom">
          <p>预约已锁定，请在30分种内完成支付，支付剩余时间{{rest.minute}}分{{rest.second}}秒。</p>
          <!-- <p>截止支付时间：{{endTime}}</p>
          <p>倒计时：{{minute}}分{{second}}秒</p> -->
          <span v-if="config=='myConsult'" class="cancelBtn" @click="cancelAppoint">取消预约</span>
        </div>
      </div>
      <!-- 支付成功 -->
      <div class="paySuccess" v-show="paySuccess">
        <i @click="close" class="el-icon-close fr"></i>
        <img src="https://static-image.1911edu.com/success.png" alt>
        <h5>支付成功</h5>
        <div class="goodsTime">
          <p>亲爱的{{userInfo.real_name}}，您已预约咨询{{teacherInfo.teacher_name?teacherInfo.teacher_name:teacherInfo.teacher_user_name}}导师，预约时间为{{startTime}}-{{endTime}},请等待导师的确认信息。<span v-if="config!='myConsult'">您可以通过“个人中心-我的咨询”查看预约状态，</span>时间确定后，请提前5分钟进入直播间。</p>
        </div>
        <div class="focus">
          <p>关注1911学堂公众号，第一时间获得1911学堂资讯！</p>
          <img src="https://static-image.1911edu.com/attentionWechat2.jpg" alt="">
          <p></p>
        </div>
        <div class="goodsBtn">
          <span  v-if="config!='myConsult'" @click="lookAppointment">前往个人中心</span>
        </div>
      </div>
      <!-- 支付失败 -->
      <div class="payError" v-show="payError">
        <i @click="close" class="el-icon-close fr"></i>
        <img src="https://static-image.1911edu.com/error.png" alt>
        <h5>支付失败</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState, mapMutations } from 'vuex'
import VueQrcode from '@xkeshi/vue-qrcode'
import { store as persistStore } from '~/lib/core/store'
import { home, pay, wepay } from '~/lib/v1_sdk/index'
import { matchSplits, getNet, timestampToTime } from '@/lib/util/helper'
Vue.component(VueQrcode.name, VueQrcode)
export default {
  props: ['config', 'userInfo', 'teacherInfo', 'orderInfo'],
  data () {
    return {
      produceOrderInfo: '',
      pay: true,
      paySuccess: false,
      payError: false,
      codeForm: {
        type: '4',
        ids: '',
        attachs: 2
      },
      loading: true,
      wechat: '',
      alipay: '',
      flag: true,
      user: {},
      gidForm: {
        gids: ''
      },
      socket: '',
      startTime: '',
      endTime: '',
      minute: '',
      second: '',
      interval: '',
      gidForm: {
        gids: ''
      },
      rest:{
        minute:'',
        second:'',
        currentTime:"",
        creatTime:""
      },
      restSecond:null,
      cancelForm:{
        id:''
      }
    }
  },
  computed: {
    ...mapState('auth', ['closePay'])
  },
  methods: {
    ...mapActions('auth', ['setGid']),
    ...mapMutations('auth', ['setClosePay']),
    close () {
      clearInterval(this.interval)
      this.pay = false;
      this.paySuccess = false;
      this.payError = false;
      this.$emit('closePayed')
      if(this.config=='myConsult'){
          this.$bus.$emit('getStudentData')
      }
    },
    //个人中心-我的咨询-取消预约
    cancelAppoint(){
      //老师详情支付弹窗 teacherDetail
      if(this.config=='teacherDetail'){
        this.cancelForm.id=this.orderInfo.id
      }else{//个人中心-我的咨询-支付弹窗 myConsult
        this.cancelForm.id=this.teacherInfo.id
      }
      home.cancelAppoint(this.cancelForm).then(res=>{
        if(res.status==0){
          clearInterval(this.interval)
           //老师详情支付弹窗 teacherDetail
          if(this.config=='teacherDetail'){
           this.close()
          }else{//个人中心-我的咨询-支付弹窗 myConsult
            this.$emit('close')
            this.$bus.$emit('getStudentData')
          }
        }else{
          message(this,'error',res.msg)
        }
      })
    },
    lookAppointment () {
      this.close()
      this.gidForm.gids = 'tab-twelfth';
      this.setGid(this.gidForm);
      this.$router.push("/profile");
    },
    // 获取去二维码的方法
    getCode () {
      pay.getCode(this.codeForm).then(response => {
        this.produceOrderInfo = response.data.produceOrderInfo
        this.wechat = response.data.code_url
        this.alipay = response.data.qr_code
        this.loading = false
        this.flag = true
        let arr = timestampToTime(response.data.produceOrderInfo.start_time).split('-');
        let arr1 = arr[2].split(' ');
        arr[0] = arr[0] + '年'
        arr[1] = arr[1] + '月'
        arr[2] = arr1[0] + '日'
        arr[3] = arr1[1]
        this.startTime = arr.join('');
        this.endTime = timestampToTime(response.data.produceOrderInfo.end_time).split(' ')[1]
        // this.changeTime(response.data.produceOrderInfo.end_time - Math.round(new Date() / 1000))
       this.rest.currentTime = response.data.current_time

       this.changeTime()
      })
    },
    // 转换时间格式
    changeTime () {
     let restTime = this.rest.currentTime-this.rest.creatTime
      if(restTime<=1800){//在有效期内
        this.restSecond = 1800-restTime
      }

      clearInterval(this.interval)
      this.interval = setInterval(() => {
        if(this.restSecond<=1){
          this.cancelAppoint()
          clearInterval(this.interval)
        }
        --this.restSecond
        this.rest.minute = parseInt(this.restSecond/60)
        this.rest.second = this.restSecond%60
        // console.log(this.rest);

      }, 1000);
    },
    getStatus () {
      let that = this
      this.socket = new io(getNet())
      // 连接socket
      this.socket.on('connect', function () {
        that.socket.emit("login", persistStore.get("token"), "ordinaryUser");
      })
      // 支付推送来消息时
      this.socket.on('new_msg', function (msg) {
        //支付成功
        if (msg.pay_status == 0) {
          that.pay = false;
          that.paySuccess = true;
          that.payError = false;
          return false
        }
        //支付失败
        if (msg.pay_status == 100100) {
          that.pay = false;
          that.paySuccess = false;
          that.payError = true;
          return false
        }
      })
      // 断线重连
      this.socket.on('reconnect', function (msg) { })
    },
  },
   beforeDestroy () {
    this.$bus.$off('getStudentData')
  },

  mounted () {
    //老师详情支付弹窗 teacherDetail
    if(this.config=='teacherDetail'){
      this.rest.creatTime = this.orderInfo.time
      this.rest.minute = 29
      this.rest.second = 59
    }else{//个人中心-我的咨询-支付弹窗 myConsult
      this.rest.creatTime = this.teacherInfo.update_time
      this.rest.minute = 0
      this.rest.second = 0

    }
    this.codeForm.ids = this.orderInfo.id
    this.getStatus()
    this.getCode()
    clearInterval(this.interval)

  }
}
</script>
<style scoped lang="scss">
@import "~assets/style/teacher/pay.scss";
</style>
