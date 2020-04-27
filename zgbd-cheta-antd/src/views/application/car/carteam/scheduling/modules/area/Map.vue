<template>
  <div class="cheta-width-full cheta-height-full">
    <div class="right_total" id="container" :style="{width: '100%', height: '100%'}"/>
    <div class="myPageTop">
      <table>
        <tr>
          <td>
            <label>请输入关键字：</label>
          </td>
        </tr>
        <tr>
          <td>
            <input id="tipinput"/>
          </td>
        </tr>
      </table>
    </div>
    <div id="panel"></div>
  </div>
</template>
<script>

  import { getAddress } from '@/views/application/car/api/util'
  import { getAction } from '@/api/manage';
  export default {
    props: {},
    data() {
      return {
        lo : '',
        la : '',
        startLnglat: null,
        endLnglat: null,
        //地图
        map : null,
        //圆半径
        radiu:0,
        //当前的圆
        circle : null,
        //当前的点
        marker : null
      };
    },
    created() {
    },
    mounted() {
      this.init();
    },
    methods: {
      //查看历史
      dohository(item){
        var that = this;
        that.cleanMarker();
        let position = new AMap.LngLat(item.longitude, item.latitude);
        that.createMarker(that,position,that.map);

        that.lo = item.longitude;
        that.la = item.latitude;
        that.doradiu(item.radius);
      },
      //清除圆
      cleanCircle(){
        if(this.circle){
          this.map.remove(this.circle);
        }
      },
      //清除点
      cleanMarker(){
        if(this.marker){
          this.map.remove(this.marker);
        }
      },
      //清除
      clean(mapObjeck){
        if(mapObjeck){
          this.map.remove(mapObjeck);
        }
      },
      //画圆
      doradiu(value){
        var that = this;
        that.radiu = value;
        if(that.lo && that.la && value){
          that.cleanCircle();
          that.domarket(that,that.lo,that.la,that.map,that.radiu);
        }
      },
      //创建标记
      createMarker(that,position,map){
        var marker = new AMap.Marker({
          position: position,
          map: map,
          /*draggable: true,
          cursor: 'move'*/
        });
        that.marker = marker;
        //绑定拖拽事件
        /*that.marker.on('dragend', function(e) {
          that.cleanCircle();
          that.domarket(that,e.lnglat.lng,e.lnglat.lat,map,that.radiu);
        });*/
      },
      init: function() {
        var that = this;
        var map = new AMap.Map("container", {
          zoom: 14,
          resizeEnable: true
        });
        that.map = map;

        //输入提示
        var autoOptions = {input: "tipinput"};
        var auto = new AMap.Autocomplete(autoOptions);
        /*var placeSearch = new AMap.PlaceSearch({map: map});  *///构造地点查询类
        AMap.event.addListener(auto, "select", function select(e) {
          that.cleanMarker();
          that.cleanCircle();
          that.createMarker(that,e.poi.location,map);
          map.setFitView([ that.marker ])
          that.domarket(that,e.poi.location.lng,e.poi.location.lat,map,that.radiu);
          /*placeSearch.setCity(e.poi.adcode);
          placeSearch.search(e.poi.name);*/  //关键字查询查询出现查询点位置
        });//注册监听，当选中某条记录时会触发

        //地图绑定鼠标右击事件——弹出右键菜单
        map.on('click', function domarket(e) {
          that.cleanMarker();
          that.cleanCircle();
          that.createMarker(that,e.lnglat,map);
          that.domarket(that,e.lnglat.lng,e.lnglat.lat,map,that.radiu);
        });
      },
      //画图、同步输入框数据
      domarket(that,lo,la,map,radiu){
        //将上一次的经纬度保存起来
        that.lo = lo;
        that.la = la;
        //如果上一次的圆信息还在，重新画圆
        that.docircle(lo,la,radiu,map);
        getAddress([[lo, la]], geo => {
          that.$emit('getLoLa',{lo:lo,la:la,address:geo.geo.formattedAddress})
        })
      },
      //画圆
      docircle(lo,la,radiu,map){
        if(radiu){
        var circle = new AMap.Circle({
          center: [lo, la],
          radius: radiu, //半径
          borderWeight: 3,
          strokeColor: "#FF33FF",
          strokeOpacity: 1,
          strokeWeight: 6,
          strokeOpacity: 0.2,
          fillOpacity: 0.4,
          strokeStyle: 'dashed',
          strokeDasharray: [10, 10],
          // 线样式还支持 'dashed'
          fillColor: '#1791fc',
          zIndex: 50,
        })
        circle.setMap(map)
        // 缩放地图到合适的视野级别
          map.setFitView([ circle ])
        }
        this.circle = circle;
      },
    }
  }
</script>
<style lang="less" scoped>
  .myPageTop{
    position: absolute;
    top: 23px;
    /*right: 10px;*/
    font-family: "Microsoft Yahei", Pinghei;
    font-size: 14px;
    background: none 0px 0px repeat scroll rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    border-image: initial;
    margin: 10px auto;
    padding: 6px;
  }
</style>
<style lang="less">

</style>
