<template>
  <div class="searchCer viewPage">
    <p class="intro">证书查询结果</p>
    <div class="content">
      <div class="top">
        <h4>1911学堂证书</h4>
      </div>
      <div class="bottom clearfix">
        <div class="item left">
          <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{viewData.name}}</p>
          <p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：{{viewData.sex}}</p>
          <p>出生日期：{{viewData.birthday}}</p>
          <p>证书编号：{{viewData.number}}</p>
        </div>
        <div class="item right">
          <p>项目名称：{{viewData.projectName}}</p>
          <p>开始时间：{{viewData.startTime}}</p>
          <p>结束时间：{{viewData.endTime}}</p>
          <p>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时：{{viewData.time}}学时</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: ["viewData"],
  data() {
    return {
      viewData: {
        name: "徐楠",
        sex: "女",
        birthday: "1985年10月1日",
        number: "19112019020001",
        projectName: "在线商学院",
        startTime: "2019年12月31日",
        endTime: "2019年12月31日",
        time: 100
      }
    };
  },
  mounted() {
    console.log(this.viewData, "kkkk");
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/certification/searchPage.scss";
</style>