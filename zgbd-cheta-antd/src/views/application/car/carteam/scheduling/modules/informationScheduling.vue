<template>
    <div class="dati">
      <!--排班信息-->
      <a-row>
        <!--<a-col span="24">-->
          <!--<div class="topLeft">-->
            <!--<div class="topLeftSelect">-->
              <!--<a-button type="primary" ghost>周</a-button>-->
            <!--</div>-->
            <!--<div class="topLeftData topLeftDataWeek">-->
              <!--<a-week-picker  style="width: 124%" @change="onChange" placeholder="Select week" />-->
            <!--</div>-->
          <!--</div>-->
        <!--</a-col>-->
        <a-col :xs="{ span: 24}" :md="{ span: 24}" :lg="{ span: 24}" :xl="{ span: 5}">
          <div class="bodyLeft">
            <a-tabs defaultActiveKey="2" @change="callback">
              <!--<a-tab-pane tab="人员排班" key="1">-->
                <!--&lt;!&ndash;人员排班&ndash;&gt;-->
                <!--<informationSchedulingTablePersonnel :driverList="config.driverList" ref="informationSchedulingTablePersonnel"></informationSchedulingTablePersonnel>-->
              <!--</a-tab-pane>-->
              <a-tab-pane tab="车辆排班" key="2" forceRender>
                <!--车辆排班-->
                <informationSchedulingTableCar @changesValue="changesValue"  :carList="config.carList" ref="informationSchedulingTableCar" @message="message" @infoId="infoId"></informationSchedulingTableCar>
              </a-tab-pane>
            </a-tabs>
          </div>
        </a-col>
        <a-col :xs="{ span: 24}" :md="{ span: 24}" :lg="{ span: 24}" :xl="{ span: 19}">
          <!--<div class="cheta-schdule-img">-->
            <!--<informationSchedulingTableGunter @reLoad="init" :list="config.lineList" :listCount="config.listCount"/>-->
          <!--</div>-->
          <div>
            <informationSchedulingTableGunters ref="informationSchedulingTableGunter"  :names = 'names'></informationSchedulingTableGunters>
          </div>
        </a-col>
      </a-row>
    </div>
</template>

<script>
  import {getAction} from "@/api/manage";
  import informationSchedulingTablePersonnel from './modules/informationSchedulingTablePersonnel'//人员排班
  import informationSchedulingTableCar from './modules/informationSchedulingTableCar'//车辆排班
  import informationSchedulingTableGunter from './modules/informationSchedulingTableGunter'//甘特图
  import informationSchedulingTableGunters from './modules/informationSchedulingTableGunters'
  export default {
    name: 'informationScheduling',
    components:{
      informationSchedulingTablePersonnel,
      informationSchedulingTableCar,
      informationSchedulingTableGunter,
      informationSchedulingTableGunters,
    },
    props: {
      config: {
        type: Object,
        default: () => {
          return {
            listCount : 0,
            driverList : [],
            carList : [],
            lineList : [],
          }
        }
      },
    },
    created(){
    },
    data(){
      return{
        timeSelect: 'week',
        valueList:[],
        names:'',
      }
    },
    methods:{
      init(params){
        debugger
        var that = this;
        getAction('/application/car/scheduling/getCarListPage',params).then(res =>{
          if(res.success){
            that.config.driverList = res.result.userlist
            that.config.carList = res.result.carlist
            that.config.lineList = res.result.schedulingItemList
            that.config.listCount = res.result.schedulingCount
          }else{
            console.log("查询错误");
          }
        })
      },
      onChange(date, dateString) {
        var str = dateString.split('-');
        var year = str[0];
        var week = str[1].substring(0,str[1].length-1);
        this.init({year: year,week : week});
      },
      message(list) {
        this.valueList = list
        debugger
      },
      infoId(value){
        debugger
        this.names = value
      },
      callback(key) {
        console.log(key);
      },
    },
  }
</script>

<style scoped>
  .topLeft div{
    display: inline-block;
    margin-right: 10px;
  }
  .topLeftDataMonth .topLeftDataWeek{
    position: absolute;
  }
  .topLeftDataMonth{
    display: none;
    visibility: hidden;
  }
  .bodyLeft{
    border:1px solid rgba(232,232,232,1);
    border-radius:3px 3px 3px 3px;
    margin: 10px 0px;
    height: 710px;
  }
  .topLeft{
    height: 35px;
    line-height: 35px;
  }
  .cheta-schdule-img{
    width: 100%;
    height: 100%;
  }
  .cheta-schdule-img img{
    width: 100%;
    height: 473px;
  }

</style>

<style lang="less">
 .bodyLeft .ant-tabs-nav .ant-tabs-tab{
    margin: 0px!important;
  }
 .ant-tabs-bar{
   margin: 0 0 12px 0;
 }
</style>