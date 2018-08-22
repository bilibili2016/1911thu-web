<template>
  <div>
    <el-card class="changeNav">
      <el-tabs v-model="activeProject" @tab-click="handleProject">
        <!-- 我的项目 学习中 -->
        <el-tab-pane label="学习中" name="first">
          <v-card v-if="studyProjectData  && studyProjectData.length>0" :data="studyProjectData" :config="configOne"></v-card>
          <div class="pagination" v-if="studyProjectData  && studyProjectData.length>0">
            <el-pagination background layout="prev, pager, next" :page-size="projectPageStudy.pagesize" :pager-count="5" :page-count="projectPageStudy.pagesize" :current-page="projectPageStudy.page" :total="projectPageStudy.total" @current-change="studyProjectPageChange"></el-pagination>
          </div>
          <v-nomsg v-else :config="noMsgSix"></v-nomsg>

        </el-tab-pane>
        <!-- 我的项目 已完成 -->
        <el-tab-pane label="已完成" name="second">
          <v-card v-if="readyProjectData && readyProjectData.length>0" :data="readyProjectData" :config="configTwo"></v-card>
          <div class="pagination" v-if="readyProjectData && readyProjectData.length>0">
            <el-pagination background layout="prev, pager, next" :page-size="projectPageReady.pagesize" :pager-count="5" :page-count="projectPageReady.pagesize" :current-page="projectPageReady.page" :total="projectPageReady.total" @current-change="studyProjectPageChange"></el-pagination>
          </div>
          <v-nomsg v-else :config="noMsgSeven"></v-nomsg>

        </el-tab-pane>
        <!-- 我的项目 已过期 -->
        <el-tab-pane label="已过期" name="third">
          <v-card v-if="expiredProjectData && expiredProjectData.length>0" :data="expiredProjectData" :config="configFour"></v-card>
          <div class="pagination" v-if="expiredProjectData && expiredProjectData.length>0">
            <el-pagination background layout="prev, pager, next" :page-size="projectPageExpired.pagesize" :pager-count="5" :page-count="projectPageExpired.pagesize" :current-page="projectPageExpired.page" :total="projectPageExpired.total" @current-change="expiredProjectPageChange"></el-pagination>
          </div>
          <v-nomsg v-else :config="noMsgEight"></v-nomsg>

        </el-tab-pane>
        <!-- 我的项目 我的收藏 -->
        <el-tab-pane label="我的收藏" name="fourth">
          <v-card v-if="collectProjectData && collectProjectData.length>0" :data="collectProjectData" :config="configZero"></v-card>
          <div class="pagination" v-if="collectProjectData && collectProjectData.length>0">
            <el-pagination background layout="prev, pager, next" :page-size="projectPageCollect.pagesize" :pager-count="5" :page-count="projectPageCollect.pagesize" :current-page="projectPageCollect.page" :total="projectPageCollect.total" @current-change="collectProjectPageChange"></el-pagination>
          </div>
          <v-nomsg v-else :config="noMsgNine"></v-nomsg>

        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/pages/noMsg.vue'
import CustomList from '@/pages/profile/components/List.vue'
import CustomCard from '@/pages/profile/components/Card.vue'
export default {
  components: {
    'v-nomsg': NoMsg,
    'v-list': CustomList,
    'v-card': CustomCard
  },
  props: [
    'studyProjectData',
    'configOne',
    'projectPageStudy',
    'noMsgSix',
    'readyProjectData',
    'configTwo',
    'projectPageReady',
    'noMsgSeven',
    'expiredProjectData',
    'configFour',
    'projectPageExpired',
    'noMsgEight',
    'collectProjectData',
    'configZero',
    'projectPageCollect',
    'noMsgNine'
  ],
  data() {
    return {
      activeProject: 'first'
    }
  },
  methods: {
    studyProjectPageChange(val) {
      this.$emit('studyProjectPageChange', val)
    },
    expiredProjectPageChange(val) {
      this.$emit('expiredProjectPageChange', val)
    },
    collectProjectPageChange(val) {
      this.$emit('collectProjectPageChange', val)
    },
    handleProject() {
      this.$emit('handleProject')
    }
  }
}
</script>

<style scoped>
</style>
