<template>
  <div>
    <div class="classification">
      <div class="clsTitle clearfix">
        <div class="fl hotBtn clearfix">
          <el-tabs
            v-model="activeName"
            @tab-click="selectActiveTab"
          >
            <el-tab-pane
              label="全部"
              name="first"
            ></el-tab-pane>
            <el-tab-pane
              label="最新"
              name="second"
            ></el-tab-pane>
            <el-tab-pane
              label="最热"
              name="third"
            ></el-tab-pane>
          </el-tabs>
          <div
            class="teacher"
            @click="handleLink('/home/teacher/list')"
          >专家委员会</div>
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
      this.$emit("selectActiveTab", tab);
    },
    handleLink(page) {
      persistStore.set("cid", this.cid);
      this.$router.push(page);
    }
  },
  mounted() {
    this.cid = matchSplits("cid");
  }
};
</script>

