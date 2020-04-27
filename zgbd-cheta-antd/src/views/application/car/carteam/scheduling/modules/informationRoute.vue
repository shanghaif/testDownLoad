<template>
    <div>
      <!--线路信息-->
      <a-row>
        <a-col span="24">
          <!--<div class="topLeft">-->
            <!--<div class="topLeftSelect">-->
              <!--<a-button type="primary" ghost>周</a-button>-->
            <!--</div>-->
            <!--<div class="topLeftData topLeftDataWeek">-->
              <!--<a-week-picker  style="width: 124%" @change="onChange" placeholder="Select week" />-->
            <!--</div>-->
          <!--</div>-->
        </a-col>
        <a-col :xs="{ span: 24}" :md="{ span: 24}" :lg="{ span: 24}" :xl="{ span: 4}">
          <div>
            <schedulingDetailsCopy :config="runUnitConfig" ref="schedulingDetailsCopy"></schedulingDetailsCopy>
          </div>
          <div>
            <schedulingDetailsCopy :config="runConfig" ref="schedulingDetailsCopy"></schedulingDetailsCopy>
          </div>
          <div>
            <schedulingDetailsCopy :config="carConfig" ref="schedulingDetailsCopy"></schedulingDetailsCopy>
          </div>
          <div>
            <schedulingDetailsCopy :config="driverConfig" ref="schedulingDetailsCopy"></schedulingDetailsCopy>
          </div>
        </a-col>
        <!--<a-col span="1"></a-col>-->
        <a-col style="margin-left: 10px" :xs="{ span: 24}" :md="{ span: 24}" :lg="{ span: 24}" :xl="{ span: 19}">
          <informationRouteTable :lineList="lineList" ref="informationRouteTable"></informationRouteTable>
        </a-col>
      </a-row>
    </div>
</template>

<script>
  import {getAction} from "@/api/manage";
  import moment from "moment"
  import schedulingDetailsCopy from './schedulingDetailsCopy'
  import informationRouteTable from './informationRouteTable'
  export default {
    name: 'informationRoute',
    components:{
      schedulingDetailsCopy,
      informationRouteTable,
    },
    props: {
      lineConfig: {
        type: Object,
        default: () => {}
      }
    },
    mounted(){
      var that = this;
      that.carConfig.num = that.lineConfig.carCount;
      that.carConfig.value = that.lineConfig.carCount;
      that.driverConfig.num = that.lineConfig.driverCount;
      that.driverConfig.value = that.lineConfig.driverCount;
    },
    data(){
      return {
        that : this,
        runUnitConfig : {
          title: '运单数(个)',
          num: 0,
          value : 0,
        },
        runConfig : {
          title: '运行线路(条)',
          num: 0,
          value : 15,
        },
        carConfig : {
          title: '调用车辆(辆)',
          num: 20,
          value : 22,
        },
        driverConfig : {
          title: '出勤司机(位)',
          num: 18,
          value : 15,
        },
        //线路表格数据
        lineList : [],
        url : '/application/car/scheduling/getLineInfo',

        timeSelect: 'week',
        directionSelect:'right',
      };
    },
    created(){
      this.init({pageNo:1,pageSize:10});
    },
    methods:{
      init(params){
        var that = this;
        getAction(that.url,params).then(res =>{
          that.lineList =  res.data;
          that.runConfig.num = res.data.length;
          that.runConfig.value = res.data.length;
        })
      },
      onChange(date, dateString) {
        var str = dateString.split('-');
        var year = str[0];
        var week = str[1].substring(0,str[1].length-1);
        this.init({pageSize:10,pageNo:1,year: year,week : week});
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
  .topLeft{
    height: 35px;
  line-height: 35px;
  }
</style>