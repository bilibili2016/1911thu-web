<template>
  <div class="VIP-con">
    <div class="vipBanner" :class="{netWork:vipDetailData.id=='2',online:vipDetailData.id=='3'}"></div>
    <div class="con-detail">
      <div class="con-one clearfix">
        <div class="oneDIV clearfix">
          <div class="one-left">
            <img src="http://static-image.1911edu.com/college-pic1.png" alt>
          </div>
          <div class="one-right">{{collegeCon.conOne.right}}</div>
        </div>
        <div class="one-bottom">
          <span>{{collegeCon.conOne.bottom}}</span>
        </div>
      </div>
      <div class="con-two">
        <h4 class="college-title">
          <span>培养目标</span>
        </h4>
        <div class="two-text">{{collegeCon.conTwo.twoText}}</div>
        <div class="two-desc">
          <div class="desc-title">{{collegeCon.conTwo.twoDesc.title}}</div>
          <div class="desc-items clearfix">
            <div class="two-left">
              <div
                class="item"
                v-for="(item,index) in collegeCon.conTwo.twoDesc.item1"
                :key="index"
              >
                <span class="index">{{index+1}}</span>
                <span class="item-text">{{item}}；</span>
              </div>
            </div>
            <div class="two-right">
              <div
                class="item"
                v-for="(item,index) in collegeCon.conTwo.twoDesc.item2"
                :key="index"
              >
                <span class="index">{{index+7}}</span>
                <span class="item-text">{{item}}；</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="con-three">
        <h4 class="college-title">
          <span>师资来源</span>
        </h4>
        <div class="three-text">本学院授课师资来自以下及其他相关单位</div>
        <div class="source clearfix">
          <div class="three-item" v-for="(item,index) in collegeCon.conThree.imgItems" :key="index">
            <img :src="item" alt>
          </div>
        </div>
      </div>
      <div class="con-four">
        <h4 class="college-title">
          <span>认证证书</span>
        </h4>
        <div class="four-text clearfix">
          <div class="four-left">
            <span class="circle"></span>
            <span class="text">学员学习结束后可申请参加相关考试，考试通过者可获得清华大学相关部门或国内外其他知名院校颁发的认证证书及1911学堂结业证书。</span>
          </div>
          <div class="four-right">
            <img src="http://static-image.1911edu.com/college-pic13.png" alt>
          </div>
        </div>
        <div class="four-certification">
          <img :src="collegeCon.conFour.img" alt>
        </div>
      </div>
      <div class="con-five">
        <h4 class="college-title">
          <span>学院学费</span>
        </h4>
        <p class="text">学员优惠 惊喜不断</p>
        <p class="desc">
          学员只需
          <span class="p-one">{{collegeCon.conFive.priceOne}}元</span>
          即可加入1911学堂{{collegeCon.title}}，学习价值{{collegeCon.conFive.priceFive}}元的学院全部课程，
          <span
            class="p-one"
          >学籍有效期一年。</span>
        </p>
        <p class="price">
          <span>
            <i class="p-two">{{collegeCon.conFive.priceTwo}}</i>门课程
          </span>
          <span>
            共计
            <i class="p-two">{{collegeCon.conFive.priceThree}}</i>学时
          </span>
          <span>
            学费为
            <i class="p-two">{{collegeCon.conFive.priceFour}}</i>元/年
          </span>
        </p>
      </div>
      <div class="btns clearfix" ref="btns" :class="{fixedBottom:!bottom,bottomHeight:bottom}">
        <div class="btn-con">
          <span class="text">学费{{vipInfo.present_price}}元/年</span>
          <div class="btn-item">
            <!-- 是会员 -->
            <span v-if="vipInfo.vipPrivate" class="button" @click="lookCourse">进入学院学习</span>
            <!-- 不是会员 -->
            <span v-if="!vipInfo.vipPrivate" class="button" @click="lookCourse">查看学院课程</span>
            
            <span class="button" @click="buyVip">申请入学</span>
            <span class="button" @click="identificate">申请证书</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 会员购买弹窗 -->
    <v-vipbuy :vipPopShow="vipPopShow" :vipId="vipDetailData.id" @changeVipShow="changeVipShow"></v-vipbuy>
  </div>
</template>
<script>
import { store as persistStore } from "~/lib/core/store";
import { matchSplits, setTitle, message } from "@/lib/util/helper";
import { vip } from "@/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import VipBuy from "@/components/common/VipBuy.vue";

