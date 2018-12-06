import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class List {
	constructor() {
		this.http = http
		authLog.debug(this)
	}
	setToken(token) {
		this.http.setToken(token)
	}

	// 获取老师列表
	async getTeacherList({ pages, limits, cid, pid, uid }) {
		let data = await this.http.get('Wapi/Teacher/teacherList', {
			page: pages,
			limit: limits,
			category_id_a: cid,
			category_id_b: pid,
			company_id: uid
		})
		return data
	}
	// 导师招募选项信息
	async getRecruitSelect() {
		let data = await this.http.get('Wapi/Teacher/getRecruitSelect')
		return data
	}
	// 导师招募上传简历
	async uploadResume({ FILESS }) {
		let data = await this.http.post('Wapi/Teacher/uploadResume', {
			FILES: FILESS
		})
		return data
	}
	// 导师招募 提交
	async submitBeTeacher({
		name, // 姓名
		unit, // 所在单位
		duty, // 职务
		dutyName, // 职称
		tel, // 手机号
		code, // 手机验证码
		email, // 常用邮箱
		direction, // 研究方向
		service, // 课程服务
		intro, // 个人简介
		resume, // 简历
		courseName, // 课程名称
		courseForm, // 课程形式
		courseOnlineID, // 课程形式-线上课程-分类
		courseOffline, // 课程形式-线下课程-多选
		courseArea, // 课程所属领域
		courseAudiences, // 课程受众
		courseDesc // 课程简介
	}) {
		let data = await this.http.post('Wapi/Teacher/teacherRecruit', {
			teacher_name: name, // 姓名
			company: unit, // 所在单位
			position: duty, // 职务
			title: dutyName, // 职称
			mobile: tel, // 手机号
			sms_code: code, // 手机验证码
			email: email, // 邮箱
			study_direction: direction, // 研究方向
			offer_service: service, // 能提供的课程服务,多选
			introduction: intro, // 个人简介
			resume_url: resume, // 简历文件地址
			curriculum_name: courseName, // 课程名称
			teach_type: courseForm, // 授课形式
			online_status: courseOnlineID, //  线上课程制作状态
			offline_type: courseOffline, // 线下课程形式
			curriculum_domain: courseArea, // 课程领域
			recipient: courseAudiences, // 课程受众
			content: courseDesc // 课程简介
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
	async smsCodes({ tel, types }) {
		let data = await this.http.post('Publics/PhoneSms/appSendSms?', {
			phone: tel,
			type: types
		})
		return data
	}
	// 教师分类列表
	async childCategoryList() {
		let data = await this.http.get('Wapi/Category/childCategoryList')

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
}

export default new List()
