<template>
    <div class="teacher">
        <div class="tcInfo">
            <img :src="teacherBg" alt="">
            <div>
                 <p><img :src="teacher.src" alt=""></p>
                <h4>{{teacher.name}}</h4>
                <h5>{{teacher.position}}</h5>
                <h6>{{teacher.introduce}}</h6>
            </div>
           
        </div>
        <div class="courseList">
            <h3>在教的课程</h3>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                teacherBg:require("~/assets/images/teacher_bg.png"),
                teacher:{
                    src:require("~/assets/images/headImg.png"),
                    name:"扶摇1006",
                    position:"北京分分分形科技有限公司",
                    introduce:"四年互联网大数据研发经验，五年Java EE研发经验。近年来主要从事Hadoop生态圈和Spark生态圈技术的研发和落地。参与过Spark论文的中文翻译工作，且带队完成北京、上海等省份的移动大数据平台。四年互联网大数据研发经验，五年Java EE研发经验。",
                }
            }
        }
    }
</script>

<style scoped>
.teacher{
    background-color: #fafafa;

}
.tcInfo{
    width: 100%;
    height: 458px;
    padding-top: 42px;
    position: relative;
}
.tcInfo > img{
    position: absolute;
    width: 1920px;
    height: 458px;
    left: 50%;
    margin-left: -960px;
    top: 0;
    z-index: 1;
}
.tcInfo div{
    z-index: 2;
    position: absolute;
    left: 50%;
    width: 1100px;
    margin-left: -550px;
}
.tcInfo p{
    width: 110px;
    height: 110px;
    margin: 0 auto;
    border-radius: 50%;
    text-align: center;
    background-color: #BA94EA;
}
.tcInfo p img{
    display: inline-block;
    width: 100px;
    height: 100px;
    margin-top: 5px;
}
.tcInfo h4{
    height: 80px;
    line-height: 80px;
    color: #fff;
    text-align: center;
}
.tcInfo h5{
    font-size: 16px;
    color: #fff;
    text-align: center;
}
.tcInfo h6{
    width: 660px;
    height: 75px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 40px;
    line-height: 25px;
    color: #fff;
}
.courseList h3{
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 36px;
    color: #222;
}
</style>