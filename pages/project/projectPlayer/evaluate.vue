<template>
  <div class="evaluate" v-show="showEvaluate">
    <div class="note">
      <h4>项目评价
        <i class="el-icon-close fr" @click="closeEvaluate(false)"></i>
      </h4>
      <h5>请问该课程对您有帮忙吗？快来评个分吧！</h5>
      <h6>项目评分：
        <el-rate v-model="rateModel" @change="changeRate"></el-rate>
      </h6>
      <div class="bthgrop">
        <!-- <span> -->
        <div v-for="(item,index) in btnData" :key="index" @click="getBtnContent(item,index)" :class="['detail-btngrounp',{borderColor: item.isCheck}]">
          {{item.value}}
        </div>
        <!-- </span> -->
      </div>

      <el-input type="textarea" resize="none" :rows="4" placeholder="其它想说的" v-model="word">
      </el-input>
      <div class="commitBug">
        <el-button round @click.native="addProjectEvaluate">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, projectplayer } from '~/lib/v1_sdk/index'
import { matchSplits } from '@/lib/util/helper'
export default {
  props: ['showEvaluate', 'shoppingForm', 'playerForm'],
  data() {
    return {
      btnData: '',
      reTagBtn: '',
      rateModel: 5,
      word: '',
      tagGroup: '',
      addEvaluateForm: {
        ids: '',
        curriculumId: '',
        types: 2,
        scores: '',
        evaluateContent: '',
        tag: []
      }
    }
  },
  methods: {
    // 关闭评论
    closeEvaluate(type) {
      this.radioBtn = ''
      this.word = ''
      if (type) {
        this.$emit('closeEvaluate', type)
      } else {
        this.$emit('closeEvaluate')
      }
    },
    // 切换星级
    changeRate(val) {
      this.reTagBtn = []
      this.tagGroup[val].map((item, i) => {
        let obj = new Object()
        obj.value = item
        obj.index = i
        obj.isCheck = false
        this.reTagBtn.push(obj)
      })
      this.btnData = this.reTagBtn
      this.addEvaluateForm.tag = []
    },
    // 切换评论星级列表
    getBtnContent(val, index) {
      if (val.isCheck === true) {
        this.$set(val, 'isCheck', false)
      } else {
        this.$set(val, 'isCheck', true)
      }
      this.addEvaluateForm.tag = []
      this.btnData.forEach((v, i) => {
        if (v.isCheck === true) {
          this.addEvaluateForm.tag.push(v.value)
        }
      })
    },
    // 增加评论
    addProjectEvaluate() {
      if (this.word.length < 100) {
        this.addEvaluateForm.evaluateContent = this.word
      } else {
        this.$message({
          showClose: true,
          type: 'warning',
          message: '请输入少于100个字符！'
        })
        return false
      }
      this.addEvaluateForm.ids = matchSplits('kid')
      this.addEvaluateForm.curriculumId = this.playerForm.curriculumId
      this.addEvaluateForm.catalogId = this.playerForm.catalogId
      this.addEvaluateForm.evaluateContent = this.word
      this.addEvaluateForm.scores = this.rateModel.toString().replace(/,/g, '#')
      this.addEvaluateForm.tag = this.addEvaluateForm.tag.join('#')
      projectplayer.addProjectEvaluate(this.addEvaluateForm).then(response => {
        if (response.status === 100100) {
          this.$message({
            showClose: true,
            type: 'warning',
            message: response.msg
          })
          this.closeEvaluate(false)
        } else if (response.status === 0) {
          this.addEvaluateForm.tag = []
          for (let item of this.btnData) {
            this.$set(item, 'isCheck', false)
          }
          this.word = ''
          this.$message({
            showClose: true,
            type: 'success',
            message: response.msg
          })
          this.closeEvaluate(true)
        }
      })
    },
    // 获取评论tag
    getEvaluateTags() {
      projectplayer.getEvaluateTags().then(response => {
        this.tagGroup = response.data.evaluateTags
        this.changeRate('5')
        this.btnDatas = response.data.evaluateTags
      })
    }
  },
  mounted() {
    this.getEvaluateTags()
  }
}
</script>