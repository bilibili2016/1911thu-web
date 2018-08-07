<template>
  <div class="classify">
    <div class="starters">
      <div class="classItem" v-for="(item,index) in classify" :key="index" @mouseenter="mouseenters(index,item)" @mouseleave="leave" style="display:block;">
        <div class="tabs-title" @click="selectCollege(index,item)">{{item.category_name}}</div>
        <div class="tabs-content" v-show="index===itemID">
          <div class="subClass">
            <h4 @click="selectCollege(index,item)">
              全部
              <span>
                <i></i>
              </span>
            </h4>
            <p v-if="item.is_picture_show === '0'">
              <span v-for="(child,index) in item._child" :key="child.id" @click="handlePid(child,index)">
                <span>{{child.category_name}}</span>
              </span>
            </p>
            <p v-if="item.is_picture_show === '1'">
              <span v-for="(child,index) in item._child" :key="child.id" @click="handlePid(child,index)" class="is_picture">
                <img :src="child.picture" alt="">
                <span class="picture-style">{{child.category_name}}</span>
              </span>
            </p>
          </div>
          <div class="courseMsg" v-if="item.is_picture_show === '0'">
            <div class="courseOne clearfix" v-for="(curriculum,index) in item.curriculumList" :key="index" @click="getMore(curriculum)">
              <img class="fl" :src="curriculum.picture" alt="">
              <div class="fl hover">
                <h5>{{curriculum.title}}</h5>
                <p>{{curriculum.teacher_name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['classify', 'courses', 'tab', 'active', 'classtext'],
  data() {
    return {
      itemID: null,
      actived: null,
      cidform: {
        cids: '',
        indexs: '',
        pids: ''
      },
      kidForm: {
        kids: null
      },
      cgForm: {
        cgs: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setCid', 'setPid', 'setKid', 'setCg', 'setPid']),
    handleClick(item, index) {
      this.cidform.cids = Number(item.index)
      this.setCid(this.cidform)
    },
    getMore(linedata) {
      this.kidForm.kids = linedata.id
      persistStore.set('curriculumId', linedata.id)
      this.setKid(this.kidForm)
      this.$router.push('/course/coursedetail')
    },
    handlePid(item, index) {
      this.cgForm.cgs = '0'
      this.setCg(this.cgForm)
      this.cidform.pids = item.id
      this.setCid(this.cidform)
      window.open(window.location.origin + '/course/category')
      // this.$router.push('/course/classifycourse')
    },
    mouseenters(index, item) {
      this.big = index
      this.itemID = index
      this.cidform.cids = item.id
      this.cidform.indexs = index
      this.cidform.pids = '0'
      this.$bus.$emit('collegeId', item.id)
      this.setCid(this.cidform)
    },
    selectCollegeall(index, item) {
      this.cidform.cids = item.id
      this.cidform.indexs = index
      this.cidform.pids = '0'
      this.$bus.$emit('collegeId', item.id)
      window.open(window.location.origin + '/course/category')
      this.setCid(this.cidform)
    },
    selectCollege(index, item) {
      // this.big = index
      // this.itemID = index
      this.cidform.cids = item.id
      this.cidform.indexs = index
      this.cidform.pids = '0'
      this.$bus.$emit('collegeId', item.id)
      window.open(window.location.origin + '/course/category')
      this.setCid(this.cidform)
    },
    leave() {
      this.itemID = null
    }
  },
  mounted() {
    this.actived = this.active
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/style/components/tab';
</style>


