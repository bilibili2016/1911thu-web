<template>
  <div class="headerLogo fl" @click="handleLink">
    <img v-if="isIE" src="https://static-image.1911edu.com/1911-logoIE.png" alt="">
    <img v-else src="https://static-image.1911edu.com/1911-logo.png" alt="">
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";

export default {
  data () {
    return {
      isIE: false
    }
  },
  methods: {
    handleLink () {
      this.$emit("handleLink", "/");
    }
  },
  mounted () {
    let userAgent = navigator.userAgent;
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
      this.isIE = true
    }
  }
};
</script>

<style scoped>
</style>
