<template>
  <div class="teachers">
    <v-title :data="titleFore"></v-title>
    <!-- <div class="blueBar"></div> -->
    <div class="cardList" style="padding-top:30px;">
      <!-- <div class="card" v-for="(teacher,index) in teachers" :key="index">
        <div class="diaphaneity">
          <div class="octImg"></div>
          <div class="abstract">
            <img src="@/assets/images/d1.png" alt="" class="imgSrc">
            <h4 @click="goTeacherInfo(teacher,index)">{{teacher.teacher_name}}</h4>
            <p>{{teacher.content}}</p>
          </div>
        </div>
      </div> -->
      <div class="famouscenter">
        <div class="fl box">
          <div class="img-style">
            <img src="@/assets/images/d1.png" alt="">
          </div>
          <div class="name name1" style="margin-top:40px;font-weight:blod;">

          </div>
          <div class="dec name2">
            <p>毛大庆</p>
            清华大学公共管理学院教授、清华大学国情研究院院长。
          </div>
        </div>
        <div class="fl box" style="margin-left:50px;">

          <div class="name name3" style="margin-top:10px;font-weight:blod;">

          </div>
          <div class="dec name4">
            <p>陈春花</p>
            北京大学国家发展研究院教授，企业文化与战略专家。

          </div>
          <div class="img-style" style="margin-top:132px;">
            <img src="@/assets/images/d2.png" alt="">
          </div>

        </div>
        <div class="fl box" style="margin-left:50px;">
          <div class="img-style">
            <img src="@/assets/images/d3.png" alt="">
          </div>
          <div class="name name1" style="margin-top:40px;font-weight:blod;">
          </div>
          <div class="dec name2">
            <p>钱颖一</p>
            华大学经济管理学院院长、国务院参事室参事。
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
  props: ['teachers', 'titleFore'],
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
<<<<<<< HEAD
=======
        img {
          cursor: pointer;
          transition: all 1s;
          &:hover {
            transform: scale(1.1);
          }
        }
>>>>>>> fc7fa1bcee14a077dec76f8b09f4794ca339f19d
      }
      .dec {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 34, 34, 1);
        line-height: 24px;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px rgba(0, 0, 0, 1) solid;
<<<<<<< HEAD
        // position: absolute;
        // top: 0px;
      }
      &:hover .dec {
        transition: all 450ms;
=======
        transition: all 1s;
        // position: absolute;
        // top: 0px;
        cursor: pointer;
      }
      &:hover .dec {
        // top: 50px;
>>>>>>> fc7fa1bcee14a077dec76f8b09f4794ca339f19d
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
