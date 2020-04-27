<template>
  <div class="cheta-map cheta-car-map">
    <div class="nav">
      <div style="position: absolute;z-index: 900;">
        <div style="display: inline-block; ">
          <div class="check cheta-map-tool">
            <i class="iconfont icon-che cheta-color" style="font-size: 15px;margin-left: 10px"></i>
            <span @click="closeList" class="car cheta-color" style="margin-right: 10px;margin-left: 10px;">
              <span>车辆列表</span>
            </span>
            <span class="running"><i class="iconfont icon-cheliangguanli1"></i>运行({{carDigit.lineSum }})</span>
            <span class="stop"><i class="iconfont icon-cheliangguanli1"></i>停止({{carDigit.stopSum }})</span>
            <span class="online"><i class="iconfont icon-cheliangguanli1"></i>离线({{carDigit.travelSum }})</span>
          </div>
        </div>
        <div style="display: inline-block;width: 200px;">
          <a-input-search placeholder="请输入关键字" @search="search"/>
        </div>
      </div>

      <div class="cheta-map-tool" style="display: inline-block;position: absolute;z-index: 900; right: 0;">
        <WarningMessage ref="warningmessage"/>
        <div style="text-align: right;display: inline-block;height: 43px;line-height: 40px;">
          <div class="right_img" @click="refresh"><i class="iconfont icon-shuaxin cheta-color img"></i></div>
          <div class="right_img"><i class="iconfont icon-bangzhu cheta-color img"></i></div>
          <div class="right_img"><i class="iconfont icon-ditu cheta-color img"></i></div>
          <div class="right_img" v-if="amplification" @click="screenFull"><i class="iconfont icon-fangda cheta-color img"></i></div>
          <div class="right_img" v-if="!amplification" @click="screenExit"><i class="iconfont icon-suoxiao cheta-color img"></i></div>
          <div class="right_img" @click="weatherShow"><i class="iconfont icon-shezhi cheta-color img"></i></div>
        </div>
      </div>
      <a-row style="position:absolute;z-index: 1000;left: 50%;top: 5px;">
        <a-spin :spinning="spinning" tip="Loading..."/>
      </a-row>
    </div>
    <div>
      <!--borderColor:-->
      <div class="right-total cheta-border" v-if="weatherVisible" style="width:92px;height:431px;position: absolute;top: 55px;right: 10px;z-index:2;background: white;">
        <ul class="cheta-color">
          <li><a-checkbox></a-checkbox><span>全部</span></li>
          <li><a-checkbox></a-checkbox><span>天气</span></li>
          <li><a-checkbox></a-checkbox><span>路况</span></li>
          <li><a-checkbox></a-checkbox><span>工具箱</span></li>
          <li><a-checkbox></a-checkbox><span>兴趣点</span></li>
          <li><a-checkbox></a-checkbox><span>线路</span></li>
          <li><a-checkbox></a-checkbox><span>网络</span></li>
          <li><a-checkbox></a-checkbox><span>围栏</span></li>
          <li><a-checkbox></a-checkbox><span>卫星</span></li>
          <li><a-checkbox></a-checkbox><span>街景</span></li>
          <li><a-checkbox></a-checkbox><span>三维</span></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="left_total" :style="{width: visibleList ? '400px': '0px', position: 'absolute', top: '55px',left: '10px', height: 'calc(100% - 53px)',backgroundColor:'white',zIndex:'2', overflowY: 'hidden'}">
        <a-tabs class="cheta-height-full" defaultActiveKey="1" v-if="visibleList">
              <a-tab-pane key="1">
                <span slot="tab">
                  <span><a-icon type="home" class="cheta-icon-size20"/></span>
                </span>
                <List v-if="visible" :dataList="dataList" @messageShow="show" style="height: 750px;overflow-y: scroll"></List>
                <Detail v-else :markList="markerList" @carShow="carShow"></Detail>
              </a-tab-pane>
              <a-tab-pane key="2">
                <span slot="tab">
                  <i class="iconfont icon-shuzhuangtu" style="padding-right: 10px;"></i>列表
                </span>
                <Structure @carSingleShow="carSingleShow" @organParentsFocuse="organParentsFocuse" @organChildFocuse="organChildFocuse" style="height:750px;overflow-y: scroll"></Structure>
              </a-tab-pane>
            </a-tabs>
      </div>
      <Map ref="Map" @carAddress="carAddress" @listShow="listShow" @closeTable="closeTable" @changeCar="changeVisible" @changeListHide="clickHide" @changeList="clickShow" @carMessageShow="carTimeShow" @load="load" @changeMarkList="changeMarkList"></Map>
    </div>
    <div class='bottom' :style="{display:visibleTable? '':'none' }">
      <CarData :dataList="dataList" :carId="carId" @closeTable="closeTable" @carAddress="carAddress" ref="CarData"></CarData>
    </div>
  </div>
