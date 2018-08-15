<template>
  <div class="bindCourse">
    <div class="courseList">
      <div class="title clearfix">
        <span>绑定兑换码</span>
        <el-button v-show="!courseList.addNewID" class="fr addClass" @click="addID" round>新增兑换码</el-button>
      </div>
      <div v-show="courseList.addNewID">
        <div class="courseID">
          <span>绑定兑换码:</span>
          <input v-model="courseList.inputID" placeholder=" 请输入您的兑换码">
          <span class="error" v-show="courseList.showErr">{{courseList.error}}</span>
        </div>
        <div class="bindInfo">
          <p>绑定兑换码说明：</p>
          <p>1.输入兑换码，绑定兑换购买的商品</p>
          <p>2.绑定成功后，不可更改</p>
        </div>
        <div :class="[{'presentAble':courseList.presentAble},'present']">
          <el-button :disabled="!courseList.presentAble" round @click="detection">提交</el-button>
        </div>
      </div>
      <div class="courseIDList">
        <div class="oneID" v-for="(item,index) in courseList.courseID" :key="index">
          <span>绑定兑换码：</span>
          <span>{{item.invitation_code}}</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { bindid } from '~/lib/v1_sdk/index'
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
            message: '请您输入正确的兑换码！'
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
    // 检测兑换码内是否包含已绑定的课程
    detection() {
      this.bindForm.courseId = this.courseList.inputID
      bindid.detectionCode(this.bindForm).then(res => {
        // 判断兑换码内是否包含已绑定的课程
        if (res.data.is_exist === 1) {
          this.$confirm(
            '该兑换码所包含商品与已购商品重复，如继续绑定，重复商品将进行有效时间累加。',
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
    },
    // 添加课程
    doSubmit() {
      this.bindForm.courseId = this.courseList.inputID
      bindid.bindingCurriculumPrivate(this.bindForm).then(res => {
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
    // 获取已经添加的兑换码
    getUsedInvitationCodeList() {
      return new Promise((resolve, reject) => {
        bindid.getUsedInvitationCodeList(this.curruntForm).then(response => {
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

  }
}
</script>
