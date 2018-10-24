<template>
    <div class="beTeacher" @click="documentHandler">
        <!-- <div class="teacer-banner">

        </div> -->
        <div class="tip">请填写您的信息！</div>
        <div class="con">
            <div class="personal">
                <div class="title">个人信息类</div>
                <div class="content">
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>姓名：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.name"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl">所在单位：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.unit"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl">职务：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.duty"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl">职称：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.dutyName"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>联系电话：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.tel"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>常用邮箱：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.email"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>研究方向：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.direction"></el-input>
                        </div>
                    </div>
                    <div class="con-item style clearfix">
                        <div class="fl"><i class="red">*</i>能提供的课程服务：</div>
                        <div class="fr clearfix">
                            <el-checkbox-group v-model="teacherForm.service" @change="handleserviceChange">
                                <el-checkbox v-for="service in serviceList" :label="service" :key="service">{{service}}</el-checkbox>
                            </el-checkbox-group>
                            <i class="el-icon-question styleAsk">
                                <div class="descript-text">
                                    <div>
                                        <p>纯线上：完全在线学习</p>
                                        <p>混合式：线上为主，线下为辅</p>
                                        <p>互动式：线下为主，线上为辅</p>
                                    </div>
                                </div>
                            </i>
                        </div>
                    </div>
                    <div class="con-item desc clearfix">
                        <div class="fl">个人简介：</div>
                        <div class="fr">
                            <el-input type="textarea" v-model="teacherForm.intro" :rows="3" maxlength="500" placeholder="请介绍您在课程相关领域所做过的工作以及获得的荣誉。" autosize></el-input>
                        </div>
                        <span class="input-inner">不超过500字</span>
                    </div>
                    <div class="con-item style clearfix">
                        <div class="fl">上传简历：</div>
                        <div class="fr">
                            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" multiple :file-list="fileList" :beforeUpload="beforeAvatarUpload">
                                <el-button class="uploadBtn" size="mini" type="primary"></el-button>
                                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </div>

                    </div>

                </div>

            </div>
            <div class="course">
                <div class="title">课程信息类</div>
                <div class="content">
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>课程名称：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.courseName" maxlength="30"></el-input>
                            <span class="input-inner">不超过30字</span>
                        </div>
                    </div>
                    <div class="con-item courseForm clearfix">
                        <div class="fl">课程形式：</div>
                        <div class="fr selectFr">
                            <div class="online clearfix">

                                <div class="select-con ">
                                    <el-radio v-model="teacherForm.courseForm" label="5">线上课程</el-radio>
                                    <div class="divClick" @click.stop="handleFormClick">
                                        <el-input v-model="teacherForm.courseOnline" placeholder="请选择分类" readonly></el-input>
                                        <span class="pull-down">
                                            <i class="el-icon-caret-bottom"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="pull-down-text" v-if="isShowForm">
                                    <ul>
                                        <li v-for="(item,index) in onlineLi" :key="index" @click.stop="chooseOnline(item)">{{item}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="offline clearfix">
                                <el-radio v-model="teacherForm.courseForm" label="6">线下课程</el-radio>
                                <el-checkbox-group v-model="teacherForm.courseOffline" @change="handleCheckedChange">
                                    <el-checkbox v-for="course in checkBoxList" :label="course" :key="course">{{course}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                    </div>

                    <div class="con-item clearfix">
                        <div class="fl">课程所属领域：</div>
                        <div class="fr selectFr">
                            <div class="select-con ">
                                <div class="divClick" @click.stop="handleAreaClick">
                                    <span>
                                        <el-input v-model="teacherForm.courseArea" placeholder="请选择分类" readonly></el-input>
                                    </span>
                                    <span class="pull-down">
                                        <i class="el-icon-caret-bottom"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="pull-down-text" v-if="isShowArea">
                                <ul>
                                    <li v-for="(item,index) in onlineLi" :key="index" @click.stop="chooseArea(item)">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="con-item  clearfix">
                        <div class="fl"><i class="red">*</i>课程受众：</div>
                        <div class="fr selectFr">
                            <div class="select-con ">
                                <div class="divClick" @click.stop="handleAudiencesClick">
                                    <span>
                                        <el-input v-model="teacherForm.courseAudiences" placeholder="请选择分类" readonly></el-input>
                                    </span>
                                    <span class="pull-down">
                                        <i class="el-icon-caret-bottom"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="pull-down-text" v-if="isShowAudiences">
                                <ul>
                                    <li v-for="(item,index) in onlineLi" :key="index" @click.stop="chooseAudiences(item)">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="con-item desc clearfix">
                        <div class="fl"><i class="red">*</i>课程简介：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.courseDesc" type="textarea" :rows="3" maxlength="500" placeholder="" autosize></el-input>
                        </div>
                        <span class="input-inner">不超过500字</span>
                    </div>
                </div>
            </div>
            <div class="btns ">
                <span class="btn save active ">提交</span>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      Model: '5',
      isShowArea: false,
      isShowAudiences: false,
      isShowForm: false,
      fileList: [],
      serviceList: ['线上授课', '线下授课', '课程顾问', '其他'],
      checkBoxList: [
        '大班课',
        '小班课',
        '讲座',
        '咨询',
        '论坛',
        '课题研究',
        '其他'
      ],
      onlineLi: ['1', '2'],
      teacherForm: {
        name: '', //姓名
        unit: '', //所在单位
        duty: '', //职务
        dutyName: '', //职称
        tel: '', //联系电话
        email: '', //常用邮箱
        direction: '', //研究方向
        service: ['线上授课', '线下授课'], //课程服务
        intro: '', //个人简介
        resume: '', //简历
        courseName: '', //课程名称
        courseForm: '5', //课程形式
        courseOnline: '', //课程形式-线上课程-分类
        courseOffline: ['大班课'], //课程形式-线下课程-多选
        courseArea: '', //课程所属领域
        courseAudiences: '', //课程受众
        courseDesc: '' //课程简介
      }
    }
  },
  methods: {
    //课程形式-线上课程-分类点击
    handleFormClick() {
      this.isShowForm = !this.isShowForm
      this.isShowArea = false
      this.isShowAudiences = false
    },
    //课程所属领域点击
    handleAreaClick() {
      this.isShowForm = false
      this.isShowArea = !this.isShowArea
      this.isShowAudiences = false
    },
    //课程受众点击
    handleAudiencesClick() {
      this.isShowForm = false
      this.isShowArea = false
      this.isShowAudiences = !this.isShowAudiences
    },
    documentHandler(e) {
      this.isShowForm = false
      this.isShowArea = false
      this.isShowAudiences = false
    },
    //课程形式-线上课程-分类 下拉选项点击
    chooseOnline(val) {
      this.teacherForm.courseOnline = val
      this.isShowForm = false
    },
    //课程所属领域分类 下拉选项点击
    chooseArea(val) {
      this.teacherForm.courseArea = val
      this.isShowArea = false
    },
    //课程受众分类 下拉选项点击
    chooseAudiences(val) {
      this.teacherForm.courseAudiences = val
      this.isShowAudiences = false
    },
    //多选框
    handleCheckedChange(val) {},
    handleserviceChange(val) {},
    beforeAvatarUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
      const extension = testmsg === 'zip'
      const extension2 = testmsg === 'doc'
      console.log(file.size)
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!extension && !extension2) {
        this.$message({
          message: '上传文件只能是 zip、doc格式!',
          type: 'warning'
        })
      }
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 10MB!',
          type: 'warning'
        })
      }
      return extension || (extension2 && isLt2M)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleChange(file, fileList) {
      this.fileList3 = fileList.slice(-3)
    }
  }
}
</script>