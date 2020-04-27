<template>
  <div class="cheta-positionr cheta-video-slider">
    <div id="byallmap" class="cheta-width-full cheta-height-full cheta-positiona" v-show="videoShow || isPlay">
      <div v-show="isReal" :id="`inner-container${videoConfig.terminalNumber}${channel}1`" class="cheta-width-full cheta-height-full cheta-event video-real"/>
      <div v-show="!isReal" :id="`inner-container${videoConfig.terminalNumber}${channel}2`" class="cheta-width-full cheta-height-full cheta-event video-record"/>
      <div class="cheta-width-full cheta-positiona-b47 cheta-slider-box" v-if="begin">
        <span class="cheta-play-font-start" style="letter-spacing: 1px"><span>{{ begin.format("HH:mm:ss") }}</span></span>
        <span class="cheta-play-font-end" style="letter-spacing: 1px"><span>{{ end.format("HH:mm:ss") }}</span></span>
        <div  class="cheta-slider-inner cheta-positionr" @mouseover="timeShow($event)">
          <!--@mouseover="timeShow()" @mouseleave="timeHidden"-->
          <a-slider id="test" v-model="defaultLift" class="cheta-positionr" :tipFormatter="afterChange">
          </a-slider>
          {{ defaultLift }}
          <div class="cheta-line cheta-positiona-t15" v-for="item in dateList" :style="{left: item.left*0.8 + '%',width: item.width + '%' }"></div>
          <div class="cheta-positiona-t0 cheta-hover-line cheta-time-content" :style="`left: ${ targetLeft }`">
            <div class="cheta-hover-tooltip">{{ time }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cheta-video-pre img">
      <div class="cheta-video-second cheta-flex-center">
        <div class="cheta-car-img" @click="videoPlay">
          <i class="iconfont icon-zanting1 cheta-font46"/>
        </div>
      </div>
      <div class="cheta-video-thired">
        <p class="cheta-font22-yh cheta-font-color-white">{{ videoConfig.title }}</p>
        <p class="cheta-font14 cheta-font-color-white">设备：<span>开</span></p>
        <div><i class="iconfont icon-che cheta-icon-size18 cheta-icon-color"></i> <a-slider id="test" :defaultValue="30" /><span class="cheta-ml-10 cheta-font-color-white cheta-font14-A">00:31</span></div>
      </div>
      <img src="/image/video/carbackground.png" class="cheta-width-full"/>
    </div>
  </div>

</template>

<script>
  // 视频服务
  var baseURL = 'ws://47.107.123.31:8899/'
  // 客户代码
  var userkey = '19ac88da-33bc-4ce9-a3a1-63ec2bc8d2ff';
  // var userkey = '253d64cd-c657-44bf-989a-3741500e8718'
  var userId='apidemo';

  var VideoReal = function(app){
    var player = null;
    // 注册视频组件
    this.play = function(){
      player = new byskplayer({
        id: 'inner-container' + app.videoConfig.terminalNumber + app.channel + '1',
        isReal: app.isReal,
        isRecord: !app.isReal,
        userId: userId,
        userkey:userkey,
        baseURL:baseURL
      });
      player.poster = 'http://console.terrybg.com/image/video/carbackground.png'
      player.setPlayerNum(1);
    };
    // 开启视频
    this.open = function(terminalNumber, channel){
      app.videoShow = true;
      let params = {
        device: terminalNumber,
        channel: channel,
        protocolType: 1,
        plate: '测试车辆',
        vehicleId: '4321',
        groupId: '1'
      }
      const tid = player.allocate(1).ids[0]
      const param = { ...params, channel: channel}
      player.real.open(tid, param, res => {});
    }
  };

  var VideoRecord = function(app){
    var player = null;
    // 注册视频组件
    this.play = function(){
      player = new byskplayer({
        id: 'inner-container' + app.videoConfig.terminalNumber + app.channel + '2',
        isReal: app.isReal,
        isRecord: !app.isReal,
        userId: userId,
        userkey: userkey,
        baseURL: baseURL
      });
      player.poster = 'http://console.terrybg.com/image/video/carbackground.png'
      player.setPlayerNum(1);
    };
    // 查询视频
    this.query = function(begintime, endtime){
      $(`#inner-container${app.videoConfig.terminalNumber}${app.channel}1_1`).parents('.byskplayer-layout-wrapper').remove();
      app.videoShow = true;
      let params = {
        // 13302035440
        device: 13301929736, //终端号
        channel: app.channel, //通道号
        protocolType: 1, //协议类型，1：GF-1078，2：GA系列
        begintime: begintime, //开始时间（时间戳，精确至秒）
        endtime: endtime, //结束时间（时间戳，精确至秒）
        alarmSign: 0 //报警类型（目前只支持：0）
      };
      const param = { ...params, channel: app.channel }
      // 获取视频文件列表
      var that = this;
      player.record.query(param, res => {
        if(res.recordfiles.length !==0){
          res.recordfiles.forEach(inner =>{
            var total = endtime - begintime
            var beginratio = ((inner.begintime/1000) - begintime)/total * 100
            var endratio = ((inner.endtime/1000) - begintime)/total * 100
            app.dateList.push({begintime: inner.begintime, endtime: inner.endtime, width: endratio - beginratio, left: beginratio})
          })
          app.defaultLift = app.dateList[0].left * 0.8
          that.open(res.recordfiles[0].begintime, res.recordfiles[0].endtime)
        }
      });
    },
    // 开启视频
    this.open = function(begintime, endtime){
      begintime = Math.round(begintime / 1000)
      endtime = Math.round(endtime / 1000)
      let params = {
        device: 13301929736,
        channel: app.channel,
        protocolType: 1,
        begintime: begintime, //开始时间（时间戳，精确至秒）
        endtime: endtime, //结束时间（时间戳，精确至秒）
        fileName: null,
        plate: '测试车辆',
        vehicleId: '4321',
        groupId: '1'
      };
      if (app.tid) {
        app.$message.error('当前设备正在播放！');
        // this.close();
      } else {
        const tid = player.allocate(1).ids[0]
        app.tid = tid;
      }
      const param = { ...params, channel: app.channel}
      player.record.open(app.tid, param, res => {
        console.log(res);
      });
    }
  }



  import moment from 'moment'
  export default {
    name: "VideoItem",
    props: {
      videoConfig: {
        type: Object
      },
      channel: {
        type: Number
      },
      isPlay: {
        type: Boolean,
        default: false
      },
      begin: {
        type:Object,
      },
      end: {
        type:Object,
      }
    },
    data () {
      return {
        videoShow: false,
        player: {},
        player2: {},
        isReal: true,
        dateList: [],
        tid: '',
        defaultLift:0,
        targetLeft: '0px',
        time: "",
        videoReal: '',
        videoRecord: '',
      }
    },
    mounted () {
      this.loadPlay();
    },
    methods: {
      moment,
      afterChange(value) {
        // var $this = this
        if (!value) {
          return this.begin._d.format("HH:mm:ss");
        }
        var total = this.end._d.getTime()  -  this.begin._d.getTime()
        var currentTime = value / 100 * total
        return this.moment(this.begin._d.getTime() + currentTime).format("HH:mm:ss");
      },
      // 实时
      loadPlay () {
        this.real = new VideoReal(this);
        this.real.play();
        var that = this;
        if (this.isPlay && this.isReal) {
          window.byOpencallBack = function() {
            that.videoPlay();
            window.byOpencallBack = null;
          }
        }
      },
      // 回放
      loadRecord (begintime, endtime) {
        this.isReal = false;
        $('.video-real').remove();
        this.record = new VideoRecord(this);
        this.record.play();
        var that = this;
        window.byOpencallBack = function() {
          setTimeout(function(){
            that.record.query(begintime, endtime);
            window.byOpencallBack = null;
          }, 100)
        }
      },
      videoPlay () {
        this.videoShow = true;
        this.real.open(this.videoConfig.terminalNumber, this.channel);
        this.$emit('videoPlay')
      },
      // 13301929781
      close: function() {
        this.player.record.close(this.tid, {
          device: this.videoConfig.terminalNumber,
          channel: this.channel,
          protocolType: 1
        }, res => {
          console.log(res);
        });
      },
      timeShow (e) {
        var target = e.currentTarget
        var that = this;
        target.onmousemove = (e) => {
          that.targetLeft = e.layerX + 'px'
          console.log(e.clientX)
          var vetio =  e.layerX / e.target.clientWidth
          var total = this.end._d.getTime()  -  this.begin._d.getTime()
          var currentTime = vetio * total
          that.time = this.moment(this.begin._d.getTime() + currentTime).format("HH:mm:ss");
        }
        target.onmouseout = () => {
          document.onmousemove = null
        }
      },
    }
  }
</script>
<style lang="less">
  .cheta-video-slider .ant-slider-handle {
    border: solid 2px white!important;
    background: white;
    z-index: 1!important;
  }
  .cheta-video-slider .ant-slider-track {
    background-color: #2483d5!important;
  }
  .cheta-video-slider .ant-slider-rail {
    background-color: rgba(115,133,159,.5)!important;
  }
  .cheta-video-slider .ant-slider{margin: 0px!important;}
  /*transition: background-color .25s linear,color .05s linear,opacity .25s linear,filter .25s linear,visibility .25s linear,transform .25s linear;*/
</style>
<style lang="less" scoped>
  .icon-zanting1{
    visibility: hidden;
    color: white;
    position: absolute;
    top: 20%;
    left: 35%;
  }
  .img:hover .icon-zanting1{
    visibility: visible;
  }
  .cheta-video-pre{
    position:relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .cheta-video-second{background:url(//static.588ku.com/imgPath/video_listen/images/audiopan.svg) no-repeat center / 80%;
    position: absolute;
    z-index: 1;
    width: 50%;
    height: 100%;
  }
  .cheta-video-thired{position: absolute;
    width: 50%;
    height: 100%;
    left: 50%;
    padding-top: 20%;
  }
  .cheta-car-img{background: url("/image/video/carred1.png");border-radius: 50%;
    width: 150px;
    position: relative;
    height: 150px;}
  .cheta-positiona-b47{ bottom: 47px;z-index: 9;position:absolute;}
  .cheta-positiona-t15{position:absolute;top:15px;}
  .cheta-line{height: 5px;background: #cccccc;margin: -11px 0px;transition: opacity .3s ease 0s;}
  #byallmap:hover .cheta-slider-box{
    visibility: visible;
    opacity: 1;
    transition: visibility .1s,opacity .1s;
    background-color: rgba(43,51,63,.7);

  }
  .cheta-slider-box{
    visibility: visible;
    background-color: rgba(43,51,63,.7);
    height: 40px;
    /*background: #52c41a;*/
  }
  .cheta-slider-inner{width: 80%;margin: 1% 10%;height:12px;}
  .cheta-play-font-start{font-family: Arial;font-size: 14px;color: #ffffff;line-height: 34px;position: absolute;left: 5%;}
  .cheta-play-font-end{font-family: Arial;font-size: 14px;color: #ffffff;line-height: 34px;position: absolute;right: 5%;}
  .cheta-hover-line{border: 0px solid blue;height: 8px;width: 0px;visibility: hidden}
  .cheta-hover-tooltip{
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    margin: 10px;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    position: absolute;
    top: -40px;
    left: -54px;
  }
  .cheta-slider-inner:hover  .cheta-hover-line{visibility: visible}

</style>