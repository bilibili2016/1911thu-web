<template>
  <div class="elegance">
    <v-title :title="title" :link="link"></v-title>
    <div class="eleganceList">
      <div class="swiper">
        <v-carousel class="topCarousel" :eleganceList="data" :config="configCarousel"></v-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/common/Carousel.vue";
import CustomTitle from "@/components/common/Title.vue";

export default {
  props: ["data", "title", "link"],
  components: {
    "v-carousel": Carousel,
    "v-title": CustomTitle
  },
  data () {
    return {
      eleganceList: [],
      configCarousel: {
        carousel: "elegance"
      },
    }
  },
  methods: {
    handleLink (link) {
      window.open(link);
    }
  }

}
</script>

<style scoped lang="scss">
@import "~assets/style/home/elegance.scss";
</style>