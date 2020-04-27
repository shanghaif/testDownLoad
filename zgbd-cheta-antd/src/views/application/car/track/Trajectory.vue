<template>
  <div class="cheta-track-trajectory">
    <a-row>
      <a-col :span="5">
        <div>
          <a-calendar :fullscreen="false" :disabledDate="disabledDate" @select="selectChange"/>
        </div>
      </a-col>
      <a-col :span="19" class="cheta-border-right cheta-space20">
        <div class="cheta-border-bottom cheta-box-flex cheta-flex-style">
          <div class="cheta-font-height32"><a-checkbox class="cheta-pr-10"></a-checkbox><span class="cheta-font18 cheta-fontb-style cheta-font cheta-pr30">NO.{{item.title}} </span><span class="cheta-pl-20"><span class="cheta-high-speed">最高速度：</span>{{ highSpeed }} km / h</span></div>
          <div class="cheta-block close cheta-event cheta-color" style="">
            <span class="cheta-ml-10" @click="returnList">返回</span>
          </div>
        </div>
        <div>
          <a-row class="cheta-plt-20 cheta-font-style" v-if="item.startDate" :gutter="16">
            <a-col  :span="10" :xs="24" :sm="12" :md="10" :xl="10">
              <a-steps direction="vertical" :current="1">
                <a-step status="finish" title="">
                  <div slot="description" :class="`clearfix cheta-floatl { device }`">
                    <div class="cheta-floatl">起点：</div>
                    <div class="cheta-track-time">
                      <span>{{moment(item.startDate).format("YYYY-MM-DD")}}</span>
                      <p> {{moment(item.startDate).format("HH:mm:ss")}}</p>
                    </div>
                    <div class="cheta-address cheta-font-ellipsis2" :title="startAddress">{{ startAddress }}</div>
                  </div>

                  <div slot="icon" class="cheta-floatl">
                    <i class="iconfont icon-qidian1 start"></i>
                  </div>
                </a-step>
                <a-step status="finish" title="">
                  <div slot="description" class="clearfix cheta-floatl">
                    <div class="cheta-floatl">终点：</div>
                    <div class="cheta-track-time">
                      <span>{{moment(item.endDate).format("YYYY-MM-DD")}}</span>
                      <p> {{moment(item.endDate).format("HH:mm:ss")}}</p>
                    </div>
                    <div class="cheta-address cheta-font-ellipsis2" :title="endAddress">{{ endAddress }}</div>
                  </div>
                  <div slot="icon" class="cheta-floatl">
                    <i class="iconfont icon-dingwei1 end"></i>
                  </div>
                </a-step>
              </a-steps>
            </a-col>
            <!--<a-col :span="6" :xs="24" :sm="12" :md="6" :xl="6">-->
            <!--<div class="cheta-address cheta-font-ellipsis2" :title="startAddress">{{ startAddress }}</div>-->
            <!--<div class="cheta-address cheta-font-ellipsis2" :title="endAddress">{{ endAddress }}</div>-->
            <!--</a-col>-->
            <a-col :span="14" :xs="24" :sm="12" :md="14" :xl="14">
              <div class="cheta-block clearfix">
                <ul style="float: left">
                  <li><i class="iconfont icon-chaosu cheta-color "></i><span>超速：未计算</span></li>
                  <li><i class="iconfont icon-jichache cheta-color"></i><span>急刹车：未计算</span></li>
                  <li><i class="iconfont icon-zanting cheta-color"></i><span>熄火：未计算</span></li>
                  <li><i class="iconfont icon-guiji cheta-color"></i><span>轨迹：未计算</span></li>
                  <li><i class="iconfont icon-licheng cheta-color"></i><span>里程：未计算</span></li>
                  <li><i class="iconfont icon-haoyouliang cheta-color"></i><span>耗油：未计算</span></li>
                </ul>
              </div>
            </a-col>
          </a-row>
        </div>
        <div>
          <a-col class="cheta-positionr">
            <div class="cheta-plt-50 total">
              <span class="cheta-dash cheta-positiona dash"></span>
              <div class="cheta-positionr cheta-mlr-20 road">
                <div :class="`cheta-positiona cheta-badge badge-first ${startPoint ? '' : 'cheta-hide'}`">
                </div>
                <a-progress class="cheta-positiona" :percent="ratio" :showInfo="false" />
                <i class="cheta-positiona cheta-car-img" @mousedown.prevent="move($event)" v-for="(v,k) in carList" :key="k" :id="'car' + k" :style="'left: calc(' + ratio + '% - 60px)'">
                  <span class="cheta-positiona cheta-car-style cheta-font32 cheta-pr-10 cheta-pl-36 cheta-space10 cheta-location location">{{ v.address }}</span>
                  <span class="cheta-positiona cheta-car-style cheta-font32 cheta-pr-10 cheta-pl-36 cheta-space10 cheta-time">{{ moment(v.time).format("HH:mm:ss") }}</span>
                </i>
              </div>
            </div>
          </a-col>
        </div>
        <div class="cheta-mb-10">
          <a-col>
            <div class="cheta-font-align cheta-events cheta-mt-10">
              <i :style="{visibility:isPlay ? 'visible' : 'hidden'}" class="iconfont icon-shuaxin1 cheta-font28 cheta-m-10 cheta-color" @click="trackReload"></i>
              <a-icon type="zoom-out" class="cheta-m-10 cheta-font28 cheta-color" @click="trackSpeedCut"/>
              <i v-if="!isStart" class="iconfont icon-zanting1 cheta-m-10 cheta-font33 cheta-color" @click="trackStart"></i>
              <i v-else-if="isStart && !isPlay" class="iconfont icon-zanting cheta-m-10 cheta-font33 cheta-color" @click="trackStop"></i>
              <i v-else class="iconfont icon-zanting1 cheta-m-10 cheta-font33 cheta-color" @click="trackPlay"></i>
              <a-icon type="zoom-in" class="cheta-m-10 cheta-font28 cheta-color" @click="trackSpeedAdd"/>
              <span class="cheta-font22 cheta-m-10">{{ Math.ceil((19-zoom)/3) }}</span>
            </div>
          </a-col>
  </div>
      </a-col>
      <!--<a-col :span="4" class="right">-->
      <!--</a-col>-->
    </a-row>
  </div>
