<template>
  <div class="teachers">
    <v-title :data="titleThree"></v-title>
    <!-- <div class="blueBar"></div> -->
    <div class="cardList" style="padding-top:30px;">
      <div class="famouscenter">
        <div v-for="(teacher,index) in teachers" :key="index">
          <div class="fl box" v-if="index===0" @click="goTeacherInfo(teacher,index)">
            <div class="img-style">
              <img :src="teacher.picture" alt="">
            </div>
            <div class="name name1" style="margin-top:40px;font-weight:blod;">

            </div>
            <div class="dec name2">
              <p>{{teacher.teacher_name}}</p>
              <p>{{teacher.content}}</p>
            </div>
          </div>
          <div class="fl box" style="margin-left:50px;" v-else-if="index===1" @click="goTeacherInfo(teacher,index)">

            <div class="name name3" style="margin-top:10px;font-weight:blod;">

            </div>
            <div class="dec name4">
              <p>{{teacher.teacher_name}}</p>
              <p>{{teacher.content}}</p>

            </div>
            <div class="img-style" style="margin-top:132px;">
              <img :src="teacher.picture" alt="">
            </div>

          </div>
          <div class="fl box" style="margin-left:50px;" v-else @click="goTeacherInfo(teacher,index)">
            <div class="img-style">
              <img :src="teacher.picture" alt="">
            </div>
            <div class="name name1" style="margin-top:40px;font-weight:blod;">
            </div>
            <div class="dec name2">
              <p>{{teacher.teacher_name}}</p>
              <p>{{teacher.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import { mapActions } from 'vuex'
export default {
  props: ['teachers', 'titleThree'],
  data() {
    return {
      tidForm: {
        tids: null
      }
    }
  },
  components: {
    'v-title': CustomTitle
  },
  methods: {
    ...mapActions('auth', ['setTid']),
    goLink(item) {
      this.$router.push(item)
    },
    goTeacherInfo(item, index) {
      this.tidForm.tids = item.id
      this.setTid(this.tidForm)
      this.goLink('/home/components/teacher')
    }
  },
  mounted() {
    console.log(this.teachers)
    console.log(this.titleThree)
  }
}
</script>
<style lang="scss" scoped>
.cardList {
  // border: 1px red solid;
  height: 437px;
  .famouscenter {
    width: 1100px;
    // border: 1px #333 solid;
    .box {
      width: 320px;
      margin-left: 20px;
      // border: 1px blue solid;
      height: 406px;
      .img-style {
        width: 320px;
        height: 196px;
        background-color: #666;
        .name {
          width: 54px;
          height: 18px;
          font-size: 18px;
          font-family: MicrosoftYaHei;
          color: rgba(34, 34, 34, 1);
          // line-height: 0px;
          margin-top: 40px;
        }
        img {
          cursor: pointer;
          transition: all 1s;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      .dec {
        width: 320px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 34, 34, 1);
        line-height: 24px;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px rgba(0, 0, 0, 1) solid;
        transition: all 1s;
        // position: absolute;
        // top: 0px;
        cursor: pointer;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      &:hover .dec {
        // top: 50px;
        opacity: 1;
        .dec {
          top: 0;
          opacity: 1;
        }
        .dec {
          top: 50px;
          opacity: 1;
        }
      }
    }
  }
}
.name4 {
  position: absolute;
  top: 13px;
}
.name3 {
  position: absolute;
  top: 40px;
}
.name1 {
  position: absolute;
  top: 253px;
}
.name2 {
  position: absolute;
  top: 279px;
}
.box {
  &:hover {
    transition: all 450ms;
    opacity: 1;
    .name1 {
      top: 230px;
      opacity: 1;
    }
    .name2 {
      top: 250px;
      opacity: 1;
    }
    .name3 {
      position: absolute;
      top: 63px;
    }
    .name4 {
      position: absolute;
      top: 36px;
    }
  }
}
</style>
