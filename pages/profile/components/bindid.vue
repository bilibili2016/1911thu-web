<template>
  <div class="main clearfix bindCourse">
    <div class="binding" style="display: none;">
      <div class="title">
        <h4>绑定课程ID</h4>
      </div>
      <div class="courseID">
        <span>绑定课程ID:</span>
        <input v-model="binding.inputID" placeholder="请输入您的课程，区别大小写。">
        <span class="error" v-show="binding.showErr">{{courseList.error}}</span>
      </div>
      <div class="bindInfo">
        <p>绑定课程ID说明：</p>
        <p>1.公司hr提供的机构ID，兑换后可以学习机构购买的课程。</p>
        <p>2.绑定成功后，不可更改。</p>
      </div>
      <div class="presentAble present">
        <el-button :disabled="!binding.presentAble" round @click="doSubmit">提交1</el-button>
      </div>
    </div>

    <div class="courseList">
      <div class="title clearfix">
        <span>绑定课程ID</span>
        <el-button class="fr addClass" @click="addID" round>新增课程ID</el-button>
      </div>
      <div class="courseIDList">
        <div class="oneID" v-for="(item,index) in courseList.courseID" :key="index">
          <span>课程ID:</span>
          <span>{{item.invitation_code}}</span>
        </div>
      </div>
      <div v-show="courseList.addNewID">
        <div class="courseID">
          <span>绑定课程ID:</span>
          <input v-model="courseList.inputID" placeholder="请输入您的课程，区别大小写。">
          <span class="error" v-show="courseList.showErr">{{courseList.error}}</span>
        </div>
        <div class="bindInfo">
          <p>绑定课程ID说明：</p>
          <p>1.公司hr提供的机构ID，兑换后可以学习机构购买的课程</p>
          <p>2.绑定成功后，不可更改。</p>
        </div>
        <div class="presentAble present">
          <el-button :disabled="!courseList.presentAble" round @click="doSubmit">提交2</el-button>
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
      binding: {
        inputID: '',
        showErr: false,
        presentAble: true,
        present: true
      },
      courseList: {
        addNewID: false,
        inputID: '',
        showErr: false,
        error: '',
        presentAble: true,
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
  methods: {
    verify(item) {
      if (item.inputID == '') {
        item.showErr = true
        item.presentAble = false
      } else {
        item.showErr = false
        item.presentAble = true
      }
    },
    addID() {
      this.courseList.addNewID = true
      this.$emit('isShowMsg', false)
    },
    doSubmit() {
      this.bindForm.courseId = this.courseList.inputID
      return new Promise((resolve, reject) => {
        home.bindingCurriculumPrivate(this.bindForm).then(res => {
          if (res.status === 0) {
            this.$message({
              showClose: true,
              type: 'success',
              message: res.msg
            })
            this.getUsedInvitationCodeList()
            this.courseList.inputID = ''
            if (this.courseList.addNewID) {
              this.courseList.addNewID = false
            }
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
      })
    },
    getUsedInvitationCodeList() {
      return new Promise((resolve, reject) => {
        home.getUsedInvitationCodeList(this.curruntForm).then(response => {
          this.courseList.courseID = response.data.usedInvitationCodeList

          if (
            !this.courseList.courseID ||
            this.courseList.courseID.length <= 0
          ) {
            this.$emit('isShowMsg', true)
          } else {
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
