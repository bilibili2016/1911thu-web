import http from '../common/HTTP'
import {
    authLog
} from '~/lib/core/logger'
class List {
    constructor() {
        this.http = http
        authLog.debug(this)
    }
    setToken(token) {
        this.http.setToken(token)
    }

    // 获取老师列表
    async getTeacherList({
            pages,
            limits,
            cid,
            pid,
            uid,
            kid,
            identity
        }) {
            let data = await this.http.get('Wapi/Teacher/teacherList', {
                page: pages,
                limit: limits,
                category_id_a: cid,
                category_id_b: pid,
                company_id: uid,
                kind_id: kid,
                tag_id: identity
            })
            return data
        }
        // 导师招募选项信息
    async getRecruitSelect() {
            let data = await this.http.get('Wapi/Teacher/getRecruitSelect')
            return data
        }
        // 导师招募上传简历
    async uploadResume({
            FILESS,
            fileName
        }) {
            let data = await this.http.post('Wapi/Teacher/uploadResume', {
                FILES: FILESS,
                file_name: fileName
            })
            return data
        }
        // 导师招募 提交
    async submitBeTeacher({
        name, // 姓名
        tel, // 手机号
        code, // 手机验证码
        school, //所在学校
        identity, //身份
        dutyName, //职称
        email, // 常用邮箱
        directionArr, // 擅长领域（多选）
        otherArea, //擅长领域（其他）
        service, // 合作形式
        otherService, //其他合作形式
        consult, //是否提供咨询服务
        courseName, // 授课名称
        resume, // 简历
        otherInfo, //其他信息
        academic, //学历
        studentCard, //学生证
        photo //个人照片

    }) {
        let data = await this.http.post('Wapi/Teacher/teacherRecruit', {
            teacher_name: name, // 姓名
            mobile: tel, // 手机号
            sms_code: code, // 手机验证码
            school: school, //所在学校
            identity: identity, //身份
            title: dutyName, // 职称
            email: email, // 邮箱
            study_direction: directionArr, // 擅长领域
            other_study_direction: otherArea, // 擅长领域
            offer_service: service, // 合作形式
            other_offer_service: otherService, // 其他合作形式
            is_meet: consult, //是否提供咨询服务
            curriculum_name: courseName, // 课程名称
            resume_url: resume, // 简历文件地址
            remark: otherInfo, //其他信息
            education: academic, //学历
            student_card: studentCard, //学生证
            photo: photo //个人照片
        })
        return data
    }

    // 预约导师 提交
    async appointmentTeacher({
            teacherId, // 导师ID
            service, // 导师服务形式
            name, // 姓名
            tel, // 手机号
            code, // 手机验证码
            unit, // 单位名称
            duty, // 职务
            email, // 常用邮箱
            appointmentStartTime, // 预约开始时间
            appointmentEndTime, // 预约结束时间
            content, // 授课内容
            courseObj, // 授课对象
            courseNum, // 授课人数
            courseTime, // 授课时长
            projectBudget, // 项目预算
            otherNeed // 其他需求
        }) {
            let data = await this.http.post('Wapi/Teacher/teacherBooking', {
                teacher_id: teacherId, // 老师ID
                offer_service: service, // 导师服务形式
                booking_name: name, // 预约人
                mobile: tel, // 手机号
                sms_code: code, // 手机验证码
                company: unit, // 单位
                position: duty, // 职务
                email: email, // 邮箱
                start_time: appointmentStartTime, // 预约开始时间
                end_time: appointmentEndTime, // 预约结束时间
                study_conten: content, // 授课内容
                study_object: courseObj, // 授课对象
                study_number: courseNum, // 授课人数
                study_time: courseTime, // 授课时长
                budget: projectBudget, // 预算
                remark: otherNeed // 其他需求
            })
            return data
        }
        // 预约导师选项信息
    async getTeacherSelect() {
            let data = await this.http.get('Wapi/Teacher/getBookingSelect')
            return data
        }
        // 获取手机验证码
    async smsCodes({
            tel,
            types
        }) {
            let data = await this.http.post('Publics/PhoneSms/appSendSms?', {
                phone: tel,
                type: types
            })
            return data
        }
        // 教师分类列表
    async teacherCategoryList() {
            let data = await this.http.get('Wapi/Category/teacherCategoryList')

            return data
        }
        // 教师企业列表
    async teacherCompanyList() {
            let data = await this.http.get('Wapi/Teacher/teacherCompanyList')
            return data
        }
        // 教师类别列表
    async teacherKindList() {
            let data = await this.http.get('Wapi/Category/teacherKindList')
            return data
        }
        // 教师标签列表(名称智库筛选)
    async teacherTagsList() {
            let data = await this.http.get('Wapi/Teacher/teacherTagsList')
            return data
        }
        // 上传图片
    async leafletsUpload({
        FILESS,
        fileName
    }) {
        let data = await this.http.post('/Publics/Upload/uploadFile', {
            FILES: FILESS,
            file_name: fileName
        })
        return data
    }
}

export default new List()