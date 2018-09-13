<template>
  <div class="collect">
    <div class="line-center">
      <span class="collectSpan" @click="collection" :class=" { bag: collectData.isCollect == 1}">
        <i class="el-icon-star-on"></i>
        <span>收藏</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { coursedetail } from '~/lib/v1_sdk/index'
import { message, matchSplits } from '@/lib/util/helper'
export default {
  props: ['collectData'],
  data() {
    return {
      addCollectionForm: {
        curriculumId: null,
        types: ''
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['kid'])
  },
  methods: {
    // 收藏-判断是收藏还是未收藏
    collection() {
      if (persistStore.get('token')) {
        if (this.collectData.isCollect === 1) {
          this.deleteCollection()
          this.collectData.isCollect = 0
        } else {
          this.addCollection()
          this.collectData.isCollect = 1
        }
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    // 收藏-添加收藏
    addCollection() {
      // this.addCollectionForm.curriculumId = persistStore.get('curriculumId')

      this.addCollectionForm.curriculumId = matchSplits('kid')
      this.addCollectionForm.types = this.collectData.types
      coursedetail.addCollection(this.addCollectionForm).then(response => {
        if (response.status === 0) {
          message(this, 'success', '添加收藏成功')
          this.collectData.isCollect = 1
        } else {
          message(this, 'error', response.msg)
        }
      })
    },
    // 收藏-删除收藏
    deleteCollection() {
      // this.addCollectionForm.curriculumId = persistStore.get('curriculumId')
      this.addCollectionForm.curriculumId = matchSplits('kid')

      this.addCollectionForm.types = this.collectData.types
      coursedetail.deleteCollection(this.addCollectionForm).then(response => {
        if (response.status === 0) {
          this.collectData.isCollect = 0
          message(this, 'success', '取消收藏成功')
        } else {
          message(this, 'error', response.msg)
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
