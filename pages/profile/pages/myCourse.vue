<template>
  <div>
    <el-card class="changeNav">
      <el-tabs v-model="activeName" @tab-click="handleActive">
        <!-- 我的课程 学习中 -->
        <el-tab-pane label="学习中" name="first" value="1">
          <v-cardtab :allLoad="allCourseLoad" :noMsgCourse="noMsgCourse" :data="newDataing" :config="configOne" :pagemsg="pagemsg1" :noMsg="noMsgTwo" @pageChange="studyPageChange"></v-cardtab>
        </el-tab-pane>
        <!-- 我的课程 已完成 -->
        <el-tab-pane label="已完成" name="second" value="2">
          <v-cardtab :data="newDataReady" :config="configTwo" :pagemsg="pagemsg2" :noMsg="noMsgThree" @pageChange="readyStudyPageChange"></v-cardtab>
        </el-tab-pane>
        <!-- 我的课程 已过期 -->
        <el-tab-pane label="已过期" name="fourth" value="4">
          <v-cardtab :data="overTimeData" :config="configFour" :pagemsg="pagemsg2" :noMsg="noMsgFour" @pageChange="overStudyPageChange"></v-cardtab>
        </el-tab-pane>
        <!-- 我的课程 我的收藏 -->
        <!-- <el-tab-pane label="我的收藏" name="third" value="0">
          <v-cardtab :data="collectionData" :config="configZero" :pagemsg="pagecltcourse" :noMsg="noMsgFive" @pageChange="collectionPageChange"></v-cardtab>
        </el-tab-pane> -->
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
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
    'pagecltcourse',
    'noMsgCourse'
  ],
  components: {
    'v-nomsg': NoMsg,
    'v-list': CustomList,
    'v-cardtab': CardTab
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  mounted() {
    this.$bus.$on('activeCourse', data => {
      this.activeName = 'first'
    })
  },
  methods: {
    readyStudyPageChange(val) {
      this.$emit('readyStudyPageChange', 2, val)
    },
    overStudyPageChange(val) {
      this.$emit('overStudyPageChange', 4, val)
    },
    studyPageChange(val) {
      this.$emit('studyPageChange', 1, val)
    },
    collectionPageChange(val) {
      this.$emit('collectionPageChange', val)
    },
    handleActive(item) {
      if (persistStore.get('token')) {
        if (item.$attrs.value !== '0') {
          this.$emit('handleActive', item.$attrs.value, 1)
        } else {
          this.$emit('handleActiveCollect', 1)
        }
      } else {
        this.$router.push('/')
        this.$bus.$emit('loginShow', true)
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
