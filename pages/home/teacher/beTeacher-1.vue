<template>
  <!-- 导师招募 -->
  <div class="beTeacher" @click="documentHandler">
    <div class="topImg">
      <h4>诚聘导师</h4>
      <div class="wordBox">
        <div class="word">
          <p>1911学堂（1911edu.com），混合式终身教育提供者，我们诚挚邀请您成为1911学堂“特聘导师”。</p>
          <p>成为1911学堂“特聘导师”，我们将与您在五个方面展开深度合作：录制在线课程视频；开展多元化的线下授课及活动；在实践情境中开展顾问咨询项目；与相关机构建立横向课题；以及其他方面的深度合作。此外，1911学堂还将为您配备专属导师助理、专业的课程录制和后期制作团队，以及课程运营和推广团队，助您成为更有价值的奉知者和献智者！</p>
          <p>己欲立而立人、己欲达而达人，1911学堂将国内外顶尖的专家教授汇聚在一起，致力为权威专家打造一个彼此赋能、共创价值的同道人脉圈，专家教授在此能够拓展专业维度，更能结交学界翘楚、共享资源，提升您的个人品牌及影响力！1911学堂不仅是党政机关、事业单位及企业组织终身学习的学校，更将成为各位大师名家思想汇聚、碰撞和升华的平台。</p>
          <p>期待您携手1911学堂，一起为中国继续教育事业做出更大贡献！</p>
        </div>
      </div>
    </div>
    <div class="con">
      <div class="personal">
        <div class="tip">请留下您宝贵的个人信息，期待与您早日合作！</div>
        <div class="content">
          <div class="con-item name clearfix">
            <div class="fl">
              <i class="red">*</i>姓名：
            </div>
            <div class="fr">
              <el-input v-model="teacherForm.name" placeholder="请填写您的姓名"></el-input>
            </div>
          </div>
          <div class="con-item name clearfix">
            <div class="fl">所在单位：</div>
            <div class="fr">
              <el-input v-model="teacherForm.unit" placeholder="请填写您所在的单位名称"></el-input>
            </div>
          </div>
          <div class="con-item name clearfix">
            <div class="fl">职务：</div>
            <div class="fr">
              <el-input v-model="teacherForm.duty" placeholder="请填写您的职务"></el-input>
            </div>
          </div>
          <div class="con-item name clearfix">
            <div class="fl">职称：</div>
            <div class="fr">
              <el-input v-model="teacherForm.dutyName" placeholder="请填写您的职称"></el-input>
            </div>
          </div>
          <div class="con-item name phone clearfix">
            <div class="fl">
              <i class="red">*</i>手机号：
            </div>
            <div class="fr">
              <el-input v-model="teacherForm.tel" placeholder="请填写您的手机号"></el-input>
              <el-input v-model="teacherForm.code" placeholder="请填写短信验证码"></el-input>
              <el-button @click="getCode">{{bindTelData.getCode}}</el-button>
            </div>
          </div>
          <div class="con-item name clearfix">
            <div class="fl">常用邮箱：</div>
            <div class="fr">
              <el-input v-model="teacherForm.email" placeholder="请填写您的常用邮箱"></el-input>
            </div>
          </div>
          <div class="con-item name clearfix">
            <div class="fl">研究方向：</div>
            <div class="fr">
              <el-input v-model="teacherForm.direction" placeholder="宏观经济、人工智能、区域发展、一带一路等"></el-input>
            </div>
          </div>
          <div class="con-item style clearfix">
            <div class="fl">合作形式：</div>
            <div class="fr clearfix">
              <el-checkbox-group v-model="teacherForm.service" @change="handleserviceChange">
                <el-checkbox v-for="(service,index) in offerService" :label="service.id" :key="'service'+index">{{service.name}}</el-checkbox>
                <!-- <i class="el-icon-question styleAsk">
                                    <div class="descript-text" style="width:530px;">
                                        <div>
                                            <p>线上授课：与1911学堂合作录制在线课程，学员登录1911学堂平台进行学习；</p>
                                            <p>线下授课：授课地点为北京，主要形式包括大班课，小班课以及讲座；</p>
                                            <p>课程顾问：亲临项目所在地，实地授课；</p>
                                            <p>咨询：项目相关的课程研发、培训流程及活动设计等问题的咨询服务；</p>
                                            <p>课题研究：基于客户提出的科研主题，协助客户完成相关内容的研究。</p>
                                        </div>
                                    </div>
                </i>-->
              </el-checkbox-group>
            </div>
          </div>
          <div class="con-item clearfix">
            <div class="fl">授课名称：</div>
            <div class="fr">
              <el-input v-model="teacherForm.courseName" placeholder="请填写您讲授的课程名称"></el-input>
            </div>
          </div>
          <!-- <div class="con-item desc clearfix">
                        <div class="fl">个人简介：</div>
                        <div class="fr">
                            <el-input type="textarea" v-model="teacherForm.intro" :rows="3" maxlength="500" placeholder="请介绍您在课程相关领域所做过的工作以及获得的荣誉。" autosize></el-input>
                            <span class="input-inner">不超过500字</span>
                        </div>

          </div>-->
          <div class="con-item uploadFile clearfix">
            <div class="fl">上传简历：</div>
            <div :class="['fr',{'height':isShowFile}]">
              <div class="load" v-show="isShowFile">
                <div class="upload">
                  <input type="file" id="file" name="file" ref="files" @change="handleFileChange" accept=".pdf, .doc, .docx">
                </div>
                <div class="uploadMask">
                  <i class="el-icon-plus"></i>
                </div>
              </div>
              <p class="uploadP" v-show="!isShowFile">
                <span>{{fileName}}</span>
                <span class="deleteFile" @click="deleteFile">删除</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="course">
                <div class="title">课程信息</div>
                <div class="content">
                    <div class="con-item name clearfix">
                        <div class="fl">课程名称：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.courseName" placeholder="请填写您希望开课的名称"></el-input>
                        </div>
                    </div>
                    <div class="con-item courseForm clearfix">
                        <div class="fl">课程形式：</div>
                        <div class="fr selectFr">
                            <div class="online clearfix">
                                <div class="select-con ">
                                    <el-checkbox v-model="teacherForm.courseForm" @change="onlineChange" :label="courseType[0].id">{{courseType[0].name}}</el-checkbox>
                                    <div class="divClick" @click.stop="handleFormClick" v-show="isOnlineChecked">
                                        <el-input v-model="teacherForm.courseOnline" placeholder="请选择线上课程制作状态" readonly></el-input>
                                        <span class="pull-down">
                                            <i class="el-icon-caret-bottom"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="pull-down-text" v-if="isShowForm">
                                    <ul>
                                        <li v-for="(item,index) in onlineStatus" :key="'online'+index" @click.stop="chooseOnline(item)">{{item.name}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="offline clearfix">
                                <el-checkbox v-model="teacherForm.courseForm" @change="offlineChange" :label="courseType[1].id">{{courseType[1].name}}</el-checkbox>
                                <el-checkbox-group v-model="teacherForm.courseOffline" @change="handleCheckedChange" v-show="isOfflineChecked">
                                    <el-checkbox v-for="(course,index) in offlineType" :label="course.id" :key="'course'+index">{{course.name}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                    </div>

                    <div class="con-item clearfix">
                        <div class="fl">课程所属领域：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.courseArea" placeholder="请填写课程所属领域"></el-input>
                        </div>
                    </div>
                    <div class="con-item courseAudiences clearfix">
                        <div class="fl">课程受众：</div>
                        <div class="fr">
                            <el-checkbox-group v-model="teacherForm.courseAudiences" @change="handleserviceChange">
                                <el-checkbox v-for="(audiences,index) in recipient" :label="audiences.id" :key="'audiences'+index">{{audiences.name}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>

                    <div class="con-item desc clearfix">
                        <div class="fl">课程简介：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.courseDesc" type="textarea" :rows="3" maxlength="500" placeholder="请介绍课程内容，特色亮点以及课程学时数。" autosize></el-input>
                            <span class="input-inner">不超过500字</span>
                        </div>

                    </div>
                </div>
      </div>-->
      <div class="btns">
        <span class="btn save active" @click="validate">提交</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Trim, message, matchSplits, setTitle } from "~/lib/util/helper";
import { auth, list } from "~/lib/v1_sdk/index";

export default {
  data() {
    return {
      codeInterval: null,
      fileName: "",
      codeClick: true,
      isShowFile: true,
      isClick: false,
      isOnlineChecked: false,
      isOfflineChecked: false,
      isShowArea: false,
      isShowAudiences: false,
      isShowForm: false,
      fileList: [],
      offerService: [],
      recipient: [],
      offlineType: [],
      onlineStatus: [],
      courseType: [{ id: 1, name: "线上课程" }, { id: 2, name: "线下课程" }],
      teacherForm: {
        name: "", //姓名
        unit: "", //所在单位
        duty: "", //职务
        dutyName: "", //职称
        tel: "", //手机号
        code: "", //手机验证码
        email: "", //常用邮箱
        direction: "", //研究方向
        service: [], //课程服务
        intro: "", //个人简介
        resume: "", //上传文件简历
        courseName: "", //授课名称
        courseForm: [], //课程形式
        courseOnline: "", //课程形式-线上课程-分类
        courseOnlineID: "", //课程形式-线上课程-分类
        courseOffline: [], //课程形式-线下课程-多选
        courseArea: "", //课程所属领域
        courseAudiences: [], //课程受众
        courseDesc: "" //课程简介
      },
      fileForm: {
        FILESS: []
      },
      bindTelData: {
        phones: "",
        codes: "",
        getCode: "获取验证码",
        seconds: 30,
        types: 1,
        openid: null,
        companyCodes: "",
        captchaDisable: false,
        exist: false,
        checked: false
      }
    };
  },

  methods: {
    //课程形式-线上课程-分类点击
    handleFormClick() {
      this.isShowForm = !this.isShowForm;
    },
    documentHandler(e) {
      this.isShowForm = false;
    },
    //课程形式-线上课程-分类 下拉选项点击
    chooseOnline(val) {
      this.teacherForm.courseOnline = val.name;
      this.teacherForm.courseOnlineID = parseInt(val.id);
      this.isShowForm = false;
    },
    onlineChange(val) {
      if (val) {
        this.isOnlineChecked = true;
      } else {
        this.isOnlineChecked = false;
      }
    },
    offlineChange(val) {
      if (val) {
        this.isOfflineChecked = true;
      } else {
        this.isOfflineChecked = false;
      }
    },
    //多选框
    handleCheckedChange(val) {},
    handleserviceChange(val) {},
    //获取验证码
    getCode() {
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;

      if (Trim(this.teacherForm.tel) === "") {
        message(this, "error", "请填写手机号码");
        return false;
      }
      if (!telReg.test(Trim(this.teacherForm.tel))) {
        message(this, "error", "请填写正确的手机号码");
        return false;
      }
      if (this.codeClick) {
        this.codeClick = false;
        if (this.bindTelData.seconds === 30) {
          this.bindTelData.types = 6;
          this.bindTelData.phones = this.teacherForm.tel;

          auth.smsCodes(this.bindTelData).then(response => {
            let types = response.status === 0 ? "success" : "error";
            message(this, types, response.msg);
            this.bindTelData.getCode =
              this.bindTelData.seconds + "秒后重新发送";
            this.codeInterval = setInterval(() => {
              if (this.bindTelData.seconds <= 1) {
                this.codeClick = true;
                this.bindTelData.getCode = "获取验证码";
                this.bindTelData.seconds = 30;
                clearInterval(this.codeInterval);
              } else {
                this.bindTelData.getCode =
                  --this.bindTelData.seconds + "秒后重新发送";
              }
            }, 1000);
          });
        }
      }
    },
    //删除上传的文件
    deleteFile() {
      this.isShowFile = true;
      this.fileName = "";
    },
    //处理文件上传
    handleUpload(event) {
      this.handleFileChange(event);
    },
    //处理文件上传
    handleFileChange(event) {
      var reader = new FileReader();
      let imgFiles = event.target.files[0];
      this.fileName = imgFiles.name;
      var formdata = new window.FormData();
      formdata.append("file", imgFiles);
      formdata.file = imgFiles;
      reader.readAsDataURL(imgFiles);
      this.fileForm.FILESS = [];
      reader.onloadend = () => {
        this.fileForm.FILESS.push(reader.result);
        list.uploadResume(this.fileForm).then(res => {
          if (res.status == 0) {
            this.teacherForm.resume = res.data.full_path;
            this.isShowFile = !this.isShowFile;
            event.target.value = "";
          } else {
            message(this, "error", res.msg);
          }
        });
      };
    },
    //选项信息
    getRecruitSelect() {
      list.getRecruitSelect().then(res => {
        //不需要验证是否登录
        if (res.status === 0) {
          this.offerService = res.data.offerService;
          this.onlineStatus = res.data.onlineStatus;
          this.offlineType = res.data.offlineType;
          this.recipient = res.data.recipient;
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    // 提交
    handleSubmit() {
      list.submitBeTeacher(this.teacherForm).then(response => {
        this.isClick = false;
        //不需要验证是否登录
        if (response.status === 0) {
          message(
            this,
            "success",
            "提交成功，我们的客服人员会尽快与您取得联系！"
          );
          this.$router.push("/home/teacher/list");
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    //表单验证
    validate() {
      if (this.isClick) {
        return false;
      }
      this.isClick = true;
      //   console.log(this.teacherForm)
      const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
      try {
        if (Trim(this.teacherForm.name) === "") throw "请填写姓名";
        if (Trim(this.teacherForm.tel) === "") throw "请填写手机号码";
        if (!telReg.test(Trim(this.teacherForm.tel)))
          throw "请填写正确的手机号码";
        // if (Trim(this.teacherForm.email) === '') throw '请填写常用邮箱'
        if (
          !emailReg.test(Trim(this.teacherForm.email)) &&
          Trim(this.teacherForm.email) != ""
        )
          throw "请填写正确的邮箱";
        // if (Trim(this.teacherForm.direction) === '') throw '请填写研究方向'
        // if (this.teacherForm.service.length == 0) throw '请选择能提供的课程服务'
        // if (Trim(this.teacherForm.courseName) === '') throw '请填写课程名称'
        // if (this.teacherForm.courseAudiences.length == 0) throw '请选择课程受众'
        // if (Trim(this.teacherForm.courseDesc) === '') throw '请填写课程简介'
      } catch (err) {
        message(this, "error", err);
        this.isClick = false;
        return false;
      }
      this.handleSubmit();
    }
  },
  mounted() {
    setTitle("导师招募-1911学堂");
    this.getRecruitSelect();
  }
};
</script>