<template>
  <div class="unlogged" v-show="showTip">
      <div class="unloginner">
        <i class="el-icon-close" @click="close"></i>
        <img src="@/assets/images/light.png">
        <p class="unlognote">未登录，请您先<span>登陆</span></p>
      </div>
  </div>
</template>

<script>
  export default {
    methods: {
      
    },
    data() {
      return {
        showTip:true
      };
    },
    mounted () {},
    methods:{
      close() {
        this.showTip = false;
      }
    }
  };
</script>




