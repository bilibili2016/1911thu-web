<template>
  <div>
    <v-home></v-home>
  </div>
</template>
<script>
import Home from '@/pages/home/index.vue'
// import About from '@/pages/other/degree1.vue'
export default {
  components: {
    'v-home': Home
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.$bus.$emit('bannerShow', false)
  }
}
</script>

