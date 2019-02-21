<template>
  <div>
    <div class="classification">
      <div class="clsTitle clearfix">
        <div class="fl hotBtn clearfix">
          <el-tabs v-model="activeName" @tab-click="selectActiveTab">
            <el-tab-pane label="学院全部课程" name="first"></el-tab-pane>
            <el-tab-pane label="学院最新课程" name="second"></el-tab-pane>
            <el-tab-pane label="学院最热课程" name="third"></el-tab-pane>
            <el-tab-pane v-if="cid!=0" label="学院专家组介绍" name="four"></el-tab-pane>
          </el-tabs>
        </div>
        <!-- <div class="fr rightPages">
          <span v-show="hideSwitch">
            <el-switch v-model="onOff" active-color="#773084" inactive-color="#ddd">
            </el-switch>隐藏已参加课程
          </span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { matchSplits } from "@/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";

export default {
  data() {
    return {
      activeName: "first",
      onOff: "true",
      hideSwitch: true,
      cid: ""
    };
  },
  methods: {
    selectActiveTab(tab) {
      if (tab.name == "four") {
        persistStore.set("cid", matchSplits("cid"));
        this.$router.push("/home/teacher/list");
      } else {
        this.$emit("selectActiveTab", tab);
      }
    }
  },
  mounted() {
    this.cid = matchSplits("cid");
  }
};
</script>

