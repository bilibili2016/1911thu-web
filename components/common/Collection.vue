<template>
  <div class="collect">
    <div class="line-center">
      <span class="collectSpan" @click="collection" :class=" { bag: collectData.isCollect == 1}">
        <i class="el-icon-star-on"></i>
        <span>收藏</span>
      </span>
      <!-- 分享暂时注释 -->
      <!-- <span>
                <i class="el-icon-share"></i>
                <span> 分享 </span>
                <div class="shareIcons">
                  <div class="social-share" data-sites="weibo,qq,wechat" style=""></div>
                </div>
              </span> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { coursedetail } from '~/lib/v1_sdk/index'
import { splitUrl } from '@/lib/util/helper'
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
      if (this.isAuthenticated) {
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
      this.addCollectionForm.curriculumId = splitUrl(0, 1)
      this.addCollectionForm.types = this.collectData.types
      coursedetail.addCollection(this.addCollectionForm).then(response => {
        if (response.status === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: '添加收藏成功'
          })
          this.collectData.isCollect = 1
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: response.msg
          })
        }
      })
    },
    // 收藏-删除收藏
    deleteCollection() {
      // this.addCollectionForm.curriculumId = persistStore.get('curriculumId')
      this.addCollectionForm.curriculumId = splitUrl(0, 1)

      this.addCollectionForm.types = this.collectData.types
      coursedetail.deleteCollection(this.addCollectionForm).then(response => {
        if (response.status === 0) {
          this.collectData.isCollect = 0
          this.$message({
            showClose: true,
            type: 'success',
            message: '取消收藏成功'
          })
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: response.msg
          })
        }
      })
    }
  }
}
</script>

<style scoped>
</style>