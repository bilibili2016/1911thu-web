<template>
  <!-- 按订单开发票 -->
  <div class="ticketOrder">
    <div class="orderList" v-for="(courseList, index ) in orderData" :key="index">
      <div class="topBar clearfix">
        <span class="fl">订单：{{courseList.order_sn}}</span>
        <span class="fr">{{timestampToTime(courseList.create_time)}}</span>
      </div>
      <div class="list">
        <div class="content">
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
    <!-- 定位用 -->
    <div class="bottomPosition" if="bottomPosition"></div>
    <div class="bottomBar" id="bottomBar" ref="bottomBar" :class="{bottomBarFixed:isFixed}">
      <span class="fl">
        <el-checkbox v-model="checkMsg " @change="handleSelectChange() "></el-checkbox>
        全选
      </span>
      <span class="money ">
        <i>2</i> 个订单，
        <strong>共：
          <i>¥138.00</i>
        </strong>
      </span>
      <span class="next ">下一步</span>
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
      index: 0,
      isFixed: false,
      bottomBaroffsetTop: '',
      windowHeight: '',
      headerHeight: '',
      bottomPositionHeight: '',
      restaurants: [],
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
    },
    //bottomBar根据页面滚动位置设置定位
    addClass() {
      if (document.getElementById('bottomPosition')) {
        var bottomPositionHeight = parseInt(
          document.getElementById('bottomPosition').offsetTop + 60 //170:tips本身的高、距离固定元素的下边距、header的高以及10px页面小的误差
        )
      }
      this.scroll = parseInt(
        document.documentElement.scrollTop || document.body.scrollTop
      )
      let scrollIns = parseInt(this.scroll + this.windowHeight)

      if (
        scrollIns > this.bottomBaroffsetTop ||
        scrollIns > bottomPositionHeight
      ) {
        this.isFixed = false
      } else {
        this.isFixed = true
      }
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.headerHeight = document.getElementsByClassName(
      'headerBox'
    )[0].offsetHeight
    this.windowHeight = document.documentElement.clientHeight

    window.addEventListener('scroll', this.addClass)
  },
  watch: {
    headerHeight(val, oldval) {
      this.index++
      if (this.index === 1 && document.getElementById('bottomBar')) {
        this.bottomBaroffsetTop =
          document.getElementById('bottomBar').offsetTop +
          this.headerHeight +
          10
        console.log(this.bottomBaroffsetTop)

        if (this.bottomBaroffsetTop > this.windowHeight) {
          this.isFixed = true
        } else {
          this.isFixed = false
        }
      }
    }
  },
  deactivated() {
    window.removeEventListener('scroll', this.addClass)
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
  .bottomBar {
    height: 60px;
    line-height: 60px;
    background-color: #ebe7ed;
    text-align: right;
    font-size: 16px;
    margin-top: 30px;
    color: #222;
    position: relative;
    &.bottomBarFixed {
      width: 896px;
      position: fixed;
      bottom: 0;
      margin: 0 auto;
    }
    span.fl {
      .el-checkbox {
        padding-right: 18px;
      }
    }
    .next {
      width: 140px;
      height: 60px;
      text-align: center;
      background-color: #6417a6;
      color: #fff;
      vertical-align: top;
    }
    .money {
      margin-right: 40px;
      i {
        color: #ff5f5f;
      }
      strong {
        font-size: 18px;
        font-weight: 400;
        i {
          font-weight: 700;
          font-size: 24px;
        }
      }
    }
  }
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
</style>
