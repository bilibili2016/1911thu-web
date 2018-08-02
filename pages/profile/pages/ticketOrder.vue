<template v-if="config.type=='ticket'">
  <!-- 按订单开发票 -->
  <div class="ticketOrder">
    <div class="orderList" v-for="(courseList, index ) in orderData" :key="index">
      <div class="topBar clearfix">
        <span class="fl">订单：{{courseList.order_sn}}</span>
        <span class="fr">{{timestampToTime(courseList.create_time)}}</span>
      </div>
      <div class="list">
        <div class="content">{{config}}
          <div class="check">
            <el-checkbox v-model="checkMsg" @change="handleSelectChange()"></el-checkbox>
          </div>
          <div class="course">
            <div class="courseOne" v-for="(course,index) in courseList.orderCurriculumList" :key="index" v-if="index<3">
              <img @click="goCourseInfo(course,index)" class="fl" :src="course.picture" alt="">
              <div class="fl">
                <h4 @click="goCourseInfo(course,index)">{{course.title}}</h4>
                <h6>{{course.curriculum_time}}学时</h6>
                <p>讲师：{{course.teacher_name}}</p>
              </div>
            </div>
          </div>
          <div class="price height" :style="{height:courseList.orderCurriculumList.length > 3? 3*140+60+'px' :courseList.orderCurriculumList.length*140+'px'}">
            <p>¥{{courseList.order_amount}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { home } from '~/lib/v1_sdk/index'
import { mapActions } from 'vuex'
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
        home.buyAgain(this.orderForm).then(response => {
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
        home.cancelOrder(this.orderForm).then(response => {
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
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-'
      let M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      let D =
        (date.getDate() * 1 < 10 ? '0' + date.getDate() : date.getDate()) + ' '
      let h =
        (date.getHours() * 1 < 10 ? '0' + date.getHours() : date.getHours()) +
        ':'
      let m =
        (date.getMinutes() * 1 < 10
          ? '0' + date.getMinutes()
          : date.getMinutes()) + ':'
      let s =
        date.getSeconds() * 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return Y + M + D + h + m + s
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
.ticketOrder {
  background-color: #fff;
  .orderList {
    .list {
      .content {
        .check {
          width: 110px;
          .el-checkbox {
            padding-left: 41px;
            color: #222;
            font-size: 16px;
            .el-checkbox__inner {
              border-color: #6417a6;
              width: 18px;
              height: 18px;
              border-radius: 4px;
              background-color: transparent;
              &:after {
                height: 9px;
                left: 6px;
                top: 2px;
              }
            }
            .el-checkbox__input.is-checked {
              & .el-checkbox__inner {
                border-color: #6417a6;
                background-color: #6417a6;
              }
              & + .el-checkbox__label {
                color: #222;
              }
            }
          }
        }
        .course {
          width: 670px;
          .courseOne {
            width: 670px;
            padding-left: 0;
          }
        }
        .price {
          border-right: none;
        }
      }
    }
  }
}
</style>
