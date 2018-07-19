<template>
  <div class="bg-none">
    <el-row class="center">
      <!-- <v-title :data="titleOne"></v-title> -->
      <h1 class="clearfix">{{titleOne}}
        <span class="fr" @click="getMore(linkzero)">查看更多</span>
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
      window.open(window.location.origin + item)
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  color: #222;
  margin: 70px 0px 60px;
  span {
    width: 128px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    border: 1px solid #888;
    border-radius: 20px;
    font-size: 16px;
    color: #666;
    -webkit-transition: all 300ms;
    transition: all 300ms;
    cursor: pointer;
  }
}
</style>
