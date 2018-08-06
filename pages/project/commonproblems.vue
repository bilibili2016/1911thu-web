<template>
  <!-- 项目详情——问题 -->
  <div class="problems">
    <div class="qustion" v-for="(qus,index) in problems" :key="index">
      <h5>
        <span>Q{{index+1}}.</span>{{qus.qustion}}
      </h5>
      <p>{{qus.answer}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['problems']
}
</script>

<style scoped lang="scss">
@import '~assets/style/project/commonproblems.scss';
</style>