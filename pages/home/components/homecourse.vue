<template>
  <!-- 最新课程 -->
  <div class="new" :class="{ bgnone : config.card_type !== 'profile'}">
    <el-row class="center">
<<<<<<< HEAD:pages/home/components/homecourse.vue
      <v-title :title="title" :link="link"></v-title>
      <v-card ref="card" :data="data" :config="config" @selectCid="selectCid" v-if="config.card_type"></v-card>
      <v-classic :data="data" :config="config" v-else></v-classic>
=======
      <!-- <v-title :data="titleTwo"></v-title> -->
      <h1 class="clearfix">
        <span class="title">{{titleTwo}}</span>
        <span class="fr moredata" @click="getMore(linkthree)">查看更多</span>
      </h1>
      <v-card ref="card" :data="newData" :config="config" @selectCid="selectCid"></v-card>
      <!-- <v-more :linkdata="linkone"></v-more> -->
>>>>>>> origin/liyr:pages/home/components/new.vue
    </el-row>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import CustomCard from '@/components/card/Card.vue'
import ClassicCard from '@/components/card/ClassicCard.vue'

import { mapActions } from 'vuex'
export default {
  props: ['config', 'data', 'title', 'link'],
  components: {
    'v-title': CustomTitle,
    'v-card': CustomCard,
    'v-classic': ClassicCard
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
      this.setKid(this.kidForm)
    },
    getMore(item) {
      window.open(window.location.origin + '/course/pages/' + '1')
    }
  }
}
</script>
<style>
.bgnone {
  background-color: #f8f8fd;
}
</style>
