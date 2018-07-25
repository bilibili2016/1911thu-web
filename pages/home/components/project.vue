<template>
  <div>
    <div class="project">
      <!-- 定制 -->
      <!-- <v-card :dingData="dingData" :config="config"></v-card> -->
      <ul :dingData="dingData">
        <li>
          <img :src="imgUrl.one" alt="">
        </li>
        <li v-for="(item,index) in dingData" :key="index" @click="goLink(item.link_url)">
          <div>
            <img :src="item.picture" alt="">
            <h4>{{item.title}}</h4>
            <p>{{item.content}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from '@/components/common/Card.vue'
export default {
  props: ['dingData'],
  components: {
    'v-card': Card
  },
  data() {
    return {
      imgUrl: {
        one: require('assets/images/project_1.png')
      }
    }
  },
  methods: {
    goLink(link) {
      window.open(window.location.origin + link)
    }
  }
}
</script>
<style scoped lang="scss">
.project {
  width: 1100px;
  margin: 30px auto 0;
  font-size: 0;
  ul {
    display: flex;
    li {
      &:hover div {
        margin-top: -10px;
        p {
          opacity: 1;
        }
      }
      div {
        width: 275px;
        height: 100px;
        cursor: pointer;
        transition: all 300ms;
        position: relative;
        img {
          width: 275px;
          height: 100px;
          position: absolute;
          top: 0;
          left: 0;
        }
        h4 {
          width: 200px;
          height: 18px;
          overflow: hidden;
          font-size: 16px;
          color: #fff;
          position: absolute;
          left: 20px;
          top: 20px;
        }
        p {
          font-size: 12px;
          color: #fff;
          width: 200px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          line-height: 18px;
          position: absolute;
          top: 50px;
          left: 20px;
          opacity: 0.5;
          transition: all 300ms;
        }
      }
    }
  }
}
</style>


