<template>
  <div class="binding">
    <div class="bindInput clearfix">
      <input type="text" v-model="bindForm.courseId" placeholder=" 请输入您的兑换码">
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
            <p v-for="(course,index) in code.orderCurriculumList" :key="index" @click="handleLink(course)">
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
import { binding } from '~/lib/v1_sdk/index'
import { timestampToYMD } from '@/lib/util/helper'
import { mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
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
    // 跳转课程或项目详情
    handleLink(item) {
      if (item.type === '1') {
        persistStore.set('curriculumId', item.curriculum_id)
        window.open(window.location.origin + '/course/coursedetail')
      } else {
        persistStore.set('projectId', item.curriculum_id)
        window.open(window.location.origin + '/project/ProjectDetail')
      }
    },
    // 时间戳转日期格式
    exchangeTime(time) {
      return timestampToYMD(time)
    },
    // 检测兑换码内是否包含已绑定的课程
    detection() {
      if (
        this.bindForm.courseId == '' ||
        !/^[A-Za-z0-9]+$/.test(this.bindForm.courseId)
      ) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '请输入正确的兑换码！'
        })
      } else {
        binding.detectionCode(this.bindForm).then(res => {
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
      }
    },
    // 添加课程 绑定
    doSubmit() {
      binding.bindingCurriculumPrivate(this.bindForm).then(res => {
        if (res.status === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: res.msg
          })
          this.$bus.$emit('studyCourse')
          this.$bus.$emit('reGetCode')
          this.$bus.$emit('studyProject')
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
@import '~assets/style/profile/binging.scss';
</style>