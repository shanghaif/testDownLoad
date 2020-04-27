<template>
  <div class="cheta-map-content" style="height: calc(100vh - 75px);">
    <a-row class="cheta-map-top">
      <a-col span="12">
        <div
          class="cheta-color cheta-space5 cheta-plr-10 cheta-block cheta-mltr-10 cheta-map-tool" @click="returnList">
          <i class="iconfont icon-shipin2 cheta-color"></i>视频列表
        </div>
        <div class="cheta-block" v-if="showModel === 'mapTrajectoryShow'">
          <a-date-picker @change="change"/>
        </div>
      </a-col>
      <a-col :span="9" v-if="showModel=== 'mapTrajectoryShow'"><div class="cheta-mt-10 cheta-carnum">
        <i class="iconfont icon-che cheta-icon-size16"></i> <span class="cheta-font16-yh cheta-font-color-rgb51 cheta-pl-10">{{ videoConfig.title }}</span>
      </div></a-col>
      <a-col span="3">
        <div class="cheta-m-t5 cheta-mlr-10 cheta-space5 cheta-block cheta-floatl" v-if="showModel=== 'mapTrajectoryShow'">
          <div class="cheta-block cheta-jinbao">
            <a-badge :count="99">
              <i class="iconfont icon-baojing cheta-baojing-color cheta-icon-size24"></i>
            </a-badge>
          </div>
          <span class="cheta-baojing-color">预警</span>
        </div>
        <div class="cheta-mltr-10 cheta-space5 cheta-block cheta-floatr">
          <i class="iconfont icon-shezhi1 cheta-color"></i><span>设置</span>
        </div>
      </a-col>
    </a-row>
    <div :class="`cheta-box-flex ${showModel === 'mapTrajectoryShow' ? 'cheta-height-full200' : 'cheta-height-full50'} cheta-width-full`">
      <div :style="{width: isShowByType('left') ? '220px' : '0px'}" :class="`cheta-left${!isShowByType('left') ? ' cheta-res-hide' : ''} `">
        <a-tabs defaultActiveKey="1" class="cheta-white cheta-block cheta-map-left cheta-height-full" :style="{width: isShowByType('left') ? '220px' : '0px'}">
          <a-tab-pane key="1">
              <span slot="tab">
                <span>全部</span>
              </span>
            <CarList @carCheckShow="carCheckShow" style="overflow-y: scroll"></CarList>
          </a-tab-pane>
          <a-tab-pane key="2">
              <span slot="tab">
                车载
              </span>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="cheta-width-full" :class="isShowByType('map')  ? ' cheta-pt-5 cheta-box-flex' :  ' cheta-p-10' + ' cheta-flex1 ' + 'cheta-overflow'">
        <!-- 车辆 video 列表 -->
        <Video v-if="isShowByType('video')" class="cheta-height-full" @carCheckShow="carCheckShow"></Video>
        <!-- 车辆 video 通道 -->
        <div v-if="isShowByType('map')" class="cheta-positionr cheta-width-full cheta-height-full cheta-big-move">
          <div v-if="!mapIconShow" :class="`${bigShow ? 'cheta-video-small cheta-zindex8 ' : ' cheta-video-big '}`">
            <Map ref="map" :class="`${bigShow ? 'cheta-video-small ' : '' + 'cheta-positionr'}`" @bigMapShow="bigMapShow"></Map>
            <div class="cheta-video-tool" @mousedown.prevent="move($event)" style=""><i class="iconfont icon-suoxiao- cheta-icon-size24 cheta-icon-heihgt16" @click="smallerMap"></i><i class="iconfont icon-fangda cheta-icon-size24 cheta-icon-heihgt16" @click="bigMapShow()"></i></div>
          </div>
          <div v-else-if="mapIconShow" class="cheta-positiona-rb5 cheta-gd-size"><img src="/image/workplace/gaode.png" @click="mapSmallShow"/></div>
          <div :class="`${ bigShow ? 'cheta-video-big' : 'cheta-video-small' }`">
            <VideoItem ref="videoItem" :videoConfig="videoConfig" :channel="videoConfig.channels[0]" :begin="begin" :end="end" :isPlay="true" :class="bigShow ? 'cheta-video-big' :'cheta-video-small'"/>
            <span class="cheta-positiona-tl15 cheta-font-color-white">
                {{ videoConfig.channels[0] }}/{{ videoConfig.channels.length }}
              </span>
            <div class="cheta-video-tool cheta-zindex10" @mousedown.prevent="move($event)"><i class="iconfont icon-suoxiao- cheta-icon-size24 cheta-icon-heihgt16"></i><i class="iconfont icon-fangda cheta-icon-size24 cheta-icon-heihgt16" @click="bigCar()"></i></div>
          </div>
        </div>
        <div v-if="isShowByType('map')" class="cheta-positionr">
          <CarShow
            v-show="carShow"
            class="cheta-height-full cheta-p-5"
            style="overflow-y: scroll"
            :videoConfig="videoConfig"
            :channel="videoConfig.channels[0]"></CarShow>
          <div class="cheta-positiona cheta-icon cheta-event" @click="carToggle" style="z-index:11;">
            <i v-if="carShow" class="iconfont icon-right cheta-icon-size24"></i>
            <i v-if="!carShow" class="iconfont icon-zuobian cheta-icon-size24"></i>
          </div>
        </div>
      </div>
    </div>
    <Trajectory v-if="isShowByType('trajectory')" class="cheta-pt-24"></Trajectory>
  </div>
