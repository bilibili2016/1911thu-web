<template>
  <!-- 免费专区 -->
  <div class="bg-none free">
    <el-row class="center">
      <!-- <v-title :data="titleOne"></v-title> -->
      <h1 class="clearfix">
        <span class="title">{{titleOne}}</span>
        <span class="fr moredata" @click="getMore(linkzero)">查看更多</span>
      </h1>
      <v-card ref="card" :data="freeData" :config="config" @selectCid="selectCid"></v-card>
      <!-- <v-more :linkdata="linkzero"></v-more> -->
    </el-row>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import CustomCard from '@/components/common/Card.vue'
import CustomMore from '@/components/common/More.vue'
import { mapActions } from 'vuex'
export default {
  props: ['config', 'freeData', 'titleOne', 'linkzero'],
  components: {
    'v-title': CustomTitle,
    'v-card': CustomCard,
    'v-more': CustomMore
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
      // window.open(window.location.origin + item)
      window.open(window.location.origin + '/course/components/' + '3')
    }
  }
}
</script>
