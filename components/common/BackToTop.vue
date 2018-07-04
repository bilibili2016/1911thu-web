<template>
  <div>
    <transition :name="transitionName">
      <div class="back-to-ceiling customStyle" @click="backToTop" v-show="visible">
        <i class="topSrc"></i>
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="back-to-ceiling hasColor customStyleOne" v-show="visible">
        <span></span>
        <div class="showCode">
          <i></i>
          <h4>1911学堂官方微信</h4>
          <p>微信号：xuetang1911</p>
        </div>
      </div>
    </transition>
    <transition :name="transitionName">
      <!-- <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=1060962187"> -->
      <a href="http://wpa.qq.com/msgrd?v=3&uin=2844916043&site=qq&menu=yes">
        <div class="back-to-ceiling hasColor customStyleFour" v-show="visible">

          <span></span>
          <div class="telShow">
            <p>点击咨询在线qq</p>

          </div>
        </div>
      </a>
    </transition>
    <transition :name="transitionName">
      <div class="back-to-ceiling hasColor customStyleTwo" v-show="visible">
        <span></span>
        <div class="telShow">
          <p>咨询电话：010-6270 1911</p>
        </div>
      </div>
    </transition>
    <transition :name="transitionName" v-if="data">

      <div class="back-to-ceiling customStyleThree" v-show="true" @click="checkCourse">
        <div class="line-wrap">
          <div class="line-centerd">
            <span>我要选课</span>
          </div>
        </div>
      </div>
    </transition>
    <div>
      <v-unlogged v-if="showNotLogin" @showTips='showTips'></v-unlogged>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CustomUnlogged from '@/components/common/Unlogged.vue'
/* eslint-disable */
export default {
  components: {
    'v-unlogged': CustomUnlogged
  },
  props: [
    // {
    //   visibilityHeight: {
    //     type: Number,
    //     default: 400
    //   },
    //   backPosition: {
    //     type: Number,
    //     default: 0
    //   },
    //   transitionName: {
    //     type: String,
    //     default: 'fade'
    //   }
    // },
    'data'
  ],
  data() {
    return {
      visibilityHeight: 400,
      backPosition: 0,
      transitionName: 'fade',
      showNotLogin: false,
      visible: false,
      move: true,
      interval: null,
      ceilSrc: 'http://pam8iyw9q.bkt.clouddn.com/home_backtop11.png',
      wxSrc: 'http://pam8iyw9q.bkt.clouddn.com/home_backtop22.png',
      qqSrc: 'http://pam8iyw9q.bkt.clouddn.com/home_backtop22.png',
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
      // this.visible = true
    },
    showTips(show) {
      this.showNotLogin = show
    },
    checkCourse() {
      if (this.isAuthenticated) {
        this.goLink('/course/chooselesson')
        this.showNotLogin = false
      } else {
        this.showNotLogin = true
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

