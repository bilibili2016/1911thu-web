<template>
  <!-- 我的订单，我的发票列表 -->
  <div>
    <div class="orderList" v-for="(courseList, index ) in data" :key="index">
      <div class="topBar clearfix">
        <span class="fl">订单号：{{courseList.order_sn}}</span>
        <span class="fr">{{exchangeTime(courseList.create_time)}}</span>
      </div>
      <div class="list">
        <div class="content">
          <div class="course">
            <!-- 课程列表 -->
            <div class="courseOne" v-if="courseList.orderCurriculumList.length" v-for="(course,index) in courseList.orderCurriculumList">
              <img @click="goCourseInfo(course)" class="fl" :src="course.picture" alt="">
              <div class="fl">
                <h4 @click="goCourseInfo(course)" :title="course.title">{{course.title}}</h4>
                <h6>{{course.curriculum_time}}学时</h6>
                <!-- <p>导师：{{course.teacher_name}}</p> -->
              </div>
            </div>
            <!-- 项目列表 -->
            <div class="courseOne" v-if="courseList.orderProjectList.length" v-for="(project,index) in courseList.orderProjectList">
              <div class="courseImg">
                <!-- 项目图标 -->
                <img v-if="project.type==='2'" class="project-img" src="http://papn9j3ys.bkt.clouddn.com/p5.png" alt="">
                <img v-else class="project-img" src="http://papn9j3ys.bkt.clouddn.com/p4.png" alt="">

                <img @click="goProjrctInfo(project)" class="fl" :src="project.picture" alt="">
              </div>
              <div class="fl">
                <h4 @click="goProjrctInfo(project)" :title="project.title">{{project.title}}</h4>
                <h6>{{project.curriculum_time}}学时</h6>
              </div>
            </div>
            <!-- <div class="more" v-if="(courseList.orderCurriculumList.length+courseList.orderProjectList.length)>3" @click="selectPayApply(courseList,config.type)">
              查看更多课程>
            </div> -->
          </div>
          <div class="price height" :style="{height:computedHeight(courseList.orderCurriculumList,courseList.orderProjectList)}">
            <p>¥{{courseList.order_amount}}</p>
            <!-- 订单 -->
            <p v-if="config.type==='order'" class="detail" @click="selectPayApply(courseList,config.type)">订单详情</p>
          </div>
          <!-- 订单 -->
          <div v-show="config.type==='order'" class="status height" :style="{height: computedHeight(courseList.orderCurriculumList,courseList.orderProjectList)}">
            <p class="cancelOrder" v-if="courseList.pay_status === '1'" @click="cancelOrder(courseList.id)">取消订单</p>
            <p class="payReady payed" v-if="courseList.pay_status === '2' || courseList.pay_status === '6'">已支付</p>
            <p class="cancelOrder" v-if="courseList.pay_status === '5'" style="cursor: inherit">审核中</p>
            <!-- <p class="cancelOrder" v-if="courseList.pay_status === '6'" style="cursor: inherit">退款中</p> -->

            <!-- 已完成订单剩余时间 -->
            <p class="payReady" v-if="(courseList.pay_status === '2'  || courseList.pay_status === '6')&&courseList.expire_day>=1">剩余{{courseList.expire_day}}天</p>
            <p class="payReady" v-if="(courseList.pay_status === '2'  || courseList.pay_status === '6')&&courseList.expire_day<1">已过期</p>
            <p class="payClose" v-if="courseList.pay_status === '3' || courseList.pay_status === '4'">已关闭</p>
            <p>
              <span class="pay" v-if="courseList.pay_status === '1'" @click="goPay(courseList.id)">立即支付</span>
              <span class="buy" v-if="courseList.pay_status === '3' || courseList.pay_status === '4'" @click="goShopping(courseList.id,courseList)">立即购买</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timestampToTime } from '@/lib/util/helper'
import { order } from '~/lib/v1_sdk/index'
import { mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { message } from '@/lib/util/helper'
export default {
  props: ['data', 'config'],
  data() {
    return {
      orderForm: {
        pages: 1,
        limits: 20,
        payStatus: null,
        ids: null
      },
      kidForm: {
        kid: ''
      },
      responseData: { type: true, res: '' }
    }
  },
  methods: {
    ...mapActions('auth', ['setGid', 'setKid']),
    detection() {
      this.$emit('detection')
    },
    //根据列表长度计算高度
    computedHeight(course, project) {
      let height = (course.length + project.length) * 140 + 'px'
      return height
    },
    //计算项目列表显示数量 现在默认全部显示，暂时用不到该方法
    computedLength(course, project, index) {
      let projectLength = course.length > 3 ? 0 : 3 - course.length
      if (index < projectLength) {
        return true
      } else {
        return false
      }
    },
    //取消订单
    cancelOrder(id) {
      this.orderForm.ids = id
      order.cancelOrder(this.orderForm).then(response => {
        if (response.status === 0) {
          this.$emit('handleUpdate', true)
          message(this, 'success', '订单已取消！')
        } else if (response.status === 100008) {
          this.responseData.res = response
          this.$bus.$emit('reLoginAlertPop', this.responseData)
          return false
        } else {
          message(this, 'error', response.msg)
        }
      })
    },
    //去支付
    goPay(id) {
      this.$router.push({
        path: '/shop/wepay',
        query: {
          order: id,
          attach: 1
        }
      })
    },
    //去购物车
    goShopping(id, courseList) {
      // 自定义项目和混合项目不加入购物车，直接购买
      if (
        courseList.orderProjectList.length > 0 &&
        courseList.orderProjectList[0].type === '2'
      ) {
        this.goAffirmorder(courseList.orderProjectList[0].id)
      } else {
        // 混合项目不加入购物车，直接购买
        if (
          courseList.orderProjectList.length > 0 &&
          (courseList.orderProjectList[0].study_type === '2' ||
            courseList.orderProjectList[0].study_type === '3')
        ) {
          this.goAffirmorder(courseList.orderProjectList[0].id)
        } else {
          //普通项目 加入购物车购买
          this.orderForm.ids = id
          order.buyAgain(this.orderForm).then(response => {
            if (response.status === 0) {
              this.$router.push('/shop/shoppingCart')
            } else {
              message(this, 'error', response.msg)
            }
          })
        }
      }
    },
    goAffirmorder(id) {
      this.$router.push({
        path: '/shop/affirmorder',
        query: { id: id }
      })
    },
    //课程详情
    goCourseInfo(item, index) {
      this.kidForm.kids = item.id
      this.$router.push({
        path: '/course/coursedetail',
        query: {
          kid: item.id,
          bid: '',
          page: 0
        }
      })
    },
    //项目详情
    goProjrctInfo(item) {
      this.$router.push({
        path: '/project/projectdetail',
        query: {
          kid: item.id,
          type: item.type
        }
      })
    },
    //列表详情
    selectPayApply(item, type) {
      persistStore.set('order', item.id)
      if (type == 'order') {
        this.$bus.$emit('goOrderDetail', true)
      } else if (type == 'ticket') {
        // this.$bus.$emit('goTicketDetail', false)
        this.$bus.$emit('goOrderDetail', false)
      }
    },
    // 时间戳转日期格式
    exchangeTime(time) {
      return timestampToTime(time)
    }
  }
}
</script>

