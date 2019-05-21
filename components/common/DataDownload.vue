<template>
  <div class="dataDownload">
    <!-- <a href="https://view.officeapps.live.com/op/view.aspx?src=https://h5-image.1911edu.com/20180720-1911%E5%AD%A6%E5%A0%82%E5%85%9A%E6%94%BF%E5%B9%B2%E9%83%A8%E7%BB%BC%E5%90%88%E8%83%BD%E5%8A%9B%E6%8F%90%E5%8D%87%E5%9C%A8%E7%BA%BF%E9%AB%98%E7%BA%A7%E7%A0%94%E4%BF%AE%E7%8F%AD.docx" target="_blank" rel="nofollow">XDOC</a> -->
    <!-- 项目下载 -->
    <div class="project" v-if="!isConfig">
      <div class="top clearfix">
        <span class="choose">选择</span>
        <span class="left">全选</span>
        <span class="allDownload" @click="downloadMore">全部下载</span>
      </div>
      <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="100">
      </el-table-column>
      <el-table-column
        prop="file_name"
        label="资料名称"
        width="350">
      </el-table-column>
      <el-table-column
        prop="curriculum_title"
        label="所属课程"
        width="350">
      </el-table-column>
      <el-table-column
        prop="download_number"
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
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @cell-click="viewWord">
      <el-table-column
        prop="file_name"
        label="资料名称"
        width="400">
      </el-table-column>
      <el-table-column
        prop="download_number"
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
    <div class="pagination" v-if="tableData && Pagemsg.total>9">
      <el-pagination background layout="prev, pager, next" :page-size="Pagemsg.pagesize" :pager-count="5" :page-count="Pagemsg.pagesize" :current-page="Pagemsg.page" :total="Pagemsg.total" @current-change="PagemsgChange"></el-pagination>
    </div>
  </div>
</template>
<script>
import { coursedetail } from "~/lib/v1_sdk/index";
import { matchSplits } from "@/lib/util/helper";

  export default{
    props:['isConfig','detailInfo'],
    data(){
      return{
        tableData:null,
        Pagemsg: {
          page: 1,
          pagesize: 9,
          total: ''
        },
        downloadForm:{
          id:'',
          type:1,
          page:1,
          limit:9
        },
        fileForm:{id:[]},
        downloadMoreFile:[],
        downloadUrl:[]
      }
    },
    methods:{
      //多选
      handleSelectionChange(val){
        this.downloadMoreFile = val
        console.log(this.downloadMoreFile);
      },
      handleBatchDownload() {
        const data = ['各类地址1', '各类地址2'] // 需要下载打包的路径, 可以是本地相对路径, 也可以是跨域的全路径
        const zip = new JSZip()
        const cache = {}
        const promises = []
        data.forEach(item => {
        const promise = getFile(item).then(data => { // 下载文件, 并存成ArrayBuffer对象
        const arr_name = item.split("/")
        const file_name = arr_name[arr_name.length - 1] // 获取文件名
        zip.file(file_name, data, { binary: true }) // 逐个添加文件
        cache[file_name] = data
        })
        promises.push(promise)
        })
        Promise.all(promises).then(() => {
        zip.generateAsync({type:"blob"}).then(content => { // 生成二进制流
        FileSaver.saveAs(content, "打包下载.zip") // 利用file-saver保存文件
        })
        })
      },
      //下载多个文件
      downloadMore(){
        this.downloadMoreFile.forEach(file => {
          this.downloadUrl.push(file.file_url)
        });
        console.log( this.downloadUrl,'downloadUrl');
        // for(var i =0;i<this.downloadMoreFile.length;i++){  //循环遍历调用downloadFile方法
        //     const url = this.downloadMoreFile[i];
        //      this.downloadFile(url);
        // }
      },
      //下载文件
      handleDownload(index,row){
        this.fileForm.id.push(row.id)
        // console.log(row);
        coursedetail.resourceDownloadNum(this.fileForm).then(res => {
          if (res.status === 0) {
            // this.tableData = res.data.curriculumResourceList
             window.location.href = row.file_url
             this.courseDownloadList()
          }
        });
      },
      //预览文件
      viewWord(row, column, cell, event){
        if(column.property=="file_name"){
          window.open('https://view.officeapps.live.com/op/view.aspx?src='+row.file_url)
        }
      },
      // 课程下载列表
      courseDownloadList(){
        coursedetail.curriculumResourceList(this.downloadForm).then(res => {
          if (res.status === 0) {
            this.tableData = res.data.curriculumResourceList
            this.Pagemsg.total = res.data.pageCount
          }
        });
      },
      PagemsgChange(val){
        this.downloadForm.page = val
         this.downloadForm.limit = 9
        this.courseDownloadList()
      }
    },
    mounted(){
       this.downloadForm.id =  matchSplits("kid");
      if(this.isConfig){
        this.downloadForm.type = 1
      }else{
        this.downloadForm.type = 2
      }
      this.courseDownloadList()
    }
  }
</script>
<style scoped lang="scss">
@import "~assets/style/components/download";
</style>
