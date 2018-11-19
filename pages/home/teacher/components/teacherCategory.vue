<template>
  <div class="teacherCategory">
    <div class="college">
      <h4 class="title">学院：</h4>
      <ul>
        <li v-for="(item,index) in cidData" :index="index" :key="index" :class="{btnBg: cid === item.id ? true : false }">
          <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button>
        </li>
      </ul>
    </div>
    <!-- 课程不展示 -->
    <div class="classification">
      <!-- v-if="!loadList" -->
      <h4 class="title">专长领域：</h4>
      <ul>
        <li v-for="(items,index) in pidData.childList" :index="index" :key="index" :class="{btnBg: pid === items.id ? true : false }">
          <el-button @click="selectPid(items,index)">{{items.category_name}}</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      cidData: [],
      pidData: [],
      cid: null,
      pid: '0',
      cp: ''
    }
  },
  methods: {
    // 大类 单个
    selectCid(item, index) {
      this.$emit('selectCid', item, index)
    },
    // 小类 单个
    selectPid(items, index) {
      this.$emit('selectPid', items, index)
    }
  },
  mounted() {
    this.cid = window.location.search.split('&')[0].split('=')[1]
    this.pid = window.location.search.split('&')[3].split('=')[1]
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/home/teacherCategory';
</style>
