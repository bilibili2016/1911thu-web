<template>
  <div class="binding">
    <div class="bindInput clearfix">
      <input type="text" v-model="bindForm.courseId" placeholder=" 请输入您的邀请码">
      <span class="fr" @click="detection">确定</span>
    </div>
    <div class="bindingRecord">
      <div class="brHeader">
        <span>课程码</span>
        <span>类型</span>
        <span>兑换日期</span>
        <span>兑换课程信息</span>
      </div>
      <div class="brBody" v-for="(code,index) in invitationCodeList" :key="index">
        <div>{{code.invitation_code}}</div>
        <div v-if="code.type==='1'">课程</div>
        <div v-if="code.type==='2'">项目</div>
        <div v-if="code.type==='3'">课程+项目</div>
        <div>{{exchangeTime(code.create_time)}}</div>
        <div class="courseList">查看
          <div class="course">
            <span></span>
            <p v-for="(course,index) in code.orderCurriculumList" :key="index">
              <i v-if="course.type=='2'"></i>{{course.title}}
            </p>
          </div>
        </div>
      </div>
      <div v-if="!invitationCodeList||invitationCodeList.length<1" class="noCodes">
        <img :src="noMsgImg" alt="">
        <p>抱歉，现在还没有课程码~</p>
      </div>
    </div>
  </div>
</template>

<script>
import { home } from '~/lib/v1_sdk/index'
import { timestampToTime } from '@/lib/util/helper'
import { mapGetters } from 'vuex'
export default {
  props: ['invitationCodeList'],
  data() {
    return {
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
      bindForm: {
        courseId: ''
      }
    }
  },
  methods: {
    // 时间戳转日期格式
    exchangeTime(time) {
      return timestampToTime(time)
    },
    // 检测邀请码内是否包含已绑定的课程
    detection() {
      if (
        this.bindForm.courseId == '' ||
        !/^[A-Za-z0-9]+$/.test(this.bindForm.courseId)
      ) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '请输入正确的邀请码！'
        })
      } else {
        home.detectionCode(this.bindForm).then(res => {
          // 判断邀请码内是否包含已绑定的课程
          if (res.data.is_exist === 1) {
            this.$confirm(
              '该邀请码所包含商品与已购商品重复，如继续绑定，重复商品将进行有效时间累加。',
              {
                confirmButtonText: '坚持绑定',
                cancelButtonText: '取消',
                closeOnHashChange: false,
                // type: 'warning',
                center: true
              }
            )
              .then(() => {
                // 添加绑定课程
                this.doSubmit()
              })
              .catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消绑定'
                })
              })
          } else {
            this.doSubmit()
          }
        })
      }
    },
    // 添加课程
    doSubmit() {
      home.bindingCurriculumPrivate(this.bindForm).then(res => {
        if (res.status === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: res.msg
          })
          this.$bus.$emit('studyCourse')
          this.$bus.$emit('reGetCode')
          this.bindForm.courseId = ''
          this.$bus.$emit('updateCourse', true)
        } else if (res.status === '100100') {
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
        }
      })
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>

<style scoped lang="scss">
.binding {
  margin: 0 30px 0;
  padding: 0 0 50px;
  min-height: 500px;
  .bindInput {
    margin: 20px 0;
    border: 1px solid #e8d6f7;
    background-color: #ebe7ed;
    height: 46px;
    line-height: 46px;
    input {
      height: 44px;
      width: 85%;
      padding-left: 30px;
    }
    span {
      width: 124px;
      background-color: #6417a6;
      text-align: center;
      font-size: 16px;
      color: #fff;
      margin-top: -1px;
      margin-right: -1px;
      cursor: pointer;
    }
  }
  .bindingRecord {
    border: 1px solid #e8d6f7;
    .brHeader {
      height: 60px;
      line-height: 60px;
      background-color: #ebe7ed;
      span {
        width: 19%;
        text-align: center;
      }
    }
    .brBody {
      height: 52px;
      line-height: 52px;
      background-color: #fafafa;
      border-bottom: 1px solid #e8d6f7;
      &:last-child {
        border: none;
      }
      & > div {
        width: 19%;
        display: inline-block;
        text-align: center;
      }
      .courseList {
        position: relative;
        transition: all 300ms;
        cursor: pointer;
        &:hover {
          color: #8f4acb;
          .course {
            display: inline;
          }
        }
        .course {
          display: none;
          width: 245px;
          color: #222;
          position: absolute;
          right: -200px;
          background-color: #fff;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 30px;
          box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
          z-index: 100;
          span {
            width: 14px;
            height: 14px;
            background-color: #fff;
            transform: rotate(45deg);
            position: absolute;
            left: -6px;
            top: 20px;
          }
          p {
            width: 100%;
            line-height: 30px;
            height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            i {
              width: 42px;
              height: 18px;
              display: inline-block;
              background: url('~assets/images/p4.png') no-repeat;
              background-position: top center;
              background-size: 42px 18px;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .noCodes {
      width: 100%;
      text-align: center;
      padding-bottom: 50px;
      img {
        width: 316px;
        height: 274px;
        margin-top: 100px;
      }
      p {
        height: 70px;
        line-height: 70px;
        text-align: center;
        color: #999;
        font-size: 20px;
      }
    }
  }
}
</style>
