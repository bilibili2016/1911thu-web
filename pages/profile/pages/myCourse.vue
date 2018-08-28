<template>
  <div>
    <el-card class="changeNav">
      <el-tabs v-model="activeNames" @tab-click="handleActive">
        <!-- 我的课程 学习中 -->
        <el-tab-pane label="学习中" name="first" value="1">
          <!-- allCourseLoad newDataing  configOne pagemsg1 -->
          <!-- newDataReady configTwo pagemsg2 -->

          <!-- <div :class="{ minheight : allCourseLoad}" v-loading="allCourseLoad">
            <v-list :data="newDataing" :config="configOne" v-if="newDataing  && newDataing.length>0"></v-list>
          </div>
          <div class="pagination" v-if="newDataing.length>11">
            <el-pagination background layout="prev, pager, next" :page-size="pagemsg1.pagesize" :pager-count="5" :page-count="pagemsg1.pagesize" :current-page="pagemsg1.page" :total="pagemsg1.total" @current-change="studyPageChange"></el-pagination>
          </div>
          <v-nomsg v-if="newDataing.length== 0&& !allCourseLoad" :config="noMsgTwo"></v-nomsg> -->
          <v-cardtab :allLoad="allCourseLoad" :data="newDataing" :config="configOne" :pagemsg="pagemsg1" :noMsg="noMsgTwo" @pageChange="studyPageChange"></v-cardtab>
        </el-tab-pane>
        <!-- 我的课程 已完成 -->
        <el-tab-pane label="已完成" name="second" value="2">
          <v-cardtab :data="newDataReady" :config="configTwo" :pagemsg="pagemsg2" :noMsg="noMsgThree" @pageChange="readyStudyPageChange"></v-cardtab>
        </el-tab-pane>
        <!-- 我的课程 已过期 -->
        <el-tab-pane label="已过期" name="fourth" value="4">
          <v-cardtab :data="overTimeData" :config="configFour" :pagemsg="pagemsg2" :noMsg="noMsgFour"></v-cardtab>
        </el-tab-pane>
        <!-- 我的课程 我的收藏 -->
        <el-tab-pane label="我的收藏" name="third" value="0">
          <v-cardtab :data="collectionData" :config="configZero" :pagemsg="pagecltcourse" :noMsg="noMsgFive" @pageChange="collectionPageChange"></v-cardtab>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import CustomList from '@/pages/profile/components/common/List.vue'
import CardTab from '@/pages/profile/components/common/CardTab.vue'
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
    'allCourseLoad',
    'pagecltcourse'
  ],
  components: {
    'v-nomsg': NoMsg,
    'v-list': CustomList,
    'v-cardtab': CardTab
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
