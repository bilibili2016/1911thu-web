<template>
    <div class="main">
        <div class="content fl">

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
</template>

<script>
    export default {
        data(){
            return{
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
@import "~assets/style/config";
@import "~assets/style/playDetail";
</style>