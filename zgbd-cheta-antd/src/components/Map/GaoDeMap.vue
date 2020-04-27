<template>
  <div class="cheta-run">
    <div class="nav">
      <div class="right_total" id="container" :style="{width: '100%', height: (screenHeight - 75) + 'px'}">
      </div>
    </div>
  </div>
</template>
<script>
  import { getAction } from '@/api/manage';
  import constant from '@/views/application/car/api/constant.js';
  import { getLocation } from '@/views/application/car/api/util.js';
  import { areaMark, streetMark, carMark,carInfo } from '@/views/application/car/api/tpl.js';
  var thisMap = {
    map: null,
    marker: [],
    infoWindow: null
  }
  export default {
    props:{
      markList:{
        type: Array,
        defaultValue: () => []
      },
      markerList:{
        type: Array,
        defaultValue: () => []
      },
    },
    data() {
      return {
        clickTitle: '',
        screenWidth: '',
        screenHeight: '800',
        flow:{},
        target: new Date().getTime() + 10000
      };
    },
    created () {
      this.flow = constant
    },
    mounted() {
      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
          this.screenHeight = document.body.clientHeight;
        })();
      };
      this.init();
      var $this = this;
      $('body').on('click', '.cheta-map-event', function(){
        $('.cheta-map-info').removeClass('cheta-hide')
        $(this).parents('.cheta-map-info').addClass('cheta-hide')
      });
      $('body').on('click', '.top-left-jiashi', function(){
        $('.cheta-front-message').toggleClass("cheta-hide");
      });
      $('body').on('click', '.car-refresh', function(){
        $this.initMark()
      });
    },
    methods: {
      onEndHandle2 () {
        this.target =  new Date().getTime() + 10000 * 6;
        this.initMark()
      },
      init: function() {
        if (this.$route.params.lngLat) {
          thisMap.map = new AMap.Map('container', {
            resizeEnable: true,
            zoom: 8,
            center: this.$route.params.lngLat,
          })

        } else {
          thisMap.map = new AMap.Map('container', {
            resizeEnable: true,
            zoom: 8,
          })
        }

        thisMap.map.on('zoomend', this.initMark);
        thisMap.map.on('click', function(){
          thisMap.infoWindow.close()
        });
        this.initMark();
      },
      initMark(){
        thisMap.marker.forEach(item => {
          thisMap.map.remove(item);
        })
        this.getMapByZoom(this.markList, thisMap.map.getZoom());
        this.clickTitle = '';
      },
      // 展示位置和天气调用的函数
      addMark(list, param){
        var $this = this;
        list.forEach(item => {
          item.address = item.name
        });
        getLocation(list, res => {
          var top = res.count, bottom = res.name;
          var markerContent = areaMark(top, bottom);
          if (param.grade == 4) {
            markerContent = streetMark(top, bottom);
          }
          var marker = new AMap.Marker({
            position: [res.geo.location.lng, res.geo.location.lat],
            content: markerContent,
            offset: new AMap.Pixel(-57, -57),
            data: {name: bottom, count: top}
          });
          AMap.event.addListener(marker, 'click', (e) => $this.markClick(e));
          thisMap.marker.push(marker);
          thisMap.map.add(marker);
        });
        this.$emit('changeListHide')
        this.$emit('changeMarkList', list);
      },
      carClick(car) {
        // 设置地图中心点
        var $this = this;
        thisMap.map.setCenter([car.lng, car.lat])
        thisMap.map.setZoom(15);
        this.getAddress(car.lng, car.lat, function(geo){
          car.address = geo.formattedAddress;
          var infoWindowContent = $this.infoTpl(car);
          thisMap.infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, -35),
            content: infoWindowContent
          });
          thisMap.infoWindow.open(thisMap.map, [car.lng, car.lat]);
          $this.$emit('changeCar',car.id);
          // 监听信息窗口关闭事件
          thisMap.infoWindow.on('close',function() {
            $this.$emit('closeTable')
          })
        });
      },
      addCarMark(list){
        this.addCar(list);
        var car = list[0];
        this.carClick(car);
        thisMap.map.setZoom(15);
      },
      foucusCity() {
        thisMap.map.setZoom(8);
      },
      foucusArea () {
        thisMap.map.setZoom(10);
      },
      // 展示车列表调用的函数
      addCar(list){
        var $this = this;
        list.forEach(e => {
          let status = constant[e.statusDispatch];
          if (!status) {
            status = {image: 'car_green'};
          }
          var ang = Math.round(e.ang / 45);
          if (!ang) {
            ang = 1;
          }
          var markerContent = carMark(ang, status.image, e.registrationNo);
          var car = e;
          var marker = new AMap.Marker({
            position: new AMap.LngLat(car.lng, car.lat),
            content: markerContent,
            offset: new AMap.Pixel(-13, -30),
          });
          thisMap.marker.push(marker);
          thisMap.map.add(marker);
          AMap.event.addListener(marker, 'click', () => {
            $this.getAddress(car.lng, car.lat, function(geo){
              thisMap.map.setCenter([car.lng, car.lat])
              // $this.carClick(e, car)
              car.address = geo.formattedAddress;
              var infoWindowContent = $this.infoTpl(car);
              thisMap.infoWindow = new AMap.InfoWindow({
                offset: new AMap.Pixel(0, -35),
                content: infoWindowContent
              });
              thisMap.infoWindow.open(thisMap.map, marker.getPosition());
              $this.$emit('changeCar',car.id);
              // 监听信息窗口关闭事件
              thisMap.infoWindow.on('close',function() {
                $this.$emit('closeTable')
              })
            });
          });

        })
      },
      markerClick (name) {
        this.clickTitle = name;
        this.getLnglat(name, geo => {
          thisMap.map.setCenter(new AMap.LngLat(geo.lng, geo.lat))
          thisMap.map.setZoom(thisMap.map.getZoom() + 2)
        })
      },
      // 关闭信息窗口事件
      closeInfo(){
        thisMap.infoWindow.close()
      },
      markClick (e) {
        // 针对 target 1.4.4 发生改变
        if (e.target.F) {
          this.clickTitle = e.target.F.data.name;
        } else {
          this.clickTitle = e.target.B.data.name;
        }
        thisMap.map.setCenter(new AMap.LngLat(e.lnglat.lng, e.lnglat.lat))
        thisMap.map.setZoom(thisMap.map.getZoom() + 2)
      },
      getMapByZoom(markList, zoom) {
        var bounds = thisMap.map.getBounds();
        var param = {
          start: bounds.northeast.toString(),
          end: bounds.southwest.toString(),
          name: this.clickTitle
        };
        if (zoom < 6) {
          param.name = "";
          param.grade = 0;
        } else if (zoom >= 6 && zoom < 8) {
          param.grade = 1;
        } else if (zoom >= 8 && zoom < 10) {
          param.grade = 2;
        } else if (zoom >= 10 && zoom < 12) {
          param.grade = 3;
        } else if (zoom >= 12 && zoom < 14) {
          param.grade = 4;
        } else if (zoom >= 14) {
          param.grade = 5;
        }

        // 地图数据
        var $this = this;
        this.$emit('load', true);
        getAction('/application/car/gps/get',param).then(res => {
          var list = res.result;
          if (list && list.length > 0) {
            if (param.grade <= 4) {
              if (thisMap.infoWindow) {
                thisMap.infoWindow.close()
              }
              $this.addMark(list, param)
            } else if (param.grade === 5) {
              $this.addCar(list);
            }
          }
          // 车辆列表数据
          $this.$emit('changeList', Object.assign(param, {grade: 5}));
          // $this.$emit('changeList');
          $this.$emit('load', false);
        })
      },
      getLnglat (address, fn) {
        var geocoder = new AMap.Geocoder({
          city: address
        })
        var lnglat = new AMap.LngLat(112.397428,  39.90923);
        geocoder.getLocation(address, function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
            lnglat = result.geocodes[0].location
          }
          fn(lnglat);
        })
      },
      infoTpl (car) {
        var $this=this
        this.$emit('carMessageShow',car)
        var desc = this.flow[car.statusRun].desc;
        var color = this.flow[car.statusRun].color;
        return carInfo(car,desc,color)
      },
      getAddress(lng, lat, fn) {
        var geocoder = new AMap.Geocoder()
        var lnglat = new AMap.LngLat(lng,  lat);
        geocoder.getAddress(lnglat, function(status, result) {
          if (status === 'complete' && result.regeocode) {
            var address = result.regeocode.formattedAddress;
            fn(result.regeocode)
          }
        });
      }
    },

  }