</template>
<script>
  import ARow from 'ant-design-vue/es/grid/Row'
  import Map from './Map'
  import CarData from './CarData'
  import List from './List'
  import Structure from './Structure'
  import Search from '@views/chetaui/input/search/Index'
  import Common from '@/utils/common.js'
  import Pie from './Pie'
  import Detail from './Detail'
  import { getAction } from '@/api/manage'
  import AInputSearch from 'ant-design-vue/es/input/Search'
  import WarningMessage from './modules/WarningMessage'
  import { getAlarm } from '@/views/application/car/api/api'
  export default {
    components: { WarningMessage, AInputSearch, ARow, Map,List,Structure,Search,CarData, Pie,Detail},
    data() {
      return {
        checked:false,
        contentList:[],
        columns: [
          { title: '', align: 'center', scopedSlots: { customRender: 'car' } ,width:'5%'},
          { title: '', dataIndex: 'object', key: 'object', align: 'center',width:'10%'},
          { title: '', scopedSlots: { customRender: 'information' } ,align: 'center',width:'15%'},
          { title: '', dataIndex: 'speed', key: 'speed', align: 'center',width:'5%'},
          { title: '', dataIndex: 'address', key: 'address', align: 'center' ,width:'20%'},
          { title: '', scopedSlots: { customRender: 'status' }, align: 'center',width:'35%'},
        ],
        visible: false,
        visible1: false,
        visibleList:true,
        visibleTable: false,
        amplification:true,
        weatherVisible:false,
        carData: [
          {road:'高速公路',time:'13:04:08',location:'10'},
        ],
        dataList: [],
        titleList: '',
        carId:'',
        cityList: [
          {id: 1, team: '广州'},
          {id: 2, team: '深圳'},
          {id: 3, team: '上海'},
          {id: 4, team: '北京'},
          {id: 5, team: '杭州'},
        ],
        weatherList: [],
        spinning: false,
        markList: [],
        markerList: [],
        warnMessage:[],
        count:0,
        carDigit: {}
      }
    },
    created () {
      this.getCarNumber()
      this.closeList();
    },

    methods: {
      getCarNumber () {
        var $this = this
        getAction('/application/car/gps/getAnalysisStatusRun',{}).then(res=>{
          $this.carDigit = res.result[0]
        })
      },
      closeTable(){
        this.visibleTable=false
        this.$refs.Map.closeInfo()
      },
      search (keyword) {
        var $this = this;
        $this.spinning = true;
        getAction('/application/car/gps/getData?pageSize=10&pageNo=1&keyword='+ keyword ,{}).then(res =>{
          $this.spinning = false;
          if (!res.data || res.data.length === 0) {
            $this.$message.warning('抱歉，没有找到“' + keyword + '”相关的信息！')
          } else {
            $this.dataList=res.data
            $this.visible=true
            $this.visibleList=true;
          }
        })
      },
      weatherShow(){
        this.weatherVisible=!this.weatherVisible
      },
      carShow(item){
        this.$refs.Map.markerClick(item.name);
      },

      show(car){
        this.$refs.Map.carClick(car);
      },
      carAddress(lng,lat,fn){
        this.$refs.Map.getAddress(lng,lat,fn)
      },
      // terminal_num
      carTimeShow(car){
        this.$refs.CarData.getContent(car)

      },
      carSingleShow(list){
        this.$refs.Map.addCarMark(list);
      },
      // 点击机构进行聚焦
      organParentsFocuse () {
        this.$refs.Map.foucusCity()
      },

      organChildFocuse () {
        this.$refs.Map.foucusArea()
      },
      changeVisible(id){
        this.visibleTable=true
        this.carId=id
      },
      toggle() {
        this.visible = !this.visible
      },
      clickShow(dataList, title){
        this.visible=true;
        this.titleList = title;
        this.dataList=dataList
      },
      clickHide(){
        this.visible=false;
      },
      listShow (){
        this.visibleList = true
      },
      closeList(){
        this.visibleList=!this.visibleList
      },
      refresh(){
        this.$refs.Map.initMark()
      },
      screenFull () {
        var common = Common;
        common.sceen.full();
        this.amplification=!this.amplification
      },
      screenExit(){
        var common = Common;
        common.sceen.exit();
        this.amplification=!this.amplification
      },
      load (spinning) {
        this.spinning = spinning;
      },
      changeMarkList (markerList) {
        this.markerList = markerList;
      },

    }
  }
