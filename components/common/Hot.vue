
<template>
  <div class="classification">
    <div class="clsTitle clearfix">
      <div class="fl hotBtn">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <!-- <el-tab-pane label="全部" name="first"></el-tab-pane> -->
          <el-tab-pane label="全部" name="first"></el-tab-pane>
          <el-tab-pane label="最新" name="second"></el-tab-pane>
          <el-tab-pane label="最热" name="third"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="fr rightPages">
        <el-switch class="fl" v-model="onOff" active-color="#773084" inactive-color="#999">
        </el-switch>隐藏已参加课程
        <el-pagination class="fr" small layout="pager, prev, next" :total="20"></el-pagination>
      </div>

    </div>
  </div>
</template>

<script>
import CustomPagination from '@/components/common/Pagination.vue'
export default {
  data() {
    return {
      activeName: '',
      checked: true,
      onOff: true,
      pagemsg: {
        page: 1,
        pagesize: 8,
        total: 12
      }
    }
  },
  methods: {
    bind(index) {
      $('.classList ul li').removeClass('checked')
      $('.classList ul li')
        .eq(index)
        .addClass('checked')
    },
    handleClick() {}
  },
  components: {
    'v-page': CustomPagination
  }
}
</script>

