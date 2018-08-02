<template>
  <div class="conversion">
    <div>
      <div class="tables">
        <table class="recordTable">
          <!--alternate-->
          <tr class="tr_header">
            <th>邀请好友</th>
            <th>类型</th>
            <th>日期</th>
          </tr>
          <tr v-if="recordData&&recordData.length>0" v-for="(code,index) in recordData" :key="index" class="tr_body">
            <td>{{code.user_name}}通过
              <i>{{code.invitation_code}}</i> 加入学习</td>
            <td>课程+项目</td>
            <td>{{code.create_time}}</td>
          </tr>
          <div v-if="!recordData||recordData.length<1" class="noCodes">
            <img :src="noMsgImg" alt="">
            <p>抱歉，现在还没有课程码~</p>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recordData'],
  data() {
    return {
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png'
    }
  }
}
</script>

<style scoped lang="scss">
.conversion {
  margin: 30px 30px 0;
  padding-bottom: 50px;
  & > div {
    .el-table {
      border: 1px solid #e8d6f7;
      .el-table .hidden-columns {
        visibility: inherit;
      }
    }
    .tables {
      position: relative;
      overflow-y: auto;
      border: 1px solid #e8d6f7;
    }
    .recordTable {
      width: 100%;
      overflow: hidden;
      border-spacing: 0;
      tr {
        font-size: 0;
      }
      .tr_header {
        display: table;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #ebe7ed;
        text-align: center;
        color: #6417a6;
        font-size: 16px;
        th {
          font-weight: 400;
          background-color: transparent;
          font-size: 14px;
          width: 33.33%;
        }
      }
      .tr_body {
        display: inline-table;
        width: 100%;
        height: 52px;
        line-height: 52px;
        background-color: #fafafa;
        text-align: center;
        color: #222;
        font-size: 14px;
        border-bottom: 1px solid #e8d6f7;
        &:last-child {
          border-bottom: none;
        }
        td {
          width: 33.33%;
          font-size: 14px;
          i {
            color: #6417a6;
          }
        }
      }
      .noCodes {
        width: 100%;
        text-align: center;
        padding-bottom: 50px;
        img {
          width: 316px;
          height: 274px;
          margin-top: 100px;
        }
        p {
          height: 70px;
          line-height: 70px;
          text-align: center;
          color: #999;
          font-size: 20px;
        }
      }
    }
  }
}
</style>