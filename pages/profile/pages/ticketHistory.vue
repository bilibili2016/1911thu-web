  <template>
  <!-- 开发票历史 -->
  <div class="tickeHietory">
    <div class="orderList" v-for="(ticket, index ) in orderData" :key="index">
      <div class="topBar clearfix">
        <span class="fl"></span>
        <span class="fr">{{exchangeTime(ticket.create_time)}}</span>
      </div>
      <div class="list">
        <div class="content">
          <div class="course">
            <div class="courseOne">
              <img class="fl" :src="ticket.order_picture" alt="">
              <div class="fl">
                <h4>{{ticket.order_title}}</h4>
                <h6>{{ticket.curriculum_time}}学时</h6>
              </div>
            </div>
          </div>
          <div class="price height">
            <p>¥{{ticket.total_price}}</p>
          </div>
          <div class="number height" @click="handleTicketPopup(ticket.id)">
            <div>
              <p>1张发票</p>
              <p>含{{ticket.order_number}}个订单</p>
            </div>
            <div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="status height">
            <div v-if="ticket.send_status == '0'" @click="handleStatusPopup(ticket.id)">未发出
              <i class="el-icon-arrow-right"></i>
            </div>
            <div v-else @click="handleStatusPopup(ticket.id)">已发出
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发票弹框 -->
    <div class="ticketPopup" v-show="isTicketPopup">
      <div class="content">
        <div class="title clearfix">
          <span class="fl">开票详情</span>
          <span class="fr" @click="closeTicketPopup">
            <i class="el-icon-close"></i>
          </span>
        </div>
        <div class="bottomCon">
          <div class="items">
            <div class="item-list clearfix" v-for="(item,index) in TicketPopupData" :key="index">
              <div class="code">{{item.order_sn}}</div>
              <div class="time">{{exchangeTime(item.create_time)}}</div>
              <div class="num">{{item.project_number}}个项目，{{item.curriculum_number}}个课程</div>
              <div class="price">{{item.pay_amount}}元</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- 状态弹框 -->
    <div class="statusPopup" v-show="isStatusPopup">
      <div class="content">
        <div class="title clearfix">
          <span class="fl">发票详情</span>
          <span class="fr" @click="closeStatusPopup">
            <i class="el-icon-close"></i>
          </span>
        </div>
        <div class="bottomCon">
          <div class="item-one">
            <div class="top">接收信息</div>
            <div class="bottom">
              <span>收件人：{{StatusPopupData.consignee}}</span>
              <span>电话：{{StatusPopupData.phone}}</span>
              <span>地址：{{StatusPopupData.address}}</span>
            </div>
          </div>
          <div class="item-two">
            <div class="top">发票信息</div>
            <div class="bottom">
              <div v-if="StatusPopupData.type=='1' || StatusPopupData.type=='2'">发票类型：普通发票</div>
              <div v-else>发票类型：增值税专用发票</div>
              <div>发票抬头：{{StatusPopupData.company_name}}</div>
              <div>发票内容：{{StatusPopupData.content}}</div>
              <div>纳税人识别号：{{StatusPopupData.invoice_number}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ticketHistory } from '~/lib/v1_sdk/index'
import { mapActions } from 'vuex'
import { timestampToTime } from '@/lib/util/helper'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['orderData'],
  data() {
    return {
      isTicketPopup: false,
      TicketPopupData: [],
      isStatusPopup: false,
      StatusPopupData: [],
      checkMsg: false,
      noData: false,
      orderForm: {
        pages: 1,
        limits: null,
        payStatus: null,
        ids: null
      },
      kidForm: {
        kid: ''
      },
      gidForm: { gids: null }
    }
  },
  methods: {
    ...mapActions('auth', ['setGid', 'setKid']),
    //开票详情弹框
    handleTicketPopup(id) {
      let ticketId = { ID: id }
      ticketHistory.invoiceOrderDetail(ticketId).then(response => {
        this.isTicketPopup = true
        this.TicketPopupData = response.data.invoiceOrderList
      })
    },
    //关闭开票详情弹框
    closeTicketPopup() {
      this.isTicketPopup = false
    },
    //发票详情弹框
    handleStatusPopup(id) {
      let invoiceID = { ID: id }
      ticketHistory.invoiceDetail(invoiceID).then(response => {
        this.isStatusPopup = true
        this.StatusPopupData = response.data
      })
    },
    //关闭
    closeStatusPopup() {
      this.isStatusPopup = false
    },
    goCourseInfo(item, index) {
      this.kidForm.kids = item.curriculum_id
      persistStore.set('kid', item.curriculum_id)
      this.setKid(this.kidForm)
      persistStore.set('curriculumId', item.curriculum_id)
      this.$router.push('/course/coursedetail')
    },
    goShopping(id) {
      this.orderForm.ids = id
      return new Promise((resolve, reject) => {
        ticketHistory.buyAgain(this.orderForm).then(response => {
          if (response.status === 0) {
            this.$router.push('/shop/shoppingCart')
          } else {
            this.$message({
              showClose: true,
              type: 'error',
              message: response.msg
            })
          }
          resolve(true)
        })
      })
    },
    goPay(id) {
      persistStore.set('cpyid', id)
      this.$router.push('/shop/wepay')
    },
    cancelOrder(id) {
      //取消订单
      this.orderForm.ids = id
      return new Promise((resolve, reject) => {
        ticketHistory.cancelOrder(this.orderForm).then(response => {
          if (response.status === 0) {
            this.$emit('handleUpdate', true)
            this.$message({
              showClose: true,
              type: 'success',
              message: '订单已取消！'
            })
          } else {
            this.$message({
              showClose: true,
              type: 'error',
              message: response.msg
            })
          }
          resolve(true)
        })
      })
    },
    handleSelectChange() {},
    // 时间戳转日期格式
    exchangeTime(time) {
      return timestampToTime(time)
    },
    goLink(item) {
      this.gidForm.gids = item
      this.setGid(this.gidForm)
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', item)
    }
  }
}
</script>
