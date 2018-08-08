<template>
    <div class="banner">
        <div>{{config.text}}</div>
    </div>
</template>

<script>
export default {
  props: ['config']
}
</script>

<style scoped lang="scss">
@import '~assets/style/shop/banner.scss';
</style>