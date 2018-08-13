<template>
  <div>
    <v-home></v-home>
  </div>
</template>
<script>
import Home from '@/pages/home/index.vue'
import { setPagesHeight } from '~/lib/util/helper'
export default {
  components: {
    'v-home': Home
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.$bus.$emit('bannerShow', false)
    setPagesHeight()
  }
}
</script>

