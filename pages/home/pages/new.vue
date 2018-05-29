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

<style scoped lang="scss">
.center {
  width: 1100px;
  margin: 0 auto;
}
.bg {
  background: rgba(250, 250, 250, 1);
  width: 100%;
}
.bg-none {
  width: 100%;
}
</style>
