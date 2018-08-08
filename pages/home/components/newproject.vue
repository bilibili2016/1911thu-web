<template>
  <!-- 最新项目 -->
  <div class="bg newProject">
    <el-row class="center coursenew">
      <v-title :title="title" :link="link"></v-title>
      <!-- 项目card -->
      <v-shortlist :cardData="data"></v-shortlist>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import CustomTitle from '@/components/common/Title.vue'
import CustomCard from '@/components/card/Card.vue'
import CustomMore from '@/components/common/More.vue'
import ShortList from '@/pages/project/components/shortList.vue'
export default {
  props: ['data', 'title', 'link'],
  components: {
    'v-title': CustomTitle,
    'v-card': CustomCard,
    'v-more': CustomMore,
    'v-shortlist': ShortList
  },
  data() {
    return {
      kidForm: {
        kids: null
      },
      cgForm: {
        cgs: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid', 'setCg']),

    getMore(item) {
      window.open(
        window.location.origin + '/course/' + '0' + '?type=' + '1' + '&xid=0'
      )
    }
  }
}
</script>
