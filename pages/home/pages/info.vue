<template>
  <div class="home-info bg">
      <el-row class="info-center center">
        <v-title :data = "titleFive"></v-title>
        <v-card ref="card" :infoDesc="infoDesc" :config = "infoTwo"></v-card>
        <v-card ref="card" :infoArticle="infoArticle" :config = "infoOne" :linkdata="linkfour"></v-card>
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
      infoOnes: null
    };
  }
};
</script>

