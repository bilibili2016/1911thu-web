<template>
  <div>
    <el-card class="card-style">
      <div slot="header" class="clearfix">
        <div v-if="!isShowDetail">
          <span style="color:#773084">我的消息</span>
        </div>
        <div v-else>
          <span class="firstText" @click="returnPage">我的消息 </span>
          <span v-if="isShowDetail" class="secondText"> > 消息详情</span>
        </div>
      </div>
      <v-infoList v-if="!isShowDetail" @noMsg="isNoMyMsg" @goToInfoDetail="goToInfoDetail"></v-infoList>
      <v-infoDetail v-else :detailData="detailData"></v-infoDetail>
      <v-nomsg v-show="noMyMsg" :config="noMsgEle"></v-nomsg>
    </el-card>
  </div>
</template>

<script>
import InfoList from "@/pages/profile/components/myinfo/infoList.vue";
import InfoDetail from "@/pages/profile/components/myinfo/infoDetail.vue";
import NoMsg from "@/pages/profile/components/common/noMsg.vue";
export default {
  components: {
    "v-infoList": InfoList,
    "v-infoDetail": InfoDetail,
    "v-nomsg": NoMsg
  },
  props: ["noMyMsg", "noMsgEle"],
  data () {
    return {
      isShowDetail: false,
      detailData: ""
    };
  },
  methods: {
    isNoMyMsg (flag) {
      this.$emit("isNoMyMsg", flag);
    },
    goToInfoDetail (data) {
      this.isShowDetail = true;
      this.detailData = data;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    returnPage () {
      this.isShowDetail = false;
    }
  },
  mounted () {
    this.$bus.$on("isShowList", data => {
      this.isShowDetail = false;
    });
  }
};
</script>

