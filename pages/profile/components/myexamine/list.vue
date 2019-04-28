<template>
  <div class="list">
    <div class="top-con clearfix">
      <span>申请证书</span>
    </div>
    <div class="certificateList" v-loading="examineLoading" :class="{ minheight : examineLoading}">
      <div class="lists" v-if="examineListData.length > 0">
        <div class="item clearfix" v-for="(item,index) in examineListData" :key="index">
          <div class="item_left" @click="goVipDetail(item)">
            <img :src="item.picture" alt>
            <div class="examInfo">
              <p class="title">{{item.book_title}}</p>
              <p>
                <span>
                  <i class="exam-study"></i>
                  您已学完{{item.totalStudyTime}}学时
                </span>
                <span v-if="item.unfinishedStudyTime>0">
                  <i class="exam-time"></i>
                  继续学习{{item.unfinishedStudyTime}}学时可申请参加考试
                </span>
              </p>
            </div>
          </div>
          <div class="item_right">
            <!-- 存在证书（证书状态）-->
            <div v-if="item.isApplyExam==1">
              <span v-if="item.isExamRecord!=0" class="btn btn_two" @click="viewRecord(item)">考试记录</span>
              <span v-if="item.isDoneExamStatus==1" class="btn btn_five" @click="handleLink('/profile/components/myexamine/viewCertificate?id='+item.id)">查看证书</span>
              <span v-if="item.isDoneExamStatus==2" class="btn btn_four" @click="handleLink('/profile/components/myexamine/reviewing?id='+item.id)">审核中</span>
            </div>
            <!-- 不存在证书（申请 ）-->
            <div v-if="item.isApplyExam==0">
              <!-- 不存在考试记录 -->
              <div v-if="item.isExamRecord==0">
                <span class="btn btn_one" @click="gotoExamine(item)">参加考试</span>
              </div>
              <!-- 存在考试记录 -->
              <div v-if="item.isExamRecord ==1">
                <!-- 考试次数用完，都不及格 -->
                <div v-if="item.isDoingExamStatus==2">
                  <span class="btn btn_two" @click="viewRecord(item)">考试记录</span>
                  <span class="btn btn_six" style="cursor:default">不具备认证资格</span>
                </div>
                <!-- 考试及格，考试次数没用完，可以具备申请证书 -->
                <div v-if="item.isDoingExamStatus==1">
                  <span class="btn btn_two" @click="viewRecord(item)">考试记录</span>
                  <span v-if="item.examRecordNum <3 && item.examRecordNum>0" class="btn btn_one" @click="gotoExamine(item)">参加考试</span>
                  <span class="btn btn_three" @click="validateExamPrivilege(item.exam_record_id,item.id)">申请证书</span>
                </div>
                <!-- 未申请过证书 或者 有考试机会，但考试的都不及格 -->
                <div v-if="item.isDoingExamStatus==0">
                  <span v-if="item.isExamRecord==1" class="btn btn_two" @click="viewRecord(item)">考试记录</span>
                  <span v-if="item.examRecordNum!=0" class="btn btn_one" @click="gotoExamine(item)">参加考试</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination" v-if="examinePagemsg.total>11&&examineListData.length > 0">
      <el-pagination background layout="prev, pager, next" :page-size="examinePagemsg.pagesize" :pager-count="5" :page-count="examinePagemsg.pagesize" :current-page="examinePagemsg.page" :total="examinePagemsg.total" @current-change="examineListChange"></el-pagination>
    </div>
    <!-- 空页面 -->
    <div class="content">
      <div v-if="examineListData.length == 0&&!examineLoading" class="noCourse" style="text-align:center;">
        <img src="https://static-image.1911edu.com/VIP_null.png" alt>
        <h4 style="margin-top:10px">学习学院里的课程才会有认证资格呦，快去入学吧～</h4>
      </div>
    </div>
  </div>
</template>
<script>
import { examine } from "~/lib/v1_sdk/index";
import { message } from "~/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";

export default {
  props: ["examineListData", "examinePagemsg", "examineLoading"],
  data () {
    return {
      pageData: {
        id: "",
        name: ""
      },
      vipForm: {
        vipId: "",
        type: 1
      }
    };
  },
  methods: {
    goVipDetail (item) {
      this.$router.push({
        path: "/home/vip/collegeDetail",
        query: {
          id: item.id,
          cid: item.category_id,
          title: item.en_title
        }
      });
    },
    //去考试
    gotoExamine (item) {
      this.pageData.name = "intro";
      this.pageData.id = item.id;
      this.$bus.$emit("whichShow", this.pageData);
    },
    //查看考试记录
    viewRecord (item) {
      this.pageData.id = item.id;
      this.pageData.name = "record";
      this.$bus.$emit("whichShow", this.pageData);
    },
    //审核中、申请证书、查看证书
    handleLink (path) {
      this.$router.push(path);
    },
    validateExamPrivilege (recordId, id) {
      //验证考试权限
      this.vipForm.vipId = id;
      this.vipForm.type = "1";
      examine.validateExamPrivilege(this.vipForm).then(response => {
        if (response.status == 100201) {
          //没有填写个人信息
          message(this, "error", response.msg);
          // 保存考试id  根据考试id判断 info页去哪
          persistStore.set("info", recordId);
          this.pageData.id = id;
          this.pageData.name = "info";
          this.$bus.$emit("whichShow", this.pageData);
        } else {
          this.handleLink(
            "/profile/components/myexamine/applicantCertificate?id=" +
            recordId +
            "&vipID=" +
            id
          );
        }
      });
    }
  },
  mounted () {
    persistStore.set("info", "");
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/profile/certificateList";
</style>
