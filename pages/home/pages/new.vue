<template>
    <div class="bg">
      <el-row class="center">
        <v-title :data = "titleOne"></v-title>
        <v-card ref="card" :data="newData" :config = "config" @selectCid = "selectCid"></v-card>
        <v-more :linkdata="linkone"></v-more>
      </el-row>
    </div>
</template>

<script>
import CustomTitle from "@/components/common/Title.vue";
import CustomCard from "@/components/common/Card.vue";
import CustomMore from "@/components/common/More.vue";
import { mapActions } from 'vuex';
export default {
  props: ["config", "newData", "titleOne", 'linkone'],
  components: {
    "v-title": CustomTitle,
    "v-card": CustomCard,
    "v-more": CustomMore
  },
  data() {
    return {
      kidForm: {
        kids: null
      }
    }
  },
  methods: {
    ...mapActions('auth',[
      'setKid'
    ]),
    selectCid(val) {
      console.log(val, '这是选择cid')
      this.kidForm.kids = val
      this.setKid(this.kidForm)
    },
  },
  mounted () {
    // console.log(this.linkone)
  }
};
</script>

