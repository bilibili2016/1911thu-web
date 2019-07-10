<template>
  <div class="rightContent">
    <div class="shoppingCart" id="cartNum" v-if="isShowLRBtn" @click="handleLink('/shop/shoppingcart')">
      <span class="cartIcon"></span>
      <i v-if="productsNum>0">{{productsNum}}</i>
    </div>
    <div class="headImg">
      <span class="redInfo" v-if="infoNum !=0"></span>
      <img :src="data.userImg" alt="" @click="handleFirstLInk()">
      <!-- 个人中心下拉框 -->
      <ul class="subPages">
        <li v-for="(item,index) in subPagesData" :key="index" @click="handleLinkProfile(item.link)">
          {{item.text}}
          <div v-if="item.alert">
            <span v-if="infoNum!=0" class="redInfo"></span>
          </div>
        </li>
        <li @click="handleSignOut">退出</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";

export default {
  props: ["data", "isShowLRBtn", "subPagesData"],
  data () {
    return {
      infoNum: ""
    };
  },
  computed: {
    ...mapState("auth", ["productsNum"])
  },
  methods: {
    handleLink (data) {
      this.$emit("handleLink", data);
    },
    handleFirstLInk () {
      let link
      if (persistStore.get("isTeacher") == 1) {
        link = 'tab-thirteenth'
      } else {
        link = 'tab-first'
      }
      this.$emit("handleLinkProfile", link);
      let obj = {
        name: link
      };
      this.$bus.$emit("handleHeadClick", link);
    },
    handleLinkProfile (data) {
      this.$emit("handleLinkProfile", data);
      let obj = {
        name: data
      };
      this.$bus.$emit("handleHeadClick", obj);
    },
    handleSignOut () {
      this.$emit("handleSignOut");
    },
    getInfoNum () {
      this.infoNum = persistStore.get("infoNum");
    }
  },
  mounted () {
    this.$bus.$on("getInfoNum", data => {
      this.getInfoNum();
    });
  }
};
</script>

<style scoped>
</style>
