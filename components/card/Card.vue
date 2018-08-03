<template>
  <div>
    <div class="card-category profile">
      <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
        <el-card shadow="never" body-style="padding: 0;" :class="['itemBox',{'learn':config.mask}]" @click.native="selectCid2(card,index)">
          <div class="new-style" v-if="config.new === 'true'">
            <img :src="newTag" alt="">
          </div>
          <!-- @click="goLink('course/coursedetail')" -->
          <div class="mask-style" @click="openDetail()">
            <img v-if="!config.mask" :src="jinImg" alt="" class="jin-style">
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
            <el-button v-if="card.percent < 1&&!card.overtime" type="primary" plain @click="goToPlay(card)">开始学习</el-button>
            <el-button v-if="card.expire_day < 1&&card.overtime" type="primary" plain @click="goShoppingCart(card)">
              <span>
                加入购物车
              </span>
            </el-button>
            <el-button v-if="card.percent > 0&&!card.overtime" type="primary" plain @click="goToPlay(card)">
              <span>继续学习</span>
            </el-button>
          </div>
          <el-row>
            <!-- 名字 -->
            <div class="item">
              <p :class="['itemBox-name','itemBoxTitle',{'itemBoxTitle':config.card === 'home'?true:false}]" @click="openDetail()">
                <span :class="{'title':config.card === 'home'?true:false}">{{card.title}}</span>
                <span v-if="config.card === 'home'" class="deputyTitle fl">{{card.deputy_title}}</span>
                <!-- 和副标题在一行的金额 -->
                <!-- <span v-if="config.card === 'home'&&card.is_free == '1'" class="deputyTitle fr" style="padding-right:15px;">￥{{card.present_price}}</span> -->
                <!-- <span v-if="card.is_free === '2'&&config.card!=='overtime'&&config.card!=='already'&&!config.mask" class="deputyTitle fr" style="padding-right:15px;">免费</span> -->
              </p>
              <p class="itemBox-info">
                <span v-if="config.card === 'home'">
                  {{card.study_time}}学时
                </span>
                <span class="itemBox-num" v-if="config.card === 'home'">
                  <img :src="numSrc" alt="">
                  <span>{{card.study_number}}</span>
                </span>
                <span class="" style="display:inline-block;float:right;padding-right:15px;">
                  <el-rate disabled v-model="card.score" class="itemBox-rate fr" v-if="config.card === 'home'"></el-rate>
                </span>
              </p>
            </div>
            <!-- 作者和头衔    金额 -->
            <div class="line-wrap" v-if="config.card === 'home'">
              <div class="line-center">
                <p class="price freePrise" v-if="config.card === 'home'&&card.is_free == '1'">￥{{card.present_price}}</p>
                <p class="freePrise" v-if="card.is_free === '2'&&config.card!=='overtime'&&config.card!=='already'&&!config.mask">免费</p>
              </div>
            </div>
            <!-- 学习进度 -->
            <div class="line-wraps" v-if="config.card==='learning' ">
              <div class="line-centers ">
                <!-- {{typeof(card.percent)}} -->
                <span class="studyPercent">已学习{{card.percent}}%</span>
                <span class="studyIsFree" v-if="card.is_free === '1'">剩余{{card.expire_day}}天</span>
                <el-progress v-if="card.percent>0" :percentage="card.percent "></el-progress>
              </div>
            </div>
            <div v-if="config.card==='already' ">
              <div class="line-centers ">
                <div class="already">已完成100%</div>
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
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