</template>
<script>
  import Map from './Map'
  import Video from './modules/Video'
  import moment from 'moment';
  import { postAction } from '@/api/manage'
  import CarList from './CarList'
  import Trajectory from './Trajectory'
  import CarShow from './CarShow'
  import VideoItem from './modules/VideoItem'

  export default {
    components: { VideoItem, Trajectory,Video, Map,CarList,CarShow },
    data () {
      return {
        showModel: 'leftVideoShow',
        carShow: true,
        bigShow: true,
        videoConfig: {terminalNumber: '13301929783', channels: [1, 2, 3, 4], player: {}},
        mapIconShow: false,
        date: [],
        begin: '',
        endtime: '',
      }
    },
    methods:{
      moment,
      isShowByType (type) {
        if (type == 'video') {
          return this.showModel === 'leftVideoShow'
        }
        else if (type == 'left') {
          return this.showModel === 'leftVideoShow' || this.showModel === 'leftListShow'
        }
        else if (type === 'list') {
          return this.showModel === 'leftListShow'
        }
        else if (type === 'map' || type === 'trajectory') {
          return this.showModel === 'mapTrajectoryShow'
        }
      },

      carCheckShow (item) {
        this.videoConfig = item
        this.showModel = 'mapTrajectoryShow'
        this.bigShow = true
        // this.$refs.videoItem.videoPlay(this.videoConfig.terminalNumber, this.videoConfig.channel)
        // debugger
      },
      bigMapShow () {
        this.bigShow = false
      },
      carToggle () {
        this.carShow = !this.carShow
      },
      bigCar () {
        this.bigShow = true
        this.$refs.map.closeWindow()
      },
      smallerMap (){
        this.mapIconShow = true
      },
      mapSmallShow () {
        this.mapIconShow = false
      },
      returnList () {
        this.showModel = 'leftVideoShow'
      },
      changeVideo (videoConfig) {
        this.videoConfig = videoConfig;
      },
      move(e) {
        let item = e.target.parentElement        //获取目标元素
        let width = document.querySelector('.cheta-big-move').offsetWidth
        let height = document.querySelector('.cheta-big-move').offsetHeight
        //算出鼠标相对元素的位置
        let disX = e.clientX - item.offsetLeft
        let disY = e.clientY - item.offsetTop
        var mapWidth = item.offsetWidth;
        var mapHeight = item.offsetHeight;
        document.onmousemove = (e) => {       //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX
          let top = e.clientY - disY
          if (left >= 0 && left <= width - mapWidth ) {
            item.style.left = left + 'px'
          }
          if (top >= 0 && top <= height - mapHeight ) {
            item.style.top = top + 'px'
          }

        }
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      },
      change (date) {
        this.bigShow = true
        this.date[0] = moment(date.format("YYYY-MM-DD 00:00:00"))
        this.date[1] = moment(date.format("YYYY-MM-DD 11:59:59"))
        var begintime = this.date[0]
        var endtime = this.date[1]
        this.$refs.videoItem.loadRecord(Math.round(begintime._d.getTime()/1000),Math.round(endtime._d.getTime()/1000))
        this.begin = begintime // begintime.format("HH:mm:ss")
        this.end = endtime// endtime.format("HH:mm:ss")
      },
    },
  }

