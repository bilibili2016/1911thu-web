<template>
  <div>
    <div class="banner">
      <!-- banner -->
      <!-- <v-carousel :items="items"></v-carousel> -->
      <div class="popup-container">
        <div class="img-flex"></div>
      </div>
      <!-- 分类 -->
      <v-tab :classify="classify" :courses="courses" :tab="tabmsg"></v-tab>
      <!-- 定制 -->
      <v-card :dingData="dingData" :config="config"></v-card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/common/Card.vue'
import Carousel from '@/components/common/Carousel.vue'
import Tab from '@/components/common/Tab.vue'
export default {
  props: ['classify', 'courses', 'tabmsg', 'items', 'dingData', 'config'],
  components: {
    'v-carousel': Carousel,
    'v-card': Card,
    'v-tab': Tab
  },
  data() {
    return {
      fragmentConfig: 123,
      default: {
        width: 1200,
        line: 5,
        column: 12,
        height: 553,
        animeTime: 5000,
        img: require('@/assets/images/123.png')
      }
    }
  },
  methods: {
    fragmentImg(changeConfig) {
      if (typeof changeConfig == 'object') {
        for (var n in changeConfig) {
          this.default[n] = changeConfig[n]
        }
      }

      if (!this.default.container) {
        alert('未选择显示容器(div.class or div#id)的类')
        return false
      }

      var container = $(this.default.container)
      container.append("<ul class='clearfixs'></ul>")

      container.css({
        width: this.default.width
      })

      var containerUl = container.find(' > ul')
      for (var i = 0; i < this.default.line * this.default.column; i++) {
        containerUl.append('<li></li>')
      }
      var containerItem = containerUl.find('li')

      //加载图片
      var Img = new Image()
      Img.src = require('@/assets/images/123.png')

      //图片加载完成时
      Img.onload = () => {
        var multiple = container.width() / Img.width,
          width = Img.width * multiple,
          height = Img.height * multiple,
          findWidth = width / this.default.column,
          findHeight = height / this.default.line

        var windowWidth = screen.width,
          windowHeight = screen.height

        containerItem.css({
          width: findWidth,
          height: findHeight,
          'background-image': 'url(' + Img.src + ')',
          'background-size': width + 'px ' + height + 'px',
          opacity: 0
        })

        container.css({
          left: '50%',
          top: '50%',
          'margin-top': -height / 2,
          'margin-left': -width / 2
        })

        var x, y
        for (i = 0; i < containerItem.length; i++) {
          x = i % this.default.column
          y = Math.floor(i / this.default.column)
          containerItem
            .eq(i)
            .css({
              'background-position':
                -x * findWidth + 'px ' + -y * findHeight + 'px',
              left: Math.ceil(Math.random() * windowWidth * 2) - windowWidth,
              top: Math.ceil(Math.random() * windowHeight * 2) - windowHeight
            })
            .animate(
              {
                left: 0,
                top: 0,
                opacity: 1
              },
              Math.ceil(Math.random() * (0.66 * this.default.animeTime)) +
                0.33 * this.default.animeTime
            )
        }
      }
    }
  },
  mounted() {
    $(() => {
      var fragmentConfig = {
        container: '.img-flex', //显示容器
        line: 5, //多少行
        column: 10, //多少列
        width: document.body.clientWidth, //显示容器的宽度
        height: 553,
        animeTime: 5000, //最长动画时间,图片的取值将在 animeTime*0.33 + animeTime*0.66之前取值
        img: require('@/assets/images/123.png') //图片路径
      }

      this.fragmentImg(fragmentConfig)
      setInterval(() => {
        $('.img-flex').html('')
        this.fragmentImg(fragmentConfig)
      }, 7000)
    })
  }
}
</script>
<style scoped lang="scss">
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: '微软雅黑';
}
ul li {
  list-style: none;
}
.clearfixs {
  *zoom: 1;
}
.clearfixs:before,
.clearfixs:after {
  display: table;
  line-height: 0;
  content: '';
}
.clearfixs:after {
  clear: both;
}
.popup-container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #4e37b3;
  overflow: hidden;
}
</style>


