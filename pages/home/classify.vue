<template>
    <div class="classification">
        <div class="clsTitle clearfix">
            <div class="fl">
                <span :class="{checked:checked}">最新</span>
                <span>最热</span>
            </div>
            <div class="fr">
                <el-switch class="fl"
                    v-model="onOff"
                    active-color="#8F4ACB"
                    inactive-color="#999">
                </el-switch>隐藏已参加课程
                <el-pagination class="fr"
                    small 
                    layout="pager, prev, next"
                    :total="20">
                </el-pagination>
            </div>
        </div>
        <div class="classList">
            <ul>
                <li v-for="(item,index) in classList" :key="index" @click="bind(index)">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            bind(index){
                $(".classList ul li").removeClass("checked");
                $(".classList ul li").eq(index).addClass("checked");
            }
        },
        data() {
            return {
                checked:true,
                onOff: true,
                classList:["干部通用","党政系统学院","在线商学院","行业学院","职场学院","热点学院"]
            }
        }
    }
</script>

<style scoped lang="scss">
@import "~assets/style/config";
@import "~assets/style/classify";
</style>