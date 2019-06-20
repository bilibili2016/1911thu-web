<template>
  <!-- 展示个人信息 -->
  <div class="psnInfo">
    <ul>
      <li>
        <span>真实姓名：</span>
        <span>{{psnForm.real_name}}</span>
      </li>
      <!-- <li>
        <span>学号：</span>
        <span>{{psnForm.student_number}}</span>
      </li> -->
      <li>
        <span>昵称：</span>
        <span>{{psnForm.nick_name}}</span>
      </li>
      <li>
        <span>性别：</span>
        <span>{{getSex(psnForm.sex)}}</span>
      </li>
      <li>
        <span>生日：</span>
        <span>{{formatDate(psnForm.birthday)}}</span>
      </li>
      <li>
        <span>所在地区：</span>
        <span>{{psnForm.province_name}}{{psnForm.city_name}}{{psnForm.area_name}}</span>
      </li>
      <li>
        <span>职位：</span>
        <span>{{psnForm.position_name}}</span>
      </li>
      <li>
        <span>邮箱：</span>
        <span class="oneLine">{{psnForm.email.substring(0,50)}}</span>
      </li>
      <li>
        <span>手机号：</span>
        <span class="default">{{psnForm.user_name}}</span>
      </li>
      <li>
        <span>单位名称：</span>
        <span class="default oneLine">{{psnForm.company_name.substring(0,30)}}</span>
      </li>
      <li  v-if="userInfo.is_teacher==1">
        <span>银行卡信息：</span>
        <span class=" " style="margin-right:10px">{{psnForm.bank_name}}</span>
        <span class=" ">{{psnForm.bank_card}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["psnForm","userInfo"],
  methods: {
    // 切换性别
    getSex(sex) {
      if (sex == 1) {
        return "男";
      } else if (sex == 2) {
        return "女";
      } else {
        return "保密";
      }
    },
    // 格式化生日
    formatDate(date) {
      if (date && date != "") {
        let tmp = new Date(date);
        let year = tmp.getFullYear();
        let mon = tmp.getMonth() + 1;
        let day = tmp.getDate();
        return year + "年" + mon + "月" + day + "日";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
</style>