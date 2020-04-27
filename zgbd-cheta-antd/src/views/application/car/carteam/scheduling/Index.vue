<template>
  <div class="carteam_info" v-bind:urls = 'urls'>
    <!--<div class="clearfix crumbsUp">-->
      <!--&lt;!&ndash;选择车队&ndash;&gt;-->
      <!--<span><</span>-->
        <!--<span class="crumbsTop crumbsTopLeft">选择车队：</span>-->
      <!--<span class="crumbsTop crumbsBody">-->
        <!--<a-select defaultValue="2" style="width: 120px" @change="handleChange">-->
          <!--<a-select-option value="1">广州越秀</a-select-option>-->
          <!--<a-select-option value="2">广州天河</a-select-option>-->
          <!--<a-select-option value="3">广州白云</a-select-option>-->
        <!--</a-select>-->
      <!--</span>-->
      <!--<span class="crumbsTop crumbsRight">-->
        <!--<a-month-picker @change="onChange" placeholder="选择日期" />-->
      <!--</span>-->
      <!--<span class="crumbsFit">-->
        <!--<i class="iconfont icon-shezhi-tongyong- cheta-color"></i>-->
      <!--</span>-->
      <!--<span class="crumbsList">-->
        <!--<a-button type="primary" @click="doSchedulingList()" ghost> <a-icon type="ordered-list" class="cheta-color"/> 排班列表</a-button>-->
      <!--</span>-->
    <!--</div>-->
    <div class="content">
      <div class="section">
        <a-row>
          <!--<a-col class="broad1" :xs="{ span: 24}" :md="{ span: 24}" :lg="{ span: 12}" :xl="{ span: 8}">-->
            <!--<div class="gutter-box">-->
              <!--&lt;!&ndash;人员出勤统计&ndash;&gt;-->
              <!--<schedulingPersonnel ref="schedulingpersonnel" :config="peapleConfig"></schedulingPersonnel>-->
            <!--</div>-->
          <!--</a-col>-->
          <!--<a-col class="broad1" :xs="{ span: 24}" :md="{ span: 24}" :lg="{ span: 12}" :xl="{ span: 8}">-->
            <!--<div class="gutter-box">-->
              <!--&lt;!&ndash;车辆出勤统计&ndash;&gt;-->
              <!--<schedulingPersonnel ref="schedulingpersonnel" :config="carConfig"></schedulingPersonnel>-->
            <!--</div>-->
          <!--</a-col>-->
          <!--<a-col class="narrow1" :xs="{ span: 12}" :md="{ span: 12}" :lg="{ span: 6}" :xl="{ span: 4}">-->
            <!--<div class="gutter-box">-->
              <!--&lt;!&ndash;出勤车辆 1&ndash;&gt;-->
              <!--<schedulingDetails ref="schedulingDetails" :config="scarConfig"></schedulingDetails>-->
            <!--</div>-->
          <!--</a-col>-->
          <!--<a-col class="narrow1" :xs="{ span: 12}" :md="{ span: 12}" :lg="{ span: 6}" :xl="{ span: 4}">-->
            <!--<div class="gutter-box">-->
              <!--&lt;!&ndash;出勤车辆 2&ndash;&gt;-->
              <!--<schedulingDetails ref="schedulingDetails" :config="slineConfig"></schedulingDetails>-->
            <!--</div>-->
          <!--</a-col>-->
          <!--<a-col class="narrow1" :xs="{ span: 12}" :md="{ span: 12}" :lg="{ span: 6}" :xl="{ span: 4}">-->
            <!--<div class="gutter-box">-->
              <!--&lt;!&ndash;出勤车辆 3&ndash;&gt;-->
              <!--<schedulingDetails ref="schedulingDetails" :config="sdriverConfig"></schedulingDetails>-->
            <!--</div>-->
          <!--</a-col>-->
          <!--<a-col class="narrow1" :xs="{ span: 12}" :md="{ span: 12}" :lg="{ span: 6}" :xl="{ span: 4}">-->
            <!--<div class="gutter-box">-->
              <!--&lt;!&ndash;出勤车辆 4&ndash;&gt;-->
              <!--<schedulingDetails ref="schedulingDetails" :config="scountConfig"></schedulingDetails>-->
            <!--</div>-->
          <!--</a-col>-->
        </a-row>
      </div>
      <div class="section">
        <a-row class="broad2">
          <div class="gutter-box broad2Gb">
            <a-tabs>
              <a-tab-pane tab="排班信息" key="1">
                <informationScheduling @changesValue="changesValue"  :config="schedulingConfig" ref="informationScheduling"></informationScheduling>
              </a-tab-pane>
              <!--<a-tab-pane tab="线路信息" key="2">-->
                <!--<informationRoute :lineConfig="lineConfig" ref="informationRoute"></informationRoute>-->
              <!--</a-tab-pane>-->
              <div slot="tabBarExtraContent" class="cheta-spacem5">
                <a-button type="primary" icon="plus" @click="addScheduling">现建排班</a-button>
                <a-button type="primary" icon="plus" @click="addLine">新建线路</a-button>
                <a-button type="primary" icon="heat-map" @click="addArea">片区地点</a-button>
                <a-button type="primary" @click="doSchedulingList()" ghost> <a-icon type="ordered-list" class="cheta-color"/> 排班列表</a-button>
              </div>
            </a-tabs>
          </div>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
  import {getAction} from "@/api/manage";
  import schedulingPersonnel from './modules/schedulingPersonnel'//调度  人员
  import schedulingDetails from './modules/schedulingDetails'//调度  详情
  import informationScheduling from './modules/informationScheduling'//排班信息
  import informationRoute from './modules/informationRoute'//线路信息
  import addLines from './modules/lines/AddLines'
  export default {
    name: "Index",
    components: {
      schedulingPersonnel,
      schedulingDetails,
      informationScheduling,
      informationRoute,
      addLines,
    },
    data() {
      return {
        count: [],
        peapleConfig : {
          title: '人员出勤统计',
          sum1: 0,
          title1: '总出勤天数',
          sum2: 0,
          title2: '日均出勤人员',
          holiday : 0,
          seriesName : '出勤人员(人)',
          peapleData : [0, 0, 0, 0, 0, 0, 0],
          dateData : ['7-1','7-2','7-3','7-4','7-5','7-6','7-7'],
          charts: {deepColor: 'rgba(55,138,255,1)', fadeColor: 'rgba(55,138,255,0.2)'}
        },
        carConfig:{
          title: '车辆出勤统计',
          sum1: 12,
          title1: '总出勤车辆',
          holiday : 8,
          sum2: 10,
          seriesName : '出勤车辆(辆)',
          title2: '日均趟次',
          peapleData : [40, 25, 60, 15, 25, 20, 55],
          dateData : ['7-1','7-2','7-3','7-4','7-5','7-6','7-7'],
          charts: {deepColor: 'rgba(33,204,149,1)', fadeColor: 'rgba(33,204,149,0.2)'}
        },
        scarConfig : {
          title: '出勤车辆(辆)',
          sum: 0,
          percentage : 0,
        },
        slineConfig : {
          title: '运行线路(条)',
          sum: 0,
          percentage : 0,
        },
        sdriverConfig : {
          title: '出勤司机(人)',
          sum: 0,
          percentage : 0,
        },
        scountConfig : {
          title: '出勤车次(次)',
          sum: 0,
          percentage : 0,
        },
        schedulingConfig : {

        },
        lineConfig :{

        },
        url : {
            getDriverAndLine : '/application/car/scheduling/getCarListPage',
            getLineInfo : '/application/car/scheduling/getLineInfo',
        },
        urls:'',
      }
    },
    created(){
      this.init(null);
    },
    methods: {
      init(){
        debugger
        var that = this;
        var param = {pageNo: 1, pageSize: 4};
       this.changesValue(param)
        // getAction(that.url.getDriverAndLine).then(res =>{
        //   debugger
        //   if(res.success){
        //     that.scarConfig.sum = res.result.carCount;
        //     that.slineConfig.sum = res.result.lineCount;
        //     that.sdriverConfig.sum = res.result.driverCount;
        //     that.schedulingConfig = {driverList : res.result.userlist,
        //       carList : res.result.carlist ,lineList : res.result.schedulingItemList,
        //       listCount: res.result.schedulingCount
        //     }
        //     that.lineConfig.carCount = res.result.carCount;
        //     that.lineConfig.driverCount = res.result.driverCount;
        //
        //   }else{
        //     console.log("查询错误");
        //   }
        // })
      },
      changesValue(param){
        var that = this
        getAction(that.url.getDriverAndLine,param).then(res =>{
          debugger
          if(res.success){
            that.schedulingConfig = {
              carList : res.data,
              count : res.count
            }
          }else{
            console.log("查询错误");
          }
        })
      },
      addArea() {
        this.$router.push({path: '/pianqudidian'});
      },
      addLine() {
        this.$router.push({path: '/xinjianxianlu'});
      },
      handleChange(value) {//选择车队
        console.log(`selected ${value}`);
      },
      onChange(date, dateString) {//日期
        console.log(date, dateString);
      },
      doSchedulingList() {
        this.$router.push({path: '/cheduiList'})
      },
      addScheduling () {
        this.$router.push({path: '/newScheduling'})
      }

    }



  }
</script>
<style  lang="less" scoped>
  .broad2Gb{
    height: 100%!important;
  }
  .crumbsTop{
    height: 34px;
    line-height: 34px;
    display: inline-block;
    margin: 15px 0px;
  }
  .crumbsBody{
    margin: 15px 12px;
  }
  .crumbsTopLeft{
    margin: 15px 0px;
  }
  .crumbsList{
    float: right;
    margin: 15px 0px;
    display: inline-block;
  }
  .crumbsFit{
    float: right;
    margin: 15px 20px;
    display: inline-block;
  }
</style>
<style lang="less" scoped>
  @import url("../base.less");
</style>