export default {
  data () {
    return {
      onlineImg: "http://static-image.1911edu.com/online-con.png",
      networkImg: "http://static-image.1911edu.com/network-con.png",
      vipPopShow: false,
      relativeID: "",
      gidForm: {
        gids: null
      },
      windowHeight: 0,
      paperHeight: 0,
      scrollTop: 0,
      bottom: true,
      vipDetailData: {
        id: ""
      },
      vipInfo: "",
      collegeCon: {
        conOne: {
          right: "",
          bottom: ""
        },
        conTwo: {
          twoText: "",
          twoDesc: {
            title: "",
            item1: [],
            item2: []
          }
        },
        conThree: {
          imgItems: []
        },
        conFour: {
          img: ""
        },
        conFive: {
          priceOne: "",
          priceTwo: "",
          priceThree: "",
          priceFour: "",
          priceFive: ""
        }
      },
      networkCon: {
        title: "在线干部学院",
        conOne: {
          right:
            "1911学堂在线干部学院根据党政机关及事业单位的需求，携手清华大学、中央党校（国家行政学院）等多所全球知名院校的顶级专家和资深教授，以及政策制定和政策研究智囊专家，有针对性的研发系统化的课程体系，为各级党政机关与事业单位干部提供全球最优质的数字化课程资源，为学员带来权威、前沿、高端的学习体验。",
          bottom: "各级各类党政机关与事业单位干部"
        },
        conTwo: {
          twoText:
            "1911学堂在线干部学院的培养目标是培养新时代忠诚担当、底蕴深厚的高素质复合型干部。使之知识储备又博又专，做到既懂专业又懂管理，既能科学决策又能统筹协调，既能把握大局又能勇于开拓。",
          twoDesc: {
            title: "课程特色及学员收获",
            item1: [
              "教研团队 阵容强大",
              "权威师资 顶尖专家",
              "精品课程 量身打造",
              "在线学习 自主安排",
              "教学一体 高效互动",
              "清华认证 权威性高"
            ],
            item2: [
              "夯实党政管理的专业知识",
              "提高果断科学的决策能力",
              "增强统筹协调的组织才能",
              "树立把握全局的战略思维",
              "增加勇于开拓的创新精神",
              "提升党政管理的人文素养"
            ]
          }
        },
        conThree: {
          imgItems: [
            "http://static-image.1911edu.com/college-QH.png",
            "http://static-image.1911edu.com/college-BD.png",
            "http://static-image.1911edu.com/college-ZGZ.png",
            "http://static-image.1911edu.com/college-ZKY.png",
            "http://static-image.1911edu.com/college-ZSK.png",
            "http://static-image.1911edu.com/college-RD.png"
          ]
        },
        conFour: {
          img: "http://static-image.1911edu.com/college-pic16.png"
        },
        conFive: {
          priceOne: 1800,
          priceTwo: 78,
          priceThree: 147,
          priceFour: 1800,
          priceFive: 5880
        }
      },
      onlineCon: {
        title: "在线商学院",
        conOne: {
          right:
            "1911学堂在线商学院根据企业发展的需求，以解决企业组织的实际管理问题为导向，携手近百位来自清华大学、北京大学、国家发改委、国资委等权威机构的专家学者及智囊团队，整合他们在经济、金融和企业管理等领域深厚的理论功底以及各行业领域丰富的实践经验，有针对性的研发具有实用性的课程体系，为学员提供全球最优质的数字化课程资源，带来权威、前沿、高端的学习体验，助力企业中高层管理人员实现个性化、阶梯式的成长。",
          bottom: "各级各类企业中高层管理人员"
        },
        conTwo: {
          twoText:
            "1911学堂在线商学院的培养目标是培养具备国际视野、勇于创新、能够适应客观环境变化的学习型企业经营管理者。使之具备完善的知识结构和岗位胜任能力，具备解决企业实际经营管理问题的能力，能够经得起风浪考验，适应新时代中国特色社会主义市场经济，推进供给侧结构性改革，实现企业的高质量、高效益发展。",
          twoDesc: {
            title: "课程特色及学员收获",
            item1: [
              "教研团队 阵容强大",
              "权威师资 顶尖专家",
              "精品课程 量身打造",
              "在线学习 自主安排",
              "教学一体 高效互动",
              "清华认证 权威性高"
            ],
            item2: [
              "夯实党政管理的专业知识",
              "提高果断科学的决策能力",
              "增强统筹协调的组织才能",
              "树立把握全局的战略思维",
              "增加勇于开拓的创新精神",
              "提升企业领导的人文素养"
            ]
          }
        },
        conThree: {
          imgItems: [
            "http://static-image.1911edu.com/college-QH.png",
            "http://static-image.1911edu.com/college-BD.png",
            "http://static-image.1911edu.com/college-GFG.png",
            "http://static-image.1911edu.com/college-ZRK.png",
            "http://static-image.1911edu.com/college-ZKY.png",
            "http://static-image.1911edu.com/college-ZZF.png"
          ]
        },
        conFour: {
          img: "http://static-image.1911edu.com/college-pic14.png"
        },
        conFive: {
          priceOne: 3600,
          priceTwo: 63,
          priceThree: 187,
          priceFour: 3600,
          priceFive: 11220
        }
      }
    };
  },
  components: {
    "v-vipbuy": VipBuy
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    //查看课程
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
    //会员详情
    vipDetail () {
      vip.vipGoodsDetail(this.vipDetailData).then(res => {
        if (res.status == 0) {
          this.vipInfo = res.data.vipGoodsDetail;
          setTitle(this.vipInfo.title + "-1911学堂");
        }
      });
    },
    //
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
      this.vipDetailData.id = matchSplits("id"); //2:干部网络学院  3:在线商学院
      if (this.vipDetailData.id == "2") {
        this.collegeCon = Object.assign({}, this.networkCon);
      } else {
        this.collegeCon = Object.assign({}, this.onlineCon);
      }
    }
  },
  watch: {
    $route (v, oldv) {
      this.init();
      this.vipDetail();
    }
  },
  mounted () {
    this.init();
    this.vipDetail();
    // 寛高设置
    window.addEventListener("scroll", this.addClass);
  }
};
</script>