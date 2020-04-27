<template>
  <div class="cheta-width-full cheta-video">

    <!-- 博云 视频监控 -->
    <a-button @click="open(1)">播放1</a-button>
    <a-button @click="open(2)">播放2</a-button>
    <a-button @click="open(3)">播放3</a-button>
    <a-button @click="open(4)">播放4</a-button>
    <div id="byallmap" class="cheta-width-full cheta-height-full" v-show="videoShow">
      <div :id="`inner-container${videoConfig.terminalNumber}${videoConfig.channel}`" class="cheta-width-full cheta-height-full"></div>
    </div>
  </div>
</template>
<script>
  // hisiOnline = 0
  // var player = null, playList = [];

  export default {
    name: 'Guide',
    props: {
      videoConfig: {
        type: Object,
        default: () => {
          return {
            terminalNumber: '13301929736',
            channel: 2,
          }
        }
      },
      player: {
        type: Object
      }
    },
    data () {
      return {
        videoShow: false
      }
    },
    created () {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'http://localhost:3000/js/byskplayer.js';
      var that = this;
      s.onload = () => {
        that.loadPlay();
        s.onload = null;
      };
      document.body.appendChild(s);
    },
    methods: {
      loadPlay () {
        // 视频服务
        var baseURL = 'ws://47.107.123.31:8899/'

        // 客户代码
        var userkey = '19ac88da-33bc-4ce9-a3a1-63ec2bc8d2ff';
        var userId='apidemo';


        // if (!this.player) {
          this.player = new byskplayer({
            id: 'inner-container' + this.videoConfig.terminalNumber + this.videoConfig.channel,
            isReal: true,
            isRecord: false,
            userId: userId,
            userkey:userkey,
            baseURL:baseURL
          });
          this.player.poster = 'http://localhost:3000/image/video/carbackground.png'
          this.player.setPlayerNum(1);
        // }
      },
      open: function(){
        var terminalNumber = this.videoConfig.terminalNumber;
        var channel = this.videoConfig.channel;

        this.videoShow = true;

        const channelArr = [channel]
        const tidObj = this.player.allocate(channelArr.length) //根据通道数申请

        let params = {
          device: terminalNumber, //终端号
          channel: channel, //通道号 （1~8）
          protocolType: 1, //协议类型，1：GF-1078，2：GA系列
          plate: '测试车辆', //车牌号（可选）
          vehicleId: '4321', //车辆Id（可选）
          groupId: '1', //车辆所属车组ID（可选）
        }
        for (let i = 0; i < channelArr.length; i++) {
          const tid = tidObj.ids[i]
          const param = {
            ...params,
            channel: channelArr[i]
          }
          this.player.real.open(tid, param, res => {
            console.log(res);
          });
        }
      }
    },
  }
</script>