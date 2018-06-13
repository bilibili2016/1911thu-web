<template>
  <div class="aboutUs">
    <div class="topImg">
      <img src="~/assets/images/au_banner.png" alt="">
    </div>
    <div class="main">
      <div class="topBar">
        <el-tabs v-model="indexData.indexs">
          <el-tab-pane label="关于集团" name="first">
            <div class="first">
               <div class="group">
              <h3>1911集团</h3>
              <p>一九一一集团有限公司（以下简称：1911集团），在清华大学校领导的支持下，在清华校友的推动下，于2014年成立，源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。</p>
              <p>1911集团将始终把握时代脉搏，在布局的行业领域深耕细作，以创新、创造为主旨，以承担更多社会责任、创造更多社会价值为使命，以实际行动助力中国新经济发展，最终打造创新创业与健康品质生活的生态系统。</p>
            </div>
            <div class="culture">
              <h3>1911集团文化</h3>
              <div class="cultureInfo clearfix">
                <div class="fl">
                  <p>1911口号：以校友之力，成校友之事，圆校友之梦。</p>
                  <p>1911宗旨：为人正直谦和，工作一丝不苟，产品卓越精良。</p>
                  <p>1911使命：情系清华校友，引领时代创新。</p>
                  <p>1911价值观：有诚信，有担当，敢付出，行胜于言。</p>
                  <p>1911愿景：有清华校友的地方就有1911。</p>
                </div>
                <img class="fr" src="~/assets/images/au_culture.png" alt="">
              </div>
            </div>
            <div class="business">
              <h3>1911集团业务</h3>
              <p>集团旗下主要有1911创客空间、1911资本、1911商城和1911教育四大业务板块核心业务，各业务板块公司化独立运营，由集团公司控股。</p>
              <div class="businessInfo">
                <div>
                  <img src="~/assets/images/au_hackerspace.png" alt="">
                  <p>1911创客空间</p>
                </div>
                <div>
                  <img src="~/assets/images/au_capital.png" alt="">
                  <p>1911资本</p>
                </div>
                <div>
                  <img src="~/assets/images/au_shop.png" alt="">
                  <p>1911商城</p>
                </div>
                <div>
                  <img src="~/assets/images/au_education.png" alt="">
                  <p>1911教育</p>
                </div>

              </div>
            </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="发展历程" name="second">
            <div class="second">
              <div class="timeline" v-for="item in lineData" :key="item.id">
                <span>{{item.time}}</span>
                <img :src="rightImg" alt="">
                <span>{{item.text}}</span>
              </div>
              <div class="more">
                <p>
                  <img :src="moreImg" alt="">
                  <span>2018年未完待续...</span>
                </p>
              </div>
            </div>

          </el-tab-pane>
        </el-tabs>
      </div>


    </div>

  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapState('auth', ['index'])
    },
    data() {
      return {
        activeName: "first",
        indexData:{
          indexs:null,
        },
        lineData: [{
          time: '2016年',
          text: '1911创客空间收 购“大家咖啡”'
        }, {
          time: '2016年',
          text: '1911创客空间与清华大学电子工程系签署战略合作协议'
        }, {
          time: '2016年',
          text: '1911创客空间APP获得香港伟新集团李贤凯先生千万级天使轮投资'
        }, {
          time: '2017年',
          text: '1911集团正式成立'
        }, {
          time: '2017年',
          text: '清华大学电子工程系1911双创空间正式成立'
        }, {
          time: '2016年',
          text: '1911教育正式成立'
        }],
        rightImg: require('@/assets/images/right.png'),
        moreImg: require('@/assets/images/more.png')
      }
    },
    mounted() {
      this.indexData.indexs = this.index
    }
  }
</script>

<style scoped>
  /* .second {
    height: 1030px;
  } */
  .first{
    width: 1000px;
    margin: 0 auto;
    /* padding-bottom: 100px; */
    /* background-color: red; */
  }
  .timeline {
    height: 106px;
    width: 1000px;
    margin: 0 auto;
    border-bottom: 1px #DCDCDC dashed;
    line-height: 106px;
  }

  .timeline img {
    vertical-align: middle;
    width: 38px;
    height: 9px;
    /* padding: 0px 40px; */
    display: inline-block;
  }

  .timeline span:nth-child(1) {
    font-size: 32px;
    font-family: MicrosoftYaHei;
    color: rgba(34, 34, 34, 1);
    /* line-height:0px; */
    padding-right: 40px;
    padding-left: 40px;
  }

  .timeline span:nth-child(3) {
    font-size: 24px;
    font-family: MicrosoftYaHei;
    color: rgba(34, 34, 34, 1);
    /* line-height:0px; */
    padding-left: 40px;
  }

  .more {
    height: 150px;
    line-height: 150px;
    font-size: 32px;
    font-family: MicrosoftYaHei;
    color: rgba(100, 23, 166, 1);
  }

  .more img {
    width: 30px;
    height: 33px;
    vertical-align: middle;
  }

  .more p {
    text-align: center;
  }

  .more p span {
    padding-left: 10px;
  }

  .aboutUs {
    background-color: #fafafa;
    position: relative;
  }

  .topImg {
    width: 100%;
    height: 360px;
    overflow: hidden;
    position: relative;
    background-color: #eeeeee;
  }

  .topImg img {
    width: 1920px;
    height: 360px;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -960px;
  }

  .main {
    width: 1100px;
    margin: -40px auto 80px;
    box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
    background-color: #fff;
    z-index: 3;
    position: relative;
  }

  .aboutUs h3 {
    font-size: 36px;
    color: #222;
    padding-bottom: 61px;
    text-align: center;
  }
  .group,
  culture,
  business {
    padding-top: 99px;
    line-height: 30px;
  }

  .group p {
    margin-bottom: 20px;
  }

  .culture {
    margin-top: 150px;
  }

  .culture .cultureInfo {
    height: 320px;
    background-color: #fff;
  }

  .culture .cultureInfo div.fl {
    padding-top: 30px;
  }

  .culture .cultureInfo div.fl p {
    line-height: 54px;
  }

  .culture .cultureInfo img {
    width: 500px;
    height: 320px;
  }

  .business {
    margin-top: 150px;
    padding-bottom: 90px;

  }

  .business>p {
    width: 100%;
    text-align: center;
    margin-bottom: 90px;
  }

  .businessInfo {
    height: 270px;
    display: flex;
    justify-content: space-around;
  }

  .businessInfo div {
    text-align: center;
  }

  .businessInfo p {
    margin-top: 47px;
    font-size: 20px;
    color: #222;
  }

  .businessInfo img {
    width: 100px;
    height: 100px;
  }
</style>
