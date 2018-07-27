<template>
  <div class="main clearfix bindCourse">
    <div class="courseList">
      <div class="title clearfix">
        <span>课程兑换码</span>
        <el-button v-show="!courseList.addNewID" class="fr addClass" @click="addID" round>新增课程兑换码</el-button>
      </div>
      <div class="courseIDList">
        <div class="oneID" v-for="(item,index) in courseList.courseID" :key="index">
          <span>课程兑换码:</span>
          <span>{{item.invitation_code}}</span>
        </div>
      </div>
      <div v-show="courseList.addNewID">
        <div class="courseID">
          <span>课程兑换码:</span>
          <input v-model="courseList.inputID" placeholder="请输入您的课程兑换码，区分大小写。">
          <span class="error" v-show="courseList.showErr">{{courseList.error}}</span>
        </div>
        <div class="bindInfo">
          <p>课程兑换码说明：</p>
          <p>1.输入课程兑换码，绑定兑换购买的课程</p>
          <p>2.绑定成功后，不可更改。</p>
        </div>
        <div :class="[{'presentAble':courseList.presentAble},'present']">
          <el-button :disabled="!courseList.presentAble" round @click="doSubmit">提交</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { home } from '~/lib/v1_sdk/index'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      courseList: {
        addNewID: true,
        inputID: '',
        showErr: false,
        error: '',
        presentAble: false,
        present: true,
        addCourse: true,
        courseID: []
      },
      bindForm: {
        courseId: ''
      },
      i: '',
      intervalid: null,
      seconds: 1
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  watch: {
    'courseList.inputID'(val, oldval) {
      if (val == '') {
        this.courseList.showErr = true
        this.courseList.presentAble = false
      } else {
        if (/^[A-Za-z0-9]+$/.test(val)) {
          this.courseList.showErr = false
          this.courseList.presentAble = true
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请您输入正确的课程兑换码！'
          })
        }
      }
    }
  },
  methods: {
    // 展示添加课程入口
    addID() {
      this.courseList.addNewID = true
      this.$emit('isShowMsg', false)
    },
    // 添加课程
    doSubmit() {
      this.bindForm.courseId = this.courseList.inputID
      home.bindingCurriculumPrivate(this.bindForm).then(res => {
        if (res.status === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: res.msg
          })
          this.getUsedInvitationCodeList()
          this.$bus.$emit('studyCourse')
          this.courseList.inputID = ''
          if (this.courseList.addNewID) {
            this.courseList.addNewID = false
          }
          this.$bus.$emit('updateCourse', true)
        } else if (res.status === '100100') {
          this.courseList.showErr = true
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
          this.courseList.error = res.msg
        }
      })
    },
    // 获取已经添加的课程兑换码
    getUsedInvitationCodeList() {
      return new Promise((resolve, reject) => {
        home.getUsedInvitationCodeList(this.curruntForm).then(response => {
          this.courseList.courseID = response.data.usedInvitationCodeList
          if (
            !this.courseList.courseID ||
            this.courseList.courseID.length <= 0
          ) {
            this.courseList.addNewID = true
            this.$emit('isShowMsg', true)
          } else {
            this.courseList.addNewID = false
            this.$emit('isShowMsg', false)
          }
        })
      })
    }
  },

  mounted() {
    if (this.isAuthenticated) {
      this.getUsedInvitationCodeList()
    }

    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>
