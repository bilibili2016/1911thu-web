<template>
  <div class="binding">
    <div class="bindInput clearfix">
      <input type="text" v-model="bindForm.courseId" placeholder=" 请输入您的邀请码">
      <span class="fr" @click="detection">确定</span>
    </div>
    <div class="bindingRecord">
      <div class="brHeader">
        <span>课程码</span>
        <span>兑换账户</span>
        <span>兑换日期</span>
        <span>课程列表</span>
      </div>
      <div class="brBody" v-for="(code,index) in invitationCodeList" :key="index">
        <div>{{code.invitation_code}}</div>
        <div>13621842637</div>
        <div>2018-06-25</div>
        <div class="courseList">查看
          <div class="course">
            <p>大数据时代的人力资源管理</p>
            <p>绿色经济与可持续发展</p>
            <p>不同制度条件下的相关激励机制研究</p>
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
  margin: 0 30px 50px;
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
        width: 25%;
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
        width: 25%;
        display: inline-block;
        text-align: center;
      }
      .courseList {
        position: relative;
        transition: all 300ms;
        &:hover {
          color: #8f4acb;
          // .course {
          //   display: inline;
          // }
        }
        .course {
          display: none;
          color: #222;
          position: absolute;
          top: 52px;
          right: 0;
          background-color: #fff;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
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