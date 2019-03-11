<template>
  <div>
    <div class="collegeInfo" v-if="noCollege">
      <div class="imgList" v-loading="loading">
        <img class="collegeImg" v-for="(url,index) in collegeImg" :key="index" :src="url" alt="">
      </div>
      <div class="con-detail" v-if="flag">
        <div class="con-five">
          <h4 class="college-title">
            <span>学院学费</span>
          </h4>
          <p class="text">学员优惠 惊喜不断</p>
          <p class="desc">
            学员只需
            <span class="p-one">{{parseInt(vipInfo.present_price)}}元</span>
            即可加入1911学堂{{vipInfo.title}}，学习价值{{999999999}}元的学院全部课程，
            <span class="p-one">学籍有效期一年。</span>
          </p>
          <p class="price">
            <span>
              <i class="p-two">{{999}}</i>门课程
            </span>
            <span>
              共计
              <i class="p-two">{{999}}</i>学时
            </span>
            <span>
              学费为
              <i class="p-two">{{parseInt(vipInfo.present_price)}}</i>元/年
            </span>
          </p>
        </div>
        <div class="btns clearfix" ref="btns" :class="{fixedBottom:!bottom,bottomHeight:bottom}">
          <div class="btn-con">
            <span class="text">学费{{parseInt(vipInfo.present_price)}}元/年</span>
            <div class="btn-item">
              <!-- 是会员 -->
              <span v-if="vipInfo.vipPrivate" class="button" @click="lookCourse">进入学院学习</span>
              <!-- 不是会员 -->
              <span v-if="!vipInfo.vipPrivate" class="button" @click="lookCourse">查看学院课程</span>

              <span class="button joinStudy" @click="buyVip">申请入学</span>
              <span class="button" @click="identificate">申请证书</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 会员购买弹窗 -->
      <v-vipbuy v-if="vipPopShow" :vipPopShow="vipPopShow" :vipInfo="vipInfo" @changeVipShow="changeVipShow"></v-vipbuy>
    </div>
    <div class="noCollege" v-else>
      <img src="http://static-image.1911edu.com/noCollege.png" alt="">
      <p>正在筹备中，敬请期待...</p>
    </div>
  </div>

</template>

<script>
import { vip } from "@/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import { matchSplits, setTitle, message } from "@/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";
import VipBuy from "@/components/common/VipBuy.vue";
export default {
  components: {
    "v-vipbuy": VipBuy
  },
  data () {
    return {
      flag: false,
      vipInfo: '',
      collegeImg: '',
      vipPopShow: false,
      bottom: true,
      loading: true,
      collegeArr: [
        {
          title: 'chineseCollege',
          url: [
            'http://static-image.1911edu.com/college_Chinese1.jpg',
            'http://static-image.1911edu.com/college_Chinese2.jpg',
            'http://static-image.1911edu.com/college_Chinese3.jpg',
            'http://static-image.1911edu.com/college_Chinese4.jpg',
          ]
        },
        {
          title: 'healthCollege',
          url: [
            'http://static-image.1911edu.com/college_health1.jpg',
            'http://static-image.1911edu.com/college_health2.jpg',
            'http://static-image.1911edu.com/college_health3.jpg',
            'http://static-image.1911edu.com/college_health4.jpg',
          ]
        },
        {
          title: 'sportsCollege',
          url: [
            'http://static-image.1911edu.com/college_sports1.jpg',
            'http://static-image.1911edu.com/college_sports2.jpg',
            'http://static-image.1911edu.com/college_sports3.jpg',
            'http://static-image.1911edu.com/college_sports4.jpg',
          ]
        },
        {
          title: 'smartCollege',
          url: [
            'http://static-image.1911edu.com/college_smart1.jpg',
            'http://static-image.1911edu.com/college_smart2.jpg',
            'http://static-image.1911edu.com/college_smart3.jpg',
          ]
        },
        {
          title: 'eduCollege',
          url: [
            'http://static-image.1911edu.com/college_edu1.jpg',
            'http://static-image.1911edu.com/college_edu2.jpg',
            'http://static-image.1911edu.com/college_edu3.jpg',
          ]
        },
        {
          title: 'newsCollege',
          url: [
            'http://static-image.1911edu.com/college_news1.png',
            'http://static-image.1911edu.com/college_news2.png',
            'http://static-image.1911edu.com/college_news3.png',
          ]
        }
      ],
      vipDetailData: {
        id: ""
      },
      gidForm: {
        gids: null
      },
      vipInfo: "",
      width: '',
      windowHeight: '',
      paperHeight: '',
      scrollTop: '',
      arr: '',
      noCollege: false,
    }
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    //   查看课程
    lookCourse () {
      this.$router.push({
        path: "/course/category",
        query: {
          cid: this.relativeID,
          cp: 0,
          pids: 0,
          xid: 0,
          vid: matchSplits("id")
        }
      });
    },
    //立即购买
    buyVip () {
      if (persistStore.get("token")) {
        this.vipPopShow = true;
      } else {
        this.$bus.$emit("loginShow");
      }
    },
    //关闭购买弹窗
    changeVipShow (val) {
      this.vipPopShow = false;
    },
    //申请认证
    identificate () {
      if (persistStore.get("token")) {
        this.gidForm.gids = "tab-tenth";
        this.setGid(this.gidForm);
        this.$router.push("/profile");
        persistStore.set("whichIntro", matchSplits("id"));
      } else {
        this.$bus.$emit("loginShow", true);
      }
    },
    screeningImg (data) {
      this.collegeArr.forEach((v) => {
        if (v.title == data.en_title) {
          this.collegeImg = v.url
          this.setWidth()
        }
      })
    },
    //会员详情
    vipDetail () {
      vip.vipGoodsDetail(this.vipDetailData).then(res => {
        if (res.status == 0) {
          this.vipInfo = res.data.vipGoodsDetail;
          this.noCollege = true
          this.screeningImg(res.data.vipGoodsDetail)
          setTitle(this.vipInfo.title + "-1911学堂");
        } else {
          message(this, 'error', res.msg)
          this.noCollege = false
          this.$router.push("/");
        }
      });
    },
    // 设置图片宽度
    setWidth () {
      if (this.collegeImg.length == 0) {
        this.noCollege = false
        return false
      } else {
        this.noCollege = true
      }
      this.width = (1920 - document.documentElement.clientWidth) / 2
      this.$nextTick(() => {
        this.arr = document.getElementsByClassName('collegeImg')
        for (let i = 0; i < this.arr.length; i++) {
          this.arr[i].style.marginLeft = -this.width + 'px';
        }
        this.loading = false
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      })
    },
    // 底部操作栏动态
    addClass () {
      this.windowHeight = document.body.scrollHeight;
      this.paperHeight = document.documentElement.clientHeight;
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (this.windowHeight - this.scrollTop - this.paperHeight <= 103) {
        this.bottom = true;
      } else {
        this.bottom = false;
      }
    },
    init () {
      this.relativeID = matchSplits("cid");
      this.vipDetailData.id = matchSplits("id");
    }
  },
  mounted () {
    this.init();
    this.vipDetail();
    // 寛高设置
    window.addEventListener("scroll", this.addClass);
    //   this.relativeID = matchSplits("cid");
  },
  watch: {
    $route (v, oldv) {
      this.init();
      this.vipDetail();
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~assets/style/home/college";
</style>