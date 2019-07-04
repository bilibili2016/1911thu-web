<template>
    <div class="footerBox" id="footer">
        <div class="main clearfix">
            <p class="footerItem">
                <span @click="handleLink('/other/pages/homeUs')">关于我们</span>
                <span @click="handleLink('/home/citySchool/schoolIntro')">城市分校</span>
                <span @click="handleLink('/other/activePages/Institutional')">单位内训</span>
            </p>
            <p class="one">一九一一未来教育科技（北京）有限公司 版权所有</p>
            <p class="two">京ICP备18040329号&nbsp; | &nbsp;
                <span @click="handleClickA" style="cursor:pointer">京公网安备 11010802028321号</span>&nbsp; | &nbsp;
                <span @click="handleClickB" style="cursor:pointer">广播电视节目制作经营许可证(京)字第11716号</span>&nbsp; | &nbsp;
                <span @click="handleClickC" style="cursor:pointer">增值电信业务经营许可证京B2-20190479</span>
            </p>
            <div class="logo fl">
                <i></i>
            </div>

        </div>
    </div>
</template>

<script>
import { open } from "@/lib/util/helper";
export default {
    methods: {
        handleLink(url) {
            this.$router.push(url);
        },
        handleClickB() {
            window.open("https://static-image.1911edu.com/licence.jpg");
        },
        handleClickA() {
            window.open(
                "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802028321"
            );
        },
        handleClickC() {
            window.open("https://static-image.1911edu.com/qualification.jpg");
        }
    }
};
</script>
