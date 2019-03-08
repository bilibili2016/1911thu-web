<template>
  <div class="dialogPop">
    <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%" :show-close=false :close-on-click-modal=false>
      <span>{{dialog.info}}</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="confirmPop">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["dialog"],
  data() {
    return {
      dialogVisible: true
    };
  },
  methods: {
    confirmPop() {
      this.dialogVisible = false;
      this.$emit("closeDialog");
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/components/dialog.scss";
</style>