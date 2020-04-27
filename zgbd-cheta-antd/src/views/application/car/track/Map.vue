<template>
  <div class="cheta-track" id="container" :style="{width: '100%', height: '100%'}"/>
</template>
<script>
  var thisMap = { map: null,marker: [] }
  import { getAction } from '@/api/manage';
  export default {
    data () {
      return {
        PathSimplifier: {},
        navg0: {},
        // 速度
        speed: 5350,
        zoom:5,
        gpsData: [],
        // paths:[],
        speedZoom: [
          {zoom: 1, speed: 6700},
          {zoom: 2, speed: 6400},
          {zoom: 3, speed: 6100},
          {zoom: 4, speed: 5800},
          {zoom: 5, speed: 5500},
          {zoom: 6, speed: 5200},
          {zoom: 7, speed: 4900},
          {zoom: 8, speed: 4600},
          {zoom: 10, speed: 4000},
          {zoom: 11, speed: 3500},
          {zoom: 14, speed: 1700},
          {zoom: 17, speed: 800},
        ],
        item:{
          startDate: "2020-01-06 07:48:56",
          startLat: "23.180816",
          startLng: "113.326712",
          statusRun: "TRAVEL",
          terminalNum: "14532725384",
          title: "粤A472JJ",
          treeType: "2",
          endDate: "2020-01-06 18:10:47",
          endLat: "23.180800",
          endLng: "113.326712",
          key: "49a1c4b52f7a4c7fb3304845f9dc1f96",
          lat: "23.188034",
          lng: "113.320912"
        },
        pathSimplifierIns: {

        },
        reFresh:true,
      }
    },
    mounted () {
      thisMap.map = new AMap.Map('container', {resizeEnable: true});
      // debugger
      // this.paths = []
      this.getTrajectoryData()

    },
    methods: {
      getTrajectoryData () {
        // http://10.0.0.48:8080/system/application/car/gps/getAnalysisCar
        var date = this.$parent.$refs.trajectory.getDate()
        var param = Object.assign({ id: this.$route.params.id }, date), $this = this;
        getAction('/application/car/gps/getAnalysisCar', param).then(res=>{
          $this.item = res.result;
          $this.init();
          $this.$parent.$refs.trajectory.setItem(res.result)
        })
      },
      init () {
        var $this = this;
        //加载PathSimplifier，loadUI的路径参数为模块名中 'ui/' 之后的部分
        AMapUI.load(['ui/misc/PathSimplifier'], function(PathSimplifier) {
          if (!PathSimplifier.supportCanvas) {
            alert('当前环境不支持 Canvas！');
            return;
          }
          $this.PathSimplifier = PathSimplifier;
          $this.loadTrack();
        });
      },// 100 550
      loadTrack () {
        // 轨迹展示
        var $this = this;

        // 最高速度
        var highSpeed = 0;

        // 平均速度
        var avgSpeed = 0;

        // Math.max.apply(null,arr)
        var spreedArr = [];
        getAction('/application/car/gps/getCarGps?terminalNum=' + this.item.terminalNum + '&startDate=' + this.item.startDate + '&endDate=' + this.item.endDate,{}).then(res => {
          var paths = [];

          if (res.result) {
            $this.gpsData = res.result;
            $this.gpsData.forEach((item, index) => {
              // 轨迹点占比例
              item.ratio = (index + 1) / $this.gpsData.length;
              var path = [item.lo, item.la];
              paths.push(path);

              var sp = parseInt(item.sp);
              if (sp) {
                spreedArr.push(sp)
              }
            })
            // 最大值
            highSpeed = Math.max.apply(null,spreedArr)

            // 平均值
            var result0 = spreedArr.reduce(function(temp,next,index){
              if (index < spreedArr.length-1) {
                return temp + next;
              } else {
                return (temp+next) / spreedArr.length;
              }
            })
            avgSpeed = Math.ceil(result0)
          }
          // thisMap.map.on('zoomend', this.zoomend);
          $this.initTrack(paths);
          $this.$emit('loadTrack');
          // 初始化 zoom、速度
          var zoom = thisMap.map.getZoom();
          var refTrajectory = $this.$parent.$refs.trajectory;
          refTrajectory.setZoom(zoom)
          // 监听 zoom事件
          thisMap.map.on('zoomend', function(ev){
            // 放大
            var zoom = thisMap.map.getZoom()
            refTrajectory.trackSpeed(zoom)
          })
        });
      },
      addMark (title, path) {
        var markerContent = `
              <div class="cheta-map-mark cheta-map-mark-track ${title=='起点' ? 'track-start' : 'track-end'}">
                <div class="cheta-map-mark-inner cheta-map-mark-inner-track ${title=='起点' ? 'track-inner-start' : 'track-inner-end'}">
                  <span class="cheta-map-mark-top">${title}</span><br>
                  <span class="cheta-map-mark-bottom"></span>
                </div>
              </div>
              `;
        var marker = new AMap.Marker({
          position: path,
          content: markerContent,
          offset: new AMap.Pixel(-40, -40)
        });
        thisMap.map.add(marker);
        thisMap.marker.push(marker);
      },
      initTrack (paths) {
        // 起点终点 marker
        thisMap.marker.forEach(item => {
          thisMap.map.remove(item);
        })
        this.addMark('起点', paths[0]);
        this.addMark('终点', paths[paths.length - 1]);
        var $this = this;
        //创建组件实例
        // this.pathSimplifierIns.clearPathNavigators();
        this.pathSimplifierIns = new this.PathSimplifier({
          zIndex: 100,
          map: thisMap.map, //所属的地图实例
          getPath: function(pathData, pathIndex) {
            return pathData.path;
          },
          getHoverTitle: function(pathData, pathIndex, pointIndex) {
            //返回鼠标悬停时显示的信息
            if (pointIndex >= 0) {
              //鼠标悬停在某个轨迹节点上
              return '时间:' + $this.gpsData[pointIndex].gt + '<br>速度：' + $this.gpsData[pointIndex].sp ;
            }
            return '';
          },
          renderOptions: {
            // 轨迹线的样式
            pathLineStyle: {
              strokeStyle: '#1890ff',
              lineWidth: 10,
              dirArrowStyle: true
            },
            keyPointStyle: {
              radius: 1,
              fillStyle: '#1890ff',
              lineWidth: 1,
              strokeStyle: '#eeeeee'
            },
            pathLineHoverStyle: {
              strokeStyle: '#1890ff',
              lineWidth: 10,
              dirArrowStyle: true
            },
            renderAllPointsIfNumberBelow: 1000 //绘制路线节点，如不需要可设置为-1
          }
        });

        //这里构建两条简单的轨迹，仅作示例
        function extend(dst) {
          if (!dst) {
            dst = {};
          }
          var slist = Array.prototype.slice.call(arguments, 1);
          for (var i = 0, len = slist.length; i < len; i++) {
            var source = slist[i];
            if (!source) {
              continue;
            }
            for (var prop in source) {
              if (source.hasOwnProperty(prop)) {
                dst[prop] = source[prop];
              }
            }
          }
          return dst;
        }
        this.pathSimplifierIns.setData([{
          name: '轨迹0',
          path: paths
        }]);
        //创建一个巡航器
        //关联第1条轨迹
        this.navg0 = this.pathSimplifierIns.createPathNavigator(0, {
          loop: false, //循环播放
          speed: this.speed, //巡航速度，单位千米/小时,
          pathNavigatorStyle: extend({}, {
            width: 28,
            height: 52,
            //使用图片
            content: this.PathSimplifier.Render.Canvas.getImageContent('/image/car/绿车（56x28)_wps图片.png', onload, onerror),
            pathLinePassedStyle: {
              lineWidth: 10,
              strokeStyle: '#ccc',
              dirArrowStyle: {
                strokeStyle: '#eeeeee'
              }
            }
          })
        });
        var that = this
        this.navg0.on('move', function(){
          console.log('is move')
          var index = this.getCursor().idx;
          // debugger
          that.$emit('moveByIndex', index)
          // this.setSpeed(this.zoom)
          //平移居中
          var pt=this.getPosition();
          var bs = thisMap.map.getBounds();   //获取可视区域
          var sw = bs.getSouthWest();
          var ne = bs.getNorthEast();
          var w = ne.getLng()-sw.getLng();
          var h = ne.getLat()-sw.getLat();
          var wf = w/20;
          var hf = h/20;
          var sw1 = new AMap.LngLat(sw.getLng()+wf,sw.getLat()+hf);
          var ne1 = new AMap.LngLat(ne.getLng()-wf,ne.getLat()-hf);
          var bss = new AMap.Bounds(sw1,ne1);
          if (!bss.contains(pt)) {
            thisMap.map.panTo(pt);
          }
        })
      },


      // 获取地址
      getAddress(lng, lat, fn) {
        AMap.plugin('AMap.Geocoder', function() {
          var geocoder = new AMap.Geocoder()
          var lnglat = new AMap.LngLat(lng,  lat);
          geocoder.getAddress(lnglat, function(status, result) {
            if (status === 'complete' && result.regeocode) {
              var address = result.regeocode.formattedAddress;
              fn(result.regeocode)
            }
          });
        })
        // this.$emit('getCarAddress')
      },
      trackStart (index) {
        this.navg0.start(index);
      },
      trackResume () {
        this.navg0.resume();
      },
      trackPause () {
        this.navg0.pause();
      },
      trackStop () {
        this.navg0.stop();
      },
      setSpeed (zoom) {
        var speed = 0
        if(zoom> 0 && zoom <15) {
           speed = 44000 - (zoom*3000)
        }
        else if (zoom >=15 && zoom<=18){
           speed = 5700 - (zoom*300)
        }
        thisMap.map.setZoom(zoom);
        this.navg0.setSpeed(speed);
      },
      setCenter(lng, lat) {
        thisMap.map.setCenter([lng, lat])
      },
      destroy () {
        this.pathSimplifierIns.setData([{
          name: '轨迹0',
          path: []
        }]);
        this.pathSimplifierIns.clearPathNavigators();
      }
    },
  }
