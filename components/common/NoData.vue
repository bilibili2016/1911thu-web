<template>
    <div class="noData">
        <img :src="pageType.imgUrl" alt="">
        <h4>{{pageType.text}}</h4>
    </div>
</template>
<script>
export default {
  props: ['pageType'],
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/components/noData.scss';
</style>