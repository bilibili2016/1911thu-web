<template>
  <div>
    <el-card class="changeNav">
      <el-tabs v-model="activeNames" @tab-click="handleActive">
        <!-- 我的课程 学习中 -->
        <el-tab-pane label="学习中" name="first" value="1">
          <div :class="{ minheight : allCourseLoad}" v-loading="allCourseLoad">
            <v-list :data="newDataing" :config="configOne" v-if="newDataing  && newDataing.length>0"></v-list>
          </div>
          <!-- {{pagemsg1.pagesize}} == {{pagemsg1.page}} == {{pagemsg1.total}} -->
          <div class="pagination" v-if="newDataing.length>11">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg1.pagesize" :pager-count="5" :page-count="pagemsg1.pagesize" :current-page="pagemsg1.page" :total="pagemsg1.total" @current-change="studyPageChange"></el-pagination>
          </div>
          <v-nomsg v-if="newDataing.length== 0&& !allCourseLoad" :config="noMsgTwo"></v-nomsg>

        </el-tab-pane>
        <!-- 我的课程 已完成 -->
        <el-tab-pane label="已完成" name="second" value="2">
          <v-list v-if="newDataReady && newDataReady.length>0" :data="newDataReady" :config="configTwo"></v-list>
          <div class="pagination" v-if="newDataReady && newDataReady.length>11">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg2.pagesize" :pager-count="5" :page-count="pagemsg2.pagesize" :current-page="pagemsg2.page" :total="pagemsg2.total" @current-change="readyStudyPageChange"></el-pagination>
          </div>
          <v-nomsg v-if="newDataReady.length == 0" :config="noMsgThree"></v-nomsg>

        </el-tab-pane>
        <!-- 我的课程 已过期 -->
        <el-tab-pane label="已过期" name="fourth" value="4">
          <v-list v-if="overTimeData && overTimeData.length>0" :data="overTimeData" :config="configFour"></v-list>
          <div class="pagination" v-if="overTimeData && overTimeData.length>11">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg2.pagesize" :pager-count="5" :page-count="pagemsg2.pagesize" :current-page="pagemsg2.page" :total="pagemsg2.total" @current-change="readyStudyPageChange"></el-pagination>
          </div>
          <v-nomsg v-if="overTimeData.length == 0" :config="noMsgFour"></v-nomsg>

        </el-tab-pane>
        <!-- 我的课程 我的收藏 -->
        <el-tab-pane label="我的收藏" name="third" value="0">
          <v-list v-if="collectionData && collectionData.length>0" :data="collectionData" :config="configZero"></v-list>
          <div class="pagination" v-if="collectionData && collectionData.length>11">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg3.pagesize" :pager-count="5" :page-count="pagemsg3.pagesize" :current-page="pagemsg3.page" :total="pagemsg3.total" @current-change="collectionPageChange"></el-pagination>
          </div>
          <v-nomsg v-if="collectionData.length == 0" :config="noMsgFive"></v-nomsg>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import CustomList from '@/pages/profile/components/common/List.vue'
export default {
  props: [
    'newDataing',
    'configOne',
    'pagemsg1',
    'noMsgTwo',
    'newDataReady',
    'configTwo',
    'pagemsg2',
    'noMsgThree',
    'overTimeData',
    'configFour',
    'noMsgFour',
    'collectionData',
    'pagemsg3',
    'configZero',
    'noMsgFive',
    'allCourseLoad'
  ],
  components: {
    'v-nomsg': NoMsg,
    'v-list': CustomList
  },
  data() {
    return {
      activeNames: 'first'
    }
  },
  methods: {
    readyStudyPageChange(val) {
      this.$emit('readyStudyPageChange', 2, val)
    },
    studyPageChange(val) {
      this.$emit('studyPageChange', 1, val)
    },
    collectionPageChange(val) {
      this.$emit('collectionPageChange', val)
    },
    handleActive(item) {
      if (item.$attrs.value !== '0') {
        this.$emit('handleActive', item.$attrs.value, 1)
      } else {
        this.$emit('handleActiveCollect', 1)
      }
    }
  }
}
</script>

<style scoped>
.minheight {
  min-height: 400px;
}
</style>
