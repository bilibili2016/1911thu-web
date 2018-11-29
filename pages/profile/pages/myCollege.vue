<template>
  <div class="college">
    <el-card class="changeNav">
      <!-- 列表 -->
      <div class="list">
        <div class="top-con clearfix">
          <span>我的学院</span>
        </div>
        <div class="listParent" v-loading="collegeLoading">
          <div
            class="collegeList"
            :class="{ minheight : collegeLoading}"
            v-loading="collegeLoading"
            v-if="collegeListData.length > 0"
          >
            <v-list :collegeListData="collegeListData"></v-list>
          </div>
          <div class="pagination" v-if="collegePagemsg.total>11&&collegeListData.length > 0">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="collegePagemsg.pagesize"
              :pager-count="5"
              :page-count="collegePagemsg.pagesize"
              :current-page="collegePagemsg.page"
              :total="collegePagemsg.total"
              @current-change="examineListChange"
            ></el-pagination>
          </div>
          <!-- 空页面 -->
          <div class="content" v-if="collegeListData.length == 0&&!collegeLoading">
            <div class="noCourse" style="text-align:center;">
              <img src="http://static-image.1911edu.com/VIP_null.png" alt>
              <h4 style="margin-top:10px">您暂未加入任何学院，快去加入吧！</h4>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import NoMsg from "@/pages/profile/components/common/noMsg.vue";
import List from "@/pages/profile/components/mycollege/collegeList";

export default {
  props: ["collegeListData", "collegePagemsg", "collegeLoading"],
  components: {
    "v-list": List,
    "v-nomsg": NoMsg
  },
  data () {
    return {
      noMsg: {
        type: "myExamine",
        text: "加入学院后才会有认证资格呦，快去加入吧！"
      }
    };
  },

  methods: {
    examineListChange () {
      this.$emit("examineListChange");
    }
  },
  mounted () { }
};
</script>
