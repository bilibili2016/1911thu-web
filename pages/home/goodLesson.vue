<template>
    <div class="goodLesson">
        <div class="topImg">
            <img :src="atopImg" alt="">
        </div>
        <div class="courseList">
            <div class="course clearfix" v-for="(course,index) in courseList" :key="index">
                <el-card class="fl" :body-style="{ padding: '0px' }">
                    <img :src="course.bgImg" class="image">
                    <div class="personInfo clearfix">
                        <img :src="course.headImg" alt="">
                        <h5>{{course.grade}}：{{course.teacher}}</h5>
                        <p>{{course.school}}</p>
                    </div>
                </el-card>
                <div class="particulars fr">
                    <div class="currentclum"><h4>{{course.title}}</h4><p>{{course.synopsis}}</p></div>
                    <div class="comment">
                        <h5>
                            <span>{{course.observer}}的评论</span>
                            <el-rate disabled v-model="course.rate" class="itemBox-rate"></el-rate>
                        </h5>
                        <p>{{course.comment}}</p>
                    </div>
                    <div class="study clearfix">
                        <span class="fl"><img src="../../assets/images/ren.png" alt=""> {{course.styduNumber}}人加入学习</span>
                        <span class="fr">立即学习</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="more" v-if="courseList.length>5"><span>更多新上好课</span></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                atopImg: require("@/assets/images/banner2.png"),
                courseList:[
                    {
                        bgImg:require("@/assets/images/ke-1.png"),
                        headImg:require("@/assets/images/headImg.png"),
                        grade:'特约讲师',//级别：特约讲师，金牌讲师
                        teacher:'莎良朋',
                        school:'华中科技大学博士',
                        title:'新的中央经济工作会议精神解读——2018年经济工作思路和重点',
                        synopsis:'日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。',
                        observer:'李大民',
                        rate:'5',
                        comment:'啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。',
                        styduNumber:'234',
                    },
                    {
                        bgImg:require("@/assets/images/ke-1.png"),
                        headImg:require("@/assets/images/headImg.png"),
                        grade:'特约讲师',//级别：特约讲师，金牌讲师
                        teacher:'莎良朋',
                        school:'华中科技大学博士',
                        title:'新的中央经济工作会议精神解读——2018年经济工作思路和重点',
                        synopsis:'日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。',
                        observer:'李大民',
                        rate:'4',
                        comment:'啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。',
                        styduNumber:'234',
                    },
                    {
                        bgImg:require("@/assets/images/ke-1.png"),
                        headImg:require("@/assets/images/headImg.png"),
                        grade:'特约讲师',//级别：特约讲师，金牌讲师
                        teacher:'莎良朋',
                        school:'华中科技大学博士',
                        title:'新的中央经济工作会议精神解读——2018年经济工作思路和重点',
                        synopsis:'日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。',
                        observer:'李大民',
                        rate:'3',
                        comment:'啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。',
                        styduNumber:'234',
                    },
                    {
                        bgImg:require("@/assets/images/ke-1.png"),
                        headImg:require("@/assets/images/headImg.png"),
                        grade:'特约讲师',//级别：特约讲师，金牌讲师
                        teacher:'莎良朋',
                        school:'华中科技大学博士',
                        title:'新的中央经济工作会议精神解读——2018年经济工作思路和重点',
                        synopsis:'日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。',
                        observer:'李大民',
                        rate:'3',
                        comment:'啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。',
                        styduNumber:'234',
                    }
                ]
            }
        }
    }
</script>
<style scoped lang="scss">
@import "~assets/style/config";
@import "~assets/style/goodLesson";
</style>