</script>
<style lang="scss">
  .cheta-car-map{
    .amap-copyright,.amap-logo{
      display: none!important;
    }
    .ant-checkbox-wrapper + span, .ant-checkbox + span{
      padding-left: 0;
      padding-right: 0;
    }
    .ant-badge{
      border-width: 0px!important;
      border-style:solid!important;
      margin: 8px!important;
      /*border: 0!important;*/

    }
    .ant-badge-multiple-words {
      padding: 0!important;
    }
    .ant-badge-count {
      top: -10px !important;
      left: 8px !important;
      height: 21px !important;
      border-radius: 10px;
      min-width: 24px !important;
      line-height: 19px !important;
      text-align: center;
      padding: 0px !important;

    }

    .ant-tabs .ant-tabs-top-content {
      height: calc(100% - 65px)!important;
    }
    .ant-tabs .ant-tabs-top-content>.ant-tabs-tabpane{
      height:100%
    }
    .ant-tabs-nav .ant-tabs-tab {
      margin: 0 32px 0 32px!important;
    }
  }
</style>


<style lang="scss" scoped>
  .cheta-map-tool{
    background-color: white;
    cursor: pointer;
    margin: 10px 10px 10px 10px;
    box-shadow: 0 2px 2px rgba(0,0,0,.15);
    border-radius: 3px;
    line-height: 31px;
  }
  .ant-tabs-nav-container{
    margin-top: 0px;
  }
  .cheta-map{
    position: relative;
  }
  .layout .ant-layout .desktop{
    height: 100%;
  }
  .nav {
    position: relative;
  }
  .car {
    font-family: 'Arial Normal';
    font-size: 15px;
    text-align: center;
    line-height: 15px;
  }
  .running,  .stop ,.online{
    padding-left: 10px;
    padding-right: 10px;
  }
  .check .running {
    color: #1CC09FFF;
    i{
      margin: 0 5px;

    }
  }
  .check .stop {
    color: #FF9933;
    i{
      margin: 0 5px;

    }
  }

  .check .online {
    color: #666666;
    i{margin: 0 5px;

    }

  }
  .right_img{
    display: inline-block;
    cursor: pointer;
  }
  .img {
    margin: 10px;
    font-size: 20px;
  }

  img {
    display: inline-block;
  }

  /*搜索框*/
  /*.field{*/
  /*height: 40px;*/
  /*line-height: 40px;*/
  /*}*/
  /*.field.focus {*/
  /*border-color: #1966ff;*/
  /*}*/

  .left_total {
    float: left;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
  }

  .right_total {
    float: right;
  }


  .drawer {
    position: absolute;
    top: 40%;
    background: white;
    width: 35px;
    height: 50px;
    left: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    pointer-events: auto;
    z-index: 1001;
    text-align: center;
    font-size: 16px;
    border-radius: 0  100% 100% 0/ 50%;


    i {
      color: green;
      font-size: 20px;
    }
  }

  /*table表格*/
  .bottom{
    position:absolute;z-index: 110;bottom:0%;width:100%;background: #FFFFFF;
    border-width: 0;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
    /*visibility: hidden;*/

  }

  .icon_location{
    position:absolute;right:50px;top:-80px;
    i{
      font-size: 25px;
    }
  }
  .icon_style{
    i{
      font-size: 20px;
    }
  }
  .status_content{
    padding-right: 50px;
  }
  .ant-table-thead > tr > th, .ant-table-tbody > tr > td{
    padding: 5px;
  }

  /*树状区域某一大区的详情*/
  .right_area{

  }


  .background{
    width:100%;
    height: 180px;
    background: #F5F5F5;
  }
  .area_font{
    font-size:14px;
    font-weight:400;
    color:rgba(51,51,51,1);
    height:59px;
    border-bottom: 1px solid #E8E8E8;
    line-height: 59px;
    padding-left: 28px;
  }
  .message{
    font-size:18px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    height: 59px;
    line-height: 59px;
    border-bottom: 1px solid #E8E8E8;
    margin-left: 28px;
  }
  .detail_message{
    height: 287px;
    width: 336px;
    margin: 23px 28px;
    border:1px solid #E8E8E8;
  }


  .desc{
    margin-left: 20px;line-height: 28px
  }
  /*右边设置*/
  .right-total ul li {
    list-style: none;
    width: 68px;
    height: 21px;
    /*border: 1px solid blue;*/
    margin: 10px auto 17px auto;
  }
  .right-total ul li span{
    padding-left: 8px;
  }
  .right-total{
    border-width: 1px;
    border-style: solid;
  }

</style>

