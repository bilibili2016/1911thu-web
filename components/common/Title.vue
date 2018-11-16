<template>
  <div class="home-title">
    <el-row class="center" :class="{famous: this.title =='名师智库' ? true : false}">
      <h1 class="clearfix">
        <span class="title">{{title}}
        </span>
        <span class="fr moredata" @click="handleLinkMore">查看更多</span>
      </h1>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['title', 'link'],
  methods: {
    handleLinkMore() {
      this.$router.push(this.link)
    }
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/components/title.scss';
</style>


