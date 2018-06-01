<template>
    <div class="aboutUs">
        <div class="topImg">
            <img src="" alt="">
        </div>
        <div class="group">
            <h3>1911集团</h3>
            <p>一九一一集团有限公司（以下简称：1911集团），在清华大学校领导的支持下，在清华校友的推动下，于2014年成立，源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。</p>
            <p>1911集团将始终把握时代脉搏，在布局的行业领域深耕细作，以创新、创造为主旨，以承担更多社会责任、创造更多社会价值为使命，以实际行动助力中国新经济发展，最终打造创新创业与健康品质生活的生态系统。</p>
        </div>
        <div class="culture">
            <h3>1911集团文化</h3>
            <div class="cultureInfo">
                <div class="fl">
                    <p>1911口号：以校友之力，成校友之事，圆校友之梦。</p>
                    <p>1911宗旨：为人正直谦和，工作一丝不苟，产品卓越精良。</p>
                    <p>1911使命：情系清华校友，引领时代创新。</p>
                    <p>1911价值观：有诚信，有担当，敢付出，行胜于言。</p>
                    <p>1911愿景：有清华校友的地方就有1911。</p>
                </div>
                <img class="fr" src="../../../assets/images/culture.png" alt="">
            </div>
        </div>
        <div class="business">
            <h3>1911集团业务</h3>
            <p>集团旗下主要有1911创客空间、1911资本、1911商城和1911教育四大业务板块核心业务，各业务板块公司化独立运营，由集团公司控股。</p>
            <div class="businessInfo">
                <div>
                    <img src="../../../assets/images/business.png" alt="">
                    <p>1911创客空间</p>
                </div>
                <div>
                    <img src="../../../assets/images/business.png" alt="">
                    <p>1911资本</p>
                </div>
                <div>
                    <img src="../../../assets/images/business.png" alt="">
                    <p>1911商城</p>
                </div>
                <div>
                    <img src="../../../assets/images/business.png" alt="">
                    <p>1911教育</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.aboutUs{
    background-color: #fafafa;
}
.topImg{
    width: 100%;
    height: 636px;
    position: relative;
    background-color: #eeeeee;
}
.topImg img{
    width: 1920px;
    height: 636px;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -960px;
}
.aboutUs h3{
    font-size: 36px;
    color: #222;
    padding-bottom: 61px;
    text-align: center;
}
.group,culture,business{
    width: 1100px;
    margin: 0 auto;
    padding-top: 99px;
    line-height: 30px;
}
.group p{
    margin-bottom: 20px;
}
.culture {
    margin-top: 150px;
}
.culture .cultureInfo{
    width: 1100px;
    height: 416px;
    margin: 0 auto;
    background-color: #fff;
}
.culture .cultureInfo div.fl{
    width: 520px;
    padding: 80px 0 0 40px;
}
.culture .cultureInfo div.fl p{
    line-height: 54px;
}
.culture .cultureInfo img{
    width: 580px;
    height: 416px;
}
.business{
    margin-top: 150px;
    padding-bottom: 90px;
}
.business > p{
    text-align: center;
    margin-bottom: 90px;
}
.businessInfo{
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
.businessInfo div{
    text-align: center;
}
.businessInfo p{
    margin-top: 47px;
    font-size: 20px;
    color: #222;
}
.businessInfo img{
    width: 100px;
    height: 100px;
}
</style>