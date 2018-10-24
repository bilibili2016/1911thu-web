<template>
    <div class="beTeacher orderTeacher" @click="documentHandler">
        <div class="con">
            <div class="content">
                <div class="top">
                    <div class="desc">请选择您的课程需求</div>
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>导师名称：</div>
                        <div class="fr">陈春花</div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl">导师服务形式：</div>
                        <div class="fr">
                            <el-checkbox-group v-model="teacherForm.service" @change="handleserviceChange">
                                <el-checkbox v-for="service in serviceList" :label="service" :key="service">{{service}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div>
                <div class="tip">请填写您的信息，让我们能了解您的需求并联系到您。</div>
                <div>
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>姓名：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.name"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>手机号：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.tel"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl">单位名称：</div>
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
                        <div class="fl"><i class="red">*</i>常用邮箱：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.email"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>预约时间范围：</div>
                        <div class="fr">
                            <el-date-picker v-model="teacherForm.appointmentStartTime" type="date" value-format="timestamp" placeholder="选择开始日期">
                            </el-date-picker>
                            <span class="dataPickSpan">至</span>
                            <el-date-picker v-model="teacherForm.appointmentendTime" type="date" value-format="timestamp" placeholder="选择结束日期">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl">授课内容：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.content"></el-input>
                        </div>
                    </div>
                    <div class="con-item clearfix">
                        <div class="fl"><i class="red">*</i>授课对象：</div>
                        <div class="fr selectFr">
                            <div class="select-con ">
                                <div class="divClick" @click.stop="handlecourseObjClick">
                                    <span>
                                        <el-input v-model="teacherForm.courseObj" placeholder="请选择授课对象" readonly></el-input>
                                    </span>
                                    <span class="pull-down">
                                        <i class="el-icon-caret-bottom"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="pull-down-text" v-if="isShowObj">
                                <ul>
                                    <li v-for="(item,index) in objLi" :key="index" @click.stop="chooseObj(item)">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="con-item clearfix">
                        <div class="fl"><i class="red">*</i>授课人数：</div>
                        <div class="fr selectFr">
                            <div class="select-con ">
                                <div class="divClick" @click.stop="handleCourseNumClick">
                                    <span>
                                        <el-input v-model="teacherForm.courseNum" placeholder="请选择授课人数" readonly></el-input>
                                    </span>
                                    <span class="pull-down">
                                        <i class="el-icon-caret-bottom"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="pull-down-text" v-if="isShowNum">
                                <ul>
                                    <li v-for="(item,index) in numLi" :key="index" @click.stop="chooseNum(item)">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="con-item clearfix">
                        <div class="fl"><i class="red">*</i>授课时长：</div>
                        <div class="fr selectFr">
                            <div class="select-con ">
                                <div class="divClick" @click.stop="handleCourseTimeClick">
                                    <span>
                                        <el-input v-model="teacherForm.courseTime" placeholder="请选择授课时长" readonly></el-input>
                                    </span>
                                    <span class="pull-down">
                                        <i class="el-icon-caret-bottom"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="pull-down-text" v-if="isShowTime">
                                <ul>
                                    <li v-for="(item,index) in timeLi" :key="index" @click.stop="chooseTime(item)">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl"><i class="red">*</i>项目预算：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.projectBudget" maxlength="30"></el-input>
                        </div>
                    </div>
                    <div class="con-item name clearfix">
                        <div class="fl">其他需求：</div>
                        <div class="fr">
                            <el-input v-model="teacherForm.otherNeed" maxlength="30"></el-input>
                        </div>
                    </div>
                </div>

                <div class="btns ">
                    <span class="btn save active " @click="validate">提交</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { Trim, message, matchSplits, setTitle } from '~/lib/util/helper'
import { timestampToYMD } from '@/lib/util/helper'

export default {
  data() {
    return {
      isShowObj: false,
      isShowNum: false,
      isShowTime: false,
      serviceList: [
        '线上授课',
        '线下授课',
        '课程顾问',
        '讲座',
        '论坛',
        '咨询',
        '课题研究'
      ],
      objLi: ['党政干部', '国企高管', '教育系统', '其他'],
      numLi: [1, 2, 3, 4],
      timeLi: [1, 2, 3, 4],
      teacherForm: {
        teacerId: '', //导师ID
        service: ['讲座'], //导师服务形式
        name: '', //姓名
        tel: '', //手机号
        unit: '', //单位名称
        duty: '', //职务
        email: '', //常用邮箱
        appointmentStartTime: '', //预约开始时间
        appointmentendTime: '', //预约结束时间
        content: '', //授课内容
        courseObj: '', //授课对象
        courseNum: '', //授课人数
        courseTime: '', //授课时长
        projectBudget: '', //项目预算
        otherNeed: '' //其他需求
      }
    }
  },
  methods: {
    //授课人数 点击
    handleCourseNumClick() {
      this.isShowNum = !this.isShowNum
      this.isShowArea = false
      this.isShowTime = false
    },
    //授课对象 点击
    handlecourseObjClick() {
      this.isShowNum = false
      this.isShowObj = !this.isShowObj
      this.isShowTime = false
    },
    //授课时长 点击
    handleCourseTimeClick() {
      this.isShowNum = false
      this.isShowObj = false
      this.isShowTime = !this.isShowTime
    },
    documentHandler(e) {
      this.isShowNum = false
      this.isShowObj = false
      this.isShowTime = false
    },
    //授课人数-分类-下拉选项点击
    chooseNum(val) {
      this.teacherForm.courseNum = val
      this.isShowNum = false
    },
    //授课对象-分类-下拉选项点击
    chooseObj(val) {
      this.teacherForm.courseObj = val
      this.isShowObj = false
    },
    //授课时长-分类-下拉选项点击
    chooseTime(val) {
      this.teacherForm.courseTime = val
      this.isShowTime = false
    },
    //多选框
    handleCheckedChange(val) {},
    handleserviceChange(val) {},

    //表单验证
    validate() {
      console.log(this.teacherForm)
      const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/
      try {
        if (Trim(this.teacherForm.name) === '') throw '请填写姓名'
        if (Trim(this.teacherForm.tel) === '') throw '请填写手机号码'
        if (!telReg.test(Trim(this.teacherForm.tel)))
          throw '请填写正确的手机号码'
        if (Trim(this.teacherForm.email) === '') throw '请填写常用邮箱'
        if (!emailReg.test(Trim(this.teacherForm.email)))
          throw '请填写正确的邮箱'
        if (this.teacherForm.appointmentStartTime === '')
          throw '请选择预约开始时间'
        if (this.teacherForm.appointmentendTime === '')
          throw '请选择预约结束时间'
        if (
          this.teacherForm.appointmentStartTime >
          this.teacherForm.appointmentendTime
        )
          throw '预约结束日期不能小于预约开始日期'
        if (this.teacherForm.courseObj === '') throw '请选择授课对象'
        if (this.teacherForm.courseNum === '') throw '请选择授课人数'
        if (this.teacherForm.courseTime === '') throw '请选择授课时长'
        if (Trim(this.teacherForm.projectBudget) === '') throw '请填写项目预算'
      } catch (err) {
        message(this, 'error', err)
        return false
      }
      this.handleSubmit()
    },
    handleSubmit() {
      // 转换日期格式
      this.teacherForm.appointmentStartTime = timestampToYMD(
        this.teacherForm.appointmentStartTime
      )
      this.teacherForm.appointmentendTime = timestampToYMD(
        this.teacherForm.appointmentendTime
      )
    }
  }
}
</script>