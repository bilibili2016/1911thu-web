<template>
  <div>
    <v-home></v-home>
  </div>
</template>
<script>
import Home from "@/pages/home/index.vue";
import { setPagesHeight } from "~/lib/util/helper";
export default {
  components: {
    "v-home": Home
  },
  mounted() {
    // this.$bus.$emit('bannerShow', false)
    setPagesHeight();
  }
};
</script>

