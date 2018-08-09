<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="介绍" name="first">
        <div class="detail descript" v-html="courseList.content" v-loading="loadMsg"></div>
      </el-tab-pane>
      <el-tab-pane label="目录" name="second">
        <v-line :catalogs="catalogs" :privileMsg="privileMsg"></v-line>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/**
 * 组件名字
 */
import CustomLine from '@/components/common/Line.vue'
export default {
  props: ['activeName', 'courseList', 'loadMsg', 'catalogs', 'privileMsg'],
  components: {
    'v-line': CustomLine
  }
}
</script>

