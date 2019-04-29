<template>
  <!-- 导师招募 -->
  <div class="teacherInfo">
    <div class="beTeacher" @click="documentHandler">
      <div class="topImg">
        <h4>诚聘导师</h4>
        <div class="wordBox">
          <div class="word">
            <p>1911学堂，作为混合式终身教育提供者，为中小学生、大学生及职场人士提供终身教育及导师咨询服务。</p>
            <p>共享经济正在从有形向无形的方向发展，对于知识、技能等的分享会形成一种新的经济形态，为了延续知识传播与分享的方式，为用户提供良好的用户体验，更好地保障学习者的学习效果，1911学堂研发了预约咨询或授课服务模式。诚挚地邀请您成为1911学堂 “特聘导师”，针对学员学习需求提供付费咨询服务或授课，咨询方式包括线上语音（或视频或文字）、线下约见等，咨询内容大致为所授课程相关知识，行业领域发展趋势，学员行业发展建议等内容。</p>
            <p>1911学堂坚信“知识即服务”，学堂定位为知识加工者和传播者，致力于将您的知识进行科学加工及高效传播，把您的知识转变成丰厚的物质回报和精神回报。</p>
            <p>1911学堂现面向清华北大等高校诚聘优秀教师及学生，前100名教师及前200名学生申请通过者,将得到数额不菲的注册金奖励！在后续咨询及授课服务中还将获得持续的、丰厚的回报！</p>
            <p>期待您成为1911学堂“特聘导师”！共同促进广大学生及职场人士的终身成长！</p>
          </div>
        </div>
      </div>
      <div class="con">
        <div class="con-outer">
          <div class="personal">
            <div class="tip">请留下您宝贵的个人信息，期待与您早日合作！</div>
            <h5>您的个人信息只用于1911学堂导师招募信息审核，不会用于其他用途，任何与个人隐私相关的信息，1911学堂会为您保密。</h5>
            <div class="content">
              <div class="con-item name clearfix">
                <div class="fl">
                  <i class="red">*</i>姓名：
                </div>
                <div class="fr">
                  <el-input v-model="teacherForm.name" placeholder="请填写您的姓名"></el-input>
                </div>
              </div>
              <div class="con-item  name phone  clearfix">
                <div class="fl">
                  <i class="red">*</i>手机号：
                </div>
                <div class="fr">
                  <el-input v-model="teacherForm.tel" placeholder="请填写您的手机号"></el-input>
                  <el-input v-model="teacherForm.code" placeholder="请填写短信验证码"></el-input>
                  <el-button @click="getCode">{{bindTelData.getCode}}</el-button>
                </div>
              </div>
              <div class="con-item clearfix">
                <div class="fl"><i class="red">*</i>所在学校：</div>
                <div class="fr">
                  <el-select v-model="teacherForm.school" filterable placeholder="请选择" @change="handleSelectChange">
                    <el-option v-for="item in school" :key="item.name" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </div>
              </div>
              <div class="con-item name clearfix">
                <div class="fl"><i class="red">*</i>您的身份：</div>
                <div class="fr">
                  <el-radio-group v-model="teacherForm.identity">
                    <el-radio label="1">教师</el-radio>
                    <el-radio label="2">学生</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <div class="teacher" v-if="teacherForm.identity==1">
                <div class="con-item name clearfix">
                  <div class="fl"><i class="red">*</i>职称：</div>
                  <div class="fr">
                    <el-radio-group v-model="teacherForm.dutyName">
                      <el-radio v-for="(item,index) in graduateList" :key="index" :label="item.name">{{item.name}}</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="con-item name clearfix">
                  <div class="fl">常用邮箱：</div>
                  <div class="fr">
                    <el-input v-model="teacherForm.email" placeholder="请填写您的常用邮箱"></el-input>
                  </div>
                </div>
                <div class="con-item style clearfix">
                  <div class="fl">擅长领域：</div>
                  <div class="fr clearfix">
                    <el-checkbox-group v-model="direction" @change="changeDirection">
                      <el-checkbox v-for="(area,index) in teacherDirData" :label="area.id" :key="'area'+index">{{area.name}}</el-checkbox>
                      <el-input v-if="isShowOther" v-model="teacherForm.otherArea" placeholder="请输入您擅长的领域"></el-input>
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="con-item style clearfix">
                  <div class="fl">合作形式：</div>
                  <div class="fr clearfix">
                    <el-checkbox-group v-model="teacherForm.service" @change="handleserviceChange">
                      <el-checkbox v-for="(service,index) in offerService" :label="service.id" :key="'service'+index">{{service.name}}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="con-item clearfix">
                  <div class="fl"><i class="red">*</i>是否提供咨询服务：</div>
                  <div class="fr">
                    <el-radio-group v-model="teacherForm.consult">
                      <el-radio label="1">是</el-radio>
                      <el-radio label="2">否</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="con-item clearfix">
                  <div class="fl">授课名称：</div>
                  <div class="fr">
                    <el-input v-model="teacherForm.courseName" placeholder="请填写您讲授的课程名称"></el-input>
                  </div>
                </div>
                <!-- <div class="con-item uploadFile clearfix">
                  <div class="fl">上传简历：</div>
                  <div :class="['fr',{'height':isShowFile}]">
                    <div class="load" v-show="isShowFile">
                      <div class="upload">
                        <input type="file" id="uploadFile" name="file" ref="files" @change="handleFileChange" accept=".pdf, .doc, .docx">
                      </div>
                      <div class="uploadMask">
                        <i class="el-icon-plus"></i>
                      </div>
                    </div>
                    <p class="uploadP" v-show="!isShowFile">
                      <span>{{uploadFileName}}</span>
                      <span class="deleteFile" @click="deleteFile">删除</span>
                    </p>
                  </div>
                </div> -->
                <div class="con-item uploadFile clearfix">
                  <div class="fl"><i class="red">*</i>请上传您的照片：</div>
                  <div :class="['fr',{'height':isShowImg}]">
                    <div class="load" v-show="isShowImg">
                      <div class="upload">
                        <input type="file" id="uploadImg" @change="teacherImgUpload" accept="image/png, image/gif, image/jpeg">
                      </div>
                      <div class="uploadMask">
                        <i class="el-icon-plus"></i>
                      </div>
                      <span class="imgAlert">图片不能超过10M</span>
                    </div>
                    <p class="uploadP" v-show="!isShowImg">
                      <span class="uploadImgs"><img :src="teacherForm.photo" alt=""></span>
                      <span class="deleteImg" @click="deleteImg">删除</span>
                    </p>

                  </div>
                </div>
                <div class="con-item desc clearfix">
                  <div class="fl">自我介绍：</div>
                  <div class="fr">
                    <el-input type="textarea" v-model.trim="teacherForm.otherInfo" :rows="3" maxlength="200" placeholder="例如：清华大学医学院教授，博士生导师。研究领域：肿瘤病理、粘膜癌早期诊断新方法的研究等。在《自然》、《自然免疫》、《Immunity》等国际权威学术期刊上发表论著百余篇。主持2项国家自然科学基金青年基金项目和1项863的子课题项目，同时参与多项973、863及自然科学基金项目。参与编写“十二五”规划教材《急诊与灾难医学》、《临床用药须知》。目前开设课程有《组织学》、《病理学》、《实验探究课》等。" autosize></el-input>
                    <span class="input-inner">还可以输入{{descLength}}字</span>
                  </div>
                </div>
              </div>
              <div class="student" v-if="teacherForm.identity==2">
                <div class="con-item name clearfix">
                  <div class="fl"><i class="red">*</i>您的学历：</div>
                  <div class="fr">
                    <el-radio-group v-model="teacherForm.academic">
                      <el-radio v-for="item in educationList" :key="item.name" :label="item.name">{{item.name}}</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="con-item name clearfix">
                  <div class="fl">常用邮箱：</div>
                  <div class="fr">
                    <el-input v-model="teacherForm.email" placeholder="请填写您的常用邮箱"></el-input>
                  </div>
                </div>
                <div class="con-item style clearfix">
                  <div class="fl">擅长领域：</div>
                  <div class="fr clearfix">
                    <el-checkbox-group v-model="direction" @change="changeDirection">
                      <el-checkbox v-for="(area,index) in studentDirData" :label="area.id" :key="'area'+index">{{area.name}}</el-checkbox>
                      <el-input v-if="isShowOther" v-model="teacherForm.otherArea" placeholder="请输入您擅长的领域"></el-input>
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="con-item clearfix">
                  <div class="fl"><i class="red">*</i>是否提供咨询服务：</div>
                  <div class="fr">
                    <el-radio-group v-model="teacherForm.consult">
                      <el-radio label="1">是</el-radio>
                      <el-radio label="2">否</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="con-item uploadFile clearfix">
                  <div class="fl"><i class="red">*</i>上传学生证：</div>
                  <div :class="['fr',{'height':isShowCardImg}]">
                    <div class="load" v-show="isShowCardImg">
                      <div class="upload">
                        <input type="file" id="uploadImg" @change="cardUpload" accept="image/png, image/gif, image/jpeg">
                      </div>
                      <div class="uploadMask">
                        <i class="el-icon-plus"></i>
                      </div>
                      <span class="imgAlert">图片不能超过1M</span>
                    </div>
                    <p class="uploadP" v-show="!isShowCardImg">
                      <span class="uploadImgs"><img :src="teacherForm.studentCard" alt=""></span>
                      <span class="deleteImg" @click="deleteCardImg">删除</span>
                    </p>
                  </div>
                </div>
                <div class="con-item uploadFile clearfix">
                  <div class="fl"><i class="red">*</i>请上传您的照片：</div>
                  <div :class="['fr',{'height':isShowImg}]">
                    <div class="load" v-show="isShowImg">
                      <div class="upload">
                        <input type="file" id="uploadImg" @change="teacherImgUpload" accept="image/png, image/gif, image/jpeg">
                      </div>
                      <div class="uploadMask">
                        <i class="el-icon-plus"></i>
                      </div>
                      <span class="imgAlert">图片不能超过10M</span>
                    </div>
                    <p class="uploadP" v-show="!isShowImg">
                      <span class="uploadImgs"><img :src="teacherForm.photo" alt=""></span>
                      <span class="deleteImg" @click="deleteImg">删除</span>
                    </p>

                  </div>
                </div>
                <div class="con-item desc clearfix">
                  <div class="fl">自我介绍：</div>
                  <div class="fr">
                    <el-input type="textarea" v-model.trim="teacherForm.otherInfo" :rows="3" maxlength="200" placeholder="例如：清华大学法学院大三学生，学生会副主席。以浙江省某市文科状元省份被清华大学法学院法学专业录取。学术兴趣为民法、劳动法。已发表学术论文2篇。热心社会公益活动，创办了清华大学法律公益互助协会，曾组织免费法律咨询活动，为下岗职工的再就业和创业活动提供法律支持。" autosize></el-input>
                    <span class="input-inner">还可以输入{{descLength}}字</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btns">
          <span class="btn save active" @click="validate">提交</span>
        </div>
      </div>
    </div>
    <div class="successMask" v-if="isShowPop">
      <div class="submitSuccess">
        <div class="icon">
          <img src="@/assets/images/submit-success.png" alt="">
        </div>
        <div class="alert">提交成功！</div>
        <div class="desc">
          <p v-if="teacherForm.identity==1">您是第{{submitted.applyTotal}}位提交申请的教师，已有{{submitted.successTotal}}位教师审批通过。</p>
          <p v-if="teacherForm.identity==2">您是第{{submitted.applyTotal}}位提交申请的学生，已有{{submitted.successTotal}}位学生审批通过。</p>
          <p>感谢您对1911学堂导师招募的关注，我们会在48小时内与您取得联系！</p>
          <span class="btn" @click="returnList">返回名师智库</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store as persistStore } from "~/lib/core/store";
