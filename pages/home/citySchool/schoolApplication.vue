<template>
    <div class="schoolApplication">
        <div class="topImg">
            <h4>1911学堂城市分校校长招募</h4>
        </div>
        <div class="con">
            <div class="content">
                <div class="con-info">
                    <div>
                        <div class="con-item name clearfix">
                            <div class="fl"><i class="red">*</i>城市：</div>
                            <div class="fr selectFr">
                                <div class="text">请选择您要申请成为分校校长的城市</div>
                                <!-- <div class="pull ">
                                    <div class="select-con ">
                                        <div class="divClick" @click.stop="handleProvince">
                                            <span>
                                                <el-input v-model="schoolForm.province" placeholder="请选择省份" readonly></el-input>
                                            </span>
                                            <span class="pull-down">
                                                <i class="el-icon-caret-bottom"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="pull-down-text" v-if="isShowProvince">
                                        <ul>
                                            <li v-for="(item,index) in objProvince" :key="index" @click.stop="chooseProvince(item)">{{item.name}}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pull">
                                    <div class="select-con ">
                                        <div class="divClick" @click.stop="handleCity">
                                            <span>
                                                <el-input v-model="schoolForm.city" placeholder="请选择城市" readonly></el-input>
                                            </span>
                                            <span class="pull-down">
                                                <i class="el-icon-caret-bottom"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="pull-down-text" v-if="isShowCity">
                                        <ul>
                                            <li v-for="(item,index) in objCity" :key="index" @click.stop="chooseCity(item)">{{item.name}}</li>
                                        </ul>
                                    </div>
                                </div> -->
                                <el-select v-model="schoolForm.province_name" placeholder="请选择省份" @change="provinceChange">
                                    <el-option v-for="(p,index) in province" :key="'prov'+index" :label="p.label" :value="p.value"></el-option>
                                </el-select>
                                <el-select v-model="schoolForm.city_name" placeholder="请选择城市" no-data-text="请先选择所在省份" @change="cityChange">
                                    <el-option v-for="(p,index) in city" :key="'city'+index" :label="p.label" :value="p.value"></el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="con-item name clearfix">
                            <div class="fl"><i class="red">*</i>姓名：</div>
                            <div class="fr">
                                <el-input v-model="schoolForm.name" placeholder="请输入您的姓名"></el-input>
                            </div>
                        </div>
                        <div class="con-item name clearfix">
                            <div class="fl"><i class="red">*</i>电话：</div>
                            <div class="fr">
                                <el-input v-model="schoolForm.tel" placeholder="请输入您的手机号"></el-input>
                                <!-- <el-input class="tel" v-model="teacherForm.tel" placeholder="请填写手机号"></el-input> -->
                                <!-- <el-input class="verification" v-model="teacherForm.code" placeholder="请填写短信验证码"></el-input> -->
                                <!-- <span class="code" @click="smsCodes">{{telCodes.getCode}}</span> -->
                            </div>
                        </div>

                        <div class="con-item name clearfix">
                            <div class="fl"><i class="red">*</i>邮箱：</div>
                            <div class="fr">
                                <el-input v-model="schoolForm.email" placeholder="请输入您的邮箱"></el-input>
                            </div>
                        </div>
                        <div class="con-item name clearfix">
                            <div class="fl">公司名称：</div>
                            <div class="fr">
                                <el-input v-model="schoolForm.companyName" placeholder="请输入您的公司名称"></el-input>
                            </div>
                        </div>
                        <div class="con-item desc clearfix">
                            <div class="fl">当地市场分析：</div>
                            <div class="fr">
                                <el-input type="textarea" v-model="schoolForm.markAnalyze" :rows="3" maxlength="500" placeholder="请输入您要申请成为分校校长的城市分析" autosize></el-input>
                                <span class="input-inner">不超过500字</span>
                            </div>
                        </div>
                        <div class="con-item desc clearfix">
                            <div class="fl">自身优势介绍：</div>
                            <div class="fr">
                                <el-input type="textarea" v-model="schoolForm.advantageIntro" :rows="3" maxlength="500" placeholder="请对您的自身优势做下简单介绍" autosize></el-input>
                                <span class="input-inner">不超过500字</span>
                            </div>
                        </div>
                        <div class="con-item desc clearfix">
                            <div class="fl">未来工作设想：</div>
                            <div class="fr">
                                <el-input type="textarea" v-model="schoolForm.jobImagine" :rows="3" maxlength="500" placeholder="请对您的未来工作做下简单设想" autosize></el-input>
                                <span class="input-inner">不超过500字</span>
                            </div>
                        </div>

                        <div class="con-item uploadFile clearfix">
                            <div class="fl">上传营业执照副本：</div>
                            <div :class="['fr',{'height':isShowFile}]">
                                <div class="load" v-show="isShowFile">
                                    <div class="upload">
                                        <input type="file" id="file" name="file" ref="files" @change="handleFileChange" accept="image/png,image/gif,image/jpeg">
                                    </div>
                                    <div class="uploadMask"> <i class="el-icon-plus"></i></div>
                                    <div class="limit">图片不能超过2M</div>
                                </div>

                                <p class="uploadP" v-show="!isShowFile"><img :src="this.schoolForm.businessLicense " alt=""><span class="deleteFile" @click="deleteFile">删除</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="btns ">
            <el-button :disabled="isClick" @click="validate">提交</el-button>
            <!-- <span class="btn save active " @click="validate">提交</span> -->
        </div>

    </div>
