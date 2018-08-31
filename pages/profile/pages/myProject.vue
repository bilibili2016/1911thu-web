<template>
  <div>
    <el-card class="changeNav">
      <el-tabs v-model="activeProject" @tab-click="handleActive">
        <!-- 我的项目 学习中 -->
        <el-tab-pane label="学习中" name="first" value="1">
          <!-- {{allProjectLoad}} -->
          <!-- <div :class="{ minheight : allProjectLoad}" v-loading="allProjectLoad">
            <v-card v-if="studyProjectData  && studyProjectData.length>0" :data="studyProjectData" :config="configOne"></v-card>
          </div>

          <div class="pagination" v-if="studyProjectData  && studyProjectData.length>11">
            <el-pagination background layout="prev, pager, next" :page-size="projectPageStudy.pagesize" :pager-count="5" :page-count="projectPageStudy.pagesize" :current-page="projectPageStudy.page" :total="projectPageStudy.total" @current-change="studyProjectPageChange"></el-pagination>
          </div>
          <v-nomsg v-if="studyProjectData.length == 0 && !allProjectLoad" :config="noMsgSix"></v-nomsg> -->
          <!-- {{allProjectLoad}}=={{111}} -->
          <v-cardtab :allLoad="allProjectLoad" :data="studyProjectData" :config="configOne" :pagemsg="projectPageStudy" :noMsg="noMsgSix"></v-cardtab>
        </el-tab-pane>
        <!-- 我的项目 已完成 -->
        <el-tab-pane label="已完成" name="second" value="2">
          <v-cardtab :data="readyProjectData" :config="configSix" :pagemsg="projectPageReady" :noMsg="noMsgSeven"></v-cardtab>
        </el-tab-pane>
        <!-- 我的项目 已过期 -->
        <el-tab-pane label="已过期" name="third" value="3">
          <v-cardtab :data="expiredProjectData" :config="configSeven" :pagemsg="projectPageExpired" :noMsg="noMsgEight"></v-cardtab>
        </el-tab-pane>
        <!-- 我的项目 我的收藏 -->
        <el-tab-pane label="我的收藏" name="fourth" value="0">
          <v-cardtab :data="collectProjectData" :config="configZero" :pagemsg="projectPageCollect" :noMsg="noMsgNine"></v-cardtab>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import CustomList from '@/pages/profile/components/common/List.vue'
import CustomCard from '@/pages/profile/components/common/Card.vue'
import CardTab from '@/pages/profile/components/common/CardTab.vue'
export default {
  components: {
    'v-nomsg': NoMsg,
    'v-list': CustomList,
    'v-card': CustomCard,
    'v-cardtab': CardTab
  },
  props: [
    'studyProjectData',
    'configOne',
    'projectPageStudy',
    'noMsgSix',
    'readyProjectData',
    'configSix',
    'projectPageReady',
    'noMsgSeven',
    'expiredProjectData',
    'configSeven',
    'projectPageExpired',
    'noMsgEight',
    'collectProjectData',
    'configZero',
    'projectPageCollect',
    'noMsgNine',
    'allProjectLoad'
  ],
  data() {
    return {
      activeProject: 'first'
    }
  },
  methods: {
    studyProjectPageChange(val) {
      this.$emit('studyProjectPageChange', 1, val)
    },
    alreadyProjectPageChange(val) {
      this.$emit('alreadyProjectPageChange', 2, val)
    },
    expiredProjectPageChange(val) {
      this.$emit('expiredProjectPageChange', 3, val)
    },
    collectProjectPageChange(val) {
      this.$emit('collectProjectPageChange', val)
    },
    handleProject() {
      this.$emit('handleProject')
    },
    handleActive(item) {
      if (item.$attrs.value == '0') {
        this.$emit('handleActiveCollect', 1)
      } else {
        this.$emit('handleActive', item.$attrs.value, 1)
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
