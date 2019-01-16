<template>
  <!-- 项目线上课程列表 -->
  <div class="projectCourse">
    <div class="system" v-if="vipList.length>0">
      <div
        class="college"
        v-for="vip in vipGoodsList"
        :key="vip.vip_goodsid"
        v-html="vip.content"
        @click="goVipDetail(vip)"
      ></div>
    </div>
    <div class="system" v-else>
      <div class="noData">
        <img src="http://static-image.1911edu.com/noMsg.png" alt>
        <p>暂无线上课程！</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { message, open, matchSplits } from '@/lib/util/helper'
export default {
  props: ['vipGoodsList', 'projectId'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data () {
    return {
      kidForm: {
        ids: null
      },
      vipList: [],
      projectPlayer: {
        base: '/project/projectPlayer',
        kid: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    // 跳转课程详情
    goCourseDetail (item) {
      this.$router.push({
        path: '/course/detail',
        query: {
          kid: item.curriculum_id,
          pid: this.projectId,
          page: 0
        }
      })
    },
    // 跳转到项目播放页
    goProjectPlayer (course) {
      if (persistStore.get('token')) {
        let urlLink = {
          base: '/project/projectPlayer',
          kid: matchSplits('kid'),
          cid: course.curriculum_id,
          type: matchSplits('type')
        }
        open(urlLink)
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    goVipDetail (vip) {
      this.$router.push({
        path: '/home/vip/vipPage',
        query: {
          id: vip.vip_goodsid,
          cid: vip.category_id
        }
      })
    }
  },
  watch: {
    vipGoodsList () {
      this.vipList = this.vipGoodsList
    }
  },
}
</script>
<style scoped lang="scss">
@import "~assets/style/project/projectCourse.scss";
</style>
