<template>
  <div class="headerLogo fl" @click="handleLink">
<<<<<<< HEAD
    <img src="http://static-image.1911edu.com/1911-logo1.png" alt="">
=======
    <img src="http://static-image.1911edu.com/1911-logo.png" alt="">
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";

export default {
  methods: {
<<<<<<< HEAD
    handleLink() {
=======
    handleLink () {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
      this.$emit("handleLink", "/");
    }
  }
};
</script>

<style scoped>
</style>
