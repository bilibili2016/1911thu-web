<template>
  <div>
    <v-banner :config="bconfig" :isUpdate="isUpdate" :isShowUpAvtor="activeTab=='tab-fifth'"></v-banner>
    <div class="center-tab center profile bigTab" style="min-height:800px;">
      <el-tabs :tab-position="tabPosition" v-model="activeTab" @tab-click="handleClick">
        <!-- 我的首页 -->
        <el-tab-pane class="my-home" name="tab-first">
          <span slot="label" class="tabList">
            <i class="icon-home"></i> 我的首页</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>最近学习</span>
            </div>
            <div class="content">
              <v-list v-if="studyData  && studyData.length>0" :data="studyData" :config="configZero"></v-list>
              <div v-else class="noCourse fillTop">
                <img :src="noMsgImg" alt="">
                <h4>抱歉，现在还没有学习过的课程呦~</h4>
                <!-- <p>去学习</p> -->
              </div>

            </div>
          </el-card>
        </el-tab-pane>
        <!-- 我的课程 -->
        <el-tab-pane class="my-course" name="tab-second">
          <span slot="label" class="tabList">
            <i class="icon-course"></i> 我的课程</span>
          <el-card class="changeNav">
            <!-- <el-select v-model="value" @change="changeNav">
              <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value">
              </el-option>
            </el-select> -->
            <el-tabs v-model="activeNames" @tab-click="handleActive">
              <!-- 我的课程 学习中 -->
              <el-tab-pane label="学习中" name="first">
                <v-list v-if="newDataing  && newDataing.length>0" :data="newDataing" :config="configOne"></v-list>
                <div class="pagination" v-if="newDataing  && newDataing.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="pagemsg1.pagesize" :pager-count="5" :page-count="pagemsg1.pagesize" :current-page="pagemsg1.page" :total="pagemsg1.total" @current-change="studyPageChange"></el-pagination>
                </div>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有学习中的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <!-- 我的课程 已完成 -->
              <el-tab-pane label="已完成" name="second">
                <v-list v-if="newDataReady && newDataReady.length>0" :data="newDataReady" :config="configTwo"></v-list>
                <div class="pagination" v-if="newDataReady && newDataReady.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="pagemsg2.pagesize" :pager-count="5" :page-count="pagemsg2.pagesize" :current-page="pagemsg2.page" :total="pagemsg2.total" @current-change="readyStudyPageChange"></el-pagination>
                </div>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有已经完成的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <!-- 我的课程 已过期 -->
              <el-tab-pane label="已过期" name="fourth">
                <v-list v-if="overTimeData && overTimeData.length>0" :data="overTimeData" :config="configFour"></v-list>
                <div class="pagination" v-if="overTimeData && overTimeData.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="pagemsg2.pagesize" :pager-count="5" :page-count="pagemsg2.pagesize" :current-page="pagemsg2.page" :total="pagemsg2.total" @current-change="readyStudyPageChange"></el-pagination>
                </div>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有已过期的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <!-- 我的课程 我的收藏 -->
              <el-tab-pane label="我的收藏" name="third">
                <v-list v-if="collectionData && collectionData.length>0" :data="collectionData" :config="configZero"></v-list>
                <div class="pagination" v-if="collectionData && collectionData.length>0">
                  <el-pagination background layout="prev, pager, next" :page-size="pagemsg3.pagesize" :pager-count="5" :page-count="pagemsg3.pagesize" :current-page="pagemsg3.page" :total="pagemsg3.total" @current-change="collectionPageChange"></el-pagination>
                </div>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有已经收藏的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>

        </el-tab-pane>
        <!-- 我的订单 -->
        <el-tab-pane class="my-course my-order" name="tab-third">
          <span slot="label" class="tabList">
            <i class="icon-order"></i> 我的订单</span>
          <!-- 订单 -->
          <el-card v-if="showOrderList">
            <el-tabs v-model="activeOrder">
              <el-tab-pane label="全部" name="orderFirst">
                <v-order v-if="allOrderData  && allOrderData.length>0" :orderData="allOrderData" :config="configOne" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail" v-loading="allOrderLoad"></v-order>
                <div class="content noOrder" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane name="orderSecond">
                <span class="payCut" slot="label">未完成
                  <i v-if="unfinishedOrderData && unfinishedOrderData.length>0">{{unfinishedOrderData.length}}</i>
                </span>
                <v-order v-if="unfinishedOrderData && unfinishedOrderData.length>0" :orderData="unfinishedOrderData" @handleUpdate="getUpdateMsg" @goOrderDetail="getOrderDetail" v-loading="unfinishedOrderLoad"></v-order>
                <div class="content noOrder" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane name="orderThird">
                <span class="payOk" slot="label">已完成
                </span>
                <v-order v-if="readyOrderData && readyOrderData.length>0" :orderData="readyOrderData" @goOrderDetail="getOrderDetail" v-loading="readyOrderLoad"></v-order>
                <div class="content noOrder" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane name="orderFour">
                <span class="payOff" slot="label">已失效
                </span>
                <v-order v-if="invalidOrderData && invalidOrderData.length>0" :orderData="invalidOrderData" @goOrderDetail="getOrderDetail" v-loading="invalidOrderLoad"></v-order>
                <div class="content noOrder" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>

          <!-- 订单详情 -->
          <div class="orderListDetail" v-else>
            <div class="table">
              <div class="tableHeader">
                <span class="goBack" @click="goBack">
                  <i class="el-icon-arrow-left icon"></i>
                </span>
                <span>订单详情</span>
              </div>
              <div class="tableBody">
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
                        <span>{{timestampToTime(orderDetail.create_time)}}</span>
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
                          <span>{{timestampToTime(orderDetail.pay_time)}}</span>
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
                <!-- 商品信息 -->
                <div class="goods bodyItem">
                  <div class="top">
                    <span class="lf">商品信息</span>
                    <span class="lm">单价</span>
                    <span class="lr">数量</span>
                  </div>
                  <div class="bottom">
                    <div class="bottom-item clearfix" v-if="courseList.length" v-for="course in courseList" :key="course.id">
                      <div class="courseInfo clearfix">
                        <div class="bottomImg">

                          <img class="fl" :src="course.picture" alt="">
                        </div>

                        <div class="fl">
                          <h4>{{course.name}}</h4>
                          <h6>{{course.curriculum_time}}学时</h6>
                          <p>讲师：{{course.teacher_name}}</p>
                        </div>
                      </div>
                      <div class="coursePrice">
                        ￥{{course.price}}
                      </div>
                      <div class="courseOperation">
                        <i class="el-icon-close"></i>{{orderDetail.pay_number}}
                      </div>
                    </div>
                    <div class="bottom-item clearfix" v-if="projectList.length" v-for="project in projectList" :key="project.id">
                      <div class="courseInfo clearfix">
                        <div class="bottomImg">
                          <!-- 项目图标 -->
                          <img class="project-img" :src="projectImg" alt="">
                          <img class="fl" :src="project.picture" alt="">
                        </div>

                        <div class="fl">
                          <h4>{{project.name}}</h4>
                          <h6>{{project.curriculum_time}}学时</h6>
                        </div>
                      </div>
                      <div class="coursePrice">
                        ￥{{project.price}}
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
        </el-tab-pane>
        <!-- 我的消息 -->
        <el-tab-pane class="my-info" name="tab-fourth">
          <span slot="label" class="tabList">
            <i class="icon-message"></i> 我的消息</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>我的消息</span>
            </div>
            <v-info @noMsg="isNoMyMsg"></v-info>
            <div class="content" v-show="noMyMsg">
              <div class="noCourse" v-if="noMyMsg">
                <img :src="noMsgImg" alt="">
                <h4>抱歉，现在还没有我的消息呦~</h4>
                <!-- <p>去学习</p> -->
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 个人设置 -->
        <el-tab-pane name="tab-fifth">
          <span slot="label" class="tabList">
            <i class="icon-set"></i> 个人设置</span>
          <v-person @update="updateUserInfo"></v-person>
        </el-tab-pane>
        <!-- 绑定Id -->
        <!-- <el-tab-pane name="tab-sixth">
          <span slot="label" class="tabList">
            <i class="icon-bind"></i> 课程兑换码</span>
          <v-bind></v-bind>
        </el-tab-pane> -->
        <!-- 课程码管理 -->
        <el-tab-pane class="my-course my-invitation" name="tab-sixth">
          <span slot="label" class="tabList">
            <i class="icon-code"></i> 兑换码管理</span>
          <el-tabs v-model="courseCodeNames" @tab-click="handleCourseCode">
            <!-- 课程码管理 课程码列表 -->
            <el-tab-pane label="课程码列表" name="first">
              <v-invitation :codeData="codeData"></v-invitation>
            </el-tab-pane>
            <!-- 课程码管理 兑换详情 -->
            <el-tab-pane label="兑换详情" name="second">
              <v-conversion :recordData="recordData"></v-conversion>
            </el-tab-pane>
            <!-- 课程码管理 我的兑换 -->
            <el-tab-pane label="我的兑换" name="fourth">
              <v-binding :invitationCodeList='invitationCodeList'></v-binding>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>

        <!-- 发票管理 -->
        <el-tab-pane class="my-course my-order" name="tab-seventh">
          <span slot="label" class="tabList">
            <i class="icon-order"></i> 发票管理</span>
          <!-- 发票 -->
          <el-card v-if="showTicketList">
            <el-tabs v-model="activeOrder">
              <el-tab-pane label="按订单开发票" name="orderFirst">
                <v-tkorder v-if="unTicketData  && unTicketData.length>0" :orderData="unTicketData" @handleUpdate="getUpdateMsg" @goTicketDetail="getTicketDetail" v-loading="readyOrderLoad"></v-tkorder>
                <div class="content noOrder" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，您还没有订单需要开票</h4>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane name="orderSecond" label="开票历史">
                <v-tkhistory v-if="historyOrderData && historyOrderData.length>0" :orderData="historyOrderData" @handleUpdate="getUpdateMsg" v-loading="unfinishedOrderLoad"></v-tkhistory>
                <div class="content noOrder" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有已经开具的开票~</h4>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane name="orderThird">
                <span class="payOk" slot="label">开票规则
                </span>
                <v-tkrules v-loading="readyOrderLoad"></v-tkrules>
                <!-- <div class="content noOrder" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，没有更多的订单了~</h4>
                  </div>
                </div> -->
              </el-tab-pane>
            </el-tabs>
          </el-card>
          <!-- 发票详情 -->
          <div class="orderListDetail" v-else>
            <div class="table">
              <div class="tableHeader">
                <span class="goBack" @click="goTicketBack">
                  <i class="el-icon-arrow-left icon"></i>
                </span>
                <span>发票详情</span>
              </div>
              <div class="tableBody">

                <!-- 商品信息 -->
                <div class="goods bodyItem">
                  <div class="top">
                    <span class="lf">商品信息</span>
                    <span class="lm">单价</span>
                    <span class="lr">数量</span>
                  </div>
                  <div class="bottom">
                    <div class="bottom-item clearfix" v-if="courseList.length" v-for="(course,index) in courseList" :key="index">
                      <div class="courseInfo clearfix">
                        <div class="bottomImg">

                          <img class="fl" :src="course.picture" alt="">
                        </div>

                        <div class="fl">
                          <h4>{{course.name}}</h4>
                          <h6>{{course.curriculum_time}}学时</h6>
                          <p>讲师：{{course.teacher_name}}</p>
                        </div>
                      </div>
                      <div class="coursePrice">
                        ￥{{course.price}}
                      </div>
                      <div class="courseOperation">
                        <i class="el-icon-close"></i>{{orderDetail.pay_number}}
                      </div>
                    </div>
                    <div class="bottom-item clearfix" v-if="projectList.length" v-for="(project,index) in projectList" :key="project.id">
                      <div class="courseInfo clearfix">
                        <div class="bottomImg">
                          <!-- 项目图标 -->
                          <img class="project-img" :src="projectImg" alt="">
                          <img class="fl" :src="project.picture" alt="">
                        </div>

                        <div class="fl">
                          <h4>{{project.name}}</h4>
                          <h6>{{project.curriculum_time}}学时</h6>
                        </div>
                      </div>
                      <div class="coursePrice">
                        ￥{{project.price}}
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
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 专属邀请码弹框 -->
    <div class="invitationCodeBox">
      <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center :show-close="false">
        <span class="text">绑定优惠码，好课看不停</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="invitationConfim">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import CustomCard from '@/components/card/Card.vue'
