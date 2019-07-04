<template>
  <!-- 课程评价 -->
  <div class="evaluate-tag" v-if="config.card_type!=='project'">
    <h4>课程评价
      <i v-show="isClose" class="el-icon-close fr" @click="closeEvaluate"></i>
    </h4>
    <div class="personal clearfix">
      <!-- <div class="title">请问该课程对您有帮忙吗？快来评个分吧！</div> -->
      <span class="rate">
        <span style="color:#F45E61">*</span>课程评分:
      </span>
      <span class="ratem">
        <el-rate v-model="rateModel" @change="changeRate"></el-rate>
      </span>
      <div class="bthgrop clearfix">
        <div v-for="(item,index) in btnData" :key="index" @click="getBtnContent(item,index)" :class="{borderColor: item.isCheck}" class="detail-btngrounp">
          {{item.value}}
        </div>
      </div>
      <div class="area">
        <el-input type="textarea" resize="none" :rows="3" placeholder="其它想说的(最长不超过150字)" v-model="textarea" maxlength="150">
        </el-input>
        <p class="reminder">还可以输入{{overFonts}}字</p>
      </div>
      <div class="submit">
        <el-button :class="{canSubmit:textarea!='' || addEvaluateForm.tag.length!=0}" type="primary" @click="addEvaluate">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { uniqueArray } from "@/lib/util/helper";
import { coursedetail } from "~/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import { message } from "@/lib/util/helper";
export default {
  props: ["courseList", "isClose", "config"],
  data () {
    return {
      reTagBtn: [],
      textarea: "",
      evaluateData: "",
      btnData: [],
      tagGroup: "",
      btnDatas: [],
      rateModel: 5,
      addEvaluateForm: {
        ids: "",
        evaluatecontent: "",
        scores: "",
        types: 1,
        tag: []
      },
      flag: false
    };
  },
  computed: {
    overFonts () {
      return 150 - this.textarea.length;
    }
  },
  methods: {
    //标签-获取课程标签列表
    getEvaluateTags () {
      coursedetail.getEvaluateTags().then(response => {
        if (response.status === 0) {
          this.tagGroup = response.data.evaluateTags;
          this.btnDatas = response.data.evaluateTags;
          this.changeRate("5");
        }
      });
    },
    // 标签-点击评价改变星级
    changeRate (val) {
      this.reTagBtn = [];
      this.tagGroup[val].map((item, i) => {
        let obj = new Object();
        obj.value = item;
        obj.index = i;
        obj.isCheck = false;
        this.reTagBtn.push(obj);
      });
      this.btnData = this.reTagBtn;
      this.addEvaluateForm.tag = [];
    },
    // 评论-提交评论接口
    addEvaluate () {
      this.addEvaluateForm.ids = this.courseList.id;
      this.addEvaluateForm.curriculumcatalogid = this.courseList.defaultCurriculumCatalog.id;
      this.flag = this.courseList.is_study;
      if (this.textarea.length <= 150) {
        this.addEvaluateForm.evaluatecontent = this.textarea;
      } else {
        message(this, "warning", "请输入少于150个字符！");
        return false;
      }
      this.addEvaluateForm.scores = this.rateModel;
      this.addEvaluateForm.tag = this.addEvaluateForm.tag
        .toString()
        .replace(/,/g, "#");
      if (this.flag) {
        coursedetail.addEvaluate(this.addEvaluateForm).then(response => {
          if (response.status === 100100) {
            message(this, "warning", response.msg);
          } else {
            this.addEvaluateForm.tag = [];
            for (let item of this.btnData) {
              this.$set(item, "isCheck", false);
            }

            message(this, "success", response.msg);
            this.$emit("changeList");
          }
        });
        // this.addEvaluateForm.tag = []
      } else {
        // this.$message({
        //   showClose: true,
        //   type: 'warning',
        //   message: '您还没有观看过此课程，请先去观看吧！'
        // })
        message(this, "warning", "您还没有观看过此课程，请先去观看吧！");
      }
    },
    // 标签-点击获取标签内容
    getBtnContent (val, index) {
      if (val.isCheck === true) {
        this.$set(val, "isCheck", false);
        for (var i = 0; i < this.addEvaluateForm.tag.length; i++) {
          if (this.addEvaluateForm.tag[i] === val.value) {
            this.addEvaluateForm.tag.splice(i, 1);
          }
        }
      } else {
        this.$set(val, "isCheck", true);
        this.addEvaluateForm.tag.push(val.value);
        this.addEvaluateForm.tag = uniqueArray(this.addEvaluateForm.tag);
      }
    },
    //关闭
    closeEvaluate () {
      this.$emit("closeEvaluate");
      // this.showEvaluate = false
      // this.radioBtn = ''
      // this.word = ''
    }
  },
  mounted () {
    this.getEvaluateTags();
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/components/evaluateCase.scss";
</style>
