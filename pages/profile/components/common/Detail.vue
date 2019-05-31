<template>
  <!-- 我的订单，我的发票详情 -->
  <div class="orderListDetail">
    <div class="table">
      <div class="tableHeader">
        <span class="goBack" @click="goBack(config.type)">
          <i class="el-icon-arrow-left icon"></i>
        </span>
        <span @click="goBack(config.type)" v-if="config.type==='delete'" class="detailText">订单回收站</span>
        <span @click="goBack(config.type)" v-if="config.type==='order'" class="detailText">订单详情</span>
        <span @click="goBack(config.type)" v-if="config.type==='ticket'" class="detailText">发票详情</span>
      </div>
      <div class="tableBody">
        <div v-if="config.type==='order'">
          <!-- 订单信息 -->
          <div class="order bodyItem">
            <div class="top">订单信息</div>
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
            <div class="top">付款信息</div>
            <div class="bottom">
              <!-- 快捷支付 -->
              <div v-if="orderDetail.payment_method != '3'">
                <div class="info clearfix">
                  <div class="info-fl">
                    <span>支付方式：</span>
                    <span v-if="orderDetail.payment_method == '1'">微信支付</span>
                    <span v-if="orderDetail.payment_method == '2'">支付宝支付</span>
                    <span v-if="orderDetail.payment_method == '4'">账户余额支付</span>
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
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 商品信息 -->
        <div class="goods bodyItem">
          <!-- 课程、vip、课程+项目、线上项目-->
          <div v-if="orderDetail.order_type === '1' ||orderDetail.order_type === '3' ||orderDetail.order_type === '4'|| (orderDetail.order_type === '2'&&courseList.length!=0)  || (orderDetail.order_type === '2'&&orderDetail.project_type === '1' &&orderDetail.study_type =='1')">
            <div class="top">
              <span class="lf">商品信息</span>
              <span class="lm">单价</span>
              <span class="lr">数量</span>
            </div>
            <div class="bottom">
              <!-- 课程 -->
              <div class="bottom-item clearfix" v-if="courseList.length" v-for="(course,index) in courseList" :key="'course'+index">
                <div class="courseInfo clearfix">
                  <div class="bottomImg">
                    <img class :src="course.picture" alt>
                  </div>

                  <div class="fl">
                    <h4>{{course.title}}</h4>
                    <h6 v-if="orderDetail.order_type === '1'">{{course.curriculum_time}}学时</h6>
                    <!-- <p>导师：{{course.teacher_name}}</p> -->
                  </div>
                </div>
                <div class="coursePrice">￥{{course.present_price}}</div>
                <div class="courseOperation">
                  <i class="el-icon-close"></i>
                  {{orderDetail.pay_number}}
                </div>
              </div>
              <!-- 线上项目 -->
              <div class="bottom-item clearfix" v-if="projectList.length" v-for="(project,index) in projectList" :key="'project'+index">
                <div class="courseInfo clearfix">
                  <div class="bottomImg">
                    <!-- 项目图标 -->
                    <img class="project-img" :src="projectImg" alt>
                    <img class :src="project.picture" alt>
                  </div>
                  <div class="fl">
                    <h4>{{project.title}}</h4>
                    <h6>{{project.curriculum_time}}学时</h6>
                  </div>
                </div>
                <div class="coursePrice">￥{{project.present_price}}</div>
                <div>
                  <div class="courseOperation">
                    <i class="el-icon-close"></i>
                    {{orderDetail.pay_number}}
                  </div>
                </div>
              </div>
              <!-- vip -->
              <div class="bottom-item clearfix" v-if="vipList.length" v-for="(vip,index) in vipList" :key="'vip'+index">
                <div class="courseInfo clearfix">
                  <div class="bottomImg">
                    <img class :src="vip.picture" alt>
                  </div>

                  <div class="fl">
                    <h4>{{vip.title}}</h4>
                  </div>
                </div>
                <div class="coursePrice">￥{{vip.present_price}}</div>
                <div class="courseOperation">
                  <i class="el-icon-close"></i>
                  {{orderDetail.pay_number}}
                </div>
              </div>
              <!-- 老师预约订单 -->
              <div class="bottom-item clearfix" v-if="teacherBespokeList.length" v-for="(teacher,index) in teacherBespokeList" :key="'teacher'+index">
                <div class="courseInfo clearfix">
                  <div class="bottomImg">
                    <img class :src="teacher.picture" alt>
                  </div>

                  <div class="fl">
                    <h4>{{teacher.title}}（{{teacher.teacher_name}}）</h4>
                  </div>
                </div>
                <div class="coursePrice">￥{{teacher.present_price}}</div>
                <div class="courseOperation">
                  <i class="el-icon-close"></i>
                  {{orderDetail.pay_number}}
                </div>
              </div>
            </div>
          </div>

          <!-- 标准项目（混合、互动）,定制项目-->
          <!-- <div v-if="orderDetail.order_type === '2' &&courseList.length==0 && orderDetail.study_type !='1'"> -->
          <div v-else>
            <div class="top customerProject clearfix">
              <div class="topLeft">
                <span class>商品信息</span>
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
              <div class="bottom-item customerProjectDetail clearfix" v-for="(project,index) in projectList" :key="'cus'+index">
                <div class="projectInfo">
                  <div class="bottomImg">
                    <!-- 项目图标 -->
                    <!-- 标准 -->
                    <img v-if="orderDetail.project_type==='1'" class="project-img" :src="projectImg" alt>
                    <!-- 定制 -->
                    <img v-if="orderDetail.project_type==='2'" class="project-img" :src="customerProjectImg" alt>
                    <img class :src="project.picture" alt>
                  </div>
                  <div class="fl">
                    <h4 class="projectTitle">{{project.title}}</h4>
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
                  <div class="item">{{orderDetail.pay_number}}人</div>
                  <!-- 线下课程学时 -->
                  <div class="item">{{project.offline_study_time}}学时</div>
                  <!-- 学习天数 -->
                  <div class="item">{{project.offline_days}}天</div>
                  <!-- 总价 -->
                  <div class="item price">￥{{project.present_price}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="tableFooter" v-if="orderDetail.order_type === '1'">
            <p>
              <span class="table_lf">商品数量：</span>
              <span class="table_lr">{{courseList.length+projectList.length+vipList.length}}</span>
            </p>
            <p>
              <span class="table_lf">学习人数：</span>
              <span class="table_lr">{{orderDetail.pay_number}}人</span>
            </p>
            <h4>
              <span class="table_lf">商品总额：</span>
              <span class="table_lr">￥{{orderDetail.order_amount}}</span>
            </h4>
          </div>
          <div class="tableFooter" v-else>
            <!-- <p>9.5折&nbsp;&nbsp;&nbsp;优惠￥{{(orderDetail.order_amount*(1-0.95)).toFixed(2)}}</p> -->
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
  props: [
    'config',
    'courseList',
    'bankInfo',
    'orderDetail',
    'projectList',
    'vipList',
    'teacherBespokeList'
  ],
  data () {
    return {
      projectImg: 'https://static-image.1911edu.com/p4.png', //项目图标
      customerProjectImg: 'https://static-image.1911edu.com/p5.png' //定制项目图标
    }
  },
  methods: {
    goBack (type) {
      if (type == 'delete') {
        this.$emit('goBack', 2)
      } else if (type == 'order') {
        this.$emit('goBack', 1)
      } else {
        this.$emit('goTicketBack', true)
      }
    },
    changeTime (time) {
      return timestampToTime(time)
    }
  },
  mounted(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
</script>
