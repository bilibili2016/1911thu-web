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
@import '~assets/style/home/project.scss';
</style>


