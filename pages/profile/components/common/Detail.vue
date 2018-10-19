<template>
  <!-- 我的订单，我的发票详情 -->
  <div class="orderListDetail">
    <div class="table">
      <div class="tableHeader">
        <span class="goBack" @click="goBack(config.type)">
          <i class="el-icon-arrow-left icon"></i>
        </span>
        <span @click="goBack(config.type)" v-if="config.type==='order'" class="detailText">订单详情</span>
        <span @click="goBack(config.type)" class="detailText" v-else>发票详情</span>
      </div>
      <div class="tableBody">
        <div v-if="config.type==='order'">
          <!-- 订单信息 -->
          <div class="order bodyItem">
            <div class="top">
              订单信息
            </div>
            <div class="bottom">
              <div class="info clearfix" v-show="!(JSON.stringify(orderDetail) === '{}')">
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
                    <span v-if="orderDetail.payment_method == '1'">微信支付</span>
                    <span v-if="orderDetail.payment_method == '2'">支付宝支付</span>

                  </div>
                  <div class="info-fr">
                    <span>支付时间：</span>
                    <span v-show="!(JSON.stringify(orderDetail) === '{}')">{{changeTime(orderDetail.pay_time)}}</span>
                  </div>
                </div>
              </div>
              <!-- 公司转账 -->
              <div v-else>
                <div class="info clearfix" v-show="!(JSON.stringify(bankInfo) === '{}')">
                  <div class="info-fl">
                    <span>支付方式：</span>
                    <span>对公转账</span>
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
                  <!-- <div class="info-fr">
                    <span>汇款识别码：</span>
                    <span>{{bankInfo.identification_code}}</span>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 商品信息 -->
        <div class="goods bodyItem">
          <div class="top" v-if="orderDetail.order_type === '1'">
            <span class="lf">商品信息</span>
            <span class="lm">单价</span>
            <span class="lr">数量</span>
          </div>
          <div class="top customerProject clearfix" v-if="orderDetail.order_type === '2'">
            <div class="topLeft">
              <span class="">商品信息</span>
            </div>
            <div class="topRight">
              <span>培训方式</span>
              <span>线上课程</span>
              <span>学习人数</span>
              <span>线下课程</span>
              <span>学习天数</span>
              <span class="totalPrice">总价</span>
            </div>
          </div>
          <div class="bottom">
            <!-- 课程 -->
            <div class="bottom-item clearfix" v-if="courseList.length !==0" v-for="course in courseList">
              <div class="courseInfo clearfix">
                <div class="bottomImg">
                  <img class="fl" :src="course.picture" alt="">
                </div>

                <div class="fl">
                  <h4>{{course.title}}</h4>
                  <h6>{{course.curriculum_time}}学时</h6>
                  <!-- <p>导师：{{course.teacher_name}}</p> -->
                </div>
              </div>
              <div class="coursePrice">
                ￥{{course.present_price}}
              </div>
              <div class="courseOperation">
                <i class="el-icon-close"></i>{{orderDetail.pay_number}}
              </div>
            </div>
            <!-- 项目 -->
            <div v-if="orderDetail.order_type === '1'">
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
                <div v-if="courseList.length !==0">
                  <div class="courseOperation">
                    <i class="el-icon-close"></i>{{orderDetail.pay_number}}
                  </div>
                </div>
                <div v-else>
                  <div class="courseOperation" v-if="project.study_type === '1' ">
                    <i class="el-icon-close"></i>{{orderDetail.pay_number}}
                  </div>
                  <div class="courseOperation" v-else>
                    {{orderDetail.pay_number}}人
                  </div>
                </div>

              </div>
            </div>
            <!-- 自定制项目 -->
            <div v-else>
              <div class="bottom-item customerProjectDetail clearfix" v-for="project in projectList">
                <div class="projectInfo">
                  <div class="bottomImg">
                    <!-- 项目图标 -->
                    <img class="project-img" :src="customerProjectImg" alt="">
                    <img class="fl" :src="project.picture" alt="">
                  </div>
                  <div class="fl">
                    <h4>{{project.title}}</h4>
                  </div>
                </div>
                <div class="infoRight">
                  <!-- 培训方式 -->
                  <div class="item" v-if="project.study_type === '1'">线上</div>
                  <div class="item" v-if="project.study_type === '2'">混合</div>
                  <div class="item" v-if="project.study_type === '3'">互动</div>
                  <!-- 线上课程学时 -->
                  <div class="item">{{project.curriculum_time}}学时</div>
                  <!-- 学习人数 -->
                  <div class="item">{{project.study_persion_number}}人</div>
                  <!-- 线下课程学时 -->
                  <div class="item">{{project.offline_study_time}}学时</div>
                  <!-- 学习天数 -->
                  <div class="item">{{project.offline_days}}天</div>
                  <!-- 总价 -->
                  <div class="item price">¥ {{project.present_price}} </div>
                </div>
              </div>
            </div>

          </div>
          <div class="tableFooter" v-if="orderDetail.order_type === '1'">
            <p>商品数量：{{courseList.length+projectList.length}}</p>
            <p>学习人数：{{orderDetail.pay_number}}人</p>
            <h4>商品总额：￥{{orderDetail.order_amount}}</h4>
          </div>
          <div class="tableFooter" v-else>
            <!-- <p>9.5折&nbsp;&nbsp;&nbsp;优惠¥{{(orderDetail.order_amount*(1-0.95)).toFixed(2)}}</p> -->
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
      projectImg: 'http://papn9j3ys.bkt.clouddn.com/p4.png', //项目图标
      customerProjectImg: 'http://papn9j3ys.bkt.clouddn.com/p5.png' //定制项目图标
    }
  },
  methods: {
    goBack(type) {
      if (type === 'order') {
        this.$emit('goBack', true)
      } else {
        this.$emit('goTicketBack', true)
      }
    },
    changeTime(time) {
      return timestampToTime(time)
    }
  }
}
</script>
