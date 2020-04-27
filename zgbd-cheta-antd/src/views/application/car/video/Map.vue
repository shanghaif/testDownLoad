<template>
  <div id="container" :style="{width: '100%', height: '100%'}"/>
</template>
<script>
  var thisMap = { map: null }
  export default {
    data () {
      return {
      }
  },
    mounted () {
      thisMap.map = new AMap.Map('container', {resizeEnable: true,zoom: 11});
      this.addMark()
      // this.$emit('bigMapShow')
      $('body').on('click', '.cheta-map-event', function(){
        $('.cheta-map-info').removeClass('cheta-hide')
        $(this).parents('.cheta-map-info').addClass('cheta-hide')
      });
    },
    methods:{
      closeWindow () {
        thisMap.infoWindow.close();
      },
      addMark () {
        var path = [112.686448 ,23.341034]
        var title = "粤A-666"
        var markerContent = `<img src="/image/car/绿车（56x28).png"/>`;
        var marker = new AMap.Marker({
          position: path,
          content: markerContent,
          offset: new AMap.Pixel(-40, -40)
        });
        thisMap.map.setCenter(path);
        thisMap.map.add(marker);
        var $this = this
        AMap.event.addListener(marker, 'click', () => {
          this.$emit('bigMapShow')
            // $this.carClick(e, car)
            var infoWindowContent = $this.infoTpl();
            thisMap.infoWindow = new AMap.InfoWindow({
              offset: new AMap.Pixel(0, -35),
              content: infoWindowContent
            });
            thisMap.infoWindow.open(thisMap.map, marker.getPosition());
          });
      },
      infoTpl () {
        var car ={registration_no:'粤A-8888',driveYear:'3年',phone:'15890954093',email:'2736209286@qq.com',id:'11'
          ,g:'11',workorder:"12:02:45",sp:50,address:'天河区琪和商贸园',desc:'ACC离线'}
        var tpl= `
        <div>
        <div class="cheta-map-info" style="border-radius:10px;">
          <div class="cheta-map-head cheta-bg" style="height:54px;color:rgba(255,255,255,1);line-height: 50px;padding: 0px 10px;font-size: 24px">
            <i class="iconfont icon-fangxiangpan" style="font-size: 25px"></i>
              NO. ${car.registration_no}
          </div>
          <div class="cheta-map-content" style="line-height: 45px;padding: 0px 10px;font-family:MicrosoftYaHei;font-weight:400;color: #999999FF;">
            <div>
              <div style="width: 69%;display: inline-block;border-right: 1px solid rgba(232,232,232,1)">
                <div style="border-bottom: 1px solid rgba(232,232,232,1)">驾驶员：吴成建
                  <span style="padding-left: 55px;">行驶里程：${car.g}（km）</span>
                </div>
                <div style="border-bottom: 1px solid rgba(232,232,232,1);overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">状态：
                  <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;" title="${car.gs}">
                  ${car.desc}
                  </span>
                </div>
                <div style="border-bottom: 1px solid rgba(232,232,232,1)">速度：
                  <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;">正北 ${car.sp}km / h</span>
                </div>
                <div style="border-bottom: 1px solid rgba(232,232,232,1)">上报时间：
                  <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;">${car.workorder}</span>
                </div>
              </div>
              <div class="cheta-color" style="width: 30%;display: inline-block;text-align: center;border-bottom: 1px solid rgba(232,232,232,1);">
                <i class="iconfont icon-shisu-" style="font-size: 120px"></i>
                <br>
                <span style="font-family:Arial-BoldMT;font-weight:bold;">
                  <span style="font-size:25px;">${car.sp}</span>
                  <span style="font-size:20px;">km/h</span>
                </span>
              </div>
            </div>
            <div style="border-bottom: 1px solid rgba(232,232,232,1)">
              车辆位置：${ car.address }
            </div>
            <div style="font-size: 14px;display: flex">
              <div class="cheta-map-event cheta-map-info-detail" data-id="${car.id}" style="text-align: center;flex:1;text-decoration:underline;border-right: 1px solid rgba(232,232,232,1)">
                <i class="iconfont icon-sijixinxi" style="font-size: 14px;padding-right: 7px;"></i>司机信息 >>
              </div>
              <div class="cheta-map-info-gps" data-id="" style="text-align: center;flex:1;text-decoration:underline;cursor:pointer;border-right: 1px solid rgba(232,232,232,1)">
                <i class="iconfont icon-gengduoxiangqing" style="font-size: 14px;padding-right: 7px;"></i>更多详情 >>
              </div>
            </div>
          </div>
        </div></div>
        `;
         tpl += `
<div>
        <div class="cheta-map-info cheta-hide" style="border-radius:10px;">
          <div class="cheta-map-head cheta-bg" style="height:54px;color:rgba(255,255,255,1);padding: 0px 10px;font-size: 24px">
            <i class="iconfont icon-fangxiangpan" style="font-size: 25px"></i>
              NO. ${car.registration_no}
          </div>
          <div class="cheta-map-content" style="padding: 10px 10px;font-family:MicrosoftYaHei;font-weight:400;color: #999999FF;">
            <div style="border-bottom: 1px solid rgba(232,232,232,1);display: flex;">
              <div style="width: 24%;flex-grow:1;border-right: 1px solid rgba(232,232,232,1);text-align: center">
                <div><img src="/image/workplace/touxiang.png"/></div>
                <div class="cheta-fontA30 cheta-color" style="">C1
                </div>
                <div style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">准驾车型
                  <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;" title="">
                  </span>
                </div>

              </div>
              <div style="width: 50%;flex-grow:1;padding-left: 14px;border-right: 1px solid rgba(232,232,232,1)">
                <div style="">
                  <p class="cheta-fontA30 cheta-color-red" style="color:rgba(51,51,51,1);">Pandanliang</p>
                  <p class="cheta-fontM16">广州市环卫集团--司机</p>
                </div>
                <div class="cheta-block cheta-mt-10" style="line-height: 36px;">
                <div style="">车牌：
                  <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;">${car.registration_no}</span>
                </div>
                <div style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">驾龄：
                  <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;" title="${car.gs}">${car.driveYear}
                  </span>
                </div>
                <div style="">联系方式：
                  <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;">${car.phone}</span>
                </div>
                <div style="">邮箱：
                  <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;">${car.email}</span>
                </div>
</div>

              </div>
              <div class="cheta-color" style="flex-grow:1;width: 24%;text-align: center;">
                <div><span class="cheta-fontA30 cheta-color-red">9.2</span></div>
                <div><span class="cheta-font14">安全评分</span></div>
              </div>
            </div>
            <div style="text-align: center;line-height:46px;text-decoration:underline;color:rgba(153,153,153,1);" class="cheta-font14 cheta-map-event">
              <a href="#"><i class="iconfont icon-jibenxinxi"></i>车辆信息>></a>
            </div>
          </div>
        </div></div>
`;
        return tpl;
      },
    }
  }
</script>
<style lang="scss">
  .cheta-map-info{
    width: 500px;
    height: 340px;
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
    font-family:Microsoft YaHei;
    font-weight:400;
  }
  /*高德地图样式覆盖*/
  .amap-info-sharp{display: none;}
  .amap-info-close{color: white;font: bold 26px/21px Tahoma,Verdana,sans-serif;width: 26px;top:6px;}
  .amap-info-content{padding: 0px;border: 0px solid #ccc;}
  .amap-info-outer, .amap-menu-outer{box-shadow: 0 3px 14px rgba(0,0,100,0); }
  .amap-info-outer{border: #c0c0c0 solid 0px;box-shadow: 3px 3px 10px rgba(0,0,0,0.3);}
  .cheta-hide{display: none;}
</style>