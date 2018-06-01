<template>
    <div class="bg">
      <el-row class="center">
        <v-title :data = "titleOne"></v-title>
        <v-card ref="card" :data="newData" :config = "config"></v-card>
        <v-more :linkdata="linkone"></v-more>
      </el-row>
    </div>
</template>

<script>
import CustomTitle from "@/components/common/Title.vue";
import CustomCard from "@/components/common/Card.vue";
import CustomMore from "@/components/common/More.vue";
export default {
  props: ["config", "newData", "titleOne", 'linkone'],
  components: {
    "v-title": CustomTitle,
    "v-card": CustomCard,
    "v-more": CustomMore
  },
  mounted () {
    console.log(this.linkone)
  }
};
</script>

