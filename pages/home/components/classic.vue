<template>
  <div class="bg-none">
    <el-row class="center">
      <v-title :data="titleThree"></v-title>
      <v-card ref="card" :data="classicData" :config="config"></v-card>
      <v-more :linkdata="linktwo"></v-more>
    </el-row>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import CustomCard from '@/components/common/Card.vue'
import CustomMore from '@/components/common/More.vue'
export default {
  props: ['config', 'classicData', 'titleThree', 'linktwo'],
  components: {
    'v-title': CustomTitle,
    'v-card': CustomCard,
    'v-more': CustomMore
  }
}
</script>
