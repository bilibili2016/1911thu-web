<template>
  <div class="noCollege">
    <img src="http://static-image.1911edu.com/noCollege.png" alt="">
    <p>正在筹备中，敬请期待...</p>
  </div>
</template>

<script>
import { setTitle } from '~/lib/util/helper'
export default {
  mounted () {
    setTitle('学位项目')
  },
}
</script>

<style scoped lang="scss">
@import "~assets/style/project/degreeProject";
</style>