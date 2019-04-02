<template>
  <!-- 我的消息 -->
  <div v-loading="load">
    <div class="infoLists">
      <div class="item" v-for="(card,index) in infoList" :index="index" :key="card.id" @click="handleLink(card)">
        <div class="time">{{card.send_time}}</div>
        <div class="infoText">
          <span class="redInfo" v-if="card.is_read ==0"></span>
          <span class="textInner">{{card.message}}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="pagination" v-if="pagemsg.total>10">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="historyOrderDataChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import { info } from "~/lib/v1_sdk/index";
import { mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";

export default {
  data() {
    return {
      infoList: [],
      curruntForm: {
        pages: 1,
        limits: 10
      },
      pagemsg: {
        page: 1,
        pagesize: 10,
        total: 10
      },
      load: false
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    handleLink(data) {
      if (data.is_read == 0) {
        this.updateStatus(data);
      }
      this.$emit("goToInfoDetail", data);
    },
    //更新消息状态
    updateStatus(data) {
      info.updateMyInfo({ infoId: data.id }).then(res => {
        if (res.status == 0) {
          let oldNum = persistStore.get("infoNum");
          let newNum = oldNum > 0 ? oldNum - 1 : oldNum;
          persistStore.set("infoNum", newNum);
          //重新设置我的消息 小红点
          this.$bus.$emit("profileInfoNum");
          this.$bus.$emit("getInfoNum");
        }
      });
    },
    // 获取我的消息列表
    getInfo() {
      this.load = true;
      info.userMessage(this.curruntForm).then(res => {
        if (res.status === 0) {
          this.infoList = res.data.userMessage;
          this.pagemsg.total = res.data.pageCount;
          let noMsg = this.infoList && this.infoList.length > 0 ? false : true;
          this.$emit("noMsg", noMsg);
          this.load = false;
        }
      });
    },
    historyOrderDataChange(val) {
      this.pagemsg.page = val;
      this.curruntForm.pages = val;
      this.getInfo();
    }
  },
  mounted() {
    this.getInfo();
    this.$bus.$on("getInfo", data => {
      this.getInfo();
    });
  }
};
</script>
