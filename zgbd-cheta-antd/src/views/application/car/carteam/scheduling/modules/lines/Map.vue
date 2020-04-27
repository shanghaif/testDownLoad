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
            <input placeholder="定位起始点" id="tipinput"/>
          </td>
        </tr>
      </table>
    </div>
    <div id="panel"></div>
  </div>
</template>
<script>
  import { getAction } from '@/api/manage';
  export default {
    props: {},
    data() {
      return {
        //详细经纬度 {'经度':'','纬度':''，'精确经度':'','精确纬度':''}
        //起点坐标
        beginLoA: [],
        //结束点坐标
        endLaA: [],
        ////沿途的坐标
        optsA:[],

        //起点标记
        beginMarket : [],
        //结束点标记
        entMarket : [],
        //沿途的标记
        optsMarket : [],

        //起点坐标
        beginLo: [],
        //结束点坐标
        endLa: [],
        ////沿途的坐标
        opts:[],

        //是否是新线
        newLine : false,

        map : null,
      };
    },
    created() {
    },
    mounted() {
      this.init();
    },
    methods: {
      delMarket(index){
        this.map.remove([ this.optsMarket[index] ]);
        this.optsMarket.splice(index,1);
        this.opts.splice(index,1);
        this.optsA.splice(index,1);
      },
      closeOpts(that){
        //经纬度 ['经度','纬度']
        that.beginLo = [];
        that.endLa = [];
        that.opts =[];
        //标记
        that.beginMarket = [];
        that.entMarket = [];
        that.optsMarket = [];

        //详细经纬度 {'经度':'','纬度':''，'精确经度':'','精确纬度':''}
        that.beginLoA = [];
        that.endLaA = [];
        that.optsA =[];
      },
      //起点
      startPoint(that,map,posotion){
        //如果是新行 清除旧行
        if(that.newLine){
          that.map.clearMap();
          that.closeOpts(that);
          that.newLine = false;
        }
        //如果有起点 清除
        if(that.beginMarket){
          map.remove(that.beginMarket);
        }
        //新的标记
        that.beginMarket = new AMap.Marker({
          map: map,
          position: posotion, //基点位置
        });
        //起点信息
        that.beginLo = [posotion.lng,posotion.lat]
        that.beginLoA = posotion;
        //
        that.$emit("start",{id:that.position})
      },
      init: function() {
        var map = new AMap.Map("container", {
          zoom: 14,
          resizeEnable: true
        });
        var that = this;
        that.map = map;
        //创建右键菜单
        var contextMenu = new AMap.ContextMenu();
        this.position = null;

        //构造路线导航类
        var driving = new AMap.Driving({map: map,panel: "panel"});

        //输入提示
        var autoOptions = {input: "tipinput"};
        var auto = new AMap.Autocomplete(autoOptions);
        /*var placeSearch = new AMap.PlaceSearch({map: map});  *///构造地点查询类
        AMap.event.addListener(auto, "select", function select(e) {
          that.startPoint(that,map,e.poi.location);
          map.setFitView([ that.beginMarket ])
        });//注册监听，当选中某条记录时会触发

        //右键添加Marker标记
        contextMenu.addItem("<i class=\"iconfont icon-qidian3 cheta-pr-10\" style=\"color:#0f43ef\"></i>设为起点", function (e) {
          that.startPoint(that,map,that.position);
        }, 1);

        //设为途径点
        contextMenu.addItem("<i class=\"iconfont icon-qidian3 cheta-pr-10\" v-if=\"beginLo\" style=\"color:#ef534c\"></i>设为途径点", function () {
          //map.zoomIn();
          if(that.opts.length <= 16 && !that.newLine){
            var marker = new AMap.Marker({
              map: map,
              position: that.position //基点位置
            });
            that.opts.push([that.position.lng,that.position.lat]);
            that.optsA.push(that.position);
            that.optsMarket.push(marker);
            that.$emit("centers",that.opts)
          }
        }, 2);
        //右键添加Marker标记
        contextMenu.addItem("<i class=\"iconfont icon-qidian3 cheta-pr-10\" style=\"color:#ef534c\"></i>设为终点", function (e) {
          //这一条线路已完成 不可再操作
          if(!that.newLine){
            that.endLa = [that.position.lng,that.position.lat]
            that.endLaA = that.position
            that.$emit("end",{id:that.position})
            getLng()
          }
          /*that.closeOpts();*/
        }, 3);
        //地图绑定鼠标右击事件——弹出右键菜单
        map.on('rightclick', function (e) {
          contextMenu.open(map, e.lnglat);
          that.position = e.lnglat
        });
        // contextMenu.open(map, lnglat);  //导航
        function getLng() {
          // 根据起终点经纬度规划驾车导航路线
          driving.search(
            that.beginLoA,
            that.endLaA,{
            waypoints: that.optsA
          }, function(status, result) {
            // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
            if (status === 'complete') {
              that.$emit('time',{
                distance : result.routes[0].distance
                ,time : result.routes[0].time})
              console.log('绘制驾车路线完成');
            } else {
              console.log('获取驾车数据失败：' + result);
            }
          });
          /*map.plugin("AMap.DragRoute", function() {
            var path = [that.beginLo].concat(that.opts,[that.endLa]);
            var route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
            route.search(); //查询导航路径并开启拖拽导航
          });*/
          that.newLine = true;
        }
      }
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
<style lang="scss">
</style>
