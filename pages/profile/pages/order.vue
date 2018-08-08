<template>
  <div style="background:#fff">
    <div class="orderList" v-for="(courseList, index ) in orderData" :key="index">
      <div class="topBar clearfix">
        <span class="fl">订单：{{courseList.order_sn}}</span>
        <span class="fr">{{timestampToTime(courseList.create_time)}}</span>
      </div>
      <div class="list">
        <div class="content">
          <div class="course">
            <!-- 课程列表 -->
            <div class="courseOne" v-if="courseList.orderCurriculumList.length && index<3" v-for="(course,index) in courseList.orderCurriculumList" :key="course.id">
              <div class="courseImg">
                <img @click="goCourseInfo(course,index)" class="fl" :src="course.picture" alt="">
              </div>
              <div class="fl">
                <h4 @click="goCourseInfo(course,index)">{{course.title}}</h4>
                <h6>{{course.curriculum_time}}学时</h6>
                <p>讲师：{{course.teacher_name}}</p>
              </div>
            </div>
            <!-- 项目列表 -->
            <!-- 课程项目显示3个-->
            <div class="courseOne" v-for="(project,index) in courseList.orderProjectList" :key="project.id" v-if="courseList.orderProjectList.length && index<3">
              <div class="courseImg">
                <!-- 项目图标 -->
                <img class="project-img" src="@/assets/images/p4.png" alt="">
                <img @click="goProjectInfo(project)" class="fl" :src="project.picture" alt="">
              </div>
              <div class="fl">
                <h4 @click="goProjectInfo(project)">{{project.title}}</h4>
                <h6>{{project.curriculum_time}}学时</h6>
              </div>
            </div>
            <div class="more" :data="courseList.orderCurriculumList.length+courseList.orderProjectList.length" v-if="(courseList.orderCurriculumList.length+courseList.orderProjectList.length)>3" @click="selectPayApply(courseList, index)">
              查看更多课程>
            </div>
          </div>
          <div class="price height" :style="{height:(courseList.orderCurriculumList.length+courseList.orderProjectList.length) > 3? 3*140+60+'px' :(courseList.orderCurriculumList.length+courseList.orderProjectList.length)*140+'px'}">
            <p>¥{{courseList.order_amount}}</p>
            <p v-if="(courseList.orderCurriculumList.length+courseList.orderProjectList.length<=3)" class="detail" @click="selectPayApply(courseList, index)">订单详情</p>
          </div>
          <div class="status height" :style="{height: (courseList.orderCurriculumList.length+courseList.orderProjectList.length)>3? 3*140+60+'px' :(courseList.orderCurriculumList.length+courseList.orderProjectList.length)*140+'px'}">
            <p class="cancelOrder" v-if="courseList.pay_status === '1'" @click="cancelOrder(courseList.id)">取消订单</p>
            <p class="payReady payed" v-if="courseList.pay_status === '2'">已支付</p>
            <!-- 已完成订单剩余时间 -->
            <p class="payReady" v-if="courseList.pay_status === '2'&&courseList.expire_day>=1">剩余{{courseList.expire_day}}天</p>
            <p class="payReady" v-if="courseList.pay_status === '2'&&courseList.expire_day<1">已过期</p>
            <p class="payClose" v-if="courseList.pay_status === '3'">已关闭</p>
            <p>
              <span class="pay" v-if="courseList.pay_status === '1'" @click="goPay(courseList.id)">立即支付</span>
              <span class="buy" v-if="courseList.pay_status === '3'" @click="goShopping(courseList.id)">立即购买</span>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { order } from '~/lib/v1_sdk/index'
import { mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['orderData'],
  data() {
    return {
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
    goProjectInfo(pro) {
      persistStore.set('projectId', pro.curriculum_id)
      this.$router.push('/project/projectdetail')
    },
    selectPayApply(item, index) {
      persistStore.set('order', item.id)
      this.$emit('goOrderDetail', false)
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
