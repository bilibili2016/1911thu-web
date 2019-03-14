<template>
  <div class="collegeLists">
    <div class="item clearfix" v-for="(item,index) in collegeListData" :key="index">
      <div class="item_left" @click="goVipDetail(item)">
        <img :src="item.picture" alt="">
        <div class="proflie-college">
          <p class="title">{{item.title}}</p>
          <p>
            <span class="college-study"><i class="el-icon-circle-check"></i> 已完成学时:{{item.totalStudyTime}}</span>
            <span>剩余{{item.expire_day}}天</span>
          </p>
        </div>
      </div>
      <div class="item_right">
        <div>
          <span class="btn" @click="goCourseList(item)">去学习</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { examine } from "~/lib/v1_sdk/index";
import { message } from "~/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";

export default {
  props: ["collegeListData"],
  data() {
    return {
      pageData: {
        id: "",
        name: ""
      },
      percentage: 20
    };
  },
  methods: {
    goVipDetail(item) {
      this.$router.push({
        path: "/home/vip/collegeInfo",
        query: {
          id: item.id,
          cid: item.category_id,
          title: item.en_title
        }
      });
    },
    goCourseList(item) {
      this.$router.push(
        "/course/category?cid=" +
          item.category_id +
          "&cp=0&pids=0&xid=0&vid=" +
          item.id
      );
    }
  },
  mounted() {}
};
</script>