</template>
<script>
  import moment from 'moment'
  import {getAction,postAction,httpAction} from '@/api/manage'
  import MapUtil from './modules/MapUtil'
  import { trackIndex } from '@/views/application/car/api/router'
  import { mixinDevice } from '@/utils/mixin.js'
  export default {
    name: 'Trajectory',
    // components: { Play },
    data () {
      return {
        data: '',
        carList: [],
        carHistoryList: [],
        address: '海珠区',
        time: '',
        isPlay: false,
        isStart: false,
        gpsData: [],
        ratio: 0,
        date: moment('2019-09-01'),
        MapUtil: MapUtil,
        index: 0,
        zoom:18,
        startAddress:'',
        endAddress:'',
        dateValue: [],
        item:{},
        startPoint:false,
        highSpeed: '0'

      }
    },
    props:{
      dates:{
        type: Object,
        default: () => {}
      }
    },
    mixins: [mixinDevice],
    created () {
      var date = moment().format('YYYY-MM')
      getAction('/application/car/gps/getAnalysisMonthGps',{date: date,id: this.$route.params.id}).then(res=>{
        var $this = this
        var date = [];
        res.result.forEach(item => date.push(moment(item.days)))
        $this.date = date;
      })

    },
    methods:{
      moment,
      getAddress () {
        var that = this
        this.MapUtil.getAddress(this.item.startLng, this.item.startLat,function(geo){
          that.startAddress = geo.formattedAddress
        })
        this.MapUtil.getAddress(this.item.endLng,this.item.endLat,function(geo){
          that.endAddress = geo.formattedAddress
        })
      },
      selectChange(value) {
        var startDate = value.format("YYYY-MM-DD 00:00:00")
        var endDate = value.format("YYYY-MM-DD 23:59:59")
        this.dateValue = [startDate, endDate]
        this.$parent.$refs.map.destroy()
        this.$parent.$refs.map.getTrajectoryData();
      },
      move(e) {
        if(!e.target.attributes['class'].nodeValue.includes('location')){
          // this.trackStop()
          let odiv = e.target        //获取目标元素
          let road = document.querySelector('.road').offsetWidth
          //算出鼠标相对元素的位置
          let disX = e.clientX - odiv.offsetLeft
          var carWidth = odiv.offsetWidth;
          var that = this;
          that.trackStop();
          document.onmousemove = (e) => {
            //鼠标按下并移动的事件
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX + 60
            if (left >= 0 && (left - 60) <= road - carWidth) {
              odiv.style.left = left + 'px'
              // 进度条
              let index = Math.floor(left/road * that.gpsData.length);
              that.moveByIndex(index)
              that.$parent.$refs.map.trackStart(index)
              that.isPlay = true
              that.trackStop();
            }
          }
          document.onmouseup = (e) => {
            document.onmousemove = null
            document.onmouseup = null
          }
        }


      },
      moveByIndex (index) {
        this.ratio = index / this.gpsData.length * 100;
        if (this.index != index) {
          this.index = index;
          var gps = this.gpsData[index];
          var that = this;
          var refMap = this.$parent.$refs.map;
          refMap.setCenter(gps.lo, gps.la);
          that.carList[0].time = gps.gt
          this.MapUtil.getAddress(gps.lo, gps.la, function(geo){
            that.carList[0].address = geo.formattedAddress
          })
        }
      },
      trackReload (){
        this.startPoint = false
        this.isPlay = true
        this.isStart = true
        this.trackStart()
        this.moveByIndex(0);
        var refMap = this.$parent.$refs.map;
        refMap.trackPause()
        // this.trackStart()

      },
      trackSpeedCut (){
        var refMap = this.$parent.$refs.map;
        if (this.zoom < 17) {
          this.zoom = this.zoom + 3
          refMap.setSpeed(this.zoom)
        }

      },
      trackSpeed (zoom) {
        var refMap = this.$parent.$refs.map;
        this.zoom = zoom;
        refMap.setSpeed(this.zoom)
      },
      trackStart () {
        this.isStart = true
        var refMap = this.$parent.$refs.map;
        refMap.trackStart()
        this.trackSpeed (18)
      },
      trackPlay (){
        this.startPoint = true
        this.isStart = true
        this.isPlay = false
        var refMap = this.$parent.$refs.map;
        refMap.trackResume()
        this.trackSpeed (18)
      },
      trackStop (){
        var refMap = this.$parent.$refs.map;
        this.isPlay = true
        refMap.trackPause()
      },
      trackSpeedAdd (){
        var refMap = this.$parent.$refs.map;
        if (this.zoom > 5) {
          this.zoom = this.zoom -3
          refMap.setSpeed(this.zoom)
        }
      },

      getSeconds (date) {
        var hourNum = parseInt(date.format('HH')) * 60 * 60
        var minuteNum = parseInt(date.format('mm')) * 60
        var secondsNum = parseInt(date.format('ss'))
        return hourNum + minuteNum + secondsNum
      },
      //加载
      loadTrack () {
        var refMap = this.$parent.$refs.map;
        this.gpsData = refMap.gpsData
        var data = this.gpsData;
        var spreedArr = [];
        this.gpsData.forEach((item, index) => {
          var sp = parseInt(item.sp);
          if (sp) {
            spreedArr.push(sp)
          }
        })
        this.highSpeed = Math.max.apply(null,spreedArr);
        if (data.length > 0){
          var carFirst = data[0]
          var start = this.getSeconds(moment(carFirst.gt, 'YYYY-MM-DD HH:mm:ss'));
          var $this = this
          refMap.getAddress(carFirst.lo,carFirst.la,function(geo){
            $this.carList = [{ time: carFirst.gt,  ratio:  start / (24*60*60) ,address: geo.formattedAddress}]
          })
        }
      },

      disabledDate (current) {
        // return current && current < moment().endOf('day');
        var flag = true
        this.date.forEach(item => {
          if (item.format('YYYY-MM-DD') == current.format('YYYY-MM-DD')) {
            flag = false
          }
        })
        return flag
      },
      returnList () {
        var refMap = this.$parent.$refs.map;
        refMap.destroy()
        // var routeParents = this.$route.matched[this.$route.matched.length - 1].parent.name
        this.$router.go(-1)

        // trackIndex(this.$router)
      },
      setZoom (zoom) {
        // if(Math.ceil((19-zoom)/3))
        this.zoom = zoom;
      },
      getDate(){
        if (this.dateValue.length>0){
          return { startDate: this.dateValue[0], endDate: this.dateValue[1] }
        } else if (this.date.str) {
          return { startDate: this.date.str[0].format('YYYY-MM-DD HH:mm:ss'), endDate: this.date.str[1].format('YYYY-MM-DD HH:mm:ss') }
        }
        return null;
      },
      setItem(item){
        this.item = item;
        this.getAddress()
      },

    }
  }
