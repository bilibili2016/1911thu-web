<template>
  <!-- 认证资格介绍 -->
  <div class="examine-intro">
    <div class="examine-top">
      <span class="goBack" @click="handleBack">
        <i class=" el-icon-arrow-left icon"></i>认证资格介绍
      </span>
    </div>
    <div class="examine-bottom">
      <div class="one">1911学堂学员在学院完成学习后，即可参加在线认证考试，考试通过后学堂将根据学员成绩发放【清华大学在线学习认证证书】或【1911学堂结业证书】，证书均配有可在官方网站进行查询的唯一认证编码。</div>
      <div class="examineImg">
        <img src="http://static-image.1911edu.com/certification.png" alt="">
      </div>
      <div class="ask">
        <p class="tit">1. 学时要求</p>
        <p>参与【认证考试】前，学员在对应学院的在线学习时间需累计满100学时。其中，只有学员在观看完所选课程的全部视频后，学时才会累加。</p>
      </div>
      <div class="ask">
        <p class="tit">2. 认证考试</p>
        <p>学员需在2小时内作答100道题，所有试题均为客观题（即单选题、多选题）。题目将从学员已完成课程的题库中随机抽取。</p>
      </div>
      <div class="ask">
        <p class="tit">3. 考试规则</p>
        <p>入学后学员有三次考试机会，系统将取其最好成绩作为最终成绩，并发放相应证书。</p>
      </div>
      <div class="ask">
        <p class="tit">4. 模拟考试</p>
        <p>学员在正式考试前，可享有2次模拟考试机会，了解试题形式及内容重点。模拟考试试题由学院题库中随机抽取的100道题组成，两次模拟考试试题不一样。</p>
      </div>
      <div class="ask">
        <p class="tit">5. 颁发证书</p>
        <p>学院将根据学员考试成绩颁发相应证书，具体规则如下：</p>
        <p>考试分数为70分及以上时，获得【清华大学在线学习认证证书】；</p>
        <p>考试分数为60-69分时，获得学堂颁发的【1911学堂结业证书】。</p>
      </div>
      <div class="ask">
        <p class="tit">6. 有效期限</p>
        <p>学员须在入学后的12个月之内完成考试并申领证书，逾期将被视为自愿放弃考试和申请证书资格。</p>
      </div>

      <div class="examButton">
        <div class="examineBtn notExamine" v-if="showBtn">参加考试</div>
        <div class="examineBtn" v-else @click="handleExamine('1')">参加考试</div>
        <div class="examineBtn" v-if="showSimulationExam" @click="handleExamine('2')">模拟考试</div>
        <div class="examineBtn notExamine " v-else>模拟考试</div>
        <p class="text">{{alertText}}</p>
      </div>
    </div>
  </div>

</template>
<script>
import { examine } from '~/lib/v1_sdk/index'
import { message, matchSplits, getNet } from '@/lib/util/helper'
export default {
  props: ['vipID'],
  data() {
    return {
      alertText: '',
      showBtn: true,
      showSimulationExam: false,
      pageData: {
        id: '',
        name: ''
      },
      vipForm: {
        vipId: '',
        type: 1
      }
    }
  },
  methods: {
    //  回到VIP列表页
    handleBack() {
      this.pageData.name = 'list'
      this.$bus.$emit('whichShow', this.pageData)
    },
    // 开始考试
    handleExamine(type) {
      this.vipForm.vipId = this.vipID
      this.pageData.id = this.vipID
      this.vipForm.type = type
      examine.createExamRecordQuestion(this.vipForm).then(response => {
        if (response.status == 100201) {
          this.pageData.name = 'info'
          this.$bus.$emit('whichShow', this.pageData)
        } else if (response.status == 0) {
          this.$router.push(
            '/profile/components/myexamine/answerQuestion?id=' +
              response.data.exam_record_id
          )
        } else {
          this.$message({
            showClose: true,
            message: response.msg,
            type: 'error',
            duration: 6000
          })
        }
      })
    },
    //验证考试权限
    validateExamPrivilege() {
      this.vipForm.vipId = this.vipID
      this.vipForm.type = '1'
      examine.validateExamPrivilege(this.vipForm).then(response => {
        if (response.status == 0) {
          this.showBtn = false
        } else {
          if (response.status == 100201) {
            this.showBtn = false
          } else {
            this.showBtn = true
            this.alertText = response.msg
          }
        }
      })
    },
    // 验证模拟考试权限
    validateSimulationExam() {
      this.vipForm.vipId = this.vipID
      this.vipForm.type = '2'
      examine.validateExamPrivilege(this.vipForm).then(response => {
        if (response.status == 0) {
          this.showSimulationExam = true
        } else {
          this.showSimulationExam = false
        }
      })
    }
  },
  mounted() {
    this.validateExamPrivilege()
    this.validateSimulationExam()
  }
}
</script>