<template>
  <!-- 认证资格介绍 -->
  <div class="examine-intro">
    <div class="examine-top">
      <span class="goBack" @click="handleBack">
        <i class=" el-icon-arrow-left icon"></i>认证资格介绍
      </span>
    </div>
    <div class="examine-bottom">
      <div class="one">1911学堂各网络学院学员，可在所在学院任选课程进行学习，达到累计学时要求，即可参与在线认证考试，根据考试成绩，发放1911学堂结业证书或清华大学在线学习认证证书。具体认证标准如下：</div>
      <div class="ask">
        <p class="tit">1. 学时要求</p>
        <p>学员需看完所选课程中的所有视频后，系统才对所学课程学时进行累加，累计达到100学时，即可参与认证考试。</p>
      </div>
      <div class="ask">
        <p class="tit">2. 试卷构成</p>
        <p>试题从学员已学的课程中随机抽取。考试题型为客观题，包括单选题、多选题。试卷共包含100道题目，每道题目分值为1分，试卷总分数为100分。考试时间2小时。</p>
      </div>
      <div class="ask">
        <p class="tit">3. 答题次数</p>
        <p>学员共有三次答题机会。系统将取三次中最高成绩作为学员的最终成绩。</p>
      </div>
      <div class="ask">
        <p class="tit">4. 分数要求</p>
        <p>学员分数在60-69分范围内，即可获得1911学堂结业证书；学员分数在70分及以上，即可获得清华大学在线学习认证证书。三次考试均未达到及格标准，则不具备获取证书资格。</p>
      </div>
      <div class="ask">
        <p class="tit">5. 有效期限</p>
        <p>学员需在账号有效期（12个月）内，完成考试，逾期将无法参与考试认证。</p>
      </div>
      <div class="bottom">
        <div class="examine-btn " @click="handleExamine">开始考试</div>
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
      pageData: {
        id: '',
        name: ''
      },
      vipForm: {
        vipId: ''
      }
    }
  },
  methods: {
    //  回到VIP列表页
    handleBack() {
      this.pageData.name = 'list'
      this.$bus.$emit('whichShow', this.pageData)
    },
    handleExamine() {
      this.vipForm.vipId = this.vipID
      examine.createExamRecordQuestion(this.vipForm).then(response => {
        if (response.status == 0) {
          this.$router.push(
            '/profile/components/myexamine/answerQuestion?id=' +
              response.data.exam_record_id
          )
        } else {
          message(this, 'error', response.msg)
        }
      })
    }
  }
}
</script>