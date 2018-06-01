
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
                <!-- <el-pagination class="fr"
                    small
                    layout="pager, prev, next"
                    :total="20">
                </el-pagination> -->
            </div>

        </div>
  </div>
</template>

<script>
import CustomPagination from "@/components/common/Pagination.vue";
  export default {
    methods: {
      bind(index) {
        $(".classList ul li").removeClass("checked");
        $(".classList ul li")
          .eq(index)
          .addClass("checked");
      }
    },
    data() {
      return {
        checked: true,
        onOff: true,
        pagemsg: {
          page: 1,
          pagesize: 8,
          total: 12
        }
      }
    },
    components: {
      "v-page": CustomPagination,
    },
  }
</script>

<style scoped lang="scss">
@import "~assets/style/config";
// @import "~assets/style/classify";
</style>
