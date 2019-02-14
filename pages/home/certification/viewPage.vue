<template>
  <div class="searchCer viewPage">
    <p class="intro">证书查询结果</p>
    <div class="content">
      <div class="top">
        <h4>1911学堂证书</h4>
      </div>
      <div class="bottom clearfix">
        <div class="item left">
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
    </div>
  </div>
</template>
<script>
export default {
  props: ["viewData"]
};
</script>
<style scoped lang="scss">
@import "~assets/style/certification/searchPage.scss";
</style>