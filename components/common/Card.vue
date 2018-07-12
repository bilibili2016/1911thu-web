<template>
  <div class="card">
    <!-- banner定制 -->
    <template v-if="config.card_type === 'ding'">
      <div class="customization">
        <div class="pro clearfix" v-for="(pro,index) in dingData" :key="index" @click="getMore(pro.link_url)">
          <i class="fl">
            <img :src="pro.picture" alt="">
          </i>
          <div class="fr con">
            <h5>{{pro.title}}</h5>
            <p>{{pro.content}}</p>
          </div>
        </div>
      </div>
    </template>
    <!-- profile个人信息模板 新上好课模板 学习中-->
    <template v-if="config.card_type === 'profile'">
      <div class="card-category profile">
        <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
          <el-card shadow="never" body-style="padding: 0;" class="itemBox" @click.native="selectCid2(card,index)">
            <div class="new-style" v-if="config.new === 'true'">
              <img :src="newTag" alt="">
            </div>
            <!-- @click="goLink('course/coursedetail')" -->
            <div class="mask-style" @click="openDetail()">
              <!-- <img :src="jinImg" alt="" class="jin-style"> -->
            </div>
            <div class="bgImgs">
              <img :src="card.picture" alt="">
            </div>
            <el-checkbox v-model="card.is_checked" style="position:absolute;top:10px;right:10px;" v-if="config.types === 'buy'"></el-checkbox>
            <div class="tag">
              <span v-if="card.tag.length !== 0" v-for="(tag,index) in card.tag" :key="index">{{tag}}</span>
            </div>
            <div v-if="config.card === 'home'"></div>
            <div class="common-button btn-bgs " v-else>
              <el-button v-if="card.percent < 1" type="primary" plain @click="goToPlay(card)">开始学习</el-button>
              <el-button v-if="card.percent > 1&&card.overtime" type="primary" plain @click="goShoppingCart(card)">
                <span>
                  加入购物车
                </span>
              </el-button>
              <el-button v-if="card.percent > 1&&!card.overtime" type="primary" plain @click="goToPlay(card)">
                <span>继续学习</span>
              </el-button>

            </div>
            <el-row>
              <!-- 名字 -->
              <div class="item">
                <p :class="['itemBox-name',{'itemBoxTitle':config.card === 'home'?true:false}]" @click="goLink('course/coursedetail')">
                  <span :class="{'title':config.card === 'home'?true:false}">{{card.title}}</span>
                  <span v-if="config.card === 'home'" class="deputyTitle">{{card.deputy_title}}</span>
                </p>
                <p class="itemBox-info">
                  <span v-if="config.card === 'home'">
                    {{card.study_time}}学时
                  </span>
                  <span class="itemBox-num" v-if="config.card === 'home'">
                    <img :src="numSrc" alt="">
                    <span>{{card.study_number}}</span>
                    <el-rate disabled v-model="card.score" class="itemBox-rate" v-if="config.card === 'home'"></el-rate>
                  </span>
                </p>
              </div>
              <!-- 作者和头衔    金额 -->
              <div class="line-wrap" v-if="config.card === 'home'">
                <div class="line-center">
                  <!-- <p class="price freePrise" v-if="config.card === 'home'&&config.free != 'true'">￥{{card.present_price}}</p> -->
                  <p class="price freePrise" v-if="config.card === 'home'&&card.is_free == '1'">￥{{card.present_price}}</p>
                  <p class="freePrise" v-if="card.is_free === '2'">免费</p>
                </div>
              </div>
              <!-- 学习进度 -->
              <div class="line-wraps" v-if="config.card==='learning' ">
                <div class="line-centers ">
                  <!-- {{typeof(card.percent)}} -->
                  <span>已学习{{card.percent}}%</span>
                  <span class="expire_day" style="float:right;padding-bottom:10px;">剩余{{card.expire_day}}天</span>
                  <el-progress :percentage="card.percent "></el-progress>
                </div>
              </div>
              <div v-if="config.card==='already' ">
                <div class="line-centers ">
                  <div>已完成100%</div>
                </div>
              </div>
              <div class="readyImg " v-if="config.card==='already' ">
                <img :src="readyImg " alt=" ">
              </div>
              <!-- 我的课程 已过期的图片 -->
              <div class="readyImg " v-if="config.card==='overtime' ">
                <img :src="overTimeImg" alt=" ">
              </div>
              <!-- 我的课程 已过期的副标题 -->
              <div class="deputyTitleOverTime" v-if="config.card==='overtime' ">{{card.deputy_title}}</div>
            </el-row>
          </el-card>
        </div>
      </div>
    </template>
    <!-- 我的收藏 -->
    <!-- profile个人信息模板 新上好课模板 我要选课-->
    <template v-if="config.card_type==='shoucang' ">
      <div class="card-category profile ">
        <div v-for="(card,index) in data " :index="index " :key="card.id " class="card-list ">
          <el-card shadow="never " body-style="padding: 0; " class="itemBox ">

            <!-- 选课使用的勾选 -->
            <el-checkbox v-model="card.is_checked " @change="selCheckboxChange(card,index) " style="position:absolute;top:10px;right:10px; " v-if="config.types==='buy' "></el-checkbox>

            <!-- @click="selectCid(card,index) " -->
            <div @click="courseInfo(card,index) ">
              <div class="new-style " v-if="config.new==='true' ">
                <img :src="newTag " alt=" ">
              </div>
              <div class="mask-style "></div>
              <!-- <div class="mask-style " @click="goLink( 'course/coursedetail') "> -->
              <!-- <img :src="jinImg " alt=" " class="jin-style "> -->
              <!-- </div> -->

              <!-- 我的首页的图片背景 -->
              <div class="bgImgs ">
                <img :src="card.picture " alt=" ">
              </div>

              <!-- <div class="tag ">
                <span v-if="card.tag.length !==0 " v-for="(tag,index) in card.tag " :key="index ">{{tag}}</span>
              </div> -->

              <!-- <div v-if="config.card==='home' "></div>
              <div class="common-button btn-bgs " v-else>
                <el-button type="primary " plain @click="goLink(linkdata) ">继续学习2334</el-button>
              </div> -->

              <el-row v-if="config.position !== 'personal'">
                <div class="item " @click="courseInfo(card,index) " v-if="config.card === 'home'">
                  <p :class="['itemBox-name',{'itemBoxTitle':config.card === 'home'?true:false}]">
                    <span class="title">{{card.title}}</span>
                    <span class="deputyTitle">{{card.deputy_title}}</span>
                  </p>
                  <p class="itemBox-info">
                    <span v-if="config.card === 'home'">
                      {{card.study_time}}学时
                    </span>
                    <span class="itemBox-num" v-if="config.card === 'home'">
                      <img :src="numSrc" alt="">
                      <span>{{card.study_number}}</span>
                      <el-rate disabled v-model="card.score" class="itemBox-rate" v-if="config.card === 'home'"></el-rate>
                    </span>
                  </p>
                </div>
                <div class="line-wrap " v-if="config.card==='home' ">
                  <div class="line-center">
                    <p class="price ">￥{{card.present_price}}</p>
                  </div>
                </div>
              </el-row>
              <!-- 我的课程的 我的收藏 -->
              <el-row v-if="config.position === 'personal'">
                <div class="item " @click="courseInfo(card,index) ">
                  <p class="itemBox-name ">
                    <span>{{card.title}}</span>
                  </p>
                  <!-- {{card}} -->
                  <div class="deputyTitleOverTime">{{card.deputy_title}}</div>
                  <!-- <span>123</span> -->
                </div>
                <div class="line-wrap " v-if="config.card==='home' " @click.stop="goTeacherInfo(card.teacher_id) ">
                  <div class="line-center">
                    <img :src="card.head_img " alt=" ">
                    <span>{{card.teacher_name}}</span>
                    <span class="title ">{{card.graduate}}</span>
                  </div>
                </div>
              </el-row>
            </div>
          </el-card>
        </div>
      </div>
    </template>
    <!-- 购物车页面 -->
    <template v-if="config.card_type==='profiled' ">
      <div class="card-category profile ">
        <div v-for="(card,index) in data " :index="index " :key="card.id " class="card-list " @click="handleCheck(card,index) ">
          <el-card shadow="never " body-style="padding: 0; " class="itemBox ">
            <div class="new-style " v-if="config.new==='true' ">
              <img :src="newTag " alt=" ">
            </div>
            <div class="mask-style ">
              <!-- <img :src="jinImg " alt=" " class="jin-style "> -->
            </div>
            <div class="bgImgs ">
              <img :src="card.bg " alt=" ">
            </div>
            <div class="tag ">
              <span v-if="card.tag.length !==0 " v-for="(tag,index) in card.tag " :key="index ">{{tag}}</span>
            </div>
            <div v-if="config.card==='home' "></div>
            <div class="common-button btn-bgs " v-else>
              <el-button type="primary " plain @click="goLink(linkdata) ">继续学习</el-button>
            </div>
            <el-row>
              <!-- 名字 -->
              <div class="item ">
                <p class="itemBox-name ">
                  <span>{{card.name}}</span>
                </p>
                <p class="itemBox-info ">
                  <span v-if="config.card==='home' ">
                    {{card.cnum}}
                  </span>
                  <span class="itemBox-num " v-if="config.card==='home' ">
                    <img :src="numSrc " alt=" ">
                    <span>{{card.pnum}}</span>
                    <el-rate disabled v-model="card.rate " class="itemBox-rate " v-if="config.card==='home' "></el-rate>
                  </span>
                </p>
              </div>
              <!-- 作者和头衔 -->
              <div class="line-wrap " v-if="config.card==='home' ">
                <div class="line-center ">
                  <img :src="card.avator " alt=" "> {{card}}
                  <span>王建中</span>
                  <span class="title ">华中科技大学博士</span>
                </div>
              </div>
              <!-- 学习进度 -->
              <div class="line-wraps " v-if="config.card==='learning' ">
                <div class="line-centers ">
                  {{card}}
                  <p>已学习100%</p>
                  <el-progress :percentage="50 "></el-progress>
                </div>
              </div>
              <div v-if="config.card==='already' ">
                <div class="line-centers ">
                  <div>已学习100%</div>
                </div>
              </div>
              <div class="readyImg " v-if="config.card==='already' ">
                <img :src="readyImg " alt=" ">
              </div>
            </el-row>
          </el-card>
        </div>
      </div>
    </template>

    <!-- 最新课程列表 -->
    <!-- <template v-if="config.card_type==='newlesson' ">
      <div class="courseList center  ">
        <div class="course clearfix bottom " v-for="(course,index) in courseList " :key="index ">
          <el-card class="fl " :body-style="{ padding: '0px' } ">

            <img v-if="!config.teacher" :src="course.picture" class="image " alt=" ">

            <img v-if="config.teacher" :src="course.teacher_picture " class="image " alt=" ">
            <div class="personInfo clearfix " @click="goTeacherInfo(course.teacher_id) ">
              <span>{{course}}</span>
              <img :src="course.head_img " alt=" ">
              <h5 class="fr ">特约讲师：{{course.teacher_name}}</h5>
              <p class="fr ">{{course.graduate}}</p>
            </div>
            <div class="play-btn ">
              <img :src="playbtn " alt=" " @click="courseInfo(course) ">
            </div>
          </el-card>
          <div class="particulars fr ">
            <div class="currentclum ">
              <h4 @click="courseInfo(course)">{{course.title}}</h4>
              <p>{{course.introduction}}</p>
            </div>

            <div v-if="course.evaluateList.length> 0">
              <el-carousel trigger="click" height="120px">
                <el-carousel-item v-for="item in course.evaluateList" :key="item.id">

                  <div class="comment">
                    <h5>
                      <span>{{item.nick_name}}的评论</span>
                      <el-rate disabled v-model="item.score" class="itemBox-rate"></el-rate>
                    </h5>
                    <p>{{item.evaluate_content}}</p>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="no-comment" v-else>
              <div class="comment-img">
                <img src="@/assets/images/nocmt.png" alt="">
              </div>
              <p class="comment-text">暂无评论，快来抢沙发～</p>
            </div>
            <div class="study clearfix">
              <span class="fl"><img src="../../assets/images/ren.png" alt=""> {{course.study_number}}人加入学习</span>
              <span class="coin" v-if="course.is_free =='1'">￥ {{course.present_price}}</span>
              <span class="coin mfree" v-if="course.is_free == '2'">免费</span>

              <div class="fr common-button-half-right" v-if="course.is_free == '2'">

                <el-button type="primary" plain @click="courseInfo(course) "> 立即学习</el-button>
              </div>

              <div class="fr common-button-half-right" v-if="course.is_free == '1'">

                <el-button type="primary" plain @click="goBuyNewLesson(true,course,index)"> 加入购物车 </el-button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </template> -->

    <!-- 最新好课列表、精品好课列表、免费专区列表 -->
    <template v-if="config.card_type==='goodlesson' ">
      <div class="newOrFreeCourseList center goodlesson">
        <div class="course clearfix bottom " v-for="(course,index) in courseList " :key="index ">
          <el-card class="fl " :body-style="{ padding: '0px' } ">
            <!-- 课程封面 -->
            <img :src="course.picture" class="image " alt=" ">
            <!-- 老师封面 -->
            <!-- <img v-if="config.teacher" :src="course.teacher_picture " class="image " alt=" "> -->

          </el-card>
          <div class="particulars fr ">
            <div class="currentclum ">
              <h4 @click="courseInfo(course)">{{course.title}}</h4>
              <p class="small-title">{{course.deputy_title}}</p>
              <p>{{course.introduction}}</p>
            </div>

            <div class="study clearfix">
              <p class="coin" v-if="course.is_free =='1'">￥ {{course.present_price}}</p>
              <p class="coin mfree" v-if="course.is_free == '2'"></p>
              <span class="fl"><img src="../../assets/images/ren.png" alt=""> {{course.study_number}}人加入学习</span>

              <!-- <div class="fr common-button-half"> -->
              <!-- <el-button type="primary" plain @click="buyNewCourse(course)"> -->
              <!-- <img src="@/assets/images/shopcard.png" alt=""> -->

              <!-- </el-button> -->
              <!-- </div> -->
              <!-- <div class="fr common-button-half-right">
                <el-button type="primary" plain @click="buyNewCourse(course)"> 加入购物车</el-button>
              </div> -->
              <div class="fr common-button-half-right" v-if="course.is_free == '2'">

                <el-button type="primary" plain @click="courseInfo(course) "> 立即学习</el-button>
              </div>

              <div class="fr common-button-half-right" v-if="course.is_free == '1'">
                <!-- 是否在购物车{{course.is_cart}} {{course.isCartNew}} -->
                <el-button type="primary" plain @click="goBuyNewLesson(true,course,index)"> 加入购物车 </el-button>
                <!-- {{item.isCartNew}} -->
              </div>

            </div>
          </div>
          <div class="">

          </div>
        </div>
      </div>
    </template>

    <!-- 新闻列表  goodlesson2-->
    <template v-if="config.card_type==='goodlesson2' ">
      <div class="newOrFreeCourseList center goodlesson">
        <div class="course clearfix bottom " v-for="(course,index) in newsList " :key="index ">
          <el-card class="fl " :body-style="{ padding: '0px' } ">
            <!-- 课程封面 -->
            <img v-if="!config.teacher" :src="course.picture" class="image " alt=" ">
            <!-- 老师封面 -->
            <img v-if="config.teacher" :src="course.teacher_picture " class="image " alt=" ">

          </el-card>
          <div class="particulars fl " style="width:560px;">
            <div class="currentclum ">
              <h4 @click="courseInfo(course)">{{course.title}}</h4>
              <p class="small-title">{{course.introduce}}</p>
              <p>{{course.introduction}}</p>
            </div>

            <!-- <div class="study clearfix"> -->
            <!-- <span class="fl"><img src="../../assets/images/ren.png" alt=""> {{course.study_number}}人加入学习</span> -->
            <!-- <span class="coin" v-if="course.is_free =='1'">￥ {{course.present_price}}</span> -->
            <!-- <span class="coin mfree" v-if="course.is_free == '2'">免费</span> -->
            <!-- <div class="fr common-button-half"> -->
            <!-- <el-button type="primary" plain @click="buyNewCourse(course)"> -->
            <!-- <img src="@/assets/images/shopcard.png" alt=""> -->

            <!-- </el-button> -->
            <!-- </div> -->
            <!-- <div class="fr common-button-half-right">
                <el-button type="primary" plain @click="buyNewCourse(course)"> 加入购物车</el-button>
              </div> -->
            <!-- <div class="fr common-button-half-right" v-if="course.is_free == '2'"> -->

            <!-- <el-button type="primary" plain @click="courseInfo(course) "> 立即学习</el-button> -->
            <!-- </div> -->

            <!-- <div class="fr common-button-half-right" v-if="course.is_free == '1'"> -->
            <!-- 是否在购物车{{course.is_cart}} {{course.isCartNew}} -->
            <!-- <el-button type="primary" plain @click="goBuyNewLesson(true,course,index)"> 加入购物车 </el-button> -->
            <!-- {{item.isCartNew}} -->
            <!-- </div> -->

            <!-- </div> -->
          </div>
          <div class="Newtime">
            {{timestampToTime2(course.create_time)}}
          </div>
        </div>
      </div>
    </template>

    <!-- coursedetail 页面 -->
    <template v-if="config.card_type === 'goodplay'">
      <div class="courseList center">
        <!-- v-for="(course,index) in courseList -->
        <div class="course clearfix  ">
          <el-card class="fl" :body-style="{ padding: '0px' }">
            <div class="goodplay">
              <img :src="courseList.picture" class="image">
              <div class="mask"></div>
              <div class="common-button btn-bg">
                <!-- 用户已登录 -->
                <div v-if="isAuthenticated">
                  <!-- <el-button type="primary" plain @click="goLink(linkdata)" v-if="privileMsg === true">立即学习1</el-button> -->
                  <!-- <el-button type="primary" plain @click="goPlay(courseList)" v-if="privileMsg === false">立即观看2</el-button> -->

                  <div class="playBtn-detail" v-if="privileMsg === true">
                    <img src="http://papn9j3ys.bkt.clouddn.com/play.png" alt="" @click="goLink(linkdata)">
                  </div>
                  <div class="playBtn-detail" v-if="privileMsg === false">
                    <img src="http://papn9j3ys.bkt.clouddn.com/play.png" alt="" @click="goPlay(courseList)">
                  </div>
                </div>
                <!-- 用户未登录 -->
                <div v-else class="playBtn-detail">
                  <!-- <el-button type="primary" plain @click="goBuy3()" v-if="privileMsg === false">立即观看3</el-button> -->
                  <img src="http://papn9j3ys.bkt.clouddn.com/play.png" alt="" @click="goBuy3()" v-if="privileMsg === false">
                </div>
              </div>
            </div>
          </el-card>
          <div class="particularss fr">
            <div class="currentclum">
              <h4>{{courseList.title}}</h4>
              <!-- ==(免费2)={{courseList.is_free}} 是否购买{{privileMsg}} 是否学习（1已学习）{{courseList.is_study }} -->
              <!-- 团购价更优，团购电话：010-62701911 -->
              <div class="tg">团购价更优，团购电话：010-62701911 </div>
              <!-- 判断是否免费 is_free(2是免费)-->
              <div v-if="courseList.is_free === '2'">
                <div class="clum" v-if="courseList.is_study === 1">
                  <span class="fl coursenum">
                    <img src="@/assets/images/home_num.png" alt=""> {{courseList.study_number}}人正在学习</span>
                </div>
                <div v-else>
                  <span class="fl coursenum">
                    <span>{{courseList.study_time}}学时</span><img src="@/assets/images/home_num.png" alt=""> {{courseList.study_number}}</span>
                  <span class="rate">
                    <el-rate disabled v-model="courseList.score"></el-rate>
                  </span>
                  <!-- <span class="coins">￥ {{courseList.present_price}}</span> -->
                </div>
                <div class="study clearfix bought" v-if="courseList.is_study === 1">
                  <h4 class="clearfix">
                    <p>{{parseInt(courseList.study_curriculum_time / 60)}}分钟{{parseInt(courseList.study_curriculum_time % 60)}}秒</p>
                    <p>已学时长</p>
                  </h4>
                  <div class="common-button">
                    <div>
                      <el-button type="primary" plain @click="goPlay(courseList)">继续学习</el-button>
                    </div>
                    <div>
                      <!-- <el-button type="primary" plain @click="goBuy(true,courseList)" style="margin-right:30px;">加入购物车</el-button> -->
                    </div>
                    <div class="lineProgress">
                      <h5>已完成{{courseList.percent}}%</h5>
                      <el-progress :stroke-width="14" color="#6417a6" :show-text="false" :percentage="courseList.percent"></el-progress>
                    </div>
                  </div>
                </div>
                <div class="study clearfix" v-else>
                  <p>{{courseList.introduction}}</p>
                  <!-- <p class="soldOut fl" v-if="courseList.status =='2'">此课程已下架</p> -->
                  <div class="common-button">
                    <div v-if="isAuthenticated">
                      <!-- <el-button type="primary" plain @click="goLink(linkdata)" v-if="privileMsg === true">开始学习6</el-button> -->
                      <!-- 免费课程=登录之后的开始学习 -->
                      <el-button type="primary" :disabled="isClick" plain @click="goLink(linkdata)" v-if="courseList.is_free === '2'">开始学习</el-button>
                    </div>
                    <div v-else>
                      <!-- 免费课程=未登录之后的立即学习 -->
                      <el-button type="primary" :disabled="isClick" plain @click="goBuy()" v-if="privileMsg === false">立即学习</el-button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="courseList.is_free === '1'">
                <div class="clum" v-if="courseList.is_study === 1">
                  <span class="fl coursenum">
                    <img src="@/assets/images/home_num.png" alt=""> {{courseList.study_number}}人正在学习</span>
                </div>
                <div v-else>
                  <span class="fl coursenum">
                    <span>{{courseList.study_time}}学时</span><img src="@/assets/images/home_num.png" alt=""> {{courseList.study_number}}</span>
                  <span class="rate">
                    <el-rate disabled v-model="courseList.score"></el-rate>
                  </span>
                  <span class="coins">￥ {{courseList.present_price}}</span>
                </div>
                <div class="study clearfix bought" v-if="courseList.is_study === 1">
                  <h4 class="clearfix">
                    <p>{{parseInt(courseList.study_curriculum_time / 60)}}分钟{{parseInt(courseList.study_curriculum_time % 60)}}秒</p>
                    <p>已学时长</p>
                    <!-- <p class="soldOut" v-if="courseList.status =='2'">此课程已下架</p> -->
                  </h4>
                  <div class="common-button">
                    <div>
                      <el-button type="primary" plain @click="goPlay(courseList)">继续学习</el-button>
                    </div>
                    <!--  v-if="courseList.status =='1'" -->
                    <div>
                      <el-button type="primary" plain @click="goBuy(true,courseList)" style="margin-right:30px;">加入购物车</el-button>
                    </div>
                    <div class="lineProgress">
                      <h5>已完成{{courseList.percent}}%</h5>
                      <el-progress :stroke-width="14" color="#6417a6" :show-text="false" :percentage="courseList.percent"></el-progress>
                    </div>
                  </div>
                </div>
                <div class="study clearfix" v-else>
                  <p>{{courseList.introduction}}</p>
                  <div class="common-button">
                    <div v-if="isAuthenticated">
                      <el-button type="primary" plain @click="goLink(linkdata)" v-if="privileMsg === true">开始学习</el-button>
                      <el-button type="primary" :disabled="isClick" plain @click="goBuy(true,courseList)" v-if="courseList.is_free === '1'">加入购物车</el-button>
                    </div>
                    <div v-else>
                      <el-button type="primary" :disabled="isClick" plain @click="goBuy()" v-if="privileMsg === false">加入购物车</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </template>
    <!-- 新上好课详情 页面  资讯详情页面-->
    <template v-if="config.card_type === 'goodplayTwo'">
      <div class="courseList center">
        <div class="course clearfix boxshadow-none" v-for="(course,index) in newsList" :key="index" style="box-shadow:none;">
          <el-card class="fl" :body-style="{ padding: '0px' }">
            <div style="position:relative;" class="img-wrap" @click="selectDetail(index,course,linksix)">
              <img :src="course.picture" class="image">
            </div>
          </el-card>
          <div class="particulars fr" style="width:640px;">
            <div class="currentclum">
              <h4 @click="selectDetail(index,course,linksix)">{{course.title}}</h4>
            </div>
            <div class="bordernone">
              <p>{{course.introduce}}</p>
            </div>
            <div>
              <p class="fl time">{{timestampToTime(course.create_time)}}</p>
              <p class="fr more" @click="selectDetail(index,course,linksix)">阅读全文 >></p>
            </div>
          </div>
          <div class="lines" v-if="index !== 0">
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import { home } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: [
    'data',
    'config',
    'dingData',
    'searchData',
    'courseList',
    'linkdata',
    'newsList',
    'linkfour',
    'linkfive',
    'linksix',
    'privileMsg',
    'cardetails'
  ],
  data() {
    return {
      numSrc: require('@/assets/images/home_num.png'),
      one: 1,
      readyImg: require('@/assets/images/ready.png'),
      overTimeImg: require('@/assets/images/overtime.png'),
      playbtn: 'http://papn9j3ys.bkt.clouddn.com/play.png',
      newTag: require('@/assets/images/new.png'),
      // jinImg: require('@/assets/images/jin.png'),
      isShow: false,
      checked: false,
      numberArr: [],
      number: null,
      numberForm: {
        numbers: null
      },
      curriculumcartid: {
        numberArr: []
      },
      curriculumcartids: {
        cartid: null
      },
      kidForm: {
        kids: null
      },
      nidForm: {
        nids: null
      },
      tidForm: {
        tids: null
      },
      getdefaultForm: {
        curriculumid: ''
      },
      isCart: 0,
      isCartNew: 0,
      isClick: false
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['token', 'productsNum', 'kid'])
  },
  methods: {
    ...mapActions('auth', ['setProductsNum', 'setKid', 'setNid', 'setTid']),
    openDetail() {
      window.open(window.location.origin + '/course/coursedetail')
      // this.$router.push('/course/coursedetail')
    },
    selCheckboxChange(item, index) {
      let len = this.productsNum
      if (item.is_checked === false) {
        item.is_checked = false
        this.curriculumcartid.numberArr.push(item.id)
        this.curriculumcartids.cartid = item.id
        len = len - 1
        this.delShopCart()
      } else {
        item.is_checked = true
        this.curriculumcartids.cartid = item.id
        this.curriculumcartid.numberArr.pop()
        len = len + 1
        this.addShopCart()
      }
      this.setProductsNum({
        pn: len
      })
    },
    goBuy(detail, item) {
      // console.log(item, '这是item')
      if (this.isAuthenticated) {
        if (item.is_cart === 0) {
          this.isClick = true
          if (this.isCart === 0) {
            // let len = Number(this.productsNum) + 1
            // this.setProductsNum({
            //   pn: len
            // })
          } else {
          }
        } else {
          this.isClick = false
          this.$message({
            type: 'success',
            message: '您的商品已经在购物车里面'
          })
        }

        if (detail === true) {
          if (item.is_cart === 0) {
            if (this.isCart === 0) {
              this.detailAddShopCarts()
            } else {
              this.isClick = false
              this.$message({
                type: 'success',
                message: '您的商品已经在购物车里面'
              })
            }
          } else {
          }
        } else {
          this.addShopCarts()
        }
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    // 已过期商品直接加入购物车
    goShoppingCart(item) {
      this.kidForm.kids = item.id
      this.setKid(this.kidForm)
      this.addShopCarts()
    },
    goBuyNewLesson(detail, item, index) {
      persistStore.set('curriculumId', item.id)
      this.kidForm.kids = item.id
      this.setKid(this.kidForm)
      // console.log(item, '这是item')
      if (this.isAuthenticated) {
        if (item.is_cart === 0) {
          this.isClick = true
          if (item.isCartNew === 0) {
            this.detailAddShopCarts(index)
          } else {
            this.isClick = false
            this.$message({
              type: 'success',
              message: '您的商品已经在购物车里面'
            })
            // this.isCartNew = 1
          }
        } else {
          console.log(item)
          this.$message({
            type: 'success',
            message: '您的商品已经在购物车里面'
          })
        }
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    goBuy3(item, index) {
      this.$bus.$emit('loginShow', true)
    },
    goPlay(item) {
      // console.log(item)
      persistStore.set(
        'curriculumId',
        item.defaultCurriculumCatalog.curriculum_id
      )
      persistStore.set('catalogId', item.defaultCurriculumCatalog.id)

      window.open(window.location.origin + '/course/player')
    },
    goToPlay(item) {
      persistStore.set('curriculumId', item.id)
      persistStore.set('catalogId', item.catalog_id)
      window.open(window.location.origin + '/course/player')
    },
    // 获取详情默认播放小节id
    getdefaultCurriculumCatalogs() {
      this.getdefaultForm.curriculumid = this.courseList.id
      return new Promise((resolve, reject) => {
        home.getdefaultCurriculumCatalog(this.getdefaultForm).then(response => {
          // console.log(response, '123')
          persistStore.set(
            'catalogId',
            response.data.defaultCurriculumCatalog.id
          )
        })
      })
    },
    goLink(item) {
      switch (window.location.pathname) {
        case '/course/classifycourse':
          this.$router.push('coursedetail')
          break
        case '/course/chooselesson':
          this.$router.push('coursedetail')
          break
        case '/course/classifycourses':
          this.$router.push('coursedetail')
          break
        case '/':
          this.$router.push(item)
          break
        case '/course/coursedetail':
          // this.$router.push('player')
          window.open(window.location.origin + '/course/player')
          break
        case '/course/classifycourse':
          this.$router.push('coursedetail')
          break
        case '/course/search':
          this.$router.push('coursedetail')
          break
        case '/course/newlesson':
          this.$router.push('coursedetail')
          break
        case '/home/components/teacher':
          this.$router.push('/course/coursedetail')
          break
        case '/profile':
          this.$router.push('/course/coursedetail')
          break
        default:
          break
      }
    },
    addShopCarts() {
      this.curriculumcartids.cartid = this.kid
      return new Promise((resolve, reject) => {
        home.addShopCart(this.curriculumcartids).then(response => {
          this.$router.push('/shop/shoppingcart')
        })
      })
      for (var i = 0; i < this.data.length; i++) {
        if (i === index) {
          this.$set(this.data[i], 'is_checked', true)
        }
      }
    },
    // 点击加入购物车
    detailAddShopCarts(newIndex) {
      this.curriculumcartids.cartid = this.kid
      // console.log(this.courseList, '这是response')
      return new Promise((resolve, reject) => {
        home.addShopCart(this.curriculumcartids).then(response => {
          // this.$router.push('/shop/shoppingcart')
          let len = Number(this.productsNum) + 1
          this.setProductsNum({
            pn: len
          })

          this.isCart = 1
          this.isCartNew = 1
          this.isClick = false
          this.$message({
            type: 'success',
            message: '加入购物车成功'
          })
          // 设置newlesson 第一次加入购物车的状态
          for (var i = 0; i < this.courseList.length; i++) {
            if (i === newIndex) {
              this.$set(this.courseList[i], 'isCartNew', 1)
            }
          }
          // console.log(this.courseList, '123')
        })
      })

      // console.log(this.courseList, '123')
      for (var i = 0; i < this.data.length; i++) {
        if (i === index) {
          this.$set(this.data[i], 'is_checked', true)
        }
      }
    },
    buyNewCourse(item) {
      // console.log(item, '这是item')
      if (item.is_cart === 0) {
        if (this.isCart === 0) {
          let len = Number(this.productsNum) + 1
          // console.log(len, 'len')
          this.setProductsNum({
            pn: len
          })
          this.$message({
            type: 'success',
            message: '加入购物车成功'
          })
        } else {
          this.$message({
            type: 'success',
            message: '您的商品已经在购物车里面'
          })
        }
      } else {
        this.$message({
          type: 'success',
          message: '您的商品已经在购物车里面'
        })
      }
      if (item.is_cart === 0) {
        if (this.isCart === 0) {
          this.curriculumcartids.cartid = item.id
          return new Promise((resolve, reject) => {
            home.addShopCart(this.curriculumcartids).then(response => {
              // this.$router.push('/shop/shoppingcart')
              this.isCart = 1
            })
          })
        } else {
          this.$message({
            type: 'success',
            message: '您的商品已经在购物车里面'
          })
        }
      } else {
      }

      // if (item.is_cart === '0') {
      //   this.curriculumcartids.cartid = item.id
      //   return new Promise((resolve, reject) => {
      //     home.addShopCart(this.curriculumcartids).then(response => {
      //       this.$router.push('/shop/shoppingcart')
      //     })
      //   })
      // } else {
      //   this.$alert('商品已在购物车内', '温馨提示', {
      //     confirmButtonText: '确定',
      //     callback: action => {}
      //   })
      // }
    },
    getMore(item) {
      // this.$router.push(item)
      window.open(window.location.origin + item)
    },
    toggleShow: function() {
      this.isShow = !this.isShow
    },
    selectDetail(index, course, linksix) {
      this.nidForm.nids = course.id
      this.setNid(this.nidForm)
      this.$emit('checkdetail', course.id)
      this.getMore(linksix)
    },
    courseInfo(item, index) {
      this.kidForm.kids = item.id
      persistStore.set('curriculumId', item.id)
      this.setKid(this.kidForm)
      // this.$router.push('/course/coursedetail')
      this.openDetail()
    },
    selectCid(item, index) {
      this.kidForm.kids = item.id
      this.setKid(this.kidForm)
      this.curriculumcartids.cartid = item.id
      let len = 0
      if (item.is_checked === false) {
        item.is_checked = true
        this.curriculumcartid.numberArr.push(item.id)
        len = this.productsNum + 1
        this.addShopCart()
      } else {
        item.is_checked = false
        this.curriculumcartid.numberArr.pop()
        len = this.productsNum - 1
        this.delShopCart()
      }
      this.numberForm.numbers = this.curriculumcartid.numberArr
      this.setProductsNum({
        pn: len
      })
    },
    selectCid2(item, index) {
      this.kidForm.kids = item.id
      persistStore.set('curriculumId', item.id)
      this.setKid(this.kidForm)
      this.curriculumcartids.cartid = item.id
    },
    goTeacherInfo(id) {
      this.tidForm.tids = id * 1
      this.setTid(this.tidForm)
      this.getMore('/home/components/teacher')
    },
    addShopCart() {
      return new Promise((resolve, reject) => {
        home.addShopCart(this.curriculumcartids).then(response => {
          this.setProductsNum({
            pn: response.data.curriculumNumber
          })
          resolve(true)
        })
      })
    },
    delShopCart() {
      return new Promise((resolve, reject) => {
        home.delShopCart(this.curriculumcartids).then(response => {})
      })
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-'
      let M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      let D =
        (date.getDate() * 1 < 10 ? '0' + date.getDate() : date.getDate()) + ' '
      let h =
        (date.getHours() * 1 < 10 ? '0' + date.getHours() : date.getHours()) +
        ':'
      let m =
        (date.getMinutes() * 1 < 10
          ? '0' + date.getMinutes()
          : date.getMinutes()) + ':'
      let s =
        date.getSeconds() * 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return Y + M + D + h + m + s
    },
    timestampToTime2(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-'
      let M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      let D =
        (date.getDate() * 1 < 10 ? '0' + date.getDate() : date.getDate()) + ' '
      let h =
        (date.getHours() * 1 < 10 ? '0' + date.getHours() : date.getHours()) +
        ':'
      let m =
        (date.getMinutes() * 1 < 10
          ? '0' + date.getMinutes()
          : date.getMinutes()) + ':'
      let s =
        date.getSeconds() * 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return M + D
    }
  },
  mounted() {
    // this.isCart = 0
    // console.log(this.cardetails, 'uuuu')
    if (window.location.pathname === '/course/coursedetail') {
      // this.getdefaultCurriculumCatalogs()
    }
    if (
      !this.productsNum &&
      typeof this.productsNum != 'undefined' &&
      this.productsNum != 0
    ) {
      // console.log('进来了')
      this.setProductsNum({
        pn: 0
      })
    }
  }
}
</script>

<style scoped lang="scss">
.deputyTitleOverTime {
  width: 220px;
  height: 20px;
  line-height: 20px;
  margin: 8px 0;
  overflow: hidden;
  font-size: 14px;
  color: #93999f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 16px;
}
.new-style {
  img {
    width: 48px !important;
    height: 28px !important; // margin-top: -20px;
    position: absolute;
    top: -13px;
    left: -10px;
    z-index: 1;
  }
}
.mask-style {
  width: 250px;
  height: 160px;
  background-color: rgba(100, 23, 166, 0.5);
  position: absolute;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  opacity: 0;
  transition: all 300ms;
}
.bgImgs {
  width: 250px;
  height: 160px;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  img {
    width: 250px;
    height: 160px;
    transition: all 300ms;
  }
}
.mask {
  display: none;
  transition: all 3000ms;
}
.jin-style {
  width: 38px !important;
  height: 38px !important;
  position: absolute;
  top: 60px;
  left: 110px;
  z-index: 1000;
  display: none;
  transition: all 300ms;
} // banner定制
.customization {
  width: 1100px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -550px;
  z-index: 3;
  padding-left: 192px;
  div.pro {
    float: left;
    width: 280px;
    height: 100px;
    border-radius: 5px;
    background-color: #efefef;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      margin-top: -8px;
      background-color: #f1e9f8;
    }
    &:nth-child(1),
    &:nth-child(2) {
      margin-right: 31px;
    }
    .con {
      margin-right: 20px;
    }
    img {
      width: 50px;
      height: 50px;
      margin: 2px 3px;
    }
    div {
      width: 178px;
      h5 {
        color: #6417a6; // line-height: 40px;
        margin: 15px 0px 10px 0px;
        &:hover {
          color: #8f4acb;
        }
      }
      p {
        height: 40px;
        color: #93999f;
        font-size: 12px;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.showMsg {
  display: none;
} // 新上好课
.card-category {
  display: flex; // justify-content: space-between;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  .card-list {
    margin: 0 32px 50px 0; // margin-bottom: 50px;
    border-radius: 16px;
    &:nth-child(4n + 4) {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0 6px 18px 0 rgba(73, 28, 156, 0.36);
      transition: all 300ms;
      .jin-style {
        display: block;
        transition: all 300ms;
      }
      .mask-style {
        opacity: 1;
      }
      .bgImgs img {
        width: 254px;
        height: 162.2px;
        margin-left: -2px;
        margin-top: -1.1px;
      }
    }
    .itemBox {
      cursor: pointer;
      width: 250px;
      display: flex;
      border-radius: 16px;
      background: #fff;
      flex-direction: column;
      align-items: center;
      position: relative;
      border: none;
      img {
        width: 250px;
        height: 160px;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
      }
      .tag {
        position: absolute;
        top: 126px;
        left: 4px;
        span {
          display: inline-block;
          padding: 6px 11px 5px 10px;
          background: rgba(37, 55, 163, 1);
          opacity: 0.6;
          border-radius: 6px;
          color: #fff;
          margin-left: 8px;
          max-width: 92px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .item {
        // border-bottom: 1px rgba(228, 228, 244, 1) solid;
        .itemBox-name {
          width: 250px;
          height: 45px;
          line-height: 45px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(51, 42, 81, 1);
          padding: 0 15px;
          overflow: hidden;
          &.itemBoxTitle {
            // height: 80px;
            height: 102px;
            // line-height: 20px;
            .title {
              display: block;
              width: 220px;
              // height: 18px;
              // line-height: 18px;
              height: 40px;
              line-height: 20px;
              // overflow: hidden;
              color: #1c1f21;
              margin-top: 20px;
              // overflow: hidden;
              // text-overflow: ellipsis;
              // white-space: nowrap;overflow:hidden;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            .deputyTitle {
              width: 220px;
              height: 20px;
              line-height: 20px;
              margin: 8px 0;
              overflow: hidden;
              font-size: 14px;
              color: #93999f;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        .itemBox-info {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(176, 174, 184, 1);
          line-height: 0px;
          margin: 0px 0px 0px 15px;
          .itemBox-num {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            padding-left: 8px;
            width: 160px;
            img {
              width: 12px;
              height: 12px;
              margin: 0px 5px;
            }
            .itemBox-rate {
              // display: inline;
              font-size: 12px;
              line-height: 13px;
              float: right;
            }
          }
        }
      }
      .items {
        // border-bottom: 1px rgba(228, 228, 244, 1) solid;
        .itemBox-name {
          height: 45px;
          line-height: 45px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(51, 42, 81, 1);
          padding: 0 15px;
          overflow: hidden;
        }
        .itemBox-info {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(176, 174, 184, 1);
          line-height: 0px;
          margin: 0px 0px 0px 15px;
          .itemBox-num {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            padding-left: 8px;
            width: 160px;
            img {
              width: 12px;
              height: 12px;
              margin: 0px 5px;
            }
            .itemBox-rate {
              // display: inline;
              font-size: 12px;
              line-height: 13px;
              float: right;
            }
          }
        }
      }
      .readyImg {
        width: 75px;
        height: 49px;
        position: absolute;
        top: 40%;
        left: 94%;
        margin-left: -70px;
        margin-top: -20px;
        img {
          width: 75px;
          height: 49px;
        }
      }
      .line-wrap {
        width: 100%;
        height: 35px;
        line-height: 30px;
      }
      .line-wraps {
        height: 50px; // border-top: 1px #e4e4f4 solid;
      }
      .line-center {
        overflow: hidden;
        height: 35px;
        padding: 0 15px;
        p.price {
          color: #ff5f5f;
          font-size: 14px;
          padding: 0 0px;
        }
        p.freePrise {
          color: #1c1f21;
          font-size: 14px;
        }
        span {
          vertical-align: middle;
          font-family: MicrosoftYaHei;
          color: rgba(109, 104, 127, 1);
          padding-top: 1px;
          display: inline-block;
        }
        .title {
          width: 140px;
          height: 31px;
          line-height: 31px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          float: right;
          color: rgba(109, 104, 127, 1);
          vertical-align: middle;
        }
      }
      .line-centers {
        padding: 0px 14px 0px 13px;
        p {
          margin-bottom: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(136, 136, 136, 1); // line-height:0px;
        }
        div {
          margin-bottom: 26px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(136, 136, 136, 1);
        }
      }
      .line-center img {
        width: 22px;
        height: 22px;
        padding: 0px;
        margin: 0 10px 0 0;
        vertical-align: middle;
        font-family: MicrosoftYaHei;
        color: rgba(109, 104, 127, 1);
        border-radius: 50%;
      }
    }
  }
  .el-card {
    box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
    border-radius: 16px;
  }
}
#pane-tab-first .card-category .card-list,
#pane-first .card-category .card-list,
#pane-second .card-category .card-list,
#pane-third .card-category .card-list {
  margin: 0 30px 50px 0;
  // &:nth-child(4n + 4) {
  // margin-right: 24px;
  // }
  &:nth-child(3n + 3) {
    margin-right: 0;
  }
}
// left
.card-categorys {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  float: left;
  .card-list {
    .itemBoxs {
      cursor: pointer;
      width: 472px;
      height: 406px;
      background: #fff; // margin-top: 50px;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center; // border:1px #999 solid;
      border-radius: 6px;
      box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
      &:hover {
        box-shadow: 0 6px 18px 0 rgba(73, 28, 156, 0.36);
        transition: all 300ms;
      }
      .img-box {
        width: 472px;
        height: 254px;
        position: relative;
        overflow: hidden;
        img {
          width: 472px;
          height: 254px;
        }
        div {
          width: 472px;
          height: 60px;
          background: rgba(100, 23, 166, 1);
          opacity: 0.8;
          position: absolute;
          bottom: 0px;
          left: 0px;
          display: inline-block;
          span {
            height: 60px;
            padding: 0 10px;
            font-size: 20px;
            line-height: 64px !important;
            font-family: MicrosoftYaHei;
            color: rgba(255, 255, 255, 1);
            display: inline-block;
            overflow: hidden;
          }
        }
      }
      .item {
        font-size: 14px;
        color: #222;
        line-height: 28px;
        padding: 20px 15px 0;
        text-indent: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
      .line-wrap {
        height: 40px;
      }
      .line-center {
        line-height: 40px;
        span {
          vertical-align: middle;
          font-family: MicrosoftYaHei;
          color: rgba(109, 104, 127, 1);
          padding-top: 1px;
          display: inline-block;
        }
      }
      .line-center img {
        width: 22px;
        height: 22px;
        padding: 0px;
        margin: 0px 10px 0px 14px;
        vertical-align: middle;
        font-family: MicrosoftYaHei;
        color: rgba(109, 104, 127, 1);
      }
    }
  }
  .el-card {
    box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
    border-radius: 16px;
  }
} // 新上好课详情
.courseList {
  width: 1100px;
  margin: 0 auto;
  .bottom {
    margin-bottom: 40px;
  }
  .boxshadow-none {
    position: relative;
  }
  .course {
    width: 100%;
    padding: 40px 0 40px 40px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
    .el-card {
      // width: 400px;
      // height: 392px;
      font-size: 0;
      position: relative;
      .img-wrap {
        width: 400px;
        height: 260px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      & > img {
        width: 400px;
        height: 260px;
      }
      .personInfo {
        width: 100%;
        height: 132px;
        background-color: #6417a6;
        cursor: pointer;
        img {
          float: left;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: 31px 26px;
        }
        h5,
        p {
          float: left;
          width: 274px;
          color: #fff;
        }
        h5 {
          margin-top: 41px;
          font-size: 18px;
        }
        p {
          font-weight: 400;
          height: 36px;
          line-height: 36px;
          font-size: 14px;
        }
      }
      .play-btn {
        width: 76px;
        height: 76px;
        border-radius: 38px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -43px;
        margin-top: -89px;
        cursor: pointer;
      }
    }
    .goodplay {
      position: relative;
      .image {
        width: 480px;
        height: 312px;
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 480px;
        height: 312px;
        background: rgba(100, 23, 166, 1);
        opacity: 0.5;
      }
      .playBtn-detail {
        width: 76px;
        height: 76px;
        margin-left: 30px;
        margin-top: -10px;
        img {
          cursor: pointer;
        }
      }
    }
    .particulars {
      width: 660px;
      .no-comment {
        height: 120px;
        background-color: rgba(250, 250, 250, 1);
        overflow: hidden;
        .comment-img {
          width: 48px;
          height: 44px;
          margin: 22px auto 13px;
        }
        .comment-text {
          font-size: 14px;
          color: rgba(136, 136, 136, 1);
          width: 159px;
          margin: 0 auto;
        }
      }
      .currentclum {
        padding-left: 40px;
        margin-right: 40px;
        margin-bottom: 40px;
        h4 {
          font-size: 18px;
          color: #222;
          height: 54px;
          line-height: 54px;
          margin-bottom: 8px;
          cursor: pointer;
        }
        h4:hover {
          color: #8f4acb;
        }
        p {
          font-size: 14px;
          line-height: 30px;
          color: #222;
          cursor: pointer;
        }
      }
      .comment {
        height: 134px;
        margin-top: 5px;
        padding: 0 40px 10px;
        background-color: #fafafa;
        color: #888;
        h5 {
          line-height: 40px;
          .itemBox-rate {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            margin-left: 20px;
            vertical-align: middle;
          }
        }
        p {
          font-size: 14px;
          color: #888888;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .bordernone {
        border: none;
        padding-top: 0px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 34, 34, 1);
        line-height: 30px;
        padding: 0px 40px;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }
      .study {
        padding: 15px 40px 0;
        .coin {
          color: red;
          font-size: 17px;
          padding-left: 20px;
        }
        .mfree {
          color: #222;
        }
        .common-button {
          p.goStudy {
            width: 140px;
            height: 36px;
            line-height: 36px;
            border-radius: 18px;
            border: 1px solid #6417a6;
            overflow: hidden;
            font-size: 0;
            span {
              margin: 0;
              height: 34px;
              text-align: center;
              font-size: 14px;
              color: #6417a6;
              cursor: pointer;
              &.fl {
                width: 88px;
              }
              &.fr {
                width: 50px;
                background-color: #6417a6;
              }
            }
          }
        }
        span {
          font-size: 14px;
          color: #888888;
          margin-top: 21px;
          display: inline-block;
          &:nth-child(3) {
            width: 140px;
            height: 36px;
            line-height: 36px;
            border: 1px solid #6417a6;
            color: #6417a6;
            text-align: center;
            border-radius: 18px;
            cursor: pointer;
          }
          img {
            width: 14px;
            height: 14px;
            vertical-align: middle;
          }
        }
        div {
          margin-top: 10px;
        }
        .common-button-half {
          width: 56px;
          height: 40px;
          line-height: 40px;
          background: #6417a6;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          transition: all 300ms;
          span {
            width: 20px;
            height: 20px;
            margin: 10px 0 10px 15px;
            background: url('~assets/images/shopcard.png') no-repeat;
            background-size: contain;
          }
          &:hover {
            background: #8f4acb;
          }
        }
        .common-button-half-right {
          .el-button--primary {
            color: #6417a6;
            &.is-plain {
              border-color: #6417a6;
            }
            &:hover {
              color: #8f4acb;
              background-color: #fff;
              &.is-plain {
                border-color: #8f4acb;
              }
            }
          }
        }
      }
      .common-button-half {
        img {
          width: 20px !important;
          height: 20px !important;
        }
        .el-button {
          padding: 9px 16px;
          border: 1px #6417a6 solid;
          border-left: none;
        }
      }
      .date {
        color: rgba(136, 136, 136, 1);
        font-size: 14px;
      }
      .time {
        color: rgba(136, 136, 136, 1);
        font-size: 14px;
        margin: 10px 40px;
      }
      .more {
        color: #6417a6;
        font-size: 14px;
        margin: 10px 40px;
        cursor: pointer;
      }
    }
    .particularss {
      width: 510px;
      margin-right: 30px;
      .currentclum {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 34, 34, 1);
        line-height: 0px;
        cursor: pointer;
        .tg {
          color: #ff5f5f;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(255, 95, 95, 1);
          padding-bottom: 20px;
          padding-top: 10px;
        }
        h4 {
          font-size: 18px;
          color: #222;
          height: 54px;
          line-height: 54px;
          margin-bottom: 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        h4:hover {
          color: #8f4acb;
          cursor: pointer;
        }
        .clum {
          height: 25px;
          .coursenum {
            padding: 0;
          }
        }
        .coursenum {
          width: auto;
          line-height: 25px;
          padding-top: 12px;
          cursor: pointer;
          span {
            display: inline-block;
            margin-right: 15px;
          }
        }
        .coins {
          float: right;
          color: #ff5f5f;
          padding-top: 17px;
          font-size: 16px;
          padding-right: 20px;
        }
        .rate {
          padding-top: 14px;
        }
        p {
          font-size: 14px;
          line-height: 30px;
          color: #222;
        }
        span {
          font-size: 14px;
          color: #888888;
          &:nth-child(2) {
            width: 140px;
            height: 36px;
            line-height: 36px; // border: 1px solid #6417a6;
            // color: #6417a6;
            text-align: center;
            border-radius: 18px;
            cursor: pointer;
          }
          img {
            width: 14px;
            height: 14px;
            // vertical-align: middle;
          }
        }
        .itemBox-info {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(176, 174, 184, 1);
          line-height: 0px;
          margin: 0px 0px 0px 15px;
          .itemBox-num {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            padding-left: 8px;
            width: 160px;
            img {
              width: 12px;
              height: 12px;
              margin: 0px 5px;
            }
            .itemBox-rate {
              // display: inline;
              font-size: 12px;
              line-height: 13px;
              float: right;
            }
          }
        }
      }
      .comment {
        height: 134px;
        margin-top: 40px;
        padding: 0 40px 10px;
        background-color: #fafafa;
        color: #888;
        h5 {
          line-height: 40px;
          .itemBox-rate {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            margin-left: 20px;
            vertical-align: middle;
          }
        }
        p {
          font-size: 14px;
          color: #888888;
          line-height: 30px;
        }
      }
      .study {
        // padding: 30px 40px 0;
        padding: 20px 0 0 0;
        border-top: 1px rgba(232, 214, 247, 1) solid; // margin-top: 65px;
        p {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(34, 34, 34, 1);
          line-height: 30px;
          margin-bottom: 20px;
          height: 94px;
          // border: 1px red solid;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          &.soldOut {
            text-decoration: underline;
          }
        }
        h4 {
          float: left;
          color: #222;
          p {
            margin: 0;
            &:first-child {
              font-size: 20px;
            }
            &:last-child {
              font-size: 14px;
            }
          }
        }

        .common-button .is-plain {
          border-radius: 20px;
          border-color: #6417a6;
          color: #6417a6;
          font-weight: 400;
          transition: all 300ms;
          &:hover {
            color: #fff;
            border-color: #8f4acb;
          }
        }
        &.bought {
          .common-button .is-plain {
            margin-top: 30px;
          }
          .lineProgress {
            clear: both;
            width: 100%;
            padding-top: 45px;
            h5 {
              width: 100%;
              line-height: 30px;
              text-align: right;
              font-size: 14px;
              color: #666;
            }
            .el-progress-bar {
              .el-progress-bar__outer {
                height: 14px;
                background-color: #ffdb5f;
              }
              .el-progress-bar__inner {
                background-color: #6417a6;
              }
            }
          }
        }
      }
    }
  }
}
.btn {
  width: 140px;
  height: 36px;
  line-height: 36px;
  border: 1px solid #6417a6;
  color: #6417a6;
  text-align: center;
  border-radius: 18px;
  cursor: pointer;
}
.btn:hover {
  color: #fff;
  background-color: #6417a6;
}
.btn-class {
  width: 140px;
  border-radius: 20px;
}
.btn-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -70px;
  margin-top: -20px;
  .el-button {
    width: 174px;
    height: 56px;
    line-height: 56px;
    border-radius: 28px;
    color: #6417a6;
    padding: 0;
    border: none;
    font-size: 16px;
    font-weight: 400;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
.btn-bgs {
  position: absolute;
  top: 30%;
  left: 50%;
  margin-left: -70px;
  margin-top: -29px;
  color: #732eaf;
}
.boxshadow-none {
  box-shadow: none;
}
.lines {
  width: 1000px;
  height: 1px;
  background-color: #e8d6f7;
  margin: 0 auto;
  position: absolute;
  top: 0px;
  z-index: 100;
  left: 45px;
}

//精品好课 免费专区
.newOrFreeCourseList {
  width: 1100px;
  margin: 0 auto;
  .bottom {
    // margin-bottom: 40px;
  }
  .boxshadow-none {
    position: relative;
  }
  .el-card {
    width: 360px;
    height: 230px;
    border-radius: 0;
    .el-card__body {
      img {
        width: 360px;
        height: 230px;
      }
    }
  }
  .course {
    width: 100%;
    padding: 32px 0;
    border-bottom: 1px solid #c6c2d2;
    transition: all 0.5s;
    // border-radius: 6px;
    // background-color: #fff;
    // box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
    .el-card.is-always-shadow {
      box-shadow: none;
    }
    .el-card {
      // width: 400px;
      // height: 392px;
      font-size: 0;
      position: relative;
      .img-wrap {
        width: 400px;
        height: 260px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      & > img {
        width: 400px;
        height: 260px;
      }
      .personInfo {
        width: 100%;
        height: 132px;
        background-color: #6417a6;
        cursor: pointer;
        img {
          float: left;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: 31px 26px;
        }
        h5,
        p {
          float: left;
          width: 274px;
          color: #fff;
        }
        h5 {
          margin-top: 41px;
          font-size: 18px;
        }
        p {
          font-weight: 400;
          height: 36px;
          line-height: 36px;
          font-size: 14px;
        }
      }
      .play-btn {
        width: 76px;
        height: 76px;
        border-radius: 38px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -43px;
        margin-top: -89px;
        cursor: pointer;
      }
    }
    .goodplay {
      position: relative;
      .image {
        width: 480px;
        height: 312px;
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 480px;
        height: 312px;
        background: rgba(100, 23, 166, 1);
        opacity: 0.5;
      }
      .playBtn-detail {
        width: 76px;
        height: 76px;
        margin-left: 30px;
        margin-top: -10px;
        img {
          cursor: pointer;
        }
      }
    }
    .particulars {
      width: 720px;
      // transition: all 0.5s;
      .no-comment {
        height: 120px;
        background-color: rgba(250, 250, 250, 1);
        overflow: hidden;
        .comment-img {
          width: 48px;
          height: 44px;
          margin: 22px auto 13px;
        }
        .comment-text {
          font-size: 14px;
          color: rgba(136, 136, 136, 1);
          width: 159px;
          margin: 0 auto;
        }
      }
      .currentclum {
        padding-left: 20px;
        margin-right: 22px;
        // margin-bottom: 40px;
        h4 {
          font-size: 18px;
          color: #222;
          margin: 18px 0;
          cursor: pointer;
        }
        h4:hover {
          color: #8f4acb;
        }
        .small-title {
          font-size: 14px;
          color: #93999f;
          margin-bottom: 18px;
        }
        p {
          font-size: 14px;
          line-height: 28px;
          color: #222;
          cursor: pointer;
        }
      }
      .comment {
        height: 134px;
        margin-top: 5px;
        padding: 0 40px 10px;
        background-color: #fafafa;
        color: #888;
        h5 {
          line-height: 40px;
          .itemBox-rate {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            margin-left: 20px;
            vertical-align: middle;
          }
        }
        p {
          font-size: 14px;
          color: #888888;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .bordernone {
        border: none;
        padding-top: 0px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 34, 34, 1);
        line-height: 30px;
        padding: 0px 40px;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }
      .study {
        padding: 10px 22px 0 20px;
        // height: 50px;
        // line-height: 42px;
        .coin {
          color: #ff4400;
          font-size: 18px;
          margin-bottom: 10px;
          // padding-left: 20px;
        }
        .mfree {
          color: #222;
        }
        .common-button {
          p.goStudy {
            width: 140px;
            height: 36px;
            line-height: 36px;
            border-radius: 18px;
            border: 1px solid #6417a6;
            overflow: hidden;
            font-size: 0;
            span {
              margin: 0;
              height: 34px;
              text-align: center;
              font-size: 14px;
              color: #6417a6;
              cursor: pointer;
              &.fl {
                width: 88px;
              }
              &.fr {
                width: 50px;
                background-color: #6417a6;
              }
            }
          }
        }
        span {
          font-size: 14px;
          color: #888888;
          // margin-top: 21px;
          display: inline-block;
          &:nth-child(3) {
            width: 140px;
            height: 36px;
            line-height: 36px;
            border: 1px solid #6417a6;
            color: #6417a6;
            text-align: center;
            border-radius: 18px;
            cursor: pointer;
          }
          img {
            width: 14px;
            height: 14px;
            vertical-align: middle;
          }
        }
        div {
          // margin-top: 10px;
        }
        .common-button-half {
          width: 56px;
          height: 40px;
          line-height: 40px;
          background: #6417a6;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          transition: all 300ms;
          span {
            width: 20px;
            height: 20px;
            margin: 10px 0 10px 15px;
            background: url('~assets/images/shopcard.png') no-repeat;
            background-size: contain;
          }
          &:hover {
            background: #8f4acb;
          }
        }
        .common-button-half-right {
          .el-button {
            width: 144px;
            border-radius: 21px;
            line-height: 1.2;
            background-color: rgba(255, 255, 255, 0);
          }
          .el-button--primary {
            color: #6417a6;
            &.is-plain {
              border-color: #6417a6;
            }
            &:hover {
              color: #8f4acb;
              background-color: #fff;
              &.is-plain {
                border-color: #8f4acb;
              }
            }
          }
        }
      }
      .common-button-half {
        img {
          width: 20px !important;
          height: 20px !important;
        }
        .el-button {
          padding: 9px 16px;
          border: 1px #6417a6 solid;
          border-left: none;
        }
      }
      .date {
        color: rgba(136, 136, 136, 1);
        font-size: 14px;
      }
      .time {
        color: rgba(136, 136, 136, 1);
        font-size: 14px;
        margin: 10px 40px;
      }
      .more {
        color: #6417a6;
        font-size: 14px;
        margin: 10px 40px;
        cursor: pointer;
      }
    }
    .particularss {
      width: 510px;
      margin-right: 30px;
      .currentclum {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 34, 34, 1);
        line-height: 0px;
        cursor: pointer;
        .tg {
          color: #ff5f5f;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(255, 95, 95, 1);
          padding-bottom: 20px;
          padding-top: 10px;
        }
        h4 {
          font-size: 18px;
          color: #222;
          height: 54px;
          line-height: 54px;
          margin-bottom: 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        h4:hover {
          color: #8f4acb;
          cursor: pointer;
        }
        .clum {
          height: 25px;
          .coursenum {
            padding: 0;
          }
        }
        .coursenum {
          width: auto;
          line-height: 25px;
          padding-top: 12px;
          cursor: pointer;
          span {
            display: inline-block;
            margin-right: 15px;
          }
        }
        .coins {
          float: right;
          color: #ff5f5f;
          padding-top: 17px;
          font-size: 16px;
          padding-right: 20px;
        }
        .rate {
          padding-top: 14px;
        }
        p {
          font-size: 14px;
          line-height: 30px;
          color: #222;
        }
        span {
          font-size: 14px;
          color: #888888;
          &:nth-child(2) {
            width: 140px;
            height: 36px;
            line-height: 36px; // border: 1px solid #6417a6;
            // color: #6417a6;
            text-align: center;
            border-radius: 18px;
            cursor: pointer;
          }
          img {
            width: 14px;
            height: 14px;
            // vertical-align: middle;
          }
        }
        .itemBox-info {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(176, 174, 184, 1);
          line-height: 0px;
          margin: 0px 0px 0px 15px;
          .itemBox-num {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            padding-left: 8px;
            width: 160px;
            img {
              width: 12px;
              height: 12px;
              margin: 0px 5px;
            }
            .itemBox-rate {
              // display: inline;
              font-size: 12px;
              line-height: 13px;
              float: right;
            }
          }
        }
      }
      .comment {
        height: 134px;
        margin-top: 40px;
        padding: 0 40px 10px;
        background-color: #fafafa;
        color: #888;
        h5 {
          line-height: 40px;
          .itemBox-rate {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            margin-left: 20px;
            vertical-align: middle;
          }
        }
        p {
          font-size: 14px;
          color: #888888;
          line-height: 30px;
        }
      }
      .study {
        // height: 50px;
        // padding: 30px 40px 0;
        padding: 20px 0 0 0;
        border-top: 1px rgba(232, 214, 247, 1) solid; // margin-top: 65px;
        p {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(34, 34, 34, 1);
          line-height: 30px;
          margin-bottom: 20px;
          height: 94px;
          // border: 1px red solid;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          &.soldOut {
            text-decoration: underline;
          }
        }
        h4 {
          float: left;
          color: #222;
          p {
            margin: 0;
            &:first-child {
              font-size: 20px;
            }
            &:last-child {
              font-size: 14px;
            }
          }
        }

        .common-button .is-plain {
          border-radius: 20px;
          border-color: #6417a6;
          color: #6417a6;
          font-weight: 400;
          transition: all 300ms;
          &:hover {
            color: #fff;
            border-color: #8f4acb;
          }
        }
        &.bought {
          .common-button .is-plain {
            margin-top: 30px;
          }
          .lineProgress {
            clear: both;
            width: 100%;
            padding-top: 45px;
            h5 {
              width: 100%;
              line-height: 30px;
              text-align: right;
              font-size: 14px;
              color: #666;
            }
            .el-progress-bar {
              .el-progress-bar__outer {
                height: 14px;
                background-color: #ffdb5f;
              }
              .el-progress-bar__inner {
                background-color: #6417a6;
              }
            }
          }
        }
      }
    }
    &:hover {
      background-color: #fff;
      box-shadow: 0 8px 35px rgba(0, 0, 0, 0.08);
      padding-left: 20px;

      .particulars {
        .currentclum {
          h4 {
            color: #8f4acb;
          }
        }
      }
    }
    .Newtime {
      width: 131px;
      float: right;
      font-size: 22px;
      margin-top: 19px;
      color: #888888;
    }
  }
}
</style>
