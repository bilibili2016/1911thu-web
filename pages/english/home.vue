<template>
  <div class="home">
    <v-welcome></v-welcome>
    <div class="welcome">
      <h3></h3>
      <h6></h6>
    </div>

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