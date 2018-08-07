<template>
  <div class="new">
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
      window.open(window.location.origin + this.link)
    }
  }
}
</script>


