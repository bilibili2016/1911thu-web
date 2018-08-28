import http from '../common/HTTP'
class CustomerProject {
  constructor() {
    this.http = http
  }
  //学院/课程分类
  async CategoryList() {
    let data = await this.http.get('Wapi/Category/childCategoryList')
    return data
  }
  //搜索课程
  async searchCourse({ first_ID, second_ID }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumList', {
      category_id_a: first_ID,
      category_id_b: second_ID
    })
    return data
  }

  //自定义项目信息获取
  async getCustomerProjectInfo({ customerID }) {
    let data = await this.http.get(
      'Wapi/CurriculumProject/customizedCurriculumProjectInfo',
      {
        curriculum_project_id: customerID
      }
    )
    return data
  }
  // 创建自定义项目
  async createProject({
    type,
    customerID,
    name,
    desc,
    objRadio,
    trainNum,
    styleRadio,
    trainDay,
    checkedCourse
  }) {
    let data = await this.http.post(
      'Wapi/CurriculumProject/curriculumProjectAjax',
      {
        type: type, //数据存储类型（新增/编辑）
        curriculum_project_id: customerID, //项目ID（编辑）
        title: name, //项目标题
        introduction: desc, //项目简介
        training_object: objRadio, //培训对象
        study_persion_number: trainNum, //培训人数
        study_type: styleRadio, //培训方式
        training_number: trainDay, //培训天数
        curriculum_id: checkedCourse //所选课程
      }
    )
    return data
  }
}
export default new CustomerProject()