</script>
<style lang="less">
  .cheta-map-content .ant-tree > li:last-child {
    height: calc(100vh - 180px)!important;
    overflow-y: scroll!important;
  }
  .cheta-map-left{
    position: fixed;
    z-index: 1;
  }

  .cheta-res-hide{
    display: none;
  }

</style>
<style lang="less" scoped>
  .cheta-map-content{
    background: #F0F2F5;
  }
  .cheta-map-top{width: 100%;background-color: white;box-shadow:0px 1px 6px 0px rgba(236,236,236,1);}
  .cheta-map-tool{cursor: pointer;height: 40px;line-height: 25px;}
  .cheta-map-left{transition: all 0.2s;margin-top: 3px;
  }
  /*overflow-y: scroll;*/
  .cheta-map-bottom{transition: all 0.2s;}
  .cheta-height-full50{height:calc(100% - 50px);}
  .cheta-height-full200{height:calc(100% - 200px);}
  /*.cheta-height-map{height:calc(100% - 180px)}*/
  .cheta-icon{width: 20px;height: 40px;background: white;text-align: center;top: 50%;left: -20px;line-height: 34px;}
  /*.icon-fangda{visibility: visible}*/
  /*.big-img:hover .icon-fangda{visibility: visible!important;}*/
  /*.small-map:hover .icon-fangda{visibility: visible!important;}*/
  .cheta-visible-hidden{visibility: visible;}
  /*.cheta-icon-hover:hover .icon-fangda{visibility: visible}*/
  .cheta-jinbao{width: 40px;background: white;border-radius: 5px}
  .cheta-baojing-color{color: #FF9933;}
  .cheta-width{width:24px;height:36px;}
  .cheta-positiona-tr0-zindex{top:0;position:absolute;z-index: 1000;}
  .cheta-overflow{overflow-y: scroll}

  .cheta-positiona-b30r{bottom: 30px; right: 0; position: absolute;}
  /*.cheta-small-map-size{width:470px;height: 278px;z-index:8;}*/
  .cheta-video-small{width:470px;height: 278px;bottom: 0; right: 0;position: absolute;cursor: pointer;}
  .cheta-zindex8{z-index:8;}
  /*工具栏的显示隐藏*/
  .cheta-video-small:hover .cheta-video-tool{visibility: visible;transition: opacity .3s ease 0s;opacity: 0.8;}
  .cheta-positiona-rb5{position:absolute;right:5px;bottom: 24px;}
  .cheta-gd-size{width:24px;height:33px;line-height:24px;z-index:10;}
  /*.cheta-position-clear{top:0px!important;left:0px!important;}*/
  .cheta-zindex10{z-index:10;}
  .cheta-video-big{width:100%;height:100%;z-index:1;top:0px!important;left:0px!important;position:relative;}
  .cheta-video-tool{ width: 100%;height: 24px;background: white;text-align: right;visibility: hidden;display: inline-block;position:absolute;top:0;cursor:move;}
  .cheta-carnum{height:40px;line-height: 25px;}
</style>
