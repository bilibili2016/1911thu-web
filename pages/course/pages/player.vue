<template>
    <div class="playerBox clearfix">
        <div class="mediaL fl">
            <div class="playTop">
                <i>＜</i>新的中央经济工作会议精神解读
            </div>
            <div class="playInner">
                <video src=""></video>
            </div>
            <div class="playBottom clearfix">
                <span class="fl usePhone">手机观看
                    <div class="ewCode">
                        <img src="../../../assets/images/attentionWechat2.png" alt="">
                        <i></i>
                    </div>
                </span>
                <span class="fl problem" @click="showRpt">报告问题</span>
                <span class="fr share">
                    <i class="el-icon-share"></i>分享
                </span>
                <span class="fr collection">
                    <i class="el-icon-star-on"></i>收藏
                </span>
                <span class="fr elt" @click="showElt">
                    <i class="el-icon-edit"></i>课程评价 
                </span>
            </div>
        </div>
        <div class="mediaR fr" :style="{ width: mediaRW+'px' }">
            <div v-show="mediaRInner" class="inner">
                <h5 class="title">{{player.courseName}}</h5>
                <div class="teacher clearfix">
                    <img class="fl" src="../../../assets/images/headImg.png" alt="">
                    <p class="fl">{{player.teacher.name}}</p>
                    <p class="fl">{{player.teacher.school}}</p>
                </div>
                <div class="courseList" v-for="(section,index) in player.courseList" :key="index">
                    <h4>{{section.section}}</h4>
                    <div class="knobble clearfix" v-for="(bar,index) in section.knobbles" :key="index">
                        <span class="fl playIcon"><i class="el-icon-caret-right"></i></span>
                        <span class="fl barName">{{bar.number}} {{bar.barName}}（{{bar.duration}})</span>
                    </div>
                </div>
            </div>
            <div class="fold" @click="fold">
                <i :class="mediaRIcon"></i>
            </div>
        </div>

        <div class="reportBug" v-show="showReportBug">
            <div class="note">
                <h4>报告问题 <img @click="closeReport" class="fr" src="../../../assets/images/close.png" alt=""></h4>
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请详细描述您遇到的问题"
                    v-model="problem">
                </el-input>
                <div class="commitBug"><el-button round>提交</el-button></div>
            </div>
        </div>
        <div class="evaluate" v-show="showEvaluate">
            <div class="note">
                <h4>课程评价 <img @click="closeEvaluate" class="fr" src="../../../assets/images/close.png" alt=""></h4>
                <h5>请问该课程对您有帮忙吗？快来评个分吧！</h5>
                <h6>课程评分：<el-rate v-model="evaluate.eltnum"></el-rate></h6>
                <div class="btnList">
                    <el-button v-for="(btn,index) in evaluate.btnList" :key="index" plain>{{btn}}</el-button>
                </div>
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请详细描述您遇到的问题"
                    v-model="problem">
                </el-input>
                <div class="commitBug"><el-button round>提交</el-button></div>
            </div>
            
        </div>
    </div>

</template>

<script>
    export default {
        mounted: function () {
            this.resize();
            // window.addEventListener("onload",this.resize);
            window.addEventListener("resize",this.resize);
        },
        methods:{
            showRpt(){
                this.showReportBug = true;
            },
            showElt(){
                this.showEvaluate = true;
            },
            closeReport(){
                this.showReportBug = false;
            },
            closeEvaluate(){
                this.showEvaluate = false;
            },
            resize(){
                const w=window.screen.width;
                const h=window.screen.availHeight;
                let mediaRW= $(".mediaR").width();
                $(".mediaL").width(w-mediaRW);
                $(".mediaL,.mediaR").height(h);
                $(".mediaL .playInner").height(h-100);
            },
            fold(){
                if($(".mediaR").width() != 0){
                    this.mediaRW = 0;
                    this.mediaRInner = false;
                    this.mediaRIcon = "el-icon-arrow-left";
                }else{
                    this.mediaRW = 340;
                    this.mediaRInner = true;
                    this.mediaRIcon = "el-icon-arrow-right";
                }
                this.resize();
            }
        },
        data(){
            return {
                showReportBug:false,
                showEvaluate:false,
                mediaRW:340,
                mediaRInner: true,
                mediaRIcon:"el-icon-arrow-right",
                player:{
                    courseName:"新的中央经济工作会议精神解读2018年经济工作思路年",
                    video:"",
                    ewCode:require("../../../assets/images/attentionWechat2.png"),
                    teacher:{
                        name:"莎良朋",
                        school:"华中科技大学博士"
                    },
                    courseList:[
                        {
                            section:"第一章 图的基本概念",
                            knobbles:[
                                {
                                    number:"1-1",
                                    barName:"课程概述",
                                    duration:"32分钟",
                                    percentage:30,
                                    isFree:true,
                                },
                                {
                                    number:"1-1",
                                    barName:"课程概述",
                                    duration:"32分钟",
                                    percentage:30,
                                    isFree:true,
                                },
                                
                            ]
                        }
                    ]

                },
                problem:"",
                evaluate:{
                    eltnum:"5",
                    btnList:["内容精彩","内容生涩","音质不好","讲解详细","很有帮助","点赞老师"]
                }
            }
        }
    }
</script>

<style scoped lang="scss">
@import "~assets/style/player";
</style>