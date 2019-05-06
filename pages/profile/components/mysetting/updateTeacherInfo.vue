<template>
  <div class="updateTeacherInfo">
    <el-form :model="teacherForm" :rules="rules" ref="teacherForm" label-width="165px" class="teacherForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="teacherForm.name" maxlength="20" disabled></el-input>
      </el-form-item>
      <el-form-item label="学校" prop="school">
        <el-input v-model="teacherForm.school" disabled></el-input>
      </el-form-item>
      <div v-if="teacherForm.identity==1">
        <el-form-item label="您的身份" prop="identity">
          <el-input value="教师" disabled></el-input>
        </el-form-item>
        <el-form-item label="职称" prop="dutyName">
          <el-radio-group v-model="teacherForm.dutyName">
            <el-radio v-for="(item,index) in graduateList" :key="index" :label="item.name">{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="常用邮箱" prop="email">
          <el-input v-model="teacherForm.email" placeholder="请填写您的常用邮箱"></el-input>
        </el-form-item>
        <el-form-item label="擅长领域" prop="directionArr">
          <el-checkbox-group v-model="direction" @change="changeDirection">
            <el-checkbox v-for="(area,index) in teacherDirData" :label="area.id" :key="'area'+index">{{area.name}}</el-checkbox>
          </el-checkbox-group>
          <el-input v-if="isShowOther" v-model="teacherForm.otherArea" maxlength="15" placeholder="请输入您擅长的领域"></el-input>
        </el-form-item>
        <el-form-item label="合作形式" prop="service">
          <el-checkbox-group v-model="teacherForm.service" @change="handleserviceChange">
            <el-checkbox v-for="(service,index) in offerService" :label="service.id" :key="'service'+index">{{service.name}}</el-checkbox>
          </el-checkbox-group>
          <el-input v-if="isShowOtherService" v-model="teacherForm.otherService" maxlength="15" placeholder="请输入您的合作形式"></el-input>
        </el-form-item>
        <el-form-item label="是否提供咨询服务" prop="consult">
          <el-radio-group v-model="teacherForm.consult">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="授课名称" prop="courseName">
          <el-input v-model="teacherForm.courseName" placeholder="请填写您讲授的课程名称"></el-input>
        </el-form-item>
        <el-form-item label="请上传您的照片" prop="photo" class="uploadFile">
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
        </el-form-item>
        <el-form-item label="自我介绍" prop="otherInfo">
          <el-input type="textarea" v-model.trim="teacherForm.otherInfo" :rows="3" maxlength="200" placeholder="例如：清华大学医学院教授，博士生导师。研究领域：肿瘤病理、粘膜癌早期诊断新方法的研究等。在《自然》、《自然免疫》、《Immunity》等国际权威学术期刊上发表论著百余篇。主持2项国家自然科学基金青年基金项目和1项863的子课题项目，同时参与多项973、863及自然科学基金项目。参与编写“十二五”规划教材《急诊与灾难医学》、《临床用药须知》。目前开设课程有《组织学》、《病理学》、《实验探究课》等。" autosize></el-input>
          <span class="input-inner">还可以输入{{descLength}}字</span>
        </el-form-item>
        <el-form-item label="备注信息" prop="teacherRemark">
          <el-input type="textarea" v-model.trim="teacherForm.teacherRemark" :rows="3" maxlength="200" placeholder="暂无备注信息" autosize></el-input>
        </el-form-item>
      </div>
      <div v-if="teacherForm.identity==2">
        <el-form-item label="您的身份" prop="identity">
          <el-input value="学生" disabled></el-input>
        </el-form-item>
        <el-form-item label="您的学历" prop="academic">
          <el-radio-group v-model="teacherForm.academic">
            <el-radio v-for="item in educationList" :key="item.name" :label="item.name">{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="常用邮箱" prop="email">
          <el-input v-model="teacherForm.email" placeholder="请填写您的常用邮箱"></el-input>
        </el-form-item>
        <el-form-item label="擅长领域" prop="directionArr">
          <el-checkbox-group v-model="direction" @change="changeDirection">
            <el-checkbox v-for="(area,index) in studentDirData" :label="area.id" :key="'area'+index">{{area.name}}</el-checkbox>
          </el-checkbox-group>
          <el-input v-if="isShowOther" v-model="teacherForm.otherArea" maxlength="15" placeholder="请输入您擅长的领域"></el-input>
        </el-form-item>
        <el-form-item label="是否提供咨询服务" prop="consult">
          <el-radio-group v-model="teacherForm.consult">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="上传学生证" prop="studentCard" class="uploadFile">
          <div class="load" v-show="isShowCardImg">
            <div class="upload">
              <input type="file" id="uploadImg" @change="cardUpload" accept="image/png, image/gif, image/jpeg">
            </div>
            <div class="uploadMask">
              <i class="el-icon-plus"></i>
            </div>
            <span class="imgAlert">图片不能超过10M</span>
          </div>
          <p class="uploadP" v-show="!isShowCardImg">
            <span class="uploadImgs"><img :src="teacherForm.studentCard" alt=""></span>
            <span class="deleteImg" @click="deleteCardImg">删除</span>
          </p>
        </el-form-item>
        <el-form-item label="请上传您的照片" prop="photo" class="uploadFile">
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
        </el-form-item>
        <el-form-item label="自我介绍" prop="otherInfo">
          <el-input type="textarea" v-model.trim="teacherForm.otherInfo" :rows="3" maxlength="200" placeholder="例如：清华大学法学院大三学生，学生会副主席。以浙江省某市文科状元省份被清华大学法学院法学专业录取。学术兴趣为民法、劳动法。已发表学术论文2篇。热心社会公益活动，创办了清华大学法律公益互助协会，曾组织免费法律咨询活动，为下岗职工的再就业和创业活动提供法律支持。" autosize></el-input>
          <span class="input-inner">还可以输入{{descLength}}字</span>
        </el-form-item>
        <el-form-item label="备注信息" prop="teacherRemark">
          <el-input type="textarea" v-model.trim="teacherForm.teacherRemark" :rows="3" maxlength="200" placeholder="暂无备注信息" autosize></el-input>
        </el-form-item>
      </div>
      <el-form-item size="large" class="submit">
        <el-button type="primary" class="submitAble" @click="onSubmit('teacherForm')" round>提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { checkPhone, checkCode } from "~/lib/util/validatefn";
import { message } from "@/lib/util/helper";
import { auth, list, profileHome } from "~/lib/v1_sdk/index";
export default {
  data () {
    var bankCard = (rule, value, callback) => {
      if (this.oldCard != this.psnForm.bank_card && this.psnForm.bank_card != '') {
        if (!((/^[0-9]{8,20}$/).test(value))) {
          callback(
            new Error("请输入8-20位数字")
          );
        }
      }

      callback();
    };
    var validateEmail = (rule, value, callback) => {
      if (
        !/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的邮箱！"));
      }
      callback();
    };
    return {
      options: [],
      school: [],
      educationList: [],
      graduateList: [],
      fileList: [],
      offerService: [],
      teacherDirData: [],
      studentDirData: [],
      direction: [],
      isShowOther: false,
      isShowOtherService: false,
      isShowImg: true,//展示照片
      isShowCardImg: true,//展示学生证
      imgForm: {
        FILESS: [],
        fileName: ""
      },
      teacherForm: {
        name: "", //姓名
        tel: "", //手机号
        school: "", //所在学校
        identity: "1", //身份
        dutyName: "", //职称
        email: "", //常用邮箱
        directionArr: [],//擅长领域
        otherArea: '', //其他擅长领域
        service: [], //合作形式
        otherService: '',//其他合作形式
        consult: "", //是否提供咨询服务
        courseName: "", //授课名称
        resume: "", //上传文件简历
        otherInfo: "", //其他信息
        academic: "", //学历
        studentCard: "", //学生证
        photo: "", //个人照片
        teacherRemark: ''
      },
      rules: {
        dutyName: [
          {
            required: true,
            message: "请选择您的职称",
            trigger: "change"
          }
        ],
        email: [
          {
            type: "string",
            message: "请输入正确的邮箱地址",
            trigger: "change"
          }, {
            validator: validateEmail,
            trigger: "blur"
          }
        ],
        direction: [
          {
            required: true,
            message: "请选择您的专业领域",
            trigger: "change"
          }
        ],
        service: [
          {
            required: true,
            message: "请选择您的合作形式",
            trigger: "change"
          }
        ],
        consult: [
          {
            required: true,
            message: "请选择您是否提供咨询服务",
            trigger: "change"
          }
        ],
        photo: [
          {
            required: true,
            message: "请上传您的照片",
            trigger: "change"
          }
        ],
        studentCard: [
          {
            required: true,
            message: "请上传您的上传学生证",
            trigger: "change"
          }
        ],
        otherInfo: [
          {
            message: "请填写自我介绍",
            trigger: "blur"
          }
        ],
      },
    }
  },
  computed: {
    descLength (desc) {
      return 200 - this.teacherForm.otherInfo.length;
    }
  },
  methods: {
    //删除上传个人照片
    deleteImg () {
      this.isShowImg = true;
    },
    //删除上传学生证
    deleteCardImg () {
      this.isShowCardImg = true;
    },
    //处理图片上传
    handleImgUpload (event, param, show, size) {
      // var that = this
      var reader = new FileReader();
      let imgFiles = event.target.files[0];
      var formdata = new window.FormData();
      formdata.append("image", imgFiles);
      formdata.image = imgFiles;
      reader.readAsDataURL(imgFiles);
      this.imgForm.FILESS = [];
      if (imgFiles.size / 1024 > size) {
        message(this, 'error', '图片不能超过' + size / 1024 + 'M')
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
      this.handleImgUpload(event, 'photo', 'isShowImg', 10 * 1024)
    },
    //学生证上传
    cardUpload () {
      this.handleImgUpload(event, 'studentCard', 'isShowCardImg', 10 * 1024)
    },
    //选项信息
    getRecruitSelect () {
      list.getRecruitSelect().then(res => {
        //不需要验证是否登录
        if (res.status === 0) {
          this.offerService = res.data.offerService;
          this.offerService.push({ id: '-1', name: '其他' })

          this.school = res.data.schoolList;
          this.educationList = res.data.education;
          this.graduateList = res.data.graduate;
          this.changeData(res.data.studyDirectionList)
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    // 赋值专长领域
    changeData (list) {
      let direction = list
      direction.forEach((item) => {
        //教师擅长领域
        if (item.identity == 1) {
          this.teacherDirData.push(item)
        } else if (item.identity == 2) {//学生
          this.studentDirData.push(item)
        }
      });
      this.teacherDirData.push({ id: '-1', name: '其他' })
      this.studentDirData.push({ id: '-1', name: '其他' })
    },
    //多选框
    handleserviceChange (val) {
      if (val.indexOf('-1') >= 0) {
        this.isShowOtherService = true
      } else {
        this.isShowOtherService = false
      }
    },
    changeDirection (val) {
      if (val.indexOf('-1') >= 0) {
        this.isShowOther = true
      } else {
        this.isShowOther = false
      }
      this.teacherForm.directionArr = this.direction
    },
    handleSelectChange (val) {
      this.teacherForm.school = val;
    },
    // 提交个 人信息表单
    onSubmit (formName) {
      let dIndex = this.direction.indexOf('-1')
      let SIndex = this.teacherForm.service.indexOf('-1')

      if (dIndex >= 0) {
        this.direction.splice(dIndex, 1)
      }
      if (SIndex >= 0) {
        this.teacherForm.service.splice(dIndex, 1)
      }
      this.teacherForm.directionArr = this.direction;
      this.$refs[formName].validate(valid => {
        if (valid) {
          profileHome.editTeacherRecruit(this.teacherForm).then(res => {
            if (res.status == 0) {
              message(this, "success", res.msg);
            } else {
              message(this, "error", res.msg);
            }
          });
        }
      });
    },
    teacherRecruitDetail () {
      profileHome.teacherRecruitDetail().then(res => {
        if (res.status == 0) {
          this.teacherForm.name = res.data.teacherRecruitDetail.teacher_name
          this.teacherForm.school = res.data.teacherRecruitDetail.school
          this.teacherForm.identity = res.data.teacherRecruitDetail.identity
          this.teacherForm.dutyName = res.data.teacherRecruitDetail.title
          this.teacherForm.email = res.data.teacherRecruitDetail.email
          this.teacherForm.directionArr = res.data.teacherRecruitDetail.study_direction
          this.direction = res.data.teacherRecruitDetail.study_direction
          this.teacherForm.otherArea = res.data.teacherRecruitDetail.other_study_direction
          this.teacherForm.service = res.data.teacherRecruitDetail.offer_service
          this.teacherForm.otherService = res.data.teacherRecruitDetail.other_offer_service
          this.teacherForm.consult = res.data.teacherRecruitDetail.is_meet
          this.teacherForm.courseName = res.data.teacherRecruitDetail.curriculum_name
          this.teacherForm.otherInfo = res.data.teacherRecruitDetail.remark
          this.teacherForm.academic = res.data.teacherRecruitDetail.education
          this.teacherForm.studentCard = res.data.teacherRecruitDetail.student_card
          this.teacherForm.photo = res.data.teacherRecruitDetail.photo
          this.teacherForm.teacherRemark = res.data.teacherRecruitDetail.teacher_remark
          if (this.teacherForm.studentCard) {
            this.isShowCardImg = false
          }
          if (this.teacherForm.photo) {
            this.isShowImg = false
          }
          if (this.teacherForm.otherArea == "") {
            this.direction.push({ id: '-1', name: '其他' })
          }
          if (this.teacherForm.otherService == "") {
            this.offerService.push({ id: '-1', name: '其他' })
          }
        } else {
          message(this, "error", res.msg);
        }
      });
    },
  },
  mounted () {
    this.getRecruitSelect();
    this.teacherRecruitDetail()
  },
}
</script>