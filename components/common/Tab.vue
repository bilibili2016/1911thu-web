<template>
  <div class="classify">
        <div class="starters">
            <div class="classItem" v-for="(item,index) in classify" :key="index" @mouseenter="showItem(index,item)" @mouseleave="leave">
                <div class="tabs-title">{{item.category_name}}</div>
                <div class="tabs-content" v-show="index===itemID">
                    <div class="subClass">
                        <h4>全部<span><i></i></span></h4>
                        <p>
                          <span  v-for="(child,index) in item._child" :key="child.id" @click="handlePid(child,index)">
                              <span>{{child.category_name}}</span>
                          </span>
                        </p>
                    </div>

                    <div class="courseMsg">
                        <div class="courseOne clearfix" v-for="(curriculum,index) in item.curriculumList" :key="index" @click="getMore">
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
  export default {
    props: ["classify", "courses", "tab", "active", 'classtext'],
    data() {
      return {
        itemID:null,
        actived: null,
        cidform: {
          cids: ''
        },
        pidform: {
          pids: ''
        }
      }
    },
    methods: {
      ...mapActions('auth', [
        'setCid',
        'setPid'
      ]),
      handleClick(item,index) {
        this.cidform.cids = Number(item.index)
        this.setCid(this.cidform)
      },

      getMore(linedata) {
         this.$router.push('course/pages/coursedetail')
      },
      handlePid(item,index) {
        this.$router.push('course/pages/category')
        this.pidform.pids = item.id
        // console.log(this.pidform, '这是this.pidform')
        this.setPid(this.pidform)
      },
      showItem(index,item){
        // console.log(item.id)
        this.itemID = index;
        this.cidform.cids = item.id
        this.setCid(this.cidform)
      },
      leave(){
        this.itemID = null;
      }
    },
    mounted () {
      this.actived = this.active
    }
  };
</script>
<style lang="scss" scoped>
.hover{
  h5:hover {
    color: #8F4ACB
  }
  p:hover {
    color: #8F4ACB
  }
}
</style>


