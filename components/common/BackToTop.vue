<template>
  <div>
    <transition :name="transitionName">
      <div class="back-to-ceiling customStyle" @click="backToTop" v-show="visible">
        <img :src="topSrc" alt="" class="topSrc">
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="back-to-ceiling hasColor customStyleTwo" v-show="visible">
        <img :src="wxSrc" alt="" class="wxSrc">
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="back-to-ceiling hasColor customStyleOne" v-show="visible">
        <img :src="ceilSrc" alt="" class="ceilSrc">
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="back-to-ceiling customStyleThree" v-show="visible" @click="goLink('')">
        <div class="line-wrap">
          <div class="line-center">
            <img :src="choiceSrc" alt="" class="ceilSrc">
            <span>我要选课</span>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "BackToTop",
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
        default: "fade"
      }
    },
    data() {
      return {
        visible: false,
        interval: null,
        ceilSrc: require("@/assets/images/home_backtop01.png"),
        wxSrc: require("@/assets/images/home_backtop02.png"),
        topSrc: require("@/assets/images/home_backtop03.png"),
        choiceSrc: require("@/assets/images/home_backtop04.png")
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    methods: {
      handleScroll() {
        this.visible = window.pageYOffset > this.visibilityHeight;
      },
      backToTop() {
        const start = window.pageYOffset;
        let i = 0;
        this.interval = setInterval(() => {
          const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500));
          if (next <= this.backPosition) {
            window.scrollTo(0, this.backPosition);
            clearInterval(this.interval);
          } else {
            window.scrollTo(0, next);
          }
          i++;
        }, 16.7);
      },
      goLink(item) {
        this.$router.push(item);
      },
      easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .back-to-ceiling {
    position: fixed;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    z-index: 9;
    &.customStyle{
      right: 30px;
      bottom: 320px;
      width: 50px;
      height: 50px;
      border-radius: 4px;
      line-height: 45px;
      background: #e7eaf1;
    }
    &.customStyleOne{
      right: 30px;
      bottom: 200px;
      width: 50px;
      height: 50px;
      border-radius: 4px;
      line-height: 45px;
      background: #d800ff
    }
    &.customStyleTwo{
      right: 30px;
      bottom: 260px;
      width: 50px;
      height: 50px;
      border-radius: 4px;
      line-height: 45px;
      background: #d800ff;
    };
    &.customStyleThree{
      right: 30px;
      bottom: 100px;
      width: 110px;
      height: 50px;
      border-radius: 4px;
      line-height: 45px;
      background: rgba(252,210,63,1);
    }
    &.hasColor:hover{
      transition: all 400ms;
      background: #8f4acb;
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
    cursor: pointer;
    // border: 1px red solid;
  }

  .line-center {
    line-height: 50px;
    font-family: MicrosoftYaHei;
    color: rgba(100, 23, 166, 1);
    span {
      padding-left: 10px;
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
