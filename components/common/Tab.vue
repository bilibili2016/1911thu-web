<template>
<!-- :class="{ bg: tab}" -->
  <div class="classify" :class="{ bg: tabd}">
    <el-tabs v-model="actived" @tab-click="handleClick" tabPosition="left" @mouseenter="handleClick">
      <el-tab-pane v-for="item in classify" :key="item.id" :label="item">
        <div class="subClass">
          <h4>全部<span><i></i></span></h4>
          <p>
            <!-- @click="golink('home/category')" -->
            <span @click="golink('course/pages/category')">{{item}}</span>
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
    props: ["classify", "courses", "tab", "active"],
    data() {
      return {
        actived: null,
        tabd: null
      }
    },
    methods: {
      handleClick() {
        this.tabd = true;
      },
      golink(linedata) {
        this.$router.push(linedata)
      }
    },
    mounted () {
      this.actived = this.active
      this.tabd = this.tab

    }
  };
</script>


