<template>
    <div class="dati information-table">
      <div class="lineInformation">线路信息</div>
      <a-table :columns="columns"
               :pagination="{ pageSize: 5 }"
               :dataSource="lineList"
                class="lineInformationTable"
      >
        <span slot="id" slot-scope="text,record,index">
          {{index+1}}
        </span>
        <span slot="time" slot-scope="text,record,index">
          <a-tag color="green" :key="index" >
            {{secondsToHour(text)}}
          </a-tag>
        </span>
        <span slot="distance" slot-scope="text,record,index">
          {{text/1000}}
        </span>
        <span slot="action" slot-scope="text,record,index">
          <a href="javascript:;" @click="showDetail(record)">详情</a>
        </span>
      </a-table>
       <!--弹框-->
      <a-modal title="详情" centered :footer="null" v-model="visible" width="533px" @ok="handleOk">
        <a-row>
          <a-col span="7">
            <div class="TopLocationDetailsRight">
              {{detailModal.beginSite}}
            </div>
          </a-col>
          <a-col span="10">
            <div class="TopLocationText">
              <!--<span class="TopLocationTime">2</span>
              小时
              <span class="TopLocationTime">7</span>
              分钟-->
              <span class="TopLocationTime">{{secondsToHour(detailModal.time)}}</span>
            </div>
          </a-col>
          <a-col span="7">
            <div class="TopLocationDetailsLeft">
              <!--深圳龙岗-->
              {{detailModal.endSite}}
            </div>
          </a-col>
          <a-col span="12">
            <div class="drivingInformation">
              <img src="/image/Scheduling/schedulingCar.png" class="drivingInformationImgCar" alt="">
              <span class="drivingInformationText">共{{detailList.length}}条车次</span>
            </div>
          </a-col>
          <a-col span="12">
            <div class="drivingMileage">
              <a-icon type="environment" class="drivingMileageImgEnvironment"/>
              <span class="drivingMileageText"><!--106KM-->{{detailModal.distance}}KM</span>
            </div>
          </a-col>
          <a-col span="24">
            <div class="footTable">
              <a-table
                :bordered="bordered"
                :columns="columnsTable"
                :dataSource="detailList"
                :pagination="{ pageSize: 50 }"
                :scroll="{ y: 240 }"
                size="small"
              />
            </div>
          </a-col>
        </a-row>
      </a-modal>
    </div>
</template>

<script>
  import {secondsToHour} from '@/views/application/car/api/util.js'
  import {getAction} from "@/api/manage";

  export default {
    name: 'informationRouteTable',
    components:{

    },
    data() {
      return {
        secondsToHour,
        visible :false,
        data,
        columns,
        dataTable,
        columnsTable,
        bordered:true,
        detailModal : {
            beginSite : '广州黄埔',
        },
        detailList : [],

        url: {
          detail: '/application/car/scheduling/getLineDetail'
        }
      };
    },
    props: {
      lineList: {
        type: Object,
        default: () => []
      }
    },
    methods:{
      showDetail(record){
        var that = this;
        that.detailModal.beginSite = record.startSite;
        that.detailModal.endSite = record.endSite;
        that.detailModal.time = record.time;
        that.detailModal.distance = record.distance / 1000;
        var params = {id : record.schedulingId,vehicleid : record.vehicleid}
        getAction(that.url.detail,params).then(res =>{
          if(res.success){
            that.detailList =  res.result;
          }
        })
        this.visible = true;
      },
    },

  }
  const columns = [
    {
      key: 'id',
      dataIndex: 'id',
      title: '序号',
      align :'center',
      slots: { title: 'id' },
      scopedSlots: { customRender: 'id' },
    },
    {
      title: '始发地',
      dataIndex: 'startSite',
      align :'center',
      key: 'startSite',
    },
    {
      title:'目的地',
      dataIndex:'endSite',
      align :'center',
      key:'endSite',
    },
    {
      title: '时间',
      key: 'time',
      align :'center',
      dataIndex: 'time',
      scopedSlots: { customRender: 'time' },
    },
    {
      title: '排班方式',
      dataIndex: 'gender',
      align :'center',
      key: 'gender',
    },
    {
      title: '线路里程（km）',
      dataIndex: 'distance',
      align :'center',
      key: 'distance',
      scopedSlots: { customRender: 'distance' },
    },
    {
      title: '车次信息',
      key: 'action',
      align :'center',
      scopedSlots: { customRender: 'action' },
    },
  ];
  const data = [
    {
      key: '1',
      name: '1',
      originatingPlace: '广州黄埔',
      Destination:'深圳龙岗',
      address: '按周重复',
      tags: ['2小时7分'],
      lineMileage:'106km',
    }
  ];
  const columnsTable = [
    {
      title: '车牌号',
      dataIndex: 'registrationNo',
      width: 140,
    },
    {
      title: '性质',
      dataIndex: 'property',
      width: 140,
    },
    {
      title: '发车时间',
      dataIndex: 'startTime',
    },
    {
      title: '到站时间',
      dataIndex: 'endTime',
    },
  ];
  const dataTable = [];
  for (let i = 0; i < 4; i++) {
    dataTable.push({
      key: i,
      registrationNo: `粤54568`,
      property: 32,
      // timeDeparture: `Park Lane no. ${i}`,
      startTime: `12:00`,
      endTime: ` 18:00`,
    });
  }

</script>
<style lang="less" scoped>
  .dati{
    height: 448px;
    margin-top: 12px;
    border:1px solid rgba(232,232,232,1);
    border-radius:8px;
    padding: 14px 15px 0px 15px;
  }
  .lineInformation{
    font-size:18px;
    font-family:Microsoft YaHei;
    color:rgba(51,51,51,1);
    padding-bottom: 12px;
  }
  .TopLocationDetailsLeft , .TopLocationDetailsRight{
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  .TopLocationText{
    text-align: center;
    font-size:10px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(20,163,250,1);
    width: 200px;
    height: 40px;
    line-height: 40px;
    background: #ffffff url(/image/Scheduling/SchedulingBg.png) no-repeat center;
  }
  .TopLocationTime{
    font-size:22px;
  }
  .TopLocationDetailsLeft{
    float: right;
  }
  .drivingMileage{
    float: right;
    margin: 2px 0px;
  }
  .drivingInformation{
    height: 24px;
    line-height: 24px;
    display: inline-block;
    margin: 2px 0px;
  }
  .drivingInformationImgCar{
    width: 26px;
    height: 24px;
    margin: -2px 6px 0px 0px;
  }
  .drivingInformationText{
    height: 24px;
    line-height: 24px;
    display: inline-block;
    font-size:15px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(178,196,219,1);
  }
  .drivingMileageText{
    font-size:15px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(102,102,102,1);
  }
  .drivingMileageImgEnvironment{
    color: #3BB9F1;
    font-size: 16px!important;
  }
  .footTable{
    margin-top: 10px;
    border-top: #E8E8E8 1px solid;
  }
</style>

<style lang="less">
  .information-table {
    .ant-table-small {
      border: 0 !important ;
      border-radius: 4px;
    }
    .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td{
      border: 0!important;
    }
    .ant-table-small.ant-table-bordered .ant-table-content{
      border: 0!important;
    }
    .ant-table-pagination.ant-pagination{
      position: absolute;
    }
    .ant-table-scroll{
      display: inline-block;
      width: 100%;
      height: 329px;
    }
  }
</style>
