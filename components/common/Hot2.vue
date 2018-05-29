<template>
  <div class="center">
      <div class="header">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabStyle">
          <el-tab-pane label="最新" name="first"></el-tab-pane>
          <el-tab-pane label="最热" name="second"></el-tab-pane>
        </el-tabs>
        <el-switch
          v-model="value3"
          active-text="按月付费"
          inactive-text="按年付费"
          class="switch"
          >
        </el-switch>
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>


<style scoped lang="scss">
.center{
   width: 1100px;
    margin: 0 auto;
    .header{
      height: 84px;
    }
}
.banner {
  width: 100%;
  // height: 194px;
  background: rgba(235, 231, 237, 1);
  .center {
    width: 1100px;
    margin: 0 auto;
    .college {
      height: 78px;
      border-bottom: 1px rgba(232, 214, 247, 1) solid;
      ul {
        li {
          list-style: none;
          display: inline-block;
          line-height: 78px;
          font-size: 14px;
          padding-right: 17px;
          cursor: pointer;

          span {
            // padding: 10px 20px;
            background-color: #8f4acb;
          }
        }
      }
      .title {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 34, 34, 1);
      }
    }
    .classification {
      ul {
        li {
          list-style: none;
          display: inline-block;
          line-height: 50px;
          font-size: 14px;
          padding-right: 17px;
          cursor: pointer;
          span {
            background-color: #8f4acb;
          }
        }
      }
    }
    .carlist{
      height: 1400px;
    }
  }
}
.bgs {
  .el-button {
    background-color: rgba(143, 74, 203, 1);
    color: #fff;
    border: none;
  }
}
.tabStyle{
  width: 121px;
  display: inline-block;
}
.switch{
  margin-top: 30px;
  display:inline-block;
  float: right;
}
</style>
