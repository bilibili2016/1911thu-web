<template>
  <div class="binding">
    <div class="bindInput clearfix">
      <input type="text" v-model="bindForm.courseId" placeholder=" 请输入您的兑换码">
      <span class="fr" @click="detection">绑定</span>
    </div>
    <div class="bindingRecord">
      <div class="brHeader">
        <span>兑换码</span>
        <span>类型</span>
        <span>兑换日期</span>
        <span>兑换信息</span>
      </div>
      <div class="brBody" v-for="(code,index) in invitationCodeList" :key="index">
        <div>{{code.invitation_code}}</div>
        <div v-if="code.type==='1'">课程</div>
        <div v-if="code.type==='2'">项目</div>
        <div v-if="code.type==='3'">课程+项目</div>
        <div v-if="code.type==='4'">自定制项目</div>
        <div v-if="code.type==='5'">学院</div>

        <div>{{exchangeTime(code.create_time)}}</div>
        <div class="courseList">查看
          <div class="course">
            <span></span>
            <p v-for="(course,index) in code.orderCurriculumList" :key="index" @click="handleLink(course,code.type)">
              <i v-if="code.type==='2'">项目</i>
              <i v-if="code.type==='4'">自定制项目</i>
              {{course.title}}
            </p>
          </div>
        </div>
      </div>
      <v-nomsg v-if="!invitationCodeList||invitationCodeList.length<1" class="noCodes" :config="noMsg"></v-nomsg>
    </div>
  </div>
</template>

<script>
import { binding } from "~/lib/v1_sdk/index";
import { timestampToYMD, open } from "@/lib/util/helper";
import { mapState, mapGetters, mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import NoMsg from "@/pages/profile/components/common/noMsg.vue";
export default {
  props: ["invitationCodeList"],
  components: {
    "v-nomsg": NoMsg
  },
  data () {
    return {
      noMsgImg: "https://static-image.1911edu.com/noMsg.png",
      bindForm: {
        courseId: ""
      },
      kidForm: {
        kids: ""
      },
      noMsg: {
        type: "myCode",
        text: "抱歉，您现在还没有兑换码~"
      },
      type: 1,
      responseData: { type: true, res: "" },
      courseUrl: {
        base: "/curriculum/detail",
        kid: 0,
        tid: 0
      }
    };
  },
  methods: {
    // 跳转课程或项目详情
    handleLink (item, type) {
      if (item.type === "1") {
        //课程
        this.courseUrl.kid = item.curriculum_id;
        open(this.courseUrl);
      } else {
        if (type == "5") {
          //vip
          this.$router.push({
            path: "/home/vip/collegeDetail",
            query: {
              id: item.curriculum_id,
              cid: item.category_id,
              title: item.en_title
            }
          });
          return false;
        }
        if (type === "2") {
          //项目
          //this.type 跳转页面区分是标准项目（1）还是定制项目（2）
          this.type = 1;
        } else {
          this.type = 2;
        }
        this.$router.push({
          path: "/project/projectdetail",
          query: {
            kid: item.curriculum_id,
            type: this.type
          }
        });
      }
    },
    // 时间戳转日期格式
    exchangeTime (time) {
      return timestampToYMD(time);
    },
    // 检测兑换码内是否包含已绑定的课程
    detection () {
      if (
        this.bindForm.courseId == "" ||
        !/^[A-Za-z0-9]+$/.test(this.bindForm.courseId)
      ) {
        this.$message({
          showClose: true,
          type: "error",
          message: "请输入正确的兑换码！"
        });
      } else {
        binding.detectionCode(this.bindForm).then(res => {
          if (res.status === 100008) {
            this.responseData.res = res;
            this.$bus.$emit("reLoginAlertPop", this.responseData);
            return false;
          }
          // 判断兑换码内是否包含已绑定的课程
          if (res.data.is_exist === 1) {
            this.$confirm(
              "该兑换码所包含商品与已购商品重复，如继续绑定，重复商品将进行有效时间累加。",
              {
                confirmButtonText: "取消",
                cancelButtonText: "坚持绑定",
                closeOnHashChange: false,
                // type: 'warning',
                center: true
              }
            )
              .then(() => {
                this.$message({
                  type: "info",
                  message: "已取消绑定"
                });
              })
              .catch(() => {
                // 添加绑定课程
                this.doSubmit();
              });
          } else {
            this.doSubmit();
          }
        });
      }
    },
    // 添加课程 绑定
    doSubmit () {
      binding.bindingCurriculumPrivate(this.bindForm).then(res => {
        if (res.status === 0) {
          this.$message({
            showClose: true,
            type: "success",
            message: res.msg
          });
          // 兑换完成只要不是课程就更新个人中心头部的VIP天数
          if (res.data.invitation_code_type != 1) {
            this.$bus.$emit("reUserInfo");
          }
          // 课程绑定后重新拉取
          this.$emit("reGetCode");
          this.bindForm.courseId = "";
        } else if (res.status === 100100) {
          this.$message({
            showClose: true,
            type: "error",
            message: res.msg
          });
        }
      });
    }
  },
  mounted () { }
};
</script>



<style scoped lang="scss">
@import "~assets/style/profile/binging.scss";
</style>
