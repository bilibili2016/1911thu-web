<template>
    <div class="homeUs">
        <!-- <div class="about-title">
            <h1 class="about-h1">关于我们</h1>
            <p class="about-p">ABOUT US</p>
        </div>
        <div class="about-con">
            <div class="con-img">
                <img src="@/assets/images/home-img.png" alt="">
            </div>
            <div class="con-text">
                <p class="con-top">
                    1911学堂是由1911集团与清华大学共同发起的在线继续教育平台。平台通过整合清华大学及国内外著名高校优质的教育资源，集合国内一线互联网团队，将继续教育与互联网完美结合，以国家经济建设和社会发展需求为导向，形成系统性、针对性、前瞻性、科学性、实用性的继续教育培养服务体系，以线上线下相结合的模式，为党政机关、企事业单位干部提供终身教育解决方案，最终建设一所面向未来的终身学堂。
                </p>
                <span class="con-line"></span>
                <p class="con-bottom">
                    <span class="con-weight">使命：</span>
                    提供与时俱进的终身教育解决方案，用更好的教育普惠大众。

                </p>
                <p class="con-bottom">
                    <span class="con-weight">愿景：</span>
                    成为卓越的终身教育提供者。
                </p>
            </div>
        </div>
        <div class="about-line"></div>
        <div class="about-title">
            <h1 class="about-h1" style="margin-top:0">联系我们</h1>
            <p class="about-p">CONTACT US</p>
        </div>
        <div class="about-contact clearfix">
            <div class="contact-imgs">
                <div class="contact-index contact-phone">
                    <img src="@/assets/images/contact-phone.png" alt="">
                </div>
                <p class="contact-text">电话</p>
                <p class="contact-con">010-6270 1911</p>
            </div>
            <div class="contact-line"></div>
            <div class="contact-imgs">
                <div class="contact-index contact-email" style="align:center">
                    <img src="@/assets/images/contact-email.png" alt="">
                </div>
                <p class="contact-text">邮箱</p>
                <p class="contact-con">info@1911thu.com</p>
            </div>
            <div class="contact-line"></div>
            <div class="contact-imgs">
                <div class="contact-index contact-pos">
                    <img src="@/assets/images/contact-pos.png" alt="">
                </div>
                <p class="contact-text">地址</p>
                <p class="contact-con">北京市海淀区双清路77号院</p>
            </div>
        </div> -->
        <div class="topImg">
            <div class="top-content">
                <span class="top-con">关于我们</span>
                <span class="top-desc">About us</span>
            </div>
        </div>
        <!-- <div class="left"></div> -->
        <div class="content">
            <el-tabs type="card" tab-position="left">
                <el-tab-pane label="集团介绍">
                    <span slot="label" class="tabList">
                        <i class="item-icon icon-intro"></i>集团介绍</span>
                    <el-card class="card-style" ref="contentHeight">
                        <div class="company-intro">
                            <div class="company-info">
                                <h1>集团介绍</h1>
                                <p class="info">1911学堂是由1911集团与清华大学共同发起的在线继续教育平台。平台通过整合清华大学及国内外著名高校优质的教育资源，集合国内一线互联网团队，将继续教育与互联网完美结合，以国家经济建设和社会发展需求为导向，形成系统性、针对性、前瞻性、科学性、实用性的继续教育培养服务体系，以线上线下相结合的模式，为党政机关、企事业单位干部提供终身教育解决方案，最终建设一所面向未来的终身学堂。
                                </p>
                                <p class="info-detail">
                                    <span>使命: </span>提供与时俱进的终身教育解决方案，用更好的教育普惠大众。

                                </p>
                                <p class="info-detail">
                                    <span>愿景: </span>成为卓越的终身教育提供者。
                                </p>
                            </div>
                            <div class="company-img">
                                <div class="img-line"></div>
                                <div class="img-bg">
                                    <img src="@/assets/images/homeUs-pic2.png" alt="">
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="讲师招聘">
                    <span slot="label" class="tabList">
                        <i class="item-icon icon-teacher"></i>讲师招聘</span>
                    <el-card class="card-style">
                        <div class="teacher">
                            <h1>讲师招聘</h1>
                            <div class="teacher-info">
                                <p class="title">想试水尝尝网络讲师的滋味？快加入1911学堂讲师队伍吧！</p>
                                <div>
                                    <p class="title-small">我们希望你：</p>
                                    <p class="title-desc">

                                        - 热衷分享；<br /> - 有3年以上的大型项目开发经验；<br /> - 至少精通前端开发技术、JAVA、Python、大数据开发、go语言开发、移动端开发，软件测试、UI设计中的一项；

                                    </p>
                                </div>
                                <div>
                                    <p class="title-small">你的收获：</p>
                                    <p class="title-desc">
                                        - 额外收入；<br /> - 技术的沉淀与分享；<br /> - 迅速增长的粉丝及业内知名度；

                                    </p>
                                </div>
                                <div class="join">立即加入</div>
                            </div>
                        </div>
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="人才招聘">
                    <span slot="label" class="tabList">
                        <i class="item-icon icon-people"></i>人才招聘</span>
                    <el-card class="card-style">
                        <div class="people">
                            <h1>人才招聘</h1>
                            <div class="people-con">
                                <p class="desc-one">一支活力的团队，桀骜不驯，不安于现状。如果你也一样，欢迎加入我们！</p>
                                <p class="desc-two">优秀人才推荐：hr@1911thu.com</p>
                                <el-tabs type="border-card">
                                    <el-tab-pane label="教学教研部">
                                        <p class="desc-three">教学教研部</p>
                                        <p class="desc-four">Python讲师 （成都，1人）</p>
                                        <p class="desc-five">职位描述：<br/> 1、研发python课程内容及课件；
                                            <br/> 2、在线讲授python课程；
                                            <br/> 3、指导并带领学员进行项目实践。
                                            <br/> 岗位要求：
                                            <br/> 1、大专或以上学历，计算机相关专业；
                                            <br/> 2、有linux系统集群架构经验者优先；
                                            <br/> 3、有3年以上开发经验，1年以上编程经验；
                                            <br/>4、欢迎经验丰富的工程师，并有意愿往在线教育育人方向发展的人才加入。

                                        </p>
                                    </el-tab-pane>
                                    <el-tab-pane label="产品研发部">
                                        <p class="desc-three">产品研发部</p>
                                        <p class="desc-four">Python讲师 （成都，1人）</p>
                                        <p class="desc-five">职位描述：<br/> 1、研发python课程内容及课件；
                                            <br/> 2、在线讲授python课程；
                                            <br/> 3、指导并带领学员进行项目实践。
                                            <br/> 岗位要求：
                                            <br/> 1、大专或以上学历，计算机相关专业；
                                            <br/> 2、有linux系统集群架构经验者优先；
                                            <br/> 3、有3年以上开发经验，1年以上编程经验；
                                            <br/>4、欢迎经验丰富的工程师，并有意愿往在线教育育人方向发展的人才加入。

                                        </p>
                                    </el-tab-pane>
                                    <el-tab-pane label="市场运营部">
                                        <p class="desc-three">市场运营部</p>
                                        <p class="desc-four">Python讲师 （成都，1人）</p>
                                        <p class="desc-five">职位描述：<br/> 1、研发python课程内容及课件；
                                            <br/> 2、在线讲授python课程；
                                            <br/> 3、指导并带领学员进行项目实践。
                                            <br/> 岗位要求：
                                            <br/> 1、大专或以上学历，计算机相关专业；
                                            <br/> 2、有linux系统集群架构经验者优先；
                                            <br/> 3、有3年以上开发经验，1年以上编程经验；
                                            <br/>4、欢迎经验丰富的工程师，并有意愿往在线教育育人方向发展的人才加入。

                                        </p>
                                    </el-tab-pane>

                                </el-tabs>
                                <!-- <div class="btn">
                                    <span>教学教研部</span>
                                    <span>产品研发部</span>
                                    <span>市场运营部</span>
                                </div>
                                <p class="desc-three">教学教研部</p>
                                <p class="desc-four">Python讲师 （成都，1人）</p>
                                <p class="desc-five">职位描述：<br/> 1、研发python课程内容及课件；
                                    <br/> 2、在线讲授python课程；
                                    <br/> 3、指导并带领学员进行项目实践。
                                    <br/> 岗位要求：
                                    <br/> 1、大专或以上学历，计算机相关专业；
                                    <br/> 2、有linux系统集群架构经验者优先；
                                    <br/> 3、有3年以上开发经验，1年以上编程经验；
                                    <br/>4、欢迎经验丰富的工程师，并有意愿往在线教育育人方向发展的人才加入。

                                </p> -->
                            </div>
                        </div>
                    </el-card>

                </el-tab-pane>
                <el-tab-pane label="帮助中心">
                    <span slot="label" class="tabList">
                        <i class="item-icon icon-help"></i>帮助中心</span>
                    <el-card class="card-style">
                        <div class="help">
                            <h1>帮助中心</h1>
                            <div class="help-con clearfix">
                                <div class="help-left">
                                    <p class="title">热门问题</p>
                                    <p>1.红包提现方法及注意事项<br /> 2.成为会员的方法
                                        <br /> 3.帐号找回申诉信息被驳回的原因
                                        <br /> 4.会员成长值介绍
                                        <br /> 5.登录密码重置方法
                                        <br />
                                    </p>
                                    <p class="learn-more">了解更多>></p>
                                </div>
                                <div class="help-right">
                                    <p class="title">最新问题</p>
                                    <p>1.盗号保护的解除方法<br /> 2.未开启登录保护需要短信验证的操作方法
                                        <br /> 3.帐号找回申诉信息被驳回的原因
                                        <br /> 4.提高帐号安全等级的方法
                                        <br /> 5.发起群招募的方法
                                        <br /> 6.添加自定义表情的方法
                                        <br /> 7.登录陌陌网页版的方法
                                        <br />
                                    </p>
                                    <p class="learn-more">了解更多>></p>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="联系我们">
                    <span slot="label" class="tabList">
                        <i class="item-icon icon-contact"></i>联系我们</span>
                    <el-card class="card-style">
                        <div class="contact">
                            <h1>联系我们</h1>
                            <div class="contact-con">
                                <div class="con-img">
                                    <img src="@/assets/images/homeUs-pic3.png" alt="">
                                </div>
                                <div class="con-line">
                                    <span class="line"></span>
                                    <span class="circle"></span>
                                    <span class="line"></span>
                                </div>
                                <div class="bottom clearfix">
                                    <div class="bottom-item">
                                        <div class="item">
                                            <img src="@/assets/images/homeUs-pic5.png" alt="">
                                            <p class="item-title">电话</p>
                                            <p>010-6270 1911</p>
                                        </div>

                                    </div>
                                    <div class="bottom-item">
                                        <div class="item item1">
                                            <img src="@/assets/images/homeUs-pic6.png" alt="">
                                            <p class="item-title">邮箱</p>
                                            <p>info@1911thu.com</p>
                                        </div>

                                    </div>
                                    <div class="bottom-item">
                                        <div class="item item2">
                                            <img src="@/assets/images/homeUs-pic4.png" alt="">
                                            <p class="item-title">地址</p>
                                            <p>北京市海淀区双清路77号院</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      divHeight: ''
    }
  },
  methods: {
    // navClick(index) {}
  },
  mounted() {}
}
</script>

<style scoped>
</style>