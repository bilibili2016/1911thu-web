<template>
  <div>
    <div class="banner">
      <div class="center category-style">
        <div class="college">
          <li class="title">学院：</li>
          <ul>
            <li :class="{btnBg: this.cid === '' ? true : false }">
              <el-button @click="selectAllCid">全部</el-button>
            </li>
            <li v-for="(item,index) in cidData" :index="index" :key="index" :class="{btnBg: cidBg === item.id ? true : false }">
              <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button>
            </li>
          </ul>
        </div>
        <div class="classification">
          <li class="title">分类：</li>
          <ul>
            <li :class="{btnBg: this.pid === '' ? true : false }">
              <el-button @click="selectAllPid">全部</el-button>
            </li>
            <li v-for="(items,index) in pidData.childList" :index="index" :key="index" :class="{btnBg: pidBg === items.id ? true : false }">
              <el-button @click="selectPid(items,index)">{{items.category_name}}</el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['cidData', 'pidData', 'cidBg', 'pidBg'],

  computed: {
    ...mapState('auth', ['pid', 'cid', 'cindex'])
  },
  data() {
    return {}
  },
  methods: {
    // 大类 全部
    selectAllCid() {
      this.$emit('selectAllCid')
    },
    // 大类 单个
    selectCid(item, index) {
      this.$emit('selectCid', item, index)
    },
    // 小类 全部
    selectAllPid() {
      this.$emit('selectAllPid')
    },
    // 小类 单个
    selectPid(items, index) {
      this.$emit('selectPid', items, index)
    }
  },
  mounted() {
    console.log(this.pidData, '78789')
    console.log(this.pidBg, '787899999999')
    console.log(this.cidBg, 'cidBg')
  }
}
</script>

<style scoped lang="scss">
// 因兼容问题暂时组件引入
@import '~assets/style/course/category';
.btnBg {
  .el-button {
    background-color: rgba(143, 74, 203, 1);
    color: #fff;
    border: none;
  }
}
</style>
