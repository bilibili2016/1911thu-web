<template>
  <!-- 按订单开发票 -->
  <div class="ticketOrder">
    <div>
      <!-- 发票订单列表 -->
      <div class="orderList" v-for="(courseList, index ) in ticketOrderData" :key="index">
        <div class="topBar clearfix">
          <span class="fl">订单：{{courseList.order_sn}}</span>
          <span class="fr">{{exchangeTime(courseList.create_time)}}</span>
        </div>
        <div class="list">
          <div class="content">
            <!-- 发票 -->
            <div class="orderChecked">
              <input type="checkbox" class="el-checkbox singleCheckbox" ref="checkbox" :id="courseList.id" @change="handleSelectSingle(courseList)">
              <label :for="courseList.id" class="el-checkbox-label"></label>
            </div>
            <div class="course">
              <!-- 课程列表 -->
              <div class="courseOne" v-if="courseList.orderCurriculumList.length && index<3" v-for="(course,index) in courseList.orderCurriculumList" :key="course.id">
                <img @click="goCourseInfo(course)" class="fl" :src="course.picture" alt="">
                <div class="fl">
                  <h4 @click="goCourseInfo(course)">{{course.title}}</h4>
                  <h6>{{course.curriculum_time}}学时</h6>
                  <p>讲师：{{course.teacher_name}}</p>
                </div>
              </div>
              <!-- 项目列表 -->
              <div class="courseOne" v-if="computedLength(courseList.orderCurriculumList,courseList.orderProjectList,index)" v-for="(project,index) in courseList.orderProjectList" :key="project.id">
                <div class="courseImg">
                  <!-- 项目图标 -->
                  <img class="project-img" src="http://papn9j3ys.bkt.clouddn.com/p4.png" alt="">
                  <img @click="goProjrctInfo(project)" class="fl" :src="project.picture" alt="">
                </div>
                <div class="fl">
                  <h4 @click="goProjrctInfo(project)">{{project.title}}</h4>
                  <h6>{{project.curriculum_time}}学时</h6>
                </div>
              </div>
              <div class="more" v-if="(courseList.orderCurriculumList.length+courseList.orderProjectList.length)>3" @click="selectPayApply(courseList)">
                查看更多课程>
              </div>
            </div>
            <div class="price height" :style="{height:computedHeight(courseList.orderCurriculumList,courseList.orderProjectList)}">
              <p>¥{{courseList.order_amount}}</p>
            </div>

          </div>
        </div>
      </div>
      <!-- 定位用 -->
      <div class="bottomPosition" if="bottomPosition"></div>
      <div class="bottomBar" id="bottomBar" ref="bottomBar">
        <span class="fl">
          <el-checkbox v-model="checkMsg " @change="handleSelectAll"></el-checkbox>
          全选
        </span>
        <span class="money ">
          <i>{{orderNum}}</i> 个订单，
          <strong>共：
            <i>¥{{orderPrice}}</i>
          </strong>
        </span>
        <span class="next " @click="showIoc">下一步</span>
      </div>
      <!-- 发票弹框 -->
      <v-ticket v-show="showInvoice" :checkedArr="checkedArr" @handleClose="close" @getUnTicketData="getUnTicketData"></v-ticket>
    </div>
  </div>
</template>

<script>
import { ticketorder } from '~/lib/v1_sdk/index'
import { timestampToTime } from '@/lib/util/helper'
import { mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import TicketPop from '@/pages/profile/ticket/ticketPopup'
export default {
  props: ['orderData'],
  components: {
    'v-ticket': TicketPop
  },
  data() {
    return {
      ticketType: {
        type: 'ticket'
      },
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
      orderPrice: 0,
      orderNum: 0,
      ticketOrderData: [],
      checkedArr: [],
      checkMsg: false,
      showInvoice: false,
      kidForm: {
        kids: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setGid', 'setKid']),
    // 选择要开发票的订单
    handleSelectSingle(item) {
      let itemIndex = this.checkedArr.indexOf(item.id)
      if (itemIndex >= 0) {
        //未选中
        this.checkedArr.splice(itemIndex, 1)
        this.orderPrice = (
          (Number(this.orderPrice) * 10 - Number(item.order_amount) * 10) /
          10
        ).toFixed(2)
      } else {
        //选中
        this.checkedArr.push(item.id)

        this.orderPrice = (
          (Number(this.orderPrice) * 10 + Number(item.order_amount) * 10) /
          10
        ).toFixed(2)
      }
      this.orderNum = this.checkedArr.length
      console.log(this.checkedArr)
      if (this.checkedArr.length == this.ticketOrderData.length) {
        this.checkMsg = true
      } else {
        this.checkMsg = false
      }
    },
    // 全选
    handleSelectAll(val) {
      var checkboxList = document.getElementsByClassName('singleCheckbox')

      if (val) {
        this.checkedArr = []
        this.orderPrice = 0
        for (var i = 0; i < checkboxList.length; i++) {
          checkboxList[i].checked = true
          this.checkedArr.push(checkboxList[i].id)
        }

        this.ticketOrderData.forEach(item => {
          this.orderPrice = (
            (Number(this.orderPrice) * 10 + Number(item.order_amount) * 10) /
            10
          ).toFixed(2)
        })
      } else {
        for (var i = 0; i < checkboxList.length; i++) {
          checkboxList[i].checked = false
          this.checkedArr.push(checkboxList[i].id)
        }

        this.checkedArr = []
        this.orderPrice = 0
      }

      this.orderNum = this.checkedArr.length
    },
    // 展示修改发票信息弹框
    showIoc() {
      if (this.checkedArr.length > 0) {
        this.showInvoice = true
        // this.getTicket()
      } else {
        this.$message({
          showClose: true,
          type: 'info',
          message: '请先选择要开具发票的订单！'
        })
      }
    },

    //未开发票列表
    getUnTicketData() {
      ticketorder.orderNotInvoice().then(response => {
        this.ticketOrderData = response.data.orderList
        var checkboxList = document.getElementsByClassName('singleCheckbox')
        for (var i = 0; i < checkboxList.length; i++) {
          checkboxList[i].checked = false
        }
      })
    },
    // 关闭表单
    close() {
      this.showInfo = false
      this.showInvoice = false
    },
    //课程详情
    goCourseInfo(item, index) {
      this.kidForm.kids = item.curriculum_id
      // persistStore.set('kid', item.curriculum_id)
      // this.setKid(this.kidForm)
      // persistStore.set('curriculumId', item.curriculum_id)
      this.$router.push('/course/coursedetail?kid=' + item.curriculum_id)
    },
    //项目详情
    goProjrctInfo(item) {
      this.$router.push('/project/projectdetail?id=' + item.curriculum_id)
    },
    //列表详情
    selectPayApply(item, type) {
      persistStore.set('order', item.id)
      this.$bus.$emit('goTicketDetail', false)
    },
    // 时间戳转日期格式
    exchangeTime(time) {
      return timestampToTime(time)
    },
    //根据列表长度计算高度
    computedHeight(course, project) {
      let height =
        course.length + project.length > 3
          ? 3 * 140 + 60 + 'px'
          : (course.length + project.length) * 140 + 'px'
      return height
    },
    //计算项目列表显示数量
    computedLength(course, project, index) {
      let projectLength = course.length > 3 ? 0 : 3 - course.length
      if (index < projectLength) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    this.ticketOrderData = this.orderData
  }
}
</script>

