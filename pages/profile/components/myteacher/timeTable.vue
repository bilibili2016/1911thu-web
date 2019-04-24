<template>
  <div class="timeTable">
    <div class="top clearfix">
      <div class="left"><span>教师入口 > </span> <span> 预约时间表</span></div>
      <div class="right"> <img src="https://static-image.1911edu.com/myTeacher-icon1.png" alt=""> <span class="right">录入可预约时间</span></div>
    </div>
    <div class="table">
      <div class="con">
        <table>
          <tr>
            <th>预约日期</th>
            <th>开始时间</th>
            <th>预约咨询时长</th>
            <th>真实姓名</th>
            <th>预约状态</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>2019年04月29日</td>
            <td>11:30</td>
            <td>50min</td>
            <td>章三</td>
            <td class="unconfirmed">未确认</td>
            <td>
              <span class="operate accept">接受邀请</span>
              <span class="operate update">申请修改时间</span>
            </td>
          </tr>
          <tr>
            <td>2019年4月1日</td>
            <td>11:30</td>
            <td>50min</td>
            <td>章三</td>
            <td class="confirmed">已确认</td>
            <td></td>
          </tr>
          <tr>
            <td>2019年4月1日</td>
            <td>11:30</td>
            <td>50min</td>
            <td>章三</td>
            <td>未预约</td>
            <td></td>
          </tr>
          <tr>
            <td>2019年4月1日</td>
            <td>11:30</td>
            <td>50min</td>
            <td>章三</td>
            <td>未预约</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "~assets/style/profile/myTeacher/timeTable";
</style>