import CustomList from '@/pages/profile/components/list.vue'
import Banner from '@/components/common/Banner.vue'
import PersonalSet from '@/pages/profile/components/personalset.vue'
import Binding from '@/pages/profile/components/bindid'
import Info from '@/pages/profile/components/info'
import Order from '@/pages/profile/pages/order'
import Invitation from '@/pages/profile/pages/invitation'
import Conversion from '@/pages/profile/components/conversion'
import Bind from '@/pages/profile/components/binding'
import TicketOrder from '@/pages/profile/pages/ticketOrder'
import TicketHistory from '@/pages/profile/pages/ticketHistory'
import TicketRules from '@/pages/profile/pages/ticketRules'
import {
  other,
  home,
  checkedCourse,
  conversion,
  tickethistory
} from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  components: {
    'v-card': CustomCard,
    'v-list': CustomList,
    'v-person': PersonalSet,
    'v-bind': Binding,
    'v-info': Info,
    'v-banner': Banner,
    'v-order': Order,
    'v-invitation': Invitation,
    'v-conversion': Conversion,
    'v-binding': Bind,
    'v-tkorder': TicketOrder,
    'v-tkhistory': TicketHistory,
    'v-binding': Bind,
    'v-tkrules': TicketRules
  },
  data() {
    return {
      projectImg: require('@/assets/images/p4.png'), //项目图标
      isShowNoCourse: false,
      noMyMsg: false,
      study: false,
      avator: 'http://papn9j3ys.bkt.clouddn.com/profile_avator01.png',
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
      tabPosition: 'left',
      activeTab: 'tab-first',
      activeNames: 'first',
      courseCodeNames: 'first',
      activeOrder: 'orderFirst',
      bconfig: {
        banner_type: 'profile'
      },
      configZero: {
        card_type: 'shoucang',
        card: 'home',
        position: 'personal'
      },
      configOne: {
        card_type: 'profile',
        card: 'learning'
      },
      configTwo: {
        card_type: 'profile',
        card: 'already'
      },
      configFour: {
        card_type: 'profile',
        card: 'overtime'
      },
      newData: [],
      styleForm: {
        types: 1,
        categoryId: 0,
        pages: 0,
        limits: 12
      },
      pagemsg1: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      pagemsg2: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      pagemsg3: {
        page: 1,
        pagesize: 12,
        total: 12
      },
      studyData: [],
      newDataing: [],
      newDataReady: [],
      allOrderData: [],
      unfinishedOrderData: [],
      readyOrderData: [],
      unTicketData: [],
      invalidOrderData: [],
      historyOrderData: [],
      codeData: [],
      recordData: [],
      courseList: [],
      projectList: [],
      companyData: null,
      options: [],
      value: '全部',
      collectionForm: {
        categoryId: 0,
        pages: 1,
        limits: 12
      },
      codeListForm: {
        pages: 1,
        limits: null
      },
      orderForm: {
        pages: 1,
        limits: null,
        payStatus: null,
        ids: null
      },
      collectionData: [],
      orderDetail: {}, //订单详情信息
      bankInfo: {}, //公司打款信息

      showOrderList: true,
      showTicketList: true,
      isUpdate: false,
      allOrderLoad: true,
      unfinishedOrderLoad: true,
      readyOrderLoad: true,
      invalidOrderLoad: true,
      historyOrderLoad: true,
      overTimeData: [],
      centerDialogVisible: false,
      invitationCodeList: []
    }
  },
  computed: {
    ...mapState('auth', ['token', 'gid']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    // 获取我的订单
    getUpdateMsg(msg) {
      if (msg === true) {
        this.getAllOrderData()
        this.getUnfinishedOrderData()
        this.getInvalidOrderData()
      }
    },
    // 获取订单详情
    getOrderDetail(msg) {
      if (msg === false) {
        this.showOrderList = false
        this.curriculumPayApply()
      }
    },
    //获取发票详情
    getTicketDetail(msg) {
      if (msg === false) {
        this.showTicketList = false
        this.curriculumPayApply()
      }
    },
    // 我的消息空页面展示
    isNoMyMsg(isShow) {
      this.noMyMsg = isShow
    },
    // 切换展示个人信息
    updateUserInfo(flag) {
      this.isUpdate = flag
    },
    // 订单详情 返回上一步到我的订单
    goBack() {
      this.showOrderList = true
    },
    //发票详情 返回上一步
    goTicketBack() {
      this.showTicketList = true
    },
    // 切换tab时保存tab的name刷新就还是在这个tab
    handleClick(item) {
      // name
      persistStore.set('gid', item.name)
    },
    // 切换我的课程 子类
    handleActive(item) {
      this.value = '全部'
      if (item.name == 'first') {
        this.pagemsg1.total = 1
        this.studyCurriculumList()
      } else if (item.name == 'second') {
        this.pagemsg2.total = 1
        this.readyStudyCurriculumList()
      } else if (item.name == 'third') {
        this.pagemsg3.total = 1
        this.collectionList()
      } else if (item.name == 'fourth') {
        this.pagemsg3.total = 1
        this.overStudyCurriculumList()
      }
    },
    handleCourseCode(item) {},
    // 切换 我的学习中分类
    changeNav(item) {
      if (this.activeNames == 'third') {
        // 我的课程 收藏的项目
        this.collectionForm.categoryId = item
        return new Promise((resolve, reject) => {
          home.collectionList(this.collectionForm).then(response => {
            this.collectionData = response.data.curriculumList
            this.pagemsg2.total = response.data.pageCount
            resolve(true)
          })
        })
      } else {
        if (this.activeNames == 'first') {
          // 我的课程 学习中的项目
          this.styleForm.types = 1
          this.styleForm.categoryId = item
          this.styleForm.pages = 1
          this.styleForm.limits = 12
          return new Promise((resolve, reject) => {
            home.studyCurriculumList(this.styleForm).then(response => {
              this.newDataing = response.data.curriculumList
              this.pagemsg1.total = response.data.pageCount
              for (let item of response.data.curriculumList) {
                item.percent = Number(item.percent)
              }
              resolve(true)
            })
          })
        } else if (this.activeNames == 'second') {
          // 我的课程 已完成的项目
          this.styleForm.types = 2
          this.styleForm.categoryId = item
          this.styleForm.pages = 1
          this.styleForm.limits = 12
          return new Promise((resolve, reject) => {
            home.studyCurriculumList(this.styleForm).then(response => {
              this.newDataReady = response.data.curriculumList
              this.pagemsg2.total = response.data.pageCount
              resolve(true)
            })
          })
        } else if (this.activeNames == 'fourth') {
          // 我的课程 已过期的项目
          this.styleForm.categoryId = item
          this.styleForm.pages = 1
          this.styleForm.limits = 12
          this.pagemsg2.page = 1
          this.styleForm.types = 4
          return new Promise((resolve, reject) => {
            home.studyCurriculumList(this.styleForm).then(response => {
              this.overTimeData = response.data.curriculumList
              for (var i = 0; i < this.overTimeData.length; i++) {
                this.$set(this.overTimeData[i], 'overtime', true)
              }
              resolve(true)
            })
          })
        }
      }
    },
    // 获取我的学习右侧的分类
    childCategoryList() {
      return new Promise((resolve, reject) => {
        home.childCategoryList().then(response => {
          if (response.status === 0) {
            response.data.categoryList.forEach((element, i) => {
              this.options[i] = {}
              this.options[i].value = element.id
              this.options[i].label = element.category_name
            })
          }
          resolve(true)
        })
      })
    },
    // 我的学习 学习中
    studyCurriculumList() {
      this.styleForm.types = 1
      this.styleForm.categoryId = 0
      this.styleForm.pages = 1
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.newDataing = response.data.curriculumList
          this.pagemsg1.total = response.data.pageCount
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    // 学习中 分页切换
    studyPageChange(val) {
      this.pagemsg1.page = val
      this.styleForm.pages = val
      this.styleForm.types = 1
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.newDataing = response.data.curriculumList
          this.pagemsg1.total = response.data.pageCount
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    // 我的首页 最近学习
    studydataList() {
      this.styleForm.types = 3
      this.styleForm.pages = 0
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.studyData = response.data.curriculumList
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    // 我的首页 已完成
    readyStudyCurriculumList() {
      this.styleForm.types = 2
      this.styleForm.categoryId = 0
      this.styleForm.pages = 1
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.newDataReady = response.data.curriculumList
          this.pagemsg2.total = response.data.pageCount
          resolve(true)
        })
      })
    },
    // 我的课程 已过期的项目
    overStudyCurriculumList() {
      this.pagemsg2.page = 1
      this.styleForm.categoryId = 0
      this.styleForm.pages = 1
      this.styleForm.types = 4
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.overTimeData = response.data.curriculumList
          for (var i = 0; i < this.overTimeData.length; i++) {
            this.$set(this.overTimeData[i], 'overtime', true)
          }
          resolve(true)
        })
      })
    },
    // 已完成 分页切换
    readyStudyPageChange(val) {
      this.pagemsg2.page = val
      this.styleForm.pages = val
      this.styleForm.types = 1
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.newDataReady = response.data.curriculumList
          this.pagemsg2.total = response.data.pageCount
          resolve(true)
        })
      })
    },
    // 我的学习 收藏列表
    collectionList() {
      this.collectionForm.categoryId = 0
      return new Promise((resolve, reject) => {
        home.collectionList(this.collectionForm).then(response => {
          this.collectionData = response.data.curriculumList
          this.pagemsg3.total = response.data.pageCount
          resolve(true)
        })
      })
    },
    // 收藏列表 分页切换
    collectionPageChange(val) {
      this.pagemsg3.page = val
      this.collectionForm.pages = val
      return new Promise((resolve, reject) => {
        home.collectionList(this.collectionForm).then(response => {
          this.collectionData = response.data.curriculumList
          this.pagemsg3.total = response.data.pageCount
          resolve(true)
        })
      })
    },
    // 我的订单 全部
    getAllOrderData() {
      this.orderForm.payStatus = 0
      return new Promise((resolve, reject) => {
        home.getAllOrderData(this.orderForm).then(response => {
          this.allOrderData = response.data.orderList
          this.allOrderLoad = false
          resolve(true)
        })
      })
    },
    // 我的订单 待支付
    getUnfinishedOrderData() {
      this.orderForm.payStatus = 1
      return new Promise((resolve, reject) => {
        home.getAllOrderData(this.orderForm).then(response => {
          this.unfinishedOrderData = response.data.orderList
          this.unfinishedOrderLoad = false
          resolve(true)
        })
      })
    },
    // 我的订单 已支付
    getReadyOrderData() {
      this.orderForm.payStatus = 2
      return new Promise((resolve, reject) => {
        home.getAllOrderData(this.orderForm).then(response => {
          this.readyOrderData = response.data.orderList
          this.readyOrderLoad = false
          resolve(true)
        })
      })
    },

    // 我的订单 取消
    getInvalidOrderData() {
      this.orderForm.payStatus = 3

      return new Promise((resolve, reject) => {
        home.getAllOrderData(this.orderForm).then(response => {
          this.invalidOrderData = response.data.orderList
          this.invalidOrderLoad = false
          resolve(true)
        })
      })
    },
    //未开发票列表
    getUnTicketData() {
      this.orderForm.payStatus = 2
      home.orderNotInvoice().then(response => {
        this.unTicketData = response.data.orderList
        this.readyOrderLoad = false
        console.log(this.unTicketData)
      })
    },
    // 开票历史
    getHistoryOrderData() {
      home.tickethistory().then(response => {
        this.historyOrderData = response.data.invoiceList
        this.historyOrderLoad = false
      })
    },
    // 获取专属邀请码列表
    getCodeList() {
      return new Promise((resolve, reject) => {
        home.getCodeList(this.codeListForm).then(response => {
          this.codeData = response.data.orderInvitationCodeList
          resolve(true)
        })
      })
    },
    // 专属邀请码 邀请记录
    getRecordList() {
      return new Promise((resolve, reject) => {
        conversion.getRecordList(this.codeListForm).then(response => {
          this.recordData = response.data.usedInvitationCodeList
          var that = this
          this.recordData.forEach(function(v, i, arr) {
            v.create_time = that.timestampToTime(v.create_time)
          })
          resolve(true)
        })
      })
    },
    // 获取已经添加的课程兑换码
    getUsedInvitationCodeList() {
      home.getUsedInvitationCodeList().then(response => {
        this.invitationCodeList = response.data.usedInvitationCodeList
      })
    },
    // 格式化时间戳
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
    // 订单详情
    curriculumPayApply() {
      this.orderForm.ids = persistStore.get('order')
      return new Promise((resolve, reject) => {
        home.curriculumPayApply(this.orderForm).then(response => {
          if (response.status === 0) {
            this.courseList = response.data.orderCurriculumList
            this.projectList = response.data.orderProjectList
            this.orderDetail = response.data.orderDetail
            this.bankInfo = response.data.bankInfo
          }
          resolve(true)
        })
      })
    },
    // 判断是否显示绑定邀请码弹框
    getAlertbox() {
      if (
        Number(persistStore.get('paynumber')) > 1 &&
        persistStore.get('payComplete')
      ) {
        if (!persistStore.get('paynumbermsg')) {
          this.centerDialogVisible = true
        }
      }
    },
    // 确认提示框
    invitationConfim() {
      this.centerDialogVisible = false
      persistStore.set('paynumbermsg', '1')
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.studydataList()
      this.studyCurriculumList()
      this.readyStudyCurriculumList()
      this.childCategoryList()
      this.collectionList()
      this.getAllOrderData()
      this.getUnfinishedOrderData()
      this.getReadyOrderData()
      this.getInvalidOrderData()
      this.getCodeList()
      this.getRecordList()
      this.curriculumPayApply()
      this.getHistoryOrderData()
      this.getUnTicketData()
      // this.getOverTime()
      //过期的我的课程
      this.overStudyCurriculumList()
      // 判断企业多份是否弹出框
      // if (!persistStore.get('paynumbermsg')) {
      this.getAlertbox()
      this.getUsedInvitationCodeList()
    }
    this.$bus.$emit('bannerShow', false)
    this.activeTab = this.gid
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    if (this.$route.query.tab) {
      this.activeTab = this.$route.query.tab
    }
    this.$bus.$on('studyCourse', data => {
      this.studyCurriculumList()
    })
    this.$bus.$on('reGetCode', data => {
      this.getUsedInvitationCodeList()
    })
  },
  created() {
    this.$bus.$on('selectProfileIndex', data => {
      this.activeTab = data
    })
  }
}
</script>
<style scope lang="scss">
.bigTab {
  width: 1140px;
  & > div > div.el-tabs__content {
    width: 926px;
    padding: 15px;
    margin-top: -15px;
    box-shadow: none;
    .changeNav {
      position: relative;
      .el-select {
        position: absolute;
        right: 0;
        top: 9px;
        z-index: 5;
        .el-input__inner {
          border: none;
          padding: 0;
          text-align: center;
        }
      }
    }
    .pagination {
      margin: 10px 0 40px;
    }
  }
  &.profile .my-course.my-order {
    overflow: initial;
  }
  &.profile .my-course#pane-tab-third .el-tabs__content,
  &.profile .my-course#pane-tab-seventh .el-tabs__content {
    overflow: initial;
  }
  &.profile .my-course .el-tabs__header {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  #pane-tab-third .el-tabs__header,
  #pane-tab-seventh .el-tabs__header {
    box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
  }
  #pane-tab-sixth {
    box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
    border-radius: 6px;
    overflow: initial;
    .el-tabs__content {
      overflow-y: auto;
    }
    overflow: hidden;
  }
  .el-tabs__content {
    .el-tabs__item {
      span {
        position: relative;
        i {
          position: absolute;
          top: 5px;
          right: -18px;
          width: 18px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          border-radius: 50%;
          font-size: 12px;
          color: #fff;
          display: inline-block;
          background-color: #ff5f5f;
        }
      }
    }
  }
  .orderListDetail {
    //订单列表详情
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
    .table {
      .tableHeader {
        height: 55px;
        line-height: 55px;
        background-color: #fff;
        // color: #222;
        border-bottom: 1px solid #e8d6f7;
        span {
          vertical-align: middle;
        }
        .goBack {
          font-size: 18px;
          font-weight: 800;
          margin: 0 15px 0 30px;
          color: #6417a6;
          cursor: pointer;
        }
      }
      .tableBody {
        padding: 20px 30px 40px 30px;
        .bodyItem {
          border: 1px solid #e8d6f7;
          margin-bottom: 20px;
          .top {
            height: 60px;
            line-height: 60px;
            background-color: #ebe7ed;
            color: #6417a6;
            font-size: 16px;
            padding-left: 30px;
          }
          .bottom {
            background-color: #fafafa;
            padding: 0 50px 0 30px;

            .info {
              height: 50px;
              line-height: 50px;
              font-size: 14px;
              // color: #222;
              .info-fr,
              .info-fl {
                width: 50%;
                float: left;
              }
            }
          }
        }
        .goods {
          .top {
            padding-right: 50px;
            .lf {
              width: 80%;
            }
            .lm {
              width: 10%;
              text-align: center;
            }
            .lr {
              width: 10%;
              text-align: right;
            }
          }
          .bottom {
            padding: 0;
            .bottom-item {
              border-bottom: 1px solid #e8d6f7;
              padding: 0 50px 0 30px;
            }
            .courseInfo {
              float: left;
              width: 80%;
              margin-top: 20px;
              img {
                width: 160px;
                height: 100px;
                margin-right: 20px;
              }
              .bottomImg {
                position: relative;
                .project-img {
                  width: 70px;
                  height: 30px;
                  position: absolute;
                  top: 5px;
                  left: -4px;
                }
              }
              h4 {
                // width: 440px;
                height: 42px;
                font-size: 16px;
                color: #332a51;
                overflow: hidden;
                padding: 9px 0 0;
                margin-bottom: 15px;
              }
              h6 {
                color: #6d687f;
                font-size: 12px;
                padding-bottom: 9px;
              }
              p {
                font-size: 14px;
                color: #6d687f;
              }
            }
            .coursePrice {
              float: left;
              width: 10%;
              height: 140px;
              line-height: 140px;
              text-align: center;
              color: #ff5f5f;
              font-size: 16px;
            }
            .courseOperation {
              float: left;
              width: 10%;
              height: 140px;
              line-height: 140px;
              text-align: right;
              font-size: 16px;
              color: #332a51;
              i {
                font-size: 12px;
              }
            }
          }

          .tableFooter {
            background-color: #fafafa;
            padding: 20px 45px 20px 0;
            text-align: right;
            p {
              font-size: 14px;
              text-align: right;
              // color: #222;
              line-height: 30px;
            }
            h4 {
              font-size: 20px;
              color: #ff5f5f;
              font-weight: 700;
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
}
.profile {
  .content.noOrder {
    box-shadow: 0px 3px 9px rgba(198, 194, 210, 0.36);
  }
  .content .noCourse {
    width: 100%;
    height: 600px;
    background-color: #fff;
    text-align: center;
    &.fillTop {
      margin-top: -50px;
    }
    img {
      width: 316px;
      height: 274px;
      margin-top: 100px;
    }
    h4 {
      height: 70px;
      line-height: 70px;
      text-align: center;
      color: #999;
      font-size: 20px;
    }
    p {
      width: 140px;
      height: 36px;
      line-height: 36px;
      margin: 0 auto;
      border-radius: 18px;
      background: #6417a6;
      color: #fff;
      transition: all 300ms;
      font-size: 14px;
      &:hover {
        background-color: #8f4acb;
      }
    }
  }
  .tabList {
    i {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-bottom: -4px;
      &.icon-home {
        background: url('~assets/images/icon_home1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-course {
        background: url('~assets/images/icon_course1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-order {
        background: url('~assets/images/icon_order1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-message {
        background: url('~assets/images/icon_message1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-set {
        background: url('~assets/images/icon_set1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-bind {
        background: url('~assets/images/icon_bind1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-choose {
        background: url('~assets/images/icon_choose1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-code {
        background: url('~assets/images/icon_code1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-company {
        background: url('~assets/images/icon_company1.png') no-repeat center;
        background-size: contain;
      }
    }
  }
  .el-tabs__item.is-active i {
    &.icon-home {
      background: url('~assets/images/icon_home2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-course {
      background: url('~assets/images/icon_course2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-order {
      background: url('~assets/images/icon_order2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-message {
      background: url('~assets/images/icon_message2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-set {
      background: url('~assets/images/icon_set2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-bind {
      background: url('~assets/images/icon_bind2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-choose {
      background: url('~assets/images/icon_choose2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-code {
      background: url('~assets/images/icon_code2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-company {
      background: url('~assets/images/icon_company2.png') no-repeat center;
      background-size: contain;
    }
  }
}
</style>
