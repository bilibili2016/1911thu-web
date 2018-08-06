  <template>
  <!-- 开发票历史 -->
  <div class="tickeHietory">
    <div class="orderList">
      <div class="topBar clearfix">
        <span class="fl"></span>
        <!-- <span class="fr">{{exchangeTime(ticket.create_time)}}</span> -->
      </div>
      <div class="list">
        <div class="content">
          <div class="course">
            <div class="courseOne" v-for="(ticket, index ) in orderData" :key="index">
              <img @click="goCourseInfo(ticket,index)" class="fl" :src="ticket.picture" alt="">
              <div class="fl">
                <h4 @click="goCourseInfo(ticket,index)">{{ticket.order_title}}</h4>
                <h6>{{ticket.curriculum_time}}学时</h6>
                <p>讲师：{{ticket.teacher_name}}</p>
              </div>
            </div>
          </div>
          <div class="price height">
            <p>¥{{courseList.order_amount}}</p>
          </div>
          <div class="number height">
            <div>
              <p>1张发票</p>
              <p>含3个订单</p>
            </div>
            <div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="status height" :style="{height:courseList.invoiceList.length > 3? 3*140+'px' :courseList.invoiceList.length*140+'px'}">
            <div>已发出
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { home, tickethistory } from '~/lib/v1_sdk/index'
import { order } from '~/lib/v1_sdk/index'
import { mapActions } from 'vuex'
import { timestampToTime } from '@/lib/util/helper'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['orderData'],
  data() {
    return {
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
        order.buyAgain(this.orderForm).then(response => {
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
        order.cancelOrder(this.orderForm).then(response => {
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
<style lang="scss">
.tickeHietory {
  background-color: #fff;
  .orderList {
    .list {
      .content {
        .course {
          width: 500px;
          .courseOne {
            width: 500px;
            h4 {
              width: 285px;
            }
          }
        }
        .number {
          width: 130px;
          border-right: 1px solid #e8d6f7;
          padding: 0 10px;
          justify-content: space-around;
          flex-wrap: nowrap;
          flex-direction: row;
          div {
            width: auto;
            p {
              line-height: 30px;
              font-size: 16px;
              color: #222;
            }
          }
        }
        .status {
          width: 130px;
        }
      }
    }
  }
}
</style>
