<template>
    <div class="teacher-list" v-loading="loading">
        <div class="topCon">
            <span :class="{checked:selectTag==tag.id}" v-for="(tag,index) in tagList" :key="'tag'+index" @click="handleTagClick(tag)">{{tag.tag_name}}</span>
        </div>
        <div class="con">
            <div v-if="listData.length">
                <div class="listItem clearfix">
                    <div class="item" v-for="(item,index) in listData" :key="'list'+index">
                        <div class="clearfix">
                            <div class="img">
                                <img :src="item.head_img" alt="">
                            </div>
                            <div class="info">
                                <div class="name">{{item.teacher_name}}</div>
                                <div class="desc">{{item.graduate}}</div>
                                <div class="text"><span class="num">{{item.bookingNum}}</span>人聊过</div>
                            </div>
                        </div>
                        <div class="topic">
                            <ul>
                                <li v-for="(topic,index) in item.questionList" :key="'topic'+index" v-if="index<3">{{topic.title}}</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="pagination" v-if="pagemsg.total>15">
                    <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total"
                        @current-change="selectPages"></el-pagination>
                </div>
            </div>
            <!-- 无数据 -->
            <v-nodata v-else :pageType="pageType"></v-nodata>
        </div>
    </div>
</template>

<script>
import { list, banner } from "~/lib/v1_sdk/index";
import NoData from "@/components/common/NoData.vue";
import { setTitle, matchSplits, Trim } from "@/lib/util/helper";

export default {
    components: {
        "v-nodata": NoData,
    },
    data() {
        return {
            selectTag: 0,
            loading: false,
            tagList: [],
            listData: [],
            teacherForm: {
                pages: 1,
                limits: 15,
                tag_id: 0,
                search_word: '',
                is_recommend: '', //1 推荐 2:不推荐

            },
            pagemsg: {
                page: 1,
                pagesize: 15,
                total: null
            },
            pageType: {
                page: "teacherList",
                text: "暂无数据",
                imgUrl: "https://static-image.1911edu.com/noMsg.png"
            }
        }
    },
    methods: {
        handleTagClick(tag) {
            this.teacherForm.search_word = ''
            this.teacherForm.is_recommend = ''
            this.selectTag = tag.id
            this.teacherForm.tag_id = tag.id
            this.getNewInfoList()
        },
        // 教师标签列表(名称智库筛选)
        getTeacherTagsList() {
            list.teacherTagsList().then(res => {
                if (res.status == 0) {
                    this.tagList = res.data.teacherTagsList;
                    this.tagList.unshift({ id: 0, tag_name: '全部' })
                }
            });
        },
        //导师列表翻页
        selectPages(val) {
            this.teacherForm.pages = val;
            this.teacherForm.limits = this.pagemsg.pagesize;
            this.pagemsg.page = val;
            this.getNewInfoList();
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        //获取导师数据
        getNewInfoList() {
            this.loading = true;
            list.getTeacherList(this.teacherForm).then(response => {
                this.loading = false;
                if (response.status === 100008) {
                    let data = { type: true, res: response };
                    this.$bus.$emit("reLoginAlertPop", data);
                } else if (response.status === 0) {
                    this.pagemsg.total = Number(response.data.pageCount);
                    this.listData = response.data.teacherList;
                }
            });
        }
    },
    mounted() {
        if (window.location.href.indexOf('word') >= 0) {
            this.teacherForm.search_word = decodeURI(matchSplits('word'))
            this.teacherForm.is_recommend = 1
        } else {
            this.teacherForm.search_word = ''
            this.teacherForm.is_recommend = ''
        }
        this.getTeacherTagsList()
        this.getNewInfoList()
    }
}
</script>


<style lang="scss">
@import "~assets/style/teacher/list";
</style>