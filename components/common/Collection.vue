<template>
    <div data="22" class="collect">
        <div class="line-center">
            <span class="collectSpan" @click="collection" :class=" { bag: collectMsg === 1}">
                <i class="el-icon-star-on"></i>
                <!-- {{isCollection}} -->
                <span>收藏 </span>
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
export default {
  props: ['collectData'],
  data() {
    return {
      collectMsg: '',
      addCollectionForm: {
        curriculumId: null
      }
    }
  },
  mounted() {
    this.collectMsg = this.collectData
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['kid', 'isCollection'])
  },
  methods: {
    // 收藏-判断是收藏还是未收藏
    collection() {
      if (this.isAuthenticated) {
        if (this.collectMsg === 1) {
          this.deleteCollection()
          this.collectMsg = 2
        } else {
          this.addCollection()
          this.collectMsg = 1
        }
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    // 收藏-添加收藏
    addCollection() {
      this.addCollectionForm.curriculumId = persistStore.get('curriculumId')
      return new Promise((resolve, reject) => {
        coursedetail.addCollection(this.addCollectionForm).then(response => {
          this.$message({
            showClose: true,
            type: 'success',
            message: '添加收藏成功'
          })
          this.collectMsg = 1
        })
      })
    },
    // 收藏-删除收藏
    deleteCollection() {
      this.addCollectionForm.curriculumId = persistStore.get('curriculumId')
      coursedetail.deleteCollection(this.addCollectionForm).then(response => {
        this.collectMsg = response.data.curriculumDetail.is_collection
        this.$message({
          showClose: true,
          type: 'success',
          message: '取消收藏成功'
        })
        this.collectMsg = 0
      })
    }
  }
}
</script>

<style scoped>
</style>