<template>
    <div class="search">
        <div class="main">
            <div class="searchWord">
                <el-autocomplete
                    class="inline-input"
                    v-model="search"
                    :fetch-suggestions="querySearch"
                    placeholder="领导干部法治思维"
                    :trigger-on-focus="false"
                    @select="handleSelect"
                ></el-autocomplete>
                <!-- <input type="text" placeholder="领导干部法治思维"> -->
                <img src="../../assets/images/search.png" alt="">
            </div>
            <div class="hotWord">
                <span>热搜关键词：</span>
                <span>电子政务</span>
                <span>学术管理</span>
                <span>学位</span>
                <span>HR</span>
                <span>历史</span>
                <span>人事管理</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            },
        },
        data(){
            return {
                search:''
            }
        }
    }
</script>

<style scoped lang="scss">
@import "~assets/style/config";
@import "~assets/style/search";
</style>