<template>
  <div>
    <el-card class="card-style">
      <div slot="header" class="clearfix">
        <span>最近学习</span>
      </div>
      <div class="content">
        <!-- <div :class="{ minheight : allHome}" v-loading="allHome">
          <v-list v-if="studyData  && studyData.length>0" :data="studyData" :config="configZero"></v-list>
        </div>
        <div class="pagination" style="padding-bottom:40px;" v-if="pagemsgHome.total>pagemsgHome.pagesize">
          <el-pagination background layout="prev, pager, next" :page-size="pagemsgHome.pagesize" :pager-count="5" :page-count="pagemsgHome.pagesize" :current-page="pagemsgHome.page" :total="pagemsgHome.total" @current-change="studyDataChange"></el-pagination>
        </div>
        <v-nomsg class="fillTop" v-if="studyData.length == 0&& !allHome" :config="noMsgOne"></v-nomsg> -->
        <!-- :allLoad="allCourseLoad"  -->
        <v-cardtab :allLoad="allCourseLoad" :data="studyData" :config="configZero" :pagemsg="pagemsgHome" :noMsg="noMsgOne" @pageChange="studyDataChange"></v-cardtab>
      </div>
    </el-card>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import CustomList from '@/pages/profile/components/common/List.vue'
import CardTab from '@/pages/profile/components/common/CardTab.vue'
export default {
  props: [
    'studyData',
    'configZero',
    'noMsgOne',
    'pagemsgHome',
    'allCourseLoad'
  ],
  components: {
    'v-nomsg': NoMsg,
    'v-list': CustomList,
    'v-cardtab': CardTab
  },
  methods: {
    studyDataChange(val) {
      this.$emit('studyDataChange', 3, val)
    }
  }
}
</script>

<style scoped>
.minheight {
  min-height: 400px;
}
</style>
