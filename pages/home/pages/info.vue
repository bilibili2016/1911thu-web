<template>
  <div class="home-info bg">
      <el-row class="info-center center">
        <v-title :data = "titleFive"></v-title>

        <v-card ref="card" :infoDesc="infoDesc" :config = "infoTwo"></v-card>
        <v-card ref="card" :infoArticle="infoArticle" :config = "infoOne" :linkfour="linkfour"></v-card>

      </el-row>
    </div>
</template>

<script>
import CustomCard from "@/components/common/Card.vue";
import CustomTitle from "@/components/common/Title.vue";
export default {
  components: {
    "v-card": CustomCard,
    "v-title": CustomTitle
  },
  props: ["infoDesc", "infoArticle", "infoTwo", "infoOne", "titleFive", 'linkfour'],
  data() {
    return {
      infoDescs: null,
      infoArticles: null,
      infoTwos: null,
      infoOnes: null,
      linkfour: null
    };
  }
};
</script>

<style scoped lang="scss">
.home-info {
  .info-center {
    height: 830px;
  }
}
.center {
  width: 1100px;
  margin: 0 auto;
}
.bg {
  background: rgba(250, 250, 250, 1);
  width: 100%;
}
</style>