</script>
<!--[-->
<!--{zoom:4 ,speed:32000}-->
<!--{zoom:8 ,speed:19000}-->
<!--{zoom:9 ,speed:17000}-->
<!--{zoom:10 ,speed:14000}-->
<!--{zoom:12 ,speed:8000}-->
<!--{zoom:15 ,speed:2000}-->
<!--{zoom:16 ,speed:900}-->
<!--{zoom:18 ,speed:300}-->

<!--]-->
<style lang="scss">
  .cheta-track{
    .amap-marker-content{white-space: inherit!important;}
    .cheta-map-mark-track{
      width:74px;
      height:74px;
      background: rgba(24,144,255, 0.2);

      /*background:rgba(28,192,159,0.2);*/
      border-radius:50%;
      padding: 15px;
    }
    .cheta-map-mark-inner-track{
      width:41px;
      height:41px;
      background:#1890ff;
      /*background:rgba(28,192,159,0.8);*/
      border-radius:50%;
      text-align: center;
      padding-top: 10px;
      box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
    }
    .track-start{
      background: rgba(98,181,0, 0.2);
    }
    .track-inner-start{
      background:#62B500;
    }
    .track-end{
      background: rgba(245,67,54, 0.2);
    }
    .track-inner-end{
      background:#F54336;
    }
    .cheta-map-mark-top{
      font-size:14px;
      font-family:MicrosoftYaHei-Bold;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .cheta-map-mark-bottom{
      font-size:16px;
      font-family:MicrosoftYaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
    }

    .cheta-map-info{
      width: 500px;
      height: 340px;
      box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
    }
  }
</style>
<style lang="less" scoped>

</style>