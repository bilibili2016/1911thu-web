// 推荐项目详情
<template>
    <div class="RProjectDetail">
        <div class="top">
            <!-- 面包屑 -->
            <div class="breadCrumb">
                <span>当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
                    <el-breadcrumb-item :to="{ path: '/' }">商学院</el-breadcrumb-item>
                    <el-breadcrumb-item>项目详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="topCon clearfix">
                <div class="left">
                    <img src="" alt="">
                </div>
                <div class="right">
                    <div class="RP-title"> <img src="https://static-image.1911edu.com/project-icon.png" alt="" class="tag">线上精品大师课</div>
                    <div class="desc">eruwhiur</div>
                    <div class="num"><span class="num-left">包含：</span>33门课程</div>
                    <div class="price"><span class="text">项目价格：</span><span class="pri-num">¥1280.00</span><span class="ori">原价：¥1980.00</span></div>
                </div>
            </div>
        </div>
        <div class="bottom clearfix">
            <div class="left">
                <el-tabs v-model="activeName" class="proTab">
                    <el-tab-pane label="项目简介" name="first">
                        <div>wwww</div>
                    </el-tab-pane>
                    <el-tab-pane label="课程列表" name="second">
                        <div class="left-list">
                            <div class="item clearfix">
                                <div class="itemLeft">
                                    <img src="" alt="">
                                </div>
                                <div class="itemRight">
                                    <p class="right-title">到陈旭</p>
                                    <p class="desc">dbjefer</p>
                                    <p class="time"><span>52课时</span><span class="people">1021</span></p>
                                    <p class="rate">
                                        <el-rate disabled v-model="score"></el-rate>
                                    </p>
                                    <p class="price">¥2000.00</p>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="right">
                <div class="rightText">授课导师</div>
                <div class="right-teachers">
                    <div class="item clearfix">
                        <div class="left"><img src="" alt=""></div>
                        <div class="right">
                            <div class="name">sss</div>
                            <div class="desc"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: "first",
            score: 4
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/style/recommendProject/detail";
</style>
