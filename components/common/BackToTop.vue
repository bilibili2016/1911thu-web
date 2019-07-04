<template>
    <div class="infoItem">
        <div class="rightBack" v-if="visible">
            <div class="backItem online" @click="handleopen">
                <img src="https://static-image.1911edu.com/index-lineIcon.png" alt="">
                <p>在线咨询</p>
                <div class="onlineShow">
                    <!-- <p>点击咨询在线qq</p> -->
                    <p>在线咨询</p>
                </div>
            </div>
            <div class="backItem wechat">
                <img src="https://static-image.1911edu.com/index-wechatIcon.png" alt="">
                <p>微信咨询</p>
                <div class="wechatShow">
                    <img src="https://static-image.1911edu.com/attentionWechat2.png" alt="">
                    <h4>1911学堂官方微信</h4>
                    <p>公众号：XUETANG_1911</p>
                </div>
            </div>
            <div class="backItem tel">
                <img src="https://static-image.1911edu.com/index-telIcon.png" alt="">
                <p>电话咨询</p>
                <div class="telShow">
                    <p>客服热线：010-62701911-628，</p>
                    <p>工作时间：工作日 9:00-18:00。</p>
                </div>
            </div>
            <div class="backItem arrow" @click="backToTop">
                <img :src="topSrc" alt="">
            </div>
        </div>
        <!-- 客服 -->
        <el-dialog class="chatDialog" title :visible.sync="dialogVisible" top="20px">
            <div>
                <iframe id="service" name="myframe" :src="completeTask" height="620" width="100%"></iframe>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { mapActions, mapGetters } from "vuex";
import { open } from "@/lib/util/helper";
/* eslint-disable */
export default {
    props: [
        "data"
    ],
    data() {
        return {
            dialogVisible: false,
            visibilityHeight: 400,
            backPosition: 0,
            transitionName: "fade",
            showNotLogin: false,
            visible: false,
            move: true,
            interval: null,
            ceilSrc: "https://static-image.1911edu.com/home_backtop11.png",
            wxSrc: "https://static-image.1911edu.com/home_backtop22.png",
            qqSrc: "https://static-image.1911edu.com/home_backtop22.png",
            topSrc: "https://static-image.1911edu.com/home_backtop03.png",
            completeTask: "https://cschat-ccs.aliyun.com/index.htm?tntInstId=_12Acz7A&scene=SCE00003072"
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
        if (this.interval) {
            clearInterval(this.interval);
        }
    },
    computed: {
        ...mapGetters("auth", ["isAuthenticated"])
    },
    methods: {
        handleScroll() {
            this.visible = window.pageYOffset > this.visibilityHeight;
            // this.visible = true
        },
        showTips(show) {
            this.showNotLogin = show;
        },
        //跳转到自定制项目
        goCustomerProject() {
            if (persistStore.get("token")) {
                this.$router.push({
                    path: "/project/customerProject",
                    query: {
                        sid: "",
                        edit: 1
                    }
                });
            } else {
                this.$bus.$emit("loginShow");
            }
        },
        // 我要选课
        checkCourse() {
            if (persistStore.get("token")) {
                // this.goLink('/course/chooselesson')
                // 整合后的跳转

                window.open(
                    window.location.origin +
                    "/course/category" +
                    "?cid=" +
                    "0" +
                    "&cp=" +
                    "0" +
                    "&xid=1" +
                    "&pids=" +
                    "0"
                );
                // this.showNotLogin = false
            } else {
                // this.showNotLogin = true
                this.$bus.$emit("loginShow");
            }
        },
        backToTop() {
            if (this.move) {
                const start = window.pageYOffset;
                let i = 0;
                this.interval = setInterval(() => {
                    const next = Math.floor(
                        this.easeInOutQuad(10 * i, start, -start, 500)
                    );
                    if (next <= this.backPosition) {
                        window.scrollTo(0, this.backPosition);
                        clearInterval(this.interval);
                        this.move = true;
                    } else {
                        this.move = false;
                        window.scrollTo(0, next);
                    }
                    i++;
                }, 16.7);
            }
        },
        goLink(item) {
            this.$router.push(item);
        },
        easeInOutQuad(t, b, c, d) {
            if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
            return (-c / 2) * (--t * (t - 2) - 1) + b;
        },
        handleopen() {
            // window.open('http://wpa.qq.com/msgrd?v=3&uin=2844916043&site=qq&menu=yes')
            // window.open(
            //   'https://cschat-ccs.aliyun.com/index.htm?tntInstId=_12Acz7A&scene=SCE00003068#/'
            // )
            this.dialogVisible = true;
        }
    }
};
</script>

