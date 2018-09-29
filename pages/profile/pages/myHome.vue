<template>
  <div>
    <el-card class="changeNav">
      <el-tabs v-model="activeName" @tab-click="handleActive">
        <!-- 我的课程 学习中 -->
        <el-tab-pane label="课程学习" name="first" value="1">
          <v-cardtab :allLoad="allCourseLoad" :data="studyData" :config="configZero" :pagemsg="pagemsg3" :noMsg="noMsgOne" @pageChange="studyDataChange"></v-cardtab>
        </el-tab-pane>
        <!-- 我的课程 已完成 -->
        <el-tab-pane label="项目学习" name="second" value="2">
          <v-cardtab :data="studyProjectData" :config="configFive" :pagemsg="myProjectPage" :noMsg="noMsgOnes" @pageChange="studyProjectChange"></v-cardtab>
        </el-tab-pane>
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
    'studyData',
    'configZero',
    'noMsgOne',
    'allCourseLoad',
    'pagemsg3',
    'myProjectPage',
    'noMsgOnes',
    'studyProjectData',
    'configFive'
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
  methods: {
    studyDataChange(val) {
      this.$emit('studyDataChange', 3, val)
    },
    studyProjectChange(val) {
      this.$emit('studyProjectChange', 4, val)
    },
    handleActive(item) {
      if (persistStore.get('token')) {
        if (item.name === 'first') {
          this.studyDataChange(1)
        } else {
          this.studyProjectChange(1)
        }
      } else {
        this.$router.push('/')
      }
    }
  },
  mounted() {
    this.$bus.$on('activeHome', data => {
      this.activeName = 'first'
    })
  }
}
</script>

<style scoped>
.minheight {
  min-height: 400px;
}
</style>
