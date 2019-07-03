<template>
    <!-- 人工智能 -->
    <div class="smartCollege">
        <div class="vipBanner"></div>
        <div class="container">
            <div class="intro">
                <p>1911学堂人工智能学院聘请清华大学计算机科学与技术系孙富春教授担任专家组组长，并邀请30余名人工智能领域专家组成1911学堂人工智能学院专家组，通过AI技术为职场精英、企业高管、政府官员提供线下面授教育服务。人工智能学院将通过打造 “人工智能讲堂”、“名师高端对话”等多个精品课程，由AI业界大咖为用户传递行业热点和前沿知识，为大中型企业制订个性化课程，提供全程导师服务，打造系统性的教育培训方案，为高校、职校理顺并夯实人工智能学科建设，提供专业师资培训服务和课程内容。</p>
                <!-- <p>随着人工智能技术的快速发展与市场规模急剧扩大，我国人工智能人才开始显现供不应求的局面。据业内人士估算，我国人工智能领域的人才缺口数量在百万级别。</p> -->
                <!-- <p>1911学堂人工智能学院，面向各单位相关岗位人员提供系统性的教育培训解决方案，通过优质教育资源整合及产学研协同，培养人工智能领域的复合型人才，特别是贯通人工智能理论、方法、技术、产品与应用等的纵向复合型人才，以及掌握“人工智能+”经济、社会、管理、标准、法律等的横向复合型人才。</p> -->
            </div>
            <div class="studyInfo">
                <div class="main">
                    <h2 class="first">专家组组长</h2>
                    <div class="group clearfix">
                        <img class="fl" src="https://static-image.1911edu.com/smartCollege_teacher.png" alt="">
                        <div class="fr">
                            <h4>孙富春 教授</h4>
                            <p>清华大学计算机科学与技术系教授，博士生导师，IEEE Fellow，国家杰出青年基金获得者。兼任清华大学校学术委员会委员，计算机科学与技术系学术委员会主任，智能技术与系统国家重点实验室常务副主任，清华大学人工智能研究院智能机器人中心主任。 兼任国家重点研发计划机器人总体专家组成员，中国人工智能学会认知系统与信息处理专业委员会主任，中国自动化学会认知计算与系统专业委员会主任，国际刊物《Cognitive Computation and Systems》主编，国际刊物《IEEE
                                Trans. on Fuzzy Systems》，《IEEE Trans. on Systems, Man and Cybernetics: Systems》《Mechatronics》和《International Journal of Control, Automation, and Systems (IJCAS)》副主编或领域主编，国内刊物《中国科学：F辑》和《自动化学报》编委。</p>
                        </div>
                    </div>
                </div>
                <div class="leftBg">
                    <h2 class="margin">面向人群</h2>
                    <div class="object">
                        <p class="one">人工智能产业企业家、管理人员、技术人员</p>
                        <p class="two">教育系统计算机领域管理人员、骨干教师</p>
                        <p class="three">各级各类企业中高层管理人员</p>
                        <p class="four">各地科技等相关部门管理人员</p>
                    </div>

                    <!-- <h2>学习内容</h2>
              <ul class="study">
                <li class="left">
                  <span>1</span>
                  <span>人工智能的发展历史现状和发展趋势</span>
                </li>
                <li class="right">
                  <span>6</span>
                  <span>人工智能AI原理和核心技术解读</span>
                </li>
                <li class="left">
                  <span>2</span>
                  <span>人工智能时代的产业趋势与商业机会</span>
                </li>
                <li class="right">
                  <span>7</span>
                  <span>利用人工智能提升公共安全保障能力</span>
                </li>
                <li class="left">
                  <span>3</span>
                  <span>人工智能在教育中的应用</span>
                </li>
                <li class="right">
                  <span>8</span>
                  <span>人工智能领域军民创新资源共建共享</span>
                </li>
                <li class="left">
                  <span>4</span>
                  <span>利用人工智能技术实现制造业转型升级</span>
                </li>
                <li class="right">
                  <span>9</span>
                  <span>建设安全便捷的智能社会</span>
                </li>
                <li class="left">
                  <span>5</span>
                  <span>大数据下的人工智能</span>
                </li>
                <li class="right">
                  <span>10</span>
                  <span>人工智能对物流、金融、税务等行业的影响和挑战</span>
                </li>
              </ul> -->
                </div>
                <div class="bottomBg">
                    <h2>业务产品</h2>
                    <div class="production">
                        <div class="item" v-for="(item,index) in productList" :key="index">
                            <img :src="item.src" alt="">
                            <p>{{item.text}}</p>
                        </div>
                    </div>
                    <div class="leftBg-text">
                        <p>1911学堂人工智能学院依据各单位提出的具体学习需求，形成定制式、个性化、针对性的人工智能产业单位内训项目。</p>
                    </div>
                    <h2>培养目标</h2>
                    <div class="columns clearfix">
                        <p>1911学堂人工智能学院的培养目标是为大中型企业培养贯通人工智能产业、政策、理论、技术、产品、应用等方面的复合型人才，为高校、职校培养“人工智能+”教育、管理等跨界师资人才。</p>
                        <img src="https://static-image.1911edu.com/smartCollege_icon1.png" alt="">
                    </div>
                    <!-- <div class="harvest">
                <h2>学习收获</h2>
                <p>通过参加1911学堂在线人工智能学院的学习，学习者可以了解人工智能发展趋势与商业机会、提升未来职业发展能力，掌握人工智能AI原理及核心技术，了解人工智能对物流、金融、税务等行业的影响和挑战，加强人工智能基础研究、应用研究、运行维护等方面专业技术，成为贯通人工智能理论、方法、技术、产品与应用等的纵向复合型人才，以及掌握“人工智能+” 经济、社会、管理、标准、法律等的横向复合型人才。</p>
              </div> -->
                </div>
                <div class="teacher">
                    <h2>师资来源</h2>
                    <p class="teacherText">本学院授课师资来自以下及其他相关单位</p>
                    <div class="school">
                        <img v-for="(li,index) in collegeList" :key="index" :src="li" alt="">
                    </div>
                </div>
                <!-- <div class="attestation">

              <h2>考核认证</h2>
              <div class="clearfix">
                <div class="left fl">
                  <span class="circle"></span>
                  <span class="text">学员参加1911学堂人工智能学院在线学院或相关项目学习，考核通过者将获得1911学堂认证证书。</span>
                </div>
                <div class="right fr">
                  <img src="https://static-image.1911edu.com/cadreCollege_icon2.png" alt>
                </div>
              </div>

              <div class="certification">
                <img src="https://static-image.1911edu.com/smartCollege_certificate.png" alt>
              </div>
            </div> -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            collegeList: [
                "https://static-image.1911edu.com/academy_QH.png",
                "https://static-image.1911edu.com/academy_BD.png",
                "https://static-image.1911edu.com/academy_ZKY.png",
                "https://static-image.1911edu.com/academy_RD.png",
                "https://static-image.1911edu.com/academy_BHD.png",
                "https://static-image.1911edu.com/academy_BKD.png",
                "https://static-image.1911edu.com/academy_BJD.png",
                "https://static-image.1911edu.com/academy_BSD.png",
                "https://static-image.1911edu.com/academy_HNLG.png",
                "https://static-image.1911edu.com/academy_NK.png",
                "https://static-image.1911edu.com/academy_TJD.png",
                "https://static-image.1911edu.com/academy_JND.png",
                "https://static-image.1911edu.com/college_XXYJY.png",
                "https://static-image.1911edu.com/college_GYXX.png",

            ],
            productList: [{
                    src: "https://static-image.1911edu.com/cadre-proIcon2.png",
                    text: "精品大师课程"
                },
                {
                    src: "https://static-image.1911edu.com/smart-proIcon1.png",
                    text: "师资培训服务"
                },
                {
                    src: "https://static-image.1911edu.com/cadre-proIcon6.png",
                    text: "名师咨询服务"
                },
                {
                    src: "https://static-image.1911edu.com/cadre-proIcon3.png",
                    text: "定制化教育培训方案"
                },
                {
                    src: "https://static-image.1911edu.com/smart-proIcon2.png",
                    text: "系统性学科建设方案"
                }
            ],
        }
    }
};
</script>

<style scoped lang="scss">
@import "assets/style/college/smartCollege";
</style>