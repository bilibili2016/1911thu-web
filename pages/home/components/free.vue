<template>
  <!-- 免费专区 -->
  <div class="bg-none free">
    <el-row class="center">
      <v-title :title="title" :link="link"></v-title>
      <v-card ref="card" :data="freeData" :config="config" @selectCid="selectCid"></v-card>
    </el-row>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import CustomCard from '@/components/card/Card.vue'
import CustomMore from '@/components/common/More.vue'
import { mapActions } from 'vuex'
export default {
  props: ['config', 'freeData', 'title', 'link'],
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
      window.open(window.location.origin + '/course/pages/' + '3')
    }
  }
}
</script>
