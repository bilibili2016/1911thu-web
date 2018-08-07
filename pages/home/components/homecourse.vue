<template>
  <!-- 最新课程 -->
  <div class="new" :class="{ bgnone : config.card_type !== 'profile'}">
    <el-row class="center">
      <v-title :title="title" :link="link"></v-title>
      <v-card ref="card" :data="data" :config="config" @selectCid="selectCid" v-if="config.card_type"></v-card>
      <v-classic :data="data" :config="config" v-else></v-classic>
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
