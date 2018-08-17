<template>
  <!-- 我的订单，我的发票详情 -->
  <div class="orderListDetail">
    <div class="table">
      <div class="tableHeader">
        <span class="goBack" @click="goBack(config.type)">
          <i class="el-icon-arrow-left icon"></i>
        </span>
        <span v-if="config.type==='order'">订单详情</span>
        <span v-else>发票详情</span>
      </div>
      <div class="tableBody">
        <div v-if="config.type==='order'">
          <!-- 订单信息 -->
          <div class="order bodyItem">
            <div class="top">
              订单信息
            </div>
            <div class="bottom">
              <div class="info clearfix">
                <div class="info-fl">
                  <span>订单编号：</span>
                  <span>{{orderDetail.order_sn}}</span>
                </div>
                <div class="info-fr">
                  <span>下单时间：</span>
                  <span>{{changeTime(orderDetail.create_time)}}</span>
                </div>
              </div>

            </div>
          </div>
          <!-- 付款信息 -->
          <div class="pay bodyItem" v-if="orderDetail.payment_method !== ''">
            <div class="top">
              付款信息
            </div>
            <div class="bottom">
              <!-- 快捷支付 -->
              <div v-if="orderDetail.payment_method !== '3'">
                <div class="info clearfix">
                  <div class="info-fl">
                    <span>支付方式：</span>
                    <span>快捷支付</span>
                  </div>
                  <div class="info-fr">
                    <span>支付时间：</span>
                    <span>{{changeTime(orderDetail.pay_time)}}</span>
                  </div>
                </div>
              </div>
              <!-- 公司转账 -->
              <div v-else>
                <div class="info clearfix">
                  <div class="info-fl">
                    <span>支付方式：</span>
                    <span>公司转账</span>
                  </div>
                  <div class="info-fr">
                    <span>户名：</span>
                    <span>{{bankInfo.bank_account}}</span>
                  </div>
                </div>
                <div class="info clearfix">
                  <div class="info-fl">
                    <span>账户：</span>
                    <span>{{bankInfo.card_number}}</span>
                  </div>
                  <div class="info-fr">
                    <span>开户行：</span>
                    <span>{{bankInfo.bank_name}}</span>
                  </div>
                </div>
                <div class="info clearfix">
                  <div class="info-fl">
                    <span>联行号：</span>
                    <span>{{bankInfo.bank_code}}</span>
                  </div>
                  <div class="info-fr">
                    <span>汇款识别码：</span>
                    <span>{{bankInfo.identification_code}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 商品信息 -->
        <div class="goods bodyItem">
          <div class="top">
            <span class="lf">商品信息</span>
            <span class="lm">单价</span>
            <span class="lr">数量</span>
          </div>
          <div class="bottom">
            <div class="bottom-item clearfix" v-if="courseList.length" v-for="course in courseList">
              <div class="courseInfo clearfix">
                <div class="bottomImg">
                  <img class="fl" :src="course.picture" alt="">
                </div>

                <div class="fl">
                  <h4>{{course.title}}</h4>
                  <h6>{{course.curriculum_time}}学时</h6>
                  <p>讲师：{{course.teacher_name}}</p>
                </div>
              </div>
              <div class="coursePrice">
                ￥{{course.present_price}}
              </div>
              <div class="courseOperation">
                <i class="el-icon-close"></i>{{orderDetail.pay_number}}
              </div>
            </div>
            <div class="bottom-item clearfix" v-if="projectList.length" v-for="project in projectList">
              <div class="courseInfo clearfix">
                <div class="bottomImg">
                  <!-- 项目图标 -->
                  <img class="project-img" :src="projectImg" alt="">
                  <img class="fl" :src="project.picture" alt="">
                </div>

                <div class="fl">
                  <h4>{{project.title}}</h4>
                  <h6>{{project.curriculum_time}}学时</h6>
                </div>
              </div>
              <div class="coursePrice">
                ￥{{project.present_price}}
              </div>
              <div class="courseOperation">
                <i class="el-icon-close"></i>{{orderDetail.pay_number}}
              </div>
            </div>

          </div>
          <div class="tableFooter">
            <p>课程数量：{{courseList.length+projectList.length}}门</p>
            <p>学习人数：{{orderDetail.pay_number}}人</p>
            <h4>商品总额：￥{{orderDetail.order_amount}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timestampToTime } from '~/lib/util/helper'
export default {
  props: ['config', 'courseList', 'bankInfo', 'orderDetail', 'projectList'],
  data() {
    return {
      projectImg: 'http://papn9j3ys.bkt.clouddn.com/p4.png' //项目图标
    }
  },
  methods: {
    goBack(type) {
      if (type === 'order') {
        this.$bus.$emit('goBack')
      } else {
        this.$bus.$emit('goTicketBack')
      }
    },
    changeTime(time) {
      return timestampToTime(time)
    }
  }
}
</script>

<style scoped>
</style>
