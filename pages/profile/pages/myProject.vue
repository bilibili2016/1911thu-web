<template>
  <div>
    <el-card class="changeNav">
      <el-tabs v-model="activeName" @tab-click="handleActive">
        <!-- 我的项目 学习中 -->
        <el-tab-pane label="学习中" name="first" value="1">
          <v-cardtab :allLoad="allProjectLoad" :data="studyProjectData" :config="configOne" :pagemsg="projectPageStudy" :noMsg="noMsgSix" @pageChange="studyProjectPageChange"></v-cardtab>
        </el-tab-pane>
        <!-- 我的项目 已完成 -->
        <el-tab-pane label="已完成" name="second" value="2">
          <v-cardtab :data="readyProjectData" :config="configSix" :pagemsg="projectPageReady" :noMsg="noMsgSeven" @pageChange="alreadyProjectPageChange"></v-cardtab>
        </el-tab-pane>
        <!-- 我的项目 已过期 -->
        <el-tab-pane label="已过期" name="third" value="3">
          <v-cardtab :data="expiredProjectData" :config="configSeven" :pagemsg="projectPageExpired" :noMsg="noMsgEight" @pageChange="expiredProjectPageChange"></v-cardtab>
        </el-tab-pane>
        <!-- 我的项目 我的收藏 -->
        <el-tab-pane label="我的收藏" name="fourth" value="0">
          <v-cardtab :data="collectProjectData" :config="configZero" :pagemsg="projectPageCollect" :noMsg="noMsgNine" @pageChange="collectProjectPageChange"></v-cardtab>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'

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
      activeName: 'first'
    }
  },
  mounted() {
    this.$bus.$on('activeProject', data => {
      this.activeName = 'first'
    })
  },
  methods: {
    //学习中
    studyProjectPageChange(val) {
      this.$emit('studyProjectPageChange', 1, val)
    },
    //已完成
    alreadyProjectPageChange(val) {
      this.$emit('alreadyProjectPageChange', 2, val)
    },
    //已过期
    expiredProjectPageChange(val) {
      this.$emit('expiredProjectPageChange', 3, val)
    },
    //我的收藏
    collectProjectPageChange(val) {
      this.$emit('collectProjectPageChange', val)
    },
    handleProject() {
      this.$emit('handleProject')
    },
    handleActive(item) {
      if (persistStore.get('token')) {
        if (item.$attrs.value == '0') {
          this.$emit('handleActiveCollect', 1)
        } else {
          this.$emit('handleActive', item.$attrs.value, 1)
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
