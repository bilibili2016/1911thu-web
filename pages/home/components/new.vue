<template>
  <!-- 最新课程 -->
  <div class="bg-none new">
    <el-row class="center">
      <!-- <v-title :data="titleTwo"></v-title> -->
      <h1 class="clearfix">
        <span class="title">{{titleTwo}}</span>
        <span class="fr moredata" @click="getMore(linkthree)">查看更多</span>
      </h1>
      <v-card ref="card" :data="newData" :config="config" @selectCid="selectCid"></v-card>
      <!-- <v-more :linkdata="linkone"></v-more> -->
    </el-row>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import CustomCard from '@/components/common/Card.vue'
import CustomMore from '@/components/common/More.vue'
import { mapActions } from 'vuex'
export default {
  props: ['config', 'newData', 'titleTwo', 'linkthree'],
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
      window.open(window.location.origin + '/course/components/' + '1')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/home/new.scss';
</style>