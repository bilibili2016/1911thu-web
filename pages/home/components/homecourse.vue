<template>
  <!-- 最新课程 -->
  <div class="new" :class="{ bgnone : config.card_type !== 'profile'}">
    <el-row class="center">
      <v-title :title="title" :link="link"></v-title>
      <!-- 经典课程 card -->
      <v-classic :data="data" :config="config" v-if="config.home_type ==='cardthree'"></v-classic>
      <!-- 项目card -->
      <v-shortlist :cardData="data" v-if="config.home_type ==='cardtwo'"></v-shortlist>
      <!-- 非经典 项目 card -->
      <v-card ref="card" :data="data" :config="config" @selectCid="selectCid" v-if="config.home_type ==='cardone'"></v-card>
    </el-row>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import CustomCard from '@/components/card/Card.vue'
import ClassicCard from '@/components/card/ClassicCard.vue'
import ShortList from '@/pages/project/components/ShortList.vue'
import { mapActions } from 'vuex'
export default {
  props: ['config', 'data', 'title', 'link'],
  components: {
    'v-title': CustomTitle,
    'v-card': CustomCard,
    'v-classic': ClassicCard,
    'v-shortlist': ShortList
  },
  data() {
    return {
      kidForm: {
        kids: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    selectCid(val) {
      this.kidForm.kids = val
      // this.setKid(this.kidForm)
    }
  }
}
</script>
<style>
.bgnone {
  background-color: #f8f8fd;
}
</style>
