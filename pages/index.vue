<template>
<div>
  <v-home></v-home>
</div>
</template>

<script>
import Home from "@/pages/home/index.vue";
export default {
  components: {
    "v-home": Home
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/style/config";
@import "~assets/style/index";
</style>
