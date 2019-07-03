<template>
  <div class="evaluate-tag shadow" v-show="dialogVisible ">
    <div class="personal ">
      <!-- 弹窗 -->
      <el-dialog title="课程评价 " :visible.sync="dialogVisible " width="30% " :before-close="handleClose ">
        <div v-loading="loadMsg " class="topDiv ">
          <!-- 用户评价内容组件 -->
          <v-evaluate v-loading="evaluateLoading" :evaluteData="commentator " class="dialog-line"></v-evaluate>
        </div>
        <div class="pagination course-style ">
          <el-pagination :id="pagemsg.total " v-show="pagemsg.total!='0' " background layout="prev, pager, next " :page-size="pagemsg.pagesize " :page-count="pagemsg.pagesize " :current-page="pagemsg.page " :total="pagemsg.total " @current-change="handleCurrentChange"></el-pagination>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import EvaluateContent from '@/components/common/EvaluateContent.vue'
export default {
  props: [
    'dialogVisible',
    'commentator',
    'pagemsg',
    'loadMsg',
    'evaluateLoading'
  ],
  components: {
    'v-evaluate': EvaluateContent
  },
  methods: {
    // 分页事件
    handleCurrentChange(val) {
      this.$emit('pagechange', val)
    },
    // 弹框关闭
    handleClose() {
      this.$emit('handleClose')
    }
  }
}
</script>