</template>
<script>
import { Trim, message, matchSplits, setTitle } from '~/lib/util/helper'
import { personalset, school } from '~/lib/v1_sdk/index'

export default {
  data() {
    return {
      isClick: false,
      isShowProvince: false,
      isShowCity: false,
      objProvince: [],
      objCity: [],
      province: [],
      city: [],
      mapregionList: {},
      isShowFile: true,
      fileName: '',
      fileForm: {
        FILESS: []
      },
      schoolForm: {
        province: '', //省份编码
        province_name: '', //省份名称
        city: '', //城市编码
        city_name: '', //城市名称
        name: '', //姓名
        tel: '', //电话
        email: '', //邮箱
        companyName: '', //公司名称
        markAnalyze: '', //当地市场分析
        advantageIntro: '', //自身优势介绍
        jobImagine: '', //未来工作设想
        businessLicense: '' //营业执照
      }
    }
  },
  methods: {
    //删除上传的文件
    deleteFile() {
      this.isShowFile = true
      this.fileName = ''
    },
    //处理文件上传
    handleFileChange(event) {
      var reader = new FileReader()
      let imgFiles = event.target.files[0]
      this.fileName = imgFiles.name
      var formdata = new window.FormData()
      formdata.append('file', imgFiles)
      formdata.file = imgFiles
      reader.readAsDataURL(imgFiles)
      this.fileForm.FILESS = []

      if (imgFiles.size / 1024 / 1024 > 2) {
        message(this, 'error', '请上传不超过2M的图片')
        return false
      }
      reader.onloadend = () => {
        this.fileForm.FILESS.push(reader.result)
        school.uploadLicense(this.fileForm).then(res => {
          if (res.status == 0) {
            this.schoolForm.businessLicense = res.data.full_path
            this.isShowFile = !this.isShowFile
            event.target.value = ''
          } else {
            message(this, 'error', res.msg)
          }
        })
      }
    },
    //表单验证
    validate() {
      if (this.isClick) {
        return false
      }
      this.isClick = true
      const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/
      try {
        if (Trim(this.schoolForm.province) === '') throw '请选择省份'
        if (Trim(this.schoolForm.city) === '') throw '请选择城市'
        if (Trim(this.schoolForm.name) === '') throw '请输入姓名'
        if (Trim(this.schoolForm.tel) === '') throw '请输入手机号码'
        if (!telReg.test(Trim(this.schoolForm.tel)))
          throw '请输入正确的手机号码'
        if (Trim(this.schoolForm.email) === '') throw '请输入邮箱'
        if (!emailReg.test(Trim(this.schoolForm.email)))
          throw '请输入正确的邮箱'
      } catch (err) {
        message(this, 'error', err)
        this.isClick = false
        return false
      }
      this.applicationSchoolmaster()
    },
    //申请分校长
    applicationSchoolmaster() {
      school.doRecruit(this.schoolForm).then(res => {
        this.isClick = false
        if (res.status == 0) {
          this.isClick = true //页面跳转之前不允许点击
          this.$router.push('/home/citySchool/submitSuccess')
        } else {
          message(this, 'error', res.msg)
        }
      })
    },
    provinceChange(val) {
      this.schoolForm.city_name = ''
      this.schoolForm.city = ''
      if (!this.province && this.province.length == 0) {
        this.getRegionList()
      }
      this.city = this.getRegion(this.province, val)
      for (let item of this.province) {
        if (val == item.region_code) {
          this.schoolForm.province_name = item.name
          this.schoolForm.province = item.region_code
        }
      }
    },
    cityChange(val) {
      if (!this.city && this.city.length == 0) {
        this.getRegionList()
      }
      for (let item of this.city) {
        if (val == item.region_code) {
          this.schoolForm.city_name = item.name
          this.schoolForm.city = item.region_code
        }
      }
    },
    // 整理省市区
    getRegion(data, val) {
      let tmp = []
      for (let item of data) {
        if (item.region_code == val) {
          for (let cit of item.city) {
            tmp.push(
              Object.assign({}, cit, {
                label: cit.name,
                value: cit.region_code
              })
            )
          }
        }
      }
      return tmp
    },
    // 获取省市区
    getRegionList() {
      personalset.getRegionList({ region_code: '' }).then(res => {
        this.mapregionList = res.data.regionList
        this.province = this.mapregionList.map(item => {
          return Object.assign({}, item, {
            label: item.name,
            value: item.region_code
          })
        })
      })
    }
  },
  mounted() {
    setTitle('城市分校校长招募-1911学堂')
    this.getRegionList()
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/citySchool/schoolApplication.scss';
</style>