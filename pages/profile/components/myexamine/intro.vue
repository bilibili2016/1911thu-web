<template>
  <!-- 认证资格介绍 -->
  <div class="examine-intro">
    <div class="examine-top">
      <span class="goBack" @click="handleBack">
        <i class=" el-icon-arrow-left icon"></i>认证资格介绍
      </span>
    </div>
    <div class="examine-bottom">
      <div class="one">1911学堂学员在完成了学院学习后，即可参与在线认证考试，考试通过后根据学员成绩将发放相应证书。本学堂可发放【1911学堂结业证书】或【清华大学在线学习认证证书】两种，每种证书均配有官方唯一认证编码，并可在官方网站进行查询。</div>
      <div class="examineImg">
        <img src="http://papn9j3ys.bkt.clouddn.com/certification.png" alt="">
      </div>
      <div class="ask">
        <p class="tit">1. 学时要求</p>
        <p>参与【认证考试】前，学员在对应学院的在线学习时间需累计满100学时。其中，只有学员在观看完所选课程的全部视频后，学时才会累加。</p>
      </div>
      <div class="ask">
        <p class="tit">2. 认证考试</p>
        <p>认证考试中学员需在2小时内完成100道题目的答题，所有试题均为客观题（即单选题、多选题）。题目将从学员已完成的课程中随机抽取。</p>
      </div>
      <div class="ask">
        <p class="tit">3. 考试规则</p>
        <p>入学后学员有三次考试机会，系统将在所有考试成绩中取最好成绩作为该学员最终成绩，并根据该成绩为其发放证书。</p>
      </div>
      <div class="ask">
        <p class="tit">4. 颁发证书</p>
        <p>根据学员成绩，学院将颁发对应的证书：</p>
        <p>1911学堂证书：当学员成绩在60~69分时，将获得学堂颁发的1911学堂证书；</p>
        <p>清华大学在线学习认证证书：当学员成绩在70分及以上时，将获得清华大学在线学习认证证书。</p>
        <p>证书不重复颁发，每个学院对每名学员仅发放一张证书。</p>
      </div>
      <div class="ask">
        <p class="tit">5. 有效期限</p>
        <p>学员须在入学后的12个月之内完成考试并申领证书，逾期将视为学员自愿放弃考试和申请证书资格。</p>
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
    // 开始考试
    handleExamine() {
      this.vipForm.vipId = this.vipID
      this.pageData.id = this.vipID
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
          message(this, 'error', response.msg)
        }
      })
    }
  }
}
</script>