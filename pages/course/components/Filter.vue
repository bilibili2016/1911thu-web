<template>
  <div>
    <div class="classification">
      <div class="clsTitle clearfix">
        <div class="fl hotBtn">
          <el-tabs v-model="activeName" @tab-click="selectActiveTab">
            <el-tab-pane label="全部" name="first"></el-tab-pane>
            <el-tab-pane label="最新" name="second"></el-tab-pane>
            <el-tab-pane label="最热" name="third"></el-tab-pane>
          </el-tabs>
        </div>
        <!-- <div class="fr rightPages">
          <span v-show="hideSwitch">
            <el-switch v-model="onOff" active-color="#8F4ACB" inactive-color="#ddd">
            </el-switch>隐藏已参加课程
          </span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      onOff: 'true',
      hideSwitch: true
    }
  },
  methods: {
    selectActiveTab(tab) {
      this.$emit('selectActiveTab', tab)
    }
  }
}
</script>

<style scoped>
</style>