</script>
<style lang="less" scoped>

</style>
<style lang="less">
  .cheta-map-info{
    width: 520px;
    height: 420px;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
  }
  .cheta-map-info-detail{cursor:pointer;}
  .cheta-fontA30{
    font-size:30px;
    font-family:Arial;
    font-weight:400;
  }
  .cheta-color-red{
    color:rgba(255,94,86,1);
  }
  .cheta-fontM16{
    font-size:16px;
    font-weight:400;
  }
  .top-right-wenzi ul li{
    list-style: none;
    font-size: 14px;
    font-weight: 400;
    color: rgba(153,153,153,1);
    line-height: 33px;
  }
  .top-right-wenzi span{
    font-size: 14px;
    font-weight: 400;
    color: rgba(51,51,51,1);
    line-height: 26px;
  }
  .top-right-qiehuan li{
    list-style: none;
    font-size: 14px;
    font-weight: 400;
    color: rgba(153,153,153,1);
    /*line-height: 26px;*/
    line-height: 33px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .top-right-qiehuan span{
    font-size: 14px;
    font-weight: 400;
    color: rgba(51,51,51,1);
    line-height: 26px;
  }
</style>
<style lang="scss">

  .amap-marker:hover{position: absolute;z-index:110!important;}
  .amap-marker:hover .ol-commu-info .ol-commu-price{background-color: #62ab00;}
  .amap-marker-content{white-space: inherit!important;}
  .cheta-run {
    .cheta-map-mark{
      width:114px;
      height:114px;
      background:rgba(28,192,159,0.2);
      border-radius:50%;
      padding: 15px;
    }
    .cheta-map-mark-inner{
      width:84px;
      height:84px;
      background:rgba(28,192,159,0.8);
      border-radius:50%;
      text-align: center;
      padding-top: 15px;
      box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
    }
    .cheta-map-mark-top{
      font-size:18px;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .cheta-map-mark-bottom{
      font-size:16px;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
  }

  .cheta-map-info{
    width: 520px;
    height: 335px;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
  }
  .cheta-map-info-detail{cursor:pointer;}
  /*高德地图样式覆盖*/
  .amap-info-sharp{display: none;}
  .cheta-run .amap-info-close{color: white!important;font: bold 26px/21px Tahoma,Verdana,sans-serif!important;width: 26px!important;height:54px!important;top:15px!important;}
  .amap-info-content{padding: 0px;border: 0px solid #ccc;}
  .amap-info-outer, .amap-menu-outer{box-shadow: 0 3px 14px rgba(0,0,100,0); }
  .amap-info-outer{border: #c0c0c0 solid 0px;box-shadow: 3px 3px 10px rgba(0,0,0,0.3);}

  .cheta-front-message{
    display: block;
  }
  .cheta-hide{display: none;}

  .ol-commu-info {
    height: 25px;
    white-space: nowrap;
    border: 1px solid #62ab00;
    box-shadow: 3px 3px 4px rgba(0,0,0,0.3);
    border-radius: 4px;
  }
  .ol-commu-info .ol-commu-price {
    color: #fff;
    font-size: 12px;
    padding: 0 10px;
    min-width: 31px;
    *width: 31px;
    text-align: center;
    background-color: #009ae3;
  }
  .ol-commu-info .ol-commu-name {
    /* min-width: 70px; */
    max-width: 110px;
    *width: 140px;
    padding: 0 7px 0 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #fff;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-left: -4px;
  }
  .ol-commu-info .ol-commu-count {
    font-weight: bold;
    padding-right: 10px;
    background-color: #fff;
    display: none;
  }
  .ol-commu-info span {
    display: inline-block;
    height: 25px;
    line-height: 25px;
    vertical-align: middle;
  }
  .cheta-map-mark-street.ol-commu-info .ol-commu-price {background-color: #62ab00;}
  .cheta-map-mark-street.ol-commu-info .ol-commu-name {padding: 0 7px 0 10px;}
  .cheta-map-mark-street.ol-commu-info:after,.ol-commu-info:before{content:'';display:block;position:absolute;width:0;height:0;border:solid rgba(0,0,0,0);border-width:6px;left:13px}
  .cheta-map-mark-street.ol-commu-info:after{bottom:-12px;border-top-color:#62ab00}
  .cheta-map-mark-street.ol-commu-info:before{bottom:-13px;border-top-color:#8e8e8e}

  .amap-info-contentContainer:after,.amap-info-contentContainer:before{content:'';display:block;position:absolute;width:0;height:0;border:solid rgba(0,0,0,0);border-width:6px;left:255px}
  .amap-info-contentContainer:after{bottom:-12px;border-top-color:white}
  .amap-info-contentContainer:before{bottom:-13px;border-top-color:#8e8e8e}
  .cheta-mark-car-text{text-align: center;}
  .cheta-mark-car-prefix{background-color: #009ae3;color: #FFF;padding: 2px 4px;}
  .cheta-mark-car-suffix{background-color: #FFF;margin-left: -3px;padding: 3px 3px;}
  .img1{
    transform:rotate(-90deg)
  }
  .img2{
    transform:rotate(-45deg)
  }
  .img3{
    transform:rotate(0deg)
  }
  .img4{
    transform:rotate(45deg)
  }
  .img5{
    transform:rotate(90deg)
  }
  .img6{
    transform:rotate(180deg)
  }
  .img7{
    transform:rotate(225deg)
  }
  .img8{
    transform:rotate(270deg)
  }


</style>
