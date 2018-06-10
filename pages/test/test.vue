<template>
  <div>
    <div class="centers">
      <!-- <video id="movd" width="414" height="270" preload="auto" playsinline webkit-playinline x5-playinline ref="mov">
      </video> -->
      <div id="movd" style="width:100%;height:auto;"></div>
    </div>
  </div>
</template>

<script>
// import tcPlayer from 'tcplayer'
import { other, auth } from "~/lib/v1_sdk/index";
export default {
  data() {
    return {
      token: "",
      wxData:{
        code:"",
        state:""
      }
    };
  },
  methods: {},
  mounted() {
    // console.log('123')
    function GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return unescape(r[2]);
      return null;
    }
    this.wxData.code = GetQueryString("code");
    this.wxData.state = GetQueryString("state");
    // this.$bus.$emit('getMsg', this.wxData)
    if (code != "" && code != null && code != "undefined") {
      return new Promise((resolve, reject) => {
        this.wxGet(this.wxData).then(response => {
          console.log(response);
          alert(123);
        });
      });
      // $.ajax({
      //   type: "post",
      //   url: "http://www.1911edu.com/Wapi/Index/wxBack",
      //   dataType: "json",
      //   data: {
      //     code: code,
      //     scene_id: state
      //   },
      //   success: function(response) {
      //     alert(123);
      //     if (response.status === 0) {
      //       this.token = response.data.token;
      //       this.$message({
      //         type: "success",
      //         message: response.msg
      //       });
      //       console.log(this.token);
      //     }
      //     if (response.status === 100101) {
      //       //跳转到绑定手机号
      //       this.$message({
      //         type: "success",
      //         message: response.msg
      //       });
      //     }
      //     if (response.status === 100100) {
      //       //错误
      //       this.$message({
      //         type: "error",
      //         message: response.msg
      //       });
      //     }
      //   }
      // });
    }
  }
};
</script>

<style scoped>
.centers {
  width: 244px;
  height: 200px;
  margin: 133px auto;
}
.centers img {
  width: 244px;
  height: 200px;
}
</style>
