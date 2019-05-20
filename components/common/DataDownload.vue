<template>
  <div class="dataDownload">
    <!-- 项目下载 -->
    <div class="project" v-if="!isConfig">
      <div class="top clearfix">
        <span class="choose">选择</span>
        <span class="left">全选</span>
        <span class="allDownload">全部下载</span>
      </div>
      <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="资料名称"
        width="350">
      </el-table-column>
      <el-table-column
        prop="course"
        label="所属课程"
        width="350">
      </el-table-column>
      <el-table-column
        prop="num"
        label="下载量"
        width="150">
      </el-table-column>
      <el-table-column
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDownload(scope.$index, scope.row)">下载</el-button>
        </template>
      </el-table-column>
     </el-table>
    </div>
    <!-- 课程下载 -->
    <div class="course"  v-if="isConfig">
      <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="资料名称"
        width="400">
      </el-table-column>
      <el-table-column
        prop="num"
        label="下载量"
        width="200">
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDownload(scope.$index, scope.row)">下载</el-button>
        </template>
      </el-table-column>
     </el-table>
    </div>
  </div>
</template>
<script>
  export default{
    props:['isConfig'],
    data(){
      return{
        tableData3:[{
          name:'《新的中央经济工作会议精神解读》',
          num:100,
          course:'新时代与文化新使命'
        },
        {
          name:'《新的中央经济工作会议精神解读》',
          num:100,
          course:'新时代与文化新使命'
        }]
      }
    },
    methods:{
      handleSelectionChange(val){
        console.log(val);

      },
      handleDownload(){}
    },
    mounted(){
      console.log(this.isConfig);

    }
  }
</script>
<style scoped lang="scss">
@import "~assets/style/components/download";
</style>
