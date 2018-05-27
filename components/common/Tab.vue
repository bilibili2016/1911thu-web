<template>

   <div class="classify" :class="{ bg: tabmsg}">
      <el-tabs v-model="activeName" @tab-click="handleClick" tabPosition="left" >
        <el-tab-pane v-for="item in classify" :key="item.id" :label="item" >
          <div class="subClass">
            <h4>全部<span><i></i></span></h4>
            <p>
              <span>{{item}}</span>
              <span>{{item}}</span>
              <span>{{item}}</span>
            </p>
          </div>
          <div class="courseMsg">
            <div class="courseOne clearfix" v-for="(cus,index) in courses" :key="index">
              <img class="fl" :src="cus.src" alt="">
              <div class="fl">
                <h5>{{cus.title}}</h5>
                <p>{{cus.author}}</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>


</template>

<script>
export default {
  props: ["classify", "courses", "tabmsg", "activeName"],
  methods: {
    handleClick() {
      this.tabmsg = true;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/config";
@import "~assets/style/index";
</style>
