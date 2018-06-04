<template>
<!-- :class="{ bg: tab}" -->
  <div class="classify" :class="{ bg: tabd}">
    <el-tabs v-model="actived" @tab-click="handleClick" tabPosition="left" @mouseenter="handleClick">
      <el-tab-pane v-for="(item,index) in classify" :key="item.id" :label="item" @click="handleClick(item,index)">
        <div class="subClass">
          <h4>全部<span><i></i></span></h4>
          <p>
            <!-- @click="golink('home/category')" -->
            <span  v-for="(items,index) in classtext" :key="items.id" @click="handlePid(item,index)">
              <span>
                {{items.name}}
              </span>
            </span>
          </p>
        </div>
        <div class="courseMsg">
          <div class="courseOne clearfix" v-for="(cus,index) in courses" :key="index" @click="getMore">
            <img class="fl" :src="cus.src" alt="">
            <div class="fl mousehover">
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
import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    props: ["classify", "courses", "tab", "active", 'classtext'],
    data() {
      return {
        actived: null,
        tabd: null,
        cidform: {
          cids: ''
        },
         pidform: {
          pids: ''
        }
      }
    },
    methods: {
      ...mapActions('auth', [
        'setCid',
        'setPid'
      ]),
      handleClick(item,index) {
        this.tabd = true;
        console.log(item.index, '这是index')
        this.cidform.cids = Number(item.index)
        this.setCid(this.cidform)
      },

      getMore(linedata) {
         this.$router.push('course/pages/coursedetail')
      },
      handlePid(item,index) {
        this.$router.push('course/pages/category')
        console.log(index)
        this.pidform.pids = index
        this.setPid(this.pidform)
      }
    },
    mounted () {
      this.actived = this.active
      this.tabd = this.tab

    }
  };
</script>


