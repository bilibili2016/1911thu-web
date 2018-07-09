<template>
  <div class="classify">
    <div class="starters">
      <div class="classItem" v-for="(item,index) in classify" :key="index" @mouseenter="selectCollege(index,item)" @mouseleave="leave" style="display:block;">
        <div class="tabs-title">{{item.category_name}}</div>
        <div class="tabs-content" v-show="index===itemID">
          <div class="subClass">
            <h4>全部
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
// import { store as persistStore } from '~/lib/core/store'
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
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setCid', 'setPid', 'setKid']),
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
      this.cidform.pids = item.id
      this.setCid(this.cidform)
      window.open(window.location.origin + '/course/category')
      // this.$router.push('/course/classifycourse')
    },
    selectCollege(index, item) {
      this.big = index
      this.itemID = index
      this.cidform.cids = item.id
      this.cidform.indexs = index
      this.$bus.$emit('collegeId', item.id)
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
.hover {
  h5:hover {
    color: #8f4acb;
  }
  p:hover {
    color: #8f4acb;
  }
}
.is_picture {
  display: inline-block;
  width: 316px;
  height: 86px;
  // border: 1px red solid;
  margin: 20px 53px 20px 30px;
  // width: 0pc
  position: relative;
  .picture-style {
    position: absolute;
    top: 25px;
    left: 85px;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: rgba(255, 254, 254, 1);
  }
}
</style>