</script>
<style lang="less">
  .cheta-track-trajectory {
    .ant-fullcalendar-header {
      padding: 6px 16px 6px 0!important;
      /*border-bottom: 0.3px solid rgba(240, 242, 245, 1)!important;*/
      border-bottom: 0.3px solid #F0F2F5!important;
      height: 36px!important;
    }
    .ant-fullcalendar-header .ant-radio-group {
      display: none!important;
    }
    .ant-steps-vertical > .ant-steps-item > .ant-steps-item-tail {
      left: 8px!important;
    }
    .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
      line-height: 17px!important;
    }
    .cheta-badge{
      background:#1890ff!important;
    }
    .ant-steps-item-description .cheta-address {
      color: #333!important;
    }
    /*.ant-fullcalendar-selected-day .ant-fullcalendar-value, .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value {*/
      /*color: #fff;*/
      /*background: #1CC09F;*/
    /*}*/
    /**/
  /*.ant-fullcalendar-today .ant-fullcalendar-value, .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value {*/
    /*-webkit-box-shadow: 0 0 0 1px #1CC09F inset;*/
    /*box-shadow: 0 0 0 1px #1CC09F inset;*/
  /*}*/

  }
</style>
<style lang="less" scoped>
  .road{
    height: 8px;
    background: #E8E8E8;
  }
  .badge-first{
    left: 0;
    top: 0px;
    z-index: 333;
  }
  .road .badge{
    left: 0;
    top: 0px;
    z-index: 333;
  }
  .ant-progress{
    left: 0;
    top: -9px;
  }
  .dash{
    left: 0;
    top: 54px;

  }
  .road i{
    top:-32px;
  }
  .road i .location{
    top: -40px;
    height: 32px;
    color: #333;

  }
  .road i .time{
    top: 45px;
    height: 22px;
    color: #555;
  }
  .close{
    line-height: 36px;
  }

  ul li{
    width: 148px;
    margin: 0  0 0 47px;
    /*border:1px solid blue;*/
    min-height: 48px;
    float: left;
    line-height: 14px;
  }
  ul li span{
    padding-left: 5px;
  }
  li i{
    font-size:20px;
  }

  .cheta-car-img{width: 60px;height: 32px;background: url(~@/assets/image/carteam/car.png) no-repeat;}
  .cheta-location{background: #fff url(~@/assets/image/carteam/location.png) no-repeat 10px center;border: 1px solid rgba(232,232,232,1);}
  .cheta-time{
    top:42px;
    left: -36px;
  }
  .cheta-high-speed {
    font-weight: bold;
  }
  .cheta-address{
    height: 48px;
  }
  .cheta-hide{
    display: none;
  }
  .desktop{
    .cheta-track-time {
      float: left;

    }
    .cheta-address{
      margin-left: 150px;
    }
  }
</style>