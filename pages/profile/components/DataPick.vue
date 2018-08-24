<template>
  <div>
    <div class="block">
      <div class="demonstration fl" style="margin:12px 2px 0px 0px;">根据成交时间搜索: </div>
      <div class="fl">
        <el-date-picker v-model="searchDatas" type="daterange" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div class="search">
        <el-button round @click="detection" style="margin-left:10px;">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    searchDatas(data) {
      if (data) {
        this.searchDatas = data
      } else {
        this.searchDatas = ['', '']
      }
    }
  },
  props: ['orderNum'],
  data() {
    return {
      searchDatas: ['', ''],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  methods: {
    detection() {
      this.$bus.$emit('searchDatas', this.searchDatas, this.orderNum)
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
</style>
