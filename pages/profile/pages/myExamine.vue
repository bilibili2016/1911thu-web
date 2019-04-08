<template>
  <div class="examine">
    <el-card class="changeNav">
      <!-- 列表 -->
      <v-list class="list" v-if="isShowList" :examineListData="examineListData" :examinePagemsg="examinePagemsg" :examineLoading="examineLoading"></v-list>
      <!-- 个人信息填写 -->
      <v-info class="info" v-if="isShowInfo" :vipID="vipID" @examRulesPop="examRulesPop"></v-info>
      <!-- 认证资格介绍 -->
      <v-intro class="intro" v-if="isShowIntro" :vipID="vipID" :unfinishedStudyTime="unfinishedStudyTime" @examRulesPop="examRulesPop"></v-intro>
      <!-- 考试记录 -->
      <v-record class="record" v-if="isShowRecord" :vipID="vipID"></v-record>
      <!-- 考试试题信息弹窗 -->
      <v-exampop v-if="isShowExamPop" :examRuleInfo="examRuleInfo" :examRuleLoading="examRuleLoading" @examQuestion="examQuestion" @closeRulesPop="closeRulesPop"></v-exampop>
    </el-card>
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { IEPopup } from "@/lib/util/helper";
import { examine } from "~/lib/v1_sdk/index";

import NoMsg from "@/pages/profile/components/common/noMsg.vue";
import List from "@/pages/profile/components/myexamine/list";
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
    //默认显示证书列表页
    if (
      persistStore.get("whichIntro") &&
      persistStore.get("whichIntro") != ""
    ) {
      //学院介绍页-申请证书-显示考试介绍页
      this.vipID = persistStore.get("whichIntro");
      this.isShowIntro = true;
      this.isShowList = false;
      this.isShowInfo = false;
      this.isShowRecord = false;
      persistStore.set("whichIntro", "");
    } else if (persistStore.get("info").isInfo) {
      //申请证书未填写个人信息-显示填写个人信息页
      this.isShowInfo = true;
      this.isShowIntro = false;
      this.isShowList = false;
      this.isShowRecord = false;
      persistStore.set("info", { isInfo: false, isSave: true });
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
