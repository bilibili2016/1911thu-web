<template>
  <div class="classify">
        <div class="starters">
            <div class="classItem" v-for="(item,index) in classify" :key="index" @mouseenter="showItem(index)" @mouseleave="leave">
                <div class="tabs-title">{{item}}</div>
                <div class="tabs-content" v-show="index===itemID">
                    <div class="subClass">
                        <h4>全部<span><i></i></span></h4>
                        <p>
                            <span  v-for="(items,index) in classtext" :key="items.id" @click="handlePid(item,index)">
                                <span>{{items.name}}</span>
                            </span>
                        </p>
                    </div>

                    <div class="courseMsg">
                        <div class="courseOne clearfix" v-for="(cus,index) in courses" :key="index" @click="getMore">
                            <img class="fl" :src="cus.src" alt="">
                            <div class="fl hover">
                                <h5>{{cus.title}}</h5>
                                <p>{{cus.author}}</p>
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

        this.pidform.pids = index
        this.setPid(this.pidform)
      },
      showItem(index){
        this.itemID = index;
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


