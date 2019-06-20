import http from '../common/HTTP'
import {
    store as persistStore
} from '~/lib/core/store'
import {
    authLog
} from '~/lib/core/logger'
class Home {
    constructor() {
        this.http = http
        authLog.debug(this)
    }
    setToken(token) {
        this.http.setToken(token)
    }

    // 获取banner
    async getBannerList({
            types
        }) {
            let data = await this.http.get('Wapi/Index/bannerList', {
                type: types
            })
            return data
        }
        // 获取分类列表
    async getClassifyList({
            classify
        }) {
            let data = await this.http.get('Wapi/Category/categoryList', {
                page: classify
            })
            return data
        }
        // 获取vip列表
    async vipGoodsList() {
            let data = await this.http.post('Wapi/VipGoods/vipGoodsList')
            return data
        }
        // 获取免费课程列表
    async getFreeCourseList({
            pages,
            limits,
            evaluateLimit,
            isEvaluate
        }) {
            let data = await this.http.get('Wapi/Curriculum/freeCurriculumList', {
                page: pages,
                limit: limits,
                evaluate_limit: evaluateLimit,
                is_evaluate: isEvaluate
            })
            return data
        }
        // 获取经典课程列表
    async getClassicCourseList({
            pages,
            limits,
            evaluateLimit,
            isEvaluate
        }) {
            let data = await this.http.get('Wapi/Curriculum/recommendCurriculumList', {
                page: pages,
                limit: limits,
                evaluate_limit: evaluateLimit,
                is_evaluate: isEvaluate
            })
            return data
        }
        // 获取学院课程列表
    async getCollegeCourseList() {
            let data = await this.http.get('Wapi/Index/collegeCurriculumList')
            return data
        }
        // 获取老师列表
    async getTeacherList({
            pages,
            limits,
            recommend
        }) {
            let data = await this.http.get('Wapi/Teacher/teacherList', {
                page: pages,
                limit: limits,
                is_recommend: recommend
            })
            return data
        }
        // 获取评论列表
    async getEvaluateList({
        pages,
        limits,
        types,
        ids,
        isRecommend
    }) {
        let data = await this.http.get('Wapi/Evaluate/evaluateList', {
            page: pages,
            limit: limits,
            id: ids,
            type: types,
            is_recommend: isRecommend
        })
        return data
    }
    async getPartnerList({
        pages,
        limits
    }) {
        let data = await this.http.get(
            'Wapi/CollaborationEnterprise/collaborationEnterpriseList', {
                page: pages,
                limit: limits
            }
        )
        return data
    }

