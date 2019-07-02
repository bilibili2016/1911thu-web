<template>
    <div>
        <el-card class="changeNav">
            <div class="top-con clearfix">
                <span>我的收藏</span>
            </div>
            <v-cardtab :data="collectionData" :config="configZero" :pagemsg="pagecltcourse" :noMsg="noMsgFive" @pageChange="collectionPageChange"></v-cardtab>
        </el-card>
    </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import CardTab from '@/pages/profile/components/common/CardTab.vue'
export default {
    props: [
        'collectionData',
        'configZero',
        'noMsgFive',
        'pagecltcourse',
    ],
    components: {
        'v-cardtab': CardTab
    },
    data() {
        return {
        }
    },
    mounted() {
        this.$bus.$on('activeCourse', data => {
            this.activeName = 'first'
        })
    },
    methods: {

        collectionPageChange(val) {
            this.$emit('collectionPageChange', val)
        }
    }
}
</script>

<style scoped>
 .top-con {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #e8d6f7;
    padding-left: 30px;
    font-size: 16px;
    color: #222;
}


</style>
