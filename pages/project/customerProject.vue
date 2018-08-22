<template>
    <div class="customerProject">
        <div class="title">项目信息</div>
        <div class="content">
            <div class="con-item name clearfix">
                <div class="fl">项目名称：</div>
                <div class="fr">
                    <el-input placeholder=""></el-input>
                    <span class="input-inner">不超过30字</span>
                </div>
            </div>
            <div class="con-item desc clearfix">
                <div class="fl">项目简介：</div>
                <div class="fr">
                    <el-input type="textarea" :rows="4" maxlength="500" placeholder=""></el-input>
                </div>
                <span class="input-inner">不超过500字</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {}
</script>

