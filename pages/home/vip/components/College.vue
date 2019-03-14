<template>
  <div class="VIP-con">
    <div class="vipBanner" :class="{netWork:vipInfo.en_title=='cadreCollege',online:vipInfo.en_title=='commercialCollege'}"></div>
    <div class="con-detail" v-for="(collegeCon,index) in collegeArr" :key="index">
      <div class="con-one clearfix">
        <div class="oneDIV clearfix">
          <div class="one-left">
            <img src="http://static-image.1911edu.com/college-pic1.png" alt>
          </div>
          <div class="one-right">{{collegeCon.conOne.right}}</div>
        </div>
        <div class="one-bottom">
          <span class="left">适合人群</span>
          <span class="right">{{collegeCon.conOne.bottom}}</span>
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
              <div class="item" v-for="(item,index) in collegeCon.conTwo.twoDesc.item1" :key="index">
                <span class="index">{{index+1}}</span>
                <span class="item-text">{{item}}；</span>
              </div>
            </div>
            <div class="two-right">
              <div class="item" v-for="(item,index) in collegeCon.conTwo.twoDesc.item2" :key="index">
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
    </div>
  </div>
</template>
<script>
import { matchSplits } from "@/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  props: ['vipInfo'],
  data () {
    return {
      onlineImg: "http://static-image.1911edu.com/online-con.png",
      networkImg: "http://static-image.1911edu.com/network-con.png",
      relativeID: "",
      gidForm: {
        gids: null
      },
      windowHeight: 0,
      paperHeight: 0,
      scrollTop: 0,
      collegeArr: [],
      networkCon: [{
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
      }],
      onlineCon: [{
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
              "夯实企业管理的专业知识",
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
      }]
    };
  },
  mounted () {
    if (matchSplits("title") == "cadreCollege") {
      //'cadreCollege' 在线干部学院
      this.collegeArr = this.networkCon;
    } else if (matchSplits("title") == "commercialCollege") {
      //'commercialCollege' 在线商学院
      this.collegeArr = this.onlineCon;
    }
  },
  watch: {
    vipInfo () {
      if (this.vipInfo.en_title == "cadreCollege") {
        //'cadreCollege' 在线干部学院
        this.collegeArr = this.networkCon;
      } else if (this.vipInfo.en_title == "commercialCollege") {
        //'commercialCollege' 在线商学院
        this.collegeArr = this.onlineCon;
      }
    }
  },
};
</script>