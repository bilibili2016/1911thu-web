<template>
  <div>
    <div class="block">
      <div class="demonstration fl" style="margin:12px 2px 0px 0px;">根据成交日期搜索: </div>
      <div class="fl">
        <el-date-picker v-model="startDay" type="date" value-format="timestamp" placeholder="选择开始日期">
        </el-date-picker>
        <span class="dataPickSpan">至</span>
        <el-date-picker v-model="endDay" type="date" value-format="timestamp" placeholder="选择结束日期">
        </el-date-picker>

      </div>
      <div class="search">
        <el-button round @click="detection" style="margin-left:10px;">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { message, open } from '@/lib/util/helper'
import { timestampToYMD } from '@/lib/util/helper'

export default {
  props: ['orderNum'],
  data() {
    return {
      startDay: '',
      endDay: '',
      searchDatas: [],
      searchType: 1
    }
  },
  methods: {
    detection() {
      this.searchDatas = []
      if (this.endDay < this.startDay) {
        message(this, 'error', '结束日期不能小于开始日期!')
        return false
      }
      this.searchDatas.push(timestampToYMD(this.startDay))
      this.searchDatas.push(timestampToYMD(this.endDay))
      this.$bus.$emit(
        'searchDatas',
        this.searchDatas,
        this.searchType,
        this.orderNum
      )
    }
  },
  mounted() {}
}
</script>

<style scoped>
.block {
  padding: 25px 0px 25px 0px;
  font-size: 16px;
}
.demonstration {
  padding-right: 30px;
  display: inline-block;
  font-size: 16px;
  margin: 12px 15px 0px 0px;
}
.search {
  margin-left: 10px;
}
.dataPickSpan {
  margin: 0 20px;
}
</style>