import { Trim, message, matchSplits, setTitle } from "~/lib/util/helper";
import { auth, list } from "~/lib/v1_sdk/index";

export default {
  data () {
    return {
      isShowOther: false,
      isShowPop: false,
      codeInterval: null,
      uploadFileName: "",
      teacherImgName: "",
      codeClick: true,
      isShowFile: true,
      isShowImg: true,//展示照片
      isShowCardImg: true,//展示学生证
      isClick: false,
      isOnlineChecked: false,
      isOfflineChecked: false,
      isShowArea: false,
      isShowAudiences: false,
      isShowForm: false,
      submitted: {
        applyTotal: "",
        successTotal: ""
      },
      school: [],
      educationList: [],
      graduateList: [],
      fileList: [],
      offerService: [],
      teacherDirData:[],
      studentDirData: [],
      direction:[],
      teacherForm: {
        name: "", //姓名
        tel: "", //手机号
        code: "", //手机验证码
        school: "", //所在学校
        identity: "", //身份
        dutyName: "", //职称
        email: "", //常用邮箱
        directionArr: [],//擅长领域
        otherArea: '', //其他擅长领域
        service: [], //合作形式
        consult: "", //是否提供咨询服务
        courseName: "", //授课名称
        resume: "", //上传文件简历
        otherInfo: "", //其他信息
        academic: "", //学历
        studentCard: "", //学生证
        directionOther: "",
        photo: ""
      },
      fileForm: {
        FILESS: [],
        fileName: ""
      },
      imgForm: {
        FILESS: [],
        fileName: ""
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
  watch: {
    "teacherForm.identity" (newValue, oldValue) {
      for (let key in this.teacherForm) {
        if (
          key == "name" ||
          key == "tel" ||
          key == "code" ||
          key == "school" ||
          key == "identity"
        ) {
        } else {
          if (key == "service") {
            this.teacherForm[key] = [];
          } else {
            this.teacherForm[key] = "";
            this.isShowImg = true
            this.isShowCardImg = true
          }
        }
      }
    }
  },
  computed: {
    descLength (desc) {
      return 200 - this.teacherForm.otherInfo.length;
    }
  },
  methods: {
    changeDirection (val) {
      console.log(val,'val');
      if (val.indexOf('-1') >= 0) {
        this.isShowOther = true
      } else {
        this.isShowOther = false
      }
    },
    handleSelectChange (val) {
      this.teacherForm.school = val;
    },
    //课程形式-线上课程-分类点击
    handleFormClick () {
      this.isShowForm = !this.isShowForm;
    },
    documentHandler (e) {
      this.isShowForm = false;
    },
    //课程形式-线上课程-分类 下拉选项点击
    chooseOnline (val) {
      this.teacherForm.courseOnline = val.name;
      this.teacherForm.courseOnlineID = parseInt(val.id);
      this.isShowForm = false;
    },
    onlineChange (val) {
      if (val) {
        this.isOnlineChecked = true;
      } else {
        this.isOnlineChecked = false;
      }
    },
    offlineChange (val) {
      if (val) {
        this.isOfflineChecked = true;
      } else {
        this.isOfflineChecked = false;
      }
    },
    //多选框
    handleserviceChange (val) {
    },
    //获取验证码
    getCode () {
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
          this.bindTelData.phones = Trim(this.teacherForm.tel);

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
    // deleteFile () {
    //   this.isShowFile = true;
    //   this.uploadFileName = "";
    // },
    //处理文件上传
    // handleFileChange (event) {
    //   var reader = new FileReader();
    //   let imgFiles = event.target.files[0];
    //   this.uploadFileName = imgFiles.name;
    //   var formdata = new window.FormData();
    //   formdata.append("file", imgFiles);
    //   formdata.file = imgFiles;
    //   reader.readAsDataURL(imgFiles);
    //   this.fileForm.FILESS = [];
    //   reader.onloadend = () => {
    //     this.fileForm.FILESS.push(reader.result);
    //     this.fileForm.fileName = imgFiles.name;
    //     list.uploadResume(this.fileForm).then(res => {
    //       if (res.status == 0) {
    //         this.teacherForm.phone = res.data.full_path;
    //         this.isShowFile = !this.isShowFile;
    //         event.target.value = "";
    //       } else {
    //         message(this, "error", res.msg);
    //       }
    //     });
    //   };
    // },
    //删除上传图片
    deleteImg () {
      this.isShowImg = true;
    },
    //删除上传照片
    deleteCardImg () {
      this.isShowImg = true;
    },
    //处理图片上传
    handleImgUpload (event, param, show,size) {
      // var that = this
      var reader = new FileReader();
      let imgFiles = event.target.files[0];
      var formdata = new window.FormData();
      formdata.append("image", imgFiles);
      formdata.image = imgFiles;
      reader.readAsDataURL(imgFiles);
      this.imgForm.FILESS = [];
      if(imgFiles.size>size){
        message(this,'error','图片不能超过'+size/1024+'M')
        return false
      }
      reader.onloadend = () => {
        this.imgForm.FILESS.push(reader.result);
        this.imgForm.fileName = imgFiles.name;
        list.leafletsUpload(this.imgForm).then(res => {
          if (res.status == 0) {
            this.teacherForm[param] = res.data.full_path;
            // this.isShowImg = !this.isShowImg;
            this[show] = !this[show];
            event.target.value = "";
          } else {
            message(this, "error", res.msg);
          }
        });
      };
    },
    //照片上传
    teacherImgUpload (event) {
      this.handleImgUpload(event, 'photo', 'isShowImg',10*1024)
    },
    //学生证上传
    cardUpload () {
      this.handleImgUpload(event, 'studentCard', 'isShowCardImg',10*1024)
    },
    //选项信息
    getRecruitSelect () {
      list.getRecruitSelect().then(res => {
        //不需要验证是否登录
        if (res.status === 0) {
          this.offerService = res.data.offerService;
          this.school = res.data.schoolList;
          this.educationList = res.data.education;
          this.graduateList = res.data.graduate;
          let direction = res.data.studyDirectionList
          direction.forEach((item) => {
            //教师擅长领域
            if(item.identity==1){
              this.teacherDirData.push(item)
            }else if(item.identity==2){//学生
              this.studentDirData.push(item)
            }
          });
          this.teacherDirData.push({id:'-1',name:'其他'})
          this.studentDirData.push({id:'-1',name:'其他'})
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    // 提交
    handleSubmit () {
      let dIndex = this.direction.indexOf('-1')
      if (dIndex >= 0) {
        this.direction.splice(dIndex,1)
      }
      this.teacherForm.directionArr = this.direction;
      this.teacherForm.tel = Trim(this.teacherForm.tel);
       console.log(this.teacherForm);
      list.submitBeTeacher(this.teacherForm).then(res => {
        this.isClick = false;
        //不需要验证是否登录
        if (res.status === 0) {
          this.isShowPop = true;
          this.submitted.applyTotal = res.data.applyTotal;
          this.submitted.successTotal = res.data.successTotal;
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    //表单验证
    validate () {
      if (this.isClick) {
        return false;
      }
      this.isClick = true;
      const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
      try {
        if (Trim(this.teacherForm.name) === "") throw "请填写姓名";
        if (Trim(this.teacherForm.tel) === "") throw "请填写手机号码";
        if (!telReg.test(Trim(this.teacherForm.tel)))
          throw "请填写正确的手机号码";
        if (this.teacherForm.school === "") throw "请选择您所在的学校";
        if (this.teacherForm.identity === "") throw "请选择您的身份";
        if (this.teacherForm.identity == 1) {
          if (this.teacherForm.dutyName === "") throw "请选择您的职称";
          if (this.teacherForm.consult === "") throw "请选择是否提供咨询服务";
        } else {
          if (this.teacherForm.academic === "") throw "请选择您的学历";
          if (this.teacherForm.consult === "") throw "请选择是否提供咨询服务";
          if (this.teacherForm.studentCard === "") throw "请上传学生证";
        }
        if (
          !emailReg.test(Trim(this.teacherForm.email)) &&
          Trim(this.teacherForm.email) != ""
        )
          throw "请填写正确的邮箱";
      } catch (err) {
        message(this, "error", err);
        this.isClick = false;
        return false;
      }
      this.handleSubmit();
    },
    returnList () {
      this.$router.push("/home/teacher/list");
    }
  },
  mounted () {
    setTitle("导师招募-1911学堂");
    this.getRecruitSelect();
    // this.teacherForm.tel = persistStore.get("phone");
  }
};
</script>