<template>
  <div class="examine">
    <el-card class="changeNav">
      <!-- 列表 -->
      <div class="list" v-if="isShowList">
        <div class="top-con clearfix">
          <span>申请证书</span>
        </div>
        <div class="certificateList" v-loading="examineLoading" :class="{ minheight : examineLoading}">
          <v-list v-if="examineListData.length > 0" :examineListData="examineListData"></v-list>
        </div>
        <div class="pagination" v-if="examinePagemsg.total>11&&examineListData.length > 0">
          <el-pagination background layout="prev, pager, next" :page-size="examinePagemsg.pagesize" :pager-count="5" :page-count="examinePagemsg.pagesize" :current-page="examinePagemsg.page" :total="examinePagemsg.total" @current-change="examineListChange"></el-pagination>
        </div>
        <!-- 空页面 -->
        <div class="content">
          <div v-if="examineListData.length == 0&&!examineLoading" class="noCourse" style="text-align:center;">
            <img src="http://static-image.1911edu.com/VIP_null.png" alt>
            <h4 style="margin-top:10px">学习学院里的课程才会有认证资格呦，快去入学吧～</h4>
          </div>
        </div>
      </div>
      <!-- 个人信息填写 -->
      <div class="info" v-if="isShowInfo">
        <v-info :vipID="vipID" @examRulesPop="examRulesPop"></v-info>
      </div>
      <!-- 认证资格介绍 -->
      <div class="intro" v-if="isShowIntro">
        <v-intro :vipID="vipID" :unfinishedStudyTime="unfinishedStudyTime" @examRulesPop="examRulesPop"></v-intro>
      </div>
      <!-- 考试记录 -->
      <div class="record" v-if="isShowRecord">
        <v-record :vipID="vipID"></v-record>
      </div>
      <!-- 考试试题信息 -->
      <v-exampop v-if="isShowExamPop" :examRuleInfo="examRuleInfo" :examRuleLoading="examRuleLoading" @examQuestion="examQuestion" @closeRulesPop="closeRulesPop"></v-exampop>
    </el-card>
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { IEPopup } from "@/lib/util/helper";
import { examine } from "~/lib/v1_sdk/index";

import NoMsg from "@/pages/profile/components/common/noMsg.vue";
import List from "@/pages/profile/components/myexamine/certificateList";
import Info from "@/pages/profile/components/myexamine/info";
import Intro from "@/pages/profile/components/myexamine/intro";
import Record from "@/pages/profile/components/myexamine/examineRecord";
import exampop from "@/pages/profile/components/common/ExamineRulesPop";

export default {
  props: ["examineListData", "examinePagemsg", "examineLoading", "isVip"],
  components: {
    "v-list": List,
    "v-info": Info,
    "v-intro": Intro,
    "v-record": Record,
    "v-nomsg": NoMsg,
    "v-exampop": exampop
  },
  data() {
    return {
      examRuleInfo: "",
      examRuleLoading: false,
      isShowExamPop: false,

      isShowList: true,
      isShowInfo: false,
      isShowIntro: false,
      isShowRecord: false,
      vipID: "",
      unfinishedStudyTime: "",
      noMsg: {
        type: "myExamine",
        text: "加入学院后才会有认证资格呦，快去加入吧！"
      },
      vipForm: {
        vipId: "",
        type: 1
      }
    };
  },

  methods: {
    examineListChange() {
      this.$emit("examineListChange");
    },
    //关闭考试规则弹框
    closeRulesPop() {
      this.isShowExamPop = false;
    },
    // 考试规则弹框
    examRulesPop(type) {
      IEPopup("pane-tab-tenth", "-ms-page", 0);
      this.vipForm.vipId = this.vipID;
      this.vipForm.type = type;
      this.examRuleLoading = true;
      examine.examRuleInfo(this.vipForm).then(response => {
        if (response.status == 0) {
          this.isShowExamPop = true;
          this.examRuleLoading = false;
          this.examRuleInfo = response.data.examRuleInfo;
        } else {
          this.$message({
            showClose: true,
            message: response.msg,
            type: "error",
            duration: 6000
          });
        }
      });
    },
    // 开始考试，跳转正式或模拟试题页
    examQuestion() {
      // this.pageData.id = this.vipID;
      examine.createExamRecordQuestion(this.vipForm).then(response => {
        // if (response.status == 100201) {
        //   this.pageData.name = "info";
        //   this.$bus.$emit("whichShow", this.pageData);
        // } else
        if (response.status == 0) {
          if (this.vipForm.type == "1") {
            //正式考试
            this.$router.push(
              "/profile/components/myexamine/answerQuestion?id=" +
                response.data.exam_record_id
            );
          } else {
            //模拟考试
            this.$router.push(
              "/profile/components/myexamine/simulationExam?id=" +
                response.data.exam_record_id
            );
          }
        } else {
          this.$message({
            showClose: true,
            message: response.msg,
            type: "error",
            duration: 6000
          });
        }
      });
    }
  },
  mounted() {
    if (
      persistStore.get("whichIntro") &&
      persistStore.get("whichIntro") != ""
    ) {
      this.vipID = persistStore.get("whichIntro");
      this.isShowList = false;
      this.isShowInfo = false;
      this.isShowIntro = true;
      this.isShowRecord = false;
      persistStore.set("whichIntro", "");
    }
    this.$bus.$on("whichShow", data => {
      this.unfinishedStudyTime = data.unfinishedStudyTime; //剩余多少学时可以考试（介绍页展示）
      this.vipID = data.id;
      this.isShowList = false;
      this.isShowInfo = false;
      this.isShowIntro = false;
      this.isShowRecord = false;
      switch (data.name) {
        case "list":
          this.isShowList = true;
          break;
        case "info":
          this.isShowInfo = true;
          break;
        case "intro":
          this.isShowIntro = true;
          break;
        case "record":
          this.isShowRecord = true;
          break;
        default:
          break;
      }
    });
  }
};
</script>
