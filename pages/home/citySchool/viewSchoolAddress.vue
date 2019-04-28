<template>
  <div class="viewSchoolAddress">
    <h4>1911学堂城市分校校址</h4>
    <div class="content">
      <div class="condition">
        <span class="conditionName">按地区查找：</span>
        <el-select v-model="addressForm.region" placeholder="请选择区域" @change="regionChange">
          <el-option v-for="(p,index) in region" :key="'prov'+index" :label="p.region_name" :value="p.region_id"></el-option>
        </el-select>
        <el-select v-model="addressForm.province_name" placeholder="请选择省份" no-data-text="请先选择所在地区" @change="provinceChange">
          <el-option v-for="(p,index) in province" :key="'prov'+index" :label="p.label" :value="p.value"></el-option>
        </el-select>
        <el-select v-model="addressForm.city_name" placeholder="请选择城市" no-data-text="请先选择所在省份" @change="cityChange">
          <el-option v-for="(p,index) in city" :key="'city'+index" :label="p.label" :value="p.value"></el-option>
        </el-select>
        <span class="search" @click="handleSearch">搜索</span>
      </div>
      <div class="table" v-loading="loading" v-if="tableList.length">
        <table>
          <tr>
            <th width="8%">区域</th>
            <th width="15%">省份</th>
            <th width="17%">城市</th>
            <th width="8%">城市类别</th>
            <th width="20%">分校名称</th>
            <th width="10%">分校校长</th>
            <th width="22%">地址</th>
          </tr>
          <tr v-for="(item,index) in tableList" :key="index">
            <td>{{item.region_name}}</td>
            <td>{{item.province}}</td>
            <td>{{item.city}}</td>
            <td>{{item.city_grade}}</td>
            <td>{{item.school_name}}</td>
            <td>{{item.headmaster_name}}</td>
            <td>{{item.address}}</td>
          </tr>
        </table>
        <div class="pagination" v-if="pagemsg.total>10">
          <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
        </div>
      </div>
      <div class="noDataList" v-if="tableList.length== 0&& !loading">
        <v-nodata :pageType="pageType"></v-nodata>
        <div class="btn" @click="handleApplication">立即申请</div>
      </div>
    </div>
  </div>
</template>
<script>
import NoData from '@/components/common/NoData.vue'
import { Trim, message, matchSplits, setTitle } from '~/lib/util/helper'
import { personalset, school } from '~/lib/v1_sdk/index'
export default {
  components: {
    'v-nodata': NoData
  },
  data () {
    return {
      loading: false,
      pageType: {
        page: 'schoolAddress',
        text: '该城市暂无1911学堂分校，欢迎您申请城市分校。',
        imgUrl: 'https://static-image.1911edu.com/noSearch.png'
      },
      pagemsg: {
        page: 1,
        pagesize: 10,
        total: 0
      },
      tableList: [],
      region: [],
      province: [],
      city: [],
      mapregionList: [],
      addressForm: {
        page: 1,
        limit: 10,
        region: '', //区域
        province: '', //省份编码
        province_name: '', //省份名称
        city: '', //城市编码
        city_name: '' //城市名称
      }
    }
  },
  methods: {
    //立即申请
    handleApplication () {
      this.$router.push('/home/citySchool/schoolApplication')
    },
    //获取分校地址列表
    headmasterList () {
      this.loading = true
      school.headmasterList(this.addressForm).then(res => {
        if (res.status == 0) {
          this.loading = false
          this.tableList = res.data.headmasterList
          this.pagemsg.total = res.data.pageCount
        }
      })
    },
    //搜索
    handleSearch () {
      this.addressForm.page = 1
      this.pagemsg.page = 1
      this.addressForm.limit = 10
      this.headmasterList()
    },
    selectPages (val) {
      this.addressForm.page = val
      this.pagemsg.page = val
      this.addressForm.limit = this.pagemsg.pagesize
      this.headmasterList()
    },
    //选择区域
    regionChange (val) {
      this.addressForm.province_name = ''
      this.addressForm.province = ''
      this.addressForm.city_name = ''
      this.addressForm.city = ''
      this.city = []
      school.getRegionAreaList({ regionID: val }).then(res => {
        if (res.status == 0) {
          this.mapregionList = res.data.areaList
          this.province = this.mapregionList.map(item => {
            return Object.assign({}, item, {
              label: item.name,
              value: item.region_code
            })
          })
        }
      })
    },
    //获取区域列表
    getRegionList () {
      school.getRegionList().then(res => {
        if (res.status == 0) {
          this.region = res.data.regionList
        }
      })
    },
    provinceChange (val) {
      this.addressForm.city_name = ''
      this.addressForm.city = ''
      // if (!this.province && this.province.length == 0) {
      //   this.getRegionList()
      // }
      this.city = this.getRegion(this.province, val)
      for (let item of this.province) {
        if (val == item.region_code) {
          this.addressForm.province_name = item.name
          this.addressForm.province = item.region_code
        }
      }
    },
    cityChange (val) {
      // if (!this.city && this.city.length == 0) {
      //   this.getRegionList()
      // }
      for (let item of this.city) {
        if (val == item.region_code) {
          this.addressForm.city_name = item.name
          this.addressForm.city = item.region_code
        }
      }
    },
    // 整理省市区
    getRegion (data, val) {
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
    }
  },
  mounted () {
    setTitle('城市分校校址-1911学堂')
    this.getRegionList()
    this.headmasterList()
  }
}
</script>
<style scoped lang="scss">
@import "~assets/style/citySchool/viewSchoolAddress.scss";
</style>