    // 我的课程列表
    async studyCurriculumList({
            categoryId,
            types,
            pages,
            limits
        }) {
            let data = await this.http.get('Wapi/MyInfo/studyCurriculumList', {
                category_id: categoryId,
                type: types,
                page: pages,
                limit: limits
            })
            return data
        }
        // 我的项目列表
    async getProjectList({
            types,
            pages,
            limits
        }) {
            let data = await this.http.get('Wapi/MyInfo/studyProjectList', {
                type: types,
                page: pages,
                limit: limits
            })
            return data
        }
        //项目-收藏列表
    async getProjectCollectList({
            types,
            pages,
            limits
        }) {
            let data = await this.http.get(
                'Wapi/Collection/collectionCurriculumProjectList', {
                    type: types,
                    limit: limits,
                    page: pages
                }
            )
            return data
        }
        //课程-收藏列表
    async collectionList({
            categoryId,
            pages,
            limits
        }) {
            let data = await this.http.get('Wapi/Collection/collectionList', {
                category_id: categoryId,
                limit: limits,
                page: pages
            })
            return data
        }
        // 个人中心 获取订单列表
    async getAllOrderData({
            pages,
            limits,
            payStatus
        }) {
            let data = await this.http.get('Wapi/Order/orderList', {
                page: pages,
                limit: limits,
                pay_status: payStatus
            })
            return data
        }
        // 取消订单    见Order.js
        // async cancelOrder({ ids }) {
        //   let data = await this.http.get('Wapi/Order/cancelOrder', {
        //     order_id: ids
        //   })
        //   return data
        // }
        // 再次购买    见Order.js
        // async buyAgain({ ids }) {
        //   let data = await this.http.get('Wapi/Order/againPay', {
        //     order_id: ids
        //   })
        //   return data
        // }
        // 专属兑换码 getCodeList
    async getCodeList({
            pages,
            limits
        }) {
            let data = await this.http.get(
                'Wapi/InvitationCode/orderInvitationCodeList', {
                    page: pages,
                    limit: limits
                }
            )
            return data
        }
        // 添加购物车
    async addShopCart({
        cartid,
        type
    }) {
        let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
            operation_id: cartid,
            type: type
        })
        return data
    }

    // 兑换码-42
    async getUsedInvitationCodeList() {
            let data = await this.http.get(
                'Wapi/InvitationCode/buildIngInvitationCodeList'
            )
            return data
        }
        // 检测兑换码是否包含已购课程
    async detectionCode({
            courseId
        }) {
            let data = await this.http.post(
                'Wapi/InvitationCode/detectionInvitationCode', {
                    invitation_code: courseId
                }
            )
            return data
        }
        // 兑换码
    async bindingCurriculumPrivate({
            courseId
        }) {
            let data = await this.http.post(
                'Wapi/InvitationCode/buildIngInvitationCodeDone', {
                    invitation_code: courseId
                }
            )
            return data
        }
        // 绑定单位id
    async bindingCompanyId({
            companyId
        }) {
            let data = await this.http.post('Wapi/MyInfo/bindingCompany', {
                company_code: companyId
            })
            return data
        }
        // 获取一二级列表
    async childCategoryList() {
            let data = await this.http.post('Wapi/Category/childCategoryList')

            return data
        }
        // 获取分类课程列表 curriculumList
    async curriculumList({
            categoryIda,
            categoryIdb,
            sortBy,
            pages,
            limits,
            isFree
        }) {
            let data = await this.http.get('Wapi/Curriculum/curriculumList', {
                category_id_a: categoryIda,
                category_id_b: categoryIdb,
                sort_by: sortBy,
                page: pages,
                limit: limits,
                is_free: isFree
            })
            return data
        }
        // 新获取分类列表
    async curriculumListNew({
            cids,
            pids,
            sortBy,
            pages,
            limits,
            isFree
        }) {
            let data = await this.http.get('Wapi/Curriculum/curriculumList', {
                category_id_a: cids,
                category_id_b: pids,
                sort_by: sortBy,
                page: pages,
                limit: limits,
                is_free: isFree
            })
            return data
        }
        // 获取最新项目列表
    async curriculumProjectList({
        cids,
        pids,
        sortBy,
        pages,
        limits,
        isFree
    }) {
        let data = await this.http.get(
            'Wapi/CurriculumProject/curriculumProjectList', {
                category_id_a: cids,
                category_id_b: pids,
                sort_by: sortBy,
                page: pages,
                limit: limits,
                is_free: isFree
            }
        )
        return data
    }

    // 获取项目列表
    async getProjectList({
            pages,
            limits
        }) {
            let data = await this.http.get(
                'Wapi/CurriculumProject/newCurriculumProjectList', {
                    page: pages,
                    limit: limits
                }
            )
            return data
        }
        // 获取新上课程列表
    getNewCourseList({
            pages,
            limits,
            evaluateLimit,
            isevaluate
        }) {
            let data = this.http.get('Wapi/Curriculum/newsCurriculumList', {
                page: pages,
                limit: limits,
                evaluate_limit: evaluateLimit,
                is_evaluate: isevaluate
            })
            return data
        }
        // 获取老师个人信息
    async getTeacherInfo({
            tids
        }) {
            let data = await this.http.get('Wapi/Index/teacherInfo', {
                teacher_id: tids
            })
            return data
        }
        // 获取老师名下课程
    async getTeacherCourse({
        tids
    }) {
        let data = await this.http.get('Wapi/Curriculum/curriculumList', {
            teacher_id: tids
        })
        return data
    }

    // 选定课程
    async addChecked({
            cartid
        }) {
            let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
                curriculum_id: cartid
            })
            return data
        }
        // hr入口 添加单位信息     见Other.js
        // async addCompany({ companyname, person, phones, codes }) {
        //   let data = await this.http.post('Wapi/CompanyDb/addCompany', {
        //     company_name: companyname,
        //     contact_person: person,
        //     phone: phones,
        //     sms_code: codes
        //   })
        //   return data
        // }
        //搜索单位接口     见Other.js
        // async searchCompanyList ({ companyname }) {
        //   let data = await this.http.post('Wapi/Company/searchCompanyList', {
        //     company_name: companyname
        //   })
        //   return data
        // }
        // 经典课程获取左侧课程列表
    async getClassicsList() {
        let data = await this.http.get('Wapi/Category/childCategoryList')
        return data
    }

    // 获取个人信息
    async getUserInfo() {
        let data = await this.http.post('Wapi/MyInfo/userInfo')
        return data
    }

    // 获取省、市、区
    async getRegionList(regionCode) {
        let data = await this.http.post('Wapi/MyInfo/regionList', {
            region_code: regionCode
        })
        return data
    }

    // 提交公司信息 确认订单
    async addCompanyInfo({
        companyname,
        companyaddress,
        contactperson,
        phones,
        codes
    }) {
        let data = await this.http.post('Wapi/Company/addCompany', {
            company_name: companyname,
            company_address: companyaddress,
            contact_person: contactperson,
            phone: phones,
            sms_code: codes
        })
        return data
    }

    // 购买课程申请列表
    async curriculumPayApply({
        ids
    }) {
        let data = await this.http.get('Wapi/Order/orderDetail', {
            order_id: ids
        })

        return data
    }

    // 获取默认课程
    async getdefaultCurriculumCatalog({
        curriculumid
    }) {
        let data = await this.http.get(
            'Wapi/CurriculumCatalog/defaultCurriculumCatalog', {
                curriculum_id: curriculumid
            }
        )
        return data
    }

    // 上传用户头像
    async uploadHeadImg({
        FILESS
    }) {
        let data = await this.http.post('Wapi/MyInfo/uploadHeadImg', {
            FILES: FILESS
        })
        return data
    }

    //未开发票订单
    async orderNotInvoice() {
            let data = await this.http.get('Wapi/Invoice/orderNotInvoice')
            return data
        }
        //发票历史
    async tickethistory() {
            let data = await this.http.get('Wapi/Invoice/invoiceHistory')
            return data
        }
        // 添加编辑发票信息
    async addInvoiceInfo({
            companyname,
            number,
            zcadd,
            phones,
            bank,
            account,
            tel,
            province,
            city,
            area,
            address,
            types,
            radio,
            others,
            name,
            orderID
        }) {
            let data = await this.http.post('Wapi/Invoice/addInvoice', {
                invoice_name: companyname,
                invoice_number: number,
                type: types,
                company_name: companyname,
                company_phone: phones,
                company_address: zcadd,
                content_type: radio,
                content: others,
                consignee: name,
                phone: tel,
                bank_name: bank,
                bank_card: account,
                province: province,
                city: city,
                area: area,
                address: address,
                order_id: orderID
            })
            return data
        }
        // 添加编辑发票信息
    async searchHotWord({
            limits,
            pages
        }) {
            let data = await this.http.post('Wapi/SearchRecord/hotSearchRecord', {
                limit: limits,
                page: pages
            })
            return data
        }
        // 获取定制消息
    async getPointList() {
            let data = await this.http.get('Wapi/Index/getPointList')
            return data
        }
        // 获取最新项目页面顶部list
    async getNewProject() {
            let data = await this.http.get('Wapi/Category/projectCategoryList')
            return data
        }
        // 报告问题
    async reportProblem({
            content,
            curriculumId,
            curriculumcatalogid,
            types
        }) {
            let data = await this.http.post('Wapi/Problem/addProblem', {
                problem_content: content,
                curriculum_id: curriculumId,
                curriculum_catalog_id: curriculumcatalogid,
                type: types
            })
            return data
        }
        // 获取专家组长列表
    async teacherExpertList({
        limits,
        pages
    }) {
        let data = await this.http.post('Wapi/Teacher/teacherExpertList', {
            limit: limits,
            page: pages
        })
        return data
    }

    // 个人中心-我的咨询-取消预约
    async cancelAppoint({
        id
    }) {
        let data = await this.http.post('Wapi/LiveBroadcast/cancelTeacherBespoke', {
            id
        })
        return data
    }
}
export default new Home()