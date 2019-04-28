  <template>
  <!-- 开发票历史 -->
  <div class="tickeHietory">
    <!-- {{orderData}} -->
    <!-- 历史列表 -->
    <div class="orderList" v-for="(ticket, index ) in orderData" :key="index">
      <div class="topBar clearfix">
        <span class="fl"></span>
        <span class="fr">{{exchangeTime(ticket.create_time)}}</span>
      </div>
      <div class="list">
        <div class="content">
          <div class="course">
            <div class="courseOne">
              <img class="fl" :src="ticket.order_picture" alt="">
              <div class="fl">
                <h4>{{ticket.order_title}}</h4>
                <h6 v-if="ticket.order_curriculum_type!='3' && ticket.order_curriculum_type!='4'">{{ticket.curriculum_time}}学时</h6>
              </div>
            </div>
          </div>
          <div class="price height">
            <p>￥{{ticket.total_price}}</p>
          </div>
          <div class="number height" @click="handleTicketPopup(ticket.id)">
            <div>
              <p>1张发票</p>
              <p>含{{ticket.order_number}}个订单</p>
            </div>
            <div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="status height">
            <div v-if="ticket.send_status == '0'" @click="handleStatusPopup(ticket.id)">未发出
              <i class="el-icon-arrow-right"></i>
            </div>
            <div v-else @click="handleStatusPopup(ticket.id)">已发出
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发票弹框 -->
    <v-detailpop v-show="isTicketPopup" :data="TicketPopupData" @closeTicketPopup="closeTicketPopup"></v-detailpop>

    <!-- 状态弹框 -->
    <v-statuspop v-show="isStatusPopup" :data="StatusPopupData" @closeStatusPopup="closeStatusPopup"></v-statuspop>

  </div>
</template>

<script>
import { ticketHistory } from "~/lib/v1_sdk/index";
import { mapActions } from "vuex";
import { timestampToTime, open, IEPopup } from "@/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";
import DetailPopup from "@/pages/profile/components/myticket/detailPopup";
import StatusPopup from "@/pages/profile/components/myticket/statusPopup";
export default {
  props: ["orderData"],
  components: {
    "v-detailpop": DetailPopup,
    "v-statuspop": StatusPopup
  },
  data() {
    return {
      isTicketPopup: false,
      TicketPopupData: [],
      isStatusPopup: false,
      StatusPopupData: [],
      checkMsg: false,
      noData: false,
      orderForm: {
        pages: 1,
        limits: null,
        payStatus: null,
        ids: null
      },
      kidForm: {
        kid: ""
      },
      gidForm: { gids: null },
      responseData: { type: true, res: "" }
    };
  },
  methods: {
    ...mapActions("auth", ["setGid", "setKid"]),
    //开票详情弹框
    handleTicketPopup(id) {
      let ticketId = { ID: id };
      ticketHistory.invoiceOrderDetail(ticketId).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$bus.$emit("reLoginAlertPop", this.responseData);
          return false;
        }
        IEPopup("pane-tab-eighth", "-ms-page", 0);

        this.isTicketPopup = true;
        this.TicketPopupData = response.data.invoiceOrderList;
      });
    },
    //关闭开票详情弹框
    closeTicketPopup() {
      IEPopup("pane-tab-eighth", "relative", 1);
      this.isTicketPopup = false;
    },
    //发票详情弹框
    handleStatusPopup(id) {
      let invoiceID = { ID: id };
      ticketHistory.invoiceDetail(invoiceID).then(response => {
        if (response.status === 100008) {
          this.responseData.res = response;
          this.$bus.$emit("reLoginAlertPop", this.responseData);
          return false;
        }

        IEPopup("pane-tab-eighth", "-ms-page", 0);
        this.isStatusPopup = true;
        this.StatusPopupData = response.data;
      });
    },
    //关闭
    closeStatusPopup() {
      IEPopup("pane-tab-eighth", "relative", 1);
      this.isStatusPopup = false;
    },
    goShopping(id) {
      this.orderForm.ids = id;
      ticketHistory.buyAgain(this.orderForm).then(response => {
        if (response.status === 0) {
          this.$router.push("/shop/shoppingCart");
        } else {
          this.$message({
            showClose: true,
            type: "error",
            message: response.msg
          });
        }
      });
    },
    cancelOrder(id) {
      //取消订单
      this.orderForm.ids = id;
      ticketHistory.cancelOrder(this.orderForm).then(response => {
        if (response.status === 0) {
          this.$emit("handleUpdate", true);
          this.$message({
            showClose: true,
            type: "success",
            message: "订单已取消！"
          });
        } else {
          this.$message({
            showClose: true,
            type: "error",
            message: response.msg
          });
        }
      });
    },
    handleSelectChange() {},
    // 时间戳转日期格式
    exchangeTime(time) {
      return timestampToTime(time);
    },
    goLink(item) {
      this.gidForm.gids = item;
      this.setGid(this.gidForm);
      this.$router.push("/profile");
      this.$bus.$emit("selectProfileIndex", item);
    }
  }
};
</script>
