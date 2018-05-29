<template>
    <div class="container">
        <div class="main clearfix">
            <div class="content fl">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="介绍" name="first"></el-tab-pane>
                    <el-tab-pane label="目录" name="second"></el-tab-pane>
                </el-tabs>
                <div class="catalog">
                    <div class="chapter" v-for="(catalog,index) in catalogs" :key="index">
                        <h4>{{catalog.chapterName}}</h4>
                        <div class="bar clearfix" v-for="(bar,index) in catalog.barList" :key="index" @click="checked(index)">
                            <span class="fl playIcon"><i class="el-icon-caret-right"></i></span>
                            <span class="fl barName">{{bar.number}} {{bar.barName}} （{{bar.duration}}）</span>
                            <span class="fl free" v-if="bar.isFree">免费</span>
                            <span class="fr freePlay" v-if="bar.isFree || catalog.isLogin">立即观看</span>
                            <span class="fr freePlay" v-else>购买课程</span>
                            <el-progress v-if="catalog.isLogin == true && bar.isFree == false && bar.percentage>0" class="fr" :text-inside="true" :stroke-width="8" :percentage="bar.percentage" :show-text="false" color="#6417A6"></el-progress>
                        </div>
                    </div>
                </div>
                <div class="attention">
                    <h4>关注我们</h4>
                    <div class="code">
                        <img src="../../../assets/images/attentionWechat.png" alt="">
                        <h5>扫描二维码或关注“1911学堂”微信公众号</h5>
                        <p>精彩好课，第一时间了解</p>
                    </div>

                </div>
            </div>
            <!-- 讲师介绍 -->
            <div class="teacher">
                <h4>导师介绍</h4>
                <div class="personal">
                    <img :src="teacher.headImg" alt="">
                    <h5>{{teacher.teacherName}}</h5>
                    <h6>{{teacher.degree}}</h6>
                    <p>{{teacher.abstract}}</p>
                </div>
            </div>

            <!-- 用户评论 -->
            <div class="evaluate">
                <h4>用户评价 <span>查看更多></span></h4>
                <div class="score">
                    <span class="fl">{{evaluate.score}}</span>
                    <el-rate disabled v-model="evaluate.rate" class="itemBox-rate fl"></el-rate>
                    <span class="fr">{{evaluate.number}}人评价 好评度{{evaluate.praise}}</span>
                </div>
                <div class="commentator clearfix" v-for="(item,index) in commentator" :key="index">
                    <img class="fl" :src="item.headImg" alt="">
                    <div class="fl">
                        <p>{{item.name}}</p>
                        <p>{{item.time}}</p>
                    </div>
                    <el-rate disabled v-model="item.rate" class="itemBox-rate fr"></el-rate>
                    <h5>{{item.content}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            handleClick(){

            },
            checked(index){
                $(".catalog .chapter .bar").removeClass("checked");
                $(".catalog .chapter .bar").eq(index).addClass("checked");
            }
        },
        data(){
            return{
                activeName:'second',
                catalogs:[
                    {
                        isLogin:false,
                        chapterName:"第一章 图的基本概念",
                        barList:[
                            {
                                number:"1-1",
                                barName:"课程概述",
                                duration:"32分钟",
                                percentage:30,
                                isFree:true,
                            },
                            {
                                number:"1-2",
                                barName:"图怎么画",
                                duration:"35分钟",
                                percentage: 10,
                                isFree:false,
                            }
                        ]
                    }
                ],
                teacher:{
                    headImg:require("../../../assets/images/headImg.png"),
                    teacherName:"莎良朋",
                    degree:"华中科技大学博士",
                    abstract:"目前着手于研究人工智能，精通Python编程和机器学习算法，主导过kaiterra全球天气污染智能预测系统的开发与部署，目前在做智能推荐系统的开发应用并且为相关公司提供解决方案。系统的开发应用。"
                },
                evaluate:{
                    score:"9.8",
                    rate:"5",
                    number:"24",
                    praise:"99%",

                },
                commentator:[
                    {
                        headImg:require("../../../assets/images/headImg.png"),
                        name:"小萝卜头",
                        time:"2018-05-30",
                        rate:"3",
                        content:"课程不错，但是视频里说的前面的实战是什么但是视频里说的前面的实战是什么但是视频里说的前面的实战是什么"
                    },{
                        headImg:require("../../../assets/images/headImg.png"),
                        name:"小萝卜头",
                        time:"2018-05-30",
                        rate:"3",
                        content:"课程不错，但是视频里说的前面的实战是什么但是视频里说的前面的实战是什么但是视频里说的前面的实战是什么"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
@import "~assets/style/playDetail";
</style>