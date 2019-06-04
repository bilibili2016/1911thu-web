<template>
  <div class="home">
    <v-welcome></v-welcome>

  </div>
</template>

<script>
import welcome from "@/pages/english/components/Welcome.vue";
export default {
  components: {
    "v-welcome": welcome,
  },
  data () {
    return {

    }
  },
  //  销毁之前展示头部 底部
  destroyed () {
    this.$bus.$emit("headerFooterShow");
  },
  //   进入页面的的时候
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bus.$emit("headerFooterHide");
    });
  },
}
</script>

<style>
body {
  padding: 0;
}
</style>
<style scoped lang="scss">
@import "~assets/style/english/home";
</style>