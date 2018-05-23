<template>
<div class="lbt">
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
  <div>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
  <!-- 标签 -->
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
 
</div>
  
</template>

<script>
export default {
  computed: {
  },
  methods: {
    fn(){
      this.data.obj= this.data.obj.push({abc:123})
    },
    handleClick(tab) {
      console.log(tab);
    }
  },
  data(){
    return {
      obj:{
      name: "zs",
      sex: "man",
      age: 13
    },
    checkedNames:[],
    activeName: 'first'
    }
    console.log(this.data);
  }
  
}
</script>
<style lang="scss">
@import "~assets/style/text";
</style>

