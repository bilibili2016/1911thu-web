<template>
  <div class="searchCer viewPage">
    <p class="intro">证书查询结果</p>
    <div class="content">
      <div class="top">
        <h4 v-if="viewData !='noData'">1911学堂证书</h4>
      </div>
      <div class="bottom viewBottom clearfix">
        <div v-if="viewData !='noData'">
          <div class=" item left">
            <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{viewData.real_name}}</p>
            <p v-if="viewData.sex==1">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：男</p>
            <p v-if="viewData.sex==2">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：女</p>
            <p v-if="viewData.sex==3">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：保密</p>
            <p>出生日期：{{viewData.birthday}}</p>
            <p>证书编号：{{viewData.certificate_number}}</p>
          </div>
          <div class="item right">
            <p>项目名称：{{viewData.project_name}}</p>
            <p>开始时间：{{viewData.start_time}}</p>
            <p>结束时间：{{viewData.end_time}}</p>
            <p>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时：{{viewData.class_hour}}学时</p>
          </div>
        </div>
        <v-nodata class="noDataImg" v-if="viewData =='noData'" :pageType="pageType"></v-nodata>
      </div>
      <div class="goSearch" @click="goSearch">继续查询</div>
    </div>

  </div>
</template>
<script>
import noData from "@/components/common/NoData.vue";

export default {
  props: ["viewData"],
  components: {
    "v-nodata": noData
  },
  data () {
    return {
      pageType: {
        page: "searchCer",
        text: "对不起，没有查到相关信息！",
        imgUrl: "https://static-image.1911edu.com/noSearch.png"
      }
    };
  },
  methods: {
    goSearch () {
      this.$emit("goSearch");
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/certification/searchPage.scss";
</style>