<template>
  <div>
    <transition :name="transitionName">
      <div class="back-to-ceiling customStyle" @click="backToTop" v-show="visible">
        <img :src="topSrc" alt="" class="topSrc">
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="back-to-ceiling hasColor customStyleOne" v-show="visible">
        <span></span>
        <!-- <img :src="wxSrc" alt="" class="wxSrc"> -->
        <div class="showCode">
          <img src="@/assets/images/wechatLogin.png" alt="">
          <h4>1911学堂官方微信</h4>
          <p>微信号：xuetang1911</p>
        </div>
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="back-to-ceiling hasColor customStyleTwo" v-show="visible">
        <span></span>
        <!-- <img :src="ceilSrc" alt="" class="ceilSrc"> -->
        <div class="telShow">
          <p>咨询电话：010-6270 1911</p>
        </div>
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="back-to-ceiling customStyleThree" v-show="visible" @click="checkCourse">
        <div class="line-wrap">
          <div class="line-center">
            <span>我要选课</span>
          </div>
        </div>
      </div>
    </transition>
    <div>
      <v-unlogged v-if="showNotLogin"></v-unlogged>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import CustomUnlogged from '@/pages/course/pages/unlogged.vue'
/* eslint-disable */
export default {
  name: 'BackToTop',
  components: {
    'v-unlogged': CustomUnlogged
  },
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    backPosition: {
      type: Number,
      default: 0
    },
    transitionName: {
      type: String,
      default: 'fade'
    }
  },
  data() {
    return {
      showNotLogin: false,
      visible: false,
      move: true,
      interval: null,
      ceilSrc: require('@/assets/images/home_backtop11.png'),
      wxSrc: require('@/assets/images/home_backtop22.png'),
      topSrc: require('@/assets/images/home_backtop03.png')
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['setIsShowTip']),
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight
    },
    checkCourse() {
      if (this.isAuthenticated) {
        this.setIsShowTip({
          isShowTips: true
        })
        this.goLink('/course/pages/categoryd')
      } else {
        this.notLogin = true
      }
    },
    backToTop() {
      if (this.move) {
        const start = window.pageYOffset
        let i = 0
        this.interval = setInterval(() => {
          const next = Math.floor(
            this.easeInOutQuad(10 * i, start, -start, 500)
          )
          if (next <= this.backPosition) {
            window.scrollTo(0, this.backPosition)
            clearInterval(this.interval)
            this.move = true
          } else {
            this.move = false
            window.scrollTo(0, next)
          }
          i++
        }, 16.7)
      }
    },
    goLink(item) {
      this.$router.push(item)
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return -c / 2 * (--t * (t - 2) - 1) + b
    }
  }
}
</script>

<style lang="scss" scoped>
.back-to-ceiling {
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  z-index: 4;
  &.customStyle {
    right: 30px;
    bottom: 320px;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    line-height: 45px;
    background: #e7eaf1;
  }
  &.customStyleOne {
    right: 30px;
    bottom: 260px;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    line-height: 45px;
    background-color: #7200ff;
    transition: all 300ms;
    span {
      width: 24px;
      height: 21px;
      margin-top: 15.5px;
      transition: all 300ms;
      background: url('~assets/images/home_backtop22.png') no-repeat;
      background-size: 24px 21px;
    }
    &:hover {
      background-color: #8f4acb;
      span {
        background: url('~assets/images/home_backtop02.png') no-repeat;
        background-size: 24px 21px;
      }
      .showCode {
        opacity: 1;
        right: 62px;
      }
    }
  }
  &.customStyleTwo {
    right: 30px;
    bottom: 200px;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    line-height: 45px;
    background-color: #7200ff;
    transition: all 300ms;
    span {
      width: 24px;
      height: 24px;
      margin-top: 13px;
      transition: all 300ms;
      background: url('~assets/images/home_backtop11.png') no-repeat;
      background-size: 24px 24px;
    }
    &:hover {
      background-color: #8f4acb;
      span {
        background: url('~assets/images/home_backtop01.png') no-repeat;
        background-size: 24px 24px;
      }
      .telShow {
        opacity: 1;
        right: 62px;
      }
    }
  }
  &.customStyleThree {
    right: 30px;
    bottom: 100px;
    width: 110px;
    height: 50px;
    border-radius: 4px;
    line-height: 45px;
    background: rgba(252, 210, 63, 1);
    transition: all 500ms;
    z-index: 3;
    &:hover {
      background-color: #8f4acb;
      .line-center {
        color: #fcd23f;
        background: url('~assets/images/home_backtop44.png') no-repeat 16px 17px;
        background-size: 18px 18px;
      }
    }
  } // &.hasColor:hover{
  //   transition: all 400ms;
  //   background: #8f4acb;
  // }
  .showCode {
    opacity: 0;
    width: 170px;
    height: 212px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    top: 0;
    right: -1000px;
    z-index: 5;
    box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
    transition: opacity 400ms;
    img {
      margin: 20px 25px 0;
      width: 120px;
      height: 120px;
    }
    h4 {
      text-align: center;
      line-height: 20px;
      font-size: 14px;
      color: #050223;
    }
    p {
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      color: #888888;
    }
  }
  .telShow {
    opacity: 0;
    position: absolute;
    top: 0;
    right: -1000px;
    height: 54px;
    width: 205px;
    line-height: 54px;
    font-size: 14px;
    border-radius: 4px;
    color: #222;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
    transition: opacity 400ms;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.back-to-ceiling .Icon {
  fill: #9aaabf;
  background: none;
}
.ceilSrc {
  width: 24px;
  height: 24px;
  margin: 13px;
}
.wxSrc {
  width: 23px;
  height: 19px;
  margin: 16px 13px 13px 13px;
}
.topSrc {
  width: 20px;
  height: 13px;
  margin: 20px 15px 15px 15px;
}
.line-wrap {
  height: 50px;
  width: 100px;
  cursor: pointer; // border: 1px red solid;
}
.line-center {
  line-height: 50px;
  color: #6417a6;
  background: url('~assets/images/home_backtop04.png') no-repeat 16px 17px;
  background-size: 18px 18px;
  transition: all 500ms;
  span {
    padding-left: 35px;
  }
}
.line-center img {
  width: 18px;
  height: 18px;
  padding: 0px;
  margin: 0px 0px 0px 15px;
  vertical-align: middle;
}
</style>
